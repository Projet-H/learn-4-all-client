import React from "react";
import Helmet from "react-helmet";

export const withTitle = ({ component: Component, title }) => {
  return class Title extends React.Component {
    render() {
      return (
        <>
          <Helmet>
            <title>{title ? title : "App"}</title>
          </Helmet>
          <Component {...this.props} />
        </>
      );
    }
  };
};

export const withTitleAnimation = ({ component: Component, title }) => {
  return class Title extends React.Component {
    render() {
      return (
        <>
          <Helmet>
            <title>{title ? title : "App"}</title>
          </Helmet>
          <>
            <Component {...this.props} />
          </>
        </>
      );
    }
  };
};
