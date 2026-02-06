export interface SelectOption {
  label: string
  value: string
}

export function mapToSelectOptions<T>(
  items: T[],
  labelKey: keyof T,
  valueKey: keyof T
): SelectOption[] {
  return items.map(item => ({
    label: String(item[labelKey]),
    value: String(item[valueKey])
  }))
}
