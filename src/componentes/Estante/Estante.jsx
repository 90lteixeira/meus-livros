import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import Livro from "../Livro/Livro";
import useLivros from "../../hooks/useLivros";
import useLivrosPesquisa from "../../hooks/useLivrosPesquisa";

function Estante({ estantes, buscaTitulo }) {
  const livros = useLivros();
  const livrosPesquisa = useLivrosPesquisa(buscaTitulo);
  const estanteApi = {
    Lendo: "currentlyReading",
    "Quero Ler": "wantToRead",
    Lidos: "read",
  };

  function getEstantes() {
    if (typeof buscaTitulo != "undefined") {
      return ["Livros encontrados"];
    }
    return estantes;
  }

  function getLivros(estante) {
    if (typeof buscaTitulo != "undefined") {
      return livrosPesquisa ? livrosPesquisa : [];
    }

    let livrosEstante = [];
    livros.forEach(function (livro) {
      if (livro.shelf === estanteApi[estante]) {
        livrosEstante.push(livro);
      }
    });

    return livrosEstante;
  }

  return (
    <>
      {getEstantes().map((estante, index) => (
        <Grid key={index} container spacing={3}>
          <Grid item xs={12}>
            <Paper>
              <h2>
                <CollectionsBookmarkIcon /> {estante}
              </h2>
            </Paper>
            <Livro livros={getLivros(estante)} estantes={estantes} />
          </Grid>
        </Grid>
      ))}
    </>
  );
}

export default Estante;
