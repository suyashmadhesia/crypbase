var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history',
  params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '7d'},
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '60dc35c5ffmsh035a7ae9c8d9d04p177b8ejsn0cfcc8853303'
  }
};

function timeConverter(UNIX_timestamp){
  let a = new Date(UNIX_timestamp * 1000);
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
  let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

axios.request(options).then(function (response) {
  const date = timeConverter(response.data.data.history[0].timestamp);
	console.log(date);
}).catch(function (error) {
	console.error(error);
});