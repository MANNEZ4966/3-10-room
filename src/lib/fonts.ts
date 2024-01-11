import { NextFont } from "next/dist/compiled/@next/font";
import { Prompt } from "next/font/google";

export const prompt: NextFont = Prompt({
  subsets: ["thai", "latin"],
  weight: "400",
});
