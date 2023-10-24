import { parseISO, format } from "date-fns";

const Date = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, "LLL d, yyyy")}</time>;
};

export default Date;
