'use client'
import {MutableRefObject, useEffect, useRef, useState} from "react";

export function LogoMotion() {
    const path = useRef<SVGPathElement>() as MutableRefObject<SVGPathElement>
    const [pathLength, setPathLength] = useState(0)
    useEffect(() => {
        setPathLength(path.current!.getTotalLength())
    }, [])

    const [scrollPos, setScrollPos] = useState(0)
    const [drawLength, setDrawLength] = useState(0)
    useEffect(() => {

        // What % down is it?
        setScrollPos((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight))
    }, [window.scrollY])

    useEffect(() => {
        setDrawLength(pathLength * scrollPos)
    }, [scrollPos])


    return <svg className={'fixed w-screen h-screen top-0 left-0'} width="433" height="292"
                preserveAspectRatio={'xMidYMax meet'} viewBox="0 0 433 292" fill="none"
                xmlns="http://www.w3.org/2000/svg">
        <g id="legendis-logo">
            <g id="logo">
                <g id="int">
                    <path
                        id="int-virgule"
                        d="M178.171 78.6621C177.873 81.0007 177.831 83.3394 178.256 85.2527C178.341 84.9981 178.468 84.6994 178.553 84.4447C178.681 84.0621 178.808 83.7221 178.936 83.3394L178.171 78.6621Z"
                        fill="#BA981E"/>
                    <path
                        ref={path}
                        style={{
                            strokeDashoffset: String(pathLength - drawLength),
                            strokeDasharray: String(pathLength + ' ' + pathLength)
                        }}
                        id="int-main"
                        d="M118.72 184.158C110.013 194.531 100.44 202.865 90.0664 209.158C79.1331 215.705 67.2798 219.745 54.4398 221.238C51.5864 221.651 48.4398 221.825 45.0398 221.825C41.7598 221.825 38.6131 221.651 35.5998 221.238C32.3198 220.811 29.3064 220.131 26.5864 219.198C23.4398 218.091 20.9198 216.731 19.0131 215.105C16.9731 213.158 15.7331 210.945 15.3198 208.345C15.1864 207.705 15.1064 207.118 15.0531 206.438C15.0531 205.798 15.0531 205.118 15.1464 204.438C15.2664 203.291 15.4398 202.145 15.7864 200.998C15.8264 200.785 15.8664 200.571 15.9464 200.358C17.4398 195.425 20.7998 191.131 25.9864 187.425C30.1998 184.278 35.5998 181.771 42.1464 179.865C47.6264 178.238 53.6664 177.145 60.3864 176.585C71.5731 175.478 84.1998 175.905 98.2664 177.825C98.9464 177.905 99.6398 177.985 100.36 178.078C102.36 178.291 104.4 178.585 106.44 178.878C111.2 179.598 116.053 180.451 120.973 181.518C120.04 182.585 119.28 183.478 118.72 184.158ZM419.146 208.345C413.826 210.651 407.866 212.691 401.32 214.478C389.973 217.491 377.426 219.571 363.653 220.811C351.493 222.038 338.653 222.465 325.173 222.038C312.16 221.651 299.4 220.678 286.853 219.198C280.44 218.211 274.146 217.145 268.013 215.918C261.853 214.678 255.64 213.158 249.4 211.411C239.013 208.691 226.733 204.865 212.533 199.931C210.186 199.118 205.506 197.465 198.413 194.918C191.306 192.398 186.04 190.531 182.64 189.385C179.24 188.238 174.6 186.705 168.813 184.798C162.986 182.878 157.626 181.225 152.746 179.865C147.813 178.505 142.96 177.225 138.2 175.985C137.773 175.825 135.986 175.438 132.88 174.758C134.04 173.185 135.226 171.571 136.333 169.905C138.12 167.358 139.906 164.718 141.6 161.958C142.96 159.878 144.28 157.705 145.56 155.491C151.72 145.251 157.72 133.638 163.586 120.665C168.773 109.185 173.666 97.3713 178.253 85.2513C177.826 83.3313 177.866 80.998 178.173 78.6647L176.293 67.3447C173.96 74.0647 172.266 78.8647 171.16 81.758C160.52 111.398 150.28 135.038 140.453 152.651C138.92 155.318 137.386 157.918 135.866 160.425C134.12 163.185 132.413 165.865 130.68 168.425C129.52 170.158 128.333 171.865 127.146 173.518C122.76 172.545 118.426 171.691 114.053 170.971C112.093 170.638 110.093 170.291 108.133 170.038C105.16 169.571 102.226 169.145 99.2931 168.798C91.7731 167.865 85.2131 167.318 79.5998 167.185C72.6798 167.011 65.9598 167.225 59.5731 167.785C52.3064 168.585 45.7198 169.905 39.6798 171.691C32.1998 173.985 25.9864 177.011 21.0531 180.665C18.0798 182.878 15.4398 185.478 13.2664 188.451C11.5731 190.785 10.2931 193.385 9.39977 196.225C9.14644 197.038 8.9331 197.851 8.75977 198.691C8.46643 200.105 8.2531 201.545 8.2531 203.038C8.1731 203.411 8.1731 203.798 8.1731 204.225C8.1731 206.265 8.38643 208.185 8.75977 209.958C9.86643 213.798 12.0398 216.945 15.3198 219.398C17.9064 221.451 21.1331 223.025 24.9598 224.078C28.1064 224.931 31.4264 225.438 34.9998 225.745C41.4264 226.291 48.0131 226.171 54.8531 225.318C61.4131 224.638 67.8664 223.185 74.2931 221.025C80.5864 218.985 86.5731 216.251 92.3198 212.851C102.826 206.825 112.946 198.358 122.64 187.425C123.866 186.065 125.226 184.491 126.72 182.745C129.866 183.425 132.933 184.118 135.946 184.798C147.426 187.638 159.76 191.211 172.986 195.425C177.786 197.078 184.76 199.465 193.906 202.611C203.04 205.758 208.28 207.585 209.64 208.131C224.133 213.025 236.64 216.851 247.146 219.571C253.693 221.358 260.106 222.891 266.36 224.078C272.786 225.318 279.293 226.425 285.84 227.358C298.68 228.891 311.693 229.691 324.96 229.825C338.733 230.118 351.826 229.571 364.24 228.211C378.453 226.678 391.373 224.291 402.986 221.025C408.906 219.278 414.36 217.305 419.333 215.158L422.266 206.931C421.253 207.411 420.213 207.891 419.146 208.345Z"
                        fill="#BA981E"/>
                </g>
                <g id="ext">
                    <path id="ext-note"
                          d="M164.778 60.7327C174.982 30.87 184.68 4.08599 188.046 0.761989C188.046 0.761989 189.074 6.15399 190.986 12.93C193.648 22.3647 196.112 25.7913 199.234 33.402C207.134 52.6593 207.566 67.7247 204.334 72.7833C202.651 75.4153 200.334 78.1166 200.334 78.1166C198.274 80.5166 196.576 82.038 196.032 82.5526C193.771 84.6953 191.028 88.7873 189.098 97.3766C189.224 94.1033 189.622 90.2766 190.543 86.0766C191.991 79.4726 194.263 74.0993 196.334 70.1166C197.363 67.0193 198.195 63.1686 198.167 58.7526C198.064 42.5273 186.438 31.5807 183.483 28.9527C179.388 41.0007 175.294 53.0487 171.198 65.098"
                          fill="#BA981E"/>
                    <path id="ext-main"
                          d="M100.36 178.078C94.5732 183.518 88.4532 188.198 82.0265 192.105C71.1065 198.651 59.2398 202.691 46.3998 204.185C43.5465 204.611 40.3998 204.771 36.9598 204.771C33.6798 204.771 30.5732 204.611 27.5598 204.185C24.2798 203.758 21.2665 203.078 18.5465 202.145C17.5732 201.798 16.6265 201.411 15.7865 200.998C13.8665 200.145 12.2932 199.158 10.9732 198.011C10.3865 197.465 9.82651 196.865 9.39984 196.225C8.25317 194.745 7.57318 193.078 7.27985 191.291C7.02651 190.065 6.93317 188.745 7.06651 187.385C7.23984 186.025 7.49317 184.665 7.91984 183.305C9.39984 178.371 12.7598 174.078 17.9465 170.371C22.1598 167.225 27.5598 164.718 34.1065 162.811C39.5465 161.198 45.6265 160.091 52.3465 159.531C63.5332 158.425 76.1598 158.851 90.2398 160.771C97.5865 161.571 105.16 162.811 112.947 164.465C112.013 165.531 111.24 166.425 110.693 167.105C109.84 168.078 108.987 169.065 108.133 170.038C105.627 172.891 103.04 175.571 100.36 178.078ZM427.48 182.065C422.973 185.478 417.52 188.531 411.106 191.291C405.786 193.598 399.84 195.638 393.293 197.425C381.933 200.438 369.386 202.518 355.613 203.758C343.453 204.985 330.613 205.411 317.093 204.985C304.12 204.611 291.36 203.625 278.813 202.145C272.4 201.158 266.106 200.105 259.986 198.865C253.813 197.638 247.613 196.105 241.36 194.358C234.426 192.545 226.627 190.225 217.973 187.411C216.84 187.051 215.693 186.665 214.533 186.278C212.12 185.491 209.653 184.651 207.106 183.771C206.426 183.545 205.733 183.305 205.026 183.065C204.853 182.998 204.666 182.945 204.493 182.878C202.146 182.065 197.426 180.371 190.333 177.865C183.226 175.358 178 173.478 174.6 172.331C171.16 171.185 166.56 169.651 160.773 167.745C154.96 165.825 149.6 164.171 144.706 162.811C143.68 162.505 142.627 162.251 141.6 161.958L135.866 160.425C133.946 159.918 132.04 159.411 130.16 158.945C129.733 158.771 127.947 158.385 124.8 157.705C129.187 151.838 133.44 145.411 137.52 138.438C143.64 128.198 149.68 116.585 155.546 103.625C160.866 91.878 165.84 79.8114 170.48 67.3847C171.586 64.4514 172.68 61.398 173.84 58.2114L184.08 29.078L188.333 20.5714L188.04 0.758029C188.04 0.758029 178.64 22.278 166.48 55.438C165.026 59.518 163.88 62.6247 163.12 64.7047C152.493 94.3447 142.24 117.985 132.413 135.598C128.04 143.251 123.613 150.185 119.106 156.478C109.8 154.438 100.52 152.865 91.2532 151.758C83.7332 150.811 77.1865 150.265 71.5732 150.131C64.6398 149.971 57.9198 150.185 51.4932 150.731C44.2665 151.545 37.6398 152.865 31.6398 154.638C24.1598 156.945 17.9465 159.958 13.0132 163.611C9.99984 165.825 7.39985 168.425 5.23985 171.398C3.06651 174.411 1.53317 177.825 0.733175 181.651C0.306508 183.425 0.133179 185.265 0.133179 187.171C0.133179 189.211 0.306508 191.131 0.733175 192.918C1.83984 196.745 3.99985 199.891 7.27985 202.358C7.57318 202.611 7.91984 202.865 8.25317 203.038C10.2132 204.438 12.4665 205.585 15.0532 206.438C15.6532 206.651 16.2932 206.865 16.9332 207.025C20.0398 207.878 23.3865 208.385 26.9198 208.691C33.3465 209.238 39.9732 209.118 46.8265 208.265C53.3732 207.585 59.8398 206.131 66.2532 203.971C72.5465 201.931 78.5465 199.211 84.2798 195.811C91.8932 191.425 99.2532 185.811 106.44 178.878C109.026 176.411 111.533 173.785 114.053 170.971C114.267 170.798 114.427 170.585 114.6 170.371C115.84 169.011 117.2 167.438 118.68 165.705C121.826 166.385 124.893 167.065 127.907 167.745C128.8 167.958 129.733 168.211 130.68 168.425C132.506 168.931 134.413 169.398 136.333 169.905C145.346 172.331 154.907 175.185 164.947 178.371C169.747 180.025 176.68 182.411 185.866 185.558C192.026 187.678 196.4 189.198 199.026 190.131C200.12 190.518 200.907 190.811 201.387 191.011C201.467 191.038 201.533 191.065 201.6 191.091C205.067 192.251 208.413 193.358 211.653 194.398C212.826 194.785 213.973 195.158 215.12 195.518C224.013 198.345 231.986 200.678 239.106 202.518C245.653 204.305 252.08 205.798 258.32 207.025C264.746 208.265 271.253 209.371 277.8 210.305C290.6 211.838 303.653 212.638 316.92 212.771C330.693 213.065 343.786 212.518 356.213 211.158C370.413 209.625 383.293 207.238 394.907 203.971C401.88 201.931 408.173 199.585 413.746 196.998C419.4 194.491 424.4 191.705 428.786 188.665L432.733 177.625C431.2 179.145 429.453 180.625 427.48 182.065Z"
                          fill="#BA981E"/>
                </g>
            </g>
            <g id="text">
                <path id="text66"
                      d="M95.0771 276.967V280.514H78.6311V276.967H95.0771ZM79.4896 247.622V280.514H75.1296V247.622H79.4896ZM132.442 276.967V280.514H115.025V276.967H132.442ZM115.906 247.622V280.514H111.546V247.622H115.906ZM130.138 261.764V265.31H115.025V261.764H130.138ZM132.216 247.622V251.191H115.025V247.622H132.216ZM173.625 264.136V276.176C173.218 276.779 172.57 277.457 171.682 278.21C170.793 278.948 169.566 279.595 168 280.152C166.448 280.695 164.445 280.966 161.991 280.966C159.987 280.966 158.143 280.619 156.456 279.926C154.784 279.219 153.331 278.195 152.096 276.854C150.876 275.499 149.927 273.857 149.249 271.929C148.587 269.987 148.255 267.788 148.255 265.333V262.78C148.255 260.325 148.542 258.134 149.114 256.206C149.701 254.279 150.56 252.645 151.689 251.304C152.819 249.949 154.204 248.925 155.846 248.232C157.487 247.524 159.37 247.17 161.494 247.17C164.009 247.17 166.11 247.607 167.796 248.48C169.498 249.339 170.823 250.529 171.772 252.05C172.736 253.571 173.354 255.303 173.625 257.246H169.265C169.069 256.056 168.677 254.971 168.09 253.992C167.518 253.014 166.697 252.23 165.628 251.643C164.558 251.041 163.18 250.739 161.494 250.739C159.972 250.739 158.655 251.018 157.54 251.575C156.426 252.133 155.507 252.931 154.784 253.97C154.061 255.009 153.519 256.267 153.158 257.743C152.811 259.218 152.638 260.883 152.638 262.735V265.333C152.638 267.231 152.856 268.925 153.293 270.416C153.745 271.907 154.385 273.179 155.213 274.234C156.042 275.273 157.028 276.064 158.173 276.606C159.332 277.148 160.613 277.419 162.013 277.419C163.564 277.419 164.822 277.291 165.786 277.035C166.75 276.764 167.503 276.448 168.045 276.086C168.587 275.71 169.001 275.356 169.287 275.024V267.66H161.674V264.136H173.625ZM213.226 276.967V280.514H195.809V276.967H213.226ZM196.69 247.622V280.514H192.33V247.622H196.69ZM210.922 261.764V265.31H195.809V261.764H210.922ZM213 247.622V251.191H195.809V247.622H213ZM255.403 247.622V280.514H251.02L234.461 255.145V280.514H230.101V247.622H234.461L251.088 273.059V247.622H255.403ZM283.505 280.514H276.638L276.683 276.967H283.505C285.855 276.967 287.813 276.478 289.379 275.499C290.945 274.505 292.12 273.119 292.903 271.342C293.701 269.55 294.1 267.456 294.1 265.062V263.051C294.1 261.169 293.875 259.497 293.423 258.036C292.971 256.56 292.308 255.318 291.435 254.309C290.561 253.285 289.492 252.509 288.227 251.982C286.977 251.455 285.539 251.191 283.912 251.191H276.502V247.622H283.912C286.066 247.622 288.031 247.983 289.808 248.706C291.585 249.414 293.114 250.446 294.394 251.801C295.689 253.142 296.683 254.768 297.376 256.681C298.069 258.578 298.415 260.717 298.415 263.096V265.062C298.415 267.441 298.069 269.588 297.376 271.5C296.683 273.398 295.682 275.017 294.372 276.357C293.076 277.698 291.51 278.729 289.673 279.452C287.85 280.16 285.795 280.514 283.505 280.514ZM278.965 247.622V280.514H274.605V247.622H278.965ZM321.119 247.622V280.514H316.759V247.622H321.119ZM358.055 272.201C358.055 271.432 357.934 270.755 357.693 270.167C357.467 269.565 357.061 269.023 356.473 268.541C355.901 268.059 355.103 267.6 354.079 267.163C353.07 266.726 351.789 266.282 350.238 265.83C348.612 265.348 347.143 264.813 345.833 264.226C344.523 263.624 343.401 262.938 342.467 262.17C341.533 261.402 340.818 260.521 340.321 259.527C339.824 258.533 339.575 257.396 339.575 256.116C339.575 254.836 339.839 253.654 340.366 252.569C340.893 251.485 341.646 250.544 342.625 249.745C343.619 248.932 344.801 248.3 346.172 247.848C347.542 247.396 349.071 247.17 350.758 247.17C353.228 247.17 355.321 247.644 357.038 248.593C358.77 249.527 360.088 250.754 360.991 252.276C361.895 253.782 362.347 255.393 362.347 257.11H358.009C358.009 255.875 357.746 254.783 357.219 253.834C356.692 252.87 355.893 252.117 354.824 251.575C353.755 251.018 352.399 250.739 350.758 250.739C349.207 250.739 347.926 250.973 346.917 251.44C345.908 251.907 345.155 252.539 344.658 253.337C344.176 254.136 343.935 255.047 343.935 256.071C343.935 256.764 344.078 257.396 344.365 257.968C344.666 258.526 345.125 259.045 345.743 259.527C346.375 260.009 347.173 260.453 348.137 260.86C349.116 261.267 350.283 261.658 351.639 262.035C353.506 262.562 355.118 263.149 356.473 263.797C357.829 264.444 358.943 265.175 359.817 265.988C360.705 266.786 361.36 267.697 361.782 268.722C362.219 269.731 362.437 270.875 362.437 272.155C362.437 273.496 362.166 274.708 361.624 275.792C361.082 276.877 360.306 277.803 359.297 278.571C358.288 279.339 357.076 279.934 355.66 280.356C354.259 280.762 352.693 280.966 350.961 280.966C349.44 280.966 347.941 280.755 346.466 280.333C345.005 279.911 343.672 279.279 342.467 278.436C341.277 277.592 340.321 276.553 339.598 275.318C338.89 274.068 338.536 272.622 338.536 270.981H342.874C342.874 272.11 343.092 273.082 343.529 273.895C343.966 274.693 344.56 275.356 345.313 275.883C346.082 276.41 346.948 276.801 347.911 277.057C348.89 277.298 349.907 277.419 350.961 277.419C352.482 277.419 353.77 277.208 354.824 276.786C355.878 276.365 356.677 275.762 357.219 274.979C357.776 274.196 358.055 273.27 358.055 272.201Z"
                      fill="#BA981E"/>
            </g>
        </g>
    </svg>


}
