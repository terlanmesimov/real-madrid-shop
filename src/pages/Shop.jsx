import { useState } from "react";
import { Link } from "react-router-dom";
import { filters } from "../utils/filters";
// COMPONENTS
import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnnoncementBar from "../components/AnnoncementBar";
// PROVIDER
import { HeaderContextProvider } from "../utils/HeaderContext";

const Shop = () => {
  const [titleText, setTitleText] = useState("READ MORE");
  const [filtersData, setFiltersData] = useState(filters);
  const [openFilterMenu, setOpenFilterMenu] = useState(false);

  const handleClickFilter = (e) => {
    const updatedFilters = filtersData.map((option) => {
      if (option.id == e.target.id) {
        return {
          ...option,
          state: option.state === "open" ? "close" : "open",
        };
      } else {
        return {
          ...option,
          state: (option.state = "close"),
        };
      }
    });
    setFiltersData(updatedFilters);
  };

  return (
    <>
      <AnnoncementBar />
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
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
                {filtersData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      id={item.id}
                      onClick={handleClickFilter}
                      className="filter"
                    >
                      <div id={item.id} className="selection">
                        <span id={item.id} className="name">
                          {item.filter}
                        </span>
                        <span id={item.id} className="arrow_icon">
                          <svg
                            id={item.id}
                            aria-hidden="true"
                            focusable="false"
                            role="presentation"
                            class="icon icon-caret"
                            viewBox="0 0 10 6"
                          >
                            <path
                              id={item.id}
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <div id={item.id} className={`options ${item.state}`}>
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
                <select className="filter">
                  <option>SORT BY</option>
                  <option>BEST SELLERS</option>
                  <option>ALPHABETICALLY , A-Z</option>
                  <option>ALPHABETICALLY , Z-A</option>
                  <option>PRICE: LOWEST TO HIGHEST</option>
                  <option>PRICE: HIGHEST TO LOWEST</option>
                  <option>DATE: OLD TO RECENT</option>
                  <option>DATE: RECENT TO OLD</option>
                </select>
              </div>
              <div
                className="filter_bar_btn"
                onClick={() => {
                  setOpenFilterMenu(true);
                  document.body.style.overflow = "hidden";
                }}
              >
                <div className="content">
                  <span className="filter_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      class="icon icon-filter"
                      fill="none"
                      viewBox="0 0 20 41"
                    >
                      <line
                        x1="16.5"
                        y1="17.5"
                        x2="3.5"
                        y2="17.5"
                        stroke="#004996"
                        stroke-linecap="round"
                      ></line>
                      <line
                        x1="16.5"
                        y1="24.5"
                        x2="3.5"
                        y2="24.5"
                        stroke="#004996"
                        stroke-linecap="round"
                      ></line>
                      <circle
                        cx="13"
                        cy="24.5"
                        r="2"
                        fill="white"
                        stroke="#004996"
                      ></circle>
                      <circle
                        cx="7"
                        cy="17.5"
                        r="2"
                        fill="white"
                        stroke="#004996"
                      ></circle>
                    </svg>
                  </span>
                  <h5>Filter and sort</h5>
                </div>
              </div>
              <div className="product_list">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
            {openFilterMenu && (
              <div className="submenu_context">
                <div
                  className={`filter_sub_menu ${
                    openFilterMenu ? "open" : "closed"
                  }`}
                >
                  <div className="heading">
                    <h3>Filter and sort</h3>
                    <span
                      className="close_icon"
                      onClick={() => {
                        setOpenFilterMenu(false);
                        document.body.style.overflow = "auto";
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        class="icon icon-close"
                        fill="none"
                        viewBox="0 0 18 17"
                      >
                        <path
                          d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                          stroke="currentColor"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="miter"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="filters">
                    <div className="filter">
                      <span className="filter_name">SIZE</span>
                      <span className="arrow_icon">
                        <svg
                          viewBox="0 0 14 10"
                          fill="none"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          class="icon icon-arrow"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="filter">
                      <span className="filter_name">COLOR</span>
                      <span className="arrow_icon">
                        <svg
                          viewBox="0 0 14 10"
                          fill="none"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          class="icon icon-arrow"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="filter">
                      <span className="filter_name">GENDER</span>
                      <span className="arrow_icon">
                        <svg
                          viewBox="0 0 14 10"
                          fill="none"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          class="icon icon-arrow"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="filter">
                      <span className="filter_name">PRODUCT TYPE</span>
                      <span className="arrow_icon">
                        <svg
                          viewBox="0 0 14 10"
                          fill="none"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          class="icon icon-arrow"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="filter">
                      <span className="filter_name">SORT BY</span>
                      <span className="arrow_icon">
                        <svg
                          viewBox="0 0 14 10"
                          fill="none"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          class="icon icon-arrow"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="buttons">
                    <button className="delete_btn">Delete</button>
                    <button className="apply_btn">Apply</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
