import React from "react";
import {shallow, mount} from "enzyme";

import GuessForm from "./guess-form";

describe("<GuessForm />", () => {
  it("Renders without crashing", () => {
    shallow(<GuessForm />);
  });

  it("Should call the onMakeChess callback when form submitted", () => {
    let callback = jest.fn();
    let wrapper = mount(<GuessForm onMakeGuess={callback} />);
    let value = 42;

    // Target input[type="number"] to get value on line 15
    wrapper.find(".text").instance().value = value;
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalledWith(value.toString());
  });
});
