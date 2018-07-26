import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Banner = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Yelp Fusion API Scraper</h1>
          <p className="lead">Save your favorite spots in one place for later!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Banner;