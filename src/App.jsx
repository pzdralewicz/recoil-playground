import React from "react";
import * as Styled from "./App.styles";
import { Counter } from "./components/Counter/Counter";
import { SumCalculator } from "./components/SumCalculator/SumCalculator";

const App = () => (
  <>
    <Styled.AppContainer>
      <Counter />
      <SumCalculator />
    </Styled.AppContainer>
  </>
);

export default App;
