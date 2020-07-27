import * as vscode from 'vscode';
import * as fs from 'fs';
import * as FileOps from './fileOps';
import * as Note from './note'


// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('rapidcap.addnote', () => {
		let questionOptions: vscode.InputBoxOptions = {
			prompt: "Question"
		}

		let answerOptions: vscode.InputBoxOptions = {
			prompt: "Answer"
		}
		
		let question: string, answer: string;
		let ops = new FileOps.FileOps('test.txt');

		vscode.window.showInputBox(questionOptions).then(value => {
			if (!value) return;
			question = value;
			vscode.window.showInputBox(answerOptions).then(value => {
				if (!value) return;
				answer = value;

				let newNote = new Note.Note(question, answer);		
				ops.append(newNote);

				let fileContents = ops.parse();
				console.dir(fileContents);
			});
		});


	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
