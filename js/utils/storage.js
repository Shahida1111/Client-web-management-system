// ========================================
// Local Storage Utility
// ========================================


// Save data
export function saveData(key, data) {

    localStorage.setItem(
        key,
        JSON.stringify(data)
    );

}


// Get data
export function getData(key, defaultValue = []) {

    const data =
        localStorage.getItem(key);


    if (!data) {
        return defaultValue;
    }


    return JSON.parse(data);

}


// Remove data
export function removeData(key) {

    localStorage.removeItem(key);

}