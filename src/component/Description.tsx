import React from "react";

type ContentBlockProps = {
  description: string;
};

const Description = ({ description }: ContentBlockProps) => {
  return (
    <>
      <p>{description}</p>
    </>
  );
};
export default Description;
