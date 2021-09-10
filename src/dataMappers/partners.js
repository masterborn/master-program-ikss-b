import { sortByOrder } from './contentful';

export default function sortHomepagePartners(partners) {
  const homepagePartners = partners.filter(
    ({ showOnHomepage, logo }) => showOnHomepage && logo.url,
  );
  return sortByOrder(homepagePartners);
}
