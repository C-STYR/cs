import { style } from "@vanilla-extract/css";
import theme from "../../styles/theme";

export const section = style({
  marginLeft: 60,
  marginRight: 30,
  marginTop: 60,
  maxWidth: 900,
  "@media": {
    "screen and (max-width: 768px)": {
      margin: 30,
    },

    "screen and (min-width: 1440px)": {
      // marginLeft: "20%",
    },
  },
});

export const p = style({
  marginBottom: 30,
});

export const body = style({
  fontSize: 20,
  fontWeight: "lighter",
});

export const link = style({
  textDecoration: "none",
  fontWeight: "normal",
  color: theme.aqua,
});

export const btn = style([
  link,
  {
    backgroundColor: theme.bg,
    border: "none",
    fontSize: 20,
    padding: 0,
  },
]);

export const pinkWords = style({
  color: theme.pink,
  fontWeight: "normal",
});
