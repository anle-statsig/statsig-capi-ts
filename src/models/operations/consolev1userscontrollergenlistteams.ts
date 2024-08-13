/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1UsersControllerGenListTeamsRequest = {
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
 * Get teams response
 */
export type ConsoleV1UsersControllerGenListTeamsResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: Array<components.TeamDto>;
    /**
     * Pagination metadata for checking if there is next page for example.
     */
    pagination: components.PaginationResponseMetadataDto;
};

/** @internal */
export const ConsoleV1UsersControllerGenListTeamsRequest$inboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenListTeamsRequest,
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
export type ConsoleV1UsersControllerGenListTeamsRequest$Outbound = {
    limit?: any | undefined;
    page?: any | undefined;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1UsersControllerGenListTeamsRequest$outboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenListTeamsRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsersControllerGenListTeamsRequest
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
export namespace ConsoleV1UsersControllerGenListTeamsRequest$ {
    /** @deprecated use `ConsoleV1UsersControllerGenListTeamsRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerGenListTeamsRequest$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenListTeamsRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerGenListTeamsRequest$outboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenListTeamsRequest$Outbound` instead. */
    export type Outbound = ConsoleV1UsersControllerGenListTeamsRequest$Outbound;
}

/** @internal */
export const ConsoleV1UsersControllerGenListTeamsResponseBody$inboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenListTeamsResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: z.array(components.TeamDto$inboundSchema),
    pagination: components.PaginationResponseMetadataDto$inboundSchema,
});

/** @internal */
export type ConsoleV1UsersControllerGenListTeamsResponseBody$Outbound = {
    message: string;
    data: Array<components.TeamDto$Outbound>;
    pagination: components.PaginationResponseMetadataDto$Outbound;
};

/** @internal */
export const ConsoleV1UsersControllerGenListTeamsResponseBody$outboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenListTeamsResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsersControllerGenListTeamsResponseBody
> = z.object({
    message: z.string(),
    data: z.array(components.TeamDto$outboundSchema),
    pagination: components.PaginationResponseMetadataDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerGenListTeamsResponseBody$ {
    /** @deprecated use `ConsoleV1UsersControllerGenListTeamsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerGenListTeamsResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenListTeamsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerGenListTeamsResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenListTeamsResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1UsersControllerGenListTeamsResponseBody$Outbound;
}