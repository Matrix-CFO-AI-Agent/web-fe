import clsx, { ClassValue } from "clsx";
import { twMerge } from "tw-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to play specified text
export function playText(text: string) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}


export function stopSpeakText() {
  speechSynthesis.cancel();
}
