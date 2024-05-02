import React from "react";

type TopPartOfCalendarProps = {
  value: string;
  x1Line: number;
  y1Line: number;
  y2Line: number;
  xText: number;
  yText: number;
};

export const TopPartOfCalendar: React.FC<TopPartOfCalendarProps> = ({
  value,
  x1Line,
}) => {
  return (
    <div className="calendar-top" style={{ width: x1Line, minWidth: x1Line }}>
      <p key={value + "text"} className="text">
        {value}
      </p>
    </div>
  );
};
