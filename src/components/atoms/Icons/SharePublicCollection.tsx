export type IconProps = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  color?: string;
  strokeWidth?: string;
  className?: string;
};
const SharePublicCollection = ({
  fill,
  height,
  viewBox,
  width,
  className,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      className={className}
      width={width ?? "52"}
      height={height ?? "46"}
      viewBox={viewBox ?? "0 0 52 46"}
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.6972 3.25167C29.6704 3.70701 29.0008 4.73375 29.0008 5.85871V11.5728H19.0012C10.323 11.5728 3.2876 18.6082 3.2876 27.2864C3.2876 37.402 10.5641 41.9197 12.2336 42.8304C12.4569 42.9554 12.7068 43 12.9568 43C13.93 43 14.7157 42.2054 14.7157 41.2411C14.7157 40.5715 14.3318 39.9555 13.8407 39.5001C13.0015 38.7055 11.8587 37.1431 11.8587 34.4289C11.8587 29.697 15.6978 25.8579 20.4297 25.8579H29.0008V31.5719C29.0008 32.6969 29.6615 33.7236 30.6972 34.1789C31.7328 34.6343 32.9292 34.4468 33.7685 33.6968L48.0536 20.8402C48.6518 20.2956 49 19.5278 49 18.7153C49 17.9028 48.6607 17.135 48.0536 16.5904L33.7685 3.73379C33.3591 3.36307 32.8504 3.11995 32.3048 3.03431C31.7592 2.94866 31.2004 3.02421 30.6972 3.25167Z"
        stroke={fill ?? "#B6D9A1"}
        stroke-width={strokeWidth ?? "5"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SharePublicCollection;
