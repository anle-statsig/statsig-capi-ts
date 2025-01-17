/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1KeysControllerGenCreateRequest = {
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    keyCreateContractDto: components.KeyCreateContractDto;
};

/**
 * Key created successfully
 */
export type ConsoleV1KeysControllerGenCreateResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.KeyDto;
};

/** @internal */
export const ConsoleV1KeysControllerGenCreateRequest$inboundSchema: z.ZodType<
    ConsoleV1KeysControllerGenCreateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-respect-review-settings": z.string().optional(),
        KeyCreateContractDto: components.KeyCreateContractDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            KeyCreateContractDto: "keyCreateContractDto",
        });
    });

/** @internal */
export type ConsoleV1KeysControllerGenCreateRequest$Outbound = {
    "x-respect-review-settings"?: string | undefined;
    KeyCreateContractDto: components.KeyCreateContractDto$Outbound;
};

/** @internal */
export const ConsoleV1KeysControllerGenCreateRequest$outboundSchema: z.ZodType<
    ConsoleV1KeysControllerGenCreateRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1KeysControllerGenCreateRequest
> = z
    .object({
        xRespectReviewSettings: z.string().optional(),
        keyCreateContractDto: components.KeyCreateContractDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            keyCreateContractDto: "KeyCreateContractDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1KeysControllerGenCreateRequest$ {
    /** @deprecated use `ConsoleV1KeysControllerGenCreateRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1KeysControllerGenCreateRequest$inboundSchema;
    /** @deprecated use `ConsoleV1KeysControllerGenCreateRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1KeysControllerGenCreateRequest$outboundSchema;
    /** @deprecated use `ConsoleV1KeysControllerGenCreateRequest$Outbound` instead. */
    export type Outbound = ConsoleV1KeysControllerGenCreateRequest$Outbound;
}

/** @internal */
export const ConsoleV1KeysControllerGenCreateResponseBody$inboundSchema: z.ZodType<
    ConsoleV1KeysControllerGenCreateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.KeyDto$inboundSchema,
});

/** @internal */
export type ConsoleV1KeysControllerGenCreateResponseBody$Outbound = {
    message: string;
    data: components.KeyDto$Outbound;
};

/** @internal */
export const ConsoleV1KeysControllerGenCreateResponseBody$outboundSchema: z.ZodType<
    ConsoleV1KeysControllerGenCreateResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1KeysControllerGenCreateResponseBody
> = z.object({
    message: z.string(),
    data: components.KeyDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1KeysControllerGenCreateResponseBody$ {
    /** @deprecated use `ConsoleV1KeysControllerGenCreateResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1KeysControllerGenCreateResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1KeysControllerGenCreateResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1KeysControllerGenCreateResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1KeysControllerGenCreateResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1KeysControllerGenCreateResponseBody$Outbound;
}
