import React from "react";
import {Card} from 'react-bootstrap/'


// BookSearchList renders a bootstrap list item
export function BookSearchList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookSearchItem({
  title,
  authors,
  description,
  image,
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
            <a href={link}>check it out</a>
            <img src={image}></img>
        </Card.Body>
      </Card>
    </li>
  );
}