import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("div", { id: "parent", key: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement(
      "h1",
      { id: "heading1", key: "heading1" },
      "This is heading."
    ),
    React.createElement(
      "h2",
      { id: "heading2", key: "heading2" },
      "This is a subheading"
    ),
  ]),

  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement(
      "h3",
      { id: "heading3", key: "heading3" },
      "This is heading3"
    ),
    React.createElement(
      "h4",
      { id: "heading4", key: "heading4" },
      "This is heading4"
    ),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

const jsxElement = (
  <h1 id="jsxHeading" className="jsxClass" tabIndex="1">
    This is JSX Element
  </h1>
);

const jsxRoot = ReactDOM.createRoot(document.getElementById("jsxRoot"));
jsxRoot.render(jsxElement);

// React Functional Component
const TitleComponent = () => {
  return (
    <h1 id="titleHeading" className="titleClass">
      This is Title Component
    </h1>
  );
};

const SideBarComponent = () => {
  return <p className="sidebar">This is sidebar component</p>;
};

// Component Composition
const FunctionalComponent = () => {
  return (
    <div id="headingElemnt" className="classN">
      <TitleComponent /> {/* Title Component */}
      <TitleComponent></TitleComponent> {/* Title Component */}
      {TitleComponent()} {/* Invoking as a function */}
      {jsxElement} {/* react element or any js code can go here in {} */}
      <p>This is a Functional Component</p>
      <SideBarComponent />
    </div>
  );
};

root.render(<FunctionalComponent />);
