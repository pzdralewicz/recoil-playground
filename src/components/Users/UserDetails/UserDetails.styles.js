import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  margin: 0.1rem;
  width: 100%;
  font-size: 13px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Label = styled.span`
  font-weight: bold;
  align-self: flex-end;
  text-align: right;
`;

export const Value = styled.span`
  margin-left: 0.5rem;
  align-self: flex-start;
  text-align: left;
`;
