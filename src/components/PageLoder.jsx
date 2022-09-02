import React, { useEffect } from "react";
import { useState } from "react";
import Home from "./Home";
import Loader from "./Loader";

function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div>{loading ? <Loader /> : ""}</div>
    </>
  );
}

export default PageLoader
