/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { StatsigCore } from "../core.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Patch Assignment Source
 */
export async function experimentsWarehouseNativeUpdateAssignmentSource(
    client$: StatsigCore,
    request: operations.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceRequest,
    options?: RequestOptions
): Promise<
    Result<
        operations.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceResponseBody,
        | errors.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceResponseBody
        | errors.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceExperimentsWarehouseNativeResponseBody
        | errors.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceExperimentsWarehouseNativeResponseResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) =>
            operations.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceRequest$outboundSchema.parse(
                value$
            ),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = encodeJSON$("body", payload$.AssignmentSourcePartialUpdateDto, { explode: true });

    const pathParams$ = {
        name: encodeSimple$("name", payload$.name, { explode: false, charEncoding: "percent" }),
    };

    const path$ = pathToFunc("/console/v1/experiments/assignment_source/{name}")(pathParams$);

    const headers$ = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-respect-review-settings": encodeSimple$(
            "x-respect-review-settings",
            payload$["x-respect-review-settings"],
            { explode: false, charEncoding: "none" }
        ),
    });

    const statsigApiKey$ = await extractSecurity(client$.options$.statsigApiKey);
    const security$ = statsigApiKey$ == null ? {} : { statsigApiKey: statsigApiKey$ };
    const context = {
        operationID: "ConsoleV1ExperimentsController.genUpdateAssignmentSource",
        oAuth2Scopes: [],
        securitySource: client$.options$.statsigApiKey,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "PATCH",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["400", "401", "404", "4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const responseFields$ = {
        HttpMeta: { Response: response, Request: request$ },
    };

    const [result$] = await m$.match<
        operations.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceResponseBody,
        | errors.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceResponseBody
        | errors.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceExperimentsWarehouseNativeResponseBody
        | errors.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceExperimentsWarehouseNativeResponseResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(
            200,
            operations.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceResponseBody$inboundSchema
        ),
        m$.jsonErr(
            400,
            errors.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceResponseBody$inboundSchema
        ),
        m$.jsonErr(
            401,
            errors.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceExperimentsWarehouseNativeResponseBody$inboundSchema
        ),
        m$.jsonErr(
            404,
            errors.ConsoleV1ExperimentsControllerGenUpdateAssignmentSourceExperimentsWarehouseNativeResponseResponseBody$inboundSchema
        ),
        m$.fail(["4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
