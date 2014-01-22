
// var eol = '\n';


var editor = ace.edit('editor');
editor.setTheme('ace/theme/monokai');
var session = editor.getSession();
session.setMode('ace/mode/javascript');

// Concat together the built in extensions
var myCustomSnippetText = JsExtensionSnippetText + angularSnippetText + ejsSnippetText;

ace_snippets(editor, session, 'javascript', myCustomSnippetText);
