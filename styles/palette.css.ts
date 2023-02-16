import { style } from "@vanilla-extract/css";
import theme from "./theme";

export const container = style({
  display: "flex",
  justifyContent: "center",
  marginTop: 100,
});

export const boxStyles = style({
  height: 100,
  width: 100,
  marginBottom: 5,
  borderRadius: '6px',
  color: theme.color,
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
