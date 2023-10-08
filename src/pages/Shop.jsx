import { useState } from "react";
import { Link } from "react-router-dom";
import { filters } from "../utils/filters";

const Shop = () => {
  const [titleText, setTitleText] = useState("READ MORE");
  const [open, setOpen] = useState(false);

  const handleClickFilter = (e) => {
    console.log(e.target);
  };

  return (
    <div className="shop">
      <div className="container">
        <div className="row">
          <div className="title">
            <span>
              <Link to="/">HOME</Link> ' ALL
            </span>
            <h2>ALL</h2>
            <h3
              onClick={() => {
                if (titleText === "READ MORE") {
                  setTitleText("READ LESS");
                } else if (titleText === "READ LESS") {
                  setTitleText("READ MORE");
                }
              }}
            >
              {titleText}
            </h3>
          </div>
          <div className="products">
            <div className="filter_bar">
              {filters.map((item) => {
                return (
                  <div
                    key={item.id}
                    id={item.id}
                    onClick={handleClickFilter}
                    className="filter"
                  >
                    <div id={item.id} className="selection">
                      <span className="name">{item.filter}</span>
                      <span className="arrow_icon">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          class="icon icon-caret"
                          viewBox="0 0 10 6"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div id={item.id} className="options">
                      <div className="reset">
                        <span>Reset</span>
                      </div>
                      <ul id={item.id} className="options_list">
                        {item.options.map((option) => {
                          return (
                            <li className="option">
                              <input type="checkbox" value={option} />
                              <label htmlFor="checkbox">{option}</label>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
