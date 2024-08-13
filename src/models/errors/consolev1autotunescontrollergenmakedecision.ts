/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus = {
    FourHundredAndFour: 404,
} as const;
export type ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus = ClosedEnum<
    typeof ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus
>;

/**
 * Not Found. The requested resource could not be found.
 */
export type ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBodyData = {
    status: ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus;
    message: string;
};

/**
 * Not Found. The requested resource could not be found.
 */
export class ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody extends Error {
    status: ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBodyData;

    constructor(err: ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody";
    }
}

export const ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus = ClosedEnum<
    typeof ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBodyData = {
    status: ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody extends Error {
    status: ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBodyData;

    constructor(err: ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody";
    }
}

export const ConsoleV1AutotunesControllerGenMakeDecisionStatus = {
    FourHundred: 400,
} as const;
export type ConsoleV1AutotunesControllerGenMakeDecisionStatus = ClosedEnum<
    typeof ConsoleV1AutotunesControllerGenMakeDecisionStatus
>;

/**
 * Invalid request. Please check the request input and try again.
 */
export type ConsoleV1AutotunesControllerGenMakeDecisionResponseBodyData = {
    status: ConsoleV1AutotunesControllerGenMakeDecisionStatus;
    message: string;
};

/**
 * Invalid request. Please check the request input and try again.
 */
export class ConsoleV1AutotunesControllerGenMakeDecisionResponseBody extends Error {
    status: ConsoleV1AutotunesControllerGenMakeDecisionStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1AutotunesControllerGenMakeDecisionResponseBodyData;

    constructor(err: ConsoleV1AutotunesControllerGenMakeDecisionResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1AutotunesControllerGenMakeDecisionResponseBody";
    }
}

/** @internal */
export const ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus
> = z.nativeEnum(ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus);

/** @internal */
export const ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus
> = ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody$inboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody(v);
    });

/** @internal */
export type ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody$outboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody
> = z
    .instanceof(ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus
> = z.nativeEnum(ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus);

/** @internal */
export const ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus
> = ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody$inboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody(v);
    });

/** @internal */
export type ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody$outboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody
> = z
    .instanceof(ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1AutotunesControllerGenMakeDecisionAutotunesStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1AutotunesControllerGenMakeDecisionAutotunesResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1AutotunesControllerGenMakeDecisionStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenMakeDecisionStatus
> = z.nativeEnum(ConsoleV1AutotunesControllerGenMakeDecisionStatus);

/** @internal */
export const ConsoleV1AutotunesControllerGenMakeDecisionStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenMakeDecisionStatus
> = ConsoleV1AutotunesControllerGenMakeDecisionStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenMakeDecisionStatus$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenMakeDecisionStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1AutotunesControllerGenMakeDecisionStatus$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenMakeDecisionStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1AutotunesControllerGenMakeDecisionStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1AutotunesControllerGenMakeDecisionResponseBody$inboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenMakeDecisionResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1AutotunesControllerGenMakeDecisionStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1AutotunesControllerGenMakeDecisionResponseBody(v);
    });

/** @internal */
export type ConsoleV1AutotunesControllerGenMakeDecisionResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1AutotunesControllerGenMakeDecisionResponseBody$outboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenMakeDecisionResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1AutotunesControllerGenMakeDecisionResponseBody
> = z
    .instanceof(ConsoleV1AutotunesControllerGenMakeDecisionResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1AutotunesControllerGenMakeDecisionStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenMakeDecisionResponseBody$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenMakeDecisionResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1AutotunesControllerGenMakeDecisionResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenMakeDecisionResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1AutotunesControllerGenMakeDecisionResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenMakeDecisionResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1AutotunesControllerGenMakeDecisionResponseBody$Outbound;
}
