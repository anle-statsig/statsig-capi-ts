/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus = {
    FourHundredAndFour: 404,
} as const;
export type ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus = ClosedEnum<
    typeof ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus
>;

/**
 * Not Found. The requested resource could not be found.
 */
export type ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBodyData = {
    status: ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus;
    message: string;
};

/**
 * Not Found. The requested resource could not be found.
 */
export class ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody extends Error {
    status: ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBodyData;

    constructor(err: ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody";
    }
}

export const ConsoleV1DynamicConfigControllerGenRemoveStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1DynamicConfigControllerGenRemoveStatus = ClosedEnum<
    typeof ConsoleV1DynamicConfigControllerGenRemoveStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1DynamicConfigControllerGenRemoveResponseBodyData = {
    status: ConsoleV1DynamicConfigControllerGenRemoveStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1DynamicConfigControllerGenRemoveResponseBody extends Error {
    status: ConsoleV1DynamicConfigControllerGenRemoveStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1DynamicConfigControllerGenRemoveResponseBodyData;

    constructor(err: ConsoleV1DynamicConfigControllerGenRemoveResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1DynamicConfigControllerGenRemoveResponseBody";
    }
}

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus
> = z.nativeEnum(ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus);

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus
> = ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody$inboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody(v);
    });

/** @internal */
export type ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody$outboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody
> = z
    .instanceof(ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1DynamicConfigControllerGenRemoveDynamicConfigsResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRemoveStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1DynamicConfigControllerGenRemoveStatus
> = z.nativeEnum(ConsoleV1DynamicConfigControllerGenRemoveStatus);

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRemoveStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1DynamicConfigControllerGenRemoveStatus
> = ConsoleV1DynamicConfigControllerGenRemoveStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenRemoveStatus$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1DynamicConfigControllerGenRemoveStatus$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1DynamicConfigControllerGenRemoveStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRemoveResponseBody$inboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenRemoveResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1DynamicConfigControllerGenRemoveStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1DynamicConfigControllerGenRemoveResponseBody(v);
    });

/** @internal */
export type ConsoleV1DynamicConfigControllerGenRemoveResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenRemoveResponseBody$outboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenRemoveResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1DynamicConfigControllerGenRemoveResponseBody
> = z
    .instanceof(ConsoleV1DynamicConfigControllerGenRemoveResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1DynamicConfigControllerGenRemoveStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenRemoveResponseBody$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1DynamicConfigControllerGenRemoveResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenRemoveResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenRemoveResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1DynamicConfigControllerGenRemoveResponseBody$Outbound;
}