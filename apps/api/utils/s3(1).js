/* eslint-disable */
// 'use strict'
// var AWS = require('aws-sdk')
// //var uuid = require('uuid/v1')

// const express = require('express')
// const routerS3 = express.Router()

// var fs = require('fs')
// /*
// AWS.config.update({
//     region: "eu-central-1",
//     credentials: new AWS.Credentials('AKIAIOO5CQVVW2YNMQRQ', 'f6WcNUUzz/O9gBjKRtmpyz9lPNlOPoqt0z6330zH')
// })
// */
// AWS.config.update({
//     region: "eu-central-1",
//     credentials: new AWS.Credentials('AKIAZX32UIF3EVRHQDFU', 'WTl19C4XCD9NJFfgnNxr7jvCOx+3xCcK71w0/Hf/')
// })

// var s3 = new AWS.S3()
// var ddb = new AWS.DynamoDB.DocumentClient()

// var async = require('async')
// var archiver = require('archiver')
// var axios = require('axios')
// var rp = require('request-promise');
// var promise = require('promise');
// //var fetch = require('fetch-node')

// function addBucket(req, res) {
// 	var bucket = req.query.bucket

// 	s3.createBucket({Bucket: bucket}, function(err, data) {
// 		if(err) return res.status(200).send(err)
// 		return res.status(200).send(data)
// 	})
// }

// function deleteBucket(req, res) {
// 	var bucket = req.query.bucket

// 	s3.deleteBucket({Bucket: bucket}, function(err, data) {
// 		if(err) return res.status(200).send(err)
// 		return res.status(200).send({err:'deleted'})
// 	})
// }

// function postObject(req, res) {
// 	var bucket = req.body.bucket
// 	var file = req.body.file
// 	var type = req.body.type
// 	var data = JSON.stringify(req.body.data)

// 	s3.putObject({
// 	  Bucket: bucket,
// 	  Key: file,
// 	  Body: data,
// 	  ContentType: type
// 	},
// 	  function (err,data) {
// 			if (err) return res.status(200).send({err:err})
// 			return res.status(200).send({err:'uploaded'})
// 	  }
// 	);
// }

// function putObject(req, res) {
// 	var bucket = req.body.bucket
// 	var key = req.body.key
// 	var type = req.body.type
// 	var data = req.body.data

// 	s3.upload({
// 	  Bucket: bucket,
// 	  Key: key,
// 	  Body: Buffer.from(data, "base64"),
// 	  ContentType: type,
// 	  ACL: 'public-read',
// 	  ContentEncoding: 'base64'
// 	},
// 	  function (err,data) {
// 			if (err) return res.status(200).send({err:err})
// 			return res.status(200).send({err:'uploaded'})
// 	  }
// 	);
// }

// function postUrl(req, res) {
//     var bucket = req.body.bucket
//     var url = req.body.url
//     var file = req.body.file

//     var options = { uri: url, encoding: null }
//     rp(options).then( data => {
//         s3.upload({
//       	  Bucket: bucket,
//       	  Key: file,
//       	  Body: data,
//           ACL:'public-read'},
//       	  function (err,data) {
//       			if (err) return res.status(200).send({err:err})
//       			return res.status(200).send({err:'uploaded'})
//       	  }
//       	)
//     })
// }

// function getSignedURL(req, res){
// 		var bucket = req.body.bucket
// 		var key = req.body.key
// 		var type = req.body.type
// 		var params = {Bucket: bucket, Key: key, ContentType: type, Expires: 3600, ACL:'public-read'};

// 		var url = s3.getSignedUrl('putObject', params)

// 		return res.status(200).send(url)
// }

// function getObject(req, res) {
// 	var bucket = req.body.bucket
// 	var file = req.body.file

// 	var getParams = {
// 	    Bucket: bucket,
// 	    Key: file,
// 	}

// 	s3.getObject(getParams, function(err, data) {
// 	  if (err) return res.status(200).send(err)
// 	  let objectData = data.Body.toString('utf-8')
// 		objectData = JSON.parse(objectData)
// 		return res.status(200).send({objectData})
// 	});
// }

// function deleteObject(req, res) {
// 	var bucket = req.body.bucket
// 	var key = req.body.key

// 	var params = {
// 	  Bucket: bucket,
// 	  Delete: { Objects: [{ Key: key } ] }
// 	}

// 	s3.deleteObjects(params, function(err, data) {
// 		if (err) return res.status(200).send({err:err})
// 		return res.status(200).send(data)
// 	})
// }

// function deleteDirectory(req, res){
// 	var params = {
// 		Bucket: req.body.bucket,
// 		Prefix: req.body.key
// 	}
// 	s3.listObjects(params, function(err, data) {
// 		if(err) return res.status(200).send({err:err})
// 		Object.keys(data.Contents).forEach(async function (key){
// 			var params = {
// 			  Bucket: req.body.bucket,
// 			  Delete: { Objects: [{ Key: data.Contents[key].Key } ] }
// 			}
// 			var deletePromise = await s3.deleteObjects(params).promise()
// 		})

