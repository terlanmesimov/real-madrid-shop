import { useEffect, useState } from "react";
// ICON
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const Register = () => {
  const [focusInput, setFocusInput] = useState(false);
  useEffect(() => {
    document.title = "Real Madrid CF | Log in or access";
    document.head.innerHTML += `<link rel="shortcut icon" href="favicon-2.ico" type="image/x-icon" />`;
  }, []);

  return (
    <div className="register">
      <div className="register_header">
        <span className="language_select">
          <button className="language">ES</button>
          <span className="divider_vertical"></span>
          <button className="language">EN</button>
        </span>
      </div>
      <div className="main">
        <div className="form_heading">
          <h3>Welcome!</h3>
          <p>Sign in or create your account</p>
        </div>
        <form className="form">
          <div className="email input_content">
            <input
              type="email"
              className="email_input input"
              onFocus={() => setFocusInput(!focusInput)}
              onBlur={() => setFocusInput(!focusInput)}
            />
            <span className="info_icon">
              <ErrorOutlineOutlinedIcon />
            </span>
            <label
              htmlFor="email"
              className={`email_label label ${focusInput ? "active" : ""}`}
            >
              Email / Socio No. / Madridista No
            </label>
            <span className="error error_email">
              Please, enter a valid email (for example: you@example.com)
            </span>
          </div>
          <button className="form_btn">
            <span>Continue</span>
          </button>
        </form>
      </div>
      <div className="register_footer"></div>
    </div>
  );
};

export default Register;
