import Centrator from "../components/Centrator";
import { artContainer } from "./styles.css";

interface ArtProps {
  art: string;
}

export default function ArtContainer({ art }: ArtProps) {
  return (
      <pre>
        <code className={artContainer}>{art}</code>
      </pre>
  );
}
