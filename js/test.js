const regexp = "[a-z]+|0|FALSE|1|TRUE|&|\\||->|<->|>-<|~|\\(|\\)"

function getTokens(expression){

    regexObject = new RegExp(regexp, "gm");
    return expression.match(regexObject);
}

function test(){

    console.log(getTokens("(p|q) <-> (q&r) & ~(a>-<b)"));
    document.getElementById("test").innerHTML = getTokens("(p|q) <-> (q&r) & ~(a>-<b)");

}