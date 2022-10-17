const useFunds = (type, multi, funds) => {
  let newFund = funds;
  let lot = 0;
  let service = 0;
  let closePrice = 0;
  let profit = 0;
  if (type === "ECI") {
    lot = (newFund / 822).toFixed(5);
    service = (lot * 42).toFixed(2);
    closePrice = (service * multi).toFixed(2);
    profit = (closePrice - service).toFixed(2);
    newFund = +newFund + +profit;
  } else if (type === "EWD") {
    lot = (newFund / 1280).toFixed(5);
    service = (lot * 80).toFixed(2);
    closePrice = (service * multi).toFixed(2);
    profit = (closePrice - service).toFixed(2);
    newFund = +newFund + +profit;
  }
  return { newFund, profit };
};
export default useFunds;
