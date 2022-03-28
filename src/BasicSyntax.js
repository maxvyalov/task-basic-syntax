export function romanToInteger(str) {
    const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    const digits = Object.keys(values);
    let result = 0;
    for (var i = 0; i < str.length; i++) {
        if (digits.indexOf(str[i]) < digits.indexOf(str[i + 1])) {
            result -= values[str[i]];
        } else {
            result += values[str[i]];
        }
    }
    return result;
}
