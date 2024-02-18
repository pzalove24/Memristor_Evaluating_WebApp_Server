export const queryRequest = (params: any) => {
  // Construct the query string dynamically based on provided parameters
  const queryString = Object.entries(params)
    .filter(([_, value]: any) => value !== undefined && value !== null)
    .map(([key, value]: any) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  if (queryString) {
    return `?${queryString}`;
  }
  return null;
};
