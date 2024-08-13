/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type ConsoleV1SegmentsControllerGenRemoveRequest = {
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
 * Delete Segment Success
 */
export type ConsoleV1SegmentsControllerGenRemoveResponseBody = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1SegmentsControllerGenRemoveRequest$inboundSchema: z.ZodType<
    ConsoleV1SegmentsControllerGenRemoveRequest,
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
export type ConsoleV1SegmentsControllerGenRemoveRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1SegmentsControllerGenRemoveRequest$outboundSchema: z.ZodType<
    ConsoleV1SegmentsControllerGenRemoveRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1SegmentsControllerGenRemoveRequest
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
export namespace ConsoleV1SegmentsControllerGenRemoveRequest$ {
    /** @deprecated use `ConsoleV1SegmentsControllerGenRemoveRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1SegmentsControllerGenRemoveRequest$inboundSchema;
    /** @deprecated use `ConsoleV1SegmentsControllerGenRemoveRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1SegmentsControllerGenRemoveRequest$outboundSchema;
    /** @deprecated use `ConsoleV1SegmentsControllerGenRemoveRequest$Outbound` instead. */
    export type Outbound = ConsoleV1SegmentsControllerGenRemoveRequest$Outbound;
}

/** @internal */
export const ConsoleV1SegmentsControllerGenRemoveResponseBody$inboundSchema: z.ZodType<
    ConsoleV1SegmentsControllerGenRemoveResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type ConsoleV1SegmentsControllerGenRemoveResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1SegmentsControllerGenRemoveResponseBody$outboundSchema: z.ZodType<
    ConsoleV1SegmentsControllerGenRemoveResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1SegmentsControllerGenRemoveResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1SegmentsControllerGenRemoveResponseBody$ {
    /** @deprecated use `ConsoleV1SegmentsControllerGenRemoveResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1SegmentsControllerGenRemoveResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1SegmentsControllerGenRemoveResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1SegmentsControllerGenRemoveResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1SegmentsControllerGenRemoveResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1SegmentsControllerGenRemoveResponseBody$Outbound;
}