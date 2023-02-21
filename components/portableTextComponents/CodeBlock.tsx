import Refractor from "react-refractor";

// Refractor is super-lean and all lang libs need to be imported discretely

import js from "refractor/lang/javascript";
import json from "refractor/lang/json";
import go from "refractor/lang/go";
import { codeBlockOuter } from "./portableText.css";

// ...then register the imported langs:
Refractor.registerLanguage(js);
Refractor.registerLanguage(json);
Refractor.registerLanguage(go);

interface CodeBlockProps {
  code: string;
  language: string;
}

export default function CodeBlock({code, language = "js"}: CodeBlockProps) {
    if (language === "golang") language = "go"
    return (
        <div className={ codeBlockOuter }>
            <Refractor language={language} value={code} />
        </div>
    )
}
