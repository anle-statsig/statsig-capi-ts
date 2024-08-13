/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1ExperimentsControllerGenListRequest = {
    /**
     * Which layer to place the experiment into.
     */
    layerID?: string | undefined;
    /**
     * The idType the experiment will be performed on
     */
    idType?: string | undefined;
    /**
     * The current status of the experiment
     */
    status?: any | undefined;
    /**
     * Name of the creator.
     */
    creatorName?: string | null | undefined;
    /**
     * ID of the user who created the entity.
     */
    creatorID?: string | null | undefined;
    /**
     * Filter by tags
     */
    tags?: any | undefined;
    /**
     * Results per page
     */
    limit?: any | undefined;
    /**
     * Page number
     */
    page?: any | undefined;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
};

/**
 * List Experiments Success
 */
export type ConsoleV1ExperimentsControllerGenListResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: Array<components.ExternalExperimentDto>;
    /**
     * Pagination metadata for checking if there is next page for example.
     */
    pagination: components.PaginationResponseMetadataDto;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenListRequest$inboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenListRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        layerID: z.string().optional(),
        idType: z.string().optional(),
        status: z.any().optional(),
        creatorName: z.nullable(z.string()).optional(),
        creatorID: z.nullable(z.string()).optional(),
        tags: z.any().optional(),
        limit: z.any().optional(),
        page: z.any().optional(),
        "x-respect-review-settings": z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
        });
    });

/** @internal */
export type ConsoleV1ExperimentsControllerGenListRequest$Outbound = {
    layerID?: string | undefined;
    idType?: string | undefined;
    status?: any | undefined;
    creatorName?: string | null | undefined;
    creatorID?: string | null | undefined;
    tags?: any | undefined;
    limit?: any | undefined;
    page?: any | undefined;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenListRequest$outboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenListRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentsControllerGenListRequest
> = z
    .object({
        layerID: z.string().optional(),
        idType: z.string().optional(),
        status: z.any().optional(),
        creatorName: z.nullable(z.string()).optional(),
        creatorID: z.nullable(z.string()).optional(),
        tags: z.any().optional(),
        limit: z.any().optional(),
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
export namespace ConsoleV1ExperimentsControllerGenListRequest$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenListRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ExperimentsControllerGenListRequest$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenListRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1ExperimentsControllerGenListRequest$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenListRequest$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentsControllerGenListRequest$Outbound;
}

/** @internal */
export const ConsoleV1ExperimentsControllerGenListResponseBody$inboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenListResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: z.array(components.ExternalExperimentDto$inboundSchema),
    pagination: components.PaginationResponseMetadataDto$inboundSchema,
});

/** @internal */
export type ConsoleV1ExperimentsControllerGenListResponseBody$Outbound = {
    message: string;
    data: Array<components.ExternalExperimentDto$Outbound>;
    pagination: components.PaginationResponseMetadataDto$Outbound;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenListResponseBody$outboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenListResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentsControllerGenListResponseBody
> = z.object({
    message: z.string(),
    data: z.array(components.ExternalExperimentDto$outboundSchema),
    pagination: components.PaginationResponseMetadataDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenListResponseBody$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenListResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ExperimentsControllerGenListResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenListResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1ExperimentsControllerGenListResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenListResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentsControllerGenListResponseBody$Outbound;
}