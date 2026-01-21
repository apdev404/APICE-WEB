export const toBool = (value: number): boolean => Boolean(Number(value));

export const toDate = (value: string | Date): Date =>
  value instanceof Date ? value : new Date(value);

export const toDateString = (date: Date): string =>
  date.toISOString().slice(0, 19).replace("T", " ");
