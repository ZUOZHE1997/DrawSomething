function saveData(name, content) {
  return localStorage.setItem(name, content);
}

function getData(name) {
  return localStorage.getItem(name);
}

function removeData(name) {
  return localStorage.removeItem(name);
}

export { saveData, removeData, getData };
