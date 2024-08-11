export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

//if i get the only one value
export const mapObjectToArray = (state) => {
  return Object.keys(state).reduce((acc, cur) => {
    acc[cur] = state[cur].value;
    return acc;
  }, {});
};

//if i get dynamic value depend on key
export const mapObjectToKeys = (state, key) => {
  return Object.keys(state).reduce((acc, cur) => {
    acc[cur] = state[cur][key];
    return acc;
  }, {});
};
