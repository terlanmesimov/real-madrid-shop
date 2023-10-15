import { useEffect } from "react";

const Register = () => {
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
        <form className="form"></form>
      </div>
      <div className="register_footer"></div>
    </div>
  );
};

export default Register;
