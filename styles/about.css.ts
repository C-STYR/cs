import { style } from "@vanilla-extract/css";
import theme from "./theme";

export const section = style({
  marginLeft: 70,
  marginTop: 60,
});

export const p = style({
  fontSize: 20,
});

export const link = style({
  textDecoration: "none",
  color: theme.aqua,
});
