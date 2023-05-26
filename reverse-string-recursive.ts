function reverseString(str: string) : string {
    if (str.length === 0) {
        return str;
    }

    // return last char    +    reversing the remaining part of the string (without last character) 
    return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
}

console.log(reverseString("hola")); // aloh
console.log(reverseString("!navi olleh")); // hello ivan!
