const API_HOST = process.env.REACT_APP_API_HOST;

async function makeUrl(url, queryObject) {
  const queryString = encodeURI(
    Object.entries(queryObject)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
  );
  return `${url}?${queryString}`;
}

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

async function parseJSON(response) {
  return response.json();
}

export async function getCrawlResults(search, site) {
  const url = makeUrl(`${API_HOST}/api/crawl`, { search: search, site: site });
  console.log(url);
  return fetch(url, { mode: 'no-cors' })
    .then(checkStatus)
    .then(parseJSON);
}
