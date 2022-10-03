const getCurrentDateAndTime = () => {
  const date = new Date();
  const timeZone = "Asia/Kolkata";
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeStyle: "medium",
    dateStyle: "medium",
    hour12: false,
    timeZone,
  });
  const currentDateAndTime = fmt.format(date);
  return currentDateAndTime;
};

export default getCurrentDateAndTime;
