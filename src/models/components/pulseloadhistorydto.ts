/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type PulseLoadHistoryDto = {
    creatorName?: string | undefined;
    createdTime: number;
    finishedTime?: number | undefined;
    finishedState?: string | undefined;
    startDs: string;
    endDs: string;
    reloadType: string;
    turboMode: boolean;
};

/** @internal */
export const PulseLoadHistoryDto$inboundSchema: z.ZodType<
    PulseLoadHistoryDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    creatorName: z.string().optional(),
    createdTime: z.number(),
    finishedTime: z.number().optional(),
    finishedState: z.string().optional(),
    startDs: z.string(),
    endDs: z.string(),
    reloadType: z.string(),
    turboMode: z.boolean(),
});

/** @internal */
export type PulseLoadHistoryDto$Outbound = {
    creatorName?: string | undefined;
    createdTime: number;
    finishedTime?: number | undefined;
    finishedState?: string | undefined;
    startDs: string;
    endDs: string;
    reloadType: string;
    turboMode: boolean;
};

/** @internal */
export const PulseLoadHistoryDto$outboundSchema: z.ZodType<
    PulseLoadHistoryDto$Outbound,
    z.ZodTypeDef,
    PulseLoadHistoryDto
> = z.object({
    creatorName: z.string().optional(),
    createdTime: z.number(),
    finishedTime: z.number().optional(),
    finishedState: z.string().optional(),
    startDs: z.string(),
    endDs: z.string(),
    reloadType: z.string(),
    turboMode: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PulseLoadHistoryDto$ {
    /** @deprecated use `PulseLoadHistoryDto$inboundSchema` instead. */
    export const inboundSchema = PulseLoadHistoryDto$inboundSchema;
    /** @deprecated use `PulseLoadHistoryDto$outboundSchema` instead. */
    export const outboundSchema = PulseLoadHistoryDto$outboundSchema;
    /** @deprecated use `PulseLoadHistoryDto$Outbound` instead. */
    export type Outbound = PulseLoadHistoryDto$Outbound;
}