// 		return res.status(200).send('deleted')
// 	})
// }

// function listObject(req, res) {
// 	var bucket = req.body.bucket
// 	var key = req.body.key

// 	var keys = req.body.keys
// 	if (typeof keys === "undefined") keys = '1000'
// 	var next = req.body.next
// 	if (typeof next === "undefined") next = 'None'
// 	var delimiter = req.body.delimiter
// 	if (typeof delimiter === "undefined") delimiter = ''

// 	var params = {
// 		Bucket: bucket,
// 		Prefix: key,
// 		MaxKeys: keys,
// 		Marker: next,
// 		Delimiter: delimiter
// 	}

//   var params = {
// 	  Bucket: bucket, /* required */
// 	  //ContinuationToken: 'STRING_VALUE',
// 	  Delimiter: delimiter,
// 	  //EncodingType: url,
// 	  //FetchOwner: true || false,
// 	  MaxKeys: keys,
// 	  Prefix: key,
// 	  //RequestPayer: requester,
// 	  //StartAfter: 'STRING_VALUE'
// 	};

// 	s3.listObjectsV2(params, function(err, data) {
// 	  if(err) return res.status(200).send('404') // an error occurred
// 	  else     return res.status(200).send(data)         // successful response
// 	})

// }

// function moveObject(req, res) {
// 	var bucket = req.body.bucket
// 	var oldPath = req.body.oldKey
// 	var newPath = req.body.newKey
// 	//return res.status(200).send('deleted')

// 	var params = {
// 		Bucket: bucket,
// 		Delete: { Objects: [{ Key: oldPath } ] }
// 	}

// 	s3.listObjects({Bucket: bucket, Prefix: oldPath}, function(err, dataArr) {

// 		var dataArr = dataArr
// 	  if(dataArr.Contents.length) {
// 	    async.each(dataArr.Contents, function(file, cb) {
// 	      var params = {
// 	        Bucket: bucket,
// 	        CopySource: bucket + '/' + file.Key,
// 	        Key: file.Key.replace(oldPath, newPath),
// 					ACL: 'public-read-write'
// 	      }

// 				//return res.status(200).send(params)
// 				//return res.status(200).send(params)

// 	      s3.copyObject(params, function(err, data){
// 						if(err){
// 								return res.status(200).send(err)
// 						}else{
// 								Object.keys(dataArr.Contents).forEach(async function (key){
// 									var params = {
// 										Bucket: bucket,
// 										Delete: { Objects: [{ Key: dataArr.Contents[key].Key } ] }
// 									}
// 									var deletePromise = await s3.deleteObjects(params).promise()
// 								})

// 								return res.status(200).send('deleted')
// 						}
// 	      })
// 	    })
// 	  }
// 	})
// }

// function copyObject(req, res) {
// 	var oldBucket = req.body.oldBucket
// 	var oldPath = req.body.oldKey
// 	var newBucket = req.body.newBucket
// 	var newPath = req.body.newKey

// 	//return res.status(200).send('deleted')
// 	/*
// 	var params = {
// 		Bucket: bucket,
// 		Delete: { Objects: [{ Key: oldPath } ] }
// 	}
// 	*/

// 	s3.listObjects({Bucket: oldBucket, Prefix: oldPath}, function(err, dataArr) {
// 	  if(err) return res.status(200).send({err0: err})
// 	  var dataArr = dataArr

// 	  if(dataArr.Contents.length) {
// 	    async.each(dataArr.Contents, function(file, cb) {
// 	      var params = {
// 		        Bucket: newBucket,
// 		        CopySource: oldBucket + '/' + file.Key,
// 		        Key: file.Key.replace(oldPath, newPath),
// 				ACL: 'public-read-write'
// 	      }

// 		//return res.status(200).send(params)

// 	      s3.copyObject(params, function(err, data){
// 				//if(err) return res.send({err1: err})
// 				/*
// 				Object.keys(dataArr.Contents).forEach(async function (key){
// 					var params = {
// 						Bucket: bucket,
// 						Delete: { Objects: [{ Key: dataArr.Contents[key].Key } ] }
// 					}
// 					var deletePromise = await s3.deleteObjects(params).promise()
// 				})
// 				*/
// 				//return res.send('copied')
// 	      })
// 	    })

// 	    return res.send('copied')
// 	  }
// 	})
// }

// function exportZip(req, res){
// 	setTimeout(function() {
// 		var bucket = req.body.bucket
// 		var dir = req.body.key
// 		var nameFile = req.body.name
// 		///////////////
// 		//////////////
// 		var id = dir.split('/')[1]

// 		var output = fs.createWriteStream(`/tmp/${nameFile}.zip`, { mode: 0o777 })
// 		fs.chmodSync(`/tmp/${nameFile}.zip`, '777')

