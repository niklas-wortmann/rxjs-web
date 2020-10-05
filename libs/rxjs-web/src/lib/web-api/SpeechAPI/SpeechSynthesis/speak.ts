import { fromEvent, merge, Observable, throwError, timer } from 'rxjs';
import { switchMap, switchMapTo, takeUntil } from 'rxjs/operators';

export interface SpeechSynthesisUtteranceConfig {
	text: string;
	volume?: number;
	rate?: number;
	pitch?: number;
	lang?: string;
	voice?: SpeechSynthesisVoice;
}

const optionsKeys: (keyof SpeechSynthesisUtteranceConfig)[] = ['text', 'voice', 'volume', 'rate', 'pitch', 'lang'];

export function speak(value: string | SpeechSynthesisUtteranceConfig | SpeechSynthesisUtterance) {
	const voice$ = new Observable(observer => {
		let utterance: SpeechSynthesisUtterance;
		if (typeof value == 'string') {
			utterance = new SpeechSynthesisUtterance(value);
		} else if (value instanceof SpeechSynthesisUtterance) {
			utterance = value;
		} else if (value && typeof value.text == 'string') {
			utterance = new SpeechSynthesisUtterance();
			optionsKeys.forEach(key => {
				if (key in value) {
					// ts complains that utterance[key] is `never`
					(utterance[key] as any) = value[key];
				}
			});
		} else {
			observer.error(
				new Error(
					'Unrecognized input: pass string | SpeechSynthesisUtteranceConfig | SpeechSynthesisUtterance to speak(...) function.'
				)
			);
			observer.complete(); // < not sure if this is needed
			return;
		}

		// subscibe to Utterance events
		const boundary$ = fromEvent(utterance, 'boundary');
		const mark$ = fromEvent(utterance, 'mark');
		const pause$ = fromEvent(utterance, 'pause');
		const resume$ = fromEvent(utterance, 'resume');
		const start$ = fromEvent(utterance, 'start');
		// error -- as errors on Observable
		const error$ = fromEvent(utterance, 'error').pipe(switchMap(e => throwError(e)));
		// end -- completes Observable
		const end$ = fromEvent(utterance, 'end');

		const subscription = merge(boundary$, mark$, pause$, resume$, start$, error$)
			.pipe(takeUntil(end$))
			.subscribe(observer);

		speechSynthesis.speak(utterance);
		speechSynthesis.resume();

		// cancel all utterances on unsubscribe
		// this is needed for cancelation flow
		// theres no other way to stop tts now
		subscription.add(() => {
			speechSynthesis.cancel();
		});

		return subscription;
	});

	// make a pause to let speechSynthesis.cancel pass
	return timer(4).pipe(switchMapTo(voice$));

	// TODO: consider using share() for result since there would always be only
	// one running instance at a given time
}
