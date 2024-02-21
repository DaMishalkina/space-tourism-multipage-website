import {writable} from "svelte/store";

export const sharedHeaders = writable<{[key: string]: string}[]>([]);