import React, { Component } from "react";
import { Jumbotron, Button } from 'reactstrap';
import Example2 from "./components/Nav";
import Input from "./components/Input";
// import Button from "./components/Button";
import API2 from "./utils/API2";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
// import { Container, Row, Col } from "./components/Grid";
// import React from 'react';
import { Container, Row, Col, Label } from 'reactstrap';
class App extends Component {
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
    API2.getRecipes(this.state.location, this.state.term)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  };


  saveArticles = () => {

    console.log("balls", this.state.recipes)

    this.state.recipes.map(((recipe, index) => {
      let myIndex = index
      console.log("Index is ", index, this.state.isToggleOn);
      console.log(this.state.isToggleOn.includes({index:index}))
      
        return (API2.saveBook({
          name: recipe.name,
          alias: recipe.alias,
          image_url: recipe.image_url
        }));
      
    }))
  }
  savemyArticle = index => {
    let i=index.index;
    console.log("balls",i)

    console.log("balls", this.state.recipes[index.index])

      let myIndex = index
      console.log("Index is ", index.index, this.state.isToggleOn);
      console.log(this.state.isToggleOn.includes(index.index))
      
        return (API2.saveBook({
          name: this.state.recipes[index.index].name,
          alias: this.state.recipes[index.index].alias,
          image_url: this.state.recipes[index.index].image_url

        }));
      
    
  }
  // saveOneArticle = (event, index) => {

  //   event.preventDefault();
  //   console.log("save balls", this.state.recipes)


  //     let myIndex = index
  //     console.log("Index is ", index);

  //     if(Toggle.handleClick()){

  //       return (API2.saveBook({
  //       name: recipe.name,
  //       alias: recipe.alias,
  //       image_url: recipe.image_url

  //     }));
  //    }
  //    }

  render() {
    return (
      <div>
        <Example2 />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="term"
                        value={this.state.term}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Category"
                      />
                      <Input
                        name="location"
                        value={this.state.location}
                        onChange={this.handleInputChange}
                        placeholder="city, state, zip"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        color="primary"
                        className="input-lg"
                      >
                        Search
                      </Button>
                      <Button
                        onClick={this.saveArticles}
                        color="success"
                        className="input-lg"
                      >
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (
                <h1 className="text-center">Your Saved Articles!</h1>
              ) : (
                  <RecipeList>
                    {this.state.recipes.map((recipe, index) => {
                      return (

                        <Row>

                          <RecipeListItem
                            key={recipe.id}
                            title={recipe.name}
                            href={recipe.url}
                            ingredients={recipe.rating}
                            thumbnail={recipe.image_url}
                          />
                          <Button
                            onClick={this.handleFormSubmit}
                            color="primary"
                            className="input-lg"
                            id={index}
                          >
                            Search </Button>

                            <Button color="secondary" onClick={() => this.savemyArticle({index})} active={this.state.isToggleOn.includes({index})}>SAVE</Button>

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

export default App;
