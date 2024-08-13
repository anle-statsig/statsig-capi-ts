/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1UsersControllerUpdateUsersResponse404Status = {
    FourHundredAndFour: 404,
} as const;
export type ConsoleV1UsersControllerUpdateUsersResponse404Status = ClosedEnum<
    typeof ConsoleV1UsersControllerUpdateUsersResponse404Status
>;

/**
 * Not Found. The requested resource could not be found.
 */
export type ConsoleV1UsersControllerUpdateUsersResponse404ResponseBodyData = {
    status: ConsoleV1UsersControllerUpdateUsersResponse404Status;
    message: string;
};

/**
 * Not Found. The requested resource could not be found.
 */
export class ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody extends Error {
    status: ConsoleV1UsersControllerUpdateUsersResponse404Status;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1UsersControllerUpdateUsersResponse404ResponseBodyData;

    constructor(err: ConsoleV1UsersControllerUpdateUsersResponse404ResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody";
    }
}

export const ConsoleV1UsersControllerUpdateUsersResponseStatus = {
    FourHundredAndThree: 403,
} as const;
export type ConsoleV1UsersControllerUpdateUsersResponseStatus = ClosedEnum<
    typeof ConsoleV1UsersControllerUpdateUsersResponseStatus
>;

/**
 * Forbidden. The request was valid, but the server is refusing action. You might not have the necessary permissions to access the resource.
 */
export type ConsoleV1UsersControllerUpdateUsersResponseResponseBodyData = {
    status: ConsoleV1UsersControllerUpdateUsersResponseStatus;
    message: string;
};

/**
 * Forbidden. The request was valid, but the server is refusing action. You might not have the necessary permissions to access the resource.
 */
export class ConsoleV1UsersControllerUpdateUsersResponseResponseBody extends Error {
    status: ConsoleV1UsersControllerUpdateUsersResponseStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1UsersControllerUpdateUsersResponseResponseBodyData;

    constructor(err: ConsoleV1UsersControllerUpdateUsersResponseResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1UsersControllerUpdateUsersResponseResponseBody";
    }
}

export const ConsoleV1UsersControllerUpdateUsersStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1UsersControllerUpdateUsersStatus = ClosedEnum<
    typeof ConsoleV1UsersControllerUpdateUsersStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1UsersControllerUpdateUsersResponseBodyData = {
    status: ConsoleV1UsersControllerUpdateUsersStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1UsersControllerUpdateUsersResponseBody extends Error {
    status: ConsoleV1UsersControllerUpdateUsersStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1UsersControllerUpdateUsersResponseBodyData;

    constructor(err: ConsoleV1UsersControllerUpdateUsersResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1UsersControllerUpdateUsersResponseBody";
    }
}

export const ConsoleV1UsersControllerUpdateStatus = {
    FourHundred: 400,
} as const;
export type ConsoleV1UsersControllerUpdateStatus = ClosedEnum<
    typeof ConsoleV1UsersControllerUpdateStatus
>;

/**
 * Invalid request. Please check the request input and try again.
 */
export type ConsoleV1UsersControllerUpdateResponseBodyData = {
    status: ConsoleV1UsersControllerUpdateStatus;
    message: string;
};

/**
 * Invalid request. Please check the request input and try again.
 */
export class ConsoleV1UsersControllerUpdateResponseBody extends Error {
    status: ConsoleV1UsersControllerUpdateStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1UsersControllerUpdateResponseBodyData;

    constructor(err: ConsoleV1UsersControllerUpdateResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1UsersControllerUpdateResponseBody";
    }
}

/** @internal */
export const ConsoleV1UsersControllerUpdateUsersResponse404Status$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1UsersControllerUpdateUsersResponse404Status
> = z.nativeEnum(ConsoleV1UsersControllerUpdateUsersResponse404Status);

/** @internal */
export const ConsoleV1UsersControllerUpdateUsersResponse404Status$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1UsersControllerUpdateUsersResponse404Status
> = ConsoleV1UsersControllerUpdateUsersResponse404Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerUpdateUsersResponse404Status$ {
    /** @deprecated use `ConsoleV1UsersControllerUpdateUsersResponse404Status$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerUpdateUsersResponse404Status$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerUpdateUsersResponse404Status$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1UsersControllerUpdateUsersResponse404Status$outboundSchema;
}

/** @internal */
export const ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody$inboundSchema: z.ZodType<
    ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1UsersControllerUpdateUsersResponse404Status$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody(v);
    });

/** @internal */
export type ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody$outboundSchema: z.ZodType<
    ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody
