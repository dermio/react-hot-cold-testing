import React from "react";
import {shallow} from "enzyme";

import Game from "./game";

describe("<Game />", () => {
  it("Renders without crashing", () => {
    shallow(<Game />);
  });

  it("Can make guesses", () => {
    let wrapper = shallow(<Game />);

    wrapper.setState({
      correctAnswer: 50
    });

    wrapper.instance().makeGuess(25);
    expect(wrapper.state("guesses")).toEqual([25]);
    expect(wrapper.state("feedback")).toEqual("You're Warm.");

    wrapper.instance().makeGuess(80);
    expect(wrapper.state("guesses")).toEqual([25, 80]);
    expect(wrapper.state("feedback")).toEqual("You're Cold...");

  });

});
