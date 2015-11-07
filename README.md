##ace-snippet-extension-example

#### Usage  

```
npm install
bower install
node app.js
```

localhost:3001 in your browser.

#### More about this example project

This project is using a project I created call [https://github.com/Dahs81/ace-snippet-extension](ace-snippet-extention).

This project uses Express 3 (I need to update it, I know) and serves a single index.html page.  On the index.html, we include script tags for the ace-builds project, the ace-snippet-extention project, and an editor.js file that can be found in public/javascripts/  The editor.js file is where you will need to set up any custom snippets that you would like.

*Alternatively, you could create a separate file for all of your custom snippets.  Just be sure to include that file in index.html before the ace-snippet-extention script tag.*
