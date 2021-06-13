import { useEffect, useState } from "react";
import { search } from "../api/BooksAPI";

const useLivrosPesquisa = (buscaTitulo) => {
  const [livrosPesquisa, setLivrosPesquisa] = useState([]);

  useEffect(() => {
    const getLivrosPesquisa = async () => {
      if (!buscaTitulo) {
        return false;
      }
      console.log(buscaTitulo);
      let livrosPesquisa = await search(buscaTitulo);
      setLivrosPesquisa(!livrosPesquisa.error ? livrosPesquisa : []);
    };
    getLivrosPesquisa();
  }, [buscaTitulo]);

  return livrosPesquisa;
};

export default useLivrosPesquisa;
