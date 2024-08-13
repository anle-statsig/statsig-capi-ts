/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1UsersControllerGenReadRequest = {
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
 * Get user response
 */
export type ConsoleV1UsersControllerGenReadResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.UserContractDto;
};

/** @internal */
export const ConsoleV1UsersControllerGenReadRequest$inboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenReadRequest,
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
export type ConsoleV1UsersControllerGenReadRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1UsersControllerGenReadRequest$outboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenReadRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsersControllerGenReadRequest
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
export namespace ConsoleV1UsersControllerGenReadRequest$ {
    /** @deprecated use `ConsoleV1UsersControllerGenReadRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerGenReadRequest$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerGenReadRequest$outboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadRequest$Outbound` instead. */
    export type Outbound = ConsoleV1UsersControllerGenReadRequest$Outbound;
}

/** @internal */
export const ConsoleV1UsersControllerGenReadResponseBody$inboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenReadResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.UserContractDto$inboundSchema,
});

/** @internal */
export type ConsoleV1UsersControllerGenReadResponseBody$Outbound = {
    message: string;
    data: components.UserContractDto$Outbound;
};

/** @internal */
export const ConsoleV1UsersControllerGenReadResponseBody$outboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenReadResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsersControllerGenReadResponseBody
> = z.object({
    message: z.string(),
    data: components.UserContractDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerGenReadResponseBody$ {
    /** @deprecated use `ConsoleV1UsersControllerGenReadResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerGenReadResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerGenReadResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1UsersControllerGenReadResponseBody$Outbound;
}