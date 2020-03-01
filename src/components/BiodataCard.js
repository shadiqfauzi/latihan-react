import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import AlertCustom from './AlertCustom'

const BiodataCard = (props) => {
    const {nama, usia, pekerjaan, image, color, show, alert} = props

  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" style={{width: '300px', height:'300px', overflow: 'hidden'}} />
        <CardBody>
        <CardTitle>{nama}</CardTitle>
          <CardSubtitle>{usia}</CardSubtitle>
          <CardText>{pekerjaan}</CardText>
          <Button onClick={show}>Button</Button>
          <Button onClick={alert}>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BiodataCard;