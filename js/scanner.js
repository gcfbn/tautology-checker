import {Types} from "./tokens.js";
import {getType} from "./tokens.js";


export function scan(tokens){

    let results = {
        leftBrackets: 0,
        rightBrackets: 0,
        variables: [],
    }

    for(let i=0; i<tokens.length; i++){
        let t = tokens[i];
        if (getType(t) === Types.LEFT_BRACKET) results.leftBrackets++;
        if (getType(t) === Types.RIGHT_BRACKET) results.rightBrackets++;
        if (getType(t) === Types.VARIABLE && !results.variables.includes(t)) results.variables.push(t);
    }

    return results;
}