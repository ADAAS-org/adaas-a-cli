import {
    A_SDK_TYPES__IDefaultPagination,
    A_SDK_TYPES__IRequestFilter,
    A_SDK_TYPES__IRequestPagination,
    A_SDK_TYPES__DeepPartial,
    A_SDK_TYPES__ExtractProperties,
    A_SDK_TYPES__Required
} from "@adaas/a-sdk-types";

export type NAMESPACE_TYPES__ENTITY_APIEntity = {
    aseid: string,

    created_at: string;
    updated_at: string;
};




// =========================  APP LIST REQUEST API TYPES ================================
export type NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYListResponse = A_SDK_TYPES__IDefaultPagination<NAMESPACE_TYPES__ENTITY_APIEntity>


// =========================  APP GET REQUEST API TYPES ================================
export type NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYGetRequest = {
    /**
     * ENTITY identifier in ADAAS System
     */
    orgASEID: string,
}

export type NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYGetResponse = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<NAMESPACE_TYPES__ENTITY_APIEntity>,
    [
        'aseid',

        'created_at',
        'updated_at',
    ]>


// =========================  APP CREATE REQUEST API TYPES ================================
export type NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYCreateRequest = A_SDK_TYPES__ExtractProperties<NAMESPACE_TYPES__ENTITY_APIEntity, [

]>


export type NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYCreateResponse = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<NAMESPACE_TYPES__ENTITY_APIEntity>, [
        'aseid',
        'created_at',
        'updated_at',
    ]>



// =========================  APP UPDATE REQUEST API TYPES ================================
export type NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYUpdateRequest = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<NAMESPACE_TYPES__ENTITY_APIEntity>, [
        'aseid'
    ]>

export type NAMESPACE_APP_INTERACTIONS_TYPES__ENTITYUpdateResponse = A_SDK_TYPES__IDefaultPagination<NAMESPACE_TYPES__ENTITY_APIEntity>




