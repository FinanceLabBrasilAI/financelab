export type ErroResponse = { erro: string };

const STAGING_BASE_URL = 'https://backend-staging-ybjr.onrender.com';
const STAGING_BEIA_URL = 'https://backend-ia-staging-rj61.onrender.com';

const PROD_BASE_URL = 'https://backend-tjym.onrender.com';
const PROD_BEIA_URL = 'https://backend-ia-65gk.onrender.com';

const DEV_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.BACKEND_URL ||
  STAGING_BASE_URL;

export const BASE_URL =
  process.env.NODE_ENV === 'development' ? DEV_BASE_URL : PROD_BASE_URL;

export const BEIA_WAKEUP_URL =
  process.env.NODE_ENV === 'development' ? STAGING_BEIA_URL : PROD_BEIA_URL;

export const API_URL = `${BASE_URL}/auth`;
export const USERS_API_URL = `${BASE_URL}/users`;
export const AUTH_TOKEN_KEY = 'auth_token';
export const PORTFOLIO_API_URL = `${BASE_URL}/portfolio`;
export const ALLOCATION_API_URL = `${BASE_URL}/allocation`;
export const FUNDAMENTAL_API_URL = `${BASE_URL}/fundamental`;
export const REPORTS_API_URL = `${BASE_URL}/reports`;

export const gerarIniciais = (nome: string): string => {
  if (!nome || !nome.trim()) return 'U';

  const partes = nome.trim().split(/\s+/);
  const primeira = partes[0].charAt(0).toUpperCase();

  if (partes.length === 1) return primeira;

  const ultima = partes[partes.length - 1].charAt(0).toUpperCase();
  return primeira + ultima;
};

const getStorage = () => {
  if (typeof window === 'undefined') return null;

  try {
    return window.localStorage;
  } catch {
    return null;
  }
};

export const getAuthToken = async () => {
  const storage = getStorage();
  if (!storage) return null;

  try {
    return storage.getItem(AUTH_TOKEN_KEY);
  } catch {
    return null;
  }
};

export const clearAuthToken = async () => {
  const storage = getStorage();
  if (!storage) return;

  try {
    storage.removeItem(AUTH_TOKEN_KEY);
  } catch {
    // noop
  }
};
