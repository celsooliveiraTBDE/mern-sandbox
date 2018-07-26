
import React from 'react';
import { Card, Col, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, Row, CardImgOverlay } from 'reactstrap';
import styles from "../../style.css"
export const CardItem = (props) => {
    console.log (props)
  return (
    <Row>
    <Col md="6" sm="12">
     <Card inverse>
        <CardImg width="318px" src={props.image_url ||"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"} alt={props.alias} />
        <CardImgOverlay>
          <CardTitle> {props.title}</CardTitle>
          <CardText>
      Read Reviews</CardText>
          <CardText>
            <small className="text-muted">Ratings: {props.ratings}</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </Col>
    <Col md="6" sm="12">.col-6 .col-sm-4</Col>
    </Row>
  )
  }
    //   <MediaCol
  //   <Media left href={props.image_url}>
  //     <Media object href={props.image_url} alt={props.alias} />
  //   </Media>
  //   <Media body>
  //     <Media heading>
  //     {props.title}
  //     </Media>
  //     Ratings: {props.ratings}
  //     YADDA YADDAA
  //     Address: More YADDA
  //   </Media>
  // </Media>