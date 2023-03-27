import React from "react";
import { format } from "date-fns";

export const Header = () => {
  const date = format(new Date(), "eeee, LLL do");

  return <div className="date">{date}</div>;
};
