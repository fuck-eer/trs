export type IconProps = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  color?: string;
  strokeWidth?: string;
  className?: string;
};
const Vector = ({ fill, height, viewBox, width, className }: IconProps) => {
  return (
    <svg
      className={className}
      width={width ?? "255"}
      height={height ?? "169"}
      viewBox={viewBox ?? "0 0 255 169"}
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_100_475)">
        <path
          d="M261.768 108.804C258.232 107.884 254.559 107.609 250.926 107.992L223.447 69.7462C225.155 66.837 226.645 63.7436 227.565 60.3088C233.016 39.9643 221.046 19.231 200.701 13.7797C180.357 8.32843 159.624 20.2988 154.172 40.6433C152.615 46.456 152.631 52.2657 153.704 57.7761L97.4817 96.7995C95.8582 96.0216 94.1707 95.3852 92.4378 94.8974C89.8104 94.1933 87.2117 93.969 84.6314 93.9698L57.0908 46.2682C58.3925 44.0526 59.4975 41.6899 60.2015 39.0625C64.5594 22.7987 54.9745 6.19708 38.7107 1.83921C22.4469 -2.51867 5.84528 7.06626 1.4874 23.3301C-2.87047 39.5939 6.71445 56.1955 22.9783 60.5533C25.6057 61.2574 28.2044 61.4817 30.7847 61.4809L58.3253 109.182C56.9662 111.432 55.9197 113.856 55.2146 116.388C50.8567 132.652 60.4416 149.254 76.7054 153.611C92.9692 157.969 109.571 148.384 113.929 132.121C114.861 128.642 115.033 125.18 114.762 121.788L171.059 82.7212C174.131 84.5828 177.396 86.197 181.036 87.1724C186.837 88.6925 192.918 88.8062 198.772 87.5039L226.265 125.753C225.576 127.221 225.001 128.739 224.545 130.295C220.187 146.559 229.772 163.161 246.035 167.519C262.299 171.876 278.901 162.291 283.259 146.028C287.617 129.764 278.032 113.162 261.768 108.804Z"
          fill={fill ?? "black"}
          fill-opacity="0.2"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_100_475"
          x="0.436279"
          y="0.788086"
          width="283.874"
          height="171.781"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_100_475"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Vector;