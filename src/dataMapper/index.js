function addAssetsToItems(data) {
  const { items } = data;
  const assets = data.includes.Asset;

  const fetchAsset = (itemData) => {
    const assetId = itemData.sys.id;
    const asset = assets.find((collectionAsset) => collectionAsset.sys.id === assetId);
    const assetData = { url: asset.fields.file.url, title: asset.fields.title };
    return assetData;
  };

  items.forEach((item) => {
    const itemData = item.fields;

    Object.keys(itemData).forEach((contentKey) => {
      const contentData = itemData[contentKey];
      if (contentData.sys?.linkType === 'Asset') {
        const asset = fetchAsset(contentData);
        itemData[contentKey] = asset;
      }
    });
  });
  return data;
}
function extractItems(data) {
  const collection = addAssetsToItems(data);
  return collection.items;
}

function sortIntoPages(basicContent) {
  const pagesCollection = {};
  basicContent.forEach((itemData) => {
    const { page } = itemData || 'common';
    const { identifier } = itemData;
    pagesCollection[page] = { ...pagesCollection[page], [identifier]: itemData };
  });
  return pagesCollection;
}

function sortToContentType(items) {
  const sortedItems = {};
  items.forEach((item) => {
    const itemData = item.fields;
    const contentType = item.sys.contentType.sys.id;
    sortedItems[contentType] = [...(sortedItems[contentType] || []), itemData];
  });
  return sortedItems;
}
function sortCollection(collection) {
  const sortedCollection = sortToContentType(collection);
  const pagesCollection = sortIntoPages(sortedCollection.basicContent);
  sortedCollection.basicContent = pagesCollection;
  return sortedCollection;
}

export default function mapData(data) {
  const itemCollection = extractItems(data);
  const sortedCollection = sortCollection(itemCollection);
  return sortedCollection;
}
