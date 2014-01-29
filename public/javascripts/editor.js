
// var eol = '\n';


var editor = ace.edit('editor');
editor.setTheme('ace/theme/monokai');
var session = editor.getSession();
session.setMode('ace/mode/javascript');

// Concat together the built in extensions
var myCustomSnippetText = JsExtensionSnippetText + angularSnippetText + ejsSnippetText;

ace_snippets(editor, session, 'javascript', myCustomSnippetText);

var names = getNames(editor, session, 'javascript', myCustomSnippetText);
console.log('NAMES: ', names);

var contentArr = getContent(editor, session, 'javascript', myCustomSnippetText);
for(var i = 0; i < contentArr.length; i++) {
	console.log(contentArr[i]);
}

// You could use the getName and getContent functions in a dropdown or table, etc
// to display the list of available snippets that you have added.
