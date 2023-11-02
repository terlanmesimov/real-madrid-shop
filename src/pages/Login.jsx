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
import { Auth } from "../utils/AuthContext";
import { MainContext } from "../utils/MainContext";
// COMPONENTS
import Loader from "../components/Loader";

const Login = () => {
  const navigate = useNavigate();
  const { setHasToken } = useContext(Auth);
  // Loader
  const [loader, setLoader] = useState(false);
  const { currentLang } = useContext(MainContext);
  useEffect(() => {
    document.title = "Real Madrid CF | Log in or access";
    if (currentLang === "es") {
      setLang("es");
    }
  }, []);

  // Language
  const { t } = useTranslation();
  const [lang, setLang] = useState("en");
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
    setLoader(true);
    await axios
      .post(process.env.REACT_APP_LOGIN, data)
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        navigate("/");
        setHasToken(true);
        setLoader(false);
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
    <>
      {loader && <Loader />}
      <div className="login">
        <div
          className={`toast_error ${
            toasty
              ? "animate__animated animate__delay-5s animate__fadeOutUp active"
              : ""
          }`}
        >
          <p className="error_message">{t("login.toastyErrorMessage")}</p>
        </div>
        <div className="login_header">
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
        <div className="main">
          <div className="form_heading">
            <h3>{t("login.form.titleOne")}</h3>
            <p>{t("login.form.subTitle")}</p>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="email input_content">
              <input
                type="email"
                name="email"
                className={`email_input input ${
                  errors.email ? "has_error" : ""
                }`}
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
                className={`email_label label ${
                  focusInputEmail ? "active" : ""
                }`}
              >
                {t("login.form.emailLabel")}
              </label>
              <span
                className={`error error_email ${errors.email ? "active" : ""}`}
              >
                {errors.email ? `${t("login.form.emailErrorMessage")}` : ""}
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
                {t("login.form.passwordLabel")}
              </label>
              <span
                className={`error error_password ${
                  errors.password ? "active" : ""
                }`}
              >
                {errors.password
                  ? `${t("login.form.passwordErrorMessage")}`
                  : ""}
              </span>
            </div>
            <button className="form_btn">
              <span>{t("login.form.btn")}</span>
            </button>
          </form>
          <button className="question" onClick={() => navigate("/register")}>
            {t("login.form.question")}
          </button>
          <div className="divider_content">
            <div className="divider"></div>
            <span className="word">OR</span>
            <div className="divider"></div>
          </div>
          <div className="other">
            <button className="login_google">
              <span>{t("login.withGoogle")}</span>
            </button>
            <button className="login_apple">
              <span>{t("login.withAppleId")}</span>
            </button>
          </div>
          <p className="privacy_text">
            {t("login.loginPrivacyText.sliceBeforeMail")}
            <Link className="email">oposicion@corp.realmadrid.com</Link>
            {t("login.loginPrivacyText.sliceAfterMail")}
            <br />
            <Link
              className="privacy_policy"
              to="https://www.realmadrid.com/en/privacy-policy"
            >
              {t("login.loginPrivacyText.link")}
            </Link>
            .
          </p>
        </div>
        <div className="login_footer">
          <div className="footer_text">
            <span>
              Real Madrid © {new Date().getFullYear()}.{" "}
              {t("login.registerFooter.footerText")}.
            </span>
          </div>
          <div className="footer_links">
            <Link to="https://www.realmadrid.com/en/legal-notice">
              {t("login.loginFooter.legalNotice")}
            </Link>
            <span className="dot_separator"></span>
            <Link to="https://www.realmadrid.com/en/legal/cookies-policy">
              {t("login.loginFooter.cookiesPolicy")}
            </Link>
            <span className="dot_separator"></span>
            <Link to="https://www.realmadrid.com/en/privacy-policy">
              {t("login.loginFooter.privacyPolicy")}
            </Link>
            <span className="dot_separator"></span>
            <Link to="https://www.realmadrid.com/en">realmadrid.com</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
