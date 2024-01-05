/**
 * Interface for network information.
 */
export interface NetworkInformation extends EventTarget {
   downlink: number; // Effective bandwidth estimate in Mbps
   downlinkMax: number; // Maximum downlink speed in Mbps
   effectiveType: 'slow-2g' | '2g' | '3g' | '4g'; // Effective type of the connection
   rtt: number; // Round-trip time in ms
   saveData: boolean; // Reduced store usage option
   type: 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown'; // Type of connection
}

/**
 * Determine if the network connection is fast.
 *
 * @param {NetworkInformation | null} networkInfo - Network information object.
 * @return {boolean} - Whether the connection is considered fast.
 */
export function isFastConnection(networkInfo: NetworkInformation | null): boolean {
   return networkInfo
      ? networkInfo.downlink >= 5 &&
           (networkInfo.effectiveType === '4g' || networkInfo.effectiveType === '3g') &&
           networkInfo.rtt <= 100
      : false;
}

/**
 * Check if high-resolution video can be used based on network conditions.
 *
 * @param {NetworkInformation | null} networkInfo - Network information object.
 * @return {boolean} - Whether high resolution can be used.
 */
export const canUseHighRes = (networkInfo: NetworkInformation | null): boolean => {
   return networkInfo?.saveData === false && isFastConnection(networkInfo);
};
