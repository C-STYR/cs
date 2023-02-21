import { client } from "./config";

export const fetchData = async (queryString: string, options = {}) => {
  try {
    const result = await client.fetch(queryString, options);
    if (!result) throw new Error("No result returned from query!");
    return result;
  } catch (err) {
    console.error(err);
  }
};