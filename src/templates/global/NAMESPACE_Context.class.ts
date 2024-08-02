import { A_SDK_CONSTANTS__ERROR_CODES } from "@adaas/a-sdk-types";
import { NAMESPACE_CONSTANTS__DEFAULT_ERRORS } from "../constants/errors.constants";
import { A_AUTH_TYPES__IAuthenticator, A_AUTH_Context, A_AUTH_ContextClass } from "@adaas/a-auth";


/**
 * Global Context for NAMESPACE sdk
 */
export class NAMESPACE_ContextClass extends A_AUTH_ContextClass {

    /**
     * Global AUTH Context for the SDKs
     */
    auth: A_AUTH_ContextClass = A_AUTH_Context


    protected TEMPLATE_VARIABLE: string = '{{url}}';


    protected namespaceContextAllowedProperties = [
        ...this.authContextAllowedProperties,
        "TEMPLATE_VARIABLE"
    ] as const;


    constructor() {
        super({
            namespace: '{{namespace}}',
            errors: NAMESPACE_CONSTANTS__DEFAULT_ERRORS
        });
    }


    getConfigurationProperty<T = any>(
        property: typeof this.namespaceContextAllowedProperties[number]
    ): T {
        if (this.namespaceContextAllowedProperties.includes(property as any))
            return this[property as string] as T;
        else
            this.Errors.throw(A_SDK_CONSTANTS__ERROR_CODES.CONFIGURATION_PROPERTY_NOT_EXISTS_OR_NOT_ALLOWED_TO_READ);
    }


    getAuthenticator(userASEID?: string | undefined, userScope?: string): A_AUTH_TYPES__IAuthenticator {
        /**
         * In case when the CLIENT_ID and CLIENT_SECRET provided 
         * And their ENV NAMES comes from the ENV CORRESPONDING to the Context NAMESPACE    
         * 
         */
        if (this.CLIENT_ID && this.CLIENT_SECRET)
            return super.getAuthenticator(userASEID, userScope);
        /**
         * Otherwise Use the fallback to the A_AUTH Context
         */
        else
            return this.auth.getAuthenticator(userASEID, userScope);
    }


    protected async loadExtendedConfigurationsFromEnvironment(): Promise<void> {
        this.TEMPLATE_VARIABLE = process.env[this.getConfigurationProperty_ENV_Alias('TEMPLATE_VARIABLE')] || this.TEMPLATE_VARIABLE;
    }

    protected async loadExtendedConfigurationsFromFile<T = any>(config: T): Promise<void> {
        this.TEMPLATE_VARIABLE = config[this.getConfigurationProperty_File_Alias('TEMPLATE_VARIABLE')] || this.TEMPLATE_VARIABLE;
    }
}


export const NAMESPACE_Context = new NAMESPACE_ContextClass()