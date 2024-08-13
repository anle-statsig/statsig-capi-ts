/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1EventsControllerGenListSpecificEventRequest = {
    eventName: string;
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
 * Get specific events response
 */
export type ConsoleV1EventsControllerGenListSpecificEventResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: Array<components.LoggedEventDto>;
    /**
     * Pagination metadata for checking if there is next page for example.
     */
    pagination: components.PaginationResponseMetadataDto;
};

/** @internal */
export const ConsoleV1EventsControllerGenListSpecificEventRequest$inboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListSpecificEventRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        eventName: z.string(),
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
export type ConsoleV1EventsControllerGenListSpecificEventRequest$Outbound = {
    eventName: string;
    limit?: any | undefined;
    page?: any | undefined;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1EventsControllerGenListSpecificEventRequest$outboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListSpecificEventRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1EventsControllerGenListSpecificEventRequest
> = z
    .object({
        eventName: z.string(),
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
export namespace ConsoleV1EventsControllerGenListSpecificEventRequest$ {
    /** @deprecated use `ConsoleV1EventsControllerGenListSpecificEventRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1EventsControllerGenListSpecificEventRequest$inboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListSpecificEventRequest$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1EventsControllerGenListSpecificEventRequest$outboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListSpecificEventRequest$Outbound` instead. */
    export type Outbound = ConsoleV1EventsControllerGenListSpecificEventRequest$Outbound;
}

/** @internal */
export const ConsoleV1EventsControllerGenListSpecificEventResponseBody$inboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListSpecificEventResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: z.array(components.LoggedEventDto$inboundSchema),
    pagination: components.PaginationResponseMetadataDto$inboundSchema,
});

/** @internal */
export type ConsoleV1EventsControllerGenListSpecificEventResponseBody$Outbound = {
    message: string;
    data: Array<components.LoggedEventDto$Outbound>;
    pagination: components.PaginationResponseMetadataDto$Outbound;
};

/** @internal */
export const ConsoleV1EventsControllerGenListSpecificEventResponseBody$outboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListSpecificEventResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1EventsControllerGenListSpecificEventResponseBody
> = z.object({
    message: z.string(),
    data: z.array(components.LoggedEventDto$outboundSchema),
    pagination: components.PaginationResponseMetadataDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1EventsControllerGenListSpecificEventResponseBody$ {
    /** @deprecated use `ConsoleV1EventsControllerGenListSpecificEventResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1EventsControllerGenListSpecificEventResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListSpecificEventResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1EventsControllerGenListSpecificEventResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListSpecificEventResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1EventsControllerGenListSpecificEventResponseBody$Outbound;
}