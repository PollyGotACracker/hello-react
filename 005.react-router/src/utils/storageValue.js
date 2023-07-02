export const getLocalStorage = () => {
  return localStorage.getItem("value");
};

export const setLocalStorage = (value) => {
  localStorage.setItem("value", value);
};
