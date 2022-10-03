import getCurrentDateAndTime from "./getCurrentDateAndTime.js";

const randomPostGenerator = () => {
  const currentDateAndTime = getCurrentDateAndTime();
  return {
    id: currentDateAndTime,
    time: currentDateAndTime,
    text: "slakdnlksd",
    name: "kjdbfksdbf",
    username: "sadlkbalsdnlas",
  };
};

export default randomPostGenerator;
