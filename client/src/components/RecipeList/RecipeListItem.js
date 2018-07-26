import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col, } from "reactstrap";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const RecipeListItem = props => (
    <Container>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.image_url || "https://placehold.it/300x300"} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p>Ratings: {props.ingredients}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.href}>
            Go to Yelp Page!
          </a>
        </Col>
    </Container>
);


