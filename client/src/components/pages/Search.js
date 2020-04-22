import React, {Component} from 'react';
import { Button, Card } from 'react-bootstrap/'
import Input from '../Input';
import API from '../../utils/API';

class Search extends Component {

    state = {
        books: [],
        bookSearch: ''
    }

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get books update the books state
        console.log('made it here')
        event.preventDefault();
        API.getBooks(this.state.bookSearch)
        .then(res => console.log(res))
        //   .then(res => this.setState({ books: res.data }))
          .catch(err => console.log(err));
      };

render() {
    return (
        <div>
            <Card>
                <Card.Title>Book Search</Card.Title>
                <Card.Body>
                    <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book">
                    </Input>
                    <Button variant='info'
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                    >
                    Search
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
        
}

}

export default Search;