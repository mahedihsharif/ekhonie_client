//map values to state
export const mapValuesToState = (values, clearValues = false) => {
  return Object.keys(values).reduce((acc, cur) => {
    acc[cur] = {
      value: clearValues ? "" : values[cur],
      error: "",
      focused: false,
      touched: false,
    };
    return acc;
  }, {});
};
