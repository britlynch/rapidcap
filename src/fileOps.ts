import * as vscode from 'vscode';
import * as fs from 'fs';
import * as rd from 'readline';
import * as Note from './note'

export class FileOps {
    private path: string;

    constructor(filePath: string) {
        this.path = filePath;
    }

    parse() {
        var reader = rd.createInterface(fs.createReadStream(this.path));

        var data: Array<{question: string; answer: string}> = [];
        reader.on("line", (l: string) => {
            var tokens = l.split(' ');
            var q = tokens[0];
            var a = tokens[1];
            data.push({
                question: q,
                answer: a
            })
        });

        return data;
    }

    append(note: Note.Note) {
        fs.appendFile(this.path, note, (err) => {
            if (err) throw err;
        })
    }
}
