import { globalStyle, style } from "@vanilla-extract/css"
import theme from "./theme"

globalStyle("body", {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: theme.bg,
    margin: 0,
    color: theme.color
})


export const centerArt = style({
  display: "flex",
  justifyContent: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      overflow: "hidden",
    },
  },
});
