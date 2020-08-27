import React from 'react';

const Item = (props) => {
    //console.log(props.course)
    const { name, author, price, image } = props.course;
    const enrollCoursesHandler = props.enrollCoursesHandler;
    return (
        <div  className="d-flex">
            <div className="p-4">
                <img src={image} alt="" />
            </div>
            <div className="p-4">
                <h5>{name}</h5>
                <p><small>by: {author}</small></p>
                <p>Price: ${price}</p>
                <button onClick={() => enrollCoursesHandler(props.course)} className="btn btn-success">Enroll Now</button>
            </div>
        </div>
    );
};

export default Item;