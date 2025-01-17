/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1IngestionControllerGenIngestionRunsRequest = {
    page?: any | undefined;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
};

/**
 * List Ingestion Runs Success
 */
export type ConsoleV1IngestionControllerGenIngestionRunsResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: Array<components.IngestionRunDataContractDto>;
    /**
     * Pagination metadata for checking if there is next page for example.
     */
    pagination: components.PaginationResponseMetadataDto;
};

/** @internal */
export const ConsoleV1IngestionControllerGenIngestionRunsRequest$inboundSchema: z.ZodType<
    ConsoleV1IngestionControllerGenIngestionRunsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        page: z.any().optional(),
        "x-respect-review-settings": z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
        });
    });

/** @internal */
export type ConsoleV1IngestionControllerGenIngestionRunsRequest$Outbound = {
    page?: any | undefined;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1IngestionControllerGenIngestionRunsRequest$outboundSchema: z.ZodType<
    ConsoleV1IngestionControllerGenIngestionRunsRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1IngestionControllerGenIngestionRunsRequest
> = z
    .object({
        page: z.any().optional(),
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
export namespace ConsoleV1IngestionControllerGenIngestionRunsRequest$ {
    /** @deprecated use `ConsoleV1IngestionControllerGenIngestionRunsRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1IngestionControllerGenIngestionRunsRequest$inboundSchema;
    /** @deprecated use `ConsoleV1IngestionControllerGenIngestionRunsRequest$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1IngestionControllerGenIngestionRunsRequest$outboundSchema;
    /** @deprecated use `ConsoleV1IngestionControllerGenIngestionRunsRequest$Outbound` instead. */
    export type Outbound = ConsoleV1IngestionControllerGenIngestionRunsRequest$Outbound;
}

/** @internal */
export const ConsoleV1IngestionControllerGenIngestionRunsResponseBody$inboundSchema: z.ZodType<
    ConsoleV1IngestionControllerGenIngestionRunsResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: z.array(components.IngestionRunDataContractDto$inboundSchema),
    pagination: components.PaginationResponseMetadataDto$inboundSchema,
});

/** @internal */
export type ConsoleV1IngestionControllerGenIngestionRunsResponseBody$Outbound = {
    message: string;
    data: Array<components.IngestionRunDataContractDto$Outbound>;
    pagination: components.PaginationResponseMetadataDto$Outbound;
};

/** @internal */
export const ConsoleV1IngestionControllerGenIngestionRunsResponseBody$outboundSchema: z.ZodType<
    ConsoleV1IngestionControllerGenIngestionRunsResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1IngestionControllerGenIngestionRunsResponseBody
> = z.object({
    message: z.string(),
    data: z.array(components.IngestionRunDataContractDto$outboundSchema),
    pagination: components.PaginationResponseMetadataDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1IngestionControllerGenIngestionRunsResponseBody$ {
    /** @deprecated use `ConsoleV1IngestionControllerGenIngestionRunsResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1IngestionControllerGenIngestionRunsResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1IngestionControllerGenIngestionRunsResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1IngestionControllerGenIngestionRunsResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1IngestionControllerGenIngestionRunsResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1IngestionControllerGenIngestionRunsResponseBody$Outbound;
}
