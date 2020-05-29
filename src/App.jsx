import React from "react";
import * as Styled from "./App.styles";
import { Counter } from "./components/Counter/Counter";
import { SumCalculator } from "./components/SumCalculator/SumCalculator";
import { Users } from "./components/Users/Users";

const App = () => (
  <>
    <Styled.AppContainer>
      <Counter />
      <SumCalculator />
      <Users />
    </Styled.AppContainer>
  </>
);

export default App;
