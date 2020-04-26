import React from "react";
import {Card, Button} from 'react-bootstrap/'


// Saved Book List renders a bootstrap list item
export function SavedBookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function SavedBook({
  title,
  authors,
  description,
  image = "https://placehold.it/300x300",
  link
}) {
  return (
    <li className="list-group-item">
      <Card>
          <Card.Title>
            <h2>{title}</h2>
            <h3>By: {authors}</h3>
        </Card.Title>
        <Card.Body>
            <p>{description}</p>
            <img src={image}></img>
            <Button href={link} target='_blank'>View</Button>
            <Button href='#' target='_blank'>Save</Button>
        </Card.Body>
      </Card>
    </li>
  );
}