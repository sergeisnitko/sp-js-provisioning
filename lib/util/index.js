"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function replaceTokens(str, context) {
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
exports.replaceTokens = replaceTokens;
function replaceUrlTokens(str) {
    return str
        .replace(/{sitecollection}/g, _spPageContextInfo.siteAbsoluteUrl)
        .replace(/{wpgallery}/g, `${_spPageContextInfo.siteAbsoluteUrl}/_catalogs/wp`)
        .replace(/{hosturl}/g, `${window.location.protocol}//${window.location.host}:${window.location.port}`)
        .replace(/{themegallery}/g, `${_spPageContextInfo.siteAbsoluteUrl}/_catalogs/theme/15`);
}
exports.replaceUrlTokens = replaceUrlTokens;
function makeUrlRelative(absUrl) {
    return absUrl.replace(`${document.location.protocol}//${document.location.hostname}`, "");
}
exports.makeUrlRelative = makeUrlRelative;
function base64EncodeString(str) {
    let bytes = [];
    for (let i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
        bytes.push(0);
    }
    let b64encoded = window.btoa(String.fromCharCode.apply(null, bytes));
    return b64encoded;
}
exports.base64EncodeString = base64EncodeString;
function isNode() {
    return typeof window === "undefined";
}
exports.isNode = isNode;
