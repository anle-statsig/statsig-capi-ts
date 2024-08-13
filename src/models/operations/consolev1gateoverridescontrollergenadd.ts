/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ConsoleV1GateOverridesControllerGenAddRequest = {
    /**
     * id
     */
    id: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
    updateOverridesContractDto: components.UpdateOverridesContractDto;
};

/**
 * Add Gate Override Success
 */
export type ConsoleV1GateOverridesControllerGenAddResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    /**
     * Contract for overrides
     */
    data: components.OverrideDto;
};

/** @internal */
export const ConsoleV1GateOverridesControllerGenAddRequest$inboundSchema: z.ZodType<
    ConsoleV1GateOverridesControllerGenAddRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "x-respect-review-settings": z.string().optional(),
        UpdateOverridesContractDto: components.UpdateOverridesContractDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
            UpdateOverridesContractDto: "updateOverridesContractDto",
        });
    });

/** @internal */
export type ConsoleV1GateOverridesControllerGenAddRequest$Outbound = {
    id: string;
    "x-respect-review-settings"?: string | undefined;
    UpdateOverridesContractDto: components.UpdateOverridesContractDto$Outbound;
};

/** @internal */
export const ConsoleV1GateOverridesControllerGenAddRequest$outboundSchema: z.ZodType<
    ConsoleV1GateOverridesControllerGenAddRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1GateOverridesControllerGenAddRequest
> = z
    .object({
        id: z.string(),
        xRespectReviewSettings: z.string().optional(),
        updateOverridesContractDto: components.UpdateOverridesContractDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
            updateOverridesContractDto: "UpdateOverridesContractDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1GateOverridesControllerGenAddRequest$ {
    /** @deprecated use `ConsoleV1GateOverridesControllerGenAddRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1GateOverridesControllerGenAddRequest$inboundSchema;
    /** @deprecated use `ConsoleV1GateOverridesControllerGenAddRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1GateOverridesControllerGenAddRequest$outboundSchema;
    /** @deprecated use `ConsoleV1GateOverridesControllerGenAddRequest$Outbound` instead. */
    export type Outbound = ConsoleV1GateOverridesControllerGenAddRequest$Outbound;
}

/** @internal */
export const ConsoleV1GateOverridesControllerGenAddResponseBody$inboundSchema: z.ZodType<
    ConsoleV1GateOverridesControllerGenAddResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.OverrideDto$inboundSchema,
});

/** @internal */
export type ConsoleV1GateOverridesControllerGenAddResponseBody$Outbound = {
    message: string;
    data: components.OverrideDto$Outbound;
};

/** @internal */
export const ConsoleV1GateOverridesControllerGenAddResponseBody$outboundSchema: z.ZodType<
    ConsoleV1GateOverridesControllerGenAddResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1GateOverridesControllerGenAddResponseBody
> = z.object({
    message: z.string(),
    data: components.OverrideDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1GateOverridesControllerGenAddResponseBody$ {
    /** @deprecated use `ConsoleV1GateOverridesControllerGenAddResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1GateOverridesControllerGenAddResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1GateOverridesControllerGenAddResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1GateOverridesControllerGenAddResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1GateOverridesControllerGenAddResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1GateOverridesControllerGenAddResponseBody$Outbound;
}
