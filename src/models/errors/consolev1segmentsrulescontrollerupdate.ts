/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus = {
    FourHundredAndFour: 404,
} as const;
export type ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus = ClosedEnum<
    typeof ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus
>;

/**
 * Segment not found.
 */
export type ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBodyData = {
    status: ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus;
    message: string;
};

/**
 * Segment not found.
 */
export class ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody extends Error {
    status: ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBodyData;

    constructor(err: ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody";
    }
}

export const ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus = ClosedEnum<
    typeof ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBodyData = {
    status: ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody extends Error {
    status: ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBodyData;

    constructor(err: ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody";
    }
}

export const ConsoleV1SegmentsRulesControllerUpdateStatus = {
    FourHundred: 400,
} as const;
export type ConsoleV1SegmentsRulesControllerUpdateStatus = ClosedEnum<
    typeof ConsoleV1SegmentsRulesControllerUpdateStatus
>;

/**
 * Segment must be of type 'rule_based' to be modified on this endpoint
 */
export type ConsoleV1SegmentsRulesControllerUpdateResponseBodyData = {
    status: ConsoleV1SegmentsRulesControllerUpdateStatus;
    message: string;
};

/**
 * Segment must be of type 'rule_based' to be modified on this endpoint
 */
export class ConsoleV1SegmentsRulesControllerUpdateResponseBody extends Error {
    status: ConsoleV1SegmentsRulesControllerUpdateStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1SegmentsRulesControllerUpdateResponseBodyData;

    constructor(err: ConsoleV1SegmentsRulesControllerUpdateResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1SegmentsRulesControllerUpdateResponseBody";
    }
}

/** @internal */
export const ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus
> = z.nativeEnum(ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus);

/** @internal */
export const ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus
> = ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus$ {
    /** @deprecated use `ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus$inboundSchema;
    /** @deprecated use `ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody$inboundSchema: z.ZodType<
    ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody(v);
    });

/** @internal */
export type ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody$outboundSchema: z.ZodType<
    ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody
> = z
    .instanceof(ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody$ {
    /** @deprecated use `ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus
> = z.nativeEnum(ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus);

/** @internal */
export const ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus
> = ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus$ {
    /** @deprecated use `ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus$inboundSchema;
    /** @deprecated use `ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody$inboundSchema: z.ZodType<
    ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody(v);
    });

/** @internal */
export type ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody$outboundSchema: z.ZodType<
    ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody
> = z
    .instanceof(ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1SegmentsRulesControllerUpdateSegmentsStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody$ {
    /** @deprecated use `ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1SegmentsRulesControllerUpdateSegmentsResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1SegmentsRulesControllerUpdateStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1SegmentsRulesControllerUpdateStatus
> = z.nativeEnum(ConsoleV1SegmentsRulesControllerUpdateStatus);

/** @internal */
export const ConsoleV1SegmentsRulesControllerUpdateStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1SegmentsRulesControllerUpdateStatus
> = ConsoleV1SegmentsRulesControllerUpdateStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1SegmentsRulesControllerUpdateStatus$ {
    /** @deprecated use `ConsoleV1SegmentsRulesControllerUpdateStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1SegmentsRulesControllerUpdateStatus$inboundSchema;
    /** @deprecated use `ConsoleV1SegmentsRulesControllerUpdateStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1SegmentsRulesControllerUpdateStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1SegmentsRulesControllerUpdateResponseBody$inboundSchema: z.ZodType<
    ConsoleV1SegmentsRulesControllerUpdateResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1SegmentsRulesControllerUpdateStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1SegmentsRulesControllerUpdateResponseBody(v);
    });

/** @internal */
export type ConsoleV1SegmentsRulesControllerUpdateResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1SegmentsRulesControllerUpdateResponseBody$outboundSchema: z.ZodType<
    ConsoleV1SegmentsRulesControllerUpdateResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1SegmentsRulesControllerUpdateResponseBody
> = z
    .instanceof(ConsoleV1SegmentsRulesControllerUpdateResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1SegmentsRulesControllerUpdateStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1SegmentsRulesControllerUpdateResponseBody$ {
    /** @deprecated use `ConsoleV1SegmentsRulesControllerUpdateResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1SegmentsRulesControllerUpdateResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1SegmentsRulesControllerUpdateResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1SegmentsRulesControllerUpdateResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1SegmentsRulesControllerUpdateResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1SegmentsRulesControllerUpdateResponseBody$Outbound;
}
