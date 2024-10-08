const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' });

let bulkTest = async () => {
  client.bulk({
      body: [
        // action description
        { index:  { _index: 'test', _id: 1 } },
        // the document to index
        { title: 'replace foo', name: 'foo' },

        // action description
        { update: { _index: 'test', _id: 1 } },
        // the document to update
        { doc: { name: 'foo foo updated 2', something: 'new field' } },
        // action description
        
        { delete: { _index: 'test', _id: 33 } },
        // no document needed for this delete
      ]
    }, function (err, resp) {
        if(err){
          console.log(err);
        }
        if(resp.errors) {
            console.log(JSON.stringify(resp, null, '\t'));
        }
    });
};

//bulkTest();


let searchTest = async () => {
  let indexToQuery = 'test';
  let esQuery = {
    index: indexToQuery,
    //q: '_source:id',
    body: {
        "query": {
          "match_all": {}
        },
        "_source": ["id"]
    }
  };
  console.log('esQuery =>\n', esQuery);

  const result = await client.search(esQuery);
  console.log("search resp => \n", result.body.hits.hits);
};

searchTest();