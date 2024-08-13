/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus = {
    FourHundredAndFour: 404,
} as const;
export type ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus = ClosedEnum<
    typeof ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus
>;

/**
 * Not Found. The requested resource could not be found.
 */
export type ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBodyData = {
    status: ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus;
    message: string;
};

/**
 * Not Found. The requested resource could not be found.
 */
export class ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody extends Error {
    status: ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBodyData;

    constructor(err: ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody";
    }
}

export const ConsoleV1HoldoutOverridesControllerGenRemoveStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1HoldoutOverridesControllerGenRemoveStatus = ClosedEnum<
    typeof ConsoleV1HoldoutOverridesControllerGenRemoveStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1HoldoutOverridesControllerGenRemoveResponseBodyData = {
    status: ConsoleV1HoldoutOverridesControllerGenRemoveStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody extends Error {
    status: ConsoleV1HoldoutOverridesControllerGenRemoveStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1HoldoutOverridesControllerGenRemoveResponseBodyData;

    constructor(err: ConsoleV1HoldoutOverridesControllerGenRemoveResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody";
    }
}

/** @internal */
export const ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus
> = z.nativeEnum(ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus);

/** @internal */
export const ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus
> = ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus$ {
    /** @deprecated use `ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody$inboundSchema: z.ZodType<
    ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody(v);
    });

/** @internal */
export type ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody$outboundSchema: z.ZodType<
    ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody
> = z
    .instanceof(ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody$ {
    /** @deprecated use `ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1HoldoutOverridesControllerGenRemoveHoldoutsResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1HoldoutOverridesControllerGenRemoveStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1HoldoutOverridesControllerGenRemoveStatus
> = z.nativeEnum(ConsoleV1HoldoutOverridesControllerGenRemoveStatus);

/** @internal */
export const ConsoleV1HoldoutOverridesControllerGenRemoveStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1HoldoutOverridesControllerGenRemoveStatus
> = ConsoleV1HoldoutOverridesControllerGenRemoveStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1HoldoutOverridesControllerGenRemoveStatus$ {
    /** @deprecated use `ConsoleV1HoldoutOverridesControllerGenRemoveStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1HoldoutOverridesControllerGenRemoveStatus$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutOverridesControllerGenRemoveStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1HoldoutOverridesControllerGenRemoveStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody$inboundSchema: z.ZodType<
    ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1HoldoutOverridesControllerGenRemoveStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody(v);
    });

/** @internal */
export type ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody$outboundSchema: z.ZodType<
    ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody
> = z
    .instanceof(ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1HoldoutOverridesControllerGenRemoveStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody$ {
    /** @deprecated use `ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1HoldoutOverridesControllerGenRemoveResponseBody$Outbound;
}