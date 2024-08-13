/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1AutotunesControllerGenReadRequest = {
    /**
     * id
     */
    id: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
};

/**
 * Read Autotune Success
 */
export type ConsoleV1AutotunesControllerGenReadResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.AutotuneExperimentDto;
};

/** @internal */
export const ConsoleV1AutotunesControllerGenReadRequest$inboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenReadRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "x-respect-review-settings": z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
        });
    });

/** @internal */
export type ConsoleV1AutotunesControllerGenReadRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1AutotunesControllerGenReadRequest$outboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenReadRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1AutotunesControllerGenReadRequest
> = z
    .object({
        id: z.string(),
        xRespectReviewSettings: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenReadRequest$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenReadRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1AutotunesControllerGenReadRequest$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenReadRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1AutotunesControllerGenReadRequest$outboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenReadRequest$Outbound` instead. */
    export type Outbound = ConsoleV1AutotunesControllerGenReadRequest$Outbound;
}

/** @internal */
export const ConsoleV1AutotunesControllerGenReadResponseBody$inboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenReadResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.AutotuneExperimentDto$inboundSchema,
});

/** @internal */
export type ConsoleV1AutotunesControllerGenReadResponseBody$Outbound = {
    message: string;
    data: components.AutotuneExperimentDto$Outbound;
};

/** @internal */
export const ConsoleV1AutotunesControllerGenReadResponseBody$outboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenReadResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1AutotunesControllerGenReadResponseBody
> = z.object({
    message: z.string(),
    data: components.AutotuneExperimentDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenReadResponseBody$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenReadResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1AutotunesControllerGenReadResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenReadResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1AutotunesControllerGenReadResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenReadResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1AutotunesControllerGenReadResponseBody$Outbound;
}