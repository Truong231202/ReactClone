import React from "react";

type ContentBlockProps = {
  description: string;
};

const Description = ({ description }: ContentBlockProps) => {
  return (
    <>
      <p className="font-normal text-[17px] leading-[27px]">{description}</p>
    </>
  );
};
export default Description;
