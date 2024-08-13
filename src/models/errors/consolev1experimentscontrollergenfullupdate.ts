/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus = ClosedEnum<
    typeof ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBodyData = {
    status: ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody extends Error {
    status: ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBodyData;

    constructor(err: ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody";
    }
}

export const ConsoleV1ExperimentsControllerGenFullUpdateStatus = {
    FourHundred: 400,
} as const;
export type ConsoleV1ExperimentsControllerGenFullUpdateStatus = ClosedEnum<
    typeof ConsoleV1ExperimentsControllerGenFullUpdateStatus
>;

/**
 * Name is already in use
 */
export type ConsoleV1ExperimentsControllerGenFullUpdateResponseBodyData = {
    status: ConsoleV1ExperimentsControllerGenFullUpdateStatus;
    message: string;
};

/**
 * Name is already in use
 */
export class ConsoleV1ExperimentsControllerGenFullUpdateResponseBody extends Error {
    status: ConsoleV1ExperimentsControllerGenFullUpdateStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1ExperimentsControllerGenFullUpdateResponseBodyData;

    constructor(err: ConsoleV1ExperimentsControllerGenFullUpdateResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1ExperimentsControllerGenFullUpdateResponseBody";
    }
}

/** @internal */
export const ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus
> = z.nativeEnum(ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus);

/** @internal */
export const ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus
> = ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody$inboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody(v);
    });

/** @internal */
export type ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody$outboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody
> = z
    .instanceof(ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1ExperimentsControllerGenFullUpdateExperimentsStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1ExperimentsControllerGenFullUpdateExperimentsResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1ExperimentsControllerGenFullUpdateStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ExperimentsControllerGenFullUpdateStatus
> = z.nativeEnum(ConsoleV1ExperimentsControllerGenFullUpdateStatus);

/** @internal */
export const ConsoleV1ExperimentsControllerGenFullUpdateStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ExperimentsControllerGenFullUpdateStatus
> = ConsoleV1ExperimentsControllerGenFullUpdateStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenFullUpdateStatus$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenFullUpdateStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ExperimentsControllerGenFullUpdateStatus$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenFullUpdateStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1ExperimentsControllerGenFullUpdateStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1ExperimentsControllerGenFullUpdateResponseBody$inboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenFullUpdateResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1ExperimentsControllerGenFullUpdateStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1ExperimentsControllerGenFullUpdateResponseBody(v);
    });

/** @internal */
export type ConsoleV1ExperimentsControllerGenFullUpdateResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenFullUpdateResponseBody$outboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenFullUpdateResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentsControllerGenFullUpdateResponseBody
> = z
    .instanceof(ConsoleV1ExperimentsControllerGenFullUpdateResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1ExperimentsControllerGenFullUpdateStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenFullUpdateResponseBody$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenFullUpdateResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1ExperimentsControllerGenFullUpdateResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenFullUpdateResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentsControllerGenFullUpdateResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenFullUpdateResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentsControllerGenFullUpdateResponseBody$Outbound;
}