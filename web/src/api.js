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
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

export function getCrawlResults(search, site) {
  const url = makeUrl(`${API_HOST}/crawl`, { search: search, site: site });
  console.log(url);
  return fetch(url)
    .then(checkStatus)
    .then(parseJSON);
}
