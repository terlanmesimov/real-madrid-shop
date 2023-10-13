import { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    document.title = "404 Not found - Real Madrid CF | EU";
  }, []);

  return <div>Error</div>;
};

export default Error;
