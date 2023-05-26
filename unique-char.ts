function isUniqueChars(str: string) : boolean {

    if (str.length > 128) {
        return false;
    }

    let allCharacters = new Map();

    for (let index = 0; index < str.length; index++) {
        let charCode = str.charCodeAt(index);

        if (allCharacters.has(charCode)) {
            return false;
        }

        allCharacters.set(charCode, true);
    }

    return true;
}

const str1 = "hola!";
console.log(isUniqueChars(str1));
const str2 = "holanda!";
console.log(isUniqueChars(str2));