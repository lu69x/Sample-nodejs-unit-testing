// const { getScore, login } = require('./app')

const app = require("./app");
const { fetchSomeData, getScore, login, testJson } = require("./app");

it("should get A", () => {
  expect(getScore(50)).toEqual("A");
  expect(getScore(100)).toEqual("A");
});

it("should get F", () => {
  expect(getScore(1)).toEqual("F");
  expect(getScore(49)).toEqual("F");
});

it("should login", async () => {
  const isLoggedIn = await login();
  expect(isLoggedIn).toBe(true);
});

it("should works with async", async () => {
  const response = await fetchSomeData();
  expect(response).toEqual("success");
});

it("should works with resolves", async () => {
  await expect(fetchSomeData()).resolves.toEqual("success");
});

describe("mock functions", () => {
  it("should works with jest.fn()", () => {
    let myMock = fetchSomeData;
    myMock = jest.fn();

    expect(myMock()).toEqual(undefined);
  });

  it("should works with mockReturnValue", () => {
    const myMock = jest.fn(); // สร้าง myMock เป็น mock function

    myMock.mockReturnValue("hello world"); // mock ค่าตอน return ให้มัน

    expect(myMock()).toEqual("hello world");
  });

  it("should works with jest.fn() and mockResolvedValue", async () => {
    let myMock = fetchSomeData;
    myMock = jest.fn();
    myMock.mockResolvedValue("success from mock data");
    await expect(myMock()).resolves.toEqual("success from mock data");
  });

  it("spyOn and custom response", async () => {
    const spy = jest.spyOn(app, "fetchSomeData").mockResolvedValue("fail");

    const isLoggedIn = await app.login();
    expect(isLoggedIn).toBe(false);

    expect(spy).toHaveBeenCalled();

    app.fetchSomeData.mockRestore();
  });
});

it("should return JSONobject", () => {
  expect(testJson()).toEqual({ key_1: "Some string value" });
});
