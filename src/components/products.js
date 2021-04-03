import React,{ Component } from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button'
import Navbar from './Navbar/Navbar';
import './products.css'
class Product extends Component{
    render() {
        const mystyle = {
            color:"black",
            backgroundColor: "#ffd633",
            position: "relative",
            left:"20px",
            bottom:"0",
            float:"left"
          };
          const mystyle1 = {
            position: "relative",
            right:"20px",
            bottom:"0"
          };
        return (
            <>
            <Navbar/>
            <Container>
                <Row>
                    <Col xl={4} className="img">
                        <img className="image" src='./assets/images/fur1.jpg' id="img"></img>
                    </Col>
                    <Col xl={8}>
                    <div className="text" >
                        <h1>
                            Name here
                        </h1>
                        <hr></hr>
                        <p className="content">
                            Content here
                        </p>
                        <div className="text1">
                        <Button className="add" style={mystyle}variant="warning">Add to Cart</Button>{'   '}
                        <Button className="place" style={mystyle1}variant="primary">Place Order</Button>{' '}
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row>
                <Col xl={12}>
                <div className="extra">
                    </div>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }    
}
export default Product
