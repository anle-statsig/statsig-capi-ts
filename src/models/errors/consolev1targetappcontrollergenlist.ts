/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1TargetAppControllerGenListStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1TargetAppControllerGenListStatus = ClosedEnum<
    typeof ConsoleV1TargetAppControllerGenListStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1TargetAppControllerGenListResponseBodyData = {
    status: ConsoleV1TargetAppControllerGenListStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1TargetAppControllerGenListResponseBody extends Error {
    status: ConsoleV1TargetAppControllerGenListStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1TargetAppControllerGenListResponseBodyData;

    constructor(err: ConsoleV1TargetAppControllerGenListResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1TargetAppControllerGenListResponseBody";
    }
}

/** @internal */
export const ConsoleV1TargetAppControllerGenListStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1TargetAppControllerGenListStatus
> = z.nativeEnum(ConsoleV1TargetAppControllerGenListStatus);

/** @internal */
export const ConsoleV1TargetAppControllerGenListStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1TargetAppControllerGenListStatus
> = ConsoleV1TargetAppControllerGenListStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1TargetAppControllerGenListStatus$ {
    /** @deprecated use `ConsoleV1TargetAppControllerGenListStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1TargetAppControllerGenListStatus$inboundSchema;
    /** @deprecated use `ConsoleV1TargetAppControllerGenListStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1TargetAppControllerGenListStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1TargetAppControllerGenListResponseBody$inboundSchema: z.ZodType<
    ConsoleV1TargetAppControllerGenListResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1TargetAppControllerGenListStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1TargetAppControllerGenListResponseBody(v);
    });

/** @internal */
export type ConsoleV1TargetAppControllerGenListResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1TargetAppControllerGenListResponseBody$outboundSchema: z.ZodType<
    ConsoleV1TargetAppControllerGenListResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1TargetAppControllerGenListResponseBody
> = z
    .instanceof(ConsoleV1TargetAppControllerGenListResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1TargetAppControllerGenListStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1TargetAppControllerGenListResponseBody$ {
    /** @deprecated use `ConsoleV1TargetAppControllerGenListResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1TargetAppControllerGenListResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1TargetAppControllerGenListResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1TargetAppControllerGenListResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1TargetAppControllerGenListResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1TargetAppControllerGenListResponseBody$Outbound;
}
