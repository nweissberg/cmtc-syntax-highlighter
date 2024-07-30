const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

function activate(context) {
	console.log('Cinematic Script Syntax Highlighter is now active!');

	// Register language configuration
	const languageConfig = {
		indentationRules: {
			increaseIndentPattern: /^(.*\bstart\b.*)$/m,
			decreaseIndentPattern: /^(.*\bend\b.*)$/m
		},
		foldingStartMarker: new RegExp("\\b(start|if|else|while|for)\\b"),
		foldingStopMarker: new RegExp("\\b(end|endif|else|endwhile|endfor)\\b"),
		onEnterRules: []
	};

	const disposableLanguageConfig = vscode.languages.setLanguageConfiguration('cmtc', languageConfig);
	context.subscriptions.push(disposableLanguageConfig);

	// Load TextMate grammar
	const grammarPath = path.join(__dirname, 'syntaxes', 'cmtc.tmLanguage.json');
	const grammar = JSON.parse(fs.readFileSync(grammarPath, 'utf8'));

	// Register the TextMate grammar and semantic tokens provider
	const tokenizationSupport = vscode.languages.createTextMateTokenizer(
		grammar,
		{
			provideDocumentSemanticTokens: (document, token) => {
				const text = document.getText();
				return new Promise((resolve) => {
					const tokens = [];
					const tokenPattern = /<(\w+)>|\"[^"]*\"|\[.*?\]|\b\d+(\.\d+)?\b/g;
					let match;

					while ((match = tokenPattern.exec(text)) !== null) {
						const [matchedText, action] = match;
						const startPos = document.positionAt(match.index);
						const endPos = document.positionAt(match.index + matchedText.length);

						let tokenType = '';
						if (matchedText.startsWith('<') && matchedText.endsWith('>')) {
							tokenType = 'keyword.tag.cmtc';
						} else if (matchedText.startsWith('"') && matchedText.endsWith('"')) {
							tokenType = 'string.double-quoted.cmtc';
						} else if (/\[.*?\]/.test(matchedText)) {
							tokenType = 'constant.vector.cmtc';
						} else if (/\b\d+(\.\d+)?\b/.test(matchedText)) {
							tokenType = 'constant.numeric.cmtc';
						}

						if (tokenType) {
							tokens.push(new vscode.SemanticToken(
								startPos.line,
								startPos.character,
								endPos.line,
								endPos.character,
								tokenType
							));
						}
					}

					resolve(new vscode.SemanticTokens(tokens));
				});
			}
		}
	);

	context.subscriptions.push(tokenizationSupport);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
};
