import React from "react";
import {shallow} from "enzyme";

import GuessList from "./guess-list";

describe("<GuessList />", () => {
  it("Renders without crashing", () => {
    shallow(<GuessList guesses={[]} />);
  });

  it("Renders a list of guesses", () => {
    let values = [1, 2, 42];
    let wrapper = shallow(<GuessList guesses={values} />);
    let items = wrapper.find("li");

    expect(items.length).toEqual(values.length);
    values.forEach((value, index) => {
      expect(items.at(index).text()).toEqual(value.toString());
    });
  });
});
