/*
/
/ Main.js
/
*/

const apiKey = 'at_8K937z5NE4FH7DbIkqBKCjz1WpfZQ';
const url = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=`;
const spinner = '<span class="loader"></span>';
const btn = document.getElementById('submit-button');
const ipAddress = document.getElementById('ip-address');
const locationhtml = document.getElementById('location');
const timeZone = document.getElementById('timezone');
const isp = document.getElementById('isp');

const getIpDetails = async() => {

  btn.innerHTML = spinner;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  ipAddress.innerHTML = data.ip;
  locationhtml.innerHTML = data.location.region;
  timeZone.innerHTML = data.location.timezone;
  isp.innerHTML = data.isp;

  btn.innerHTML = '>';


  


};

getIpDetails();





