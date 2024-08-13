/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1KeysControllerGenUpdateRequest = {
    id: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    keyUpdateContractDto: components.KeyUpdateContractDto;
};

/**
 * Key updated successfully
 */
export type ConsoleV1KeysControllerGenUpdateResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.KeyDto;
};

/** @internal */
export const ConsoleV1KeysControllerGenUpdateRequest$inboundSchema: z.ZodType<
    ConsoleV1KeysControllerGenUpdateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "x-respect-review-settings": z.string().optional(),
        KeyUpdateContractDto: components.KeyUpdateContractDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            KeyUpdateContractDto: "keyUpdateContractDto",
        });
    });

/** @internal */
export type ConsoleV1KeysControllerGenUpdateRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
    KeyUpdateContractDto: components.KeyUpdateContractDto$Outbound;
};

/** @internal */
export const ConsoleV1KeysControllerGenUpdateRequest$outboundSchema: z.ZodType<
    ConsoleV1KeysControllerGenUpdateRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1KeysControllerGenUpdateRequest
> = z
    .object({
        id: z.string(),
        xRespectReviewSettings: z.string().optional(),
        keyUpdateContractDto: components.KeyUpdateContractDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            keyUpdateContractDto: "KeyUpdateContractDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1KeysControllerGenUpdateRequest$ {
    /** @deprecated use `ConsoleV1KeysControllerGenUpdateRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1KeysControllerGenUpdateRequest$inboundSchema;
    /** @deprecated use `ConsoleV1KeysControllerGenUpdateRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1KeysControllerGenUpdateRequest$outboundSchema;
    /** @deprecated use `ConsoleV1KeysControllerGenUpdateRequest$Outbound` instead. */
    export type Outbound = ConsoleV1KeysControllerGenUpdateRequest$Outbound;
}

/** @internal */
export const ConsoleV1KeysControllerGenUpdateResponseBody$inboundSchema: z.ZodType<
    ConsoleV1KeysControllerGenUpdateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.KeyDto$inboundSchema,
});

/** @internal */
export type ConsoleV1KeysControllerGenUpdateResponseBody$Outbound = {
    message: string;
    data: components.KeyDto$Outbound;
};

/** @internal */
export const ConsoleV1KeysControllerGenUpdateResponseBody$outboundSchema: z.ZodType<
    ConsoleV1KeysControllerGenUpdateResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1KeysControllerGenUpdateResponseBody
> = z.object({
    message: z.string(),
    data: components.KeyDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1KeysControllerGenUpdateResponseBody$ {
    /** @deprecated use `ConsoleV1KeysControllerGenUpdateResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1KeysControllerGenUpdateResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1KeysControllerGenUpdateResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1KeysControllerGenUpdateResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1KeysControllerGenUpdateResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1KeysControllerGenUpdateResponseBody$Outbound;
}