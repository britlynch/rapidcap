import * as vscode from 'vscode';

export class Note {
    private question: string;
    private answer: string;

    constructor(question: string, answer: string) {
        this.question = question;
        this.answer = answer;
    }
}