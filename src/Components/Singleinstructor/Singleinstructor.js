import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Singleinstructor = (props) => {

    console.log(props.people);
    const { picture, instructor_name, Experience, about } = props.people || {};

    return (
        <div className="col-md-4 mt-4 mb-2 col-sm">
            <Card style={{ width: '18rem', height: '100%' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title><span className="text-success"> Instructor Name- {instructor_name} </span></Card.Title>
                    <Card.Text>


                        <span className="text-info"> About-</span>  {about}
                    </Card.Text>
                    <Card.Title><span className="text-danger font-weight-bold"> Experience-</span>{Experience}</Card.Title>

                    <Button variant="info">More Infromation</Button>
                </Card.Body>
            </Card>


        </div>
    );
};

export default Singleinstructor;