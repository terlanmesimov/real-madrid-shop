import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// ICON
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const Register = () => {
  const [focusInput, setFocusInput] = useState(false);
  useEffect(() => {
    document.title = "Real Madrid CF | Log in or access";
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
        <button className="question">Can't log in?</button>
        <div className="divider_content">
          <div className="divider"></div>
          <span className="word">OR</span>
          <div className="divider"></div>
        </div>
        <div className="other">
          <button className="register_google">
            <span>Continue with Google</span>
          </button>
          <button className="register_apple">
            <span>Continue with Apple ID</span>
          </button>
        </div>
        <p className="privacy_text">
          We will use your email address to check if you already have an
          account. You can exercise your rights at
          <Link className="email">oposicion@corp.realmadrid.com</Link>
          and get more information
          <br />
          <Link
            className="privacy_policy"
            to="https://www.realmadrid.com/en/privacy-policy"
          >
            here
          </Link>
          .
        </p>
      </div>
      <div className="register_footer">
        <div className="footer_text">
          <span>
            Real Madrid © {new Date().getFullYear()}. All rights reserved.
          </span>
        </div>
        <div className="footer_links">
          <Link to="https://www.realmadrid.com/en/legal-notice">
            Legal notice
          </Link>
          <span className="dot_separator"></span>
          <Link to="https://www.realmadrid.com/en/legal/cookies-policy">
            Cookies policy
          </Link>
          <span className="dot_separator"></span>
          <Link to="https://www.realmadrid.com/en/privacy-policy">
            Privacy policy
          </Link>
          <span className="dot_separator"></span>
          <Link to="https://www.realmadrid.com/en">realmadrid.com</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
