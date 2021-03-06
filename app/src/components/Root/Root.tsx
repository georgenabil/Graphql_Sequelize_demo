import * as React from "react";
import styled from "styled-components";
import Chefs from "./Chefs";

const Heading = styled.strong`
  display: block;
  font-size: 2rem;
  margin: 0.75em 0 1em;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  width: 60em;
`;

const Root = () => {
  return (
    <Wrapper>
      <Heading> the heeadding </Heading>
      <Chefs />
    </Wrapper>
  );
};

export default Root;
