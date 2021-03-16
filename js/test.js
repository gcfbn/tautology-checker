import {scan} from "./scanner.js";
import {tokenize} from "./tokenize.js";

window.onload = test;

export function test(){

    console.log("START");
    let tokens = tokenize("(p|q) <-> (q&r) & ~(a>-<b)")
    document.getElementById("test").innerHTML = tokens;
    console.log(tokens);
    let results = scan(tokens);

    if (results.leftBrackets !== results.rightBrackets) alert("Brackets don't match!")
}