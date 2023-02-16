import { style } from "@vanilla-extract/css";
import theme from "./theme";

export const section = style({
  marginLeft: 70,
  marginTop: 60,
  maxWidth: 900,
  '@media': {
    'screen and (min-width: 768px)': {
        marginLeft: 20,
    }
  }
});

export const p = style({
  fontSize: 20,
//   marginBottom: 160,
});

export const link = style({
  textDecoration: "none",
  color: theme.aqua,
});

export const pinkWords = style({
  color: theme.pink,
});
