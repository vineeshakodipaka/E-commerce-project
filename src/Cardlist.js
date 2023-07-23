import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Row, Container } from 'react-bootstrap';
import Percentage from './Percentage';

function Cardlist({ cards, handlechange }) {
  // console.log(cards)

  return (
    <>
        <center>
          <Row>
            {cards.map((ele, i) => {
              return ( 
                <Col xs={12} lg={4} xl={4} className="mt-4 col-xs-12 col-cards">
                  <Card className="cards mb-2">
                    <center>
                      <Card.Title>{ele.title}</Card.Title>
                    </center>
                    <center>
                      <Card.Img
                        variant="top"
                        style={{
                          width: '15rem',
                          height: '15rem',
                          margin: '15px',
                        }}
                        src={ele.image}
                      />
                    </center>
                    <Card.Body>
                      <Card.Title>{ele.title}</Card.Title>
                      <Card.Text>
                        <p>Original Price:₹{ele.orprice}</p>
                        <p>
                          Offered Price:₹<del>{ele.ofprice}</del>
                        </p>
                        <Percentage or={ele.orprice} of={ele.ofprice} />
                      </Card.Text>
                      <Button variant="primary" onClick={() => handlechange(ele, 1)}>
                        +
                      </Button>
                      {ele.Quantity}
                      <Button variant="primary" onClick={() => handlechange(ele, -1)}>
                        -
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
            <h3>
              Total Price: ₹
              {cards
                .map((el) => el.orprice * el.Quantity)
                .reduce((total, value) => total + value, 0)}
            </h3>
          </Row>
        </center>
  
    </>
  );
}

export default Cardlist;
