export function tokenize(input){

    const regexp = "[a-z]+|0|FALSE|1|TRUE|&|\\||->|<->|>-<|~|\\(|\\)";
    let regexObject = new RegExp(regexp, "gm");
    return input.match(regexObject);
}