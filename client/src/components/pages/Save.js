import React, {Component} from 'react';
import { Button, Card } from 'react-bootstrap/';
import API from '../../utils/API';
import { SavedBookList, SavedBook } from "../SavedBookList";

class Save extends Component {

    state = {
        saved: [],
    }

    componentDidMount()
    {
        API.getSaved()
        .then(res => this.setState({saved: res.data}, () => console.log(this.state.saved)))
        .catch(err => (console.log(err)));
    }

    deleteSave = (id) => {
      API.deleteBook(id)
        .then(res =>  this.setState({saved: this.state.saved.filter(({_id}) => _id !== id)}))
        .catch(err => console.log(err))
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
                    key={save._id}
                    title={save.title}
                    authors={save.authors}
                    description={save.description}
                    image={save.image}
                    link={save.link}
                    deleteSave={this.deleteSave}
                    saveID={save._id}
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
