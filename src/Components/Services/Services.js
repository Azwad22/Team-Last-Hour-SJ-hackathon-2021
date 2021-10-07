import React, { useEffect, useState } from 'react';
import Allcourses from '../Allcourses/Allcourses';


const Services = () => {

    const [allcourse, setAllcourse] = useState([]);
    useEffect(() => {
        fetch('./mustafizeducation.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setAllcourse(data));
    }, [])


    const handleAddToCart = (e) => {
        const buycourse = e.target.value;
        console.log(buycourse);

    }



    return (
        <div>
            <h1>This is services</h1>

            <div className="row m-3">

                {/* passing props to Allcourse component */}

                {
                    allcourse.map(mustafiz =>
                        <Allcourses
                            key={mustafiz.index}
                            mustafiz={mustafiz}
                            handleAddToCart={handleAddToCart}

                        ></Allcourses>

                    )
                }


            </div>
        </div>
    );
};

export default Services;