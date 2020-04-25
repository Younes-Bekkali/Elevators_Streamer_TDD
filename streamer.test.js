const getContent = require("./streamer");

it("returns the weather in montreal", async () => {
  const weather = await getContent("weather");
  expect(typeof weather).toBe("number");
});

it("returns chuck_norris Jokes, enjoy: ", async () => {
  const joke = await getContent("chuck_norris");
  expect(typeof joke).toBe("string");
});
