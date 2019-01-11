import { LogLevel } from "@pnp/logging";

export interface IProvisioningLogging {
    activeLogLevel?: LogLevel;
    prefix?: string;
}

/**
 * Describes the Provisioning Config
 */
export interface IProvisioningConfig {
    spfxContext?;
    logging?: IProvisioningLogging;
}