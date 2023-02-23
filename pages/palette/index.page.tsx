import PaletteBox from "./PaletteBox";
import {
  palePink,
  pinkBox,
  container,
  yellowBox,
  aquaBox,
  outer,
  codeBG,
  paleGrey,
  codeSpanBG,
  paleAqua,
  paleYellow,
} from "./palette.css";

export default function Palette() {
  return (
    <div className={outer}>
      <div className={container}>
        <PaletteBox name="pink" className={pinkBox} />
        <PaletteBox name="palePink" className={palePink} />
      </div>
      <div className={container}>
        <PaletteBox name="yellow" className={yellowBox} />
        <PaletteBox name="paleYellow" className={paleYellow} />
      </div>

      <div className={container}>
        <PaletteBox name="aqua" className={aquaBox} />
        <PaletteBox name="paleAqua" className={paleAqua} />
      </div>
      <div className={container}>
        <PaletteBox name="codeBG" className={codeBG} />
        <PaletteBox name="codeSpanBG" className={codeSpanBG} />
        <PaletteBox name="paleGrey" className={paleGrey} />
      </div>
    </div>
  );
}
