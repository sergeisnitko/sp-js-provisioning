import { ProvisioningContext } from "../provisioningcontext";

export function replaceContextTokens(str: string, context: ProvisioningContext): string {
    let m;
    while ((m = context.tokenRegex.exec(str)) !== null) {
        if (m.index === context.tokenRegex.lastIndex) {
            context.tokenRegex.lastIndex++;
        }
        m.forEach((match) => {
            let [tokenType, tokenValue] = match.replace(/[\{\}]/g, "").split(":");
            switch (tokenType) {
                case "listid": {
                    let [list] = context.lists.filter(lst => lst.Title === tokenValue);
                    if (list) {
                        str = str.replace(match, list.Id);
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

