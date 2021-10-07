import React, { useEffect, useState } from 'react';
import Singleinstructor from '../Singleinstructor/Singleinstructor';

const Instructor = () => {

    const [allinstructor, setAllinstructor] = useState([]);
    useEffect(() => {
        fetch('./instructor.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setAllinstructor(data));

    }, [])


    return (
        <div>
            <h1>Our Instructor</h1>
            <div className="row m-3">

                {
                    allinstructor.slice(0, 10).map(people =>
                        <Singleinstructor
                            key={people.index}
                            people={people}

                        ></Singleinstructor>

                    )
                }

            </div>

        </div>
    );
};

export default Instructor;