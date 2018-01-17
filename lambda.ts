import app from './server.lambda';
const awsServerlessExpress: any = require('aws-serverless-express');
const binaryMimeTypes = [
    'application/javascript',
    'application/json',
    'application/octet-stream',
    'application/xml',
    'image/jpeg',
    'image/png',
    'image/gif',
    'text/comma-separated-values',
    'text/css',
    'text/html',
    'text/javascript',
    'text/plain',
    'text/text',
    'text/xml',
    'image/x-icon',
    'image/svg+xml',
    'application/x-font-ttf'
];


const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);
export const handler = (event: any, context: any) => awsServerlessExpress.proxy(server, event, context);
