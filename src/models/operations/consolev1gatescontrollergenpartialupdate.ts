/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1GatesControllerGenPartialUpdateRequest = {
    /**
     * id
     */
    id: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    gatePartialUpdateDto: components.GatePartialUpdateDto;
};

/**
 * Update gate response
 */
export type ConsoleV1GatesControllerGenPartialUpdateResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.ExternalGateDto;
};

/** @internal */
export const ConsoleV1GatesControllerGenPartialUpdateRequest$inboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenPartialUpdateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "x-respect-review-settings": z.string().optional(),
        GatePartialUpdateDto: components.GatePartialUpdateDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            GatePartialUpdateDto: "gatePartialUpdateDto",
        });
    });

/** @internal */
export type ConsoleV1GatesControllerGenPartialUpdateRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
    GatePartialUpdateDto: components.GatePartialUpdateDto$Outbound;
};

/** @internal */
export const ConsoleV1GatesControllerGenPartialUpdateRequest$outboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenPartialUpdateRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1GatesControllerGenPartialUpdateRequest
> = z
    .object({
        id: z.string(),
        xRespectReviewSettings: z.string().optional(),
        gatePartialUpdateDto: components.GatePartialUpdateDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            gatePartialUpdateDto: "GatePartialUpdateDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1GatesControllerGenPartialUpdateRequest$ {
    /** @deprecated use `ConsoleV1GatesControllerGenPartialUpdateRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1GatesControllerGenPartialUpdateRequest$inboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenPartialUpdateRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1GatesControllerGenPartialUpdateRequest$outboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenPartialUpdateRequest$Outbound` instead. */
    export type Outbound = ConsoleV1GatesControllerGenPartialUpdateRequest$Outbound;
}

/** @internal */
export const ConsoleV1GatesControllerGenPartialUpdateResponseBody$inboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenPartialUpdateResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.ExternalGateDto$inboundSchema,
});

/** @internal */
export type ConsoleV1GatesControllerGenPartialUpdateResponseBody$Outbound = {
    message: string;
    data: components.ExternalGateDto$Outbound;
};

/** @internal */
export const ConsoleV1GatesControllerGenPartialUpdateResponseBody$outboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenPartialUpdateResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1GatesControllerGenPartialUpdateResponseBody
> = z.object({
    message: z.string(),
    data: components.ExternalGateDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1GatesControllerGenPartialUpdateResponseBody$ {
    /** @deprecated use `ConsoleV1GatesControllerGenPartialUpdateResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1GatesControllerGenPartialUpdateResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenPartialUpdateResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1GatesControllerGenPartialUpdateResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenPartialUpdateResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1GatesControllerGenPartialUpdateResponseBody$Outbound;
}
