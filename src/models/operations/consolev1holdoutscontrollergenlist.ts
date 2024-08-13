/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1HoldoutsControllerGenListRequest = {
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
 * List holdouts response
 */
export type ConsoleV1HoldoutsControllerGenListResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: Array<components.HoldoutDto>;
    /**
     * Pagination metadata for checking if there is next page for example.
     */
    pagination: components.PaginationResponseMetadataDto;
};

/** @internal */
export const ConsoleV1HoldoutsControllerGenListRequest$inboundSchema: z.ZodType<
    ConsoleV1HoldoutsControllerGenListRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
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
export type ConsoleV1HoldoutsControllerGenListRequest$Outbound = {
    creatorName?: string | null | undefined;
    creatorID?: string | null | undefined;
    tags?: any | undefined;
    limit?: any | undefined;
    page?: any | undefined;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1HoldoutsControllerGenListRequest$outboundSchema: z.ZodType<
    ConsoleV1HoldoutsControllerGenListRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1HoldoutsControllerGenListRequest
> = z
    .object({
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
export namespace ConsoleV1HoldoutsControllerGenListRequest$ {
    /** @deprecated use `ConsoleV1HoldoutsControllerGenListRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1HoldoutsControllerGenListRequest$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenListRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1HoldoutsControllerGenListRequest$outboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenListRequest$Outbound` instead. */
    export type Outbound = ConsoleV1HoldoutsControllerGenListRequest$Outbound;
}

/** @internal */
export const ConsoleV1HoldoutsControllerGenListResponseBody$inboundSchema: z.ZodType<
    ConsoleV1HoldoutsControllerGenListResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: z.array(components.HoldoutDto$inboundSchema),
    pagination: components.PaginationResponseMetadataDto$inboundSchema,
});

/** @internal */
export type ConsoleV1HoldoutsControllerGenListResponseBody$Outbound = {
    message: string;
    data: Array<components.HoldoutDto$Outbound>;
    pagination: components.PaginationResponseMetadataDto$Outbound;
};

/** @internal */
export const ConsoleV1HoldoutsControllerGenListResponseBody$outboundSchema: z.ZodType<
    ConsoleV1HoldoutsControllerGenListResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1HoldoutsControllerGenListResponseBody
> = z.object({
    message: z.string(),
    data: z.array(components.HoldoutDto$outboundSchema),
    pagination: components.PaginationResponseMetadataDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1HoldoutsControllerGenListResponseBody$ {
    /** @deprecated use `ConsoleV1HoldoutsControllerGenListResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1HoldoutsControllerGenListResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenListResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1HoldoutsControllerGenListResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenListResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1HoldoutsControllerGenListResponseBody$Outbound;
}
