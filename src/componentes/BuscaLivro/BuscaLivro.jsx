import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "60ch",
    },
  },
}));

function BuscaLivro({ aoPesquisar }) {
  const classes = useStyles();
  const [pesquisa, setPesquisa] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          aoPesquisar({ pesquisa });
        }}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => {
            setPesquisa(e.target.value);
          }}
          name="pesquisa"
          id="pesquisa"
          label="Digite aqui sua pesquisa"
        />
        <div>
          <Button
            type="submit"
            size="small"
            variant="contained"
            color="primary"
          >
            <ImageSearchIcon fontSize="small" /> Buscar livro
          </Button>
        </div>
      </form>
    </>
  );
}

export default BuscaLivro;
