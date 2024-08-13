/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus = {
    FourHundredAndThree: 403,
} as const;
export type ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus = ClosedEnum<
    typeof ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus
>;

/**
 * Forbidden. The request was valid, but the server is refusing action. You might not have the necessary permissions to access the resource.
 */
export type ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBodyData = {
    status: ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus;
    message: string;
};

/**
 * Forbidden. The request was valid, but the server is refusing action. You might not have the necessary permissions to access the resource.
 */
export class ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody extends Error {
    status: ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBodyData;

    constructor(
        err: ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBodyData
    ) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name =
            "ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody";
    }
}

export const ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus = ClosedEnum<
    typeof ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBodyData = {
    status: ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody extends Error {
    status: ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBodyData;

    constructor(err: ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody";
    }
}

export const ConsoleV1DynamicConfigControllerGenFullUpdateStatus = {
    FourHundred: 400,
} as const;
export type ConsoleV1DynamicConfigControllerGenFullUpdateStatus = ClosedEnum<
    typeof ConsoleV1DynamicConfigControllerGenFullUpdateStatus
>;

/**
 * Invalid request. Please check the request input and try again.
 */
export type ConsoleV1DynamicConfigControllerGenFullUpdateResponseBodyData = {
    status: ConsoleV1DynamicConfigControllerGenFullUpdateStatus;
    message: string;
};

/**
 * Invalid request. Please check the request input and try again.
 */
export class ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody extends Error {
    status: ConsoleV1DynamicConfigControllerGenFullUpdateStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1DynamicConfigControllerGenFullUpdateResponseBodyData;

    constructor(err: ConsoleV1DynamicConfigControllerGenFullUpdateResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody";
    }
}

/** @internal */
export const ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus
> = z.nativeEnum(ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus);

/** @internal */
export const ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus
> = ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody$inboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody(
            v
        );
    });

/** @internal */
export type ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody$Outbound =
    {
        status: number;
        message: string;
    };

/** @internal */
export const ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody$outboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody
> = z
    .instanceof(ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus
> = z.nativeEnum(ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus);

/** @internal */
export const ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus
> = ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody$inboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody(v);
    });

/** @internal */
export type ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody$outboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody
> = z
    .instanceof(ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1DynamicConfigControllerGenFullUpdateDynamicConfigsResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1DynamicConfigControllerGenFullUpdateStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1DynamicConfigControllerGenFullUpdateStatus
> = z.nativeEnum(ConsoleV1DynamicConfigControllerGenFullUpdateStatus);

/** @internal */
export const ConsoleV1DynamicConfigControllerGenFullUpdateStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1DynamicConfigControllerGenFullUpdateStatus
> = ConsoleV1DynamicConfigControllerGenFullUpdateStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenFullUpdateStatus$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenFullUpdateStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1DynamicConfigControllerGenFullUpdateStatus$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenFullUpdateStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenFullUpdateStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody$inboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1DynamicConfigControllerGenFullUpdateStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody(v);
    });

/** @internal */
export type ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody$outboundSchema: z.ZodType<
    ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody
> = z
    .instanceof(ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1DynamicConfigControllerGenFullUpdateStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody$ {
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1DynamicConfigControllerGenFullUpdateResponseBody$Outbound;
}
