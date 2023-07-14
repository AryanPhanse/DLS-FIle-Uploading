import React from "react";
import { NavigationComponent } from "../../components/HomePageComponents";

const HomePage = () => {
  return (
    <>
      <NavigationComponent />
      <h1 className="display-1 my-5 text-center fw-bolder">
        Welcome To DIGITAL LEARNING SOLUTION
      </h1>
          <style dangerouslySetInnerHTML={{__html: "body {\n        background-color: #F4F2F1;\n            }" }} />

    </>
  );
};

export default HomePage;