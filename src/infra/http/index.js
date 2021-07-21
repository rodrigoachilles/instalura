export default async function HttpClient(
  url,
  { headers = {}, body, ...options },
  fetchModule = fetch,
) {
  try {
    const opt = {
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      ...options,
    };
    const response = await fetchModule(url, opt);

    if (response.status === 404) {
      return undefined;
    }

    if (response.ok) {
      return response.json();
    }

    throw new Error(response.statusText);
  } catch (err) {
    throw new Error('Falha em pegar os dados do servidor :(');
  }
}
