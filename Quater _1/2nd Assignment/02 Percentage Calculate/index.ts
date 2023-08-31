import PromptSync from "prompt-sync";

const prompt = PromptSync();

const totalMarks = Number(prompt("Enter total Marks. "));

const gotScore = Number(prompt("How much you got. "));

const per = ((gotScore / totalMarks) * 100);

console.log(`you're percentage = ${per}`);

