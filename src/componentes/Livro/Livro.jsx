import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
  Fab,
  makeStyles,
  Menu,
  MenuItem,
  Popover,
  Typography,
} from "@material-ui/core";
import { update } from "../../api/BooksAPI"; 
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 245,
    padding: theme.spacing(1),
  },
  paperPopover: {
    width: 700,
    padding: theme.spacing(1),
  },
  control: {
    padding: theme.spacing(2),
  },
  popover: {
    pointerEvents: "none",
  },
}));

function Livro({ livros, estantes }) {
  const classes = useStyles();

  const [anchorElEstante, setAnchorElEstante] = useState(null);
  const [menuLivro, setMenuLivro] = useState(null);

  const [anchorElPopover, setAnchorElPopover] = useState(null);
  const [descricaoLivro, setDescricaoLivro] = useState(null);

  const [livrosEstante, setLivrosEstante] = useState(null);

  const handlePopoverOpen = (event, livroId) => {
    setAnchorElPopover(event.currentTarget);
    setDescricaoLivro(livroId);
  };
  const handlePopoverClose = () => {
    setAnchorElPopover(null);
    setDescricaoLivro(null);
  };
  const handleClick = (event, livroId) => {
    setAnchorElEstante(event.currentTarget);
    setMenuLivro(livroId);
  };
  const estanteApi = {
    Lendo: "currentlyReading",
    "Quero Ler": "wantToRead",
    Lidos: "read",
  };
  const handleClose = (event) => {
    setAnchorElEstante(null);
    setMenuLivro(null);
    let livro = JSON.parse(event.currentTarget.getAttribute("livro"));
    let estante = event.currentTarget.getAttribute("estante");

    console.log(livro);
    console.log(estante);

    if (!livro || !estante) {
      return false;
    }

    const updateLivros = async () => {
      const updateLivros = await update(livro, estanteApi[estante]);
      setLivrosEstante(updateLivros);
    };
    updateLivros();
  };
 

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={8}>
          {livros.map((livro, index) => (
            <Grid key={"grid" + index} item>
              <Paper key={"paper" + index} className={classes.paper}>
                <h3>{livro.title}</h3>
                <div>
                  <img
                    src={livro.imageLinks.thumbnail}
                    width="100"
                    height="150"
                  />
                </div>
                <br />
                <small>
                  <strong>Autores: </strong>
                  {livro.authors.toString()}
                </small>
                <br />
                <small>
                  <strong>Publicado em: </strong>
                  {livro.publishedDate}
                </small>
                <br />
                <br />
                <span>
                  <Typography
                    aria-owns={
                      descricaoLivro === livro.id
                        ? "mouse-over-popover" + livro.id
                        : undefined
                    }
                    aria-haspopup="true"
                    onMouseEnter={(event) => handlePopoverOpen(event, livro.id)}
                    onMouseLeave={handlePopoverClose}
                  >
                    {livro.description
                      ? livro.description.substr(0, 50) + "..."
                      : "Sem descrição"}
                  </Typography>
                  <Popover
                    id={"mouse-over-popover" + livro.id}
                    className={classes.popover}
                    classes={{
                      paper: classes.paperPopover,
                    }}
                    open={descricaoLivro === livro.id}
                    anchorEl={anchorElPopover}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Typography>
                      {livro.description ? livro.description : "Sem descrição"}
                    </Typography>
                  </Popover>
                </span>
                <Fab
                  aria-controls="fade-menu"
                  aria-haspopup="true"
                  onClick={(event) => handleClick(event, livro.id)}
                  color="primary"
                  size="small"
                  className={classes.fab}
                >
                  <ArrowDropDownIcon />
                </Fab>
                <Menu
                  id={"fade-menu" + livro.id}
                  anchorEl={anchorElEstante}
                  keepMounted
                  open={menuLivro === livro.id}
                  onClose={handleClose}
                >
                  {estantes.map((estante, indexEstante) => (
                    <MenuItem
                      livro={JSON.stringify(livro)}
                      estante={estante}
                      key={indexEstante + livro.id}
                      selected={estanteApi[estante] === livro.shelf}
                      onClick={handleClose}
                    >
                      {estante}
                    </MenuItem>
                  ))}
                </Menu>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Livro;
