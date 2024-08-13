/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1UsersControllerGenReadTeamRequest = {
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
 * Get team response
 */
export type ConsoleV1UsersControllerGenReadTeamResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.TeamDto;
};

/** @internal */
export const ConsoleV1UsersControllerGenReadTeamRequest$inboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenReadTeamRequest,
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
export type ConsoleV1UsersControllerGenReadTeamRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1UsersControllerGenReadTeamRequest$outboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenReadTeamRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsersControllerGenReadTeamRequest
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
export namespace ConsoleV1UsersControllerGenReadTeamRequest$ {
    /** @deprecated use `ConsoleV1UsersControllerGenReadTeamRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerGenReadTeamRequest$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadTeamRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerGenReadTeamRequest$outboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadTeamRequest$Outbound` instead. */
    export type Outbound = ConsoleV1UsersControllerGenReadTeamRequest$Outbound;
}

/** @internal */
export const ConsoleV1UsersControllerGenReadTeamResponseBody$inboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenReadTeamResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.TeamDto$inboundSchema,
});

/** @internal */
export type ConsoleV1UsersControllerGenReadTeamResponseBody$Outbound = {
    message: string;
    data: components.TeamDto$Outbound;
};

/** @internal */
export const ConsoleV1UsersControllerGenReadTeamResponseBody$outboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenReadTeamResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsersControllerGenReadTeamResponseBody
> = z.object({
    message: z.string(),
    data: components.TeamDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerGenReadTeamResponseBody$ {
    /** @deprecated use `ConsoleV1UsersControllerGenReadTeamResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerGenReadTeamResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadTeamResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerGenReadTeamResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadTeamResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1UsersControllerGenReadTeamResponseBody$Outbound;
}