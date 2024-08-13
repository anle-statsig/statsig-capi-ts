/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { configsChangeValidation } from "../funcs/configsChangeValidation.js";
import { configsGetExposureCount } from "../funcs/configsGetExposureCount.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Configs extends ClientSDK {
    /**
     * Read Exposure Event Count
     *
     * @remarks
     * Get the count of exposure events recently received by Statsig.
     */
    async getExposureCount(
        request: operations.ConsoleV1ExposureCountsControllerGenExposureCountRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1ExposureCountsControllerGenExposureCountResponseBody> {
        return unwrapAsync(configsGetExposureCount(this, request, options));
    }

    /**
     * Change Validation
     */
    async changeValidation(
        request: operations.ConsoleV1ChangeValidationControllerChangeValidationRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1ChangeValidationControllerChangeValidationResponseBody> {
        return unwrapAsync(configsChangeValidation(this, request, options));
    }
}
