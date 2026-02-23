function lengthOfLongestSubstring(str) {
    let maxLength = 0;

    for (let i = 0; i < str.length -1; i++) {
        let seen  = "";

        for (let j = i; j < str.length; j++) {
            if (seen.includes(str[j])) {
                break;
            }

            seen += str[j];
            maxLength = Math.max(maxLength, seen.length);
        }
    }

    return maxLength;
}


console.log(lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyz")); 