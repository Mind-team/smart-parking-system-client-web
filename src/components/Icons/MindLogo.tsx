import React from "react";

export interface Props {
  color: string;
  width: string;
  height: string;
  strokeWidth: number;
}

export const MindLogo: React.FC<Partial<Props>> = ({
  color = "#393939",
  width = "59px",
  height = "59px",
  strokeWidth = 4,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M57 22.0962C57 15.75 51.7115 10.4615 45.3654 10.4615C44.9423 10.4615 44.7308 10.4615 44.3077 10.4615V9.40385C44.3077 5.38462 40.9231 2 36.9038 2C32.8846 2 29.5 5.38462 29.5 9.40385V49.5962C29.5 53.6154 32.8846 57 36.9038 57C40.7115 57 43.6731 54.25 44.3077 50.6538C50.2308 50.2308 54.8846 45.1538 54.8846 39.0192C54.8846 36.0577 53.8269 33.5192 52.1346 31.4038C55.0961 29.5 57 25.9038 57 22.0962Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 22.0962C2 15.75 7.28846 10.4615 13.6346 10.4615C14.0577 10.4615 14.2692 10.4615 14.6923 10.4615V9.40385C14.6923 5.38462 18.0769 2 22.0962 2C26.1154 2 29.5 5.38462 29.5 9.40385V49.5962C29.5 53.6154 26.1154 57 22.0962 57C18.2885 57 15.3269 54.25 14.6923 50.6538C8.76923 50.2308 4.11539 45.1538 4.11539 39.0192C4.11539 36.0577 5.17308 33.5192 6.86539 31.4038C3.90385 29.5 2 25.9038 2 22.0962Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.1666 29.5C50.1213 29.5 54.8 34.1787 54.8 40.1333"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.55 33.5333C7.25 33.5333 2 28.2833 2 21.9833"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3998 15.2C15.9026 13.7266 14.6921 11.7193 14.6921 9.40385"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
