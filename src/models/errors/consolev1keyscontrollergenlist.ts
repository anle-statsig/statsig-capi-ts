/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1KeysControllerGenListStatus = {
    FourHundredAndThree: 403,
} as const;
export type ConsoleV1KeysControllerGenListStatus = ClosedEnum<
    typeof ConsoleV1KeysControllerGenListStatus
>;

/**
 * Insufficient permissions.
 */
export type ConsoleV1KeysControllerGenListResponseBodyData = {
    status: ConsoleV1KeysControllerGenListStatus;
    message: string;
};

/**
 * Insufficient permissions.
 */
export class ConsoleV1KeysControllerGenListResponseBody extends Error {
    status: ConsoleV1KeysControllerGenListStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1KeysControllerGenListResponseBodyData;

    constructor(err: ConsoleV1KeysControllerGenListResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1KeysControllerGenListResponseBody";
    }
}

/** @internal */
export const ConsoleV1KeysControllerGenListStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1KeysControllerGenListStatus
> = z.nativeEnum(ConsoleV1KeysControllerGenListStatus);

/** @internal */
export const ConsoleV1KeysControllerGenListStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1KeysControllerGenListStatus
> = ConsoleV1KeysControllerGenListStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1KeysControllerGenListStatus$ {
    /** @deprecated use `ConsoleV1KeysControllerGenListStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1KeysControllerGenListStatus$inboundSchema;
    /** @deprecated use `ConsoleV1KeysControllerGenListStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1KeysControllerGenListStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1KeysControllerGenListResponseBody$inboundSchema: z.ZodType<
    ConsoleV1KeysControllerGenListResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1KeysControllerGenListStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1KeysControllerGenListResponseBody(v);
    });

/** @internal */
export type ConsoleV1KeysControllerGenListResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1KeysControllerGenListResponseBody$outboundSchema: z.ZodType<
    ConsoleV1KeysControllerGenListResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1KeysControllerGenListResponseBody
> = z
    .instanceof(ConsoleV1KeysControllerGenListResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1KeysControllerGenListStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1KeysControllerGenListResponseBody$ {
    /** @deprecated use `ConsoleV1KeysControllerGenListResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1KeysControllerGenListResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1KeysControllerGenListResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1KeysControllerGenListResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1KeysControllerGenListResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1KeysControllerGenListResponseBody$Outbound;
}