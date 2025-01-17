/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1ExperimentsControllerGenAbandonRequest = {
    /**
     * id
     */
    id: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    experimentStatusUpdateDto: components.ExperimentStatusUpdateDto;
};

/**
 * Abandon Experiment Success
 */
export type ConsoleV1ExperimentsControllerGenAbandonResponseBody = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonRequest$inboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenAbandonRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "x-respect-review-settings": z.string().optional(),
        ExperimentStatusUpdateDto: components.ExperimentStatusUpdateDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            ExperimentStatusUpdateDto: "experimentStatusUpdateDto",
        });
    });

/** @internal */
export type ConsoleV1ExperimentsControllerGenAbandonRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
    ExperimentStatusUpdateDto: components.ExperimentStatusUpdateDto$Outbound;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonRequest$outboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenAbandonRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentsControllerGenAbandonRequest
> = z
    .object({
        id: z.string(),
        xRespectReviewSettings: z.string().optional(),
        experimentStatusUpdateDto: components.ExperimentStatusUpdateDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            experimentStatusUpdateDto: "ExperimentStatusUpdateDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenAbandonRequest$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ExperimentsControllerGenAbandonRequest$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1ExperimentsControllerGenAbandonRequest$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonRequest$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentsControllerGenAbandonRequest$Outbound;
}

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonResponseBody$inboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenAbandonResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type ConsoleV1ExperimentsControllerGenAbandonResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonResponseBody$outboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenAbandonResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentsControllerGenAbandonResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenAbandonResponseBody$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ExperimentsControllerGenAbandonResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentsControllerGenAbandonResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentsControllerGenAbandonResponseBody$Outbound;
}
