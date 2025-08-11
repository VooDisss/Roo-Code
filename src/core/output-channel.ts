import * as vscode from "vscode"

let geminiTokenChannel: vscode.OutputChannel | undefined

export function getGeminiTokenChannel(): vscode.OutputChannel {
	if (!geminiTokenChannel) {
		geminiTokenChannel = vscode.window.createOutputChannel("Roo-Code Gemini Tokens")
	}
	return geminiTokenChannel
}
