export default async function makeHttpRequest(url, options = {}) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to make HTTP request $error: ${error.message}`);
  }
}
