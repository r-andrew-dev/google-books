import React from "react";
import {Card, Button} from 'react-bootstrap/'



// Saved Book List renders a bootstrap list item
export function SavedBookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function SavedBook({
  saveID, 
  deleteSave,
  title,
  authors,
  description,
  image = "https://placehold.it/300x300",
  link, 
}) {
  console.log(authors)
  return (
    <li className="list-group-item">
      <Card className='m-3 p-2'>
      <Card.Title className="m-3 p-2">
            <h2>{title}</h2>
            <h3>By: {authors.join(", ")}</h3>
        </Card.Title>
        <Card.Body>
            <p>{description}</p>
            <img src={image}></img>
            <div className='mt-3 ml-1'>
            <Button href={link} target='_blank'>View</Button>
            <Button href='#' target='_blank' key={saveID} onClick={() => deleteSave(saveID)}>Delete</Button>
            </div>
        </Card.Body>
      </Card>
    </li>
  );
}