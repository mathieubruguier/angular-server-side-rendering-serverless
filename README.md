# Angular 5 running with Server-side rendering on Lambda (serverless)

This simple project shows how to run Angular 5+ on Lambda using server-side rendering and the Serverless framework.
If you need more information about server-side rendering in Angular, I would suggest taking a look at [this guide](https://angular.io/guide/universal) on the Angular documentation website.

## Testing server-side rendering

```
$ npm run build:ssr
$ npm run serve:ssr
```

This will build both server-side and client-side code and run a Node server hosting the server.

## Building the Lambda code

```
$ npm run build:lambda
```

The Lambda build, while very similar, differs in some ways. After building, you can zip up the `dist` folder and upload it to Lambda.