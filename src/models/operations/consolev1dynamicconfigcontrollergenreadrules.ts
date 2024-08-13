/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1DynamicConfigControllerGenReadRulesRequest = {
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
 * Get Dynamic Config Rules Response
 */
export type ConsoleV1DynamicConfigControllerGenReadRulesResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.DynamicConfigDto;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenReadRulesRequest$inboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenReadRulesRequest,
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
export type ConsoleV1DynamicConfigControllerGenReadRulesRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenReadRulesRequest$outboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenReadRulesRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1DynamicConfigControllerGenReadRulesRequest
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
export namespace ConsoleV1DynamicConfigControllerGenReadRulesRequest$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenReadRulesRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1DynamicConfigControllerGenReadRulesRequest$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenReadRulesRequest$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenReadRulesRequest$outboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenReadRulesRequest$Outbound` instead. */
    export type Outbound = ConsoleV1DynamicConfigControllerGenReadRulesRequest$Outbound;
}

/** @internal */
export const ConsoleV1DynamicConfigControllerGenReadRulesResponseBody$inboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenReadRulesResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.DynamicConfigDto$inboundSchema,
});

/** @internal */
export type ConsoleV1DynamicConfigControllerGenReadRulesResponseBody$Outbound = {
    message: string;
    data: components.DynamicConfigDto$Outbound;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenReadRulesResponseBody$outboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenReadRulesResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1DynamicConfigControllerGenReadRulesResponseBody
> = z.object({
    message: z.string(),
    data: components.DynamicConfigDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenReadRulesResponseBody$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenReadRulesResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1DynamicConfigControllerGenReadRulesResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenReadRulesResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenReadRulesResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenReadRulesResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1DynamicConfigControllerGenReadRulesResponseBody$Outbound;
}