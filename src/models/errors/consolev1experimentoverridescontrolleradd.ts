/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1ExperimentOverridesControllerAddExperimentsStatus = {
    FourHundredAndFour: 404,
} as const;
export type ConsoleV1ExperimentOverridesControllerAddExperimentsStatus = ClosedEnum<
    typeof ConsoleV1ExperimentOverridesControllerAddExperimentsStatus
>;

/**
 * Experiment not found.
 */
export type ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBodyData = {
    status: ConsoleV1ExperimentOverridesControllerAddExperimentsStatus;
    message: string;
};

/**
 * Experiment not found.
 */
export class ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody extends Error {
    status: ConsoleV1ExperimentOverridesControllerAddExperimentsStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBodyData;

    constructor(err: ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody";
    }
}

export const ConsoleV1ExperimentOverridesControllerAddStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1ExperimentOverridesControllerAddStatus = ClosedEnum<
    typeof ConsoleV1ExperimentOverridesControllerAddStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1ExperimentOverridesControllerAddResponseBodyData = {
    status: ConsoleV1ExperimentOverridesControllerAddStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1ExperimentOverridesControllerAddResponseBody extends Error {
    status: ConsoleV1ExperimentOverridesControllerAddStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1ExperimentOverridesControllerAddResponseBodyData;

    constructor(err: ConsoleV1ExperimentOverridesControllerAddResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1ExperimentOverridesControllerAddResponseBody";
    }
}

/** @internal */
export const ConsoleV1ExperimentOverridesControllerAddExperimentsStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ExperimentOverridesControllerAddExperimentsStatus
> = z.nativeEnum(ConsoleV1ExperimentOverridesControllerAddExperimentsStatus);

/** @internal */
export const ConsoleV1ExperimentOverridesControllerAddExperimentsStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ExperimentOverridesControllerAddExperimentsStatus
> = ConsoleV1ExperimentOverridesControllerAddExperimentsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentOverridesControllerAddExperimentsStatus$ {
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerAddExperimentsStatus$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1ExperimentOverridesControllerAddExperimentsStatus$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerAddExperimentsStatus$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentOverridesControllerAddExperimentsStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody$inboundSchema: z.ZodType<
    ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1ExperimentOverridesControllerAddExperimentsStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody(v);
    });

/** @internal */
export type ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody$outboundSchema: z.ZodType<
    ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody
> = z
    .instanceof(ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1ExperimentOverridesControllerAddExperimentsStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody$ {
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody$Outbound` instead. */
    export type Outbound =
        ConsoleV1ExperimentOverridesControllerAddExperimentsResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1ExperimentOverridesControllerAddStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ExperimentOverridesControllerAddStatus
> = z.nativeEnum(ConsoleV1ExperimentOverridesControllerAddStatus);

/** @internal */
export const ConsoleV1ExperimentOverridesControllerAddStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ExperimentOverridesControllerAddStatus
> = ConsoleV1ExperimentOverridesControllerAddStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentOverridesControllerAddStatus$ {
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerAddStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ExperimentOverridesControllerAddStatus$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerAddStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1ExperimentOverridesControllerAddStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1ExperimentOverridesControllerAddResponseBody$inboundSchema: z.ZodType<
    ConsoleV1ExperimentOverridesControllerAddResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1ExperimentOverridesControllerAddStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1ExperimentOverridesControllerAddResponseBody(v);
    });

/** @internal */
export type ConsoleV1ExperimentOverridesControllerAddResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1ExperimentOverridesControllerAddResponseBody$outboundSchema: z.ZodType<
    ConsoleV1ExperimentOverridesControllerAddResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1ExperimentOverridesControllerAddResponseBody
> = z
    .instanceof(ConsoleV1ExperimentOverridesControllerAddResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1ExperimentOverridesControllerAddStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ExperimentOverridesControllerAddResponseBody$ {
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerAddResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1ExperimentOverridesControllerAddResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerAddResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ExperimentOverridesControllerAddResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1ExperimentOverridesControllerAddResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1ExperimentOverridesControllerAddResponseBody$Outbound;
}
