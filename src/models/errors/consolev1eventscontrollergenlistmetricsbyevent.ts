/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1EventsControllerGenListMetricsByEventEventsStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1EventsControllerGenListMetricsByEventEventsStatus = ClosedEnum<
    typeof ConsoleV1EventsControllerGenListMetricsByEventEventsStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBodyData = {
    status: ConsoleV1EventsControllerGenListMetricsByEventEventsStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody extends Error {
    status: ConsoleV1EventsControllerGenListMetricsByEventEventsStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBodyData;

    constructor(err: ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody";
    }
}

export const ConsoleV1EventsControllerGenListMetricsByEventStatus = {
    FourHundred: 400,
} as const;
export type ConsoleV1EventsControllerGenListMetricsByEventStatus = ClosedEnum<
    typeof ConsoleV1EventsControllerGenListMetricsByEventStatus
>;

/**
 * Invalid request. Please check the request input and try again.
 */
export type ConsoleV1EventsControllerGenListMetricsByEventResponseBodyData = {
    status: ConsoleV1EventsControllerGenListMetricsByEventStatus;
    message: string;
};

/**
 * Invalid request. Please check the request input and try again.
 */
export class ConsoleV1EventsControllerGenListMetricsByEventResponseBody extends Error {
    status: ConsoleV1EventsControllerGenListMetricsByEventStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1EventsControllerGenListMetricsByEventResponseBodyData;

    constructor(err: ConsoleV1EventsControllerGenListMetricsByEventResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1EventsControllerGenListMetricsByEventResponseBody";
    }
}

/** @internal */
export const ConsoleV1EventsControllerGenListMetricsByEventEventsStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1EventsControllerGenListMetricsByEventEventsStatus
> = z.nativeEnum(ConsoleV1EventsControllerGenListMetricsByEventEventsStatus);

/** @internal */
export const ConsoleV1EventsControllerGenListMetricsByEventEventsStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1EventsControllerGenListMetricsByEventEventsStatus
> = ConsoleV1EventsControllerGenListMetricsByEventEventsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1EventsControllerGenListMetricsByEventEventsStatus$ {
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventEventsStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1EventsControllerGenListMetricsByEventEventsStatus$inboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventEventsStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1EventsControllerGenListMetricsByEventEventsStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody$inboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1EventsControllerGenListMetricsByEventEventsStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody(v);
    });

/** @internal */
export type ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody$outboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody
> = z
    .instanceof(ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1EventsControllerGenListMetricsByEventEventsStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody$ {
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1EventsControllerGenListMetricsByEventEventsResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1EventsControllerGenListMetricsByEventStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1EventsControllerGenListMetricsByEventStatus
> = z.nativeEnum(ConsoleV1EventsControllerGenListMetricsByEventStatus);

/** @internal */
export const ConsoleV1EventsControllerGenListMetricsByEventStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1EventsControllerGenListMetricsByEventStatus
> = ConsoleV1EventsControllerGenListMetricsByEventStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1EventsControllerGenListMetricsByEventStatus$ {
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1EventsControllerGenListMetricsByEventStatus$inboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1EventsControllerGenListMetricsByEventStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1EventsControllerGenListMetricsByEventResponseBody$inboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListMetricsByEventResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1EventsControllerGenListMetricsByEventStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1EventsControllerGenListMetricsByEventResponseBody(v);
    });

/** @internal */
export type ConsoleV1EventsControllerGenListMetricsByEventResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1EventsControllerGenListMetricsByEventResponseBody$outboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListMetricsByEventResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1EventsControllerGenListMetricsByEventResponseBody
> = z
    .instanceof(ConsoleV1EventsControllerGenListMetricsByEventResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1EventsControllerGenListMetricsByEventStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1EventsControllerGenListMetricsByEventResponseBody$ {
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1EventsControllerGenListMetricsByEventResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1EventsControllerGenListMetricsByEventResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListMetricsByEventResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1EventsControllerGenListMetricsByEventResponseBody$Outbound;
}
