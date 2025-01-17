/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1HoldoutOverridesControllerGenUpdateStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1HoldoutOverridesControllerGenUpdateStatus = ClosedEnum<
    typeof ConsoleV1HoldoutOverridesControllerGenUpdateStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1HoldoutOverridesControllerGenUpdateResponseBodyData = {
    status: ConsoleV1HoldoutOverridesControllerGenUpdateStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody extends Error {
    status: ConsoleV1HoldoutOverridesControllerGenUpdateStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1HoldoutOverridesControllerGenUpdateResponseBodyData;

    constructor(err: ConsoleV1HoldoutOverridesControllerGenUpdateResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody";
    }
}

/** @internal */
export const ConsoleV1HoldoutOverridesControllerGenUpdateStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1HoldoutOverridesControllerGenUpdateStatus
> = z.nativeEnum(ConsoleV1HoldoutOverridesControllerGenUpdateStatus);

/** @internal */
export const ConsoleV1HoldoutOverridesControllerGenUpdateStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1HoldoutOverridesControllerGenUpdateStatus
> = ConsoleV1HoldoutOverridesControllerGenUpdateStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1HoldoutOverridesControllerGenUpdateStatus$ {
    /** @deprecated use `ConsoleV1HoldoutOverridesControllerGenUpdateStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1HoldoutOverridesControllerGenUpdateStatus$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutOverridesControllerGenUpdateStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1HoldoutOverridesControllerGenUpdateStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody$inboundSchema: z.ZodType<
    ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1HoldoutOverridesControllerGenUpdateStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody(v);
    });

/** @internal */
export type ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody$outboundSchema: z.ZodType<
    ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody
> = z
    .instanceof(ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1HoldoutOverridesControllerGenUpdateStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody$ {
    /** @deprecated use `ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1HoldoutOverridesControllerGenUpdateResponseBody$Outbound;
}
