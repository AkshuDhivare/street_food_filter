import React from "react";

function FoodItemDetails({ item, setShowdetaildata }) {
  const { id, image, name, category, price, description } = item;

  const gobackHandler = () => {
    setShowdetaildata(null);
  };
  return (
    <>
      <div className="container py-5">
        <div className="row ">
          <div className="col-lg-6 py-5">
            <img src={image} alt={image} className="img-fluid w-75" />
          </div>
          <div className="col-lg-6 py-5 text-start">
            <h2 className="py-2">Name : {name}</h2>
            <h3 className="py-2">City : {category}</h3>
            <h3 className="py-2">Price : {price}</h3>
            <h3 className="py-2">Description : {description}</h3>
          </div>
          <div className="col-lg-12 py-5">
            <a onClick={gobackHandler} className="p-3 btn btn-primary ">
              Go Back
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodItemDetails;
