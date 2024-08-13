/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1MetricsControllerGenCreateMetricSourceRequest = {
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    metricSourceCreationContractDto: components.MetricSourceCreationContractDto;
};

/**
 * Create metric source response
 */
export type ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.MetricSourceContractDto;
};

/** @internal */
export const ConsoleV1MetricsControllerGenCreateMetricSourceRequest$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerGenCreateMetricSourceRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-respect-review-settings": z.string().optional(),
        MetricSourceCreationContractDto: components.MetricSourceCreationContractDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            MetricSourceCreationContractDto: "metricSourceCreationContractDto",
        });
    });

/** @internal */
export type ConsoleV1MetricsControllerGenCreateMetricSourceRequest$Outbound = {
    "x-respect-review-settings"?: string | undefined;
    MetricSourceCreationContractDto: components.MetricSourceCreationContractDto$Outbound;
};

/** @internal */
export const ConsoleV1MetricsControllerGenCreateMetricSourceRequest$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerGenCreateMetricSourceRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerGenCreateMetricSourceRequest
> = z
    .object({
        xRespectReviewSettings: z.string().optional(),
        metricSourceCreationContractDto: components.MetricSourceCreationContractDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            metricSourceCreationContractDto: "MetricSourceCreationContractDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerGenCreateMetricSourceRequest$ {
    /** @deprecated use `ConsoleV1MetricsControllerGenCreateMetricSourceRequest$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1MetricsControllerGenCreateMetricSourceRequest$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerGenCreateMetricSourceRequest$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1MetricsControllerGenCreateMetricSourceRequest$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerGenCreateMetricSourceRequest$Outbound` instead. */
    export type Outbound = ConsoleV1MetricsControllerGenCreateMetricSourceRequest$Outbound;
}

/** @internal */
export const ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.MetricSourceContractDto$inboundSchema,
});

/** @internal */
export type ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody$Outbound = {
    message: string;
    data: components.MetricSourceContractDto$Outbound;
};

/** @internal */
export const ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody
> = z.object({
    message: z.string(),
    data: components.MetricSourceContractDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody$ {
    /** @deprecated use `ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1MetricsControllerGenCreateMetricSourceResponseBody$Outbound;
}