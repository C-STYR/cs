import { emailChunk, shell } from "./componentStyles.css";
export default function ContactBox() {
  const domain = "gmail.com";
  const at = "@";
  const name = "colestyron";

  return (
    <div className={shell}>
      <div className={emailChunk}>{name + at + domain}</div>
    </div>
  );
}
