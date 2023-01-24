import React from "react";

const PdfViewer = (props: any) => {
  const { link } = props;
  return (
    <div className="PdfViewer">
      <object
        data={link}
        type="application/pdf"
        width="100%"
        height="600px"
        className="min-h-fit"
      >
        <p>
          Alternative text - include a link &nbsp;&nbsp;
          <a href={link}>to the PDF!</a>
        </p>
      </object>
    </div>
  );
};

export default PdfViewer;
