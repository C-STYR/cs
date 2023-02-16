import { CS } from "../types";
import Box from "./Box";
import { paletteContainer } from "./componentStyles.css";

const PaletteBox: CS = ({ name, ...props }) => (
  <div className={paletteContainer}>
    <Box {...props} />
    {name}
  </div>
);

export default PaletteBox;
