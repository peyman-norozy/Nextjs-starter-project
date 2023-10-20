import moment from "moment/moment";

function persianDate(timeStamp) {
  const monthString = new Date(moment.unix(timeStamp)).toLocaleDateString(
    "fa-IR",
    { month: "long" }
  );

  const dayString = new Date(moment.unix(timeStamp)).toLocaleDateString(
    "fa-IR",
    { day: "numeric" }
  );

  const yearString = new Date(moment.unix(timeStamp)).toLocaleDateString(
    "fa-IR",
    { year: "numeric" }
  );

  return (
    <span>
      در تاریخ {dayString} {monthString} {yearString}{" "}
    </span>
  );
}

function forceOnlyNumberInput(event) {
  let updatedValue = event.target.value;
  if (Number.isNaN(+event.target.value) === true) {
    updatedValue = updatedValue.slice(0, -1);
    return (event.target.value = updatedValue);
  }
}

export { persianDate, forceOnlyNumberInput };
