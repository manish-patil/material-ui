import * as React from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import Book from "./Book";

export default class Books extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            books: [],
            loaded: false
        }
    }

    componentWillMount() {
        axios.get("../data/books.json")
            .then((response) => {
                this.setState({
                    books: response.data,
                    loaded: true
                })
            })
            .catch((e) => {
                console.log("Error: " + e);
            })
    }

    render() {
        return (
            <div>
                {this.state.loaded ? (
                    <div>
                        <Grid container spacing={24} style={{ padding: 24 }}>
                            {
                                this.state.books.map(book => (
                                    <Grid key={book.index} item xs={12} sm={6} lg={3} xl={2}>
                                        <Book book={book}></Book>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </div>
                ) : null}
            </div>
        )
    }
}