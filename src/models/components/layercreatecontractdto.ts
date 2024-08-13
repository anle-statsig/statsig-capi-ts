/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * List of target applications that this layer is associated with.
 */
export type LayerCreateContractDtoTargetApps = string | Array<string>;

export type LayerCreateContractDto = {
    /**
     * The unique name of the layer, formatted as an ID (e.g., "A Layer" becomes "a_layer").
     */
    name: string;
    /**
     * A helpful description of what this layer does, providing context for its purpose.
     */
    description?: string | undefined;
    /**
     * The type of ID used for this layer, essential for validation in services.
     */
    idType: string;
    /**
     * List of target applications that this layer is associated with.
     */
    targetApps?: string | Array<string> | undefined;
    /**
     * Optional identifier for the team responsible for this layer.
     */
    team?: string | undefined;
};

/** @internal */
export const LayerCreateContractDtoTargetApps$inboundSchema: z.ZodType<
    LayerCreateContractDtoTargetApps,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type LayerCreateContractDtoTargetApps$Outbound = string | Array<string>;

/** @internal */
export const LayerCreateContractDtoTargetApps$outboundSchema: z.ZodType<
    LayerCreateContractDtoTargetApps$Outbound,
    z.ZodTypeDef,
    LayerCreateContractDtoTargetApps
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LayerCreateContractDtoTargetApps$ {
    /** @deprecated use `LayerCreateContractDtoTargetApps$inboundSchema` instead. */
    export const inboundSchema = LayerCreateContractDtoTargetApps$inboundSchema;
    /** @deprecated use `LayerCreateContractDtoTargetApps$outboundSchema` instead. */
    export const outboundSchema = LayerCreateContractDtoTargetApps$outboundSchema;
    /** @deprecated use `LayerCreateContractDtoTargetApps$Outbound` instead. */
    export type Outbound = LayerCreateContractDtoTargetApps$Outbound;
}

/** @internal */
export const LayerCreateContractDto$inboundSchema: z.ZodType<
    LayerCreateContractDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    description: z.string().optional(),
    idType: z.string(),
    targetApps: z.union([z.string(), z.array(z.string())]).optional(),
    team: z.string().optional(),
});

/** @internal */
export type LayerCreateContractDto$Outbound = {
    name: string;
    description?: string | undefined;
    idType: string;
    targetApps?: string | Array<string> | undefined;
    team?: string | undefined;
};

/** @internal */
export const LayerCreateContractDto$outboundSchema: z.ZodType<
    LayerCreateContractDto$Outbound,
    z.ZodTypeDef,
    LayerCreateContractDto
> = z.object({
    name: z.string(),
    description: z.string().optional(),
    idType: z.string(),
    targetApps: z.union([z.string(), z.array(z.string())]).optional(),
    team: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LayerCreateContractDto$ {
    /** @deprecated use `LayerCreateContractDto$inboundSchema` instead. */
    export const inboundSchema = LayerCreateContractDto$inboundSchema;
    /** @deprecated use `LayerCreateContractDto$outboundSchema` instead. */
    export const outboundSchema = LayerCreateContractDto$outboundSchema;
    /** @deprecated use `LayerCreateContractDto$Outbound` instead. */
    export type Outbound = LayerCreateContractDto$Outbound;
}