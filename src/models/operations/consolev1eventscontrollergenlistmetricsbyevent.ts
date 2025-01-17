/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1EventsControllerGenListMetricsByEventRequest = {
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
 * Get metrics from events response
 */
export type ConsoleV1EventsControllerGenListMetricsByEventResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: Array<components.ExternalMetricDefinitionContractDto>;
    /**
     * Pagination metadata for checking if there is next page for example.
     */
    pagination: components.PaginationResponseMetadataDto;
};

/** @internal */
export const ConsoleV1EventsControllerGenListMetricsByEventRequest$inboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListMetricsByEventRequest,
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
export type ConsoleV1EventsControllerGenListMetricsByEventRequest$Outbound = {
    eventName: string;
    limit?: any | undefined;
    page?: any | undefined;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1EventsControllerGenListMetricsByEventRequest$outboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListMetricsByEventRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1EventsControllerGenListMetricsByEventRequest
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
export namespace ConsoleV1EventsControllerGenListMetricsByEventRequest$ {
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventRequest$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1EventsControllerGenListMetricsByEventRequest$inboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventRequest$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1EventsControllerGenListMetricsByEventRequest$outboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventRequest$Outbound` instead. */
    export type Outbound = ConsoleV1EventsControllerGenListMetricsByEventRequest$Outbound;
}

/** @internal */
export const ConsoleV1EventsControllerGenListMetricsByEventResponseBody$inboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListMetricsByEventResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: z.array(components.ExternalMetricDefinitionContractDto$inboundSchema),
    pagination: components.PaginationResponseMetadataDto$inboundSchema,
});

/** @internal */
export type ConsoleV1EventsControllerGenListMetricsByEventResponseBody$Outbound = {
    message: string;
    data: Array<components.ExternalMetricDefinitionContractDto$Outbound>;
    pagination: components.PaginationResponseMetadataDto$Outbound;
};

/** @internal */
export const ConsoleV1EventsControllerGenListMetricsByEventResponseBody$outboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListMetricsByEventResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1EventsControllerGenListMetricsByEventResponseBody
> = z.object({
    message: z.string(),
    data: z.array(components.ExternalMetricDefinitionContractDto$outboundSchema),
    pagination: components.PaginationResponseMetadataDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1EventsControllerGenListMetricsByEventResponseBody$ {
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1EventsControllerGenListMetricsByEventResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1EventsControllerGenListMetricsByEventResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1EventsControllerGenListMetricsByEventResponseBody$Outbound;
}
