/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1MetricsControllerGenExperimentListFromMetricStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1MetricsControllerGenExperimentListFromMetricStatus = ClosedEnum<
    typeof ConsoleV1MetricsControllerGenExperimentListFromMetricStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBodyData = {
    status: ConsoleV1MetricsControllerGenExperimentListFromMetricStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody extends Error {
    status: ConsoleV1MetricsControllerGenExperimentListFromMetricStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBodyData;

    constructor(err: ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody";
    }
}

/** @internal */
export const ConsoleV1MetricsControllerGenExperimentListFromMetricStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1MetricsControllerGenExperimentListFromMetricStatus
> = z.nativeEnum(ConsoleV1MetricsControllerGenExperimentListFromMetricStatus);

/** @internal */
export const ConsoleV1MetricsControllerGenExperimentListFromMetricStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1MetricsControllerGenExperimentListFromMetricStatus
> = ConsoleV1MetricsControllerGenExperimentListFromMetricStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerGenExperimentListFromMetricStatus$ {
    /** @deprecated use `ConsoleV1MetricsControllerGenExperimentListFromMetricStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1MetricsControllerGenExperimentListFromMetricStatus$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerGenExperimentListFromMetricStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1MetricsControllerGenExperimentListFromMetricStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1MetricsControllerGenExperimentListFromMetricStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody(v);
    });

/** @internal */
export type ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody
> = z
    .instanceof(ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1MetricsControllerGenExperimentListFromMetricStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody$ {
    /** @deprecated use `ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1MetricsControllerGenExperimentListFromMetricResponseBody$Outbound;
}