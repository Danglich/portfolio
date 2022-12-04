export const checkEmpty = (object) => {
    let result = true;
    for (let key in object) {
        if (object[key]) {
            result = false;
            break;
        }
    }

    return result;
};
