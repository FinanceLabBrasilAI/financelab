import { USERS_API_URL } from './api';

export type PlanPricing = {
  monthly: string | null;
  annual: string | null;
};

type PriceValue = {
  priceString?: string;
  price?: number | string;
};

type PackageValue = {
  packageType?: string;
  product?: PriceValue;
};

const PLAN_PRICES_URL =
  process.env.NEXT_PUBLIC_PLAN_PRICES_URL || `${USERS_API_URL}/planos/precos`;

const normalizePrice = (value: unknown): string | null => {
  if (typeof value === 'string' && value.trim()) return value;
  if (typeof value === 'number' && Number.isFinite(value)) {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  }
  if (value && typeof value === 'object') {
    const price = value as PriceValue;
    if (typeof price.priceString === 'string' && price.priceString.trim()) {
      return price.priceString;
    }
    if (typeof price.price === 'number' && Number.isFinite(price.price)) {
      return `R$ ${price.price.toFixed(2).replace('.', ',')}`;
    }
    if (typeof price.price === 'string' && price.price.trim()) {
      return price.price;
    }
  }
  return null;
};

const packagePrice = (packages: PackageValue[] | undefined, type: string) => {
  const packageItem = packages?.find((item) => item.packageType?.toUpperCase() === type);
  return normalizePrice(packageItem?.product);
};

export async function fetchPlanPricing(): Promise<PlanPricing> {
  const response = await fetch(PLAN_PRICES_URL, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Falha ao buscar preços: ${response.status}`);

  const data = await response.json();
  const currentOffering = data?.offerings?.current || data?.current;
  const packages = currentOffering?.availablePackages || data?.availablePackages;

  return {
    monthly: packagePrice(packages, 'MONTHLY') || normalizePrice(data?.monthly),
    annual: packagePrice(packages, 'ANNUAL') || normalizePrice(data?.annual),
  };
}
