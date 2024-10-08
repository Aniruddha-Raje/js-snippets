const Joi = require('joi');


let test = async() => {
    const schema = Joi.object({
        name: Joi.string().required(),
        addr: Joi.when('name', { is: 'test', then: Joi.string().required() })
        //addr: Joi.string().required()
    });

    const request = {
        name: "test1",
        addr: ""
    }

    // validate request body against schema
    const validationResponse = await schema.validate(request);
    console.log("validationResponse => ", validationResponse);

    return true;
};

test();