// Before Refactor
function findFirstStringInBracket(str) {
    if (str.length > 0) {
        let indexFirstBracketFound = str.indexOf("(");
        if (indexFirstBracketFound >= 0) {
            let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
            if (wordsAfterFirstBracket) {
                wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
                let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
                if (indexClosingBracketFound >= 0) {
                    return wordsAfterFirstBracket.substring(0,
                        indexClosingBracketFound);
                } else {
                    return '';
                }
            } else {
                return '';
            }
        } else {
            return '';
        }
    } else {
        return '';
    }
}



// After Refactor
function findFirstStringInBracket(str) {
    if (str.length > 0) {
        let indexFirstBracketFound = str.indexOf("(")
		    let indexClosingBracketFound = str.indexOf(")")

		    return (indexFirstBracketFound >= 0) ? wordInBracket(str, indexFirstBracketFound, indexClosingBracketFound) : ''
    } else {
        return '';
    }
}

function wordInBracket(params, firstIndex, lastIndex) {
	return (lastIndex >= 0) ? params.substring(firstIndex + 1, lastIndex) : ""
}
