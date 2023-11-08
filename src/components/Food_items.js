import React, { useState } from "react";
import FoodItemDetails from "./FoodItemDetails";
import Filter_Menu_Btn from "./Filter_Menu_Btn";
import Menu from "../data/Menu";

const filter_data = ["All", ...new Set(Menu.map((data) => data.category))];

function Food_items() {
  const [data, setData] = useState(Menu);

  const [showdetaildata, setShowdetaildata] = useState(null);

  const filter_menu_data = (category) => {
    if (category === "All") {
      setData(Menu);
    } else {
      const updated_menu_data = Menu.filter(
        (current) => current.category === category
      );
      setData(updated_menu_data);
    }
  };

  const food_detail_card = (value) => {
    console.log(value);
    setShowdetaildata(value);
  };
  return (
    <>
      {showdetaildata ? (
        <FoodItemDetails
          item={showdetaildata}
          setShowdetaildata={setShowdetaildata}
        />
      ) : (
        <div className="col-lg-11 py-5 ">
          <div className="row justify-content-around">
            <div className="col-lg-12 py-3 pb-5">
              <Filter_Menu_Btn
                filter_menu_data={filter_menu_data}
                filter_data={filter_data}
              />
            </div>
            {data.map((value) => {
              const { id, image, name, category, price, description } = value;
              console.log(image);
              return (
                <div className="card col-lg-3 my-4" key={id}>
                  <img
                    src={image}
                    className="card-img-top img-fluid "
                    alt={image}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <p className="card-text">City : {category}</p>
                    <p className="card-text">Price : {price}</p>
                    <p className="card-text">Description : {description}</p>
                    <button
                      onClick={() => food_detail_card(value)}
                      className="btn btn-primary"
                    >
                      view more
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Food_items;
