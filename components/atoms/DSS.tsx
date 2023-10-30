import cn from '@/lib/utils';
import {ComponentPropsWithoutRef} from 'react';

type DSSProps = ComponentPropsWithoutRef<'svg'> & {
   withText?: boolean;
};
export default function DSS({withText = false, ...props}: DSSProps) {
   return (
      <svg
         width='402'
         height='447'
         preserveAspectRatio='xMidYMid meet'
         viewBox='0 0 402 447'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...props}>
         <g id='logo'>
            <g
               id='domain'
               className={cn(withText ? 'visible' : 'hidden')}>
               <g id='digitalsolution.studio'>
                  <path
                     d='M17.5443 364.261C17.5443 363.983 17.4886 363.658 17.3771 363.286C17.2656 362.896 17.1263 362.552 16.9591 362.255H11.6642C11.4041 362.571 11.1904 362.942 11.0232 363.37C10.856 363.797 10.7724 364.187 10.7724 364.54C10.7724 365.469 11.1533 366.129 11.915 366.519C12.6581 366.89 13.4106 367.076 14.1723 367.076C15.0641 367.076 15.8537 366.862 16.5411 366.435C17.2099 365.989 17.5443 365.265 17.5443 364.261ZM1.32517 357.657H20.9999V359.998L19.6344 360.917C20.0617 361.382 20.4519 362.004 20.8049 362.784C21.1393 363.546 21.3065 364.429 21.3065 365.432C21.3065 367.531 20.6377 369.12 19.3 370.197C17.9438 371.275 16.2531 371.814 14.228 371.814C12.203 371.814 10.4937 371.275 9.10033 370.197C7.68835 369.101 6.98236 367.438 6.98236 365.209C6.98236 364.744 7.05668 364.252 7.20531 363.732C7.33536 363.212 7.52114 362.719 7.76266 362.255H1.63171L1.32517 357.657Z'
                     fill='white'
                  />
                  <path
                     d='M3.13658 348.559C3.82399 348.559 4.40922 348.81 4.89226 349.311C5.37531 349.813 5.61683 350.407 5.61683 351.095C5.61683 351.782 5.37531 352.367 4.89226 352.85C4.40922 353.333 3.82399 353.575 3.13658 353.575C2.44917 353.575 1.85466 353.333 1.35303 352.85C0.851409 352.367 0.600597 351.782 0.600597 351.095C0.600597 350.407 0.851409 349.813 1.35303 349.311C1.85466 348.81 2.44917 348.559 3.13658 348.559ZM7.48398 348.782H20.9999V353.38H7.48398L7.48398 348.782Z'
                     fill='white'
                  />
                  <path
                     d='M14.1723 340.585C15.0826 340.585 15.8722 340.371 16.5411 339.944C17.2099 339.498 17.5443 338.773 17.5443 337.77C17.5443 337.473 17.4886 337.138 17.3771 336.767C17.2656 336.377 17.1263 336.033 16.9591 335.736H11.692C11.4319 336.052 11.2183 336.423 11.0511 336.85C10.8653 337.278 10.7724 337.668 10.7724 338.021C10.7724 338.968 11.1533 339.637 11.915 340.027C12.6581 340.399 13.4106 340.585 14.1723 340.585ZM7.51185 331.165H21.0557C22.9135 331.165 24.3627 331.779 25.4031 333.005C26.4435 334.231 26.9637 336.033 26.9637 338.411C26.9637 338.987 26.8429 339.842 26.6014 340.975C26.3599 342.108 25.9604 343.084 25.4031 343.901C24.8829 343.678 24.3534 343.455 23.8146 343.232C23.2758 342.991 22.737 342.758 22.1983 342.536C22.6256 341.644 22.9043 340.901 23.0343 340.306C23.1829 339.712 23.2573 339.108 23.2573 338.495C23.2573 337.584 23.0715 336.897 22.6999 336.432C22.3469 335.968 21.8174 335.736 21.1114 335.736H20.5819C20.7863 336.2 20.9535 336.702 21.0835 337.241C21.2322 337.779 21.3065 338.346 21.3065 338.941C21.3065 341.04 20.6377 342.628 19.3 343.706C17.9438 344.765 16.2624 345.294 14.2559 345.294C12.2122 345.294 10.4937 344.756 9.10033 343.678C7.70693 342.601 7.01023 340.938 7.01023 338.69C7.01023 337.965 7.16815 337.213 7.48398 336.432C7.78124 335.634 8.1621 334.937 8.62657 334.342L7.51185 333.478L7.51185 331.165Z'
                     fill='white'
                  />
                  <path
                     d='M3.13658 322.04C3.82399 322.04 4.40922 322.29 4.89226 322.792C5.37531 323.294 5.61683 323.888 5.61683 324.576C5.61683 325.263 5.37531 325.848 4.89226 326.331C4.40922 326.814 3.82399 327.056 3.13658 327.056C2.44917 327.056 1.85465 326.814 1.35303 326.331C0.851408 325.848 0.600596 325.263 0.600596 324.576C0.600596 323.888 0.851408 323.294 1.35303 322.792C1.85465 322.29 2.44917 322.04 3.13658 322.04ZM7.48398 322.262H20.9999V326.861H7.48398V322.262Z'
                     fill='white'
                  />
                  <path
                     d='M21.3901 311.307C21.3901 312.997 20.9535 314.456 20.0803 315.682C19.2071 316.89 17.9066 317.493 16.1788 317.493H11.4412V319.472H7.87414L7.87413 317.493L4.36277 317.493L3.69394 312.923H7.87413V309.941L11.4412 309.244V312.923H15.5936C16.2067 312.923 16.699 312.765 17.0706 312.449C17.4421 312.115 17.6279 311.632 17.6279 311C17.6279 310.759 17.5908 310.48 17.5164 310.164C17.4236 309.83 17.3028 309.514 17.1542 309.217L20.3032 307.907C20.6005 308.223 20.8513 308.724 21.0557 309.412C21.2786 310.099 21.3901 310.731 21.3901 311.307Z'
                     fill='white'
                  />
                  <path
                     d='M17.6558 300.756C17.6558 300.403 17.5722 300.041 17.405 299.669C17.2378 299.279 17.0055 298.907 16.7083 298.554H15.3427V300.533C15.3427 300.96 15.4728 301.304 15.7329 301.564C15.9744 301.824 16.2717 301.954 16.6247 301.954C16.9034 301.954 17.1449 301.843 17.3492 301.62C17.5536 301.378 17.6558 301.09 17.6558 300.756ZM7.03809 299.669C7.03809 297.923 7.53972 296.539 8.54296 295.517C9.54621 294.495 10.856 293.984 12.4723 293.984H20.9999V296.102L19.941 297.022C20.3311 297.468 20.6562 298.025 20.9163 298.694C21.1764 299.363 21.3065 300.059 21.3065 300.784C21.3065 302.475 20.8885 303.738 20.0524 304.574C19.2164 305.391 18.1203 305.8 16.764 305.8C15.3149 305.8 14.2466 305.317 13.5592 304.351C12.8532 303.385 12.5002 302.122 12.5002 300.561V298.582C11.9986 298.638 11.6084 298.842 11.3298 299.195C11.0511 299.53 10.9117 299.957 10.9117 300.477C10.9117 300.998 10.9953 301.601 11.1626 302.289C11.3298 302.958 11.5248 303.543 11.7478 304.044L8.32002 305.271C7.98561 304.62 7.68835 303.766 7.42825 302.707C7.16814 301.629 7.03809 300.617 7.03809 299.669Z'
                     fill='white'
                  />
                  <path
                     d='M1.32516 285.354H20.9999V289.924L1.63171 289.924L1.32516 285.354Z'
                     fill='white'
                  />
                  <path
                     d='M12.3887 275.459C12.7789 274.345 13.327 273.286 14.033 272.282C14.7204 271.279 15.6772 270.777 16.9034 270.777C18.2968 270.777 19.3836 271.251 20.1639 272.199C20.9256 273.128 21.3065 274.53 21.3065 276.407C21.3065 276.983 21.1672 277.847 20.8885 278.999C20.6098 280.132 20.1825 281.07 19.6065 281.813L16.4296 280.503C16.7083 279.927 16.9684 279.287 17.2099 278.581C17.4328 277.856 17.5443 277.252 17.5443 276.769C17.5443 276.342 17.4793 276.017 17.3492 275.794C17.2006 275.571 17.0427 275.459 16.8755 275.459C16.6711 275.459 16.4853 275.571 16.3181 275.794C16.1509 276.017 15.9837 276.388 15.8165 276.908C15.4449 278.023 14.9247 279.091 14.2559 280.113C13.5871 281.117 12.6488 281.618 11.4412 281.618C10.0664 281.618 8.98885 281.107 8.20855 280.085C7.42825 279.064 7.03809 277.661 7.03809 275.877C7.03809 275.32 7.16814 274.549 7.42825 273.564C7.68835 272.561 8.10637 271.688 8.6823 270.945L11.8593 272.255C11.562 272.83 11.3205 273.416 11.1347 274.01C10.9303 274.586 10.8281 275.134 10.8281 275.654C10.8281 276.082 10.8932 276.398 11.0232 276.602C11.1533 276.788 11.3019 276.881 11.4691 276.881C11.6363 276.881 11.7849 276.788 11.915 276.602C12.045 276.398 12.203 276.017 12.3887 275.459Z'
                     fill='white'
                  />
                  <path
                     d='M7.03809 260.745C7.03809 258.497 7.66977 256.695 8.93311 255.339C10.1965 253.964 11.9893 253.277 14.3116 253.277C16.5411 253.277 18.2689 254.001 19.4951 255.451C20.7027 256.9 21.3065 258.711 21.3065 260.885C21.3065 263.04 20.7027 264.796 19.4951 266.152C18.2875 267.508 16.5132 268.186 14.1723 268.186C11.9429 268.186 10.1965 267.48 8.93312 266.068C7.66977 264.656 7.03809 262.882 7.03809 260.745ZM17.5443 260.829C17.5443 259.956 17.2842 259.268 16.764 258.767C16.2252 258.265 15.4078 258.014 14.3116 258.014C13.2898 258.014 12.4538 258.247 11.8035 258.711C11.1533 259.157 10.8281 259.807 10.8281 260.662C10.8281 261.554 11.1161 262.241 11.692 262.724C12.268 263.207 13.0947 263.449 14.1723 263.449C15.2313 263.449 16.058 263.226 16.6525 262.78C17.2471 262.334 17.5443 261.684 17.5443 260.829Z'
                     fill='white'
                  />
                  <path
                     d='M1.32516 245.18H20.9999V249.75H1.63171L1.32516 245.18Z'
                     fill='white'
                  />
                  <path
                     d='M21.5294 235.983C21.5294 237.859 20.9907 239.187 19.9131 239.968C18.8355 240.748 17.4979 241.138 15.9001 241.138H7.51185V236.54H15.7886C16.4203 236.54 16.9034 236.382 17.2378 236.066C17.5722 235.75 17.7394 235.304 17.7394 234.729C17.7394 234.376 17.6465 233.958 17.4607 233.475C17.2749 232.991 17.0613 232.546 16.8197 232.137H7.51185V227.539H20.9999V229.852L19.8016 230.911C20.2103 231.487 20.6005 232.23 20.9721 233.14C21.3436 234.032 21.5294 234.979 21.5294 235.983Z'
                     fill='white'
                  />
                  <path
                     d='M21.3901 216.598C21.3901 218.289 20.9535 219.747 20.0803 220.973C19.2071 222.181 17.9066 222.785 16.1788 222.785H11.4412V224.763H7.87413V222.785L4.36277 222.785L3.69394 218.214H7.87413V215.233L11.4412 214.536V218.214H15.5936C16.2067 218.214 16.699 218.056 17.0706 217.741C17.4421 217.406 17.6279 216.923 17.6279 216.292C17.6279 216.05 17.5908 215.771 17.5164 215.455C17.4236 215.121 17.3028 214.805 17.1542 214.508L20.3032 213.198C20.6005 213.514 20.8513 214.016 21.0557 214.703C21.2786 215.39 21.3901 216.022 21.3901 216.598Z'
                     fill='white'
                  />
                  <path
                     d='M3.13658 205.602C3.82399 205.602 4.40921 205.852 4.89226 206.354C5.3753 206.856 5.61682 207.45 5.61682 208.138C5.61682 208.825 5.3753 209.41 4.89226 209.893C4.40921 210.376 3.82399 210.618 3.13658 210.618C2.44917 210.618 1.85465 210.376 1.35303 209.893C0.851403 209.41 0.600591 208.825 0.600591 208.138C0.600591 207.45 0.851403 206.856 1.35303 206.354C1.85465 205.852 2.44917 205.602 3.13658 205.602ZM7.48398 205.824H20.9999V210.423H7.48398L7.48398 205.824Z'
                     fill='white'
                  />
                  <path
                     d='M7.03809 194.897C7.03809 192.649 7.66976 190.846 8.93311 189.49C10.1965 188.115 11.9893 187.428 14.3116 187.428C16.5411 187.428 18.2689 188.152 19.4951 189.602C20.7027 191.051 21.3065 192.862 21.3065 195.036C21.3065 197.191 20.7027 198.947 19.4951 200.303C18.2875 201.659 16.5132 202.337 14.1723 202.337C11.9429 202.337 10.1965 201.631 8.93311 200.219C7.66976 198.807 7.03809 197.033 7.03809 194.897ZM17.5443 194.98C17.5443 194.107 17.2842 193.42 16.764 192.918C16.2252 192.416 15.4078 192.165 14.3116 192.165C13.2898 192.165 12.4538 192.398 11.8035 192.862C11.1533 193.308 10.8281 193.958 10.8281 194.813C10.8281 195.705 11.1161 196.392 11.692 196.875C12.268 197.358 13.0947 197.6 14.1723 197.6C15.2313 197.6 16.058 197.377 16.6525 196.931C17.2471 196.485 17.5443 195.835 17.5443 194.98Z'
                     fill='white'
                  />
                  <path
                     d='M6.98235 175.402C6.98235 173.525 7.52113 172.188 8.5987 171.389C9.67626 170.571 11.0139 170.163 12.6117 170.163H20.9999V174.733L12.7232 174.733C12.0915 174.733 11.6084 174.909 11.274 175.262C10.9396 175.597 10.7724 176.052 10.7724 176.628C10.7724 177.018 10.8746 177.473 11.0789 177.994C11.2833 178.514 11.5063 178.978 11.7478 179.387H20.9999V183.957H7.51185V181.644L8.7659 180.585C8.33859 179.991 7.93915 179.229 7.56758 178.3C7.17743 177.353 6.98235 176.386 6.98235 175.402Z'
                     fill='white'
                  />
                  <path
                     d='M18.6312 162.823C19.3186 162.823 19.8852 163.055 20.3311 163.52C20.777 163.965 20.9999 164.514 20.9999 165.164C20.9999 165.851 20.777 166.427 20.3311 166.892C19.8852 167.338 19.3186 167.56 18.6312 167.56C17.9623 167.56 17.405 167.338 16.9591 166.892C16.4946 166.427 16.2624 165.851 16.2624 165.164C16.2624 164.514 16.4946 163.965 16.9591 163.52C17.405 163.055 17.9623 162.823 18.6312 162.823Z'
                     fill='white'
                  />
                  <path
                     d='M12.3887 154.368C12.7789 153.253 13.327 152.194 14.0329 151.191C14.7204 150.187 15.6772 149.686 16.9033 149.686C18.2967 149.686 19.3836 150.16 20.1639 151.107C20.9256 152.036 21.3065 153.439 21.3065 155.315C21.3065 155.891 21.1671 156.755 20.8885 157.907C20.6098 159.04 20.1825 159.978 19.6065 160.721L16.4296 159.412C16.7083 158.836 16.9684 158.195 17.2099 157.489C17.4328 156.764 17.5443 156.16 17.5443 155.677C17.5443 155.25 17.4793 154.925 17.3492 154.702C17.2006 154.479 17.0427 154.368 16.8755 154.368C16.6711 154.368 16.4853 154.479 16.3181 154.702C16.1509 154.925 15.9837 155.297 15.8165 155.817C15.4449 156.931 14.9247 158 14.2559 159.022C13.5871 160.025 12.6488 160.526 11.4412 160.526C10.0664 160.526 8.98885 160.015 8.20854 158.994C7.42824 157.972 7.03809 156.569 7.03809 154.786C7.03809 154.228 7.16814 153.457 7.42824 152.473C7.68834 151.469 8.10636 150.596 8.6823 149.853L11.8592 151.163C11.562 151.739 11.3205 152.324 11.1347 152.918C10.9303 153.494 10.8281 154.042 10.8281 154.563C10.8281 154.99 10.8932 155.306 11.0232 155.51C11.1533 155.696 11.3019 155.789 11.4691 155.789C11.6363 155.789 11.7849 155.696 11.915 155.51C12.045 155.306 12.203 154.925 12.3887 154.368Z'
                     fill='white'
                  />
                  <path
                     d='M21.3901 139.626C21.3901 141.317 20.9535 142.775 20.0803 144.001C19.2071 145.209 17.9066 145.813 16.1788 145.813H11.4412V147.791H7.87413V145.813H4.36276L3.69393 141.242H7.87413V138.26L11.4412 137.564V141.242H15.5936C16.2066 141.242 16.699 141.084 17.0706 140.768C17.4421 140.434 17.6279 139.951 17.6279 139.319C17.6279 139.078 17.5908 138.799 17.5164 138.483C17.4235 138.149 17.3028 137.833 17.1542 137.536L20.3032 136.226C20.6005 136.542 20.8513 137.043 21.0557 137.731C21.2786 138.418 21.3901 139.05 21.3901 139.626Z'
                     fill='white'
                  />
                  <path
                     d='M21.5294 128.518C21.5294 130.394 20.9906 131.723 19.9131 132.503C18.8355 133.283 17.4979 133.673 15.9001 133.673H7.51184V129.075L15.7886 129.075C16.4203 129.075 16.9033 128.917 17.2378 128.601C17.5722 128.286 17.7394 127.84 17.7394 127.264C17.7394 126.911 17.6465 126.493 17.4607 126.01C17.2749 125.527 17.0613 125.081 16.8197 124.672H7.51184V120.074H20.9999V122.387L19.8016 123.446C20.2103 124.022 20.6005 124.765 20.9721 125.675C21.3436 126.567 21.5294 127.515 21.5294 128.518Z'
                     fill='white'
                  />
                  <path
                     d='M17.5443 109.05C17.5443 108.771 17.4886 108.446 17.3771 108.074C17.2656 107.684 17.1263 107.34 16.9591 107.043H11.6642C11.4041 107.359 11.1904 107.731 11.0232 108.158C10.856 108.585 10.7724 108.975 10.7724 109.328C10.7724 110.257 11.1533 110.917 11.915 111.307C12.6581 111.679 13.4106 111.864 14.1723 111.864C15.0641 111.864 15.8537 111.651 16.5411 111.223C17.2099 110.778 17.5443 110.053 17.5443 109.05ZM1.32515 102.445H20.9999V104.786L19.6344 105.706C20.0617 106.17 20.4519 106.792 20.8049 107.573C21.1393 108.334 21.3065 109.217 21.3065 110.22C21.3065 112.32 20.6377 113.908 19.3 114.986C17.9437 116.063 16.2531 116.602 14.228 116.602C12.2029 116.602 10.4937 116.063 9.10032 114.986C7.68834 113.889 6.98235 112.227 6.98235 109.997C6.98235 109.533 7.05667 109.04 7.20529 108.52C7.33534 108 7.52113 107.508 7.76265 107.043H1.6317L1.32515 102.445Z'
                     fill='white'
                  />
                  <path
                     d='M3.13657 93.347C3.82398 93.347 4.40921 93.5978 4.89225 94.0994C5.3753 94.601 5.61682 95.1955 5.61682 95.883C5.61682 96.5704 5.3753 97.1556 4.89225 97.6386C4.40921 98.1217 3.82398 98.3632 3.13657 98.3632C2.44916 98.3632 1.85464 98.1217 1.35302 97.6386C0.851398 97.1556 0.600586 96.5704 0.600586 95.883C0.600586 95.1955 0.851398 94.601 1.35302 94.0994C1.85464 93.5978 2.44916 93.347 3.13657 93.347ZM7.48397 93.5699H20.9999V98.1681L7.48397 98.1681V93.5699Z'
                     fill='white'
                  />
                  <path
                     d='M7.03808 82.642C7.03808 80.3939 7.66976 78.5918 8.93311 77.2356C10.1965 75.8607 11.9893 75.1733 14.3116 75.1733C16.5411 75.1733 18.2689 75.8979 19.4951 77.347C20.7027 78.7962 21.3065 80.6076 21.3065 82.7813C21.3065 84.9364 20.7027 86.6921 19.4951 88.0483C18.2875 89.4046 16.5132 90.0827 14.1723 90.0827C11.9428 90.0827 10.1965 89.3767 8.93311 87.9647C7.66976 86.5528 7.03808 84.7785 7.03808 82.642ZM17.5443 82.7256C17.5443 81.8524 17.2842 81.165 16.764 80.6633C16.2252 80.1617 15.4078 79.9109 14.3116 79.9109C13.2898 79.9109 12.4538 80.1431 11.8035 80.6076C11.1533 81.0535 10.8281 81.7037 10.8281 82.5583C10.8281 83.4501 11.1161 84.1375 11.692 84.6206C12.268 85.1036 13.0947 85.3451 14.1723 85.3451C15.2313 85.3451 16.058 85.1222 16.6525 84.6763C17.247 84.2304 17.5443 83.5802 17.5443 82.7256Z'
                     fill='white'
                  />
               </g>
            </g>
            <g id='arrows'>
               <g id='arrow-down'>
                  <path
                     id='Union'
                     d='M211.5 57.5H214.5V15L239.5 32.5H241L241.5 29L214.5 0H211.5L184.5 29L185 32.5H186.5L211.5 15V57.5Z'
                     fill='white'
                  />
               </g>
               <g id='arrow-up'>
                  <path
                     id='Union_2'
                     d='M214.5 389.5L211.5 389.5L211.5 432L186.5 414.5L185 414.5L184.5 418L211.5 447L214.5 447L241.5 418L241 414.5L239.5 414.5L214.5 432L214.5 389.5Z'
                     fill='white'
                  />
               </g>
            </g>
            <g id='letters'>
               <g id='letter-d'>
                  <path
                     id='Vector 13'
                     d='M30 67.5V379.5H150C181 379.5 220.2 351.7 245 308.5L203 267C195 282.5 179.3 306.3 162.5 315.5C150 325.5 124.7 325.9 85.5 325.5V122H126C155 123.5 170.8 133.8 186 157C186 138.5 185.4 125.4 211 95C203.833 87.6667 182.9 72.3 156.5 69.5L30 67.5Z'
                     fill='white'
                  />
               </g>
               <g id='letter-s'>
                  <path
                     id='Vector 14'
                     d='M353 164L402 129C395.167 117 375.8 90.1001 353 78.5001C324.5 64.0001 258.5 53.0001 217.5 95.5001C184.7 129.5 186.5 168 191.5 183C194.833 196.833 211.1 227.6 249.5 240C287.9 252.4 302.5 255.5 305 255.5C315 257.333 336.2 265.9 341 285.5C345.8 305.1 326 319.667 315.5 324.5C310.667 326.167 296.2 329 277 327C267.4 326.454 254.5 320.5 246.5 314C242.9 324.4 224 347 208.5 359.5C221.667 367.833 243.4 378.6 273 381C302.6 383.4 327.333 377.667 336 374.5C351.833 368.833 386.1 347.3 396.5 306.5C406.9 265.7 384.833 233.167 372.5 222C365 215.667 343.7 201.8 318.5 197C293.3 192.2 272.667 185.667 265.5 183C246 173 241.5 159 251 138C263.5 123 281.5 115.671 305 120C324 123.5 343.8 137.6 353 164Z'
                     fill='white'
                  />
               </g>
            </g>
         </g>
      </svg>
   );
}

