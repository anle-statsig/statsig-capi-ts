/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const ConsoleV1ReportsControllerGenReportReportsStatus = {
    FourHundredAndOne: 401,
} as const;
export type ConsoleV1ReportsControllerGenReportReportsStatus = ClosedEnum<
    typeof ConsoleV1ReportsControllerGenReportReportsStatus
>;

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export type ConsoleV1ReportsControllerGenReportReportsResponseBodyData = {
    status: ConsoleV1ReportsControllerGenReportReportsStatus;
    message: string;
};

/**
 * This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx
 */
export class ConsoleV1ReportsControllerGenReportReportsResponseBody extends Error {
    status: ConsoleV1ReportsControllerGenReportReportsStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1ReportsControllerGenReportReportsResponseBodyData;

    constructor(err: ConsoleV1ReportsControllerGenReportReportsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1ReportsControllerGenReportReportsResponseBody";
    }
}

export const ConsoleV1ReportsControllerGenReportStatus = {
    FourHundred: 400,
} as const;
export type ConsoleV1ReportsControllerGenReportStatus = ClosedEnum<
    typeof ConsoleV1ReportsControllerGenReportStatus
>;

/**
 * Data is not available
 */
export type ConsoleV1ReportsControllerGenReportResponseBodyData = {
    status: ConsoleV1ReportsControllerGenReportStatus;
    message: string;
};

/**
 * Data is not available
 */
export class ConsoleV1ReportsControllerGenReportResponseBody extends Error {
    status: ConsoleV1ReportsControllerGenReportStatus;

    /** The original data that was passed to this error instance. */
    data$: ConsoleV1ReportsControllerGenReportResponseBodyData;

    constructor(err: ConsoleV1ReportsControllerGenReportResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.status = err.status;

        this.name = "ConsoleV1ReportsControllerGenReportResponseBody";
    }
}

/** @internal */
export const ConsoleV1ReportsControllerGenReportReportsStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ReportsControllerGenReportReportsStatus
> = z.nativeEnum(ConsoleV1ReportsControllerGenReportReportsStatus);

/** @internal */
export const ConsoleV1ReportsControllerGenReportReportsStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ReportsControllerGenReportReportsStatus
> = ConsoleV1ReportsControllerGenReportReportsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ReportsControllerGenReportReportsStatus$ {
    /** @deprecated use `ConsoleV1ReportsControllerGenReportReportsStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ReportsControllerGenReportReportsStatus$inboundSchema;
    /** @deprecated use `ConsoleV1ReportsControllerGenReportReportsStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1ReportsControllerGenReportReportsStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1ReportsControllerGenReportReportsResponseBody$inboundSchema: z.ZodType<
    ConsoleV1ReportsControllerGenReportReportsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1ReportsControllerGenReportReportsStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1ReportsControllerGenReportReportsResponseBody(v);
    });

/** @internal */
export type ConsoleV1ReportsControllerGenReportReportsResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1ReportsControllerGenReportReportsResponseBody$outboundSchema: z.ZodType<
    ConsoleV1ReportsControllerGenReportReportsResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1ReportsControllerGenReportReportsResponseBody
> = z
    .instanceof(ConsoleV1ReportsControllerGenReportReportsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1ReportsControllerGenReportReportsStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ReportsControllerGenReportReportsResponseBody$ {
    /** @deprecated use `ConsoleV1ReportsControllerGenReportReportsResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1ReportsControllerGenReportReportsResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1ReportsControllerGenReportReportsResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1ReportsControllerGenReportReportsResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1ReportsControllerGenReportReportsResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1ReportsControllerGenReportReportsResponseBody$Outbound;
}

/** @internal */
export const ConsoleV1ReportsControllerGenReportStatus$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ReportsControllerGenReportStatus
> = z.nativeEnum(ConsoleV1ReportsControllerGenReportStatus);

/** @internal */
export const ConsoleV1ReportsControllerGenReportStatus$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1ReportsControllerGenReportStatus
> = ConsoleV1ReportsControllerGenReportStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ReportsControllerGenReportStatus$ {
    /** @deprecated use `ConsoleV1ReportsControllerGenReportStatus$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ReportsControllerGenReportStatus$inboundSchema;
    /** @deprecated use `ConsoleV1ReportsControllerGenReportStatus$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1ReportsControllerGenReportStatus$outboundSchema;
}

/** @internal */
export const ConsoleV1ReportsControllerGenReportResponseBody$inboundSchema: z.ZodType<
    ConsoleV1ReportsControllerGenReportResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: ConsoleV1ReportsControllerGenReportStatus$inboundSchema,
        message: z.string(),
    })
    .transform((v) => {
        return new ConsoleV1ReportsControllerGenReportResponseBody(v);
    });

/** @internal */
export type ConsoleV1ReportsControllerGenReportResponseBody$Outbound = {
    status: number;
    message: string;
};

/** @internal */
export const ConsoleV1ReportsControllerGenReportResponseBody$outboundSchema: z.ZodType<
    ConsoleV1ReportsControllerGenReportResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1ReportsControllerGenReportResponseBody
> = z
    .instanceof(ConsoleV1ReportsControllerGenReportResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: ConsoleV1ReportsControllerGenReportStatus$outboundSchema,
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1ReportsControllerGenReportResponseBody$ {
    /** @deprecated use `ConsoleV1ReportsControllerGenReportResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1ReportsControllerGenReportResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1ReportsControllerGenReportResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1ReportsControllerGenReportResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1ReportsControllerGenReportResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1ReportsControllerGenReportResponseBody$Outbound;
}
