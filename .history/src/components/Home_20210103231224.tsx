import * as React from "react";
import Image from "./Image";
import Text from "./Text";
import Title from "./Title";

const Home = () => {
  return (
    <div className="home">
      <div className="home__text-container">
        <Title
          title="<Alex Puth (aka Khurram) />"
          parentComponent="home"
          subTitle="Front-End Developer"
        />
        <Text parentComponent="home" mobile="" />
      </div>
      <Image
        src=`${public_url}/images/headshot.jpg`
        alt="Headshot of Alex Puth"
        parentComponent="home"
      />
      <Text parentComponent="home" mobile="--mobile" />
    </div>
  );
};

export default Home;
