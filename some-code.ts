/*
int[] arr = new int[] {8, 5, 2, 9, 5, 6, 3};
List<Integer> result = new ArrayList<>();
*/
let arr = [8, 5, 2, 9, 5, 6, 3];

console.log("Array:", arr);
console.log("Array to string:", arr.toString());

/*
HashMap<Integer, Boolean> versions = new HashMap<>();
for (Integer key: versions.keySet()) {
   if (key > version && key <= targetVersion) {
       if (versions.get(key) == false) {
           return false;
       }
    }
}
*/
let versions = new Map();
versions.set(1, true);
versions.set(4, false);
versions.set(3, true);

for (let [key, value] of versions) {
    console.log(`key: ${key}`);
    console.log(`value: ${value}`);
}

// versions.get(key)
console.log(versions.has(4) ? versions.get(4) : "Key not found");
console.log(versions.has(5) ? versions.get(5) : "Key not found");

/*
String s = “The String”;
HashMap<Character, Integer> fmap = new HashMap<>();
for(char ch : s.toCharArray()){
   fmap.put(ch, fmap.getOrDefault(ch,0) + 1); // Using get or default
}
*/

let s = "the string counter";
let fmap = new Map();

for (let ch of s) {
  fmap.set(ch, (fmap.get(ch) || 0) + 1);
}
console.log(fmap); // Map(12) { 't' => 3, 'h' => 1, 'e' => 2, ' ' => 2, ....
console.log(fmap.has('t') ? fmap.get('t') : "Key not found"); // prints -> 3

/*
String s = “The String”;
for(int i=0;i<s.length();i++) {
   char ch = s.charAt(i); // we got the char number, for example A -> 65, b -> 98, etc
}
*/
for (let i = 0; i < s.length; i++) {
  let ch = s.charAt(i);
  let code = s.charCodeAt(i);
  console.log(ch + " -> " + code); // t -> 116   h -> 104   e -> 101  ' ' -> 32
}