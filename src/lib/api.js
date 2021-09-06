export default async function api({ method = 'GET', url = '', data = {} }) {
  await fetch('/api/' + url, {
    method,
    ...api(data !== {} ? {
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(data)
    } : {})
  });
}