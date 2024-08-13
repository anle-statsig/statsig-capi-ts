/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1AutotunesControllerGenRemoveAutotunesStatus = {
    FourHundredAndFour: 404,
} as const;
export type ConsoleV1AutotunesControllerGenRemoveAutotunesStatus = ClosedEnum<
    typeof ConsoleV1AutotunesControllerGenRemoveAutotunesStatus
>;

/**
 * Not Found. The requested resource could not be found.
 */
export type ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBodyData = {
    status: ConsoleV1AutotunesControllerGenRemoveAutotunesStatus;
    message: string;
};

/**
 * Not Found. The requested resource could not be found.
 */
export class ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody extends Error {
    status: ConsoleV1AutotunesControllerGenRemoveAutotunesStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBodyData;

    constructor(err: ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody";
    }
}

export const ConsoleV1AutotunesControllerGenRemoveStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1AutotunesControllerGenRemoveStatus = ClosedEnum<
    typeof ConsoleV1AutotunesControllerGenRemoveStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1AutotunesControllerGenRemoveResponseBodyData = {
    status: ConsoleV1AutotunesControllerGenRemoveStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1AutotunesControllerGenRemoveResponseBody extends Error {
    status: ConsoleV1AutotunesControllerGenRemoveStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1AutotunesControllerGenRemoveResponseBodyData;

    constructor(err: ConsoleV1AutotunesControllerGenRemoveResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1AutotunesControllerGenRemoveResponseBody";
    }
}

/** @internal */
export const ConsoleV1AutotunesControllerGenRemoveAutotunesStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenRemoveAutotunesStatus
> = z.nativeEnum(ConsoleV1AutotunesControllerGenRemoveAutotunesStatus);

/** @internal */
export const ConsoleV1AutotunesControllerGenRemoveAutotunesStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenRemoveAutotunesStatus
> = ConsoleV1AutotunesControllerGenRemoveAutotunesStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenRemoveAutotunesStatus$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveAutotunesStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1AutotunesControllerGenRemoveAutotunesStatus$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveAutotunesStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1AutotunesControllerGenRemoveAutotunesStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody$inboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1AutotunesControllerGenRemoveAutotunesStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody(v);
    });

/** @internal */
export type ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody$outboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody
> = z
    .instanceof(ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1AutotunesControllerGenRemoveAutotunesStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1AutotunesControllerGenRemoveAutotunesResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1AutotunesControllerGenRemoveStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenRemoveStatus
> = z.nativeEnum(ConsoleV1AutotunesControllerGenRemoveStatus);

/** @internal */
export const ConsoleV1AutotunesControllerGenRemoveStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenRemoveStatus
> = ConsoleV1AutotunesControllerGenRemoveStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenRemoveStatus$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1AutotunesControllerGenRemoveStatus$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1AutotunesControllerGenRemoveStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1AutotunesControllerGenRemoveResponseBody$inboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenRemoveResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1AutotunesControllerGenRemoveStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1AutotunesControllerGenRemoveResponseBody(v);
    });

/** @internal */
export type ConsoleV1AutotunesControllerGenRemoveResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1AutotunesControllerGenRemoveResponseBody$outboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenRemoveResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1AutotunesControllerGenRemoveResponseBody
> = z
    .instanceof(ConsoleV1AutotunesControllerGenRemoveResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1AutotunesControllerGenRemoveStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenRemoveResponseBody$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1AutotunesControllerGenRemoveResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1AutotunesControllerGenRemoveResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenRemoveResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1AutotunesControllerGenRemoveResponseBody$Outbound;
}