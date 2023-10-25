import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// REACT-HOOK-FORM
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// ICON
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
// CONTEXT
import { Auth } from "../utils/AuthContext";

const ChangePassword = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Real Madrid CF | Log in or access";
  }, []);
  // Input focus and blur
  const [focusInputEmail, setFocusInputEmail] = useState(false);
  const [focusInputOtp, setFocusInputOtp] = useState(false);
  const [focusInputPassword, setFocusInputPassword] = useState(false);
  const [focusInputRePassword, setFocusInputRePassword] = useState(false);
  // Visibility toggle
  const [passwordInputVisibility, setPasswordInputVisibility] = useState(false);
  useState(false);
  // Toasty error message
  const [toasty, setToasty] = useState(false);
  // Step
  const [step, setStep] = useState(1);
  // Change Password
  const shemaOne = yup.object({
    email: yup
      .string()
      .trim()
      .required()
      .matches(/^\S+@\S+\.\S+$/),
  });
  const {
    register: registerOne,
    handleSubmit: handleSubmitOne,
    formState: { errors: errorsOne },
  } = useForm({
    resolver: yupResolver(shemaOne),
  });
  const stepOneBtn = async (data) => {
    await axios
      .post(process.env.REACT_APP_RESET_PASSWORD, {
        token: JSON.parse(localStorage.getItem("token")),
        email: data.email,
      })
      .then((response) => {
        setStep(2);
      })
      .catch((error) => {
        console.warn(error);
        setToasty(true);
        setTimeout(() => {
          setToasty(false);
        }, 5200);
      });
  };

  const shemaTwo = yup.object({
    otp: yup.string().trim().required(),
  });
  const {
    register: registerTwo,
    handleSubmit: handleSubmitTwo,
    formState: { errors: errorsTwo },
  } = useForm({
    resolver: yupResolver(shemaTwo),
  });
  const stepTwoBtn = async (data) => {
    await axios
      .post(process.env.REACT_APP_VERIFY_OTP, {
        token: JSON.parse(localStorage.getItem("token")),
        otp: data.otp,
      })
      .then((response) => {
        setStep(3);
      })
      .catch((error) => {
        console.warn(error);
        setToasty(true);
        setTimeout(() => {
          setToasty(false);
        }, 5200);
      });
  };

  const shemaThree = yup.object({
    password: yup
      .string()
      .trim()
      .required()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    rePassword: yup
      .string()
      .trim()
      .required()
      .oneOf([yup.ref("password"), null]),
  });
  const {
    register: registerThree,
    handleSubmit: handleSubmitThree,
    formState: { errors: errorsThree },
  } = useForm({
    resolver: yupResolver(shemaThree),
  });
  const stepThreeBtn = async (data) => {
    await axios
      .post(process.env.REACT_APP_CHANGE_PASSWORD, {
        token: JSON.parse(localStorage.getItem("token")),
        password: data.password,
      })
      .then((response) => {
        localStorage.removeItem("token");
        autoLogIn(data);
      })
      .catch((error) => {
        console.warn(error);
        setToasty(true);
        setTimeout(() => {
          setToasty(false);
        }, 5200);
      });
  };

  const { userData } = useContext(Auth);
  const autoLogIn = async (data) => {
    await axios
      .post(process.env.REACT_APP_LOGIN, {
        email: userData.email,
        password: data.password,
      })
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <div className="change_password">
      <div
        className={`toast_error ${
          toasty
            ? "animate__animated animate__delay-5s animate__fadeOutUp active"
            : ""
        }`}
      >
        <p className="error_message">Something went wrong!</p>
      </div>
      <div className="change_password_header">
        <div
          className="back_btn"
          onClick={() => {
            if (step === 1) {
              navigate("/account");
            } else if (step === 2) {
              setStep(1);
            } else if (step === 3) {
              setStep(2);
            }
          }}
        >
          <span className="arrow_icon">
            <svg
              _ngcontent-cdm-c24=""
              focusable="false"
              className="rm-icon rm-icon--relative"
              width={16}
              height={16}
              aria-hidden="true"
            >
              <use _ngcontent-cdm-c24="" xlinkHref="#arrow-left" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <clipPath id="a">
                    <path d="M0 0h24v24H0z" />
                  </clipPath>
                  <clipPath id="a">
                    <path d="M0 0h24v24H0z" />
                  </clipPath>
                  <clipPath id="a">
                    <path d="M0 0h24v24H0z" />
                  </clipPath>
                  <clipPath id="a">
                    <path d="M0 0h24v24H0z" />
                  </clipPath>
                  <clipPath id="a">
                    <path d="M0 0h24v24H0z" />
                  </clipPath>
                  <clipPath id="a">
                    <path d="M0 0h24v24H0z" />
                  </clipPath>
                  <clipPath id="a">
                    <path d="M0 0h24v24H0z" />
                  </clipPath>
                  <clipPath id="a">
                    <path d="M0 0h24v8.077H0z" />
                  </clipPath>
                  <clipPath id="a">
                    <path d="M0 0h24v24H0z" />
                  </clipPath>
                  <clipPath id="a">
                    <path transform="translate(.462 .04)" d="M0 0h24v24H0z" />
                  </clipPath>
                </defs>
                <symbol id="arrow-left" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.41 4.278a1 1 0 0 1 .029 1.414l-5.124 5.34H20a1 1 0 0 1 0 2H5.376l5.063 5.276a1 1 0 0 1-1.443 1.384l-6.718-7a1 1 0 0 1 0-1.384l6.718-7a1 1 0 0 1 1.413-.03Z"
                  />
                </symbol>
              </svg>
            </svg>
          </span>
          <span className="word">Back</span>
        </div>
        <span className="language_select">
          <button className="language">ES</button>
          <span className="divider_vertical"></span>
          <button className="language">EN</button>
        </span>
      </div>
      {step === 1 && (
        <div className="main step_one">
          <div className="form_heading">
            <h3>
              Email sent to <br /> change your <br /> password!
            </h3>
            <p>
              We have just sent you an email with OTP <br /> to change your
              password.
            </p>
          </div>
          <form className="form" onSubmit={handleSubmitOne(stepOneBtn)}>
            <div className="email input_content">
              <input
                type="email"
                name="email"
                className={`email_input input ${
                  errorsOne.email ? "has_error" : ""
                }`}
                {...registerOne("email")}
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
              <span className={`info_icon ${errorsOne.email ? "active" : ""}`}>
                <ErrorOutlineOutlinedIcon />
              </span>
              <label
                htmlFor="email"
                className={`email_label label ${
                  focusInputEmail ? "active" : ""
                }`}
              >
                Email
              </label>
              <span
                className={`error error_email ${
                  errorsOne.email ? "active" : ""
                }`}
              >
                {errorsOne.email
                  ? "Please, enter a valid email (for example: you@example.com)"
                  : ""}
              </span>
              <button className="form_btn">
                <span>Send verification code</span>
              </button>
            </div>
          </form>
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
      )}
      {step === 2 && (
        <div className="main step_two">
          <div className="form_heading">
            <h3>
              Email sent to <br /> change your <br /> password!
            </h3>
            <p>Please, enter the verification code</p>
          </div>
          <form className="form" onSubmit={handleSubmitTwo(stepTwoBtn)}>
            <div className="otp input_content">
              <input
                type="text"
                name="otp"
                className={`otp_input input ${
                  errorsTwo.otp ? "has_error" : ""
                }`}
                {...registerTwo("otp")}
                onFocus={(e) => {
                  if (e.target.value === "") {
                    setFocusInputOtp(!focusInputOtp);
                  }
                  return;
                }}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setFocusInputOtp(!focusInputOtp);
                  }
                  return;
                }}
              />
              <span className={`info_icon ${errorsTwo.otp ? "active" : ""}`}>
                <ErrorOutlineOutlinedIcon />
              </span>
              <label
                htmlFor="otp"
                className={`otp_label label ${focusInputOtp ? "active" : ""}`}
              >
                Code
              </label>
              <span
                className={`error error_email ${errorsTwo.otp ? "active" : ""}`}
              >
                {errorsTwo.otp
                  ? "Invalid OTP code. Please enter a valid one-time password."
                  : ""}
              </span>
              <button className="form_btn">
                <span>Continue</span>
              </button>
            </div>
          </form>
          <button className="question" onClick={() => setStep(1)}>
            Send it again!
          </button>
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
      )}
      {step === 3 && (
        <div className="main step_three">
          <div className="form_heading">
            <h3>
              Email sent to <br /> change your <br /> password!
            </h3>
            <p>Please, enter the new password you want to assign</p>
          </div>
          <form className="form" onClick={handleSubmitThree(stepThreeBtn)}>
            <div className="password input_content">
              <input
                type={passwordInputVisibility ? "text" : "password"}
                className={`password_input input ${
                  errorsThree.password ? "has_error" : ""
                }`}
                name="password"
                {...registerThree("password")}
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
                  errorsThree.password ? "active" : ""
                }`}
              >
                {errorsThree.password
                  ? "Your password must contain between 8 and 24 alphanumeric characters and at least 1 letter"
                  : ""}
              </span>
            </div>
            <div className="re_password input_content">
              <input
                type="password"
                className={`rePassword_input input ${
                  errorsThree.rePassword ? "has_error" : ""
                }`}
                name="rePassword"
                {...registerThree("rePassword")}
                onFocus={(e) => {
                  if (e.target.value === "") {
                    setFocusInputRePassword(!focusInputRePassword);
                  }
                  return;
                }}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setFocusInputRePassword(!focusInputRePassword);
                  }
                  return;
                }}
              />
              <span
                className={`info_icon ${errorsThree.password ? "active" : ""}`}
              >
                <ErrorOutlineOutlinedIcon />
              </span>
              <label
                htmlFor="rePassword"
                className={`rePassword_label label ${
                  focusInputRePassword ? "active" : ""
                }`}
              >
                Password
              </label>
              <span
                className={`error error_rePassword ${
                  errorsThree.rePassword ? "active" : ""
                }`}
              >
                {errorsThree.rePassword ? "Passwords do not match" : ""}
              </span>
            </div>
            <button className="form_btn">
              <span>Verify</span>
            </button>
          </form>
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
      )}
      <div className="change_password_footer">
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

export default ChangePassword;
