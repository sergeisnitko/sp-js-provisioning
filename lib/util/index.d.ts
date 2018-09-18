import { ProvisioningContext } from "../provisioningcontext";
export declare function replaceTokens(str: string, context: ProvisioningContext): string;
export declare function replaceUrlTokens(str: string): string;
export declare function makeUrlRelative(absUrl: string): string;
export declare function base64EncodeString(str: string): string;
export declare function isNode(): boolean;
