export default function getLocalStorage() {
    const taskList = []
    for (let i = 1; i <= localStorage.length; i++) {
        const tempTask = JSON.parse(localStorage.getItem(i))
        taskList.push(tempTask);
    }
    return taskList;
}1