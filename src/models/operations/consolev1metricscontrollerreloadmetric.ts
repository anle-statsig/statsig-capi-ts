/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type ConsoleV1MetricsControllerReloadMetricRequest = {
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
 * Reload metric data response
 */
export type ConsoleV1MetricsControllerReloadMetricResponseBody = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1MetricsControllerReloadMetricRequest$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerReloadMetricRequest,
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
export type ConsoleV1MetricsControllerReloadMetricRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1MetricsControllerReloadMetricRequest$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerReloadMetricRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerReloadMetricRequest
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
export namespace ConsoleV1MetricsControllerReloadMetricRequest$ {
    /** @deprecated use `ConsoleV1MetricsControllerReloadMetricRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1MetricsControllerReloadMetricRequest$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerReloadMetricRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1MetricsControllerReloadMetricRequest$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerReloadMetricRequest$Outbound` instead. */
    export type Outbound = ConsoleV1MetricsControllerReloadMetricRequest$Outbound;
}

/** @internal */
export const ConsoleV1MetricsControllerReloadMetricResponseBody$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerReloadMetricResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type ConsoleV1MetricsControllerReloadMetricResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1MetricsControllerReloadMetricResponseBody$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerReloadMetricResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerReloadMetricResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerReloadMetricResponseBody$ {
    /** @deprecated use `ConsoleV1MetricsControllerReloadMetricResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1MetricsControllerReloadMetricResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerReloadMetricResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1MetricsControllerReloadMetricResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerReloadMetricResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1MetricsControllerReloadMetricResponseBody$Outbound;
}
