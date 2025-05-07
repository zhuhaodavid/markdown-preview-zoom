// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "markdown-preview-zoom" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('markdown-preview-zoom.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from markdown-preview-zoom!');
	});

	const increaseFontSize = vscode.commands.registerCommand('markdown-preview-zoom.increaseFontSize', async () => {
		const config = vscode.workspace.getConfiguration('markdown');
		const currentFontSize = config.get<number>('preview.fontSize', 14);
		await config.update('preview.fontSize', currentFontSize + 2, vscode.ConfigurationTarget.Global);
		vscode.window.showInformationMessage(`Markdown preview font size increased to ${currentFontSize + 2}`);
	});

	const decreaseFontSize = vscode.commands.registerCommand('markdown-preview-zoom.decreaseFontSize', async () => {
		const config = vscode.workspace.getConfiguration('markdown');
		const currentFontSize = config.get<number>('preview.fontSize', 14);
		await config.update('preview.fontSize', Math.max(2, currentFontSize - 2), vscode.ConfigurationTarget.Global);
		vscode.window.showInformationMessage(`Markdown preview font size decreased to ${Math.max(2, currentFontSize - 2)}`);
	});

	context.subscriptions.push(disposable, increaseFontSize, decreaseFontSize);
}

// This method is called when your extension is deactivated
export function deactivate() {}
