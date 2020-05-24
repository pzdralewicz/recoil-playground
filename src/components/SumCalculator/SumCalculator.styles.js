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
  overflow: hidden;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NumberInput = styled.input`
  text-align: center;
`;

export const Sum = styled.span`
  font-weight: bold;
  line-height: 150px;
  transition: 300ms all;
  font-size: 100px;
  text-align: center;
`;
