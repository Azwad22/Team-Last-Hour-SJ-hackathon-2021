import React, { useEffect, useState } from "react";
import Allcourses from "../Allcourses/Allcourses";


const Services = () => {
<<<<<<< HEAD
  const [allcourse, setAllcourse] = useState([]);
  useEffect(() => {
    fetch("./mustafizeducation.json")
      .then((res) => res.json())
      // .then(data => console.log(data));
      .then((data) => setAllcourse(data));
  }, []);

  return (
    <div id="services">
      <h1>This is services</h1>

      <div className="row m-3">
        {/* passing props to Allcourse component */}

        {allcourse.map((mustafiz) => (
          <Allcourses key={mustafiz.index} mustafiz={mustafiz}></Allcourses>
        ))}
      </div>
    </div>
  );
=======

    const [allcourse, setAllcourse] = useState([]);
    useEffect(() => {
        fetch('./mustafizeducation.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setAllcourse(data));
    }, [])


    const handleAddToCart = (product) => {


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
>>>>>>> a92b76a8036cfeec6cf1fb8bcf3f8a99d96a2e51
};

export default Services;
