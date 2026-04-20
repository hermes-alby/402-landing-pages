const temporarySeoHostnames = new Set(['hermes-alby.github.io']);

export const normalizeSiteUrl = (site: URL | string | undefined) => {
  if (!site) {
    return undefined;
  }

  return typeof site === 'string' ? new URL(site) : site;
};

export const isTemporarySeoHost = (site: URL | string | undefined) => {
  const normalizedSite = normalizeSiteUrl(site);
  return normalizedSite ? temporarySeoHostnames.has(normalizedSite.hostname) : false;
};

export const buildCanonicalUrl = ({
  pathname,
  site,
}: {
  pathname: string;
  site: URL | string | undefined;
}) => {
  const normalizedSite = normalizeSiteUrl(site);

  if (!normalizedSite) {
    return undefined;
  }

  return new URL(pathname, normalizedSite).toString();
};

export const buildRobotsDirective = ({
  site,
  noindex = false,
  nofollow = false,
}: {
  site: URL | string | undefined;
  noindex?: boolean;
  nofollow?: boolean;
}) => {
  const shouldNoindex = noindex || isTemporarySeoHost(site);

  return `${shouldNoindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;
};

export const truncateMetaDescription = (text: string, maxLength = 160) => {
  if (text.length <= maxLength) {
    return text;
  }

  const candidate = text.slice(0, maxLength + 1);
  const punctuationIndex = Math.max(candidate.lastIndexOf('. '), candidate.lastIndexOf('; '));

  if (punctuationIndex >= 110) {
    return candidate.slice(0, punctuationIndex + 1).trim();
  }

  const breakIndex = candidate.lastIndexOf(' ');
  const truncated = (breakIndex >= 110 ? candidate.slice(0, breakIndex) : candidate.slice(0, maxLength)).trim();

  return `${truncated.replace(/[.,;:!?\-\s]+$/u, '')}…`;
};

export const xmlEscape = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');