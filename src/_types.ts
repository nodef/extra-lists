export type Lists<T, U>       = [Iterable<T>, Iterable<U>];
export type tillFn            = (dones: boolean[]) => boolean;
export type reduceFn<T, U, V> = (acc: V, v: U, k: T, x: Lists<T, U>) => V;
export type calledFn<T, U>    = (v: U, k: T, x: Lists<T, U>) => void;
export type testFn<T, U>      = (v: U, k: T, x: Lists<T, U>) => boolean;
export type mapFn<T, U, V>    = (v: U, k: T, x: Lists<T, U>) => V;
export type combineFn<T>      = (a: T, b: T) => T;
export type compareFn<T>      = (a: T, b: T) => number;
export type getFn<T>          = () => T;
