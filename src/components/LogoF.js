const LogoF = ({ size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30"
      fill="#0f172e"
      stroke="#38bdf8"
      strokeWidth="4"
    />
    <path
      d="M35 25H65V32H43V45H62V52H43V75H35V25Z"
      fill="#38bdf8"
    />
  </svg>
);

export default LogoF;