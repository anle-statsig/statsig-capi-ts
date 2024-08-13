/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1ExperimentOverridesControllerUpdateRequest = {
    /**
     * id
     */
    id: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    experimentOverridesDto: components.ExperimentOverridesDto;
};

/**
 * Update Experiment Overrides Success
 */
export type ConsoleV1ExperimentOverridesControllerUpdateResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.ExperimentOverridesDto;
};

/** @internal */
export const ConsoleV1ExperimentOverridesControllerUpdateRequest$inboundSchema: z.ZodType<
    ConsoleV1ExperimentOverridesControllerUpdateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "x-respect-review-settings": z.string().optional(),
        ExperimentOverridesDto: components.ExperimentOverridesDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            ExperimentOverridesDto: "experimentOverridesDto",
        });
    });

/** @internal */
export type ConsoleV1ExperimentOverridesControllerUpdateRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
    ExperimentOverridesDto: components.ExperimentOverridesDto$Outbound;
};

/** @internal */
export const ConsoleV1ExperimentOverridesControllerUpdateRequest$outboundSchema: z.ZodType<
    ConsoleV1ExperimentOverridesControllerUpdateRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentOverridesControllerUpdateRequest
> = z
    .object({
        id: z.string(),
        xRespectReviewSettings: z.string().optional(),
        experimentOverridesDto: components.ExperimentOverridesDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            experimentOverridesDto: "ExperimentOverridesDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentOverridesControllerUpdateRequest$ {
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerUpdateRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ExperimentOverridesControllerUpdateRequest$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerUpdateRequest$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentOverridesControllerUpdateRequest$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerUpdateRequest$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentOverridesControllerUpdateRequest$Outbound;
}

/** @internal */
export const ConsoleV1ExperimentOverridesControllerUpdateResponseBody$inboundSchema: z.ZodType<
    ConsoleV1ExperimentOverridesControllerUpdateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.ExperimentOverridesDto$inboundSchema,
});

/** @internal */
export type ConsoleV1ExperimentOverridesControllerUpdateResponseBody$Outbound = {
    message: string;
    data: components.ExperimentOverridesDto$Outbound;
};

/** @internal */
export const ConsoleV1ExperimentOverridesControllerUpdateResponseBody$outboundSchema: z.ZodType<
    ConsoleV1ExperimentOverridesControllerUpdateResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentOverridesControllerUpdateResponseBody
> = z.object({
    message: z.string(),
    data: components.ExperimentOverridesDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentOverridesControllerUpdateResponseBody$ {
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerUpdateResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1ExperimentOverridesControllerUpdateResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerUpdateResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentOverridesControllerUpdateResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerUpdateResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentOverridesControllerUpdateResponseBody$Outbound;
}
