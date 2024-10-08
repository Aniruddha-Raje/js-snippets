'use strict';

class Book {
	constructor(pages) {
		this.pages = pages;
	}
	
	displayNumberOfPages() {
		console.log('Pages => ' + this.pages);
	}
}

class Magazine extends Book {
	constructor(pages, name) {
        super(pages);
		this.name = name;
	}
	
	displayName() {
		console.log('Name => ' + this.name);
	}
}

const mag = new Magazine(10,"Pokemon");
console.log(mag);
console.log(mag.displayNumberOfPages());
console.log(mag.displayName());