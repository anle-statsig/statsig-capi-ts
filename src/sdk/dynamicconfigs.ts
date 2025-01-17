/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dynamicConfigsAddRule } from "../funcs/dynamicConfigsAddRule.js";
import { dynamicConfigsAddRules } from "../funcs/dynamicConfigsAddRules.js";
import { dynamicConfigsCreate } from "../funcs/dynamicConfigsCreate.js";
import { dynamicConfigsDelete } from "../funcs/dynamicConfigsDelete.js";
import { dynamicConfigsDeleteRule } from "../funcs/dynamicConfigsDeleteRule.js";
import { dynamicConfigsDisable } from "../funcs/dynamicConfigsDisable.js";
import { dynamicConfigsEnable } from "../funcs/dynamicConfigsEnable.js";
import { dynamicConfigsGet } from "../funcs/dynamicConfigsGet.js";
import { dynamicConfigsGetRule } from "../funcs/dynamicConfigsGetRule.js";
import { dynamicConfigsGetRules } from "../funcs/dynamicConfigsGetRules.js";
import { dynamicConfigsList } from "../funcs/dynamicConfigsList.js";
import { dynamicConfigsUpdateFull } from "../funcs/dynamicConfigsUpdateFull.js";
import { dynamicConfigsUpdatePartial } from "../funcs/dynamicConfigsUpdatePartial.js";
import { dynamicConfigsUpdateRule } from "../funcs/dynamicConfigsUpdateRule.js";
import { dynamicConfigsUpdateRules } from "../funcs/dynamicConfigsUpdateRules.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class DynamicConfigs extends ClientSDK {
    /**
     * Create Dynamic Config
     */
    async create(
        request: operations.ConsoleV1DynamicConfigControllerGenCreateRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1DynamicConfigControllerGenCreateResponseBody> {
        return unwrapAsync(dynamicConfigsCreate(this, request, options));
    }

    /**
     * List Dynamic Configs
     */
    async list(
        request: operations.ConsoleV1DynamicConfigControllerGenListRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1DynamicConfigControllerGenListResponseBody> {
        return unwrapAsync(dynamicConfigsList(this, request, options));
    }

    /**
     * Get Dynamic Config
     */
    async get(
        request: operations.ConsoleV1DynamicConfigControllerGenReadRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1DynamicConfigControllerGenReadResponseBody> {
        return unwrapAsync(dynamicConfigsGet(this, request, options));
    }

    /**
     * Partially Update Dynamic Config
     */
    async updatePartial(
        request: operations.ConsoleV1DynamicConfigControllerGenPartialUpdateRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1DynamicConfigControllerGenPartialUpdateResponseBody> {
        return unwrapAsync(dynamicConfigsUpdatePartial(this, request, options));
    }

    /**
     * Fully Update Dynamic Config
     */
    async updateFull(
        request: operations.ConsoleV1DynamicConfigControllerGenFullUpdateRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody> {
        return unwrapAsync(dynamicConfigsUpdateFull(this, request, options));
    }

    /**
     * Delete Dynamic Config
     */
    async delete(
        request: operations.ConsoleV1DynamicConfigControllerGenRemoveRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1DynamicConfigControllerGenRemoveResponseBody> {
        return unwrapAsync(dynamicConfigsDelete(this, request, options));
    }

    /**
     * Get Dynamic Config Rules
     */
    async getRules(
        request: operations.ConsoleV1DynamicConfigControllerGenReadRulesRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1DynamicConfigControllerGenReadRulesResponseBody> {
        return unwrapAsync(dynamicConfigsGetRules(this, request, options));
    }

    /**
     * Add Dynamic Config Rules
     */
    async addRules(
        request: operations.ConsoleV1DynamicConfigControllerGenMultiRuleAddRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1DynamicConfigControllerGenMultiRuleAddResponseBody> {
        return unwrapAsync(dynamicConfigsAddRules(this, request, options));
    }

    /**
     * Update List of Dynamic Config Rules
     */
    async updateRules(
        request: operations.ConsoleV1DynamicConfigControllerGenMultiRuleUpdateRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1DynamicConfigControllerGenMultiRuleUpdateResponseBody> {
        return unwrapAsync(dynamicConfigsUpdateRules(this, request, options));
    }

    /**
     * Get Specific Dynamic Config Rule
     */
    async getRule(
        request: operations.ConsoleV1DynamicConfigControllerGenReadRuleRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1DynamicConfigControllerGenReadRuleResponseBody> {
        return unwrapAsync(dynamicConfigsGetRule(this, request, options));
    }

    /**
     * Update Dynamic Config Rule
     */
    async updateRule(
        request: operations.ConsoleV1DynamicConfigControllerGenRuleUpdateRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1DynamicConfigControllerGenRuleUpdateResponseBody> {
        return unwrapAsync(dynamicConfigsUpdateRule(this, request, options));
    }

    /**
     * Delete Dynamic Config Rule
     */
    async deleteRule(
        request: operations.ConsoleV1DynamicConfigControllerGenRuleDeleteRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1DynamicConfigControllerGenRuleDeleteResponseBody> {
        return unwrapAsync(dynamicConfigsDeleteRule(this, request, options));
    }

    /**
     * Disable Dynamic Config
     */
    async disable(
        request: operations.ConsoleV1DynamicConfigControllerGenDisableRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1DynamicConfigControllerGenDisableResponseBody> {
        return unwrapAsync(dynamicConfigsDisable(this, request, options));
    }

    /**
     * Enable Dynamic Config
     */
    async enable(
        request: operations.ConsoleV1DynamicConfigControllerGenEnableRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1DynamicConfigControllerGenEnableResponseBody> {
        return unwrapAsync(dynamicConfigsEnable(this, request, options));
    }

    /**
     * Add Dynamic Config Rule
     */
    async addRule(
        request: operations.ConsoleV1DynamicConfigControllerGenRuleAddRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1DynamicConfigControllerGenRuleAddResponseBody> {
        return unwrapAsync(dynamicConfigsAddRule(this, request, options));
    }
}
