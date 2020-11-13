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
        Hi, my name is Alex, and I'm a frontend developer. I love using
        functional programming concepts in JavaScript and building web
        applications with it. I'm a coding enthusiast. I've been creating web
        applications since I was 13 - I'm 19 now. It's been my hobby
        since I was a kid, the programming. {" "}
      </p>
      <p className={`${component}__text`}>I'm currently
        trying to get familiar with Vue, and Angular.</p>
    </div>
  );
};

export default Text;
