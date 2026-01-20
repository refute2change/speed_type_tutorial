// import fs from "fs";

// const list = fs.readFileSync("public/words/english.json", "utf-8").split("\n");
// const wordList = JSON.parse(list[0]) as string[];

export function chooseRandomWord(): string {
    // const randomIndex = Math.floor(Math.random() * wordList.length);
    // console.log(wordList[randomIndex]);
    // return wordList[randomIndex];
    return "hello";
}

export function RandomWord() {
    return (<p>{chooseRandomWord()}</p>);
}