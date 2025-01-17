/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus = {
    FourHundredAndFour: 404,
} as const;
export type ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus = ClosedEnum<
    typeof ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus
>;

/**
 * Not Found. The requested resource could not be found.
 */
export type ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBodyData = {
    status: ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus;
    message: string;
};

/**
 * Not Found. The requested resource could not be found.
 */
export class ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody extends Error {
    status: ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBodyData;

    constructor(
        err: ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBodyData
    ) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody";
    }
}

export const ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus = ClosedEnum<
    typeof ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBodyData = {
    status: ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody extends Error {
    status: ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBodyData;

    constructor(err: ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody";
    }
}

export const ConsoleV1AutotunesControllerGenPartialUpdateStatus = {
    FourHundred: 400,
} as const;
export type ConsoleV1AutotunesControllerGenPartialUpdateStatus = ClosedEnum<
    typeof ConsoleV1AutotunesControllerGenPartialUpdateStatus
>;

/**
 * Invalid request. Please check the request input and try again.
 */
export type ConsoleV1AutotunesControllerGenPartialUpdateResponseBodyData = {
    status: ConsoleV1AutotunesControllerGenPartialUpdateStatus;
    message: string;
};

/**
 * Invalid request. Please check the request input and try again.
 */
export class ConsoleV1AutotunesControllerGenPartialUpdateResponseBody extends Error {
    status: ConsoleV1AutotunesControllerGenPartialUpdateStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1AutotunesControllerGenPartialUpdateResponseBodyData;

    constructor(err: ConsoleV1AutotunesControllerGenPartialUpdateResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1AutotunesControllerGenPartialUpdateResponseBody";
    }
}

/** @internal */
export const ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus
> = z.nativeEnum(ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus);

/** @internal */
export const ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus
> = ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody$inboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody(v);
    });

/** @internal */
export type ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody$outboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody
> = z
    .instanceof(ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus
> = z.nativeEnum(ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus);

/** @internal */
export const ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus
> = ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody$inboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody(v);
    });

/** @internal */
export type ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody$outboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody
> = z
    .instanceof(ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1AutotunesControllerGenPartialUpdateAutotunesStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1AutotunesControllerGenPartialUpdateAutotunesResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1AutotunesControllerGenPartialUpdateStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenPartialUpdateStatus
> = z.nativeEnum(ConsoleV1AutotunesControllerGenPartialUpdateStatus);

/** @internal */
export const ConsoleV1AutotunesControllerGenPartialUpdateStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1AutotunesControllerGenPartialUpdateStatus
> = ConsoleV1AutotunesControllerGenPartialUpdateStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenPartialUpdateStatus$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenPartialUpdateStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1AutotunesControllerGenPartialUpdateStatus$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenPartialUpdateStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1AutotunesControllerGenPartialUpdateStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1AutotunesControllerGenPartialUpdateResponseBody$inboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenPartialUpdateResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1AutotunesControllerGenPartialUpdateStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1AutotunesControllerGenPartialUpdateResponseBody(v);
    });

/** @internal */
export type ConsoleV1AutotunesControllerGenPartialUpdateResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1AutotunesControllerGenPartialUpdateResponseBody$outboundSchema: z.ZodType<
    ConsoleV1AutotunesControllerGenPartialUpdateResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1AutotunesControllerGenPartialUpdateResponseBody
> = z
    .instanceof(ConsoleV1AutotunesControllerGenPartialUpdateResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1AutotunesControllerGenPartialUpdateStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1AutotunesControllerGenPartialUpdateResponseBody$ {
    /** @deprecated use `ConsoleV1AutotunesControllerGenPartialUpdateResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1AutotunesControllerGenPartialUpdateResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenPartialUpdateResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1AutotunesControllerGenPartialUpdateResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1AutotunesControllerGenPartialUpdateResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1AutotunesControllerGenPartialUpdateResponseBody$Outbound;
}
