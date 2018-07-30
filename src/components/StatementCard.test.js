import React from "react";
import StatementCard from "./StatementCard";
import { shallow } from "enzyme";

it("renders", () => {
  let wrapper = shallow(<StatementCard />);
  expect(wrapper).toMatchSnapshot();
});
