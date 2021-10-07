import React, { useEffect, useState } from 'react';
import { addToDb } from '../../LocalStorage/localStorage';
import Allcourses from '../Allcourses/Allcourses';

import useCart from '../../CustomHooks/useCart';

const Services = () => {

    const [allcourse, setAllcourse] = useState([]);
    useEffect(() => {
        fetch('./mustafizeducation.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setAllcourse(data));
    }, [])


    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

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