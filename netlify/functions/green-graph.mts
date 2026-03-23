import type { Config } from "@netlify/functions";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
const REPO_OWNER = "C-STYR";
const REPO_NAME = "green_graph";
const FILE_PATH = "log.json";
const BRANCH = "main";
const COMMIT_AUTHOR = {
  name: "Cole Styron",
  email: "colestyron@gmail.com", 
};

const API_BASE = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;

const headers = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  "Content-Type": "application/json",
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

async function getCurrentFile(): Promise<{ sha: string; content: string }> {
  const res = await fetch(`${API_BASE}?ref=${BRANCH}`, { headers });
  if (!res.ok) throw new Error(`Failed to get file: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return {
    sha: data.sha,
    content: Buffer.from(data.content, "base64").toString("utf-8"),
  };
}

async function pushCommit(sha: string, commitNumber: number): Promise<string> {
  const timestamp = new Date().toISOString();
  const newContent = JSON.stringify({ last_updated: timestamp }, null, 2);
  const encoded = Buffer.from(newContent).toString("base64");

  const body = JSON.stringify({
    message: `chore: daily update ${commitNumber} [${timestamp}]`,
    content: encoded,
    sha,
    branch: BRANCH,
    author: COMMIT_AUTHOR,
    committer: COMMIT_AUTHOR,
  });

  const res = await fetch(API_BASE, { method: "PUT", headers, body });
  if (!res.ok) throw new Error(`Failed to push commit ${commitNumber}: ${res.status} ${await res.text()}`);

  const data = await res.json();
  // Return the new SHA for the next commit in the chain
  return data.content.sha;
}

export default async function handler(_req: Request) {
  const commitCount = Math.floor(Math.random() * 4) + 5; // 5–8
  console.log(`Starting green_graph run: ${commitCount} commits`);

  try {
    let { sha } = await getCurrentFile();

    for (let i = 1; i <= commitCount; i++) {
      sha = await pushCommit(sha, i);
      console.log(`Commit ${i}/${commitCount} pushed. New SHA: ${sha}`);

      // Small delay between commits to avoid any race conditions
      if (i < commitCount) {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }

    console.log(`Done. ${commitCount} commits pushed to ${REPO_NAME}.`);
    return new Response(JSON.stringify({ success: true, commits: commitCount }), { status: 200 });
  } catch (err) {
    console.error("green_graph error:", err);
    return new Response(JSON.stringify({ success: false, error: String(err) }), { status: 500 });
  }
}

// 10:00 AM Pacific = 18:00 UTC (PST, UTC-8)
// During PDT (UTC-7), this fires at 9am Pacific — adjust to "0 17 * * *" in summer if you care
export const config: Config = {
    schedule: "0 18 * * 1-5",
};