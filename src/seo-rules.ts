import { buildCanonicalUrl, buildRobotsDirective, isTemporarySeoHost } from './seo';
import { variants } from './data/build-variants';

export const isServicePageIndexable = (supportStatus: 'supported' | 'coming-soon') => supportStatus === 'supported';

export const buildPageSeo = ({
  pathname,
  site,
  pageType,
  supportStatus,
}: {
  pathname: string;
  site: URL | string | undefined;
  pageType: 'home' | 'service' | 'install' | 'coming-soon';
  supportStatus?: 'supported' | 'coming-soon';
}) => {
  const shouldNoindex =
    pageType === 'install' ||
    pageType === 'coming-soon' ||
    (pageType === 'service' && !isServicePageIndexable(supportStatus ?? 'coming-soon'));

  return {
    canonical: buildCanonicalUrl({ pathname, site }),
    robots: buildRobotsDirective({ site, noindex: shouldNoindex }),
    noindex: shouldNoindex || isTemporarySeoHost(site),
  };
};

export const getIndexableRouteEntries = (site: URL | string | undefined) => {
  if (isTemporarySeoHost(site)) {
    return [];
  }

  const supportedVariants = variants.filter((variant) => isServicePageIndexable(variant.supportStatus));
  const homepageCanonical = buildCanonicalUrl({ pathname: import.meta.env.BASE_URL, site });

  return [
    homepageCanonical
      ? {
          url: homepageCanonical,
          changefreq: 'weekly',
          priority: '1.0',
        }
      : null,
    ...supportedVariants.map((variant) => {
      const pathname = `${import.meta.env.BASE_URL}agents/${variant.agentKey}/${variant.slug}/`;
      const seo = buildPageSeo({
        pathname,
        site,
        pageType: 'service',
        supportStatus: variant.supportStatus,
      });

      if (!seo.canonical || !isServicePageIndexable(variant.supportStatus)) {
        return null;
      }

      return {
        url: seo.canonical,
        changefreq: 'weekly',
        priority: '0.8',
      };
    }),
  ].filter((entry): entry is { url: string; changefreq: string; priority: string } => Boolean(entry));
};