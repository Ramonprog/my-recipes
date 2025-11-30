export const slugfy = (s: string) => {
  return s.trim().toLocaleLowerCase().replace(/\s+/g, '-')
}