import ButtonPopup from "./ButtonPopup";
/**
 * @class ConfirmPopup
 * @extends ButtonPopup
 * @description This class is an overload of ButtonPopup that is used to create a popup with That asks for a confirm [Yes, No].
 *
 * ![ConfirmPopup](https://user-images.githubusercontent.com/14907987/165752226-b76b157f-4935-4248-a5cc-3b21d087cb04.gif)
 *
 * Emits the following events:
 * - "confirm" when the user confirm
 * - "cancel" when the user cancel
 * - "exit" when the user exit
 * @param {string} id - The id of the popup.
 * @param {string} title - The title of the popup.
 * @param {string} message - The message of the popup.
 * @param {boolean} visible - If the popup is visible. Default is false (make it appears using show()).
 *
 * @example const popup = new ConfirmPopup("popup1", "Are you shure").show().on("confirm", (answer) => { console.log(answer) }) // show the popup and wait for the user to confirm
 */
export declare class ConfirmPopup extends ButtonPopup {
    constructor(id: string, title: string | undefined, message: string | undefined);
}
export default ConfirmPopup;
