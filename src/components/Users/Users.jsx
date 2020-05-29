import React from "react";
import * as Styled from "./Users.styles";
import { UserPicker } from "./UserPicker/UserPicker";
import { UserDetails } from "./UserDetails/UserDetails";

export const Users = () => {
  return (
    <Styled.Container>
      <React.Suspense
        fallback={<Styled.Loading>Wczytywanie użytkowników...</Styled.Loading>}
      >
        <UserPicker />
      </React.Suspense>
      <React.Suspense
        fallback={<Styled.Loading>Wczytywanie szczegółów...</Styled.Loading>}
      >
        <UserDetails />
      </React.Suspense>
    </Styled.Container>
  );
};
