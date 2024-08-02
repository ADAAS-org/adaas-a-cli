"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAMESPACE_CONSTANTS__DEFAULT_ERRORS = exports.NAMESPACE_CONSTANTS__ERROR_CODES = void 0;
var NAMESPACE_CONSTANTS__ERROR_CODES;
(function (NAMESPACE_CONSTANTS__ERROR_CODES) {
    NAMESPACE_CONSTANTS__ERROR_CODES["TEMPLATE_ERROR"] = "ERR-500-0001";
})(NAMESPACE_CONSTANTS__ERROR_CODES || (exports.NAMESPACE_CONSTANTS__ERROR_CODES = NAMESPACE_CONSTANTS__ERROR_CODES = {}));
;
exports.NAMESPACE_CONSTANTS__DEFAULT_ERRORS = {
    TEMPLATE_ERROR: {
        serverCode: 500,
        code: NAMESPACE_CONSTANTS__ERROR_CODES.TEMPLATE_ERROR,
        description: 'Template Error',
        message: 'Template Error'
    },
};
//# sourceMappingURL=errors.constants.js.map