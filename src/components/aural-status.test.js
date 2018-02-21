import React from "react";
import {shallow} from "enzyme";

import AuralStatus from "./aural-status";

describe("<AuralStatus />", () => {
  it("Renders without crashing", () => {
    shallow(<AuralStatus />);
  });

  it("Renders an aural status update", () => {
    let test_status = "You are listening to the game Super Mario Bros";
    let wrapper = shallow(<AuralStatus auralStatus={test_status} />);
    expect(wrapper.contains(test_status)).toEqual(true);
  });
});
