import { tap } from "rxjs";
import { GuiManager } from "../core/index.js";

export function log<T>(before: string = '', valuefn?: ((value: T) => string) | null, outStream: NodeJS.WritableStream = null) {
    const outConsole = outStream ? new console.Console(outStream) : console;
    return tap<T>(v => 
        GuiManager.instance 
        ? 
        GuiManager.instance.log((valuefn ? valuefn(v) : v), before) 
        : 
        outConsole.log(before, valuefn ? valuefn(v) : v)); 
}