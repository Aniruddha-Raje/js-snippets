-- let i=6; console.log(++i,i++,i);

longest substring without repeating characters
abcabcbb
abc
3

dense rank,
window function

Input: 0, 2, 1, 2, 1, 0
Output: 0, 0, 1, 1, 2, 2

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]


-- INNER JOIN
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;

-- LEFT JOIN
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;

-- RIGHT JOIN
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;

-- FULL OUTER JOIN
SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;

id emp_id   name  tech_stack  skill
1    1	    john  backend     java
2    2	    jane  frontend    react
3    1	    john  backend     nodejs
4    2	    jane  backend     python

Employee 1 john is a backend engineer skilled in java | nodejs
Employee 2 jane is a frontend+backend engineer skilled in react | python


WHERE
HAVING
LIMIT
JOIN
FROM
ORDER BY
SELECT
OFF SET
GROUP BY

FROM
JOIN
WHERE
GROUP BY 
HAVING
SELECT
ORDER BY 
LIMIT
OFF SET


-- Partitioning - 1-100, 101-200
-- Sharding - Based on column value 

-- sharding implies the data is spread across multiple computers while partitioning does not. 
-- Partitioning is about grouping subsets of data within a single database

-- After the execution of ‘DELETE’ operation, 
-- COMMIT and ROLLBACK statements can be performed to retrieve the lost data.

-- After the execution of ‘TRUNCATE’ operation, 
-- COMMIT, and ROLLBACK statements cannot be performed to retrieve the lost data.

-- ‘DROP’ command is used to drop the table or key like the primary key/foreign key.

Design a NoSql database for a use case, where users might follow each other.
eg User 1 follows user 2, 3 
User 2 follows user 1, 
User 3 follows user 2

{
    "uuid" : "pk",
    "user" : "1",
    "action" : "follows-2"
},
{
    "uuid" : "pk",
    "user" : "1",
    "action" : "follows-3"
}



db.orders.aggregate( {$group: {
        _id: {paymentTransactionId : "$paymentTransactionId"},
        count: {$sum: 1}
        }
    },
    {$match: {
        count: {"$gt": 1}
        }
    })
   .projection({})
   .sort({_id:-1})
   .limit(100)


service - 
{
    "_id": 1,
    "name": "aaa",
    "parent": ""
},
{
    "_id": 2,
    "name": "bbb",
    "parent": 1
},
{
    "_id": 3,
    "name": "ccc",
    "parent": 2
},
{
    "_id": 4,
    "name": "ddd",
    "parent": ""
}


[
    {
        "_id": 1,
        "name": "aaa",
        "children": [{
            "_id": 2,
            "name": "bbb",
            "children": [{
                    "_id": 3,
                    "name": "ccc",
                    "children": []
            }]
        }]
    },
    {
        "_id": 4,
        "name": "abc",
        "children": []
    }
]