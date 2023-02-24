import ArtContainer from "../components/ArtContainer";
import { DragonFly } from "../components/ascii-art/DragonFly";
import { centerArt } from "../styles/app.css";

export default function Home() {
  return (
    <div>
      <div className={centerArt}>
        <ArtContainer art={DragonFly} />
      </div>
    </div>
  );
}
