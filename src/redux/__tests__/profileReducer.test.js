import { addPostAC, profileReducer } from "../profileReducer";

let state;
beforeEach(() => {
  state = {
    posts: [
      { id: 1, likesCount: 1, text: "Hi, how are u?" },
      { id: 2, likesCount: 12, text: "Dima is cool!!1!" },
      { id: 3, likesCount: 23, text: "It's my first post" },
    ],
  };
});

it("new post should be added", () => {
  const action = addPostAC("test text");
  const endState = profileReducer(state, action);
  expect(endState).not.toBe(state);
  expect(endState.posts[0].text).toBe("test text");
  expect(endState.posts[0].likesCount).toBe(0);
});
