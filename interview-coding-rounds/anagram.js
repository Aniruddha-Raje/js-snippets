let areAnagram =  async(str1,str2) => {

    str1 = str1.split();
    str2 = str2.split();
    // Get lenghts of both strings
    let n1 = str1.length;
    let n2 = str2.length;

    // If length of both strings is not same,
    // then they cannot be anagram
    if (n1 != n2)
        return false;

    // Sort both strings
    str1.sort();
    str2.sort()

    // Compare sorted strings
    for (let i = 0; i < n1; i++)
        if (str1[i] != str2[i])
            return false;

    return true;
}

let response = areAnagram("test", "sett");

console.log(response);