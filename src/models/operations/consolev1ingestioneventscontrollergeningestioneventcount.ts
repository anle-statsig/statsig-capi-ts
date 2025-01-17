/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1IngestionEventsControllerGenIngestionEventCountRequest = {
    sourceName?: string | undefined;
    eventName?: string | undefined;
    startDate: string;
    endDate: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
};

/**
 * Get Ingestion Event Count Success
 */
export type ConsoleV1IngestionEventsControllerGenIngestionEventCountResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: Array<components.MultipleEventCountDto>;
};

/** @internal */
export const ConsoleV1IngestionEventsControllerGenIngestionEventCountRequest$inboundSchema: z.ZodType<
    ConsoleV1IngestionEventsControllerGenIngestionEventCountRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        source_name: z.string().optional(),
        event_name: z.string().optional(),
        start_date: z.string(),
        end_date: z.string(),
        "x-respect-review-settings": z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_name: "sourceName",
            event_name: "eventName",
            start_date: "startDate",
            end_date: "endDate",
            "x-respect-review-settings": "xRespectReviewSettings",
        });
    });

/** @internal */
export type ConsoleV1IngestionEventsControllerGenIngestionEventCountRequest$Outbound = {
    source_name?: string | undefined;
    event_name?: string | undefined;
    start_date: string;
    end_date: string;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1IngestionEventsControllerGenIngestionEventCountRequest$outboundSchema: z.ZodType<
    ConsoleV1IngestionEventsControllerGenIngestionEventCountRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1IngestionEventsControllerGenIngestionEventCountRequest
> = z
    .object({
        sourceName: z.string().optional(),
        eventName: z.string().optional(),
        startDate: z.string(),
        endDate: z.string(),
        xRespectReviewSettings: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            sourceName: "source_name",
            eventName: "event_name",
            startDate: "start_date",
            endDate: "end_date",
            xRespectReviewSettings: "x-respect-review-settings",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1IngestionEventsControllerGenIngestionEventCountRequest$ {
    /** @deprecated use `ConsoleV1IngestionEventsControllerGenIngestionEventCountRequest$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1IngestionEventsControllerGenIngestionEventCountRequest$inboundSchema;
    /** @deprecated use `ConsoleV1IngestionEventsControllerGenIngestionEventCountRequest$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1IngestionEventsControllerGenIngestionEventCountRequest$outboundSchema;
    /** @deprecated use `ConsoleV1IngestionEventsControllerGenIngestionEventCountRequest$Outbound` instead. */
    export type Outbound = ConsoleV1IngestionEventsControllerGenIngestionEventCountRequest$Outbound;
}

/** @internal */
export const ConsoleV1IngestionEventsControllerGenIngestionEventCountResponseBody$inboundSchema: z.ZodType<
    ConsoleV1IngestionEventsControllerGenIngestionEventCountResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: z.array(components.MultipleEventCountDto$inboundSchema),
});

/** @internal */
export type ConsoleV1IngestionEventsControllerGenIngestionEventCountResponseBody$Outbound = {
    message: string;
    data: Array<components.MultipleEventCountDto$Outbound>;
};

/** @internal */
export const ConsoleV1IngestionEventsControllerGenIngestionEventCountResponseBody$outboundSchema: z.ZodType<
    ConsoleV1IngestionEventsControllerGenIngestionEventCountResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1IngestionEventsControllerGenIngestionEventCountResponseBody
> = z.object({
    message: z.string(),
    data: z.array(components.MultipleEventCountDto$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1IngestionEventsControllerGenIngestionEventCountResponseBody$ {
    /** @deprecated use `ConsoleV1IngestionEventsControllerGenIngestionEventCountResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1IngestionEventsControllerGenIngestionEventCountResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1IngestionEventsControllerGenIngestionEventCountResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1IngestionEventsControllerGenIngestionEventCountResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1IngestionEventsControllerGenIngestionEventCountResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1IngestionEventsControllerGenIngestionEventCountResponseBody$Outbound;
}
