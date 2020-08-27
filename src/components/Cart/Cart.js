import React from 'react';

const Cart = (props) => {
    let total = 0;
    for (let i = 0; i < props.course.length; i++) {
        const price = props.course[i].price;
        total = total + price;
        
    }
    return (
        <div>
            <h4>Total Courses: {props.course.length} </h4>
            <p>Total Payable: {total.toFixed(2)} </p>
            <button className="btn btn-success">Check out</button>
        </div>
    );
};

export default Cart;