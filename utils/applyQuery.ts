const getNotValue = (value?: string) => value === null || value === undefined;

export default function applyQuery(
  value?: string, 
  name?: string
): string {
  if (getNotValue(value) || getNotValue(name)) {
    return "";
  }

  return `&${name}=${value}`;
}