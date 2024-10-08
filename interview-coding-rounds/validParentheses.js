var isValid = function(s) {
    let st = [];
    
    let map = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    
    for (let i = 0; i < s.length; i++) {
        
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            st.push(s[i]);
        } 
        else if (map[st.pop()] !== s[i]) {
            return false;
        }
   }
   return st.length ? false : true;
    
};

let resp = isValid('(){)[]');
console.log("resp => ", resp);