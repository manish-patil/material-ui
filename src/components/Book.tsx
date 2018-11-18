import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography"

const Book = (props) => {
    return (
        <div>
            <Card style={{ maxWidth: 200 }}>
                <CardMedia style={{ height: 280 }} image={props.book.image} title={props.book.title} />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {props.book.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h5">
                        Authors
                    </Typography>
                    {props.book.authors ?
                        props.book.authors.map(author => (
                            <Typography key={author.id} gutterBottom variant="body2">
                                {author.name}
                            </Typography>
                        ))
                        : null}
                </CardContent>
            </Card>
        </div>
    )
}

export default Book;