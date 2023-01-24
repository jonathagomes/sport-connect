import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { darkTheme, GlobalStyles } from "stitches/stitches.config";

export default function MyApp({ Component, pageProps }: AppProps) {
  GlobalStyles();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: darkTheme.className,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
