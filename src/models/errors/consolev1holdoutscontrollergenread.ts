/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1HoldoutsControllerGenReadStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1HoldoutsControllerGenReadStatus = ClosedEnum<
    typeof ConsoleV1HoldoutsControllerGenReadStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1HoldoutsControllerGenReadResponseBodyData = {
    status: ConsoleV1HoldoutsControllerGenReadStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1HoldoutsControllerGenReadResponseBody extends Error {
    status: ConsoleV1HoldoutsControllerGenReadStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1HoldoutsControllerGenReadResponseBodyData;

    constructor(err: ConsoleV1HoldoutsControllerGenReadResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1HoldoutsControllerGenReadResponseBody";
    }
}

/** @internal */
export const ConsoleV1HoldoutsControllerGenReadStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1HoldoutsControllerGenReadStatus
> = z.nativeEnum(ConsoleV1HoldoutsControllerGenReadStatus);

/** @internal */
export const ConsoleV1HoldoutsControllerGenReadStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1HoldoutsControllerGenReadStatus
> = ConsoleV1HoldoutsControllerGenReadStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1HoldoutsControllerGenReadStatus$ {
    /** @deprecated use `ConsoleV1HoldoutsControllerGenReadStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1HoldoutsControllerGenReadStatus$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenReadStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1HoldoutsControllerGenReadStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1HoldoutsControllerGenReadResponseBody$inboundSchema: z.ZodType<
    ConsoleV1HoldoutsControllerGenReadResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1HoldoutsControllerGenReadStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1HoldoutsControllerGenReadResponseBody(v);
    });

/** @internal */
export type ConsoleV1HoldoutsControllerGenReadResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1HoldoutsControllerGenReadResponseBody$outboundSchema: z.ZodType<
    ConsoleV1HoldoutsControllerGenReadResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1HoldoutsControllerGenReadResponseBody
> = z
    .instanceof(ConsoleV1HoldoutsControllerGenReadResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1HoldoutsControllerGenReadStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1HoldoutsControllerGenReadResponseBody$ {
    /** @deprecated use `ConsoleV1HoldoutsControllerGenReadResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1HoldoutsControllerGenReadResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenReadResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1HoldoutsControllerGenReadResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1HoldoutsControllerGenReadResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1HoldoutsControllerGenReadResponseBody$Outbound;
}
