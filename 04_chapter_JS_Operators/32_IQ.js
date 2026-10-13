let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);

let name = "Manoj";
let age = 22;
console.log(`My name is   ${name}  and my age is + ${age}`);