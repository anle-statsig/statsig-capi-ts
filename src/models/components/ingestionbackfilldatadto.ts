/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type IngestionBackfillDataDto = {
    runID: string;
};

/** @internal */
export const IngestionBackfillDataDto$inboundSchema: z.ZodType<
    IngestionBackfillDataDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    runID: z.string(),
});

/** @internal */
export type IngestionBackfillDataDto$Outbound = {
    runID: string;
};

/** @internal */
export const IngestionBackfillDataDto$outboundSchema: z.ZodType<
    IngestionBackfillDataDto$Outbound,
    z.ZodTypeDef,
    IngestionBackfillDataDto
> = z.object({
    runID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngestionBackfillDataDto$ {
    /** @deprecated use `IngestionBackfillDataDto$inboundSchema` instead. */
    export const inboundSchema = IngestionBackfillDataDto$inboundSchema;
    /** @deprecated use `IngestionBackfillDataDto$outboundSchema` instead. */
    export const outboundSchema = IngestionBackfillDataDto$outboundSchema;
    /** @deprecated use `IngestionBackfillDataDto$Outbound` instead. */
    export type Outbound = IngestionBackfillDataDto$Outbound;
}