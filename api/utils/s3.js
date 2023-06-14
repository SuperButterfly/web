// 'use strict';
// const AWS = require('aws-sdk');
// AWS.config.update({
// 	region: "eu-central-1",
// 	credentials: new AWS.Credentials('AKIAZX32UIF3EVRHQDFU', 'WTl19C4XCD9NJFfgnNxr7jvCOx+3xCcK71w0/Hf/')
// });
// const s3 = new AWS.S3();
// const Bucket = 'aythen';

// const postObject = async (file, data, type) => {
// 	try {
// 		const result = await s3.putObject({
// 			Bucket,
// 			Key: file,
// 			Body: data,
// 			ContentType: type
// 		}).promise();
// 		console.log('postObject result: ', result)
// 	}
// 	catch (error) {
// 		console.log(error.message);
// 	}
// };

// const putObject = async (key, data, type) => {
// 	try {
// 		const result = await s3.upload({
// 			Bucket,
// 			Key: key,
// 			Body: Buffer.from(data, "base64"),
// 			ContentType: type,
// 			ACL: 'public-read',
// 			ContentEncoding: 'base64'
// 		}).promise();
// 		console.log('postObject result: ', result)
// 	}
// 	catch (error) {
// 		console.log(error.message);
// 	}
// };

// const getSignedURL = async (key, type) => {
// 	try {
// 		const params = {
// 			Bucket,
// 			Key: key,
// 			ContentType: type,
// 			Expires: 3600,
// 			ACL: 'public-read'
// 		};
// 		const result = await s3.getSignedUrl('putObject', params).promise();
// 		console.log('getSignedURL result: ', result)
// 	}
// 	catch (error) {
// 		console.log(error.message);
// 	}
// };

// const getObject = async (file, res) => {
// 	try {
// 		const result = await s3.getObject({
// 			Bucket,
// 			Key: file,
// 		}).promise();
// 		console.log('getObject result: ', result)
// 	}
// 	catch (error) {
// 		console.log(error.message);
// 	}
// };


// const deleteObject = async (key) => {
// 	try {
// 		const result = await s3.deleteObjects({
// 			Bucket,
// 			Delete: { Objects: [{ Key: key }] }
// 		}).promise();
// 		console.log('deleteObject result: ', result)
// 	}
// 	catch (error) {
// 		console.log(error.message);
// 	}
// };

// const deleteDirectory = (key) => {
// 	const params = {
// 		Bucket,
// 		Prefix: key
// 	};
	
// 	try {
// 		s3.listObjects(params, function(err, data) {
// 			if (err) throw new Error(err.message);
// 			Object.keys(data.Contents).forEach(async function(key) {
// 				const params = {
// 					Bucket,
// 					Delete: { Objects: [{ Key: data.Contents[key].Key }] }
// 				};
// 				const deletePromise = await s3.deleteObjects(params).promise();
// 				console.log(deletePromise)
// 			});
// 		});
// 	}
// 	catch (error) {
// 		console.log(error.message)
// 	}
// };

// const listObject = async (key, keys, next, delimiter) => {

// 	if (typeof keys === "undefined") keys = '1000';
// 	if (typeof next === "undefined") next = 'None';
// 	if (typeof delimiter === "undefined") delimiter = '';

// 	const params = {
// 		Bucket,
// 		Prefix: key,
// 		MaxKeys: keys,
// 		Marker: next,
// 		Delimiter: delimiter
// 	};

// 	try {
// 		const result = await s3.listObjectsV2(params).promise();
// 		console.log('listObject result: ', result)
// 	}
// 	catch (error) {
// 		console.log(error.message);
// 	}
// };

// module.exports = {
// 	postObject,
// 	putObject,
// 	getSignedURL,
// 	getObject,
// 	deleteObject,
// 	deleteDirectory,
// 	listObject
// };
