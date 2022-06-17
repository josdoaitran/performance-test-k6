FROM loadimpact/k6

ENV SCRIPT tests/example.js
ENV Environment dev
ENV STAGE 5s:2,10s:2,5s:0
ENV SCENARIO Test_Example_01
COPY . .
ENTRYPOINT []
CMD ["sh", "-c", "K6_STATSD_ENABLE_TAGS=true k6 run $SCRIPT --stage $STAGE --out statsd  --system-tags scenario= --tag scenario=$SCENARIO --tag env=$Environment"]
