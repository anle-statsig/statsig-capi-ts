/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type ConsoleV1ExposuresControllerExposureCountRequest = {
    /**
     * Exposure name
     */
    experimentName: string;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
};

/** @internal */
export const ConsoleV1ExposuresControllerExposureCountRequest$inboundSchema: z.ZodType<
    ConsoleV1ExposuresControllerExposureCountRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        experimentName: z.string(),
        "x-respect-review-settings": z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
        });
    });

/** @internal */
export type ConsoleV1ExposuresControllerExposureCountRequest$Outbound = {
    experimentName: string;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1ExposuresControllerExposureCountRequest$outboundSchema: z.ZodType<
    ConsoleV1ExposuresControllerExposureCountRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExposuresControllerExposureCountRequest
> = z
    .object({
        experimentName: z.string(),
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
export namespace ConsoleV1ExposuresControllerExposureCountRequest$ {
    /** @deprecated use `ConsoleV1ExposuresControllerExposureCountRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ExposuresControllerExposureCountRequest$inboundSchema;
    /** @deprecated use `ConsoleV1ExposuresControllerExposureCountRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1ExposuresControllerExposureCountRequest$outboundSchema;
    /** @deprecated use `ConsoleV1ExposuresControllerExposureCountRequest$Outbound` instead. */
    export type Outbound = ConsoleV1ExposuresControllerExposureCountRequest$Outbound;
}
