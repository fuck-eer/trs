export type IconProps = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  color?: string;
  strokeWidth?: string;
  className?: string;
};
const OpenPage = ({
  fill,
  height,
  viewBox,
  width,
  strokeWidth,
  className,
}: IconProps) => {
  return (
    <svg
      className={className}
      width={width ?? "44"}
      height={height ?? "44"}
      viewBox={viewBox ?? "0 0 44 44"}
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0625 9.625C11.165 9.625 9.625 11.165 9.625 13.0625V30.9375C9.625 32.835 11.165 34.375 13.0625 34.375H30.9375C32.835 34.375 34.375 32.835 34.375 30.9375V26.8125C34.375 26.2655 34.5923 25.7409 34.9791 25.3541C35.3659 24.9673 35.8905 24.75 36.4375 24.75C36.9845 24.75 37.5091 24.9673 37.8959 25.3541C38.2827 25.7409 38.5 26.2655 38.5 26.8125V30.9375C38.5 32.9432 37.7032 34.8668 36.285 36.285C34.8668 37.7032 32.9432 38.5 30.9375 38.5H13.0625C11.0568 38.5 9.13325 37.7032 7.71501 36.285C6.29676 34.8668 5.5 32.9432 5.5 30.9375V13.0625C5.5 11.0568 6.29676 9.13325 7.71501 7.71501C9.13325 6.29676 11.0568 5.5 13.0625 5.5H17.1875C17.7345 5.5 18.2591 5.7173 18.6459 6.10409C19.0327 6.49089 19.25 7.01549 19.25 7.5625C19.25 8.10951 19.0327 8.63411 18.6459 9.02091C18.2591 9.4077 17.7345 9.625 17.1875 9.625H13.0625ZM22 7.5625C22 7.01549 22.2173 6.49089 22.6041 6.10409C22.9909 5.7173 23.5155 5.5 24.0625 5.5H36.4375C36.9845 5.5 37.5091 5.7173 37.8959 6.10409C38.2827 6.49089 38.5 7.01549 38.5 7.5625V19.9375C38.5 20.4845 38.2827 21.0091 37.8959 21.3959C37.5091 21.7827 36.9845 22 36.4375 22C35.8905 22 35.3659 21.7827 34.9791 21.3959C34.5923 21.0091 34.375 20.4845 34.375 19.9375V12.5427L25.52 21.3978C25.3296 21.5946 25.102 21.7517 24.8503 21.8596C24.5986 21.9676 24.328 22.0244 24.0541 22.0266C23.7802 22.0289 23.5087 21.9766 23.2553 21.8727C23.0018 21.7689 22.7716 21.6157 22.5781 21.4219C22.3845 21.2282 22.2315 20.9978 22.1279 20.7443C22.0243 20.4908 21.9722 20.2192 21.9747 19.9453C21.9772 19.6715 22.0343 19.4008 22.1425 19.1493C22.2507 18.8977 22.4079 18.6702 22.605 18.48L31.46 9.625H24.0625C23.5155 9.625 22.9909 9.4077 22.6041 9.02091C22.2173 8.63411 22 8.10951 22 7.5625Z"
        fill={fill ?? "#B6D9A1"}
        stroke={fill ?? "#B6D9A1"}
        stroke-width={strokeWidth ?? "5"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default OpenPage;
