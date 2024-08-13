/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1DynamicConfigControllerGenRuleUpdateRequest = {
    /**
     * Dynamic Config ID
     */
    id: string;
    /**
     * Rule ID
     */
    ruleId: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    ruleUpdateDto: components.RuleUpdateDto;
};

/**
 * Update Dynamic Config Rule Response
 */
export type ConsoleV1DynamicConfigControllerGenRuleUpdateResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.DynamicConfigDto;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRuleUpdateRequest$inboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenRuleUpdateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        ruleId: z.string(),
        "x-respect-review-settings": z.string().optional(),
        RuleUpdateDto: components.RuleUpdateDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            RuleUpdateDto: "ruleUpdateDto",
        });
    });

/** @internal */
export type ConsoleV1DynamicConfigControllerGenRuleUpdateRequest$Outbound = {
    id: string;
    ruleId: string;
    "x-respect-review-settings"?: string | undefined;
    RuleUpdateDto: components.RuleUpdateDto$Outbound;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRuleUpdateRequest$outboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenRuleUpdateRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1DynamicConfigControllerGenRuleUpdateRequest
> = z
    .object({
        id: z.string(),
        ruleId: z.string(),
        xRespectReviewSettings: z.string().optional(),
        ruleUpdateDto: components.RuleUpdateDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            ruleUpdateDto: "RuleUpdateDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenRuleUpdateRequest$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRuleUpdateRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1DynamicConfigControllerGenRuleUpdateRequest$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRuleUpdateRequest$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenRuleUpdateRequest$outboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRuleUpdateRequest$Outbound` instead. */
    export type Outbound = ConsoleV1DynamicConfigControllerGenRuleUpdateRequest$Outbound;
}

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRuleUpdateResponseBody$inboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenRuleUpdateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.DynamicConfigDto$inboundSchema,
});

/** @internal */
export type ConsoleV1DynamicConfigControllerGenRuleUpdateResponseBody$Outbound = {
    message: string;
    data: components.DynamicConfigDto$Outbound;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRuleUpdateResponseBody$outboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenRuleUpdateResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1DynamicConfigControllerGenRuleUpdateResponseBody
> = z.object({
    message: z.string(),
    data: components.DynamicConfigDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenRuleUpdateResponseBody$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRuleUpdateResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1DynamicConfigControllerGenRuleUpdateResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRuleUpdateResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenRuleUpdateResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRuleUpdateResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1DynamicConfigControllerGenRuleUpdateResponseBody$Outbound;
}