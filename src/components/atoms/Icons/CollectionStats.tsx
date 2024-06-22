export type IconProps = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  color?: string;
  strokeWidth?: string;
  className?: string;
};
const CollectionStats = ({
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
      width={width ?? "40"}
      height={height ?? "40"}
      viewBox={viewBox ?? "0 0 40 40"}
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6665 23.334L15.4882 19.5123C15.8007 19.1999 16.2246 19.0243 16.6665 19.0243C17.1084 19.0243 17.5323 19.1999 17.8448 19.5123L20.4882 22.1557C20.8007 22.4681 21.2246 22.6436 21.6665 22.6436C22.1084 22.6436 22.5323 22.4681 22.8448 22.1557L28.3332 16.6673M28.3332 16.6673L28.3332 20.834M28.3332 16.6673L24.1665 16.6673"
        stroke={fill ?? "#B6D9A1"}
        stroke-width={strokeWidth ?? "3"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <path
        d="M31.6665 26.667C34.4279 26.667 36.6665 28.9056 36.6665 31.667C36.6665 34.4284 34.4279 36.667 31.6665 36.667C28.9051 36.667 26.6665 34.4284 26.6665 31.667C26.6665 28.9056 28.9051 26.667 31.6665 26.667Z"
        stroke={fill ?? "#B6D9A1"}
        stroke-width={strokeWidth ?? "3"}
      />
      <path
        d="M36.6666 22.5003L36.6666 20.0003C36.6666 12.1437 36.6666 8.21532 34.2249 5.77532C31.7866 3.33365 27.8566 3.33366 19.9999 3.33366C12.1432 3.33366 8.21492 3.33366 5.77325 5.77532C3.33325 8.21366 3.33325 12.1437 3.33325 20.0003C3.33325 21.8803 3.33325 23.537 3.36658 25.0003M22.4999 36.667L19.9999 36.667C12.1433 36.667 8.21492 36.667 5.77325 34.227C5.03992 33.492 4.52492 32.622 4.16658 31.5503"
        stroke={fill ?? "#B6D9A1"}
        stroke-width={strokeWidth ?? "3"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CollectionStats;
