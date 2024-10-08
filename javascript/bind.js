let test = async () => {

    const firstObject = {
        secondValue: "Hello One!",
        run: function() { 
            console.log(this.value || this.secondValue); 
        }
    };

    await firstObject.run();

    const secondObject = {
        value: "Two!"
    };

    const newRun = firstObject.run.bind(secondObject);
    newRun();
};

test();