import { useEffect, useState } from "react";
import { getAll } from "../api/BooksAPI";

const useLivros = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const getLivros = async () => {
      let todosLivros = await getAll();
      setLivros(!todosLivros.error ? todosLivros : []);
    };
    getLivros();
  }, [livros]);

  return livros;
};

export default useLivros;
