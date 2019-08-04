// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions } from 'vscode-languageclient';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const serverOptions: ServerOptions = {
		command: "tflint",
		args: ["--langserver"],
	}

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "tflint-lsc" is now active!');

	const clientOptions: LanguageClientOptions = {
		documentSelector: ['terraform'],
	};

	const disposable = new LanguageClient("TFLint", serverOptions, clientOptions).start()

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
