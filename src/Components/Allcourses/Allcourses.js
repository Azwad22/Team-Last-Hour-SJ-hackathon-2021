import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Allcourses = (props) => {

    // console.log(props.mustafiz);
    const { picture, course_name, price, course_instructor, about } = props.mustafiz || {};
    return (

        <div className="col-md-4 mt-4 mb-3 col-sm">
            <Card border="warning" style={{ width: '18rem', height: '100%' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title> <span className="text-warning"> Course Name: {course_name}</span></Card.Title>
                    <Card.Text>


                        <span className="text-success"> About Course-</span>  {about}
                    </Card.Text>
                    <Card.Title><span className="text-danger font-weight-bold"> Price $-  {price}</span></Card.Title>
                    <Card.Title><span className="text-danger font-weight-bold"> Instructor Name- {course_instructor}</span></Card.Title>
                    <Button variant="primary" onClick={() => props.handleAddToCart(props.product)}
                        className="btn-regular">Buy Course</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Allcourses;