/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1MetricsControllerUpdateMetricRequest = {
    /**
     * id
     */
    id: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    metricsUpdateContractDto: components.MetricsUpdateContractDto;
};

/**
 * Update metric response
 */
export type ConsoleV1MetricsControllerUpdateMetricResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.ExternalMetricDefinitionContractDto;
};

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricRequest$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "x-respect-review-settings": z.string().optional(),
        MetricsUpdateContractDto: components.MetricsUpdateContractDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            MetricsUpdateContractDto: "metricsUpdateContractDto",
        });
    });

/** @internal */
export type ConsoleV1MetricsControllerUpdateMetricRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
    MetricsUpdateContractDto: components.MetricsUpdateContractDto$Outbound;
};

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricRequest$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerUpdateMetricRequest
> = z
    .object({
        id: z.string(),
        xRespectReviewSettings: z.string().optional(),
        metricsUpdateContractDto: components.MetricsUpdateContractDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            metricsUpdateContractDto: "MetricsUpdateContractDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerUpdateMetricRequest$ {
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1MetricsControllerUpdateMetricRequest$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1MetricsControllerUpdateMetricRequest$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricRequest$Outbound` instead. */
    export type Outbound = ConsoleV1MetricsControllerUpdateMetricRequest$Outbound;
}

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricResponseBody$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.ExternalMetricDefinitionContractDto$inboundSchema,
});

/** @internal */
export type ConsoleV1MetricsControllerUpdateMetricResponseBody$Outbound = {
    message: string;
    data: components.ExternalMetricDefinitionContractDto$Outbound;
};

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricResponseBody$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerUpdateMetricResponseBody
> = z.object({
    message: z.string(),
    data: components.ExternalMetricDefinitionContractDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerUpdateMetricResponseBody$ {
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1MetricsControllerUpdateMetricResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1MetricsControllerUpdateMetricResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1MetricsControllerUpdateMetricResponseBody$Outbound;
}
