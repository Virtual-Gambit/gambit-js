/* eslint-disable import/prefer-default-export */

/*
 * Is mobile or tablet?
 *
 * @return {Boolean}
 */
export function isMobileAndTablet() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    return true;
  }
  return false;
  // return window.innerWidth <= 800 && window.innerHeight <= 600;
}
