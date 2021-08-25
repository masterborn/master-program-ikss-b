import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

function extractAsset(itemData, assets) {
  const assetId = itemData.sys.id;
  const asset = assets.find((collectionAsset) => collectionAsset.sys.id === assetId);
  const assetData = { url: asset.fields.file.url, title: asset.fields.title };
  return assetData;
}

function addAssetsToItems(data) {
  const { items } = data;
  const assets = data.includes.Asset;

  items.forEach((item) => {
    const itemData = item.fields;

    Object.keys(itemData).forEach((contentKey) => {
      const contentData = itemData[contentKey];
      if (contentData.sys?.linkType === 'Asset') {
        const asset = extractAsset(contentData, assets);
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

function mapByPages(basicContent) {
  const pagesCollection = {};
  basicContent.forEach((itemData) => {
    const { page } = itemData || 'common';
    const { identifier } = itemData;
    pagesCollection[page] = { ...pagesCollection[page], [identifier]: itemData };
  });
  return pagesCollection;
}

function mapByContentType(items) {
  const sortedItems = {};
  items.forEach((item) => {
    const itemData = item.fields;
    const contentType = item.sys.contentType.sys.id;
    sortedItems[contentType] = [...(sortedItems[contentType] || []), itemData];
  });
  return sortedItems;
}
function mapItemsCollection(collection) {
  const mappedCollection = mapByContentType(collection);
  const pagesCollection = mapByPages(mappedCollection.basicContent);
  mappedCollection.basicContent = pagesCollection;
  return mappedCollection;
}

export function sortByOrder(data) {
  return data.sort((a, b) => (b.order || 0) - (a.order || 0));
}

export function convertRichTextToReactComponent(Component, richText) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Component>{children}</Component>,
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <b>{text}</b>,
      [MARKS.ITALIC]: (text) => <i>{text}</i>,
      [MARKS.UNDERLINE]: (text) => <ins>{text}</ins>,
    },
  };
  return documentToReactComponents(richText, options);
}

export default function mapData(data) {
  const itemCollection = extractItems(data);
  const mappedCollection = mapItemsCollection(itemCollection);
  return mappedCollection;
}