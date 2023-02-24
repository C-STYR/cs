import { style } from "@vanilla-extract/css";
import theme from "../../styles/theme";

export const blogBase = style({
  display: "flex",
  flexDirection: "column",
  margin: 60,
  color: "white",
  "@media": {
    "screen and (max-width: 768px)": {
      maxWidth: "100%",
      marginLeft: 30,
      marginRight: 30,
      marginTop: 60,
    },
  },
});

export const linkBase = style({
  color: theme.color,
  textDecoration: "none",
  fontSize: 20,
  marginBottom: 30,
});

export const blogWrapper = style({
  marginLeft: 60,
  marginBottom: 100,
  maxWidth: "60%",
  lineHeight: 1.5,
  fontSize: 18,
  color: theme.paleGrey,

  "@media": {
    "screen and (min-width: 1440px)": {
      maxWidth: "85%",
    },

    "screen and (max-width: 768px)": {
      maxWidth: "100%",
      marginLeft: 30,
      marginRight: 10,
    },
  },
});

export const blogH1 = style({
  color: theme.pink,
});
