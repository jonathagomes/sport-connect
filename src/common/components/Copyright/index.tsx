import Link from "next/link";
import Typography from "@mui/material/Typography";

const Copyright = () => (
  <Typography
    variant="body2"
    color="text.secondary"
    align="center"
    sx={{ mt: 8, mb: 4 }}
  >
    Copyright &copy;
    <Link color="inherit" href="/">
      Sport Connect
    </Link>{" "}
    2023
    {"."}
  </Typography>
);

export { Copyright };
