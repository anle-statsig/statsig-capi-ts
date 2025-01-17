/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type ConsoleV1KeysControllerGenDeleteRequest = {
    id: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
};

/**
 * Key deleted successfully
 */
export type ConsoleV1KeysControllerGenDeleteResponseBody = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1KeysControllerGenDeleteRequest$inboundSchema: z.ZodType<
    ConsoleV1KeysControllerGenDeleteRequest,
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
export type ConsoleV1KeysControllerGenDeleteRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1KeysControllerGenDeleteRequest$outboundSchema: z.ZodType<
    ConsoleV1KeysControllerGenDeleteRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1KeysControllerGenDeleteRequest
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
export namespace ConsoleV1KeysControllerGenDeleteRequest$ {
    /** @deprecated use `ConsoleV1KeysControllerGenDeleteRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1KeysControllerGenDeleteRequest$inboundSchema;
    /** @deprecated use `ConsoleV1KeysControllerGenDeleteRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1KeysControllerGenDeleteRequest$outboundSchema;
    /** @deprecated use `ConsoleV1KeysControllerGenDeleteRequest$Outbound` instead. */
    export type Outbound = ConsoleV1KeysControllerGenDeleteRequest$Outbound;
}

/** @internal */
export const ConsoleV1KeysControllerGenDeleteResponseBody$inboundSchema: z.ZodType<
    ConsoleV1KeysControllerGenDeleteResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type ConsoleV1KeysControllerGenDeleteResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1KeysControllerGenDeleteResponseBody$outboundSchema: z.ZodType<
    ConsoleV1KeysControllerGenDeleteResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1KeysControllerGenDeleteResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1KeysControllerGenDeleteResponseBody$ {
    /** @deprecated use `ConsoleV1KeysControllerGenDeleteResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1KeysControllerGenDeleteResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1KeysControllerGenDeleteResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1KeysControllerGenDeleteResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1KeysControllerGenDeleteResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1KeysControllerGenDeleteResponseBody$Outbound;
}
