/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1IngestionControllerGenUpdateIngestionRequest = {
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    ingestionUpdateContractDto: components.IngestionUpdateContractDto;
};

/**
 * Update Ingestion Success
 */
export type ConsoleV1IngestionControllerGenUpdateIngestionResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.IngestionDto;
};

/** @internal */
export const ConsoleV1IngestionControllerGenUpdateIngestionRequest$inboundSchema: z.ZodType<
    ConsoleV1IngestionControllerGenUpdateIngestionRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-respect-review-settings": z.string().optional(),
        IngestionUpdateContractDto: components.IngestionUpdateContractDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            IngestionUpdateContractDto: "ingestionUpdateContractDto",
        });
    });

/** @internal */
export type ConsoleV1IngestionControllerGenUpdateIngestionRequest$Outbound = {
    "x-respect-review-settings"?: string | undefined;
    IngestionUpdateContractDto: components.IngestionUpdateContractDto$Outbound;
};

/** @internal */
export const ConsoleV1IngestionControllerGenUpdateIngestionRequest$outboundSchema: z.ZodType<
    ConsoleV1IngestionControllerGenUpdateIngestionRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1IngestionControllerGenUpdateIngestionRequest
> = z
    .object({
        xRespectReviewSettings: z.string().optional(),
        ingestionUpdateContractDto: components.IngestionUpdateContractDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            ingestionUpdateContractDto: "IngestionUpdateContractDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1IngestionControllerGenUpdateIngestionRequest$ {
    /** @deprecated use `ConsoleV1IngestionControllerGenUpdateIngestionRequest$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1IngestionControllerGenUpdateIngestionRequest$inboundSchema;
    /** @deprecated use `ConsoleV1IngestionControllerGenUpdateIngestionRequest$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1IngestionControllerGenUpdateIngestionRequest$outboundSchema;
    /** @deprecated use `ConsoleV1IngestionControllerGenUpdateIngestionRequest$Outbound` instead. */
    export type Outbound = ConsoleV1IngestionControllerGenUpdateIngestionRequest$Outbound;
}

/** @internal */
export const ConsoleV1IngestionControllerGenUpdateIngestionResponseBody$inboundSchema: z.ZodType<
    ConsoleV1IngestionControllerGenUpdateIngestionResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.IngestionDto$inboundSchema,
});

/** @internal */
export type ConsoleV1IngestionControllerGenUpdateIngestionResponseBody$Outbound = {
    message: string;
    data: components.IngestionDto$Outbound;
};

/** @internal */
export const ConsoleV1IngestionControllerGenUpdateIngestionResponseBody$outboundSchema: z.ZodType<
    ConsoleV1IngestionControllerGenUpdateIngestionResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1IngestionControllerGenUpdateIngestionResponseBody
> = z.object({
    message: z.string(),
    data: components.IngestionDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1IngestionControllerGenUpdateIngestionResponseBody$ {
    /** @deprecated use `ConsoleV1IngestionControllerGenUpdateIngestionResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1IngestionControllerGenUpdateIngestionResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1IngestionControllerGenUpdateIngestionResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1IngestionControllerGenUpdateIngestionResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1IngestionControllerGenUpdateIngestionResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1IngestionControllerGenUpdateIngestionResponseBody$Outbound;
}
