import React from "react";

const BookSection = ([data])=> {
    console.log(data);
    return (
    <div className="d-flex justify-content-between align-items-center flex-wrap">
        {data && data.map((item, index) => 
        <div className="" style={{
            width: "200px",
            height: "210px",
            backgroundColor: "orange",
        }}>
        <div>
            <img style={{width: "200px", height: "210px"}} className= "image-fluid"src={item.image} alt="" />
        </div>
        </div>)};
    </div>
)};

export default BookSection;