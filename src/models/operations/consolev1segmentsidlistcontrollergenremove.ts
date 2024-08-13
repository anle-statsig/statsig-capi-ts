/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1SegmentsIDListControllerGenRemoveRequest = {
    /**
     * id
     */
    id: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    segmentIDListContractDto: components.SegmentIDListContractDto;
};

/**
 * Segment ids deleted successfully.
 */
export type ConsoleV1SegmentsIDListControllerGenRemoveResponseBody = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1SegmentsIDListControllerGenRemoveRequest$inboundSchema: z.ZodType<
    ConsoleV1SegmentsIDListControllerGenRemoveRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "x-respect-review-settings": z.string().optional(),
        SegmentIDListContractDto: components.SegmentIDListContractDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            SegmentIDListContractDto: "segmentIDListContractDto",
        });
    });

/** @internal */
export type ConsoleV1SegmentsIDListControllerGenRemoveRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
    SegmentIDListContractDto: components.SegmentIDListContractDto$Outbound;
};

/** @internal */
export const ConsoleV1SegmentsIDListControllerGenRemoveRequest$outboundSchema: z.ZodType<
    ConsoleV1SegmentsIDListControllerGenRemoveRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1SegmentsIDListControllerGenRemoveRequest
> = z
    .object({
        id: z.string(),
        xRespectReviewSettings: z.string().optional(),
        segmentIDListContractDto: components.SegmentIDListContractDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            segmentIDListContractDto: "SegmentIDListContractDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1SegmentsIDListControllerGenRemoveRequest$ {
    /** @deprecated use `ConsoleV1SegmentsIDListControllerGenRemoveRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1SegmentsIDListControllerGenRemoveRequest$inboundSchema;
    /** @deprecated use `ConsoleV1SegmentsIDListControllerGenRemoveRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1SegmentsIDListControllerGenRemoveRequest$outboundSchema;
    /** @deprecated use `ConsoleV1SegmentsIDListControllerGenRemoveRequest$Outbound` instead. */
    export type Outbound = ConsoleV1SegmentsIDListControllerGenRemoveRequest$Outbound;
}

/** @internal */
export const ConsoleV1SegmentsIDListControllerGenRemoveResponseBody$inboundSchema: z.ZodType<
    ConsoleV1SegmentsIDListControllerGenRemoveResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type ConsoleV1SegmentsIDListControllerGenRemoveResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1SegmentsIDListControllerGenRemoveResponseBody$outboundSchema: z.ZodType<
    ConsoleV1SegmentsIDListControllerGenRemoveResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1SegmentsIDListControllerGenRemoveResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1SegmentsIDListControllerGenRemoveResponseBody$ {
    /** @deprecated use `ConsoleV1SegmentsIDListControllerGenRemoveResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1SegmentsIDListControllerGenRemoveResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1SegmentsIDListControllerGenRemoveResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1SegmentsIDListControllerGenRemoveResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1SegmentsIDListControllerGenRemoveResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1SegmentsIDListControllerGenRemoveResponseBody$Outbound;
}
