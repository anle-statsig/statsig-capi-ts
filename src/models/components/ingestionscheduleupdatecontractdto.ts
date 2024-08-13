/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const IngestionScheduleUpdateContractDtoDataset = {
    Events: "Events",
    Metrics: "Metrics",
    ExportExposures: "export_exposures",
    EntityProperties: "entity_properties",
} as const;
export type IngestionScheduleUpdateContractDtoDataset = ClosedEnum<
    typeof IngestionScheduleUpdateContractDtoDataset
>;

export type IngestionScheduleUpdateContractDto = {
    dataset: IngestionScheduleUpdateContractDtoDataset;
    scheduledHourPst?: number | undefined;
};

/** @internal */
export const IngestionScheduleUpdateContractDtoDataset$inboundSchema: z.ZodNativeEnum<
    typeof IngestionScheduleUpdateContractDtoDataset
> = z.nativeEnum(IngestionScheduleUpdateContractDtoDataset);

/** @internal */
export const IngestionScheduleUpdateContractDtoDataset$outboundSchema: z.ZodNativeEnum<
    typeof IngestionScheduleUpdateContractDtoDataset
> = IngestionScheduleUpdateContractDtoDataset$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngestionScheduleUpdateContractDtoDataset$ {
    /** @deprecated use `IngestionScheduleUpdateContractDtoDataset$inboundSchema` instead. */
    export const inboundSchema = IngestionScheduleUpdateContractDtoDataset$inboundSchema;
    /** @deprecated use `IngestionScheduleUpdateContractDtoDataset$outboundSchema` instead. */
    export const outboundSchema = IngestionScheduleUpdateContractDtoDataset$outboundSchema;
}

/** @internal */
export const IngestionScheduleUpdateContractDto$inboundSchema: z.ZodType<
    IngestionScheduleUpdateContractDto,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        dataset: IngestionScheduleUpdateContractDtoDataset$inboundSchema,
        scheduled_hour_pst: z.number().default(10),
    })
    .transform((v) => {
        return remap$(v, {
            scheduled_hour_pst: "scheduledHourPst",
        });
    });

/** @internal */
export type IngestionScheduleUpdateContractDto$Outbound = {
    dataset: string;
    scheduled_hour_pst: number;
};

/** @internal */
export const IngestionScheduleUpdateContractDto$outboundSchema: z.ZodType<
    IngestionScheduleUpdateContractDto$Outbound,
    z.ZodTypeDef,
    IngestionScheduleUpdateContractDto
> = z
    .object({
        dataset: IngestionScheduleUpdateContractDtoDataset$outboundSchema,
        scheduledHourPst: z.number().default(10),
    })
    .transform((v) => {
        return remap$(v, {
            scheduledHourPst: "scheduled_hour_pst",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngestionScheduleUpdateContractDto$ {
    /** @deprecated use `IngestionScheduleUpdateContractDto$inboundSchema` instead. */
    export const inboundSchema = IngestionScheduleUpdateContractDto$inboundSchema;
    /** @deprecated use `IngestionScheduleUpdateContractDto$outboundSchema` instead. */
    export const outboundSchema = IngestionScheduleUpdateContractDto$outboundSchema;
    /** @deprecated use `IngestionScheduleUpdateContractDto$Outbound` instead. */
    export type Outbound = IngestionScheduleUpdateContractDto$Outbound;
}