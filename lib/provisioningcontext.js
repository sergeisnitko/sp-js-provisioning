"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes the Provisioning Context
 */
class ProvisioningContext {
    /**
     * Creates a new instance of the ProvisioningContext class
     */
    // tslint:disable-next-line:no-empty
    constructor(lists = [], tokenRegex = /{[a-z]*:[ÆØÅæøåA-za-z ]*}/g) {
        this.lists = lists;
        this.tokenRegex = tokenRegex;
    }
}
exports.ProvisioningContext = ProvisioningContext;
