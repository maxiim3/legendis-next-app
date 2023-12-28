import { OT_VideoSourceOptions } from './video-source-options';

/**
 * Type for device screen sizes.
 */
export type DeviceScreens = {
   SIZE_SMALL: number;
   SIZE_MEDIUM: number;
   SIZE_LARGE: number;
   SIZE_XLARGE: number;
};
// Screen size definitions
export const DEVICE: DeviceScreens = Object.freeze({
   SIZE_SMALL: 479,
   SIZE_MEDIUM: 980,
   SIZE_LARGE: 1023,
   SIZE_XLARGE: 1480,
});
/**
 * Get the most suitable video source based on screen width.
 *
 * @param {number} width - The screen width.
 * @param {OT_VideoSourceOptions} source - Object containing video source URLs for different resolutions.
 * @return {string} - The best suitable video source URL.
 */
export const getSourceByWidth = (width: number, source: OT_VideoSourceOptions): string => {
   if (width <= DEVICE.SIZE_SMALL) {
      return source.LOW;
   } else if (width <= DEVICE.SIZE_MEDIUM) {
      return source.MEDIUM;
   } else if (width <= DEVICE.SIZE_LARGE) {
      return source.HIGH;
   } else {
      return source.VERY_HIGH;
   }
};
