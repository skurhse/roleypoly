import * as React from 'react';
import { palette } from 'roleypoly/design-system/atoms/colors';

export type LogoProps = {
    fill: string;
    width: number;
    height: number;
    circleFill: string;
    circleOuterFill: string;
    typeFill: string;
    style: object;
    className: string;
    'data-for'?: string;
    'data-tip'?: string;
};

export const Logotype = ({
    typeFill = palette.taupe400,
    circleFill = palette.red200,
    circleOuterFill = palette.green200,
    ...props
}: Partial<LogoProps>) => (
    <svg
        style={props.style}
        className={props.className}
        width={props.width}
        height={props.height}
        data-for={props['data-for']}
        data-tip={props['data-tip']}
        viewBox="45 25 400 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0)">
            <path
                d="M179.855 95.49V96H170.845L154.95 74.495H146.79V96H138.97V40.92H156.905C161.212 40.92 164.838 41.6 167.785 42.96C170.788 44.32 173.027 46.2183 174.5 48.655C176.03 51.0917 176.795 53.925 176.795 57.155C176.795 59.7617 176.285 62.17 175.265 64.38C174.302 66.59 172.828 68.5167 170.845 70.16C168.862 71.7467 166.397 72.9083 163.45 73.645L179.855 95.49ZM146.79 68.035H155.715C159.965 68.035 163.167 67.1283 165.32 65.315C167.53 63.445 168.635 60.8383 168.635 57.495C168.635 54.265 167.615 51.8 165.575 50.1C163.592 48.4 160.645 47.55 156.735 47.55H146.79V68.035Z"
                fill={typeFill}
            />
            <path
                d="M197.154 97.02C193.188 97.02 189.873 96.17 187.209 94.47C184.546 92.7133 182.563 90.3617 181.259 87.415C179.956 84.4117 179.304 81.04 179.304 77.3C179.304 72.7667 180.154 69.055 181.854 66.165C183.554 63.2183 185.849 61.0933 188.739 59.79C191.629 58.43 194.916 57.75 198.599 57.75C202.566 57.75 205.881 58.6283 208.544 60.385C211.208 62.085 213.191 64.4083 214.494 67.355C215.798 70.3017 216.449 73.645 216.449 77.385C216.449 81.975 215.599 85.7433 213.899 88.69C212.199 91.58 209.904 93.705 207.014 95.065C204.124 96.3683 200.838 97.02 197.154 97.02ZM197.834 91.07C205.144 91.07 208.799 86.48 208.799 77.3C208.799 73.1633 207.893 69.8767 206.079 67.44C204.323 64.9467 201.659 63.7 198.089 63.7C194.123 63.7 191.261 64.9183 189.504 67.355C187.804 69.735 186.954 73.05 186.954 77.3C186.954 81.4933 187.861 84.8367 189.674 87.33C191.488 89.8233 194.208 91.07 197.834 91.07Z"
                fill={typeFill}
            />
            <path d="M221.961 96V37.52L229.271 36.67V96H221.961Z" fill={typeFill} />
            <path
                d="M268.08 78.66H242.155C242.212 82.91 243.232 85.9983 245.215 87.925C247.255 89.8517 249.862 90.815 253.035 90.815C255.302 90.815 257.257 90.5317 258.9 89.965C260.6 89.3983 262.47 88.52 264.51 87.33L267.315 92.515C262.669 95.5183 257.795 97.02 252.695 97.02C247.255 97.02 242.892 95.5183 239.605 92.515C236.375 89.455 234.76 84.6383 234.76 78.065C234.76 74.325 235.44 70.925 236.8 67.865C238.16 64.805 240.172 62.3683 242.835 60.555C245.555 58.685 248.87 57.75 252.78 57.75C256.067 57.75 258.872 58.43 261.195 59.79C263.519 61.0933 265.275 62.9067 266.465 65.23C267.655 67.5533 268.25 70.2167 268.25 73.22L268.08 78.66ZM252.78 63.445C249.834 63.445 247.51 64.3233 245.81 66.08C244.167 67.8367 243.09 70.245 242.58 73.305H261.11V72.965C261.11 69.7917 260.374 67.4117 258.9 65.825C257.484 64.2383 255.444 63.445 252.78 63.445Z"
                fill={typeFill}
            />
            <path
                d="M305.129 58.77V59.28L290.934 98.635C289.687 102.092 288.356 104.84 286.939 106.88C285.522 108.977 283.907 110.478 282.094 111.385C280.337 112.348 278.241 112.83 275.804 112.83C273.311 112.83 270.846 112.405 268.409 111.555L270.364 105.945C272.007 106.455 273.622 106.71 275.209 106.71C276.512 106.71 277.617 106.512 278.524 106.115C279.431 105.718 280.309 104.953 281.159 103.82C282.066 102.687 282.944 100.987 283.794 98.72L284.814 96H282.859L268.579 59.28V58.77H276.314L285.069 82.57L286.004 85.12L287.364 89.115L289.489 82.57L297.649 58.77H305.129Z"
                fill={typeFill}
            />
            <path
                d="M327.505 57.75C331.018 57.75 333.936 58.6 336.26 60.3C338.583 62 340.283 64.2667 341.36 67.1C342.493 69.9333 343.06 73.0217 343.06 76.365C343.06 80.6717 342.21 84.3833 340.51 87.5C338.866 90.6167 336.6 92.9967 333.71 94.64C330.82 96.2267 327.533 97.02 323.85 97.02C321.073 97.02 318.381 96.6517 315.775 95.915V111.81H308.465V58.77L315.775 57.92V61.235C317.815 60.1017 319.826 59.2517 321.81 58.685C323.85 58.0617 325.748 57.75 327.505 57.75ZM323.255 91.24C325.578 91.24 327.618 90.73 329.375 89.71C331.188 88.6333 332.605 86.99 333.625 84.78C334.701 82.57 335.24 79.8217 335.24 76.535C335.24 72.285 334.39 69.14 332.69 67.1C330.99 65.06 328.581 64.04 325.465 64.04C322.178 64.04 318.948 64.975 315.775 66.845V89.965C318.438 90.815 320.931 91.24 323.255 91.24Z"
                fill={typeFill}
            />
            <path
                d="M363.436 97.02C359.469 97.02 356.154 96.17 353.491 94.47C350.827 92.7133 348.844 90.3617 347.541 87.415C346.237 84.4117 345.586 81.04 345.586 77.3C345.586 72.7667 346.436 69.055 348.136 66.165C349.836 63.2183 352.131 61.0933 355.021 59.79C357.911 58.43 361.197 57.75 364.881 57.75C368.847 57.75 372.162 58.6283 374.826 60.385C377.489 62.085 379.472 64.4083 380.776 67.355C382.079 70.3017 382.731 73.645 382.731 77.385C382.731 81.975 381.881 85.7433 380.181 88.69C378.481 91.58 376.186 93.705 373.296 95.065C370.406 96.3683 367.119 97.02 363.436 97.02ZM364.116 91.07C371.426 91.07 375.081 86.48 375.081 77.3C375.081 73.1633 374.174 69.8767 372.361 67.44C370.604 64.9467 367.941 63.7 364.371 63.7C360.404 63.7 357.542 64.9183 355.786 67.355C354.086 69.735 353.236 73.05 353.236 77.3C353.236 81.4933 354.142 84.8367 355.956 87.33C357.769 89.8233 360.489 91.07 364.116 91.07Z"
                fill={typeFill}
            />
            <path d="M388.242 96V37.52L395.552 36.67V96H388.242Z" fill={typeFill} />
            <path
                d="M435.382 58.77V59.28L421.187 98.635C419.94 102.092 418.608 104.84 417.192 106.88C415.775 108.977 414.16 110.478 412.347 111.385C410.59 112.348 408.493 112.83 406.057 112.83C403.563 112.83 401.098 112.405 398.662 111.555L400.617 105.945C402.26 106.455 403.875 106.71 405.462 106.71C406.765 106.71 407.87 106.512 408.777 106.115C409.683 105.718 410.562 104.953 411.412 103.82C412.318 102.687 413.197 100.987 414.047 98.72L415.067 96H413.112L398.832 59.28V58.77H406.567L415.322 82.57L416.257 85.12L417.617 89.115L419.742 82.57L427.902 58.77H435.382Z"
                fill={typeFill}
            />
            <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="45"
                y="25"
                width="142"
                height="142"
            >
                <rect
                    x="115.711"
                    y="25"
                    width="100"
                    height="100"
                    transform="rotate(45 115.711 25)"
                    fill="#C4C4C4"
                />
            </mask>
            <g mask="url(#mask0)">
                <circle
                    cx="79.9999"
                    cy="60"
                    r="46"
                    fill={circleFill}
                    stroke={circleOuterFill}
                    strokeWidth="8"
                />
            </g>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="487" height="143" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const Logomark = ({
    circleFill = palette.red200,
    circleOuterFill = palette.green200,
    ...props
}: Partial<LogoProps>) => (
    <svg
        data-for={props['data-for']}
        data-tip={props['data-tip']}
        style={props.style}
        className={props.className}
        width={props.width}
        height={props.height}
        viewBox="30 10 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0)">
            <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="45"
                y="25"
                width="142"
                height="142"
            >
                <rect
                    x="115.711"
                    y="25"
                    width="100"
                    height="100"
                    transform="rotate(45 115.711 25)"
                    fill="#C4C4C4"
                />
            </mask>
            <g mask="url(#mask0)">
                <circle
                    cx="79.9999"
                    cy="60"
                    r="46"
                    fill={circleFill}
                    stroke={circleOuterFill}
                    strokeWidth="8"
                />
            </g>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="130" height="110" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
