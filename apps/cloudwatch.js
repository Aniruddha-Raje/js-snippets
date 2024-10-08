let async = require('async');
let AWS = require('aws-sdk');
let moment = require('moment');
let momentTz = require('moment-timezone');
    
function test(){
    console.log("Service Lambda invoked!");
    AWS.config.update({
        region: 'us-east-1'
    });
    
    let ec2Params = {
        InstanceIds: [
           'i-057881e7e4848cd4f'
        ]
    };
    let rdsParams = {
        DBClusterIdentifier: 'dev-stage-aurora-mysql-rds'
    };
    
    let utcHour = moment().format('H');
    let hour = momentTz().tz("Asia/Kuala_Lumpur").format('H');
    
    console.log("Server Hour => ",utcHour);
    console.log("Local Hour => ",hour);
    
    let ec2 = new AWS.EC2();
    let rds = new AWS.RDS();
    
    if(hour >= 9 && hour <= 19){
        console.log("Start Condition");
        async.parallel([
            function(callback) {
                console.log("calling EC2 describeInstanceStatus");
                ec2.describeInstanceStatus(ec2Params, function(err, data) {
                    console.log("EC2 describeInstanceStatus success");
                    if (err){
                        console.log("Error in EC2 describeInstanceStatus => ",err, err.stack);
                        callback(err,null);
                    }
                    else{
                        console.log("EC2 describeInstanceStatus success block");
                        if(!data.InstanceStatuses.length > 0){
                            console.log("calling EC2 startInstances");
                            ec2.startInstances(ec2Params, function(err, data) {
                                console.log("EC2 startInstances success");
                                if (err){
                                    console.log("Error in EC2 startInstances => ",err, err.stack);
                                    callback(err,null);
                                }
                                else{     
                                    console.log("EC2 startInstances success => ",data);
                                    callback(null,"EC2 Started");
                                }
                            });
                        }
                        else{
                            console.log("EC2 is already running!");
                            callback(null,"EC2 is already running!");
                        }
                    }
                });
            },
            function(callback) {
                console.log("calling RDS describeDBClusters");
                rds.describeDBClusters(rdsParams, function(err, data) {
                    console.log("RDS describeDBClusters success");
                    if (err){
                        console.log("Error in RDS describeDBClusters => ",err, err.stack);
                        callback(err,null);
                    }
                    else{
                        console.log("RDS describeDBClusters success block");
                        if(data.DBClusters[0].Status === "stopped"){
                            console.log("calling RDS startDBCluster");
                            rds.startDBCluster(rdsParams, function(err, data) {
                                console.log("RDS startDBCluster success");
                                if (err) {
                                    console.log("Error in RDS startDBCluster => ",err, err.stack);
                                    callback(err,null);
                                }
                                else{     
                                    console.log("RDS startDBCluster success => ",data);
                                    callback(null,"RDS Started!");
                                }
                            });
                        }
                        else{
                            console.log("RDS is already available!");
                            callback(null,"RDS is already available!");
                        }
                    }
                });
            }
        ],
        function(err, response) {
            if (err) {
                console.log("Error",err);
                callback(err,null);
            } 
            else {
                console.log("Success",response);
                callback(null,"Resources started!");
            }
        });
    }
    else{
        console.log("Stop Condition");
        async.parallel([
            function(callback) {
                console.log("calling EC2 describeInstanceStatus");
                ec2.describeInstanceStatus(ec2Params, function(err, data) {
                    console.log("EC2 describeInstanceStatus success");
                    if (err){
                        console.log("Error in EC2 describeDBInstances => ",err, err.stack);
                        callback(err,null);
                    }
                    else{
                        console.log("EC2 describeInstanceStatus success block");
                        if(data.InstanceStatuses.length > 0 && data.InstanceStatuses[0].InstanceState.Name === "running"){
                            console.log("calling EC2 stopInstances");
                            ec2.stopInstances(ec2Params, function(err, data) {
                                console.log("EC2 stopInstances success");
                                if (err) {
                                    console.log("Error in EC2 stopInstances => ",err, err.stack);
                                    callback(err,null);
                                }
                                else{     
                                    console.log("EC2 stopInstances success",data);
                                    callback(null,"EC2 Instance stopped!");
                                }
                            });
                        }
                        else{
                            console.log("EC2 already stopped!",data);
                            callback(null,"EC2 already stopped!");
                        }
                    }
                });
            },
            function(callback) {
                console.log("calling RDS describeDBClusters");
                rds.describeDBClusters(rdsParams, function(err, data) {
                    console.log("RDS describeDBClusters success");
                    if (err){
                        console.log("Error in RDS describeDBInstances => ",err, err.stack);
                        callback(err,null);
                    }
                    else{
                        console.log("RDS describeDBClusters success block");
                        if(data.DBClusters.length > 0 && data.DBClusters[0].Status === "available"){
                            console.log("calling RDS stopDBCluster");
                            rds.stopDBCluster(rdsParams, function(err, data) {
                                console.log("RDS stopDBCluster success");
                                if (err){
                                    console.log("Error while stopDBCluster => ",err, err.stack);
                                    callback(err,null);
                                }
                                else{     
                                    console.log("RDS stopDBCluster success => ",data);
                                    callback(null,"RDS stopped!");
                                }
                            });
                        }
                        else{
                            console.log("RDS already stopped!");
                            callback(null,"RDS already stopped!");
                        }
                    }
                });
            }
        ],
        function(err, response) {
            if (err) {
                console.log("Error",err);
                callback(err,null);
            } 
            else {
                console.log("Success",response);
                callback(null,"Resources stopped");
            }
        });
    }
};

test();