import { HandlerBase } from "./handlerbase";
import { IWebSettings } from "../schema";
import { Web } from "@pnp/sp";
import * as omit from "object.omit";
import { replaceUrlTokens } from "../util";

/**
 * Describes the WebSettings Object Handler
 */
export class WebSettings extends HandlerBase {
    /**
     * Creates a new instance of the WebSettings class
     */
    constructor() {
        super("WebSettings");
    }

    /**
     * Provisioning WebSettings
     *
     * @param {Web} web The web
     * @param {IWebSettings} settings The settings
     */
    public async ProvisionObjects(web: Web, settings: IWebSettings): Promise<void> {
        super.scope_started();
        Object.keys(settings)
            .filter(key => typeof (settings[key]) === "string")
            .forEach(key => {
                let value: string = <any>settings[key];
                settings[key] = replaceUrlTokens(value);
            });
        try {
            await Promise.all([
                web.rootFolder.update({ WelcomePage: settings.WelcomePage }),
                web.update(omit(settings, "WelcomePage")),
            ]);
            super.scope_ended();
        } catch (err) {
            super.scope_ended();
            throw err;
        }
    }
}
