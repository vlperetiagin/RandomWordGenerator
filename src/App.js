import React from "react";
import "./styles.css";
import Header from "./Header";

export default class Word extends React.Component {
  state = {
    rotate: false,
    theWord: "Placeholder for your prediction"
  };
  componentDidMount() {
    const elem = this.image;
    elem.addEventListener("animationend", this.rotatingDone);
  }
  componentWillUnmount() {
    const elem = this.image;
    elem.removeEventListener("animationend", this.rotatingDone);
  }

  rotatingDone = () => {
    this.setState(state => {
      return {
        rotate: !state.rotate,
        theWord: this.randomWord()
      };
    });
  };

  randomWord = require("random-words");

  render() {
    return (
      <div>
        <Header title="Spin and find out whats waiting for you today" />
        <div className="theReactImg">
          <img
            src="https://video-react.js.org/assets/logo.png"
            ref={elem => {
              this.image = elem;
            }}
            onClick={() => this.setState({ rotate: true })}
            className={this.state.rotate ? "rotate" : ""}
            alt="sorry"
          />
          <div className="theWord">{this.state.theWord}</div>
        </div>
      </div>
    );
  }
}
