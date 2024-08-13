/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type ConsoleV1DynamicConfigControllerGenRemoveRequest = {
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
 * Delete Dynamic Config Response
 */
export type ConsoleV1DynamicConfigControllerGenRemoveResponseBody = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRemoveRequest$inboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenRemoveRequest,
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
export type ConsoleV1DynamicConfigControllerGenRemoveRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRemoveRequest$outboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenRemoveRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1DynamicConfigControllerGenRemoveRequest
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
export namespace ConsoleV1DynamicConfigControllerGenRemoveRequest$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1DynamicConfigControllerGenRemoveRequest$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1DynamicConfigControllerGenRemoveRequest$outboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveRequest$Outbound` instead. */
    export type Outbound = ConsoleV1DynamicConfigControllerGenRemoveRequest$Outbound;
}

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRemoveResponseBody$inboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenRemoveResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type ConsoleV1DynamicConfigControllerGenRemoveResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRemoveResponseBody$outboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenRemoveResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1DynamicConfigControllerGenRemoveResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenRemoveResponseBody$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1DynamicConfigControllerGenRemoveResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenRemoveResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1DynamicConfigControllerGenRemoveResponseBody$Outbound;
}