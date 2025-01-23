import React from "react";
import loaderImg from "../../assets/svg/loader.svg";
import "./index.scss";
import Image from "next/image";

export const Loader = ({ size = "16" }) => {
  return (
    <Image
      className="loader"
      src={loaderImg}
      alt="pic"
      width={size}
      height={size}
    />
  );
};
