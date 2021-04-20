export const getLocalStorageItem = (name: string) => {
    return localStorage.getItem(name);
};

export const setLocalStorageItem = (name: string, value: string) => {
    localStorage.setItem(name, value);
};
