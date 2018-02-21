import React from "react";
import {shallow} from "enzyme";

import TopNav from "./top-nav";

describe("<TopNav />", () => {
  it("Renders without crashing", () => {
    shallow(<TopNav />);
  });

  it("Should call onRestartGame when new game is clicked", () => {
    let callback = jest.fn();
    let wrapper = shallow(<TopNav onRestartGame={callback} />);
    let link = wrapper.find(".new");
    // The 2nd argument, the event object, doesn't do anything
    link.simulate("click", { preventDefault() {} });
    expect(callback).toHaveBeenCalled();
  });
});
