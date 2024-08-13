/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus = {
    FourHundredAndFour: 404,
} as const;
export type ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus = ClosedEnum<
    typeof ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus
>;

/**
 * Not Found. The requested resource could not be found.
 */
export type ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBodyData = {
    status: ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus;
    message: string;
};

/**
 * Not Found. The requested resource could not be found.
 */
export class ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody extends Error {
    status: ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBodyData;

    constructor(err: ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody";
    }
}

export const ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus = ClosedEnum<
    typeof ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBodyData = {
    status: ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody extends Error {
    status: ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBodyData;

    constructor(err: ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody";
    }
}

export const ConsoleV1HoldoutsControllerGenFullUpdateStatus = {
    FourHundred: 400,
} as const;
export type ConsoleV1HoldoutsControllerGenFullUpdateStatus = ClosedEnum<
    typeof ConsoleV1HoldoutsControllerGenFullUpdateStatus
>;

/**
 * Name is already in use
 */
export type ConsoleV1HoldoutsControllerGenFullUpdateResponseBodyData = {
    status: ConsoleV1HoldoutsControllerGenFullUpdateStatus;
    message: string;
};

/**
 * Name is already in use
 */
export class ConsoleV1HoldoutsControllerGenFullUpdateResponseBody extends Error {
    status: ConsoleV1HoldoutsControllerGenFullUpdateStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1HoldoutsControllerGenFullUpdateResponseBodyData;

    constructor(err: ConsoleV1HoldoutsControllerGenFullUpdateResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1HoldoutsControllerGenFullUpdateResponseBody";
    }
}

/** @internal */
export const ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus
> = z.nativeEnum(ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus);

/** @internal */
export const ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus
> = ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus$ {
    /** @deprecated use `ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody$inboundSchema: z.ZodType<
    ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody(v);
    });

/** @internal */
export type ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody$outboundSchema: z.ZodType<
    ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody
> = z
    .instanceof(ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody$ {
    /** @deprecated use `ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus
> = z.nativeEnum(ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus);

/** @internal */
export const ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus
> = ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus$ {
    /** @deprecated use `ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody$inboundSchema: z.ZodType<
    ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody(v);
    });

/** @internal */
export type ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody$outboundSchema: z.ZodType<
    ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody
> = z
    .instanceof(ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody$ {
    /** @deprecated use `ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1HoldoutsControllerGenFullUpdateHoldoutsResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1HoldoutsControllerGenFullUpdateStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1HoldoutsControllerGenFullUpdateStatus
> = z.nativeEnum(ConsoleV1HoldoutsControllerGenFullUpdateStatus);

/** @internal */
export const ConsoleV1HoldoutsControllerGenFullUpdateStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1HoldoutsControllerGenFullUpdateStatus
> = ConsoleV1HoldoutsControllerGenFullUpdateStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1HoldoutsControllerGenFullUpdateStatus$ {
    /** @deprecated use `ConsoleV1HoldoutsControllerGenFullUpdateStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1HoldoutsControllerGenFullUpdateStatus$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenFullUpdateStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1HoldoutsControllerGenFullUpdateStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1HoldoutsControllerGenFullUpdateResponseBody$inboundSchema: z.ZodType<
    ConsoleV1HoldoutsControllerGenFullUpdateResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1HoldoutsControllerGenFullUpdateStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1HoldoutsControllerGenFullUpdateResponseBody(v);
    });

/** @internal */
export type ConsoleV1HoldoutsControllerGenFullUpdateResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1HoldoutsControllerGenFullUpdateResponseBody$outboundSchema: z.ZodType<
    ConsoleV1HoldoutsControllerGenFullUpdateResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1HoldoutsControllerGenFullUpdateResponseBody
> = z
    .instanceof(ConsoleV1HoldoutsControllerGenFullUpdateResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1HoldoutsControllerGenFullUpdateStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1HoldoutsControllerGenFullUpdateResponseBody$ {
    /** @deprecated use `ConsoleV1HoldoutsControllerGenFullUpdateResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1HoldoutsControllerGenFullUpdateResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenFullUpdateResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1HoldoutsControllerGenFullUpdateResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenFullUpdateResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1HoldoutsControllerGenFullUpdateResponseBody$Outbound;
}