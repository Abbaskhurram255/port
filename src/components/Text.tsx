import * as React from "react";

interface ITextProps {
  parentComponent: string;
  mobile: string;
}

const Text = (props: ITextProps) => {
  const { parentComponent: component, mobile } = props;
  return (
    <div className={`${component}__text-box${mobile}`}>
      <p className={`${component}__text`}>
        Hi, this is Khurram Ali. I'm a frontend developer. I love using
        functional programming concepts in JavaScript and building web
        applications with it. I'm a coding enthusiast. I've been creating web
        applications since I was 13. I'm 19 now. Programming has been my hobby
        since I was a kid. Anyway, welcome to my site! {" "}
      </p>
      <p className={`${component}__text`}>I'm currently
        learning Vue, and Angular.</p>
    </div>
  );
};

export default Text;
