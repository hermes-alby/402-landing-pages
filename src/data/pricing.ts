import { btcUsdFetchedAt, btcUsdSource, usdPerSat } from './generated/btc-usd';

export type UsdFixedPrice = {
  kind: 'usd-fixed';
  usd: number;
  unitLabel?: string;
};

export type SatsFixedPrice = {
  kind: 'sats-fixed';
  sats: number;
  unitLabel?: string;
  note?: string;
};

export type SatsRatePrice = {
  kind: 'sats-rate';
  sats: number;
  unitAmount: number;
  unitLabel: string;
  note?: string;
};

export type SatsRateRangePrice = {
  kind: 'sats-rate-range';
  satsMin: number;
  satsMax: number;
  unitAmount: number;
  unitLabel: string;
  note?: string;
};

export type ServicePrice = UsdFixedPrice | SatsFixedPrice | SatsRatePrice | SatsRateRangePrice;

export const pricingMetadata = {
  btcUsdFetchedAt,
  btcUsdSource,
};

const usdFormatter = (usd: number) => {
  const maximumFractionDigits = usd >= 0.01 ? 2 : 4;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: maximumFractionDigits,
    maximumFractionDigits,
  }).format(usd);
};

const satFormatter = new Intl.NumberFormat('en-US');

export const usdFromSats = (sats: number) => sats * usdPerSat;

export const formatUsd = (usd: number) => usdFormatter(usd);

export const formatSats = (sats: number) => `${satFormatter.format(sats)} sat${sats === 1 ? '' : 's'}`;

export const createUsdFixedPrice = (usd: number, unitLabel?: string): UsdFixedPrice => ({
  kind: 'usd-fixed',
  usd,
  unitLabel,
});

export const createSatsFixedPrice = (sats: number, unitLabel?: string, note?: string): SatsFixedPrice => ({
  kind: 'sats-fixed',
  sats,
  unitLabel,
  note,
});

export const createSatsRatePrice = ({ sats, unitAmount, unitLabel, note }: Omit<SatsRatePrice, 'kind'>): SatsRatePrice => ({
  kind: 'sats-rate',
  sats,
  unitAmount,
  unitLabel,
  note,
});

export const createSatsRateRangePrice = ({ satsMin, satsMax, unitAmount, unitLabel, note }: Omit<SatsRateRangePrice, 'kind'>): SatsRateRangePrice => ({
  kind: 'sats-rate-range',
  satsMin,
  satsMax,
  unitAmount,
  unitLabel,
  note,
});

const appendUnit = (label: string, unitLabel?: string) => (unitLabel ? `${label} ${unitLabel}` : label);
const appendNote = (label: string, note?: string) => (note ? `${label} ${note}` : label);

export const formatPriceLabel = (price: ServicePrice) => {
  if (price.kind === 'usd-fixed') {
    return appendUnit(formatUsd(price.usd), price.unitLabel);
  }

  if (price.kind === 'sats-fixed') {
    return appendNote(appendUnit(`~${formatUsd(usdFromSats(price.sats))} (${formatSats(price.sats)})`, price.unitLabel), price.note);
  }

  if (price.kind === 'sats-rate') {
    return appendNote(`~${formatUsd(usdFromSats(price.sats))} per ${new Intl.NumberFormat('en-US').format(price.unitAmount)} ${price.unitLabel} (${formatSats(price.sats)})`, price.note);
  }

  return appendNote(`~${formatUsd(usdFromSats(price.satsMin))}–${formatUsd(usdFromSats(price.satsMax))} per ${new Intl.NumberFormat('en-US').format(price.unitAmount)} ${price.unitLabel} (${formatSats(price.satsMin)}–${formatSats(price.satsMax)})`, price.note);
};

export const buildCostDetail = (price: ServicePrice) => `Cost: ${formatPriceLabel(price)}`;
