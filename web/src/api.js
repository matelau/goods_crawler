const API_HOST = process.env.REACT_APP_API_HOST;

function makeUrl(url, queryObject) {
  const queryString = encodeURI(
    Object.entries(queryObject)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
  );
  return `${url}?${queryString}`;
}

function checkStatus(response) {
  console.log('checkStatus');
  console.log(response);
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  console.log('parseJson');
  console.log(response.body);
  return response.json();
}

function getHeaders() {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
}

export function getCrawlResults(search, site) {
  const init = { headers: getHeaders(), method: 'GET' };
  console.log(init);
  const url = makeUrl(`${API_HOST}/api/crawl`, { search: search, site: site });
  console.log(url);
  return fetch(url, init)
    .then(checkStatus)
    .then(parseJSON);
}
