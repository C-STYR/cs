import { style } from "@vanilla-extract/css";
import theme from "../../styles/theme";

export const paletteBox = style({
  display: "flex",
  flexDirection: "column",
  margin: 20,
  color: "white",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      margin: 8,
      fontSize: 12,
    },
  },
});

export const outer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: 100,
  "@media": {
    "screen and (max-width: 768px)": {
      marginTop: 20,
    },
  },
});

export const container = style({
  display: "flex",
  flexDirection: "row",
  width: "80%",

  "@media": {
    "screen and (max-width: 768px)": {
      marginTop: 0,
    },
  },
});

export const boxStyles = style({
  height: 100,
  width: 100,
  marginBottom: 5,
  borderRadius: "6px",
  color: theme.color,

  "@media": {
    "screen and (max-width: 768px)": {
      height: 40,
      width: 40,
      marginBottom: 8,
    },
  },
});

export const aquaBox = style([
  boxStyles,
  {
    backgroundColor: theme.aqua,
  },
]);

export const pinkBox = style([
  boxStyles,
  {
    backgroundColor: theme.pink,
  },
]);

export const palePink = style([
  boxStyles,
  {
    backgroundColor: theme.palePink,
  },
]);

export const yellowBox = style([
  boxStyles,
  {
    backgroundColor: theme.yellow,
  },
]);

export const paleYellow = style([
  boxStyles,
  {
    backgroundColor: theme.paleYellow,
  },
]);

export const codeBG = style([
  boxStyles,
  {
    backgroundColor: theme.codeBG,
  },
]);

export const paleGrey = style([
  boxStyles,
  {
    backgroundColor: theme.paleGrey,
  },
]);

export const paleAqua = style([
  boxStyles,
  {
    backgroundColor: theme.paleAqua,
  },
]);

export const codeSpanBG = style([
  boxStyles,
  {
    backgroundColor: theme.codeSpanBG,
  },
]);
