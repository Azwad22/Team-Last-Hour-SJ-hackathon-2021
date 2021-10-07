import React, { useEffect, useState } from "react";
import Allcourses from "../Allcourses/Allcourses";

const Services = () => {
<<<<<<< HEAD

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
=======
  const [allcourse, setAllcourse] = useState([]);
  useEffect(() => {
    fetch("./mustafizeducation.json")
      .then((res) => res.json())
      // .then(data => console.log(data));
      .then((data) => setAllcourse(data));
  }, []);

  const handleAddToCart = (product) => {};

  return (
    <div id="services">
      <h1 style={{ padding: "40px" }}>Our Services</h1>

      <div className=" justify-center row m-3">
        {/* passing props to Allcourse component */}

        {allcourse.map((mustafiz) => (
          <Allcourses
            key={mustafiz.index}
            mustafiz={mustafiz}
            handleAddToCart={handleAddToCart}
          ></Allcourses>
        ))}
      </div>
    </div>
  );
>>>>>>> 3c4273f71a89531c698f7d503388ff332d40d831
};

export default Services;
