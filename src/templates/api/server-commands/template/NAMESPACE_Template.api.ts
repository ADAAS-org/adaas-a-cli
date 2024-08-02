import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { NAMESPACE_ContextClass } from "../../../global/NAMESPACE_Context.class";
import {
    NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYCreateRequest,
    NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYCreateResponse,
    NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYGetRequest,
    NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYGetResponse,
    NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYListRequest,
    NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYListResponse,
    NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYUpdateRequest,
    NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYUpdateResponse
} from "./NAMESPACE_Template.types";


/**
 * API Provider for ENTITYs
 */
export class NAMESPACE_APP_INTERACTIONS__ENTITY_API extends A_AUTH_AppInteractions_APIProvider<NAMESPACE_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('TEMPLATE_VARIABLE');
    }


    /**
     * Returns list of {{base}} based on User Access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYListResponse, M>(
                '/{{base}}',
                request,
                {
                    meta
                }
            );
    }

    /**
     * API returns organization with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async load<M = any>(
        request: NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYGetResponse, M>(
                `/{{base}}/${request.orgASEID}`,
                {},
                {
                    meta
                }
            );
    }


    /**
     *  API creates organization with required dependencies
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYCreateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYCreateResponse, M>(
                `/{{base}}`,
                request,
                {
                    meta
                }
            );
    }


    /**
    * This function is used to create organization
    * 
    * @param organization 
    * @returns 
    */
    async update<M = any>(
        request: NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYUpdateResponse, M>(
                `/{{base}}/${request.aseid}`,
                request,
                {
                    meta
                }
            );
    }
}

