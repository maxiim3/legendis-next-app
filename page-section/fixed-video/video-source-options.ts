/**
 * Type for video sources available for the hook.
 */
export type OT_VideoSourceOptions = {
   LOW: string;
   MEDIUM: string;
   HIGH: string;
   VERY_HIGH: string;
};
export const CLOUDINARY_URL = 'https://res.cloudinary.com';
export const CLOUDINARY_ENV = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
export const VIDEO_SOURCE_OPTIONS: OT_VideoSourceOptions = {
   LOW: `${CLOUDINARY_URL}/${CLOUDINARY_ENV}/video/upload/v1703339189/legendis/230831_CAPSULE_WEB_LEGENDIS_SD.webp`,
   MEDIUM: `${CLOUDINARY_URL}/${CLOUDINARY_ENV}/video/upload/v1703339189/legendis/230831_CAPSULE_WEB_LEGENDIS_HD.webm`,
   HIGH: `${CLOUDINARY_URL}/${CLOUDINARY_ENV}/video/upload/v1703339189/legendis/230831_CAPSULE_WEB_LEGENDIS_FHD.webm`,
   VERY_HIGH: `${CLOUDINARY_URL}/${CLOUDINARY_ENV}/video/upload/v1703339189/legendis/230831_CAPSULE_WEB_LEGENDIS_UHD.webm`,
} as const;

export type OT_SourceKeys = keyof OT_VideoSourceOptions;
export type OT_VideoSource = (typeof VIDEO_SOURCE_OPTIONS)[OT_SourceKeys];
