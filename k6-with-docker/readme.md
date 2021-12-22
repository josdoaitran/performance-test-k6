Docker for run test with K6

https://hub.docker.com/r/loadimpact/k6/


Run: 
```
docker-compose up -d influxdb grafana
docker-compose run k6 run - </tests/test.js
```


## References:

- K6 with AWS build code: https://github.com/brandiqa/k6-example-aws-codebuild-original

- https://github.com/brandiqa/k6-example-aws-codebuild/blob/main/cloud-example/buildspec.yml

- https://karanraj568359.medium.com/running-k6-test-and-and-putting-metrics-to-cloudwatch-using-container-faa09527ab6b

- https://k6.io/blog/integrating-k6-with-aws-codebuild/
