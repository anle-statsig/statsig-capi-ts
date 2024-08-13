/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const KeyCreateContractDtoType = {
    Server: "SERVER",
    Client: "CLIENT",
    Console: "CONSOLE",
} as const;
export type KeyCreateContractDtoType = ClosedEnum<typeof KeyCreateContractDtoType>;

export const KeyCreateContractDtoScopes = {
    OmniReadOnly: "omni_read_only",
    OmniReadWrite: "omni_read_write",
    ClientDownloadConfigSpecs: "client_download_config_specs",
    NoneHashEnabled: "none_hash_enabled",
    CanAccessKeys: "can_access_keys",
} as const;
export type KeyCreateContractDtoScopes = ClosedEnum<typeof KeyCreateContractDtoScopes>;

export type KeyCreateContractDto = {
    description: string;
    type: KeyCreateContractDtoType;
    scopes?: Array<KeyCreateContractDtoScopes> | undefined;
    environments?: Array<string> | undefined;
    targetAppID?: string | undefined;
    secondaryTargetAppIDs?: Array<string> | undefined;
};

/** @internal */
export const KeyCreateContractDtoType$inboundSchema: z.ZodNativeEnum<
    typeof KeyCreateContractDtoType
> = z.nativeEnum(KeyCreateContractDtoType);

/** @internal */
export const KeyCreateContractDtoType$outboundSchema: z.ZodNativeEnum<
    typeof KeyCreateContractDtoType
> = KeyCreateContractDtoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KeyCreateContractDtoType$ {
    /** @deprecated use `KeyCreateContractDtoType$inboundSchema` instead. */
    export const inboundSchema = KeyCreateContractDtoType$inboundSchema;
    /** @deprecated use `KeyCreateContractDtoType$outboundSchema` instead. */
    export const outboundSchema = KeyCreateContractDtoType$outboundSchema;
}

/** @internal */
export const KeyCreateContractDtoScopes$inboundSchema: z.ZodNativeEnum<
    typeof KeyCreateContractDtoScopes
> = z.nativeEnum(KeyCreateContractDtoScopes);

/** @internal */
export const KeyCreateContractDtoScopes$outboundSchema: z.ZodNativeEnum<
    typeof KeyCreateContractDtoScopes
> = KeyCreateContractDtoScopes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KeyCreateContractDtoScopes$ {
    /** @deprecated use `KeyCreateContractDtoScopes$inboundSchema` instead. */
    export const inboundSchema = KeyCreateContractDtoScopes$inboundSchema;
    /** @deprecated use `KeyCreateContractDtoScopes$outboundSchema` instead. */
    export const outboundSchema = KeyCreateContractDtoScopes$outboundSchema;
}

/** @internal */
export const KeyCreateContractDto$inboundSchema: z.ZodType<
    KeyCreateContractDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    description: z.string(),
    type: KeyCreateContractDtoType$inboundSchema,
    scopes: z.array(KeyCreateContractDtoScopes$inboundSchema).optional(),
    environments: z.array(z.string()).optional(),
    targetAppID: z.string().optional(),
    secondaryTargetAppIDs: z.array(z.string()).optional(),
});

/** @internal */
export type KeyCreateContractDto$Outbound = {
    description: string;
    type: string;
    scopes?: Array<string> | undefined;
    environments?: Array<string> | undefined;
    targetAppID?: string | undefined;
    secondaryTargetAppIDs?: Array<string> | undefined;
};

/** @internal */
export const KeyCreateContractDto$outboundSchema: z.ZodType<
    KeyCreateContractDto$Outbound,
    z.ZodTypeDef,
    KeyCreateContractDto
> = z.object({
    description: z.string(),
    type: KeyCreateContractDtoType$outboundSchema,
    scopes: z.array(KeyCreateContractDtoScopes$outboundSchema).optional(),
    environments: z.array(z.string()).optional(),
    targetAppID: z.string().optional(),
    secondaryTargetAppIDs: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KeyCreateContractDto$ {
    /** @deprecated use `KeyCreateContractDto$inboundSchema` instead. */
    export const inboundSchema = KeyCreateContractDto$inboundSchema;
    /** @deprecated use `KeyCreateContractDto$outboundSchema` instead. */
    export const outboundSchema = KeyCreateContractDto$outboundSchema;
    /** @deprecated use `KeyCreateContractDto$Outbound` instead. */
    export type Outbound = KeyCreateContractDto$Outbound;
}