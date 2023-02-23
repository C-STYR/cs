import { getDocumentById } from "../../lib/sanity/utils";
import Refractor from "react-refractor";
import json from "refractor/lang/json";
Refractor.registerLanguage(json);

export async function getStaticProps() {
  const result = await getDocumentById("d527f583-5764-436d-8a6d-944d0c44a84c");

  return {
    props: {
      result,
    },
  };
}

export default function Expander({ result }) {
  const stringy = JSON.stringify(result, null, 2);

  return <Refractor language="json" value={stringy} />;
}
