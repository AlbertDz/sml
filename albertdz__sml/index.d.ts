declare module '@albertdz/sml' {
  export function text(property: string, lang: string): string;
  export function createMinifyFromCsv(): void;
  export function createMinifyFromJson(): void;
}