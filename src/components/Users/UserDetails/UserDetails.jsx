import React from "react";
import * as Styled from "./UserDetails.styles";
import { useRecoilValue } from "recoil";
import { selectedUserDetailsState } from "../../../recoil/user-details";

export const UserDetails = () => {
  const userDetails = useRecoilValue(selectedUserDetailsState);

  return userDetails ? (
    <Styled.Form>
      <Styled.Row>
        <Styled.Label>ID: </Styled.Label>
        <Styled.Value>{userDetails.id}</Styled.Value>
      </Styled.Row>
      <Styled.Row>
        <Styled.Label>Username: </Styled.Label>
        <Styled.Value>{userDetails.username}</Styled.Value>
      </Styled.Row>
      <Styled.Row>
        <Styled.Label>Imię: </Styled.Label>
        <Styled.Value>{userDetails.name}</Styled.Value>
      </Styled.Row>
      <Styled.Row>
        <Styled.Label>Nazwisko: </Styled.Label>
        <Styled.Value>{userDetails.surname}</Styled.Value>
      </Styled.Row>
      <Styled.Row>
        <Styled.Label>Wiek: </Styled.Label>
        <Styled.Value>{userDetails.age}</Styled.Value>
      </Styled.Row>
      <Styled.Row>
        <Styled.Label>Hobby: </Styled.Label>
        <Styled.Value>{userDetails.hobby}</Styled.Value>
      </Styled.Row>
    </Styled.Form>
  ) : null;
};
