/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1MetricsControllerGenListMetricSourcesRequest = {
    /**
     * Results per page
     */
    limit?: any | undefined;
    /**
     * Page number
     */
    page?: any | undefined;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
};

/**
 * List metric source response
 */
export type ConsoleV1MetricsControllerGenListMetricSourcesResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: Array<components.MetricSourceContractDto>;
    /**
     * Pagination metadata for checking if there is next page for example.
     */
    pagination: components.PaginationResponseMetadataDto;
};

/** @internal */
export const ConsoleV1MetricsControllerGenListMetricSourcesRequest$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerGenListMetricSourcesRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        limit: z.any().optional(),
        page: z.any().optional(),
        "x-respect-review-settings": z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
        });
    });

/** @internal */
export type ConsoleV1MetricsControllerGenListMetricSourcesRequest$Outbound = {
    limit?: any | undefined;
    page?: any | undefined;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1MetricsControllerGenListMetricSourcesRequest$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerGenListMetricSourcesRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerGenListMetricSourcesRequest
> = z
    .object({
        limit: z.any().optional(),
        page: z.any().optional(),
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
export namespace ConsoleV1MetricsControllerGenListMetricSourcesRequest$ {
    /** @deprecated use `ConsoleV1MetricsControllerGenListMetricSourcesRequest$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1MetricsControllerGenListMetricSourcesRequest$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerGenListMetricSourcesRequest$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1MetricsControllerGenListMetricSourcesRequest$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerGenListMetricSourcesRequest$Outbound` instead. */
    export type Outbound = ConsoleV1MetricsControllerGenListMetricSourcesRequest$Outbound;
}

/** @internal */
export const ConsoleV1MetricsControllerGenListMetricSourcesResponseBody$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerGenListMetricSourcesResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: z.array(components.MetricSourceContractDto$inboundSchema),
    pagination: components.PaginationResponseMetadataDto$inboundSchema,
});

/** @internal */
export type ConsoleV1MetricsControllerGenListMetricSourcesResponseBody$Outbound = {
    message: string;
    data: Array<components.MetricSourceContractDto$Outbound>;
    pagination: components.PaginationResponseMetadataDto$Outbound;
};

/** @internal */
export const ConsoleV1MetricsControllerGenListMetricSourcesResponseBody$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerGenListMetricSourcesResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerGenListMetricSourcesResponseBody
> = z.object({
    message: z.string(),
    data: z.array(components.MetricSourceContractDto$outboundSchema),
    pagination: components.PaginationResponseMetadataDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerGenListMetricSourcesResponseBody$ {
    /** @deprecated use `ConsoleV1MetricsControllerGenListMetricSourcesResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1MetricsControllerGenListMetricSourcesResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerGenListMetricSourcesResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1MetricsControllerGenListMetricSourcesResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerGenListMetricSourcesResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1MetricsControllerGenListMetricSourcesResponseBody$Outbound;
}