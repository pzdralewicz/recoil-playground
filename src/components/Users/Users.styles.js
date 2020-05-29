import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;

  padding: 1rem;
  border-radius: 15px;
  border: 1px solid #ddd;
  background: rgba(255, 255, 255, 0.85);
  height: 200px;
  width: 200px;
  margin: 1rem;
  overflow: hidden;
`;

export const Loading = styled.span`
  align-self: center;
  justify-self: center;
  text-align: center;
  font-size: 12px;
  font-style: italic;
`;
