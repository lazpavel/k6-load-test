import http from "k6/http";
import { check } from 'k6';

// Define the set of keys
let keys = Array.from({length: 1000}, (_, i) => `key${i}`);

// Define the payloads
let smallPayload = 'x'.repeat(1024); // 1K
let mediumPayload = 'x'.repeat(10240); // 10K
let largePayload = 'x'.repeat(3 * 1024 * 1024); // 3MB

// Define the scenarios
export let options = {
  scenarios: {
    // smallSet: {
    //   executor: 'constant-arrival-rate',
    //   rate: 1000,
    //   timeUnit: '1s',
    //   duration: '10m',
    //   preAllocatedVUs: 100,
    //   maxVUs: 200,
    //   exec: 'smallSet',
    // },
    // smallGet: {
    //   executor: 'constant-arrival-rate',
    //   rate: 1000,
    //   timeUnit: '1s',
    //   duration: '10m',
    //   preAllocatedVUs: 100,
    //   maxVUs: 200,
    //   exec: 'smallGet',
    // },
    // mediumSet: {
    //   executor: 'constant-arrival-rate',
    //   rate: 1000,
    //   timeUnit: '1s',
    //   duration: '10m',
    //   preAllocatedVUs: 100,
    //   maxVUs: 200,
    //   exec: 'mediumSet',
    // },
    // mediumGet: {
    //   executor: 'constant-arrival-rate',
    //   rate: 1000,
    //   timeUnit: '1s',
    //   duration: '10m',
    //   preAllocatedVUs: 100,
    //   maxVUs: 200,
    //   exec: 'mediumGet',
    // },
    // largeSet: {
    //   executor: 'constant-arrival-rate',
    //   rate: 5,
    //   timeUnit: '1s',
    //   duration: '10m',
    //   preAllocatedVUs: 10,
    //   maxVUs: 10,
    //   exec: 'largeSet',
    // },
    largeGet: {
      executor: 'constant-arrival-rate',
      rate: 5,
      timeUnit: '1s',
      duration: '10m',
      preAllocatedVUs: 10,
      maxVUs: 10,
      exec: 'largeGet',
    },
  },
};

export function smallSet() {
  let key = keys[Math.floor(Math.random() * keys.length)];
  let res = http.post(
    "https://mk0wcy94wf.execute-api.us-east-1.amazonaws.com/prod",
    JSON.stringify({
      operation: "set",
      key,
      data: smallPayload,
    })
  );
  check(res, { 'status was 200': (r) => r.status == 200 });
}

export function smallGet() {
  let key = keys[Math.floor(Math.random() * keys.length)];
  let res =   http.post(
    "https://mk0wcy94wf.execute-api.us-east-1.amazonaws.com/prod",
    JSON.stringify({
      operation: "get",
      key,
    })
  );
  check(res, { 'status was 200': (r) => r.status == 200 });
}

export function mediumSet() {
  let key = keys[Math.floor(Math.random() * keys.length)];
  let res = http.post(
    "https://mk0wcy94wf.execute-api.us-east-1.amazonaws.com/prod",
    JSON.stringify({
      operation: "set",
      key,
      data: mediumPayload,
    })
  );
  check(res, { 'status was 200': (r) => r.status == 200 });
}

export function mediumGet() {
  let key = keys[Math.floor(Math.random() * keys.length)];
  let res =   http.post(
    "https://mk0wcy94wf.execute-api.us-east-1.amazonaws.com/prod",
    JSON.stringify({
      operation: "get",
      key,
    })
  );
  check(res, { 'status was 200': (r) => r.status == 200 });
}

export function largeSet() {
  let key = keys[Math.floor(Math.random() * keys.length)];
  let res = http.post(
    "https://mk0wcy94wf.execute-api.us-east-1.amazonaws.com/prod",
    JSON.stringify({
      operation: "set",
      key,
      data: largePayload,
    })
  );
  check(res, { 'status was 200': (r) => r.status == 200 });
}

export function largeGet() {
  let key = keys[Math.floor(Math.random() * keys.length)];
  let res =   http.post(
    "https://mk0wcy94wf.execute-api.us-east-1.amazonaws.com/prod",
    JSON.stringify({
      operation: "get",
      key,
    })
  );
  check(res, { 'status was 200': (r) => r.status == 200 });
}