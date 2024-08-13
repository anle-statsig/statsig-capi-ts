/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus = {
    FourHundredAndFour: 404,
} as const;
export type ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus = ClosedEnum<
    typeof ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus
>;

/**
 * Experiment not found.
 */
export type ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBodyData = {
    status: ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus;
    message: string;
};

/**
 * Experiment not found.
 */
export class ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody extends Error {
    status: ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBodyData;

    constructor(err: ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody";
    }
}

export const ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus = ClosedEnum<
    typeof ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBodyData = {
    status: ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody extends Error {
    status: ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBodyData;

    constructor(err: ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody";
    }
}

export const ConsoleV1ExperimentsControllerGenAbandonStatus = {
    FourHundred: 400,
} as const;
export type ConsoleV1ExperimentsControllerGenAbandonStatus = ClosedEnum<
    typeof ConsoleV1ExperimentsControllerGenAbandonStatus
>;

/**
 * Experiment has not yet started
 */
export type ConsoleV1ExperimentsControllerGenAbandonResponseBodyData = {
    status: ConsoleV1ExperimentsControllerGenAbandonStatus;
    message: string;
};

/**
 * Experiment has not yet started
 */
export class ConsoleV1ExperimentsControllerGenAbandonResponseBody extends Error {
    status: ConsoleV1ExperimentsControllerGenAbandonStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1ExperimentsControllerGenAbandonResponseBodyData;

    constructor(err: ConsoleV1ExperimentsControllerGenAbandonResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1ExperimentsControllerGenAbandonResponseBody";
    }
}

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus
> = z.nativeEnum(ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus);

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus
> = ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody$inboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody(v);
    });

/** @internal */
export type ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody$outboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody
> = z
    .instanceof(ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus
> = z.nativeEnum(ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus);

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus
> = ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody$inboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody(v);
    });

/** @internal */
export type ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody$outboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody
> = z
    .instanceof(ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1ExperimentsControllerGenAbandonExperimentsStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentsControllerGenAbandonExperimentsResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ExperimentsControllerGenAbandonStatus
> = z.nativeEnum(ConsoleV1ExperimentsControllerGenAbandonStatus);

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ExperimentsControllerGenAbandonStatus
> = ConsoleV1ExperimentsControllerGenAbandonStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenAbandonStatus$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ExperimentsControllerGenAbandonStatus$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1ExperimentsControllerGenAbandonStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonResponseBody$inboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenAbandonResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1ExperimentsControllerGenAbandonStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1ExperimentsControllerGenAbandonResponseBody(v);
    });

/** @internal */
export type ConsoleV1ExperimentsControllerGenAbandonResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1ExperimentsControllerGenAbandonResponseBody$outboundSchema: z.ZodType<
    ConsoleV1ExperimentsControllerGenAbandonResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentsControllerGenAbandonResponseBody
> = z
    .instanceof(ConsoleV1ExperimentsControllerGenAbandonResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1ExperimentsControllerGenAbandonStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentsControllerGenAbandonResponseBody$ {
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ExperimentsControllerGenAbandonResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentsControllerGenAbandonResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentsControllerGenAbandonResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentsControllerGenAbandonResponseBody$Outbound;
}
