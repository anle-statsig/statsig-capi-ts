/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1EventsControllerGenListEventsStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1EventsControllerGenListEventsStatus = ClosedEnum<
    typeof ConsoleV1EventsControllerGenListEventsStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1EventsControllerGenListEventsResponseBodyData = {
    status: ConsoleV1EventsControllerGenListEventsStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1EventsControllerGenListEventsResponseBody extends Error {
    status: ConsoleV1EventsControllerGenListEventsStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1EventsControllerGenListEventsResponseBodyData;

    constructor(err: ConsoleV1EventsControllerGenListEventsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1EventsControllerGenListEventsResponseBody";
    }
}

export const ConsoleV1EventsControllerGenListStatus = {
    FourHundred: 400,
} as const;
export type ConsoleV1EventsControllerGenListStatus = ClosedEnum<
    typeof ConsoleV1EventsControllerGenListStatus
>;

/**
 * Invalid request. Please check the request input and try again.
 */
export type ConsoleV1EventsControllerGenListResponseBodyData = {
    status: ConsoleV1EventsControllerGenListStatus;
    message: string;
};

/**
 * Invalid request. Please check the request input and try again.
 */
export class ConsoleV1EventsControllerGenListResponseBody extends Error {
    status: ConsoleV1EventsControllerGenListStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1EventsControllerGenListResponseBodyData;

    constructor(err: ConsoleV1EventsControllerGenListResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1EventsControllerGenListResponseBody";
    }
}

/** @internal */
export const ConsoleV1EventsControllerGenListEventsStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1EventsControllerGenListEventsStatus
> = z.nativeEnum(ConsoleV1EventsControllerGenListEventsStatus);

/** @internal */
export const ConsoleV1EventsControllerGenListEventsStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1EventsControllerGenListEventsStatus
> = ConsoleV1EventsControllerGenListEventsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1EventsControllerGenListEventsStatus$ {
    /** @deprecated use `ConsoleV1EventsControllerGenListEventsStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1EventsControllerGenListEventsStatus$inboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListEventsStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1EventsControllerGenListEventsStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1EventsControllerGenListEventsResponseBody$inboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListEventsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1EventsControllerGenListEventsStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1EventsControllerGenListEventsResponseBody(v);
    });

/** @internal */
export type ConsoleV1EventsControllerGenListEventsResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1EventsControllerGenListEventsResponseBody$outboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListEventsResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1EventsControllerGenListEventsResponseBody
> = z
    .instanceof(ConsoleV1EventsControllerGenListEventsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1EventsControllerGenListEventsStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1EventsControllerGenListEventsResponseBody$ {
    /** @deprecated use `ConsoleV1EventsControllerGenListEventsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1EventsControllerGenListEventsResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListEventsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1EventsControllerGenListEventsResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListEventsResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1EventsControllerGenListEventsResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1EventsControllerGenListStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1EventsControllerGenListStatus
> = z.nativeEnum(ConsoleV1EventsControllerGenListStatus);

/** @internal */
export const ConsoleV1EventsControllerGenListStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1EventsControllerGenListStatus
> = ConsoleV1EventsControllerGenListStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1EventsControllerGenListStatus$ {
    /** @deprecated use `ConsoleV1EventsControllerGenListStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1EventsControllerGenListStatus$inboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1EventsControllerGenListStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1EventsControllerGenListResponseBody$inboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1EventsControllerGenListStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1EventsControllerGenListResponseBody(v);
    });

/** @internal */
export type ConsoleV1EventsControllerGenListResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1EventsControllerGenListResponseBody$outboundSchema: z.ZodType<
    ConsoleV1EventsControllerGenListResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1EventsControllerGenListResponseBody
> = z
    .instanceof(ConsoleV1EventsControllerGenListResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1EventsControllerGenListStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1EventsControllerGenListResponseBody$ {
    /** @deprecated use `ConsoleV1EventsControllerGenListResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1EventsControllerGenListResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1EventsControllerGenListResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1EventsControllerGenListResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1EventsControllerGenListResponseBody$Outbound;
}
