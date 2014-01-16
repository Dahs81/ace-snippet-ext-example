
var eol = '\n';

var snippetText = [
	"snippet log",
	"	console.log(${1:})"
].join(eol);

var editor = ace.edit('editor');
editor.setTheme('ace/theme/monokai');
var session = editor.getSession();
session.setMode('ace/mode/javascript');

ace_snippets(editor, session, 'javascript', snippetText);
