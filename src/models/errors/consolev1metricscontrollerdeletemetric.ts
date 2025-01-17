/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1MetricsControllerDeleteMetricMetricsStatus = {
    FourHundredAndFour: 404,
} as const;
export type ConsoleV1MetricsControllerDeleteMetricMetricsStatus = ClosedEnum<
    typeof ConsoleV1MetricsControllerDeleteMetricMetricsStatus
>;

/**
 * Not Found. The requested resource could not be found.
 */
export type ConsoleV1MetricsControllerDeleteMetricMetricsResponseBodyData = {
    status: ConsoleV1MetricsControllerDeleteMetricMetricsStatus;
    message: string;
};

/**
 * Not Found. The requested resource could not be found.
 */
export class ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody extends Error {
    status: ConsoleV1MetricsControllerDeleteMetricMetricsStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1MetricsControllerDeleteMetricMetricsResponseBodyData;

    constructor(err: ConsoleV1MetricsControllerDeleteMetricMetricsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody";
    }
}

export const ConsoleV1MetricsControllerDeleteMetricStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1MetricsControllerDeleteMetricStatus = ClosedEnum<
    typeof ConsoleV1MetricsControllerDeleteMetricStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1MetricsControllerDeleteMetricResponseBodyData = {
    status: ConsoleV1MetricsControllerDeleteMetricStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1MetricsControllerDeleteMetricResponseBody extends Error {
    status: ConsoleV1MetricsControllerDeleteMetricStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1MetricsControllerDeleteMetricResponseBodyData;

    constructor(err: ConsoleV1MetricsControllerDeleteMetricResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1MetricsControllerDeleteMetricResponseBody";
    }
}

/** @internal */
export const ConsoleV1MetricsControllerDeleteMetricMetricsStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1MetricsControllerDeleteMetricMetricsStatus
> = z.nativeEnum(ConsoleV1MetricsControllerDeleteMetricMetricsStatus);

/** @internal */
export const ConsoleV1MetricsControllerDeleteMetricMetricsStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1MetricsControllerDeleteMetricMetricsStatus
> = ConsoleV1MetricsControllerDeleteMetricMetricsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerDeleteMetricMetricsStatus$ {
    /** @deprecated use `ConsoleV1MetricsControllerDeleteMetricMetricsStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1MetricsControllerDeleteMetricMetricsStatus$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerDeleteMetricMetricsStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1MetricsControllerDeleteMetricMetricsStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1MetricsControllerDeleteMetricMetricsStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody(v);
    });

/** @internal */
export type ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody
> = z
    .instanceof(ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1MetricsControllerDeleteMetricMetricsStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody$ {
    /** @deprecated use `ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1MetricsControllerDeleteMetricMetricsResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1MetricsControllerDeleteMetricStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1MetricsControllerDeleteMetricStatus
> = z.nativeEnum(ConsoleV1MetricsControllerDeleteMetricStatus);

/** @internal */
export const ConsoleV1MetricsControllerDeleteMetricStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1MetricsControllerDeleteMetricStatus
> = ConsoleV1MetricsControllerDeleteMetricStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerDeleteMetricStatus$ {
    /** @deprecated use `ConsoleV1MetricsControllerDeleteMetricStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1MetricsControllerDeleteMetricStatus$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerDeleteMetricStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1MetricsControllerDeleteMetricStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1MetricsControllerDeleteMetricResponseBody$inboundSchema: z.ZodType<
    ConsoleV1MetricsControllerDeleteMetricResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1MetricsControllerDeleteMetricStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1MetricsControllerDeleteMetricResponseBody(v);
    });

/** @internal */
export type ConsoleV1MetricsControllerDeleteMetricResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1MetricsControllerDeleteMetricResponseBody$outboundSchema: z.ZodType<
    ConsoleV1MetricsControllerDeleteMetricResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1MetricsControllerDeleteMetricResponseBody
> = z
    .instanceof(ConsoleV1MetricsControllerDeleteMetricResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1MetricsControllerDeleteMetricStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1MetricsControllerDeleteMetricResponseBody$ {
    /** @deprecated use `ConsoleV1MetricsControllerDeleteMetricResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1MetricsControllerDeleteMetricResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerDeleteMetricResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1MetricsControllerDeleteMetricResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1MetricsControllerDeleteMetricResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1MetricsControllerDeleteMetricResponseBody$Outbound;
}
