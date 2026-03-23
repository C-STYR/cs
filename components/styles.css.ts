import { keyframes, style } from "@vanilla-extract/css";

export const slowFadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
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

