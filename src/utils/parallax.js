/* eslint-disable no-unused-expressions */
/* eslint-disable mdx/no-unused-expressions */
/**
 *  @file
 *  @copyright defined in dacra/LICENSE.txt
 */

import { isMobileAndTablet } from './isMobileAndTablet';

/*
 * Add parallax effect to element
 *
 * @param {Object} DOM element
 * @param {Integer} Animation speed, default: 30
 */
export default function setParallax(elem, speed = 30) {
  const top = (window.pageYOffset - elem.offsetTop) / speed;

  isMobileAndTablet
    ? elem.style.backgroundPosition = `0px ${top}px` // eslint-disable-line no-param-reassign
    : null;
}
