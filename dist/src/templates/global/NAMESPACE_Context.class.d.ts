import { A_AUTH_TYPES__IAuthenticator, A_AUTH_ContextClass } from "@adaas/a-auth";
/**
 * Global Context for NAMESPACE sdk
 */
export declare class NAMESPACE_ContextClass extends A_AUTH_ContextClass {
    /**
     * Global AUTH Context for the SDKs
     */
    auth: A_AUTH_ContextClass;
    protected TEMPLATE_VARIABLE: string;
    protected namespaceContextAllowedProperties: readonly ["CONFIG_SDK_VALIDATION", "CONFIG_VERBOSE", "CONFIG_IGNORE_ERRORS", "SSO_LOCATION", "TEMPLATE_VARIABLE"];
    constructor();
    getConfigurationProperty<T = any>(property: typeof this.namespaceContextAllowedProperties[number]): T;
    getAuthenticator(userASEID?: string | undefined, userScope?: string): A_AUTH_TYPES__IAuthenticator;
    protected loadExtendedConfigurationsFromEnvironment(): Promise<void>;
    protected loadExtendedConfigurationsFromFile<T = any>(config: T): Promise<void>;
}
export declare const NAMESPACE_Context: NAMESPACE_ContextClass;
