# Performance test with k6

Unit test for performance test.

## What is K6:
+ Modern
+ Flexible
+ User Friendly

## Formm / Anatomy of a test

`init code => Setup code => Vu code (Vu code loops over for the duration of the test) => Tear down code`


## Install K6:

+ Install Nodejs: https://nodejs.org/en/download/

+ Install K6: https://k6.io/docs/getting-started/installation/

## Run test local:

```
k6 run test_script.js

# Run with mode dug
k6 run test_script.js --http-debug
```

## Types of test:

```
export const options = {
  stages: [
    { duration: '1m', target: 1000 },
    { duration: '9m', target: 2000 },
    { duration: '3m', target: 10000 },
    { duration: '7m', target: 10000 },
    { duration: '10m', target: 0 },
  ],
};
```

## Ramp-up:
https://k6.io/docs/using-k6/scenarios/executors/ramping-vus/

In this example, we'll run a two-stage test, ramping up from 0 to 100 VUs for 5 seconds, and down to 0 VUs over 5 seconds.

```
export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '5s', target: 100 },
        { duration: '5s', target: 0 },
      ],
      gracefulRampDown: '0s',
    },
  },
};
```

## Metrics in K6 - Performance test:

https://k6.io/docs/using-k6/metrics/

Example:;;
```
running (00m03.8s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  00m03.8s/10m0s  1/1 iters, 1 per VU

     data_received..................: 22 kB 5.7 kB/s
     data_sent......................: 742 B 198 B/s
     http_req_blocked...............: avg=1.05s    min=1.05s    med=1.05s    max=1.05s    p(90)=1.05s    p(95)=1.05s
     http_req_connecting............: avg=334.26ms min=334.26ms med=334.26ms max=334.26ms p(90)=334.26ms p(95)=334.26ms
     http_req_duration..............: avg=2.7s     min=2.7s     med=2.7s     max=2.7s     p(90)=2.7s     p(95)=2.7s
       { expected_response:true }...: avg=2.7s     min=2.7s     med=2.7s     max=2.7s     p(90)=2.7s     p(95)=2.7s
     http_req_failed................: 0.00% ✓ 0        ✗ 1
     http_req_receiving.............: avg=112.41µs min=112.41µs med=112.41µs max=112.41µs p(90)=112.41µs p(95)=112.41µs
     http_req_sending...............: avg=294.48µs min=294.48µs med=294.48µs max=294.48µs p(90)=294.48µs p(95)=294.48µs
     http_req_tls_handshaking.......: avg=700.6ms  min=700.6ms  med=700.6ms  max=700.6ms  p(90)=700.6ms  p(95)=700.6ms
     http_req_waiting...............: avg=2.7s     min=2.7s     med=2.7s     max=2.7s     p(90)=2.7s     p(95)=2.7s
     http_reqs......................: 1     0.266167/s
     iteration_duration.............: avg=3.75s    min=3.75s    med=3.75s    max=3.75s    p(90)=3.75s    p(95)=3.75s
     iterations.....................: 1     0.266167/s
     vus............................: 1     min=1      max=1
     vus_max........................: 1     min=1      max=1
```
## Insecure Skip TLS Verify
Ref: https://k6.io/docs/using-k6/options/

```
export const options = {
  insecureSkipTLSVerify: true,
};
```

## Generate K6 html report:

https://github.com/benc-uk/k6-reporter

```
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
````

```
export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
```
https://github.com/IzakMarais/reporter

## K6 with Grafana, influxdb
https://medium.com/swlh/beautiful-load-testing-with-k6-and-docker-compose-4454edb3a2e3


## Recodring Tesing:

Using K6 recorder: https://chrome.google.com/webstore/detail/k6-browser-recorder/phjdhndljphphehjpgbmpocddnnmdbda?hl=en

## Postman to K6: 

https://github.com/apideck-libraries/postman-to-k6

## K6 with Typescript:

https://github.com/grafana/k6-template-typescript

## Pipeline:
### Pipeline with Azure:
Load Testing with Azure DevOps and k6: https://techcommunity.microsoft.com/t5/azure-devops/load-testing-with-azure-devops-and-k6/m-p/2489134
### Pipeline with AWS CodeBuild: 
https://k6.io/blog/integrating-k6-with-aws-codebuild/


## References:
https://project-awesome.org/k6io/awesome-k6
