import { useState } from "react";

const HeaderSubMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="header_sub_menu">
      <div className="hamburger_icon">
        <div
          className="icon"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          {openMenu ? (
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              role="presentation"
              class="icon icon-hamburger"
              fill="none"
              viewBox="0 0 18 16"
            >
              <path
                d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
                fill="currentColor"
              ></path>
            </svg>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default HeaderSubMenu;
