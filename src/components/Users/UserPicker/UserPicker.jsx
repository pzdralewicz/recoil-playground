import React, { useCallback } from "react";
import * as Styled from "./UserPicker.styles";
import {
  selectedUserIdState,
  usersListState,
} from "../../../recoil/user-details";
import { useRecoilValue, useRecoilState } from "recoil";

export const UserPicker = () => {
  const userList = useRecoilValue(usersListState);
  const [selectedUserId, setSelectedUserId] = useRecoilState(
    selectedUserIdState
  );

  const onChange = (e) => {
    setSelectedUserId(e.target.value);
  };

  const renderUsersListMemoized = useCallback(() => {
    return userList.map((user) => (
      <Styled.Option value={user.id} key={user.id}>
        {user.username}
      </Styled.Option>
    ));
  }, [userList]);

  return (
    <Styled.Select onChange={onChange} value={selectedUserId}>
      <Styled.Option value={"null"} disabled>
        Wybierz użytkownika...
      </Styled.Option>
      {renderUsersListMemoized()}
    </Styled.Select>
  );
};
