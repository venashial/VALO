export async function send({ method = 'GET', url = '', data = {} }, customFetch) {
  const fetchFunc = customFetch || window.fetch

  const response = await fetchFunc('/api/' + url, {
    method,
    ...(typeof data === 'object' && Object.keys(data).length > 0 ? {
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(data)
    } : {})
  });

  const json = await response.json();

  if (response.status === 400) {
    alert(json.message);
  }

  response.json = json;

  return response;
}