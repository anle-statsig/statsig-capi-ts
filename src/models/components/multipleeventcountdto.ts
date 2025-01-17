/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type Events = {
    event: string;
    count: number;
    lastUpdatedTime: Date;
};

export type MultipleEventCountDto = {
    date: string;
    events: Array<Events>;
};

/** @internal */
export const Events$inboundSchema: z.ZodType<Events, z.ZodTypeDef, unknown> = z
    .object({
        event: z.string(),
        count: z.number(),
        last_updated_time: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
    })
    .transform((v) => {
        return remap$(v, {
            last_updated_time: "lastUpdatedTime",
        });
    });

/** @internal */
export type Events$Outbound = {
    event: string;
    count: number;
    last_updated_time: string;
};

/** @internal */
export const Events$outboundSchema: z.ZodType<Events$Outbound, z.ZodTypeDef, Events> = z
    .object({
        event: z.string(),
        count: z.number(),
        lastUpdatedTime: z.date().transform((v) => v.toISOString()),
    })
    .transform((v) => {
        return remap$(v, {
            lastUpdatedTime: "last_updated_time",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Events$ {
    /** @deprecated use `Events$inboundSchema` instead. */
    export const inboundSchema = Events$inboundSchema;
    /** @deprecated use `Events$outboundSchema` instead. */
    export const outboundSchema = Events$outboundSchema;
    /** @deprecated use `Events$Outbound` instead. */
    export type Outbound = Events$Outbound;
}

/** @internal */
export const MultipleEventCountDto$inboundSchema: z.ZodType<
    MultipleEventCountDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    date: z.string(),
    events: z.array(z.lazy(() => Events$inboundSchema)),
});

/** @internal */
export type MultipleEventCountDto$Outbound = {
    date: string;
    events: Array<Events$Outbound>;
};

/** @internal */
export const MultipleEventCountDto$outboundSchema: z.ZodType<
    MultipleEventCountDto$Outbound,
    z.ZodTypeDef,
    MultipleEventCountDto
> = z.object({
    date: z.string(),
    events: z.array(z.lazy(() => Events$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MultipleEventCountDto$ {
    /** @deprecated use `MultipleEventCountDto$inboundSchema` instead. */
    export const inboundSchema = MultipleEventCountDto$inboundSchema;
    /** @deprecated use `MultipleEventCountDto$outboundSchema` instead. */
    export const outboundSchema = MultipleEventCountDto$outboundSchema;
    /** @deprecated use `MultipleEventCountDto$Outbound` instead. */
    export type Outbound = MultipleEventCountDto$Outbound;
}
