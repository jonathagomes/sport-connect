import { styled } from "stitches/stitches.config";
import { useTheme } from "next-themes";

const Button = styled("button", {});

export default function IndexPage() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div>
      <h1>The current theme is {theme == "dark" ? "dark" : "light"} </h1>
      <Button onClick={toggleTheme}>Change Theme</Button>
    </div>
  );
}
