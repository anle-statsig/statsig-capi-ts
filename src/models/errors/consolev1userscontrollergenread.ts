/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1UsersControllerGenReadUsersResponseStatus = {
    FourHundredAndFour: 404,
} as const;
export type ConsoleV1UsersControllerGenReadUsersResponseStatus = ClosedEnum<
    typeof ConsoleV1UsersControllerGenReadUsersResponseStatus
>;

/**
 * Not Found. The requested resource could not be found.
 */
export type ConsoleV1UsersControllerGenReadUsersResponseResponseBodyData = {
    status: ConsoleV1UsersControllerGenReadUsersResponseStatus;
    message: string;
};

/**
 * Not Found. The requested resource could not be found.
 */
export class ConsoleV1UsersControllerGenReadUsersResponseResponseBody extends Error {
    status: ConsoleV1UsersControllerGenReadUsersResponseStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1UsersControllerGenReadUsersResponseResponseBodyData;

    constructor(err: ConsoleV1UsersControllerGenReadUsersResponseResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1UsersControllerGenReadUsersResponseResponseBody";
    }
}

export const ConsoleV1UsersControllerGenReadUsersStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1UsersControllerGenReadUsersStatus = ClosedEnum<
    typeof ConsoleV1UsersControllerGenReadUsersStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1UsersControllerGenReadUsersResponseBodyData = {
    status: ConsoleV1UsersControllerGenReadUsersStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1UsersControllerGenReadUsersResponseBody extends Error {
    status: ConsoleV1UsersControllerGenReadUsersStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1UsersControllerGenReadUsersResponseBodyData;

    constructor(err: ConsoleV1UsersControllerGenReadUsersResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1UsersControllerGenReadUsersResponseBody";
    }
}

export const ConsoleV1UsersControllerGenReadStatus = {
    FourHundred: 400,
} as const;
export type ConsoleV1UsersControllerGenReadStatus = ClosedEnum<
    typeof ConsoleV1UsersControllerGenReadStatus
>;

/**
 * Invalid request. Please check the request input and try again.
 */
export type ConsoleV1UsersControllerGenReadResponseBodyData = {
    status: ConsoleV1UsersControllerGenReadStatus;
    message: string;
};

/**
 * Invalid request. Please check the request input and try again.
 */
export class ConsoleV1UsersControllerGenReadResponseBody extends Error {
    status: ConsoleV1UsersControllerGenReadStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1UsersControllerGenReadResponseBodyData;

    constructor(err: ConsoleV1UsersControllerGenReadResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1UsersControllerGenReadResponseBody";
    }
}

/** @internal */
export const ConsoleV1UsersControllerGenReadUsersResponseStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1UsersControllerGenReadUsersResponseStatus
> = z.nativeEnum(ConsoleV1UsersControllerGenReadUsersResponseStatus);

/** @internal */
export const ConsoleV1UsersControllerGenReadUsersResponseStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1UsersControllerGenReadUsersResponseStatus
> = ConsoleV1UsersControllerGenReadUsersResponseStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerGenReadUsersResponseStatus$ {
    /** @deprecated use `ConsoleV1UsersControllerGenReadUsersResponseStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerGenReadUsersResponseStatus$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadUsersResponseStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerGenReadUsersResponseStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1UsersControllerGenReadUsersResponseResponseBody$inboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenReadUsersResponseResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1UsersControllerGenReadUsersResponseStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1UsersControllerGenReadUsersResponseResponseBody(v);
    });

/** @internal */
export type ConsoleV1UsersControllerGenReadUsersResponseResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1UsersControllerGenReadUsersResponseResponseBody$outboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenReadUsersResponseResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsersControllerGenReadUsersResponseResponseBody
> = z
    .instanceof(ConsoleV1UsersControllerGenReadUsersResponseResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1UsersControllerGenReadUsersResponseStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerGenReadUsersResponseResponseBody$ {
    /** @deprecated use `ConsoleV1UsersControllerGenReadUsersResponseResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1UsersControllerGenReadUsersResponseResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadUsersResponseResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1UsersControllerGenReadUsersResponseResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadUsersResponseResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1UsersControllerGenReadUsersResponseResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1UsersControllerGenReadUsersStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1UsersControllerGenReadUsersStatus
> = z.nativeEnum(ConsoleV1UsersControllerGenReadUsersStatus);

/** @internal */
export const ConsoleV1UsersControllerGenReadUsersStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1UsersControllerGenReadUsersStatus
> = ConsoleV1UsersControllerGenReadUsersStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerGenReadUsersStatus$ {
    /** @deprecated use `ConsoleV1UsersControllerGenReadUsersStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerGenReadUsersStatus$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadUsersStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerGenReadUsersStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1UsersControllerGenReadUsersResponseBody$inboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenReadUsersResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1UsersControllerGenReadUsersStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1UsersControllerGenReadUsersResponseBody(v);
    });

/** @internal */
export type ConsoleV1UsersControllerGenReadUsersResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1UsersControllerGenReadUsersResponseBody$outboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenReadUsersResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsersControllerGenReadUsersResponseBody
> = z
    .instanceof(ConsoleV1UsersControllerGenReadUsersResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1UsersControllerGenReadUsersStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerGenReadUsersResponseBody$ {
    /** @deprecated use `ConsoleV1UsersControllerGenReadUsersResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerGenReadUsersResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadUsersResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerGenReadUsersResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadUsersResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1UsersControllerGenReadUsersResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1UsersControllerGenReadStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1UsersControllerGenReadStatus
> = z.nativeEnum(ConsoleV1UsersControllerGenReadStatus);

/** @internal */
export const ConsoleV1UsersControllerGenReadStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1UsersControllerGenReadStatus
> = ConsoleV1UsersControllerGenReadStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerGenReadStatus$ {
    /** @deprecated use `ConsoleV1UsersControllerGenReadStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerGenReadStatus$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerGenReadStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1UsersControllerGenReadResponseBody$inboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenReadResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1UsersControllerGenReadStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1UsersControllerGenReadResponseBody(v);
    });

/** @internal */
export type ConsoleV1UsersControllerGenReadResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1UsersControllerGenReadResponseBody$outboundSchema: z.ZodType<
    ConsoleV1UsersControllerGenReadResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsersControllerGenReadResponseBody
> = z
    .instanceof(ConsoleV1UsersControllerGenReadResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1UsersControllerGenReadStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerGenReadResponseBody$ {
    /** @deprecated use `ConsoleV1UsersControllerGenReadResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerGenReadResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerGenReadResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerGenReadResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1UsersControllerGenReadResponseBody$Outbound;
}