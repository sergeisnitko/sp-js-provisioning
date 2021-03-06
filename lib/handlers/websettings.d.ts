import { HandlerBase } from "./handlerbase";
import { IWebSettings } from "../schema";
import { Web } from "@pnp/sp";
/**
 * Describes the WebSettings Object Handler
 */
export declare class WebSettings extends HandlerBase {
    /**
     * Creates a new instance of the WebSettings class
     */
    constructor();
    /**
     * Provisioning WebSettings
     *
     * @param {Web} web The web
     * @param {IWebSettings} settings The settings
     */
    ProvisionObjects(web: Web, settings: IWebSettings): Promise<void>;
}
