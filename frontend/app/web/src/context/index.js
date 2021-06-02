import React, { useState } from "react";

export const Context = React.createContext();

const FiltersProvider = ({ children }) => {
  // Array
  const categories = ["Women", "Men", "Kids", "Accessories"];
  const filters = ["Top", "Bottom", "Jacket"];

  //UseStates
  const [category, setCategory] = useState(categories[0].toLowerCase());
  const [filtersChecked, setFiltersChecked] = useState({
    Top: false,
    Bottom: false,
    Jacket: false,
  });

  //HandleChange
  const updateCategory = (value) => setCategory(value.toLowerCase());
  const updateFilters = (e) =>
    setFiltersChecked((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  const filtersKeys = () => {
    return Object.entries(filtersChecked)
      .map(([key, value]) => value && key)
      .filter((obj) => !!obj);
  };

  //useMemo
  const value = React.useMemo(() => {
    return {
      categories,
      category,
      filters,
      filtersChecked: filtersKeys(),
      updateCategory,
      updateFilters,
    };
  }, [categories, filtersChecked]);

  return <Context.Provider value={value}> {children} </Context.Provider>;
};

export const withContext = (Component) => () => {
  return (
    <Context.Consumer>
      {(value) => <Component value={value} />}
    </Context.Consumer>
  );
};

export default FiltersProvider;
