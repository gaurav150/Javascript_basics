function getResultByPath(path, obj) {
  const normalizedPath = path.replace(/\[(\d+)\]/g, '.$1');
  const keys = normalizedPath.split('.');
  let result = obj;
  for (let key of keys) {
    if (result === undefined || result === null) break;
    result = result[key];
  }
  return result;
}
const path = "data.results.status";
const obj = {
  data: {
    results:
    {
      status: "completed",
      error: "",
    }
  },
}
let res = getResultByPath(path, obj);
console.log(res); // Output: "completed"
console.log(getResultByPath("data.results.error", obj)); // Output: ""
console.log(getResultByPath("data.results.nonExistent", obj)); // Output: undefined
console.log(getResultByPath("data.nonExistent.status", obj)); // Output: undefined
console.log(getResultByPath("data.results.status[0]", obj)); // Output: undefined