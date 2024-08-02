"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAMESPACE_APP_INTERACTIONS__ENTITY_API = void 0;
const a_auth_1 = require("@adaas/a-auth");
/**
 * API Provider for ENTITYs
 */
class NAMESPACE_APP_INTERACTIONS__ENTITY_API extends a_auth_1.A_AUTH_AppInteractions_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('TEMPLATE_VARIABLE');
    }
    /**
     * Returns list of {{base}} based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get('/{{base}}', request, {
                meta
            });
        });
    }
    /**
     * API returns organization with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/{{base}}/${request.orgASEID}`, {}, {
                meta
            });
        });
    }
    /**
     *  API creates organization with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post(`/{{base}}`, request, {
                meta
            });
        });
    }
    /**
    * This function is used to create organization
    *
    * @param organization
    * @returns
    */
    update(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post(`/{{base}}/${request.aseid}`, request, {
                meta
            });
        });
    }
}
exports.NAMESPACE_APP_INTERACTIONS__ENTITY_API = NAMESPACE_APP_INTERACTIONS__ENTITY_API;
//# sourceMappingURL=NAMESPACE_Template.api.js.map