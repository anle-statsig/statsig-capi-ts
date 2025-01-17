/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type MetricValueDto = {
    value: number;
    unitType: string;
    numerator?: number | undefined;
    denominator?: number | undefined;
    inputRows?: number | undefined;
    metricName: string;
    metricType: string;
};

/** @internal */
export const MetricValueDto$inboundSchema: z.ZodType<MetricValueDto, z.ZodTypeDef, unknown> =
    z.object({
        value: z.number(),
        unitType: z.string(),
        numerator: z.number().optional(),
        denominator: z.number().optional(),
        inputRows: z.number().optional(),
        metricName: z.string(),
        metricType: z.string(),
    });

/** @internal */
export type MetricValueDto$Outbound = {
    value: number;
    unitType: string;
    numerator?: number | undefined;
    denominator?: number | undefined;
    inputRows?: number | undefined;
    metricName: string;
    metricType: string;
};

/** @internal */
export const MetricValueDto$outboundSchema: z.ZodType<
    MetricValueDto$Outbound,
    z.ZodTypeDef,
    MetricValueDto
> = z.object({
    value: z.number(),
    unitType: z.string(),
    numerator: z.number().optional(),
    denominator: z.number().optional(),
    inputRows: z.number().optional(),
    metricName: z.string(),
    metricType: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricValueDto$ {
    /** @deprecated use `MetricValueDto$inboundSchema` instead. */
    export const inboundSchema = MetricValueDto$inboundSchema;
    /** @deprecated use `MetricValueDto$outboundSchema` instead. */
    export const outboundSchema = MetricValueDto$outboundSchema;
    /** @deprecated use `MetricValueDto$Outbound` instead. */
    export type Outbound = MetricValueDto$Outbound;
}
