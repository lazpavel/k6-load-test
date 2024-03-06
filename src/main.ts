import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  duration: '1m',
  vus: 50,
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests should complete below 1.5s
  },
};

export default function () {
  const res = http.get('http://test.k6.io');
  sleep(1);
}