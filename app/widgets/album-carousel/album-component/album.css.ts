import {flexColCenterCenter, flexColTopCenter} from '@/app/shared.css';
import {keyframes, style} from '@vanilla-extract/css';

const albumContainerBaseStyles = style({
   borderRadius: 8,
   width: '100%',
   height: '100%',
   position: 'relative',
});
export const firstCard = style([
   albumContainerBaseStyles,
   {
      border: '2px solid rgba(15, 15, 15, 0.8)',
      overflow: 'clip',
   },
]);
export const thumbnail = style({
   objectFit: 'cover',
   objectPosition: 'center',
   width: '100%',
   height: '100%',
});
export const triggerButton = style({
   borderRadius: 4,
   background: 'rgba(33,33,33,0.95)',
   color: 'white',
   opacity: 0.9,
   transition: 'all 250ms ease',
   fontSize: 20,
   cursor: 'pointer',
   ':hover': {
      opacity: 1,
   },
});
const revealInfoAnimation = keyframes({
   from: {
      transform: 'translateY(-100%)',
   },
   to: {
      transform: 'translateY(0)',
   },
});
const hideInfoAnimation = keyframes({
   from: {
      transform: 'translateY(0)',
   },
   to: {
      transform: 'translateY(-100%)',
   },
});
export const hideAlbumInfo = style([
   albumContainerBaseStyles,
   {
      position: 'absolute',
      top: 0,
      animation: `${hideInfoAnimation} 250ms ease both`,
   },
]);
export const showAlbumInfo = style([
   albumContainerBaseStyles,
   {
      position: 'absolute',
      top: 0,
      animation: `${revealInfoAnimation} 250ms ease both`,
   },
]);
export const infoMainSection = style([
   flexColTopCenter,
   {
      width: '100%',
      height: '100%',
      //      border: '8px solid blue',
      padding: '12px 8px 32px',
      overflowX: 'clip',
      overflowY: 'scroll',
      gap: 6,
   },
]);
/**
 * Footer is position absolute at the bottom
 * @type {string}
 */
export const albumFooter: string = style([
   flexColCenterCenter,
   {
      width: '100%',
      height: '12%',
      //      border: '2px solid pink',
      position: 'absolute',
      bottom: 0,
   },
]);
export const closeInfoButton = style({
   position: 'absolute',
   borderRadius: '100%',
   opacity: 0.8,
   transition: 'opacity 250ms ease',
   ':hover': {
      opacity: 1,
   },
});
export const textDescription = style({
   width: '100%',
   textAlign: 'center',
   letterSpacing: 1.5,
   fontSize: 16,

});
export const albumTitle = style({
   fontSize: 20,
   textAlign: 'center',
   fontWeight: 'semi-bold',
});
