import ptCommon from "./locales/pt/translation.json";

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, ...0[]];

type NestedKeys<T, D extends number = 5> = [D] extends [never]
  ? never
  : T extends object
    ? {
        [K in keyof T]: T[K] extends object
          ? K | Join<K, NestedKeys<T[K], Prev[D]>>
          : K;
      }[keyof T]
    : "";

export type TranslationKeys = NestedKeys<typeof ptCommon>;

export type TranslationKeyParam = {
  key: TranslationKeys,
  param?: {[key: string]: string | number}
}