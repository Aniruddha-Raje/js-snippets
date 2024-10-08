let reverse = async (x) => {
    let rem, rev = 0;
    
    while(x > 0){
        rem = x%10;
		x = parseInt(x/10);
		rev = rev * 10 + rem;
    }

    console.log("Reverse => ", rev);
}

reverse(2433);