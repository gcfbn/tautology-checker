export const Types = {
    LEFT_BRACKET: "leftBracket",
    RIGHT_BRACKET: "rightBracket",
    VARIABLE: "variable",
    BINARY_OPERATOR: "binaryOperator",
    ONE_ARGUMENT_FUNCTION: "oneArgumentFunction",
    CONSTANT: "constant"
};

const operators = ["&", "|", ">-<", "->", "<->"];

export function getType(token){
    if (token === "(") return Types.LEFT_BRACKET;
    else if (token === ")") return Types.RIGHT_BRACKET;
    else if (operators.includes(token)) return Types.BINARY_OPERATOR;
    else if (token === "~") return Types.ONE_ARGUMENT_FUNCTION;
    else if (token === "TRUE" || token === "FALSE") return Types.CONSTANT;
    else return Types.VARIABLE;
}