import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Copyright } from "src/common";

const SignupLayout = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
        <Box
          component="form"
          onSubmit={() => window.alert("Cadastro ainda sendo implementado")}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Nome"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Sobrenome"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="acceptedTerms" color="primary" />}
                label={
                  <>
                    <Typography
                      variant="caption"
                      component="p"
                      sx={{ fontWeight: "bold" }}
                    >
                      Termos, Condições e Política de Privacidade
                    </Typography>
                    <Typography variant="caption">
                      Li os{" "}
                      <Link href="/termos-e-condicoes" target="_blank">
                        <Typography
                          variant="caption"
                          component="span"
                          sx={{ color: "#007fff" }}
                        >
                          Termos e Condições
                        </Typography>
                      </Link>{" "}
                      de uso e a{" "}
                      <Link href="/politica-de-privacidade" target="_blank">
                        <Typography
                          variant="caption"
                          component="span"
                          sx={{ color: "#007fff" }}
                        >
                          Política de Privacidade
                        </Typography>
                      </Link>{" "}
                      e autorizo o processamento dos meus dados pessoais para o
                      fornecimento deste serviço na web
                    </Typography>
                  </>
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Criar conta
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login">
                Já possui uma conta?{" "}
                <Typography
                  variant="body1"
                  component="span"
                  sx={{ color: "#007fff", fontWeight: "bold" }}
                >
                  Faça o login
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
};

export { SignupLayout };
