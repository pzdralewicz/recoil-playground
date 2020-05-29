import { atom, selector } from "recoil";

export const sumInputsState = atom({
  key: "sumInputsState",
  default: {
    firstNumber: 0,
    secondNumber: 0,
  },
});

export const sumState = selector({
  key: "sumState",
  get: ({ get }) => {
    const { firstNumber, secondNumber } = get(sumInputsState);

    const result = Number(firstNumber) + Number(secondNumber);

    if (typeof result !== "number" || isNaN(result)) return 0;
    return result;
  },
});
