# performance-test-k6


## Install K6:

Install Nodejs: https://nodejs.org/en/download/
Install K6: https://k6.io/docs/getting-started/installation/



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

## Metrics in K6 - Performance test:

https://k6.io/docs/using-k6/metrics/

## Generate K6 html report:

https://github.com/benc-uk/k6-reporter

