const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    //expect(hello.hello()).toEqual("Hello World from the Office Hours in the terminal!");
    expect(hello.hello()).toEqual("Hello World from Spain!");
  });
});
