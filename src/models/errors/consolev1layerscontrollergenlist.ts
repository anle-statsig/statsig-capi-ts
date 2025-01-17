/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1LayersControllerGenListLayersStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1LayersControllerGenListLayersStatus = ClosedEnum<
    typeof ConsoleV1LayersControllerGenListLayersStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1LayersControllerGenListLayersResponseBodyData = {
    status: ConsoleV1LayersControllerGenListLayersStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1LayersControllerGenListLayersResponseBody extends Error {
    status: ConsoleV1LayersControllerGenListLayersStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1LayersControllerGenListLayersResponseBodyData;

    constructor(err: ConsoleV1LayersControllerGenListLayersResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1LayersControllerGenListLayersResponseBody";
    }
}

export const ConsoleV1LayersControllerGenListStatus = {
    FourHundred: 400,
} as const;
export type ConsoleV1LayersControllerGenListStatus = ClosedEnum<
    typeof ConsoleV1LayersControllerGenListStatus
>;

/**
 * Invalid request. Please check the request input and try again.
 */
export type ConsoleV1LayersControllerGenListResponseBodyData = {
    status: ConsoleV1LayersControllerGenListStatus;
    message: string;
};

/**
 * Invalid request. Please check the request input and try again.
 */
export class ConsoleV1LayersControllerGenListResponseBody extends Error {
    status: ConsoleV1LayersControllerGenListStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1LayersControllerGenListResponseBodyData;

    constructor(err: ConsoleV1LayersControllerGenListResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1LayersControllerGenListResponseBody";
    }
}

/** @internal */
export const ConsoleV1LayersControllerGenListLayersStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1LayersControllerGenListLayersStatus
> = z.nativeEnum(ConsoleV1LayersControllerGenListLayersStatus);

/** @internal */
export const ConsoleV1LayersControllerGenListLayersStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1LayersControllerGenListLayersStatus
> = ConsoleV1LayersControllerGenListLayersStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1LayersControllerGenListLayersStatus$ {
    /** @deprecated use `ConsoleV1LayersControllerGenListLayersStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1LayersControllerGenListLayersStatus$inboundSchema;
    /** @deprecated use `ConsoleV1LayersControllerGenListLayersStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1LayersControllerGenListLayersStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1LayersControllerGenListLayersResponseBody$inboundSchema: z.ZodType<
    ConsoleV1LayersControllerGenListLayersResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1LayersControllerGenListLayersStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1LayersControllerGenListLayersResponseBody(v);
    });

/** @internal */
export type ConsoleV1LayersControllerGenListLayersResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1LayersControllerGenListLayersResponseBody$outboundSchema: z.ZodType<
    ConsoleV1LayersControllerGenListLayersResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1LayersControllerGenListLayersResponseBody
> = z
    .instanceof(ConsoleV1LayersControllerGenListLayersResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1LayersControllerGenListLayersStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1LayersControllerGenListLayersResponseBody$ {
    /** @deprecated use `ConsoleV1LayersControllerGenListLayersResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1LayersControllerGenListLayersResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1LayersControllerGenListLayersResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1LayersControllerGenListLayersResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1LayersControllerGenListLayersResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1LayersControllerGenListLayersResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1LayersControllerGenListStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1LayersControllerGenListStatus
> = z.nativeEnum(ConsoleV1LayersControllerGenListStatus);

/** @internal */
export const ConsoleV1LayersControllerGenListStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1LayersControllerGenListStatus
> = ConsoleV1LayersControllerGenListStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1LayersControllerGenListStatus$ {
    /** @deprecated use `ConsoleV1LayersControllerGenListStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1LayersControllerGenListStatus$inboundSchema;
    /** @deprecated use `ConsoleV1LayersControllerGenListStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1LayersControllerGenListStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1LayersControllerGenListResponseBody$inboundSchema: z.ZodType<
    ConsoleV1LayersControllerGenListResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1LayersControllerGenListStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1LayersControllerGenListResponseBody(v);
    });

/** @internal */
export type ConsoleV1LayersControllerGenListResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1LayersControllerGenListResponseBody$outboundSchema: z.ZodType<
    ConsoleV1LayersControllerGenListResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1LayersControllerGenListResponseBody
> = z
    .instanceof(ConsoleV1LayersControllerGenListResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1LayersControllerGenListStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1LayersControllerGenListResponseBody$ {
    /** @deprecated use `ConsoleV1LayersControllerGenListResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1LayersControllerGenListResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1LayersControllerGenListResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1LayersControllerGenListResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1LayersControllerGenListResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1LayersControllerGenListResponseBody$Outbound;
}
