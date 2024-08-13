/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1SegmentsControllerGenListStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1SegmentsControllerGenListStatus = ClosedEnum<
    typeof ConsoleV1SegmentsControllerGenListStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1SegmentsControllerGenListResponseBodyData = {
    status: ConsoleV1SegmentsControllerGenListStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1SegmentsControllerGenListResponseBody extends Error {
    status: ConsoleV1SegmentsControllerGenListStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1SegmentsControllerGenListResponseBodyData;

    constructor(err: ConsoleV1SegmentsControllerGenListResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1SegmentsControllerGenListResponseBody";
    }
}

/** @internal */
export const ConsoleV1SegmentsControllerGenListStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1SegmentsControllerGenListStatus
> = z.nativeEnum(ConsoleV1SegmentsControllerGenListStatus);

/** @internal */
export const ConsoleV1SegmentsControllerGenListStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1SegmentsControllerGenListStatus
> = ConsoleV1SegmentsControllerGenListStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1SegmentsControllerGenListStatus$ {
    /** @deprecated use `ConsoleV1SegmentsControllerGenListStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1SegmentsControllerGenListStatus$inboundSchema;
    /** @deprecated use `ConsoleV1SegmentsControllerGenListStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1SegmentsControllerGenListStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1SegmentsControllerGenListResponseBody$inboundSchema: z.ZodType<
    ConsoleV1SegmentsControllerGenListResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1SegmentsControllerGenListStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1SegmentsControllerGenListResponseBody(v);
    });

/** @internal */
export type ConsoleV1SegmentsControllerGenListResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1SegmentsControllerGenListResponseBody$outboundSchema: z.ZodType<
    ConsoleV1SegmentsControllerGenListResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1SegmentsControllerGenListResponseBody
> = z
    .instanceof(ConsoleV1SegmentsControllerGenListResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1SegmentsControllerGenListStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1SegmentsControllerGenListResponseBody$ {
    /** @deprecated use `ConsoleV1SegmentsControllerGenListResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1SegmentsControllerGenListResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1SegmentsControllerGenListResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1SegmentsControllerGenListResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1SegmentsControllerGenListResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1SegmentsControllerGenListResponseBody$Outbound;
}