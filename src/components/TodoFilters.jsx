import React from 'react'
import { VISIBILITY_FILTERS } from '../constants/constants'
import { useDispatch } from "react-redux";
import { setFilter } from "../actions/actions";

export const TodoFilters = ({activeFilter}) => {
  const dispatch = useDispatch();
  
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={"filter" + (currentFilter === activeFilter ? " filter--active" : "")
            }
            onClick={() => {
              console.log("setting", currentFilter);
              dispatch(setFilter(currentFilter));
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};
  