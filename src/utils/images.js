const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export function imagePath(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const clean = path.replace(/^\//, '');
  return `${basePath}/${clean}`;
}
