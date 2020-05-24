import React from "react";
import * as Styled from "./SumCalculator.styles";
import { useRecoilState, useRecoilValue } from "recoil";
import { sumInputsState, sumState } from "../../recoil/state";

export const SumCalculator = () => {
  const [inputsState, setInputsState] = useRecoilState(sumInputsState);
  const sum = useRecoilValue(sumState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputsState({
      ...inputsState,
      [name]: value,
    });
  };

  return (
    <Styled.Form>
      <Styled.Sum>{sum}</Styled.Sum>
      <Styled.Inputs>
        <Styled.NumberInput
          name={"firstNumber"}
          value={inputsState.firstNumber}
          onChange={handleInputChange}
        />
        <Styled.NumberInput
          name={"secondNumber"}
          value={inputsState.secondNumber}
          onChange={handleInputChange}
        />
      </Styled.Inputs>
    </Styled.Form>
  );
};
