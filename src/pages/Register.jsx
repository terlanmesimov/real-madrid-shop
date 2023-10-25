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

const Register = () => {
  useEffect(() => {
    document.title = "Real Madrid CF | Log in or access";
  }, []);
  const navigate = useNavigate();
  // Toasty error message
  const [toasty, setToasty] = useState(false);
  // Step
  const [step, setStep] = useState(1);
  // Input focus and blur
  const [focusInputEmail, setFocusInputEmail] = useState(false);
  const [focusInputPassword, setFocusInputPassword] = useState(false);
  const [focusInputDate, setFocusInputDate] = useState(false);
  const [focusInputName, setFocusInputName] = useState(false);
  const [focusInputSurname, setFocusInputSurname] = useState(false);
  // Visibility toggle
  const [passwordInputVisibility, setPasswordInputVisibility] = useState(false);
  // Authentication
  const { newUserData, setNewUserData } = useContext(Auth);
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
  const stepOneBtn = (data) => {
    setNewUserData({ ...newUserData, email: data.email });
    setStep(step + 1);
  };

  const shemaTwo = yup.object({
    password: yup
      .string()
      .required()
      .trim()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    birthDate: yup
      .string()
      .required()
      .trim()
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/),
  });
  const {
    register: registerTwo,
    handleSubmit: handleSubmitTwo,
    formState: { errors: errorsTwo },
  } = useForm({
    resolver: yupResolver(shemaTwo),
  });
  const stepTwoBtn = (data) => {
    setNewUserData({ ...newUserData, password: data.password });
    setStep(step + 1);
  };

  const shemaThree = yup.object({
    name: yup
      .string()
      .required()
      .trim()
      .matches(/^[A-Za-zğüşıöçĞÜŞİÖÇ]+$/),
    surname: yup
      .string()
      .required()
      .trim()
      .matches(/^[A-Za-zğüşıöçĞÜŞİÖÇ]+$/),
  });
  const {
    register: registerThree,
    handleSubmit: handleSubmitThree,
    formState: { errors: errorsThree },
  } = useForm({
    resolver: yupResolver(shemaThree),
  });
  const stepThreeBtn = (data) => {
    setNewUserData({ ...newUserData, name: data.name, surname: data.surname });
    if (newUserData.name && newUserData.name) {
      register();
    }
  };
  // Registration
  const register = async () => {
    await axios
      .post(process.env.REACT_APP_NEW_USER, newUserData)
      .then((response) => {
        autoLogIn();
      })
      .catch((error) => {
        console.warn(error);
        setToasty(true);
        setTimeout(() => {
          setToasty(false);
        }, 5200);
      });
  };
  
  const autoLogIn = async () => {
    const data = {
      email: newUserData.email,
      password: newUserData.password,
    };
    await axios
      .post(process.env.REACT_APP_LOGIN, data)
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
    <div className="register">
      <div
        className={`toast_error ${
          toasty
            ? "animate__animated animate__delay-5s animate__fadeOutUp active"
            : ""
        }`}
      >
        <p className="error_message">
          Registration process has failed. Please check your information and try
          again.
        </p>
      </div>
      <div className="register_header">
        {step !== 1 && (
          <div
            className="back_btn"
            onClick={() => {
              setStep(step - 1);
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
        )}
        <span className="language_select">
          <button className="language">ES</button>
          <span className="divider_vertical"></span>
          <button className="language">EN</button>
        </span>
      </div>
      {step === 1 && (
        <div className="main step_one">
          <div className="form_heading">
            <h3>Welcome!</h3>
            <p>Sign in or create your account</p>
          </div>
          <form className="form" onSubmit={handleSubmitOne(stepOneBtn)}>
            <div className="email input_content">
              <input
                type="email"
                className={`email_input input ${
                  errorsOne.email ? "has_error" : ""
                }`}
                name="email"
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
                Email / Socio No. / Madridista No
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
            </div>
            <button className="form_btn">
              <span>Continue</span>
            </button>
          </form>
          <button className="question" onClick={() => navigate("/login")}>
            Do you have a account?
          </button>
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
      )}
      {step === 2 && (
        <div className="main step_two">
          <div className="form_heading">
            <h3>
              Become a <br /> Madridista
            </h3>
          </div>
          <form className="form" onSubmit={handleSubmitTwo(stepTwoBtn)}>
            <div className="password input_content">
              <input
                type={passwordInputVisibility ? "text" : "password"}
                className={`password_input input ${
                  errorsTwo.password ? "has_error" : ""
                }`}
                name="password"
                {...registerTwo("password")}
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
                Create your password
              </label>
              <span
                className={`error error_password ${
                  errorsTwo.password ? "active" : ""
                }`}
              >
                {errorsTwo.password
                  ? "Your password must contain between 8 and 24 alphanumeric characters and at least 1 letter"
                  : ""}
              </span>
            </div>
            <div className="birth_date input_content">
              <input
                type="text"
                className={`birth_date_input input ${
                  errorsTwo.birthDate ? "has_error" : ""
                }`}
                name="birthDate"
                {...registerTwo("birthDate")}
                onFocus={(e) => {
                  if (e.target.value === "") {
                    setFocusInputDate(!focusInputDate);
                  }
                  return;
                }}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setFocusInputDate(!focusInputDate);
                  }
                  return;
                }}
              />
              <span
                className={`info_icon ${errorsTwo.birthDate ? "active" : ""}`}
              >
                <ErrorOutlineOutlinedIcon />
              </span>
              <label
                htmlFor="text"
                className={`birth_date_label label ${
                  focusInputDate ? "active" : ""
                }`}
              >
                Birth date (DD/MM/YYYY)
              </label>
              <span
                className={`error error_birth_date ${
                  errorsTwo.birthDate ? "active" : ""
                }`}
              >
                {errorsTwo.birthDate
                  ? "You must be at least 14 years old to create an account."
                  : ""}
              </span>
            </div>
            <button className="form_btn">
              <span>Accept and continue</span>
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
      {step === 3 && (
        <div className="main step_three">
          <div className="form_heading">
            <h3>
              Become a <br /> Madridista
            </h3>
          </div>
          <form className="form" onSubmit={handleSubmitThree(stepThreeBtn)}>
            <div className="name input_content">
              <input
                type="text"
                className={`name_input input ${
                  errorsThree.name ? "has_error" : ""
                }`}
                name="name"
                {...registerThree("name")}
                onFocus={(e) => {
                  if (e.target.value === "") {
                    setFocusInputName(!focusInputName);
                  }
                  return;
                }}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setFocusInputName(!focusInputName);
                  }
                  return;
                }}
              />
              <span className={`info_icon ${errorsThree.name ? "active" : ""}`}>
                <ErrorOutlineOutlinedIcon />
              </span>
              <label
                htmlFor="text"
                className={`name_label label ${focusInputName ? "active" : ""}`}
              >
                Name
              </label>
              <span
                className={`error error_name ${
                  errorsThree.name ? "active" : ""
                }`}
              >
                {errorsThree.name
                  ? "The name you provided is not in the correct format."
                  : ""}
              </span>
            </div>
            <div className="surname input_content">
              <input
                type="text"
                className={`surname_input input ${
                  errorsThree.surname ? "has_error" : ""
                }`}
                name="surname"
                {...registerThree("surname")}
                onFocus={(e) => {
                  if (e.target.value === "") {
                    setFocusInputSurname(!focusInputSurname);
                  }
                  return;
                }}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setFocusInputSurname(!focusInputSurname);
                  }
                  return;
                }}
              />
              <span
                className={`info_icon ${errorsThree.surname ? "active" : ""}`}
              >
                <ErrorOutlineOutlinedIcon />
              </span>
              <label
                htmlFor="text"
                className={`surname_label label ${
                  focusInputSurname ? "active" : ""
                }`}
              >
                Surname
              </label>
              <span
                className={`error error_name ${
                  errorsThree.surname ? "active" : ""
                }`}
              >
                {errorsThree.surname
                  ? " The surname you provided is not in the correct format."
                  : ""}
              </span>
            </div>
            <button className="form_btn">
              <span>Register</span>
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
