/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1UsersControllerGenListRequest = {
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
 * List users response
 */
export type ConsoleV1UsersControllerGenListResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: Array<components.UserContractDto>;
    /**
     * Pagination metadata for checking if there is next page for example.
     */
    pagination: components.PaginationResponseMetadataDto;
};

/** @internal */
export const ConsoleV1UsersControllerGenListRequest$inboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenListRequest,
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
export type ConsoleV1UsersControllerGenListRequest$Outbound = {
    limit?: any | undefined;
    page?: any | undefined;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1UsersControllerGenListRequest$outboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenListRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsersControllerGenListRequest
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
export namespace ConsoleV1UsersControllerGenListRequest$ {
    /** @deprecated use `ConsoleV1UsersControllerGenListRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerGenListRequest$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenListRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerGenListRequest$outboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenListRequest$Outbound` instead. */
    export type Outbound = ConsoleV1UsersControllerGenListRequest$Outbound;
}

/** @internal */
export const ConsoleV1UsersControllerGenListResponseBody$inboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenListResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: z.array(components.UserContractDto$inboundSchema),
    pagination: components.PaginationResponseMetadataDto$inboundSchema,
});

/** @internal */
export type ConsoleV1UsersControllerGenListResponseBody$Outbound = {
    message: string;
    data: Array<components.UserContractDto$Outbound>;
    pagination: components.PaginationResponseMetadataDto$Outbound;
};

/** @internal */
export const ConsoleV1UsersControllerGenListResponseBody$outboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenListResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsersControllerGenListResponseBody
> = z.object({
    message: z.string(),
    data: z.array(components.UserContractDto$outboundSchema),
    pagination: components.PaginationResponseMetadataDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerGenListResponseBody$ {
    /** @deprecated use `ConsoleV1UsersControllerGenListResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerGenListResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenListResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerGenListResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenListResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1UsersControllerGenListResponseBody$Outbound;
}
