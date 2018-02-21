import React from "react";
import {shallow} from "enzyme";

import Feedback from "./feedback";

describe("<Feedback />", () => {
  it("Renders without crashing", () => {
    shallow(<Feedback />);
  });

  it("Renders feedback", () => {
    let feedbackText = "Shoryuken!";
    let wrapper = shallow(<Feedback feedback={feedbackText} />);
    expect(wrapper.contains(feedbackText)).toEqual(true);
  });
});
