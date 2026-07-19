const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const SITE_URL = basePath
  ? `https://biznes-ip.ru${basePath}`
  : "https://sad.biznes-ip.ru";

export const SITE_NAME = "Грядка10";
export const REGION_NOTE = "Ориентир — средняя полоса России";
