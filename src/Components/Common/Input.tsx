import React from "react";

export const Input = (props: any) => {
  const {
    type = "text",
    customClass = "",
    label,
    value,
    onChange,
    placeholder = "",
    Icon,
    iconColor,
    disabled = false,
    max = undefined,
  } = props;
  const addIconPadding = () => {
    let str = "";
    if (Icon) {
      str = str + "pl-10";
    }
    return str;
  };
  return (
    <fieldset className={" my-3 " + customClass}>
      {label && (
        <label className="w-full text-start text-labelGrey">{label}</label>
      )}
      <div className={"InputWrapper relative"}>
        {Icon && (
          <div className="absolute top-[0.8rem] left-[0.8rem]">
            <Icon color={iconColor} />
          </div>
        )}
        <input
          type={type}
          className={
            `rounded-lg border-transparent flex-1 appearance-none border
            border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400
            shadow-sm text-base focus:outline-none focus:ring-2 focus: to-highlightBlue 
            focus:border-transparent ` + addIconPadding()
          }
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          max={max}
        />
      </div>
    </fieldset>
  );
};
