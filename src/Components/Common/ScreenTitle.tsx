import React from "react";
interface ScreenTitlePropsInterface {
  title: string;
}
const ScreenTitle = (props: ScreenTitlePropsInterface) => {
  const { title } = props;
  return (
    <h2 className="text-primaryBlue mb-8 font-bold text-3xl screenTitle">
      {title}
    </h2>
  );
};

export default ScreenTitle;
