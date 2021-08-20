import config from '@root/config/contentful';
import data from '../api/data.json';

export default async function getPagesData() {
  const apiEndPoint = `https://cdn.contentful.com/spaces/${config.SPACE_ID}/environments/${config.ENV_ID}/entries?access_token=${config.TOKEN}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
    throw new Error('API request timeout');
  }, 5000);

  const res = await fetch(apiEndPoint, { signal: controller.signal });
  if (res.status !== 200) {
    throw new Error(`Contentful API: Wrong Status Code: ${res.status}: ${res.statusText}`);
  }
  const contentType = res.headers.get('content-type');
  if (contentType !== 'application/vnd.contentful.delivery.v1+json')
    throw new Error("Contentful API: Response doesn't contain JSON package");

  const resJson = await res.json();
  if (!resJson.includes.Asset)
    throw new Error('Contentful API: JSON data is corrupted: No assets present');

  clearTimeout(timeoutId);
  return resJson;
}

export async function getPagesDataMockup() {
  return data;
}