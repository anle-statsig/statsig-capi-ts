/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1ExperimentsControllerGenCreateRequest = {
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    experimentCreateDto: components.ExperimentCreateDto;
};

/**
 * Create Experiment Success
 */
export type ConsoleV1ExperimentsControllerGenCreateResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.ExternalExperimentDto;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenCreateRequest$inboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenCreateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-respect-review-settings": z.string().optional(),
        ExperimentCreateDto: components.ExperimentCreateDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            ExperimentCreateDto: "experimentCreateDto",
        });
    });

/** @internal */
export type ConsoleV1ExperimentsControllerGenCreateRequest$Outbound = {
    "x-respect-review-settings"?: string | undefined;
    ExperimentCreateDto: components.ExperimentCreateDto$Outbound;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenCreateRequest$outboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenCreateRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentsControllerGenCreateRequest
> = z
    .object({
        xRespectReviewSettings: z.string().optional(),
        experimentCreateDto: components.ExperimentCreateDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            experimentCreateDto: "ExperimentCreateDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenCreateRequest$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenCreateRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ExperimentsControllerGenCreateRequest$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenCreateRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1ExperimentsControllerGenCreateRequest$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenCreateRequest$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentsControllerGenCreateRequest$Outbound;
}

/** @internal */
export const ConsoleV1ExperimentsControllerGenCreateResponseBody$inboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenCreateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.ExternalExperimentDto$inboundSchema,
});

/** @internal */
export type ConsoleV1ExperimentsControllerGenCreateResponseBody$Outbound = {
    message: string;
    data: components.ExternalExperimentDto$Outbound;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenCreateResponseBody$outboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenCreateResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentsControllerGenCreateResponseBody
> = z.object({
    message: z.string(),
    data: components.ExternalExperimentDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenCreateResponseBody$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenCreateResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ExperimentsControllerGenCreateResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenCreateResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentsControllerGenCreateResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenCreateResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentsControllerGenCreateResponseBody$Outbound;
}
