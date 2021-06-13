import React from "react";
import Navegacao from "../componentes/Navegacao/Navegacao";
import { Breadcrumbs, Container, Typography } from "@material-ui/core";

function Readme() {
  return (
    <Container fixed>
      <Navegacao />
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="textPrimary">Estante de livros / Readme</Typography>
      </Breadcrumbs>
      <h2>## Search terms </h2>
      <p>
        'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen',
        'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business',
        'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook',
        'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital
        Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything',
        'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future',
        'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey',
        'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction',
        'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate',
        'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production',
        'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling',
        'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale',
        'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality',
        'Web Development', 'iOS'
      </p>
    </Container>
  );
}

export default Readme;
