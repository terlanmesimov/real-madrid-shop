import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import i18n from "../utils/i18n";
// REACT-HOOK-FORM
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// ICON
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
// CONTEXT
import { Auth } from "../utils/AuthContext";
// COMPONENTS
import Loader from "../components/Loader";

const ChangePassword = () => {
  // Loader
  const [loader, setLoader] = useState(false);
  // Language
  const { t } = useTranslation();
  const [lang, setLang] = useState("en");

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
      .oneOf([yup.ref("password"), ""]),
  });

  const {
    register: registerThree,
    handleSubmit: handleSubmitThree,
    formState: { errors: errorsThree },
  } = useForm({
    resolver: yupResolver(shemaThree),
  });
  const stepThreeBtn = async (data) => {
    setLoader(true);
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

  const { userData, setHasToken } = useContext(Auth);
  const autoLogIn = async (data) => {
    await axios
      .post(process.env.REACT_APP_LOGIN, {
        email: userData.email,
        password: data.password,
      })
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        setHasToken(true);
        navigate("/");
        setLoader(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <>
      {loader && <Loader />}
      <div className="change_password">
        <div
          className={`toast_error ${
            toasty
              ? "animate__animated animate__delay-5s animate__fadeOutUp active"
              : ""
          }`}
        >
          <p className="error_message">
            {t("changePassword.toastyErrorMessage")}
          </p>
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
            <span className="word">{t("changePassword.back")}</span>
          </div>
          <span className="language_select">
            <button
              className={`language ${lang === "es" && "active"}`}
              onClick={() => {
                setLang("es");
                i18n.changeLanguage("es");
              }}
            >
              ES
            </button>
            <span className="divider_vertical"></span>
            <button
              className={`language ${lang === "en" && "active"}`}
              onClick={() => {
                setLang("en");
                i18n.changeLanguage("en");
              }}
            >
              EN
            </button>
          </span>
        </div>
        {step === 1 && (
          <div className="main step_one">
            <div className="form_heading">
              <h3>{t("changePassword.form.title")}</h3>
              <p>{t("changePassword.form.subTitleOne")}</p>
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
                <span
                  className={`info_icon ${errorsOne.email ? "active" : ""}`}
                >
                  <ErrorOutlineOutlinedIcon />
                </span>
                <label
                  htmlFor="email"
                  className={`email_label label ${
                    focusInputEmail ? "active" : ""
                  }`}
                >
                  {t("changePassword.form.emailLabel")}
                </label>
                <span
                  className={`error error_email ${
                    errorsOne.email ? "active" : ""
                  }`}
                >
                  {errorsOne.email
                    ? `${t("changePassword.form.emailErrorMessage")}`
                    : ""}
                </span>
                <button className="form_btn">
                  <span>{t("changePassword.form.btnOne")}</span>
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
              <h3>{t("changePassword.form.title")}</h3>
              <p>{t("changePassword.form.subTitleTwo")}</p>
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
                  {t("changePassword.form.otpLabel")}
                </label>
                <span
                  className={`error error_email ${
                    errorsTwo.otp ? "active" : ""
                  }`}
                >
                  {errorsTwo.otp
                    ? `${t("changePassword.form.otpErrorMessage")}`
                    : ""}
                </span>
                <button className="form_btn">
                  <span>{t("changePassword.form.btnTwo")}</span>
                </button>
              </div>
            </form>
            <button className="question" onClick={() => setStep(1)}>
              {t("changePassword.form.question")}
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
              <h3>{t("changePassword.form.title")}</h3>
              <p>{t("changePassword.form.subTitleThree")}</p>
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
                  {t("changePassword.form.passwordLabel")}
                </label>
                <span
                  className={`error error_password ${
                    errorsThree.password ? "active" : ""
                  }`}
                >
                  {errorsThree.password
                    ? `${t("changePassword.form.passwordErrorMessage")}`
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
                  className={`info_icon ${
                    errorsThree.password ? "active" : ""
                  }`}
                >
                  <ErrorOutlineOutlinedIcon />
                </span>
                <label
                  htmlFor="rePassword"
                  className={`rePassword_label label ${
                    focusInputRePassword ? "active" : ""
                  }`}
                >
                  {t("changePassword.form.rePasswordLabel")}
                </label>
                <span
                  className={`error error_rePassword ${
                    errorsThree.rePassword ? "active" : ""
                  }`}
                >
                  {errorsThree.rePassword
                    ? `${t("changePassword.form.rePasswordErrorMessage")}`
                    : ""}
                </span>
              </div>
              <button className="form_btn">
                <span>{t("changePassword.form.btnThree")}</span>
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
              Real Madrid © {new Date().getFullYear()}.{" "}
              {t("changePassword.changePasswordFooter.footerText")}.
            </span>
          </div>
          <div className="footer_links">
            <Link to="https://www.realmadrid.com/en/legal-notice">
              {t("changePassword.changePasswordFooter.legalNotice")}
            </Link>
            <span className="dot_separator"></span>
            <Link to="https://www.realmadrid.com/en/legal/cookies-policy">
              {t("changePassword.changePasswordFooter.cookiesPolicy")}
            </Link>
            <span className="dot_separator"></span>
            <Link to="https://www.realmadrid.com/en/privacy-policy">
              {t("changePassword.changePasswordFooter.privacyPolicy")}
            </Link>
            <span className="dot_separator"></span>
            <Link to="https://www.realmadrid.com/en">realmadrid.com</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
