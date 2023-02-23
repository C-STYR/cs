import ArtContainer from "../components/ArtContainer";
import { DragonFly } from "../components/ascii-art/DragonFly";
import { artOuter } from "../components/styles.css";

export default function Home() {
  return (
    <div className={ artOuter }>
      <ArtContainer art={DragonFly} />
    </div>
  );
}
