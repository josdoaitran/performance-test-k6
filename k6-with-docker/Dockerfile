FROM loadimpact/k6

ENV SCRIPT tests/example.js
ENV Environment local
ENV STAGE 5s:2,10s:2,5s:0

COPY tests tests
COPY tests/reportlib.js reportlib.js

ENTRYPOINT []
CMD ["sh", "-c", "k6 run $SCRIPT --stage $STAGE"]
