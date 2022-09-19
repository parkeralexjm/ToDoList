export default function getLocalStorage() {
    const storageList = []
    for (let i = 1; i <= localStorage.length; i++) {
        const tempTask = JSON.parse(localStorage.getItem(i))
        storageList.push(tempTask);
    }
    return storageList;
}1