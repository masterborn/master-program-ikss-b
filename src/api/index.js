import data from './data.json';

export default async function getPagesData() {
  const apiEndPoint = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/${process.env.ENV_ID}/entries?access_token=${process.env.TOKEN}`;
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 5000);

  const res = await fetch(apiEndPoint, { signal: controller.signal });
  if (res.status !== 200) {
    throw new Error(`Wrong Status Code: ${res.status}: ${res.statusText}`);
  }

  const resJSON = await res.json();
  if (!resJSON) throw new Error("Response doesnt't contain JSON package");
  if (!resJSON.includes.Asset) throw new Error('JSON data is corrupted: No assets present');

  return resJSON;
}

export async function getPagesDataMockup() {
  return data;
}
