/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type ConsoleV1GatesControllerGenRemoveRequest = {
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
 * Delete gate response
 */
export type ConsoleV1GatesControllerGenRemoveResponseBody = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1GatesControllerGenRemoveRequest$inboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenRemoveRequest,
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
export type ConsoleV1GatesControllerGenRemoveRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1GatesControllerGenRemoveRequest$outboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenRemoveRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1GatesControllerGenRemoveRequest
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
export namespace ConsoleV1GatesControllerGenRemoveRequest$ {
    /** @deprecated use `ConsoleV1GatesControllerGenRemoveRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1GatesControllerGenRemoveRequest$inboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenRemoveRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1GatesControllerGenRemoveRequest$outboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenRemoveRequest$Outbound` instead. */
    export type Outbound = ConsoleV1GatesControllerGenRemoveRequest$Outbound;
}

/** @internal */
export const ConsoleV1GatesControllerGenRemoveResponseBody$inboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenRemoveResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type ConsoleV1GatesControllerGenRemoveResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1GatesControllerGenRemoveResponseBody$outboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenRemoveResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1GatesControllerGenRemoveResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1GatesControllerGenRemoveResponseBody$ {
    /** @deprecated use `ConsoleV1GatesControllerGenRemoveResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1GatesControllerGenRemoveResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenRemoveResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1GatesControllerGenRemoveResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenRemoveResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1GatesControllerGenRemoveResponseBody$Outbound;
}
