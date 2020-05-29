import { atom, selector } from "recoil";
import { queryUserDetails, queryUsers } from "../mocks/service";

export const selectedUserIdState = atom({
  key: "selectedUserIdState",
  default: "null",
});

export const usersListState = selector({
  key: "usersListState",
  get: async () => await queryUsers(),
});

export const selectedUserDetailsState = selector({
  key: "selectedUserDetailsState",
  get: async ({ get }) => {
    const userId = get(selectedUserIdState);

    return await queryUserDetails(userId);
  },
});
