export type IconProps = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  color?: string;
  strokeWidth?: string;
  className?: string;
};
const ShareCollection = ({
  height,
  fill,
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
        d="M16.445 25.5748C16.61 25.6298 16.7933 25.6665 16.9583 25.6665C17.325 25.6665 17.6917 25.5198 17.9483 25.2448L17.952 25.2411C18.0803 25.1128 22.2878 20.8191 28.3983 20.2398V24.2915C28.3983 24.8415 28.71 25.3365 29.2233 25.5565C29.7183 25.7581 30.305 25.6665 30.7083 25.2815L39.875 16.5731C40.15 16.3165 40.2967 15.9498 40.2967 15.5831C40.2967 15.2165 40.15 14.8498 39.875 14.5931L30.7083 5.88481C30.5164 5.6952 30.2724 5.56711 30.0073 5.51688C29.7423 5.46666 29.4683 5.49659 29.2204 5.60286C28.9724 5.70912 28.7618 5.88689 28.6153 6.11346C28.4689 6.34002 28.3934 6.6051 28.3983 6.87481V11.0548C24.695 11.2931 21.6883 12.5398 19.47 14.7765C15.6017 18.6448 15.5833 24.0715 15.5833 24.2915C15.5833 24.8598 15.9317 25.3548 16.445 25.5748ZM22 8.70815C22 8.34347 21.8551 7.99374 21.5973 7.73587C21.3394 7.47801 20.9897 7.33315 20.625 7.33315H16.0417C14.4614 7.33315 12.9459 7.9609 11.8285 9.0783C10.7111 10.1957 10.0833 11.7112 10.0833 13.2915V27.9581C10.0833 29.5384 10.7111 31.0539 11.8285 32.1713C12.9459 33.2887 14.4614 33.9165 16.0417 33.9165H30.7083C32.2886 33.9165 33.8041 33.2887 34.9215 32.1713C36.0389 31.0539 36.6667 29.5384 36.6667 27.9581V27.0415C36.6667 26.6768 36.5218 26.3271 36.2639 26.0692C36.0061 25.8113 35.6563 25.6665 35.2917 25.6665C34.927 25.6665 34.5773 25.8113 34.3194 26.0692C34.0615 26.3271 33.9167 26.6768 33.9167 27.0415V27.9581C33.9167 28.809 33.5786 29.6251 32.977 30.2268C32.3753 30.8285 31.5592 31.1665 30.7083 31.1665H16.0417C15.1908 31.1665 14.3747 30.8285 13.773 30.2268C13.1714 29.6251 12.8333 28.809 12.8333 27.9581V13.2915C12.8333 11.5205 14.2707 10.0831 16.0417 10.0831H20.625C20.9897 10.0831 21.3394 9.93828 21.5973 9.68042C21.8551 9.42255 22 9.07282 22 8.70815ZM8.25 13.2915C8.25 13.1411 8.25428 12.9926 8.26283 12.846C7.41626 13.3839 6.71919 14.1268 6.23622 15.0059C5.75325 15.885 5.50002 16.8718 5.5 17.8748V27.9581C5.5 30.754 6.61064 33.4353 8.58758 35.4122C10.5645 37.3892 13.2458 38.4998 16.0417 38.4998H26.125C27.1283 38.5001 28.1155 38.247 28.9949 37.764C29.8743 37.281 30.6176 36.5838 31.1557 35.737C31.0078 35.7455 30.8587 35.7498 30.7083 35.7498H16.0417C13.9752 35.7498 11.9933 34.9289 10.5321 33.4677C9.07091 32.0065 8.25 30.0246 8.25 27.9581V13.2915Z"
        fill={fill ?? "#B6D9A1"}
        stroke={fill ?? "#B6D9A1"}
        stroke-width={strokeWidth ?? "3"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ShareCollection;