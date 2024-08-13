/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1GatesControllerGenLaunchRequest = {
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
 * Launch gate response
 */
export type ConsoleV1GatesControllerGenLaunchResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.ExternalGateDto;
};

/** @internal */
export const ConsoleV1GatesControllerGenLaunchRequest$inboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenLaunchRequest,
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
export type ConsoleV1GatesControllerGenLaunchRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1GatesControllerGenLaunchRequest$outboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenLaunchRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1GatesControllerGenLaunchRequest
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
export namespace ConsoleV1GatesControllerGenLaunchRequest$ {
    /** @deprecated use `ConsoleV1GatesControllerGenLaunchRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1GatesControllerGenLaunchRequest$inboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenLaunchRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1GatesControllerGenLaunchRequest$outboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenLaunchRequest$Outbound` instead. */
    export type Outbound = ConsoleV1GatesControllerGenLaunchRequest$Outbound;
}

/** @internal */
export const ConsoleV1GatesControllerGenLaunchResponseBody$inboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenLaunchResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.ExternalGateDto$inboundSchema,
});

/** @internal */
export type ConsoleV1GatesControllerGenLaunchResponseBody$Outbound = {
    message: string;
    data: components.ExternalGateDto$Outbound;
};

/** @internal */
export const ConsoleV1GatesControllerGenLaunchResponseBody$outboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenLaunchResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1GatesControllerGenLaunchResponseBody
> = z.object({
    message: z.string(),
    data: components.ExternalGateDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1GatesControllerGenLaunchResponseBody$ {
    /** @deprecated use `ConsoleV1GatesControllerGenLaunchResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1GatesControllerGenLaunchResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenLaunchResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1GatesControllerGenLaunchResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenLaunchResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1GatesControllerGenLaunchResponseBody$Outbound;
}