/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type MetricValuesDto = {
    /**
     * Metric value for the given unit_type
     */
    value: number;
    /**
     * Unit of the metric: stableID, userID, and other custom ids
     */
    unitType: string;
    /**
     * Row count for imported metric, optional
     */
    rowCount?: number | undefined;
    /**
     * Numerator of a ratio metric, optional
     */
    numerator?: number | undefined;
    /**
     * Denominator of a ratio metric, optional
     */
    denominator?: number | undefined;
};

/** @internal */
export const MetricValuesDto$inboundSchema: z.ZodType<MetricValuesDto, z.ZodTypeDef, unknown> = z
    .object({
        value: z.number(),
        unit_type: z.string(),
        row_count: z.number().optional(),
        numerator: z.number().optional(),
        denominator: z.number().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            unit_type: "unitType",
            row_count: "rowCount",
        });
    });

/** @internal */
export type MetricValuesDto$Outbound = {
    value: number;
    unit_type: string;
    row_count?: number | undefined;
    numerator?: number | undefined;
    denominator?: number | undefined;
};

/** @internal */
export const MetricValuesDto$outboundSchema: z.ZodType<
    MetricValuesDto$Outbound,
    z.ZodTypeDef,
    MetricValuesDto
> = z
    .object({
        value: z.number(),
        unitType: z.string(),
        rowCount: z.number().optional(),
        numerator: z.number().optional(),
        denominator: z.number().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            unitType: "unit_type",
            rowCount: "row_count",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricValuesDto$ {
    /** @deprecated use `MetricValuesDto$inboundSchema` instead. */
    export const inboundSchema = MetricValuesDto$inboundSchema;
    /** @deprecated use `MetricValuesDto$outboundSchema` instead. */
    export const outboundSchema = MetricValuesDto$outboundSchema;
    /** @deprecated use `MetricValuesDto$Outbound` instead. */
    export type Outbound = MetricValuesDto$Outbound;
}