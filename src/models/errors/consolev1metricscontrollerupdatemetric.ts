/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1MetricsControllerUpdateMetricMetricsStatus = {
    FourHundredAndFour: 404,
} as const;
export type ConsoleV1MetricsControllerUpdateMetricMetricsStatus = ClosedEnum<
    typeof ConsoleV1MetricsControllerUpdateMetricMetricsStatus
>;

/**
 * Not Found. The requested resource could not be found.
 */
export type ConsoleV1MetricsControllerUpdateMetricMetricsResponseBodyData = {
    status: ConsoleV1MetricsControllerUpdateMetricMetricsStatus;
    message: string;
};

/**
 * Not Found. The requested resource could not be found.
 */
export class ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody extends Error {
    status: ConsoleV1MetricsControllerUpdateMetricMetricsStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1MetricsControllerUpdateMetricMetricsResponseBodyData;

    constructor(err: ConsoleV1MetricsControllerUpdateMetricMetricsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody";
    }
}

export const ConsoleV1MetricsControllerUpdateMetricStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1MetricsControllerUpdateMetricStatus = ClosedEnum<
    typeof ConsoleV1MetricsControllerUpdateMetricStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1MetricsControllerUpdateMetricResponseBodyData = {
    status: ConsoleV1MetricsControllerUpdateMetricStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1MetricsControllerUpdateMetricResponseBody extends Error {
    status: ConsoleV1MetricsControllerUpdateMetricStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1MetricsControllerUpdateMetricResponseBodyData;

    constructor(err: ConsoleV1MetricsControllerUpdateMetricResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1MetricsControllerUpdateMetricResponseBody";
    }
}

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricMetricsStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1MetricsControllerUpdateMetricMetricsStatus
> = z.nativeEnum(ConsoleV1MetricsControllerUpdateMetricMetricsStatus);

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricMetricsStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1MetricsControllerUpdateMetricMetricsStatus
> = ConsoleV1MetricsControllerUpdateMetricMetricsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerUpdateMetricMetricsStatus$ {
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricMetricsStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1MetricsControllerUpdateMetricMetricsStatus$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricMetricsStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1MetricsControllerUpdateMetricMetricsStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1MetricsControllerUpdateMetricMetricsStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody(v);
    });

/** @internal */
export type ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody
> = z
    .instanceof(ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1MetricsControllerUpdateMetricMetricsStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody$ {
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1MetricsControllerUpdateMetricMetricsResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1MetricsControllerUpdateMetricStatus
> = z.nativeEnum(ConsoleV1MetricsControllerUpdateMetricStatus);

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1MetricsControllerUpdateMetricStatus
> = ConsoleV1MetricsControllerUpdateMetricStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerUpdateMetricStatus$ {
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1MetricsControllerUpdateMetricStatus$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1MetricsControllerUpdateMetricStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricResponseBody$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1MetricsControllerUpdateMetricStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1MetricsControllerUpdateMetricResponseBody(v);
    });

/** @internal */
export type ConsoleV1MetricsControllerUpdateMetricResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricResponseBody$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerUpdateMetricResponseBody
> = z
    .instanceof(ConsoleV1MetricsControllerUpdateMetricResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1MetricsControllerUpdateMetricStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerUpdateMetricResponseBody$ {
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1MetricsControllerUpdateMetricResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1MetricsControllerUpdateMetricResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1MetricsControllerUpdateMetricResponseBody$Outbound;
}
