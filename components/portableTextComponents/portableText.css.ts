import { style } from "@vanilla-extract/css";
import theme from "../../styles/theme";

export const h1 = style({
  fontSize: 24,
  color: theme.pink,
});

export const subHeading = style({
  color: "white",
});

export const codeSpan = style({
  backgroundColor: theme.codeSpanBG,
  color: "white",
  paddingLeft: 5,
  paddingRight: 5,
  fontFamily: "'Ubuntu mono', monospace",
  borderRadius: "2px",
  fontSize: 16,
});

export const codeBlockOuter = style({
  width: "min-content",
  "@media": {
    "screen and (max-width: 768px)": {
      maxWidth: '90%',
    },
  }
});

export const link = style({
  color: theme.aqua,
  textDecoration: "none",
})
