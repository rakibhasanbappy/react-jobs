// import React from 'react'
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue-500",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="blue-500"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
