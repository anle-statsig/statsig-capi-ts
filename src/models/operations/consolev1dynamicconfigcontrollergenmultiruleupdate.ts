/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1DynamicConfigControllerGenMultiRuleUpdateRequest = {
    /**
     * id
     */
    id: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    multiRuleUpdateDto: components.MultiRuleUpdateDto;
};

/**
 * Update List of Dynamic Config Rule Response
 */
export type ConsoleV1DynamicConfigControllerGenMultiRuleUpdateResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.DynamicConfigDto;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenMultiRuleUpdateRequest$inboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenMultiRuleUpdateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "x-respect-review-settings": z.string().optional(),
        MultiRuleUpdateDto: components.MultiRuleUpdateDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            MultiRuleUpdateDto: "multiRuleUpdateDto",
        });
    });

/** @internal */
export type ConsoleV1DynamicConfigControllerGenMultiRuleUpdateRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
    MultiRuleUpdateDto: components.MultiRuleUpdateDto$Outbound;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenMultiRuleUpdateRequest$outboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenMultiRuleUpdateRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1DynamicConfigControllerGenMultiRuleUpdateRequest
> = z
    .object({
        id: z.string(),
        xRespectReviewSettings: z.string().optional(),
        multiRuleUpdateDto: components.MultiRuleUpdateDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            multiRuleUpdateDto: "MultiRuleUpdateDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenMultiRuleUpdateRequest$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenMultiRuleUpdateRequest$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1DynamicConfigControllerGenMultiRuleUpdateRequest$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenMultiRuleUpdateRequest$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenMultiRuleUpdateRequest$outboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenMultiRuleUpdateRequest$Outbound` instead. */
    export type Outbound = ConsoleV1DynamicConfigControllerGenMultiRuleUpdateRequest$Outbound;
}

/** @internal */
export const ConsoleV1DynamicConfigControllerGenMultiRuleUpdateResponseBody$inboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenMultiRuleUpdateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.DynamicConfigDto$inboundSchema,
});

/** @internal */
export type ConsoleV1DynamicConfigControllerGenMultiRuleUpdateResponseBody$Outbound = {
    message: string;
    data: components.DynamicConfigDto$Outbound;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenMultiRuleUpdateResponseBody$outboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenMultiRuleUpdateResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1DynamicConfigControllerGenMultiRuleUpdateResponseBody
> = z.object({
    message: z.string(),
    data: components.DynamicConfigDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenMultiRuleUpdateResponseBody$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenMultiRuleUpdateResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1DynamicConfigControllerGenMultiRuleUpdateResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenMultiRuleUpdateResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenMultiRuleUpdateResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenMultiRuleUpdateResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1DynamicConfigControllerGenMultiRuleUpdateResponseBody$Outbound;
}