// 		var archive = archiver("zip", { zlib: { level: 9 } })
// 		output.on("close", () => true)
// 		output.on("error", err => { return res.status(200).send(err) })
// 		archive.pipe(output)

// 		//data = Buffer.from(JSON.stringify(data)).toString('base64')
// 		//archive.append(data, { name: 'services' })

// 		//return res.status(200).send(data)

// 		var wtf = []
// 		var heads = []

// 		s3.listObjects({Bucket: bucket, Prefix: dir}, function(err, data) {
// 			Object.keys(data.Contents).forEach(async function(key){
// 				var url = `https://s3.eu-central-1.amazonaws.com/aythen.app/${data.Contents[key].Key}`
// 				var file = data.Contents[key].Key.replace(dir, '')

// 				if(url[url.length - 1] != '/'){
// 					heads.push(file)
// 					wtf.push(rp(url))
// 				}
// 			})

// 			Promise.all(wtf).then(async (data) => {
// 				/*
// 				body.forEach( async (data, index) => {
// 					archive.append(data, { name: heads[index] })
// 				})
// 				*/

// 				for(var i = 0;i<data.length;i++){
// 					//console.log('data', data[i])
// 					archive.append(data[i], {name: heads[i] })
// 				}

// 				var finalize = archive.finalize().then(() => {
// 					fs.readFile(`/tmp/${nameFile}.zip`, function (err, data) {
// 						var s3Params = {
// 						     Bucket: 'aythen.app',
// 						     Body: data,
// 						     Key: 'zip/'+nameFile+'.zip',
// 						     ContentType: 'application/octet-stream',
// 							 ACL:'public-read'
// 						   }

// 						s3.putObject(s3Params).promise().then( (result) => {
// 								 return res.status(200).send('https://s3.eu-central-1.amazonaws.com/aythen.app/zip/'+nameFile+'.zip')
// 						})
// 					})
// 				})
// 			})
// 		})

// 	}, 200);
// }

// function importZip(req, res){
// 		//var dir = req.body.params.key
// 		//return res.status(200).send(req.body)
// 		//return res.satatus(200).send(req.files)

// 		//delete directory
// 		var params = {
// 			Bucket: req.body.bucket,
// 			Prefix: req.body.key
// 		}
// 		s3.listObjects(params, function(err, data) {
// 			if(err) return res.status(200).send({err:err})
// 			Object.keys(data.Contents).forEach(async function (key){
// 				var params = {
// 				  Bucket: req.body.bucket,
// 				  Delete: { Objects: [{ Key: data.Contents[key].Key } ] }
// 				}
// 				var deletePromise = await s3.deleteObjects(params).promise()
// 			})

// 			return res.status(200).send('deleted')
// 			//open zip
// 		})

// }

// function selectObject(req, res) {
// 	var bucket = req.body.bucket
// 	var file = req.body.file

// 	s3.selectObjectContent({
// 				Bucket: bucket,
// 				Key: file,
// 				Expression: 'Select * from S3Object',
// 				ExpressionType: 'SQL',
// 				InputSerialization: {
// 					'CompressionType': 'None',
// 					'JSON': {
// 						'Type': 'DOCUMENT'
// 					}
// 				},
// 				OutputSerialization: {
// 					'JSON': {
// 						'RecordDelimiter': '\n'
// 					}
// 				}
// 		}, function(err, data) {
// 				if (err) return res.status(200).send({err:'deleted1'})

// 				// data.Payload will be an array in browsers/node.js 0.8
// 				if (Array.isArray(data.Payload)) {
// 					/*
// 						data.Payload.map(function(event) {
// 								if (event.Stats) {
// 										console.log(event.Stats.Details);
// 								} else if (event.Records) {
// 										event.Records.Payload;
// 								}
// 						});
// 					*/
// 				} else {
// 						// data.Payload will be a readable stream in node.js 0.10+
// 						return res.status(200).send(data)
// 						/*
// 						data.Payload!.on('data', function(event) {
// 								if (event.Stats) {
// 										console.log(event.Stats.Details);
// 								}
// 						});
// 						data.Payload!.on('end', function() {});
// 						*/
// 				}

// 		});

// }

// routerS3.post('/addBucket', addBucket)
// routerS3.post('/put', putObject)
// routerS3.post('/deleteBucket', deleteBucket)
// routerS3.post('/getSignedURL', getSignedURL)
// routerS3.post('/getObject', getObject)
// routerS3.post('/deleteObject', deleteObject)
// routerS3.post('/deleteDirectory', deleteDirectory)
// routerS3.post('/listObject', listObject)

// routerS3.post('/export', exportZip)
// routerS3.post('/import', importZip)

// routerS3.post('/moveObject', moveObject)
// routerS3.post('/copyObject', copyObject)
// routerS3.post('/selectObject', selectObject)

// module.exports = routerS3
