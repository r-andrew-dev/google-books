import React, {Component} from 'react';
import { Button, Card } from 'react-bootstrap/';
import API from '../../utils/API';
import { SavedBookList, SavedBook } from "../BookSearchList";

class Save extends Component {

    state = {
        saved: [],
    }

    componentDidMount()
    {
        API.getSaved()
        .then(res =>  this.setState({saved: res.data}))
        .catch(err => (console.log(err)));
    }

render() {
    return (
        <div>
        {!this.state.saved.length ? (
            <h1 className="text-center">No Saved Books to Display.</h1>
          ) : (
            <Card>
            <SavedBookList>
              {this.state.saved.map(save => {
                return (
                  <SavedBook
                    key={save.title}
                    title={save.title}
                    // authors={book.volumeInfo.authors[0]}
                    // description={book.volumeInfo.description}
                    // image={book.volumeInfo.imageLinks.thumbnail}
                    // link={book.volumeInfo.canonicalVolumeLink}
                  />
                );
              })}
            </SavedBookList>
        </Card>)}
    </div>
    )
}

}

export default Save;
