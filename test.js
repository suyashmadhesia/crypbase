var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd',
  params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '7d'},
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '60dc35c5ffmsh035a7ae9c8d9d04p177b8ejsn0cfcc8853303'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});