function capitalizeWords(text) {
    let words = text.split(" ");
    return text.split(" ")[0][0].toUpperCase() + text.split(" ")[0].slice(1) + " " + text.split(" ")[1][0].toUpperCase() + text.split(" ")[1].slice(1) + " " +  text.split(" ")[2][0].toUpperCase() + text.split(" ")[2].slice(1) + " " +  text.split(" ")[3][0].toUpperCase() + text.split(" ")[3].slice(1) + " " +  text.split(" ")[4][0].toUpperCase() + text.split(" ")[4].slice(1)
}
console.log(capitalizeWords("Hello my name is harry"));
