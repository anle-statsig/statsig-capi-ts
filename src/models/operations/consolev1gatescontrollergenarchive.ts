/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1GatesControllerGenArchiveRequest = {
    /**
     * id
     */
    id: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    archiveSchemaDto: components.ArchiveSchemaDto;
};

/**
 * Archive gate response
 */
export type ConsoleV1GatesControllerGenArchiveResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.ExternalGateDto;
};

/** @internal */
export const ConsoleV1GatesControllerGenArchiveRequest$inboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenArchiveRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "x-respect-review-settings": z.string().optional(),
        ArchiveSchemaDto: components.ArchiveSchemaDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            ArchiveSchemaDto: "archiveSchemaDto",
        });
    });

/** @internal */
export type ConsoleV1GatesControllerGenArchiveRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
    ArchiveSchemaDto: components.ArchiveSchemaDto$Outbound;
};

/** @internal */
export const ConsoleV1GatesControllerGenArchiveRequest$outboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenArchiveRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1GatesControllerGenArchiveRequest
> = z
    .object({
        id: z.string(),
        xRespectReviewSettings: z.string().optional(),
        archiveSchemaDto: components.ArchiveSchemaDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            archiveSchemaDto: "ArchiveSchemaDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1GatesControllerGenArchiveRequest$ {
    /** @deprecated use `ConsoleV1GatesControllerGenArchiveRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1GatesControllerGenArchiveRequest$inboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenArchiveRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1GatesControllerGenArchiveRequest$outboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenArchiveRequest$Outbound` instead. */
    export type Outbound = ConsoleV1GatesControllerGenArchiveRequest$Outbound;
}

/** @internal */
export const ConsoleV1GatesControllerGenArchiveResponseBody$inboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenArchiveResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.ExternalGateDto$inboundSchema,
});

/** @internal */
export type ConsoleV1GatesControllerGenArchiveResponseBody$Outbound = {
    message: string;
    data: components.ExternalGateDto$Outbound;
};

/** @internal */
export const ConsoleV1GatesControllerGenArchiveResponseBody$outboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenArchiveResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1GatesControllerGenArchiveResponseBody
> = z.object({
    message: z.string(),
    data: components.ExternalGateDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1GatesControllerGenArchiveResponseBody$ {
    /** @deprecated use `ConsoleV1GatesControllerGenArchiveResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1GatesControllerGenArchiveResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenArchiveResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1GatesControllerGenArchiveResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenArchiveResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1GatesControllerGenArchiveResponseBody$Outbound;
}
