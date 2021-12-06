import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export default function () {
    
    let data = { name: 'Bert' };

    // Using a JSON string as body
    let res = http.post('http://test.k6.io/', JSON.stringify(data),
        {headers: { 'Content-Type': 'application/json' },});

    console.log(res.json().json.name); // Bert

    // Using an object as body, the headers will automatically include
    // 'Content-Type: application/x-www-form-urlencoded'.
    res = http.post(url, data);
    console.log(res.json().form.name); // Bert
  
    check(res, {
        'status is 201': (r) => r.status === 201
    });
    
    // Using a binary array as body. Make sure to open() the file as binary
    // (with the 'b' argument).
    http.post(url, logoBin, { headers: { 'Content-Type': 'image/png' } });

    // Using an ArrayBuffer as body. Make sure to pass the underlying ArrayBuffer
    // instance to http.post(), and not the TypedArray view.
    data = new Uint8Array([104, 101, 108, 108, 111]);
    http.post(url, data.buffer, { headers: { 'Content-Type': 'image/png' } });
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
