/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const KeyDtoType = {
    Server: "SERVER",
    Client: "CLIENT",
    Console: "CONSOLE",
} as const;
export type KeyDtoType = ClosedEnum<typeof KeyDtoType>;

export const Scopes = {
    OmniReadOnly: "omni_read_only",
    OmniReadWrite: "omni_read_write",
    ClientDownloadConfigSpecs: "client_download_config_specs",
    NoneHashEnabled: "none_hash_enabled",
    CanAccessKeys: "can_access_keys",
} as const;
export type Scopes = ClosedEnum<typeof Scopes>;

export const KeyDtoStatus = {
    Active: "active",
    Deactivated: "deactivated",
} as const;
export type KeyDtoStatus = ClosedEnum<typeof KeyDtoStatus>;

export type KeyDto = {
    key?: any | null | undefined;
    type: KeyDtoType;
    description: string;
    scopes: Array<Scopes>;
    environments?: Array<string> | undefined;
    primaryTargetApp?: any | null | undefined;
    secondaryTargetApps?: Array<string> | null | undefined;
    status: KeyDtoStatus;
};

/** @internal */
export const KeyDtoType$inboundSchema: z.ZodNativeEnum<typeof KeyDtoType> =
    z.nativeEnum(KeyDtoType);

/** @internal */
export const KeyDtoType$outboundSchema: z.ZodNativeEnum<typeof KeyDtoType> =
    KeyDtoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KeyDtoType$ {
    /** @deprecated use `KeyDtoType$inboundSchema` instead. */
    export const inboundSchema = KeyDtoType$inboundSchema;
    /** @deprecated use `KeyDtoType$outboundSchema` instead. */
    export const outboundSchema = KeyDtoType$outboundSchema;
}

/** @internal */
export const Scopes$inboundSchema: z.ZodNativeEnum<typeof Scopes> = z.nativeEnum(Scopes);

/** @internal */
export const Scopes$outboundSchema: z.ZodNativeEnum<typeof Scopes> = Scopes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Scopes$ {
    /** @deprecated use `Scopes$inboundSchema` instead. */
    export const inboundSchema = Scopes$inboundSchema;
    /** @deprecated use `Scopes$outboundSchema` instead. */
    export const outboundSchema = Scopes$outboundSchema;
}

/** @internal */
export const KeyDtoStatus$inboundSchema: z.ZodNativeEnum<typeof KeyDtoStatus> =
    z.nativeEnum(KeyDtoStatus);

/** @internal */
export const KeyDtoStatus$outboundSchema: z.ZodNativeEnum<typeof KeyDtoStatus> =
    KeyDtoStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KeyDtoStatus$ {
    /** @deprecated use `KeyDtoStatus$inboundSchema` instead. */
    export const inboundSchema = KeyDtoStatus$inboundSchema;
    /** @deprecated use `KeyDtoStatus$outboundSchema` instead. */
    export const outboundSchema = KeyDtoStatus$outboundSchema;
}

/** @internal */
export const KeyDto$inboundSchema: z.ZodType<KeyDto, z.ZodTypeDef, unknown> = z.object({
    key: z.nullable(z.any()).optional(),
    type: KeyDtoType$inboundSchema,
    description: z.string(),
    scopes: z.array(Scopes$inboundSchema),
    environments: z.array(z.string()).optional(),
    primaryTargetApp: z.nullable(z.any()).optional(),
    secondaryTargetApps: z.nullable(z.array(z.string())).optional(),
    status: KeyDtoStatus$inboundSchema,
});

/** @internal */
export type KeyDto$Outbound = {
    key?: any | null | undefined;
    type: string;
    description: string;
    scopes: Array<string>;
    environments?: Array<string> | undefined;
    primaryTargetApp?: any | null | undefined;
    secondaryTargetApps?: Array<string> | null | undefined;
    status: string;
};

/** @internal */
export const KeyDto$outboundSchema: z.ZodType<KeyDto$Outbound, z.ZodTypeDef, KeyDto> = z.object({
    key: z.nullable(z.any()).optional(),
    type: KeyDtoType$outboundSchema,
    description: z.string(),
    scopes: z.array(Scopes$outboundSchema),
    environments: z.array(z.string()).optional(),
    primaryTargetApp: z.nullable(z.any()).optional(),
    secondaryTargetApps: z.nullable(z.array(z.string())).optional(),
    status: KeyDtoStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KeyDto$ {
    /** @deprecated use `KeyDto$inboundSchema` instead. */
    export const inboundSchema = KeyDto$inboundSchema;
    /** @deprecated use `KeyDto$outboundSchema` instead. */
    export const outboundSchema = KeyDto$outboundSchema;
    /** @deprecated use `KeyDto$Outbound` instead. */
    export type Outbound = KeyDto$Outbound;
}
