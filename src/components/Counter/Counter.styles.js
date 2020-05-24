import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 15px;
  border: 1px solid #ddd;
  background: rgba(255, 255, 255, 0.85);
  height: 200px;
  width: 200px;
  margin: 1rem;
`;

export const Counter = styled.span`
  font-weight: bold;
  line-height: 150px;
  transition: 300ms all;
  font-size: 150px;
  text-align: center;
`;

export const Buttons = styled.div``;

const Button = styled.button`
  font-weight: bold;
  transition: 300ms all;
  cursor: pointer;
  margin: 0.25rem;
  height: 30px;
  width: 30px;
  color: rgb(29, 31, 56);
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgb(29, 31, 56);
  border-radius: 5px;

  :hover {
    background: rgba(29, 31, 56, 0.1);
  }
`;

export const ResetButton = styled(Button)`
  width: 80px;
`;

export const IncrementButton = styled(Button)``;

export const DecrementButton = styled(Button)``;
