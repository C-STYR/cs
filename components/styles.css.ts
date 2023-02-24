import { keyframes, style } from "@vanilla-extract/css";
import theme from "../styles/theme";

export const mainNav = style({
  display: "flex",
  justifyContent: "flex-start",
  marginLeft: 60,
  marginTop: 20,
  "@media": {
    "screen and (max-width: 768px)": {
      marginLeft: 30,
    },

    "screen and (min-width: 1440px)": {
      marginTop: 60,
    },
  },
});

export const navContainer = style({
  display: "flex",
});

export const navItem = style({
  marginRight: 20,
  marginTop: 10,
});

export const navLink = style({
  color: theme.palePink,
  fontSize: 22,
  textDecoration: "none",
});

export const shell = style({
  width: "100%",
  height: 200,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "20%": { opacity: 1 },
  "60%": { opacity: 1 },
  "80%": { opacity: 0 },
  "100%": { opacity: 0 },
});

export const slowFadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const emailChunk = style({
  display: "flex",
  fontSize: 36,
  width: 300,
  color: theme.paleAqua,
  justifyContent: "center",
  animationName: fadeIn,
  animationDuration: "9200ms",
  animationIterationCount: 1,
  animationTimingFunction: "linear",
});

export const centratorOuter = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

export const centratorInner = style({
  maxWidth: 1240,
  width: "100%",

  "@media": {
    "screen and (min-width: 1440px)": {
      width: 1240,
    },
  },
});

export const artContainer = style({
  fontSize: 10,
  animationName: slowFadeIn,
  opacity: 0,
  animationDuration: "30s",
  animationIterationCount: "infinite",
});

