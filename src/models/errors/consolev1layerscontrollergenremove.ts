/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1LayersControllerGenRemoveLayersResponseStatus = {
    FourHundredAndFour: 404,
} as const;
export type ConsoleV1LayersControllerGenRemoveLayersResponseStatus = ClosedEnum<
    typeof ConsoleV1LayersControllerGenRemoveLayersResponseStatus
>;

/**
 * Not Found. The requested resource could not be found.
 */
export type ConsoleV1LayersControllerGenRemoveLayersResponseResponseBodyData = {
    status: ConsoleV1LayersControllerGenRemoveLayersResponseStatus;
    message: string;
};

/**
 * Not Found. The requested resource could not be found.
 */
export class ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody extends Error {
    status: ConsoleV1LayersControllerGenRemoveLayersResponseStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1LayersControllerGenRemoveLayersResponseResponseBodyData;

    constructor(err: ConsoleV1LayersControllerGenRemoveLayersResponseResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody";
    }
}

export const ConsoleV1LayersControllerGenRemoveLayersStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1LayersControllerGenRemoveLayersStatus = ClosedEnum<
    typeof ConsoleV1LayersControllerGenRemoveLayersStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1LayersControllerGenRemoveLayersResponseBodyData = {
    status: ConsoleV1LayersControllerGenRemoveLayersStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1LayersControllerGenRemoveLayersResponseBody extends Error {
    status: ConsoleV1LayersControllerGenRemoveLayersStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1LayersControllerGenRemoveLayersResponseBodyData;

    constructor(err: ConsoleV1LayersControllerGenRemoveLayersResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1LayersControllerGenRemoveLayersResponseBody";
    }
}

export const ConsoleV1LayersControllerGenRemoveStatus = {
    FourHundred: 400,
} as const;
export type ConsoleV1LayersControllerGenRemoveStatus = ClosedEnum<
    typeof ConsoleV1LayersControllerGenRemoveStatus
>;

/**
 * Invalid request. Please check the request input and try again.
 */
export type ConsoleV1LayersControllerGenRemoveResponseBodyData = {
    status: ConsoleV1LayersControllerGenRemoveStatus;
    message: string;
};

/**
 * Invalid request. Please check the request input and try again.
 */
export class ConsoleV1LayersControllerGenRemoveResponseBody extends Error {
    status: ConsoleV1LayersControllerGenRemoveStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1LayersControllerGenRemoveResponseBodyData;

    constructor(err: ConsoleV1LayersControllerGenRemoveResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1LayersControllerGenRemoveResponseBody";
    }
}

/** @internal */
export const ConsoleV1LayersControllerGenRemoveLayersResponseStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1LayersControllerGenRemoveLayersResponseStatus
> = z.nativeEnum(ConsoleV1LayersControllerGenRemoveLayersResponseStatus);

/** @internal */
export const ConsoleV1LayersControllerGenRemoveLayersResponseStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1LayersControllerGenRemoveLayersResponseStatus
> = ConsoleV1LayersControllerGenRemoveLayersResponseStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1LayersControllerGenRemoveLayersResponseStatus$ {
    /** @deprecated use `ConsoleV1LayersControllerGenRemoveLayersResponseStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1LayersControllerGenRemoveLayersResponseStatus$inboundSchema;
    /** @deprecated use `ConsoleV1LayersControllerGenRemoveLayersResponseStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1LayersControllerGenRemoveLayersResponseStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody$inboundSchema: z.ZodType<
    ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1LayersControllerGenRemoveLayersResponseStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody(v);
    });

/** @internal */
export type ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody$outboundSchema: z.ZodType<
    ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody
> = z
    .instanceof(ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1LayersControllerGenRemoveLayersResponseStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody$ {
    /** @deprecated use `ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1LayersControllerGenRemoveLayersResponseResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1LayersControllerGenRemoveLayersStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1LayersControllerGenRemoveLayersStatus
> = z.nativeEnum(ConsoleV1LayersControllerGenRemoveLayersStatus);

/** @internal */
export const ConsoleV1LayersControllerGenRemoveLayersStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1LayersControllerGenRemoveLayersStatus
> = ConsoleV1LayersControllerGenRemoveLayersStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1LayersControllerGenRemoveLayersStatus$ {
    /** @deprecated use `ConsoleV1LayersControllerGenRemoveLayersStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1LayersControllerGenRemoveLayersStatus$inboundSchema;
    /** @deprecated use `ConsoleV1LayersControllerGenRemoveLayersStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1LayersControllerGenRemoveLayersStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1LayersControllerGenRemoveLayersResponseBody$inboundSchema: z.ZodType<
    ConsoleV1LayersControllerGenRemoveLayersResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1LayersControllerGenRemoveLayersStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1LayersControllerGenRemoveLayersResponseBody(v);
    });

/** @internal */
export type ConsoleV1LayersControllerGenRemoveLayersResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1LayersControllerGenRemoveLayersResponseBody$outboundSchema: z.ZodType<
    ConsoleV1LayersControllerGenRemoveLayersResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1LayersControllerGenRemoveLayersResponseBody
> = z
    .instanceof(ConsoleV1LayersControllerGenRemoveLayersResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1LayersControllerGenRemoveLayersStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1LayersControllerGenRemoveLayersResponseBody$ {
    /** @deprecated use `ConsoleV1LayersControllerGenRemoveLayersResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1LayersControllerGenRemoveLayersResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1LayersControllerGenRemoveLayersResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1LayersControllerGenRemoveLayersResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1LayersControllerGenRemoveLayersResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1LayersControllerGenRemoveLayersResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1LayersControllerGenRemoveStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1LayersControllerGenRemoveStatus
> = z.nativeEnum(ConsoleV1LayersControllerGenRemoveStatus);

/** @internal */
export const ConsoleV1LayersControllerGenRemoveStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1LayersControllerGenRemoveStatus
> = ConsoleV1LayersControllerGenRemoveStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1LayersControllerGenRemoveStatus$ {
    /** @deprecated use `ConsoleV1LayersControllerGenRemoveStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1LayersControllerGenRemoveStatus$inboundSchema;
    /** @deprecated use `ConsoleV1LayersControllerGenRemoveStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1LayersControllerGenRemoveStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1LayersControllerGenRemoveResponseBody$inboundSchema: z.ZodType<
    ConsoleV1LayersControllerGenRemoveResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1LayersControllerGenRemoveStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1LayersControllerGenRemoveResponseBody(v);
    });

/** @internal */
export type ConsoleV1LayersControllerGenRemoveResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1LayersControllerGenRemoveResponseBody$outboundSchema: z.ZodType<
    ConsoleV1LayersControllerGenRemoveResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1LayersControllerGenRemoveResponseBody
> = z
    .instanceof(ConsoleV1LayersControllerGenRemoveResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1LayersControllerGenRemoveStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1LayersControllerGenRemoveResponseBody$ {
    /** @deprecated use `ConsoleV1LayersControllerGenRemoveResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1LayersControllerGenRemoveResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1LayersControllerGenRemoveResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1LayersControllerGenRemoveResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1LayersControllerGenRemoveResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1LayersControllerGenRemoveResponseBody$Outbound;
}
