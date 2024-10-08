const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' });

let get = async () => {
  try {
    const response = await client.get({
      index: 'test',
      id: '1'
    });

    console.log('response => ', response.body['_source']);
  } catch (error) {
    console.log('Error => ', error.meta.statusCode);
  }
}

let match = async () => {
  try {
    const response = await client.search({
      index: 'brand',
      body: {
        "query": {
            "match": {
              "brand_status" : "active"
            }
        }
      }
    });

    console.log('match response => ', response.body.hits.hits);
  } catch (error) {
    console.log('Error => ', error);
  }
}

let autocomplete = async () => {
  try {
    let searchParams = {
      index: "test",
      body: {
          "suggest": {
              "result": {
                  "prefix": "sadas",
                  "completion": {
                      "field": "brand_name",
                      "size": 2
                } 
              }
          }
      }
    };
  
    const result = await client.search(searchParams);
    console.log("autocomplete => ", result.body.suggest.result[0].options);
  } catch (error) {
    console.log(error);
  }
}

let matchAll = async () => {

  const result = await client.search({
      index: 'test',
      body: {
          "query": {
            "match_all": {}
          }
      }
  });
  console.log("search resp => \n", result.body.hits.hits);
  return result;
};

let deleteDocument = async () => {

  const result = await client.delete({
      index: 'test',
      id:2
  });
  console.log("search delete resp => \n", result.body.result);
  return result;
};

let run = async () => {
  // match();
  // autocomplete();
  //get();

  //await matchAll();
  //await deleteDocument();
  await matchAll();
};
run();