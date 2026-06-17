import { ui, defaultLang, showDefaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: string) {
  const l = lang in ui ? (lang as keyof typeof ui) : defaultLang;
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[l][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: string) {
  const l = lang in ui ? (lang as keyof typeof ui) : defaultLang;
  return function translatePath(path: string, targetLang?: string) {
    const ll = targetLang ?? l;
    return !showDefaultLang && ll === defaultLang ? path : `/${ll}${path}`;
  };
}
