import React, { useEffect, useState } from "react";
import Allcourses from "../Allcourses/Allcourses";
import { Button } from "react-bootstrap";

const Services = () => {
  const [allcourse, setAllcourse] = useState([]);
  useEffect(() => {
    fetch("./mustafizeducation.json")
      .then((res) => res.json())
      // .then(data => console.log(data));
      .then((data) => setAllcourse(data));
  }, []);

  const handleAddToCart = (product) => { };

  return (
    <div id="courses">
<<<<<<< HEAD
      <h1 style={{ padding: "40px", fontWeight: "bold" }}>Our Services</h1>
=======
      <h1 style={{ padding: "40px", fontWeight: "bold" }}>Our Courses</h1>
>>>>>>> 710adda742e84379f1a5f1f8bf89769e54594129

      <div className=" justify-center row m-3">
        {/* passing props to Allcourse component */}

        {allcourse.slice(0, 3).map((mustafiz) => (
          <Allcourses
            key={mustafiz.index}
            mustafiz={mustafiz}
            handleAddToCart={handleAddToCart}
          ></Allcourses>
        ))}
      </div>
      <Button variant="warning">VIew all Course</Button>{' '}
    </div >
  );
};

export default Services;
