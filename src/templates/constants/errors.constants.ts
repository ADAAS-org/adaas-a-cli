
export enum NAMESPACE_CONSTANTS__ERROR_CODES {
    TEMPLATE_ERROR = 'ERR-500-0001',
};


export const NAMESPACE_CONSTANTS__DEFAULT_ERRORS = {
    TEMPLATE_ERROR: {
        serverCode: 500,
        code: NAMESPACE_CONSTANTS__ERROR_CODES.TEMPLATE_ERROR,
        description: 'Template Error',
        message: 'Template Error'
    },
}