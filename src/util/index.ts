import { ProvisioningContext } from "../provisioningcontext";

export function replaceTokens(str: string, context: ProvisioningContext): string {
    let m;
    while ((m = context.tokenRegex.exec(str)) !== null) {
        if (m.index === context.tokenRegex.lastIndex) {
            context.tokenRegex.lastIndex++;
        }
        m.forEach((match) => {
            let [Type, Value] = match.replace(/[\{\}]/g, "").split(":");
            switch (Type) {
                case "listid": {
                    let list = context.lists.filter(l => l.Title === Value);
                    if (list.length === 1) {
                        str = str.replace(match, list[0].Id);
                    }
                }
            }
        });
    }
    return str;
}

export function replaceUrlTokens(str: string): string {
    return str
        .replace(/{sitecollection}/g, _spPageContextInfo.siteAbsoluteUrl)
        .replace(/{wpgallery}/g, `${_spPageContextInfo.siteAbsoluteUrl}/_catalogs/wp`)
        .replace(/{hosturl}/g, `${window.location.protocol}//${window.location.host}:${window.location.port}`)
        .replace(/{themegallery}/g, `${_spPageContextInfo.siteAbsoluteUrl}/_catalogs/theme/15`);
}

export function makeUrlRelative(absUrl: string): string {
    return absUrl.replace(`${document.location.protocol}//${document.location.hostname}`, "");
}

export function base64EncodeString(str: string): string {
    let bytes = [];
    for (let i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
        bytes.push(0);
    }
    let b64encoded = window.btoa(String.fromCharCode.apply(null, bytes));
    return b64encoded;
}

export function isNode(): boolean {
    return typeof window === "undefined";
}

