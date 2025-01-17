/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1MetricsControllerUpdateMetricSourceRequest = {
    /**
     * name
     */
    name: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    metricSourceUpdateContractDto: components.MetricSourceUpdateContractDto;
};

/**
 * Update metric source response
 */
export type ConsoleV1MetricsControllerUpdateMetricSourceResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.MetricSourceContractDto;
};

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricSourceRequest$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricSourceRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.string(),
        "x-respect-review-settings": z.string().optional(),
        MetricSourceUpdateContractDto: components.MetricSourceUpdateContractDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            MetricSourceUpdateContractDto: "metricSourceUpdateContractDto",
        });
    });

/** @internal */
export type ConsoleV1MetricsControllerUpdateMetricSourceRequest$Outbound = {
    name: string;
    "x-respect-review-settings"?: string | undefined;
    MetricSourceUpdateContractDto: components.MetricSourceUpdateContractDto$Outbound;
};

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricSourceRequest$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricSourceRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerUpdateMetricSourceRequest
> = z
    .object({
        name: z.string(),
        xRespectReviewSettings: z.string().optional(),
        metricSourceUpdateContractDto: components.MetricSourceUpdateContractDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            metricSourceUpdateContractDto: "MetricSourceUpdateContractDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerUpdateMetricSourceRequest$ {
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1MetricsControllerUpdateMetricSourceRequest$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceRequest$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1MetricsControllerUpdateMetricSourceRequest$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceRequest$Outbound` instead. */
    export type Outbound = ConsoleV1MetricsControllerUpdateMetricSourceRequest$Outbound;
}

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricSourceResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.MetricSourceContractDto$inboundSchema,
});

/** @internal */
export type ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$Outbound = {
    message: string;
    data: components.MetricSourceContractDto$Outbound;
};

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerUpdateMetricSourceResponseBody
> = z.object({
    message: z.string(),
    data: components.MetricSourceContractDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$ {
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$Outbound;
}
