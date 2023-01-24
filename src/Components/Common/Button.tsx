import React from "react";
import "./style.scss";
export const Button = (props: any) => {
  const {
    text,
    customClass = "",
    onClick,
    Icon,
    iconColor,
    fullRowWidth,
  } = props;
  return (
    <div
      className={
        `ButtonWrapper  my-2 ${fullRowWidth ? "w-full" : "w-fit"} ` +
        customClass
      }
    >
      <button
        className={`${
          fullRowWidth ? "w-full font-md" : "w-fit"
        } flex items-center justify-center py-1 px-3 rounded-md bg-actionBlue text-white text-lg`}
        onClick={onClick}
      >
        {Icon && <Icon className="mr-2" color={iconColor} />}
        {text}
      </button>
    </div>
  );
};
