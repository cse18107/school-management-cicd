"use strict";

var _app = _interopRequireDefault(require("../../app.js"));
var _supertest = _interopRequireDefault(require("supertest"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const request = (0, _supertest.default)(_app.default);
describe("sample test endpoint", () => {
  test("should return response on ping", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });
});