import React, { useState } from "react";
import BuscaLivro from "../componentes/BuscaLivro/BuscaLivro";
import Navegacao from "../componentes/Navegacao/Navegacao";
import { Breadcrumbs, Container, Typography } from "@material-ui/core";
import Estante from "../componentes/Estante/Estante";
import useEstantes from "../hooks/useEstantes";

function Busca() {
  const [livroPesquisa, setPesquisa] = useState({ pesquisa: "" });
  const estantes = useEstantes();

  function pesquisar(dados) {
    setPesquisa({ ...livroPesquisa, ...dados });
  }

  return (
    <Container fixed>
      <Navegacao />
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="textPrimary">Estante de livros / Busca</Typography>
      </Breadcrumbs>
      <BuscaLivro aoPesquisar={pesquisar} />
      <Estante estantes={estantes} buscaTitulo={livroPesquisa.pesquisa} />
    </Container>
  );
}

export default Busca;
