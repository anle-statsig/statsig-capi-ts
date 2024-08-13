/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1GatesControllerGenMultiRuleAddRequest = {
    /**
     * id
     */
    id: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    multiRuleDto: components.MultiRuleDto;
};

/**
 * Add Multiple Gate Rules Response
 */
export type ConsoleV1GatesControllerGenMultiRuleAddResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.ExternalGateDto;
};

/** @internal */
export const ConsoleV1GatesControllerGenMultiRuleAddRequest$inboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenMultiRuleAddRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "x-respect-review-settings": z.string().optional(),
        MultiRuleDto: components.MultiRuleDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            MultiRuleDto: "multiRuleDto",
        });
    });

/** @internal */
export type ConsoleV1GatesControllerGenMultiRuleAddRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
    MultiRuleDto: components.MultiRuleDto$Outbound;
};

/** @internal */
export const ConsoleV1GatesControllerGenMultiRuleAddRequest$outboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenMultiRuleAddRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1GatesControllerGenMultiRuleAddRequest
> = z
    .object({
        id: z.string(),
        xRespectReviewSettings: z.string().optional(),
        multiRuleDto: components.MultiRuleDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            multiRuleDto: "MultiRuleDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1GatesControllerGenMultiRuleAddRequest$ {
    /** @deprecated use `ConsoleV1GatesControllerGenMultiRuleAddRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1GatesControllerGenMultiRuleAddRequest$inboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenMultiRuleAddRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1GatesControllerGenMultiRuleAddRequest$outboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenMultiRuleAddRequest$Outbound` instead. */
    export type Outbound = ConsoleV1GatesControllerGenMultiRuleAddRequest$Outbound;
}

/** @internal */
export const ConsoleV1GatesControllerGenMultiRuleAddResponseBody$inboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenMultiRuleAddResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.ExternalGateDto$inboundSchema,
});

/** @internal */
export type ConsoleV1GatesControllerGenMultiRuleAddResponseBody$Outbound = {
    message: string;
    data: components.ExternalGateDto$Outbound;
};

/** @internal */
export const ConsoleV1GatesControllerGenMultiRuleAddResponseBody$outboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenMultiRuleAddResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1GatesControllerGenMultiRuleAddResponseBody
> = z.object({
    message: z.string(),
    data: components.ExternalGateDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1GatesControllerGenMultiRuleAddResponseBody$ {
    /** @deprecated use `ConsoleV1GatesControllerGenMultiRuleAddResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1GatesControllerGenMultiRuleAddResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenMultiRuleAddResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1GatesControllerGenMultiRuleAddResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenMultiRuleAddResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1GatesControllerGenMultiRuleAddResponseBody$Outbound;
}
