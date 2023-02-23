import { CS } from "../../types";
import Box from "../../components/Box";
import { paletteBox } from "./palette.css";

const PaletteBox: CS = ({ name, ...props }) => (
  <div className={paletteBox}>
    <Box {...props} />
    {name}
  </div>
);

export default PaletteBox;
