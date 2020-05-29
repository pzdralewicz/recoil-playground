const MOCK_USERS = [
  { id: 1, username: "testuser123" },
  { id: 2, username: "mocky50" },
  { id: 3, username: "spacebar" },
  { id: 4, username: "JSON" },
];

const USERS_WITH_DETAILS = [
  {
    id: 1,
    username: "testuser123",
    name: "Test",
    surname: "User",
    age: 20,
    hobby: "Programming",
  },
  {
    id: 2,
    username: "mocky50",
    name: "Mocky",
    surname: "Mock",
    age: 50,
    hobby: "Being mocked",
  },
  {
    id: 3,
    username: "spacebar",
    name: "Space",
    surname: "Bar",
    age: 43,
    hobby: "Being pushed",
  },
  {
    id: 4,
    username: "JSON",
    name: "JSON",
    surname: "Statham",
    age: 21,
    hobby: "Parsing",
  },
];

export const queryUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_USERS);
    }, 3000);
  });
};

export const queryUserDetails = (id) => {
  return new Promise((resolve) => {
    const user = USERS_WITH_DETAILS.find((user) => user.id === parseInt(id));

    if (!user) resolve(null);

    setTimeout(() => {
      resolve(user);
    }, 3000);
  });
};
