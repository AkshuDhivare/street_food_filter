import React from "react";

function Filter_Menu_Btn({ filter_data, filter_menu_data }) {
  return (
    <>
      {filter_data.map((category, index) => {
        return (
          <button
            className="btn btn-outline-primary btn-large mx-2"
            key={index}
            onClick={() => filter_menu_data(category)}
          >
            {category}
          </button>
        );
      })}
    </>
  );
}

export default Filter_Menu_Btn;
