import { getIndexableRouteEntries } from '../seo-rules';
import { isTemporarySeoHost } from '../seo';

export function GET({ site }: { site: URL | undefined }) {
  const indexableEntries = getIndexableRouteEntries(site);
  const shouldDisallow = isTemporarySeoHost(site) || indexableEntries.length === 0;
  const lines = [
    'User-agent: *',
    shouldDisallow ? 'Disallow: /' : 'Allow: /',
  ];

  if (!shouldDisallow) {
    const sitemapUrl = site ? new URL(`${import.meta.env.BASE_URL}sitemap.xml`, site).toString() : `${import.meta.env.BASE_URL}sitemap.xml`;
    lines.push(`Sitemap: ${sitemapUrl}`);
  }

  return new Response(
    [...lines, ''].join('\n'),
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
}