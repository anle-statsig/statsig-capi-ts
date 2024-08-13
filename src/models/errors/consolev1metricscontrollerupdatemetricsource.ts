/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus = ClosedEnum<
    typeof ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBodyData = {
    status: ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody extends Error {
    status: ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBodyData;

    constructor(err: ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody";
    }
}

export const ConsoleV1MetricsControllerUpdateMetricSourceStatus = {
    FourHundred: 400,
} as const;
export type ConsoleV1MetricsControllerUpdateMetricSourceStatus = ClosedEnum<
    typeof ConsoleV1MetricsControllerUpdateMetricSourceStatus
>;

/**
 * Invalid request. Please check the request input and try again.
 */
export type ConsoleV1MetricsControllerUpdateMetricSourceResponseBodyData = {
    status: ConsoleV1MetricsControllerUpdateMetricSourceStatus;
    message: string;
};

/**
 * Invalid request. Please check the request input and try again.
 */
export class ConsoleV1MetricsControllerUpdateMetricSourceResponseBody extends Error {
    status: ConsoleV1MetricsControllerUpdateMetricSourceStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1MetricsControllerUpdateMetricSourceResponseBodyData;

    constructor(err: ConsoleV1MetricsControllerUpdateMetricSourceResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1MetricsControllerUpdateMetricSourceResponseBody";
    }
}

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus
> = z.nativeEnum(ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus);

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus
> = ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus$ {
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody(v);
    });

/** @internal */
export type ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody
> = z
    .instanceof(ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody$ {
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1MetricsControllerUpdateMetricSourceMetricSourcesResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricSourceStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1MetricsControllerUpdateMetricSourceStatus
> = z.nativeEnum(ConsoleV1MetricsControllerUpdateMetricSourceStatus);

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricSourceStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1MetricsControllerUpdateMetricSourceStatus
> = ConsoleV1MetricsControllerUpdateMetricSourceStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerUpdateMetricSourceStatus$ {
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1MetricsControllerUpdateMetricSourceStatus$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1MetricsControllerUpdateMetricSourceStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricSourceResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1MetricsControllerUpdateMetricSourceStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1MetricsControllerUpdateMetricSourceResponseBody(v);
    });

/** @internal */
export type ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerUpdateMetricSourceResponseBody
> = z
    .instanceof(ConsoleV1MetricsControllerUpdateMetricSourceResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1MetricsControllerUpdateMetricSourceStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$ {
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1MetricsControllerUpdateMetricSourceResponseBody$Outbound;
}