/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type TagDto = {
    /**
     * id of the tag
     */
    id: string;
    /**
     * name of the tag
     */
    name: string;
    /**
     * description of the tag
     */
    description: string;
    /**
     * is this a core tag
     */
    isCore: boolean;
};

/** @internal */
export const TagDto$inboundSchema: z.ZodType<TagDto, z.ZodTypeDef, unknown> = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    isCore: z.boolean(),
});

/** @internal */
export type TagDto$Outbound = {
    id: string;
    name: string;
    description: string;
    isCore: boolean;
};

/** @internal */
export const TagDto$outboundSchema: z.ZodType<TagDto$Outbound, z.ZodTypeDef, TagDto> = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    isCore: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TagDto$ {
    /** @deprecated use `TagDto$inboundSchema` instead. */
    export const inboundSchema = TagDto$inboundSchema;
    /** @deprecated use `TagDto$outboundSchema` instead. */
    export const outboundSchema = TagDto$outboundSchema;
    /** @deprecated use `TagDto$Outbound` instead. */
    export type Outbound = TagDto$Outbound;
}
