import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { NAMESPACE_ContextClass } from "../../../global/NAMESPACE_Context.class";
import { NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYCreateRequest, NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYCreateResponse, NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYGetRequest, NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYGetResponse, NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYListRequest, NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYListResponse, NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYUpdateRequest, NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYUpdateResponse } from "./NAMESPACE_Template.types";
/**
 * API Provider for ENTITYs
 */
export declare class NAMESPACE_APP_INTERACTIONS__ENTITY_API extends A_AUTH_AppInteractions_APIProvider<NAMESPACE_ContextClass> {
    protected get baseURL(): string;
    /**
     * Returns list of {{base}} based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYListResponse>;
    /**
     * API returns organization with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYGetResponse>;
    /**
     *  API creates organization with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYCreateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYCreateResponse>;
    /**
    * This function is used to create organization
    *
    * @param organization
    * @returns
    */
    update<M = any>(request: NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYUpdateResponse>;
}
