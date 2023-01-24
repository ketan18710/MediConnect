import React, { useState } from "react";

interface ChipPros {
  key: number;
  text: string;
  Icon: any;
  iconFunc: Function;
}
const Chip = (props: ChipPros) => {
  const [showIcon, setShowIcon] = useState(false);
  const { key, text, Icon, iconFunc } = props;
  return (
    <div
      key={key}
      className="rounded-full py-2 px-3
       bg-primaryBlue text-white font-semibold 
       text-sm  align-center cursor-pointer
        flex items-center justify-between gap-2
        capitalize
        "
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
    >
      {text}
      {Icon && showIcon && <Icon onClick={iconFunc} />}
    </div>
  );
};

export default Chip;
