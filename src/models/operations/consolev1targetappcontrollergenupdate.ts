/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1TargetAppControllerGenUpdateRequest = {
    /**
     * id
     */
    id: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    updateTargetAppDto: components.UpdateTargetAppDto;
};

/**
 * Update Target App Success
 */
export type ConsoleV1TargetAppControllerGenUpdateResponseBody = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1TargetAppControllerGenUpdateRequest$inboundSchema: z.ZodType<
    ConsoleV1TargetAppControllerGenUpdateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "x-respect-review-settings": z.string().optional(),
        UpdateTargetAppDto: components.UpdateTargetAppDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            UpdateTargetAppDto: "updateTargetAppDto",
        });
    });

/** @internal */
export type ConsoleV1TargetAppControllerGenUpdateRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
    UpdateTargetAppDto: components.UpdateTargetAppDto$Outbound;
};

/** @internal */
export const ConsoleV1TargetAppControllerGenUpdateRequest$outboundSchema: z.ZodType<
    ConsoleV1TargetAppControllerGenUpdateRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1TargetAppControllerGenUpdateRequest
> = z
    .object({
        id: z.string(),
        xRespectReviewSettings: z.string().optional(),
        updateTargetAppDto: components.UpdateTargetAppDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            updateTargetAppDto: "UpdateTargetAppDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1TargetAppControllerGenUpdateRequest$ {
    /** @deprecated use `ConsoleV1TargetAppControllerGenUpdateRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1TargetAppControllerGenUpdateRequest$inboundSchema;
    /** @deprecated use `ConsoleV1TargetAppControllerGenUpdateRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1TargetAppControllerGenUpdateRequest$outboundSchema;
    /** @deprecated use `ConsoleV1TargetAppControllerGenUpdateRequest$Outbound` instead. */
    export type Outbound = ConsoleV1TargetAppControllerGenUpdateRequest$Outbound;
}

/** @internal */
export const ConsoleV1TargetAppControllerGenUpdateResponseBody$inboundSchema: z.ZodType<
    ConsoleV1TargetAppControllerGenUpdateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type ConsoleV1TargetAppControllerGenUpdateResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1TargetAppControllerGenUpdateResponseBody$outboundSchema: z.ZodType<
    ConsoleV1TargetAppControllerGenUpdateResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1TargetAppControllerGenUpdateResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1TargetAppControllerGenUpdateResponseBody$ {
    /** @deprecated use `ConsoleV1TargetAppControllerGenUpdateResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1TargetAppControllerGenUpdateResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1TargetAppControllerGenUpdateResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1TargetAppControllerGenUpdateResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1TargetAppControllerGenUpdateResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1TargetAppControllerGenUpdateResponseBody$Outbound;
}