> = z
    .instanceof(ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1UsersControllerUpdateUsersResponse404Status$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody$ {
    /** @deprecated use `ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1UsersControllerUpdateUsersResponse404ResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1UsersControllerUpdateUsersResponseStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1UsersControllerUpdateUsersResponseStatus
> = z.nativeEnum(ConsoleV1UsersControllerUpdateUsersResponseStatus);

/** @internal */
export const ConsoleV1UsersControllerUpdateUsersResponseStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1UsersControllerUpdateUsersResponseStatus
> = ConsoleV1UsersControllerUpdateUsersResponseStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerUpdateUsersResponseStatus$ {
    /** @deprecated use `ConsoleV1UsersControllerUpdateUsersResponseStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerUpdateUsersResponseStatus$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerUpdateUsersResponseStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerUpdateUsersResponseStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1UsersControllerUpdateUsersResponseResponseBody$inboundSchema: z.ZodType<
    ConsoleV1UsersControllerUpdateUsersResponseResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1UsersControllerUpdateUsersResponseStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1UsersControllerUpdateUsersResponseResponseBody(v);
    });

/** @internal */
export type ConsoleV1UsersControllerUpdateUsersResponseResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1UsersControllerUpdateUsersResponseResponseBody$outboundSchema: z.ZodType<
    ConsoleV1UsersControllerUpdateUsersResponseResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsersControllerUpdateUsersResponseResponseBody
> = z
    .instanceof(ConsoleV1UsersControllerUpdateUsersResponseResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1UsersControllerUpdateUsersResponseStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerUpdateUsersResponseResponseBody$ {
    /** @deprecated use `ConsoleV1UsersControllerUpdateUsersResponseResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1UsersControllerUpdateUsersResponseResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerUpdateUsersResponseResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1UsersControllerUpdateUsersResponseResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerUpdateUsersResponseResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1UsersControllerUpdateUsersResponseResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1UsersControllerUpdateUsersStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1UsersControllerUpdateUsersStatus
> = z.nativeEnum(ConsoleV1UsersControllerUpdateUsersStatus);

/** @internal */
export const ConsoleV1UsersControllerUpdateUsersStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1UsersControllerUpdateUsersStatus
> = ConsoleV1UsersControllerUpdateUsersStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerUpdateUsersStatus$ {
    /** @deprecated use `ConsoleV1UsersControllerUpdateUsersStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerUpdateUsersStatus$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerUpdateUsersStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerUpdateUsersStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1UsersControllerUpdateUsersResponseBody$inboundSchema: z.ZodType<
    ConsoleV1UsersControllerUpdateUsersResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1UsersControllerUpdateUsersStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1UsersControllerUpdateUsersResponseBody(v);
    });

/** @internal */
export type ConsoleV1UsersControllerUpdateUsersResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1UsersControllerUpdateUsersResponseBody$outboundSchema: z.ZodType<
    ConsoleV1UsersControllerUpdateUsersResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsersControllerUpdateUsersResponseBody
> = z
    .instanceof(ConsoleV1UsersControllerUpdateUsersResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1UsersControllerUpdateUsersStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerUpdateUsersResponseBody$ {
    /** @deprecated use `ConsoleV1UsersControllerUpdateUsersResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerUpdateUsersResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerUpdateUsersResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerUpdateUsersResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerUpdateUsersResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1UsersControllerUpdateUsersResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1UsersControllerUpdateStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1UsersControllerUpdateStatus
> = z.nativeEnum(ConsoleV1UsersControllerUpdateStatus);

/** @internal */
export const ConsoleV1UsersControllerUpdateStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1UsersControllerUpdateStatus
> = ConsoleV1UsersControllerUpdateStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerUpdateStatus$ {
    /** @deprecated use `ConsoleV1UsersControllerUpdateStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerUpdateStatus$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerUpdateStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerUpdateStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1UsersControllerUpdateResponseBody$inboundSchema: z.ZodType<
    ConsoleV1UsersControllerUpdateResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1UsersControllerUpdateStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1UsersControllerUpdateResponseBody(v);
    });

/** @internal */
export type ConsoleV1UsersControllerUpdateResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1UsersControllerUpdateResponseBody$outboundSchema: z.ZodType<
    ConsoleV1UsersControllerUpdateResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1UsersControllerUpdateResponseBody
> = z
    .instanceof(ConsoleV1UsersControllerUpdateResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1UsersControllerUpdateStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1UsersControllerUpdateResponseBody$ {
    /** @deprecated use `ConsoleV1UsersControllerUpdateResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1UsersControllerUpdateResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerUpdateResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1UsersControllerUpdateResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1UsersControllerUpdateResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1UsersControllerUpdateResponseBody$Outbound;
}