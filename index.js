// Cannot read properties of null (reading 'appendChild') in JS

console.log('bobbyhadz.com');

const el = document.getElementById('box');
console.log(el); // 👉️ div

const p = document.createElement('p');

p.textContent = 'bobbyhadz.com';

// ✅ works
el.appendChild(p);
