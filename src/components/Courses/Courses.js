import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from '../Item/Item.js';
import courses from '../../fake-data/courses.js';
import Cart from '../Cart/Cart.js';
import { useState } from 'react';

const Courses = () => {
    const [cart, setCart] = useState([]);

    const enrollCoursesHandler = (item)=>{
        const newCart = [...cart, item];
        setCart(newCart);
    }
    return (
        <div className="d-flex justify-content-between">
            <div>
            {
                courses.map(item => <Item enrollCoursesHandler={enrollCoursesHandler} course = {item} key={item.id}></Item>)
            }
            </div>
            <div>
                <Cart course={cart}></Cart>
            </div>

        </div>
    );
};

export default Courses;