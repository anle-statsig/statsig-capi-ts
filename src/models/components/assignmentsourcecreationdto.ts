/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type AssignmentSourceCreationDtoIdTypeMapping = {
    /**
     * ID for the Statsig unit.
     */
    statsigUnitID: string;
    /**
     * Column name associated with the ID type mapping.
     */
    column: string;
};

export type AssignmentSourceCreationDto = {
    /**
     * Unique identifier for the assignment source.
     */
    name: string;
    /**
     * Optional detailed context for the assignment source.
     */
    description?: string | undefined;
    /**
     * Marks the assignment source as verified for internal trustworthiness.
     */
    isVerified?: boolean | undefined;
    /**
     * Optional tags for categorization.
     */
    tags?: Array<string> | undefined;
    /**
     * SQL query defining the data source for assignments.
     */
    sql: string;
    /**
     * Column name representing the timestamp of assignments.
     */
    timestampColumn: string;
    /**
     * Column name for the experiment ID associated with the assignments.
     */
    experimentIDColumn: string;
    /**
     * Column name for the group ID linked to the assignments.
     */
    groupIDColumn: string;
    /**
     * Mappings of Statsig units to their respective columns.
     */
    idTypeMapping: Array<AssignmentSourceCreationDtoIdTypeMapping>;
};

/** @internal */
export const AssignmentSourceCreationDtoIdTypeMapping$inboundSchema: z.ZodType<
    AssignmentSourceCreationDtoIdTypeMapping,
    z.ZodTypeDef,
    unknown
> = z.object({
    statsigUnitID: z.string(),
    column: z.string(),
});

/** @internal */
export type AssignmentSourceCreationDtoIdTypeMapping$Outbound = {
    statsigUnitID: string;
    column: string;
};

/** @internal */
export const AssignmentSourceCreationDtoIdTypeMapping$outboundSchema: z.ZodType<
    AssignmentSourceCreationDtoIdTypeMapping$Outbound,
    z.ZodTypeDef,
    AssignmentSourceCreationDtoIdTypeMapping
> = z.object({
    statsigUnitID: z.string(),
    column: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssignmentSourceCreationDtoIdTypeMapping$ {
    /** @deprecated use `AssignmentSourceCreationDtoIdTypeMapping$inboundSchema` instead. */
    export const inboundSchema = AssignmentSourceCreationDtoIdTypeMapping$inboundSchema;
    /** @deprecated use `AssignmentSourceCreationDtoIdTypeMapping$outboundSchema` instead. */
    export const outboundSchema = AssignmentSourceCreationDtoIdTypeMapping$outboundSchema;
    /** @deprecated use `AssignmentSourceCreationDtoIdTypeMapping$Outbound` instead. */
    export type Outbound = AssignmentSourceCreationDtoIdTypeMapping$Outbound;
}

/** @internal */
export const AssignmentSourceCreationDto$inboundSchema: z.ZodType<
    AssignmentSourceCreationDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    description: z.string().optional(),
    isVerified: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    sql: z.string(),
    timestampColumn: z.string(),
    experimentIDColumn: z.string(),
    groupIDColumn: z.string(),
    idTypeMapping: z.array(z.lazy(() => AssignmentSourceCreationDtoIdTypeMapping$inboundSchema)),
});

/** @internal */
export type AssignmentSourceCreationDto$Outbound = {
    name: string;
    description?: string | undefined;
    isVerified?: boolean | undefined;
    tags?: Array<string> | undefined;
    sql: string;
    timestampColumn: string;
    experimentIDColumn: string;
    groupIDColumn: string;
    idTypeMapping: Array<AssignmentSourceCreationDtoIdTypeMapping$Outbound>;
};

/** @internal */
export const AssignmentSourceCreationDto$outboundSchema: z.ZodType<
    AssignmentSourceCreationDto$Outbound,
    z.ZodTypeDef,
    AssignmentSourceCreationDto
> = z.object({
    name: z.string(),
    description: z.string().optional(),
    isVerified: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    sql: z.string(),
    timestampColumn: z.string(),
    experimentIDColumn: z.string(),
    groupIDColumn: z.string(),
    idTypeMapping: z.array(z.lazy(() => AssignmentSourceCreationDtoIdTypeMapping$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssignmentSourceCreationDto$ {
    /** @deprecated use `AssignmentSourceCreationDto$inboundSchema` instead. */
    export const inboundSchema = AssignmentSourceCreationDto$inboundSchema;
    /** @deprecated use `AssignmentSourceCreationDto$outboundSchema` instead. */
    export const outboundSchema = AssignmentSourceCreationDto$outboundSchema;
    /** @deprecated use `AssignmentSourceCreationDto$Outbound` instead. */
    export type Outbound = AssignmentSourceCreationDto$Outbound;
}