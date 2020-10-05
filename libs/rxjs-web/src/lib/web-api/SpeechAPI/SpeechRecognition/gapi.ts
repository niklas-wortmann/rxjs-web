// Global API
// use webkit API on webkit

const _SpeechRecognition: typeof SpeechRecognition =
	globalThis.SpeechRecognition || (globalThis as any)['webkitSpeechRecognition'];
const _SpeechGrammarList: typeof SpeechGrammarList =
	globalThis.SpeechGrammarList || (globalThis as any)['webkitSpeechGrammarList'];
const _SpeechRecognitionEvent: typeof SpeechRecognitionEvent =
	globalThis.SpeechRecognitionEvent || (globalThis as any)['webkitSpeechRecognitionEvent'];

export {
	_SpeechRecognition as SpeechRecognition,
	_SpeechGrammarList as SpeechGrammarList,
	_SpeechRecognitionEvent as SpeechRecognitionEvent,
};
