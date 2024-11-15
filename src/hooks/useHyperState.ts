/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	useCallback,
	useMemo,
	useRef,
	useState,
} from "react";
export type HyperStateOptions = {
	saveLegacy?: boolean;
};
const useHyperState = <T>(defaultValue?: T | null) => {
	const [stateVariable, setStateVariable] = useState(defaultValue);
	const stateVariableRef = useRef<T | undefined | null>(defaultValue);
	stateVariableRef.current = stateVariable;
	const [legacyState] = useState(defaultValue);
	const [touched, setTouched] = useState(false);
	const [dirty, setDirty] = useState(false);

	const set: Dispatch<SetStateAction<T | undefined | null>> = useCallback(
		(...args) => {
			setStateVariable(...args);
			setDirty(true);
			setTouched(true);
		},
		[]
	);

	const eventHandler = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => set((e?.target?.value as any) || ""),
		[set]
	);
	const reset = useCallback(() => {
		setDirty(false);
		set(legacyState);
	}, [legacyState, set]);

	const clear = useCallback(() => {
		if (Array.isArray(legacyState)) return set([] as any);
		if (legacyState === null || legacyState === undefined)
			return set(legacyState);
		if (legacyState instanceof Date) return set(null);

		switch (typeof legacyState) {
			case "boolean":
				return set(false as any);
			case "number":
				return set(0 as any);
			case "string":
				return set("" as any);
			case "object":
				return set({} as any);
			default:
				return set(legacyState);
		}
	}, [legacyState, set]);

	return useMemo(
		() => ({
			stateVariable,
			stateVariableRef,
			set,
			eventHandler,
			initial: legacyState,
			reset,
			clear,
			touched,
			dirty,
		}),
		[
			clear,
			legacyState,
			dirty,
			eventHandler,
			reset,
			set,
			touched,
			stateVariable,
		]
	);
};

export default useHyperState;

export type useHyperStateType<T> = ReturnType<typeof useHyperState<T>>;
