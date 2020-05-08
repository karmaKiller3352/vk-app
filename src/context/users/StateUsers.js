const dataFromStorage = localStorage.getItem('users') || '[]';
const data = JSON.parse(dataFromStorage);
export default data;
