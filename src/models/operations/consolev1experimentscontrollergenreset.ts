/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type ConsoleV1ExperimentsControllerGenResetRequest = {
    /**
     * id
     */
    id: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
};

/**
 * Reset Experiment Success
 */
export type ConsoleV1ExperimentsControllerGenResetResponseBody = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenResetRequest$inboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenResetRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "x-respect-review-settings": z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
        });
    });

/** @internal */
export type ConsoleV1ExperimentsControllerGenResetRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenResetRequest$outboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenResetRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentsControllerGenResetRequest
> = z
    .object({
        id: z.string(),
        xRespectReviewSettings: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenResetRequest$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenResetRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ExperimentsControllerGenResetRequest$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenResetRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1ExperimentsControllerGenResetRequest$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenResetRequest$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentsControllerGenResetRequest$Outbound;
}

/** @internal */
export const ConsoleV1ExperimentsControllerGenResetResponseBody$inboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenResetResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type ConsoleV1ExperimentsControllerGenResetResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenResetResponseBody$outboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenResetResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentsControllerGenResetResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenResetResponseBody$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenResetResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ExperimentsControllerGenResetResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenResetResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1ExperimentsControllerGenResetResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenResetResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentsControllerGenResetResponseBody$Outbound;
}
