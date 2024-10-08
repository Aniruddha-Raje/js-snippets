var isPalindrome = function(x) {
    
    let temp = x;
    let rem, final = 0;
    
    while(x > 0){
        rem = x%10;
		x = parseInt(x/10);
		final = final * 10 + rem;
    }
    if(final==temp){
        console.log("number is palindrome!");
        return true;
    }
    else{
        console.log("not a palindrome!");
        return false;
    }
    
};

isPalindrome(121);