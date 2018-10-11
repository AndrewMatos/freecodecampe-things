function translatePigLatin(str) {
let newstr= str.replace (/^([^oaeiou]*)(.*)/ , "$2$1ay");
if (str.indexOf("a")==0||str.indexOf("e")==0||str.indexOf("i")==0||str.indexOf("o")==0||str.indexOf("u")==0) { newstr= str+"way"}
 return newstr
}

translatePigLatin("consonant");