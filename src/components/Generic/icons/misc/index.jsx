import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12 10.59L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L10.59 12L5.705 16.885C5.31564 17.2744 5.31564 17.9056 5.705 18.295C6.09436 18.6844 6.72564 18.6844 7.115 18.295L12 13.41L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L13.41 12L18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705Z"
      fill="#61798B"
    />
  </svg>
);

export const TelIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.086 10.3998L11.949 9.00783C11.6387 8.87056 11.2918 8.83947 10.962 8.91938C10.6322 8.99929 10.338 9.18574 10.125 9.44983L9.17799 10.6348C7.64333 9.65852 6.3417 8.35723 5.36499 6.82283L6.54899 5.87683C6.81401 5.66403 7.00124 5.36959 7.08154 5.03934C7.16184 4.70909 7.13071 4.36155 6.99299 4.05083L5.59999 0.913831C5.45201 0.580638 5.19055 0.310799 4.86218 0.152387C4.53382 -0.00602554 4.15988 -0.0427234 3.80699 0.0488311L1.15499 0.737831C0.789118 0.833409 0.471003 1.05985 0.260902 1.37427C0.0508015 1.68868 -0.0366933 2.06923 0.0149909 2.44383C0.506106 5.86104 2.09094 9.02723 4.53219 11.4683C6.97344 13.9094 10.1397 15.494 13.557 15.9848C13.6272 15.9948 13.6981 15.9998 13.769 15.9998C14.1104 15.9996 14.4422 15.8863 14.7123 15.6774C14.9824 15.4686 15.1757 15.1762 15.262 14.8458L15.95 12.1928C16.0429 11.84 16.0069 11.4657 15.8485 11.1371C15.6902 10.8084 15.4198 10.547 15.086 10.3998Z"
      fill="#1889E9"
    />
  </svg>
);

export const EmailIcon = () => (
  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.1609 0.0585764C15.1265 0.0296417 15.0849 0.0105371 15.0405 0.00327721C14.9961 -0.00398273 14.9505 0.000870811 14.9087 0.0173263L0.908674 5.51733C0.86673 5.53379 0.830014 5.56128 0.80241 5.59689C0.774805 5.6325 0.757339 5.67491 0.751857 5.71963C0.746375 5.76436 0.753083 5.80973 0.77127 5.85096C0.789457 5.89218 0.818447 5.92772 0.855174 5.95383L3.11567 7.56133L8.83317 4.91333L4.24992 8.36808V13.7501C4.24971 13.7968 4.26258 13.8426 4.28706 13.8823C4.31154 13.9221 4.34667 13.9542 4.38845 13.975C4.43024 13.9958 4.47702 14.0045 4.5235 14.0001C4.56997 13.9957 4.61429 13.9784 4.65142 13.9501L8.24642 11.2101L12.1052 13.9538C12.1474 13.984 12.198 14.0002 12.2499 14.0001C12.2813 14 12.3124 13.9942 12.3417 13.9828C12.3804 13.9675 12.4147 13.9427 12.4414 13.9108C12.4681 13.8788 12.4864 13.8407 12.4947 13.7998L15.2447 0.299826C15.2537 0.255799 15.2507 0.210156 15.2359 0.167701C15.2212 0.125246 15.1953 0.0875487 15.1609 0.0585764Z"
      fill="#1889E9"
    />
  </svg>
);

export const ChevronIcon = () => (
  <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 9L14 17L22 9"
      stroke="#61798B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const PlayIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="#E8F3FD" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M43.7328 32.2802C44.3351 32.6751 44.3351 33.558 43.7328 33.9528L26.5482 45.2181C25.8832 45.6541 25 45.177 25 44.3818L25 21.8513C25 21.0561 25.8832 20.579 26.5482 21.0149L43.7328 32.2802Z"
      fill="#1889E9"
    />
  </svg>
);

export const ErrorIcon = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.7213 7.27875C16.4292 6.98673 15.9558 6.98673 15.6638 7.27875L12 10.9425L8.33625 7.27875C8.04423 6.98673 7.57077 6.98673 7.27875 7.27875C6.98673 7.57077 6.98673 8.04423 7.27875 8.33625L10.9425 12L7.27875 15.6638C6.98673 15.9558 6.98673 16.4292 7.27875 16.7213C7.57077 17.0133 8.04423 17.0133 8.33625 16.7213L12 13.0575L15.6638 16.7213C15.9558 17.0133 16.4292 17.0133 16.7213 16.7213C17.0133 16.4292 17.0133 15.9558 16.7213 15.6638L13.0575 12L16.7213 8.33625C17.0133 8.04423 17.0133 7.57077 16.7213 7.27875Z"
      fill="white"
    />
    <circle cx="12" cy="12" r="9.75" stroke="white" strokeWidth="1.5" />
  </svg>
);

ErrorIcon.propTypes = {
  className: PropTypes.string,
};
ErrorIcon.defaultProps = {
  className: '',
};

export const SuccessIcon = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53446 21.3747C6.51167 20.6274 4.78465 19.2462 3.61095 17.4372C2.43726 15.6281 1.87978 13.4882 2.02167 11.3364C2.16355 9.18467 2.9972 7.13643 4.39827 5.49718C5.79935 3.85793 7.69278 2.71549 9.79618 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 4L12 14.01L9 11.01"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

SuccessIcon.propTypes = {
  className: PropTypes.string,
};
SuccessIcon.defaultProps = {
  className: '',
};

export const LoaderIcon = ({ intervalDuration }) => {
  const [hiddenLineId, setHiddenLineId] = useState(0);

  const loadingAnimation = () => {
    setHiddenLineId((prevState) => (prevState + 1) % 8);
  };

  useEffect(() => {
    const interval = setInterval(loadingAnimation, intervalDuration);

    return () => clearInterval(interval);
  }, [intervalDuration]);

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2V6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        visibility={hiddenLineId === 0 ? 'hidden' : 'visible'}
      />
      <path
        d="M16.24 7.75993L19.07 4.92993"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        visibility={hiddenLineId === 1 ? 'hidden' : 'visible'}
      />
      <path
        d="M18 12H22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        visibility={hiddenLineId === 2 ? 'hidden' : 'visible'}
      />
      <path
        d="M16.24 16.24L19.07 19.07"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        visibility={hiddenLineId === 3 ? 'hidden' : 'visible'}
      />
      <path
        d="M12 18V22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        visibility={hiddenLineId === 4 ? 'hidden' : 'visible'}
      />
      <path
        d="M4.92999 19.07L7.75999 16.24"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        visibility={hiddenLineId === 5 ? 'hidden' : 'visible'}
      />
      <path
        d="M2 12H6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        visibility={hiddenLineId === 6 ? 'hidden' : 'visible'}
      />
      <path
        d="M4.92999 4.92993L7.75999 7.75993"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        visibility={hiddenLineId === 7 ? 'hidden' : 'visible'}
      />
    </svg>
  );
};

LoaderIcon.propTypes = {
  intervalDuration: PropTypes.number.isRequired,
};

export const HamburgerMenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12ZM4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H4Z"
      fill="#1889E9"
    />
  </svg>
);

const miscIcons = {
  XIcon,
  TelIcon,
  EmailIcon,
  ChevronIcon,
  ErrorIcon,
  SuccessIcon,
  LoaderIcon,
  PlayIcon,
  HamburgerMenuIcon,
};

export default miscIcons;
