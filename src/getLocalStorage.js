// getLocalStorage takes a type variable to select either project or task

export default function getLocalStorage(type) {
    const storageList = []
    for (let i = 1; i <= localStorage.length; i++) {
        const tempTask = JSON.parse(localStorage.getItem(i))
        if (tempTask.type == type) {
        storageList.push(tempTask);
        }
    }
    return storageList;
}

