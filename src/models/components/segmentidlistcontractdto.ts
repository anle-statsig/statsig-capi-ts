/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type SegmentIDListContractDto = {
    ids: Array<string>;
};

/** @internal */
export const SegmentIDListContractDto$inboundSchema: z.ZodType<
    SegmentIDListContractDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    ids: z.array(z.string()),
});

/** @internal */
export type SegmentIDListContractDto$Outbound = {
    ids: Array<string>;
};

/** @internal */
export const SegmentIDListContractDto$outboundSchema: z.ZodType<
    SegmentIDListContractDto$Outbound,
    z.ZodTypeDef,
    SegmentIDListContractDto
> = z.object({
    ids: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SegmentIDListContractDto$ {
    /** @deprecated use `SegmentIDListContractDto$inboundSchema` instead. */
    export const inboundSchema = SegmentIDListContractDto$inboundSchema;
    /** @deprecated use `SegmentIDListContractDto$outboundSchema` instead. */
    export const outboundSchema = SegmentIDListContractDto$outboundSchema;
    /** @deprecated use `SegmentIDListContractDto$Outbound` instead. */
    export type Outbound = SegmentIDListContractDto$Outbound;
}