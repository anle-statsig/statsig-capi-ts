/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type HoldoutCreateContractDto = {
    /**
     * name of the holdout
     */
    name: string;
    /**
     * description of the holdout
     */
    description?: string | undefined;
    /**
     * type of id
     */
    idType?: string | undefined;
    /**
     * id of the team
     */
    teamID?: any | null | undefined;
};

/** @internal */
export const HoldoutCreateContractDto$inboundSchema: z.ZodType<
    HoldoutCreateContractDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    description: z.string().optional(),
    idType: z.string().optional(),
    teamID: z.nullable(z.any()).optional(),
});

/** @internal */
export type HoldoutCreateContractDto$Outbound = {
    name: string;
    description?: string | undefined;
    idType?: string | undefined;
    teamID?: any | null | undefined;
};

/** @internal */
export const HoldoutCreateContractDto$outboundSchema: z.ZodType<
    HoldoutCreateContractDto$Outbound,
    z.ZodTypeDef,
    HoldoutCreateContractDto
> = z.object({
    name: z.string(),
    description: z.string().optional(),
    idType: z.string().optional(),
    teamID: z.nullable(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HoldoutCreateContractDto$ {
    /** @deprecated use `HoldoutCreateContractDto$inboundSchema` instead. */
    export const inboundSchema = HoldoutCreateContractDto$inboundSchema;
    /** @deprecated use `HoldoutCreateContractDto$outboundSchema` instead. */
    export const outboundSchema = HoldoutCreateContractDto$outboundSchema;
    /** @deprecated use `HoldoutCreateContractDto$Outbound` instead. */
    export type Outbound = HoldoutCreateContractDto$Outbound;
}