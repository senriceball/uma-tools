import { h, createContext } from 'preact';
import { useCallback } from 'preact/hooks';

export function defaultLanguage() {
    return navigator.language.startsWith('ja') ? 'ja' : 'en-ja';
}

export const Language = createContext(defaultLanguage());

export function LanguageSelect(props) {
	const change = useCallback((e) => props.setLanguage(e.target.value), [props.setLanguage])

	return (
		<select value={props.language} onChange={change}>
			<option value="en">English</option>
			<option value="ja">日本語</option>
			<option value="en-ja">English with Japanese skill names</option>
		</select>
	);
}
