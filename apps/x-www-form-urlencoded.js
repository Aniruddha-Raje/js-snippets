const fetch = require("node-fetch")

let test = async() => {
    const params = new URLSearchParams();

    params.append("grant_type", "client_credentials");

    api_token = await fetch("https://example.com/oauth2/token", {
        method: "post",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params
    }).then (response => {
        return response.json();
    });

    console.log(api_token);
}

test();
    