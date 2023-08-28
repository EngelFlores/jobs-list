import axios from "axios"
import { getJobs } from "./jobsApi";

const baseUrl = process.env.REACT_APP_API_URI

jest.mock("axios");

test("should get jobs list", async () => {
  const status = "ok";

  axios.get = jest.fn().mockResolvedValue(status)

  const response = await getJobs();

  expect(axios.get).toHaveBeenCalledWith(baseUrl);
  expect(response).toEqual(status);
});
