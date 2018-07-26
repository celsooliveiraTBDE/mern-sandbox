import React, { Component } from "react";
import { Button } from 'reactstrap';
import Input from "../../components/Input/Input";
// import Button from "./components/Button";
import API2 from "../../utils/API2";
import { RecipeList, RecipeListItem } from "../../components/RecipeList";
import Banner from "../../components/Banner"
import { Container, Row, Col } from 'reactstrap';
import { CardItem } from "../../components/RecipeList/CardItem";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      term: "",
      location: "",
      isToggleOn: [],
    };

    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }
  componentDidMount() {
    this.setState({term:"craft cocktails",
  location:"los angeles, ca"});

  }


  onCheckboxBtnClick(selected) {
    const index = this.state.isToggleOn.indexOf(selected);
    if (index < 0) {
      this.state.isToggleOn.push(selected);
    } else {
      this.state.isToggleOn.splice(index, 1);
    }
    this.setState({ isToggleOn: [...this.state.isToggleOn] });
    this.savemyArticle(index);;
  }

  // form inputs
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("name, value", name, value);

  };
  //form submission for searching results on Yelp API

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API2.getYelpLocations(this.state.location, this.state.term)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  };

  //saves all articles queried to the database using map
  saveArticles = () => {

    console.log("balls", this.state.recipes)

    this.state.recipes.map(((recipe, index) => {
      let myIndex = index
      console.log("Index is ", index, this.state.isToggleOn);
      console.log(this.state.isToggleOn.includes({ index: index }))

      return (API2.saveBook({
        name: recipe.name,
        alias: recipe.alias,
        image_url: recipe.image_url
      }));

    }))
  }

  //saves a toggled article
  savemyArticle = index => {
    let i = index.index;
    console.log("balls", i)

    console.log("balls", this.state.recipes[index.index])

    let myIndex = index
    console.log("Index is ", index.index, this.state.isToggleOn);
    console.log(this.state.isToggleOn.includes(index.index))

    return (API2.saveLocation({
      name: this.state.recipes[index.index].name,
      alias: this.state.recipes[index.index].alias,
      image_url: this.state.recipes[index.index].image_url

    }));


  }

  removemyArticle = index => {
    let i = index.index;
    console.log("rm balls", i)

    console.log("rm balls", this.state.recipes[index.index])

    let myIndex = index
    console.log("Index is ", index.index, this.state.isToggleOn);
    console.log(this.state.isToggleOn.includes(index.index))

    return (API2.saveLocation({
      name: this.state.recipes[index.index].name,
      alias: this.state.recipes[index.index].alias,
      image_url: this.state.recipes[index.index].image_url

    }));

  }
  render() {
    return (
      <div>
        <Banner />
        <Container className="container">
          <Row>
            <Col classType="md-12" size="xs-9 sm-10">
              <Input
                name="term"
                value={this.state.term}
                onChange={this.handleInputChange}
                placeholder="Search Yelp"
              />
              <Input
                name="location"
                value={this.state.location}
                onChange={this.handleInputChange}
                placeholder="city, state, zip"
              />
            </Col>
          </Row>
          <Row>
          <Col size='md-12'>
              <Button
                onClick={this.handleFormSubmit}
                color="primary"
                className="input-lg"
                block='true'
                >Search
                </Button>
                {!this.state.recipes.length ? (
                <Button
                onClick={this.saveArticles}
                color="success"
                className="input-lg"
                disabled="true"
                block='true'
                >Save
                </Button>
              ) : (
              <Button
                onClick={this.saveArticles}
                color="success"
                className="input-lg"
                block='true'
                >Save ALL
                </Button>)}
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              {!this.state.recipes.length ? (
                <h1 className="text-center">Search Yelp to Begin</h1>
              ) : (
                  <RecipeList>
                    {this.state.recipes.map((recipe, index) => {
                      return (

                        <Row size="xs-12">

                          <CardItem
                            key={recipe.id}
                            title={recipe.name}
                            href={recipe.url}
                            ratings={recipe.rating}
                            image_url={recipe.image_url}
                            test={this.savemyArticle}
                            myindex={index}
          
                          />
                          
                          <Button color="secondary" onClick={() => this.savemyArticle({ index })} active={this.state.isToggleOn.includes({ index })}>SAVE</Button>
                          <Button color="danger" disabled="true" onClick={() => this.removemyArticle({ index })} active={this.state.isToggleOn.includes({ index })}>REMOVE</Button>

                        </Row>
                      );
                    })}
                  </RecipeList>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
