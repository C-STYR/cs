import PaletteBox from "../components/PaletteBox";
import { palePink, pinkBox, container, yellowBox, aquaBox } from "../styles/palette.css";

export default function Palette() {
  return (
    <>
      <div className={container}>
        <PaletteBox name="yellow" className={yellowBox} />
        <PaletteBox name="pink" className={pinkBox} />
        <PaletteBox name="aqua" className={aquaBox} />
        <PaletteBox name="pale pink" className={palePink} />
      </div>
    </>
  );
}
