// https://cloud.yandex.ru/docs/message-queue/instruments/node
// https://aws.amazon.com/ru/sdk-for-javascript/
// let AWS = require('aws-sdk');
//
// let mq = new AWS.SQS({
//     'region': 'ru-central1',
//     'endpoint': 'https://message-queue.api.cloud.yandex.net',
// });
//
// let params = {}
// let result = {}
// let queueUrl = ''
//
// async function createQueue() {
//     params = {
//         'QueueName': 'mq_example_nodejs_sdk',
//     }
//
//     result = await mq.createQueue(params).promise();
//     const queueUrl = result['QueueUrl'];
//
//     console.log('Queue created, URL: ' + queueUrl);
//
//     return queueUrl;
// }
//
// async function sendMessage(queueUrl) {
//     params = {
//         'QueueUrl': queueUrl,
//         'MessageBody': 'test message',
//     }
//
//     result = await mq.sendMessage(params).promise();
//
//     console.log('Message sent, ID: ' + result['MessageId']);
// }
//
// async function receiveMessage() {
//     params = {
//         'QueueUrl': queueUrl,
//         'WaitTimeSeconds': 10,
//     }
//
//     result = await mq.receiveMessage(params).promise();
//
//     result['Messages'].forEach(async function(msg) {
//         console.log('Message received')
//         console.log('ID: ' + msg['MessageId'])
//         console.log('Body: ' + msg['Body'])
//
//         const deleteParams = {
//             'QueueUrl': queueUrl,
//             'ReceiptHandle': msg['ReceiptHandle'],
//         }
//
//         await mq.deleteMessage(deleteParams).promise()
//     })
// }
//
// async function deleteQueue() {
//     params = {
//         'QueueUrl': queueUrl,
//     }
//
//     result = await mq.deleteQueue(params).promise();
//
//     console.log('Queue deleted')
// }
//
// async function main() {
//     let queueUrl = await createQueue();
//     await sendMessage(queueUrl);
//     await receiveMessage();
//     await deleteQueue();
// }
//
// main()
