import React from "react";
import { Context } from "../../context";

const Filters = {
  Category: function ({ name }) {
    const { updateCategory, category } = React.useContext(Context);
    const handleOnChange = (e) => updateCategory(e.target.value);

    return (
      <div className="mt-2 mb-2 pl-2">
        <div className="custom-control custom-checkbox">
          <input
            type="radio"
            onChange={handleOnChange}
            name="category"
            value={name}
            className="custom-control-input"
            id={name}
            checked={category.toLowerCase() === name.toLowerCase()}
          />
          &nbsp;
          <label className="custom-control-label" for={name}>
            {name}
          </label>
        </div>
      </div>
    );
  },
  Filter: function ({ name }) {
    const { updateFilters, filters } = React.useContext(Context);
    return (
      <div className="mt-2 mb-2 pl-2">
        <div className="custom-control custom-checkbox">
          <input
            name={name}
            onChange={updateFilters}
            type="checkbox"
            className="custom-control-input"
            id={name}
          />
          &nbsp;
          <label className="custom-control-label" for={name}>
            {name}
          </label>
        </div>
      </div>
    );
  },
};
export default Filters;
