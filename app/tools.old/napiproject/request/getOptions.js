module.exports = function getOptions(postData) {
  return {
    host: 'www.napiprojekt.pl',
    port: '80',
    path: '/api/api-napiprojekt3.php',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };
};
