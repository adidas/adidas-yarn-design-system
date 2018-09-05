export function getRoutes() {
  const { routes } = process.env;

  return routes || [];
}
