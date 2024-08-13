/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1ExperimentsControllerGenMakeDecisionRequest = {
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
 * Make Experiment Decision Success
 */
export type ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenMakeDecisionRequest$inboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenMakeDecisionRequest,
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
export type ConsoleV1ExperimentsControllerGenMakeDecisionRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
    ExperimentStatusUpdateDto: components.ExperimentStatusUpdateDto$Outbound;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenMakeDecisionRequest$outboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenMakeDecisionRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentsControllerGenMakeDecisionRequest
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
export namespace ConsoleV1ExperimentsControllerGenMakeDecisionRequest$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenMakeDecisionRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ExperimentsControllerGenMakeDecisionRequest$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenMakeDecisionRequest$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentsControllerGenMakeDecisionRequest$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenMakeDecisionRequest$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentsControllerGenMakeDecisionRequest$Outbound;
}

/** @internal */
export const ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody$inboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody$outboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentsControllerGenMakeDecisionResponseBody$Outbound;
}
