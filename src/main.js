import { sleep } from "k6";
import http from "k6/http";
import {
  randomString,
} from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';

export const options = {
  duration: "10m",
  vus: 10,
  rps: 20,
  thresholds: {
    http_req_duration: ["p(95)<1000"], // 95% of requests should complete below 1s (.5 for get, .5 for set)
  },
};

export default function () {
  const key = randomString(10);
  const data = randomString(5 * 1024 * 1024);
  
  http.post(
    "https://mk0wcy94wf.execute-api.us-east-1.amazonaws.com/prod",
    JSON.stringify({
      operation: "set",
      key,
      data,
    })
  );

  http.post(
    "https://mk0wcy94wf.execute-api.us-east-1.amazonaws.com/prod",
    JSON.stringify({
      operation: "get",
      key,
    })
  );

  sleep(1);
}
