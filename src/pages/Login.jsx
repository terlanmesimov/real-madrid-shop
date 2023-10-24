import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// REACT-HOOK-FORM
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// ICON
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Real Madrid CF | Log in or access";
  }, []);
  // Toasty error message
  const [toasty, setToasty] = useState(false);
  // Input focus and blur
  const [focusInputEmail, setFocusInputEmail] = useState(false);
  const [focusInputPassword, setFocusInputPassword] = useState(false);
  // Visibility toggle
  const [passwordInputVisibility, setPasswordInputVisibility] = useState(false);
  // Authentication
  const shema = yup.object({
    email: yup
      .string()
      .trim()
      .required()
      .matches(/^\S+@\S+\.\S+$/),
    password: yup.string().trim().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shema),
  });
  const onSubmit = async (data) => {
    await axios
      .post(process.env.REACT_APP_LOGIN, data)
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
      })
      .catch((error) => {
        console.warn(error);
        setToasty(true);
        setTimeout(() => {
          setToasty(false);
        }, 5200);
      });
  };

  return (
    <div className="login">
      <div
        className={`toast_error ${
          toasty
            ? "animate__animated animate__delay-5s animate__fadeOutUp active"
            : ""
        }`}
      >
        <p className="error_message">
          Sorry! This password is not correct. Please, rewrite it paying
          attention to the uppercase and lowercase letters.
        </p>
      </div>
      <div className="login_header">
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
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="email input_content">
            <input
              type="email"
              name="email"
              className={`email_input input ${errors.email ? "has_error" : ""}`}
              {...register("email")}
              onFocus={(e) => {
                if (e.target.value === "") {
                  setFocusInputEmail(!focusInputEmail);
                }
                return;
              }}
              onBlur={(e) => {
                if (e.target.value === "") {
                  setFocusInputEmail(!focusInputEmail);
                }
                return;
              }}
            />
            <span className={`info_icon ${errors.email ? "active" : ""}`}>
              <ErrorOutlineOutlinedIcon />
            </span>
            <label
              htmlFor="email"
              className={`email_label label ${focusInputEmail ? "active" : ""}`}
            >
              Email / Socio No. / Madridista No
            </label>
            <span
              className={`error error_email ${errors.email ? "active" : ""}`}
            >
              {errors.email
                ? "Please, enter a valid email (for example: you@example.com)"
                : ""}
            </span>
          </div>
          <div className="password input_content">
            <input
              type={passwordInputVisibility ? "text" : "password"}
              className={`password_input input ${
                errors.password ? "has_error" : ""
              }`}
              name="password"
              {...register("password")}
              onFocus={(e) => {
                if (e.target.value === "") {
                  setFocusInputPassword(!focusInputPassword);
                }
                return;
              }}
              onBlur={(e) => {
                if (e.target.value === "") {
                  setFocusInputPassword(!focusInputPassword);
                }
                return;
              }}
            />
            <span
              className="visibility_icon active"
              onClick={() => {
                setPasswordInputVisibility(!passwordInputVisibility);
              }}
            >
              <VisibilityOffOutlinedIcon />
            </span>
            <label
              htmlFor="password"
              className={`password_label label ${
                focusInputPassword ? "active" : ""
              }`}
            >
              Password
            </label>
            <span
              className={`error error_password ${
                errors.password ? "active" : ""
              }`}
            >
              {errors.password ? "Password is required" : ""}
            </span>
          </div>
          <button className="form_btn">
            <span>Login</span>
          </button>
        </form>
        <button className="question" onClick={() => navigate("/register")}>
          Can't log in?
        </button>
        <button className="question" style={{ margin: 0 }}>
          Change password now
        </button>
        <div className="divider_content">
          <div className="divider"></div>
          <span className="word">OR</span>
          <div className="divider"></div>
        </div>
        <div className="other">
          <button className="login_google">
            <span>Continue with Google</span>
          </button>
          <button className="login_apple">
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
      <div className="login_footer">
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

export default Login;
