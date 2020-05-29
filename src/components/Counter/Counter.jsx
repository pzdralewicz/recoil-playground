import React from "react";
import * as Styled from "./Counter.styles";
import { useRecoilState } from "recoil";
import { counterState } from "../../recoil/counter";

export const Counter = () => {
  const [counter, setCounter] = useRecoilState(counterState);

  return (
    <Styled.Form>
      <Styled.Counter>{counter}</Styled.Counter>
      <Styled.Buttons>
        <Styled.DecrementButton onClick={() => setCounter(counter - 1)}>
          -
        </Styled.DecrementButton>
        <Styled.ResetButton onClick={() => setCounter(0)}>
          RESET
        </Styled.ResetButton>
        <Styled.IncrementButton onClick={() => setCounter(counter + 1)}>
          +
        </Styled.IncrementButton>
      </Styled.Buttons>
    </Styled.Form>
  );
};
