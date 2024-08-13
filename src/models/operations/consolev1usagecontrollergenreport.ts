/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type ConsoleV1UsageControllerGenReportRequest = {
    /**
     * date to query (YYYY-MM-DD)
     */
    start?: number | undefined;
    /**
     * date to query (YYYY-MM-DD)
     */
    end: number;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
};

/**
 * Report URL generated successfully
 */
export type ConsoleV1UsageControllerGenReportResponseBody = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1UsageControllerGenReportRequest$inboundSchema: z.ZodType<
    ConsoleV1UsageControllerGenReportRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        start: z.number().int().optional(),
        end: z.number().int(),
        "x-respect-review-settings": z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
        });
    });

/** @internal */
export type ConsoleV1UsageControllerGenReportRequest$Outbound = {
    start?: number | undefined;
    end: number;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1UsageControllerGenReportRequest$outboundSchema: z.ZodType<
    ConsoleV1UsageControllerGenReportRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsageControllerGenReportRequest
> = z
    .object({
        start: z.number().int().optional(),
        end: z.number().int(),
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
export namespace ConsoleV1UsageControllerGenReportRequest$ {
    /** @deprecated use `ConsoleV1UsageControllerGenReportRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsageControllerGenReportRequest$inboundSchema;
    /** @deprecated use `ConsoleV1UsageControllerGenReportRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsageControllerGenReportRequest$outboundSchema;
    /** @deprecated use `ConsoleV1UsageControllerGenReportRequest$Outbound` instead. */
    export type Outbound = ConsoleV1UsageControllerGenReportRequest$Outbound;
}

/** @internal */
export const ConsoleV1UsageControllerGenReportResponseBody$inboundSchema: z.ZodType<
    ConsoleV1UsageControllerGenReportResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type ConsoleV1UsageControllerGenReportResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1UsageControllerGenReportResponseBody$outboundSchema: z.ZodType<
    ConsoleV1UsageControllerGenReportResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsageControllerGenReportResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsageControllerGenReportResponseBody$ {
    /** @deprecated use `ConsoleV1UsageControllerGenReportResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsageControllerGenReportResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1UsageControllerGenReportResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsageControllerGenReportResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1UsageControllerGenReportResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1UsageControllerGenReportResponseBody$Outbound;
}