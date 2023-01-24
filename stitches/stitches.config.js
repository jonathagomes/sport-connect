import { createStitches, createTheme, globalCss } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: "system-ui",
    },
    colors: {
      text: "hsl(206,10%,5%)",
      background: "white",
    },
    fontSizes: {},
  },
});

export const darkTheme = createTheme({
  colors: {
    text: "white",
    background: "hsl(206,10%,5%)",
  },
});

export const GlobalStyles = globalCss({
  body: {
    background: "$background",
    color: "$text",
  },
});
