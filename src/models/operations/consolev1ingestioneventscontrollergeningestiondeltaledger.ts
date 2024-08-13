/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerRequest = {
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
 * Get Ingestion Event Delta Ledger Success
 */
export type ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: Array<components.MultipleEventDeltaDto>;
};

/** @internal */
export const ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerRequest$inboundSchema: z.ZodType<
    ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerRequest,
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
export type ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerRequest$Outbound = {
    source_name?: string | undefined;
    event_name?: string | undefined;
    start_date: string;
    end_date: string;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerRequest$outboundSchema: z.ZodType<
    ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerRequest
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
export namespace ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerRequest$ {
    /** @deprecated use `ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerRequest$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerRequest$inboundSchema;
    /** @deprecated use `ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerRequest$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerRequest$outboundSchema;
    /** @deprecated use `ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerRequest$Outbound` instead. */
    export type Outbound =
        ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerRequest$Outbound;
}

/** @internal */
export const ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerResponseBody$inboundSchema: z.ZodType<
    ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: z.array(components.MultipleEventDeltaDto$inboundSchema),
});

/** @internal */
export type ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerResponseBody$Outbound = {
    message: string;
    data: Array<components.MultipleEventDeltaDto$Outbound>;
};

/** @internal */
export const ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerResponseBody$outboundSchema: z.ZodType<
    ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerResponseBody
> = z.object({
    message: z.string(),
    data: z.array(components.MultipleEventDeltaDto$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerResponseBody$ {
    /** @deprecated use `ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1IngestionEventsControllerGenIngestionDeltaLedgerResponseBody$Outbound;
}