// <svg
//    version='1.0'
//    xmlns='http://www.w3.org/2000/svg'
//    viewBox='0 0 105.000000 102.000000'
//    preserveAspectRatio='xMidYMid meet'
//    {...props}>
//    <g
//       transform='translate(0.000000,102.000000) scale(0.100000,-0.100000)'
//       stroke='none'>
//       <path
//          d='M0 721 l0 -299 322 155 c315 151 322 154 340 135 19 -18 12 -22 -322
//       -201 l-340 -183 0 -114 c0 -63 3 -114 6 -114 4 0 401 301 701 532 8 6 15 3 21
//    -9 9 -15 -39 -61 -335 -318 l-345 -300 288 -3 c264 -2 295 -1 354 17 156 48
//    279 169 337 331 28 80 31 218 7 301 -42 143 -144 261 -281 327 l-78 37 -337 3
//    -338 3 0 -300z m535 60 c15 -6 0 -14 -70 -35 -49 -15 -103 -31 -119 -36 -44
//    -15 -46 -13 -46 35 l0 45 108 -1 c59 0 116 -4 127 -8z m194 -380 c-12 -28 -39
//    -67 -61 -87 -38 -34 -125 -81 -134 -71 -2 2 44 63 103 136 102 124 108 130
//    111 102 2 -16 -7 -52 -19 -80z'
//       />
//    </g>
// </svg>