import forEach from "../forEach";

const charCodeOfDot = ".".charCodeAt(0);
const reEscapeChar = /\\(\\)?/g;

/* eslint-disable prettier/prettier */
const rePropName = RegExp(
  // Match anything that isn't a dot or bracket.
  "[^.[\\]]+" + "|" +
  // Or match property names within brackets.
  "\\[(?:" +
    // Match a non-string expression.
    "([^\"'][^[]*)" + "|" +
    // Or match strings (supports escaping characters).
    "([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2" +
   ")\\]"+ "|" +
  // Or match "" as the space between consecutive dots or empty brackets.
  "(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))"
  , "g");
/* eslint-enable prettier/prettier */

const stringToPath = (string: string): Array<string> => {
    const result = [];
    if (string.charCodeAt(0) === charCodeOfDot) {
        result.push("");
    }

    string.replace(
        rePropName,
        (match, expression, quote, subString): string => {
            let key = match;
            if (quote) {
                key = subString.replace(reEscapeChar, "$1");
            } else if (expression) {
                key = expression.trim();
            }
            result.push(key);

            return "";
        }
    );

    return result;
};

function get(object: Record<string, any>, string: string, fallback?: any): any {
    const splitString = stringToPath(string);
    let value = object;

    forEach(splitString, (item: any) => {
        value = value[item];
        if (!value) {
            value = fallback;

            return false;
        }
    });

    return value;
}

export default get;
