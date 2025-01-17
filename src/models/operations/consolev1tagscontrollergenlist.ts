/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1TagsControllerGenListRequest = {
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
 * List Tags Success
 */
export type ConsoleV1TagsControllerGenListResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: Array<components.TagDto>;
    /**
     * Pagination metadata for checking if there is next page for example.
     */
    pagination: components.PaginationResponseMetadataDto;
};

/** @internal */
export const ConsoleV1TagsControllerGenListRequest$inboundSchema: z.ZodType<
    ConsoleV1TagsControllerGenListRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
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
export type ConsoleV1TagsControllerGenListRequest$Outbound = {
    limit?: any | undefined;
    page?: any | undefined;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1TagsControllerGenListRequest$outboundSchema: z.ZodType<
    ConsoleV1TagsControllerGenListRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1TagsControllerGenListRequest
> = z
    .object({
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
export namespace ConsoleV1TagsControllerGenListRequest$ {
    /** @deprecated use `ConsoleV1TagsControllerGenListRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1TagsControllerGenListRequest$inboundSchema;
    /** @deprecated use `ConsoleV1TagsControllerGenListRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1TagsControllerGenListRequest$outboundSchema;
    /** @deprecated use `ConsoleV1TagsControllerGenListRequest$Outbound` instead. */
    export type Outbound = ConsoleV1TagsControllerGenListRequest$Outbound;
}

/** @internal */
export const ConsoleV1TagsControllerGenListResponseBody$inboundSchema: z.ZodType<
    ConsoleV1TagsControllerGenListResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: z.array(components.TagDto$inboundSchema),
    pagination: components.PaginationResponseMetadataDto$inboundSchema,
});

/** @internal */
export type ConsoleV1TagsControllerGenListResponseBody$Outbound = {
    message: string;
    data: Array<components.TagDto$Outbound>;
    pagination: components.PaginationResponseMetadataDto$Outbound;
};

/** @internal */
export const ConsoleV1TagsControllerGenListResponseBody$outboundSchema: z.ZodType<
    ConsoleV1TagsControllerGenListResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1TagsControllerGenListResponseBody
> = z.object({
    message: z.string(),
    data: z.array(components.TagDto$outboundSchema),
    pagination: components.PaginationResponseMetadataDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1TagsControllerGenListResponseBody$ {
    /** @deprecated use `ConsoleV1TagsControllerGenListResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1TagsControllerGenListResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1TagsControllerGenListResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1TagsControllerGenListResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1TagsControllerGenListResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1TagsControllerGenListResponseBody$Outbound;
}
