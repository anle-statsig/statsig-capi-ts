/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type ConsoleV1AutotunesControllerGenRemoveRequest = {
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
 * Delete Autotune Success
 */
export type ConsoleV1AutotunesControllerGenRemoveResponseBody = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1AutotunesControllerGenRemoveRequest$inboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenRemoveRequest,
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
export type ConsoleV1AutotunesControllerGenRemoveRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1AutotunesControllerGenRemoveRequest$outboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenRemoveRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1AutotunesControllerGenRemoveRequest
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
export namespace ConsoleV1AutotunesControllerGenRemoveRequest$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1AutotunesControllerGenRemoveRequest$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1AutotunesControllerGenRemoveRequest$outboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveRequest$Outbound` instead. */
    export type Outbound = ConsoleV1AutotunesControllerGenRemoveRequest$Outbound;
}

/** @internal */
export const ConsoleV1AutotunesControllerGenRemoveResponseBody$inboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenRemoveResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type ConsoleV1AutotunesControllerGenRemoveResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1AutotunesControllerGenRemoveResponseBody$outboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenRemoveResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1AutotunesControllerGenRemoveResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenRemoveResponseBody$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1AutotunesControllerGenRemoveResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1AutotunesControllerGenRemoveResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1AutotunesControllerGenRemoveResponseBody$Outbound;
}