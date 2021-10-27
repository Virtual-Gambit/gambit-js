/* eslint max-len: 0, no-param-reassign: 0 */

export function parseJSON(response) {
  return response.data;
}

export function capitalize(item) {
  return item.charAt(0).toUpperCase() + item.slice(1);
}
