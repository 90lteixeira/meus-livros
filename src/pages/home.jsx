import React from "react";
import Estante from "../componentes/Estante/Estante";
import Navegacao from "../componentes/Navegacao/Navegacao";
import { Breadcrumbs, Container, Typography } from "@material-ui/core";
import useEstantes from "../hooks/useEstantes";

function Home() {
  const estantes = useEstantes();

  return (
    <Container fixed>
      <Navegacao />
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="textPrimary">Estante de livros / Home</Typography>
      </Breadcrumbs>
      <Estante estantes={estantes} />
    </Container>
  );
}

export default Home;
