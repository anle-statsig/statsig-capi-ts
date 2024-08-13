/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type DefaultGateMetrics = {
    /**
     * The name of the metric.
     */
    name: string;
    /**
     * The type of the metric.
     */
    type: string;
};

export type DefaultExperimentPrimaryMetrics = {
    /**
     * The name of the metric.
     */
    name: string;
    /**
     * The type of the metric.
     */
    type: string;
};

export type DefaultExperimentSecondaryMetrics = {
    /**
     * The name of the metric.
     */
    name: string;
    /**
     * The type of the metric.
     */
    type: string;
};

export type DefaultHoldoutMetrics = {
    /**
     * The name of the metric.
     */
    name: string;
    /**
     * The type of the metric.
     */
    type: string;
};

/**
 * Who can change team configurations: "anyone" or "team_only".
 */
export const ChangeTeamConfigs = {
    Anyone: "anyone",
    TeamOnly: "team_only",
} as const;
/**
 * Who can change team configurations: "anyone" or "team_only".
 */
export type ChangeTeamConfigs = ClosedEnum<typeof ChangeTeamConfigs>;

/**
 * Who can review and approve changes: "anyone", "team_only", or "admin_only".
 */
export const ReviewApproval = {
    Anyone: "anyone",
    TeamOnly: "team_only",
    AdminOnly: "admin_only",
} as const;
/**
 * Who can review and approve changes: "anyone", "team_only", or "admin_only".
 */
export type ReviewApproval = ClosedEnum<typeof ReviewApproval>;

export type Members = {
    /**
     * The email address of the user.
     */
    email: string;
    /**
     * The user's first name.
     */
    firstName: string;
    /**
     * The user's last name.
     */
    lastName: string;
    /**
     * The user's role, which can be 'Admin', 'Read Only', 'Member', or any custom role name.
     */
    role: string;
};

export type Admins = {
    /**
     * The email address of the user.
     */
    email: string;
    /**
     * The user's first name.
     */
    firstName: string;
    /**
     * The user's last name.
     */
    lastName: string;
    /**
     * The user's role, which can be 'Admin', 'Read Only', 'Member', or any custom role name.
     */
    role: string;
};

export type TeamDto = {
    /**
     * The name of the team.
     */
    name: string;
    /**
     * Default gate metrics for the team.
     */
    defaultGateMetrics: Array<DefaultGateMetrics>;
    /**
     * Default primary metrics for experiments in the team.
     */
    defaultExperimentPrimaryMetrics: Array<DefaultExperimentPrimaryMetrics>;
    /**
     * Default secondary metrics for experiments in the team.
     */
    defaultExperimentSecondaryMetrics: Array<DefaultExperimentSecondaryMetrics>;
    /**
     * Default holdout metrics for the team.
     */
    defaultHoldoutMetrics: Array<DefaultHoldoutMetrics>;
    /**
     * Who can change team configurations: "anyone" or "team_only".
     */
    changeTeamConfigs: ChangeTeamConfigs;
    /**
     * Who can review and approve changes: "anyone", "team_only", or "admin_only".
     */
    reviewApproval: ReviewApproval;
    /**
     * Default target applications for the team.
     */
    defaultTargetApplications: Array<string>;
    /**
     * Default holdout ID for the team, if applicable.
     */
    defaultHoldoutID?: any | null | undefined;
    /**
     * Whether reviews are required for changes, if applicable.
     */
    requireReviews?: any | null | undefined;
    /**
     * Whether gate templates are required for the team, if applicable.
     */
    requireGateTemplates?: any | null | undefined;
    /**
     * Whether experiment templates are required for the team, if applicable.
     */
    requireExperimentTemplates?: any | null | undefined;
    members: Array<Members>;
    admins: Array<Admins>;
};

/** @internal */
export const DefaultGateMetrics$inboundSchema: z.ZodType<
    DefaultGateMetrics,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    type: z.string(),
});

/** @internal */
export type DefaultGateMetrics$Outbound = {
    name: string;
    type: string;
};

/** @internal */
export const DefaultGateMetrics$outboundSchema: z.ZodType<
    DefaultGateMetrics$Outbound,
    z.ZodTypeDef,
    DefaultGateMetrics
> = z.object({
    name: z.string(),
    type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultGateMetrics$ {
    /** @deprecated use `DefaultGateMetrics$inboundSchema` instead. */
    export const inboundSchema = DefaultGateMetrics$inboundSchema;
    /** @deprecated use `DefaultGateMetrics$outboundSchema` instead. */
    export const outboundSchema = DefaultGateMetrics$outboundSchema;
    /** @deprecated use `DefaultGateMetrics$Outbound` instead. */
    export type Outbound = DefaultGateMetrics$Outbound;
}

/** @internal */
export const DefaultExperimentPrimaryMetrics$inboundSchema: z.ZodType<
    DefaultExperimentPrimaryMetrics,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    type: z.string(),
});

/** @internal */
export type DefaultExperimentPrimaryMetrics$Outbound = {
    name: string;
    type: string;
};

/** @internal */
export const DefaultExperimentPrimaryMetrics$outboundSchema: z.ZodType<
    DefaultExperimentPrimaryMetrics$Outbound,
    z.ZodTypeDef,
    DefaultExperimentPrimaryMetrics
> = z.object({
    name: z.string(),
    type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultExperimentPrimaryMetrics$ {
    /** @deprecated use `DefaultExperimentPrimaryMetrics$inboundSchema` instead. */
    export const inboundSchema = DefaultExperimentPrimaryMetrics$inboundSchema;
    /** @deprecated use `DefaultExperimentPrimaryMetrics$outboundSchema` instead. */
    export const outboundSchema = DefaultExperimentPrimaryMetrics$outboundSchema;
    /** @deprecated use `DefaultExperimentPrimaryMetrics$Outbound` instead. */
    export type Outbound = DefaultExperimentPrimaryMetrics$Outbound;
}

/** @internal */
export const DefaultExperimentSecondaryMetrics$inboundSchema: z.ZodType<
    DefaultExperimentSecondaryMetrics,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    type: z.string(),
});

/** @internal */
export type DefaultExperimentSecondaryMetrics$Outbound = {
    name: string;
    type: string;
};

/** @internal */
export const DefaultExperimentSecondaryMetrics$outboundSchema: z.ZodType<
    DefaultExperimentSecondaryMetrics$Outbound,
    z.ZodTypeDef,
    DefaultExperimentSecondaryMetrics
> = z.object({
    name: z.string(),
    type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultExperimentSecondaryMetrics$ {
    /** @deprecated use `DefaultExperimentSecondaryMetrics$inboundSchema` instead. */
    export const inboundSchema = DefaultExperimentSecondaryMetrics$inboundSchema;
    /** @deprecated use `DefaultExperimentSecondaryMetrics$outboundSchema` instead. */
    export const outboundSchema = DefaultExperimentSecondaryMetrics$outboundSchema;
    /** @deprecated use `DefaultExperimentSecondaryMetrics$Outbound` instead. */
    export type Outbound = DefaultExperimentSecondaryMetrics$Outbound;
}

/** @internal */
export const DefaultHoldoutMetrics$inboundSchema: z.ZodType<
    DefaultHoldoutMetrics,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    type: z.string(),
});

/** @internal */
export type DefaultHoldoutMetrics$Outbound = {
    name: string;
    type: string;
};

/** @internal */
export const DefaultHoldoutMetrics$outboundSchema: z.ZodType<
    DefaultHoldoutMetrics$Outbound,
    z.ZodTypeDef,
    DefaultHoldoutMetrics
> = z.object({
    name: z.string(),
    type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultHoldoutMetrics$ {
    /** @deprecated use `DefaultHoldoutMetrics$inboundSchema` instead. */
    export const inboundSchema = DefaultHoldoutMetrics$inboundSchema;
    /** @deprecated use `DefaultHoldoutMetrics$outboundSchema` instead. */
    export const outboundSchema = DefaultHoldoutMetrics$outboundSchema;
    /** @deprecated use `DefaultHoldoutMetrics$Outbound` instead. */
    export type Outbound = DefaultHoldoutMetrics$Outbound;
}

/** @internal */
export const ChangeTeamConfigs$inboundSchema: z.ZodNativeEnum<typeof ChangeTeamConfigs> =
    z.nativeEnum(ChangeTeamConfigs);

/** @internal */
export const ChangeTeamConfigs$outboundSchema: z.ZodNativeEnum<typeof ChangeTeamConfigs> =
    ChangeTeamConfigs$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChangeTeamConfigs$ {
    /** @deprecated use `ChangeTeamConfigs$inboundSchema` instead. */
    export const inboundSchema = ChangeTeamConfigs$inboundSchema;
    /** @deprecated use `ChangeTeamConfigs$outboundSchema` instead. */
    export const outboundSchema = ChangeTeamConfigs$outboundSchema;
}

/** @internal */
export const ReviewApproval$inboundSchema: z.ZodNativeEnum<typeof ReviewApproval> =
    z.nativeEnum(ReviewApproval);

/** @internal */
export const ReviewApproval$outboundSchema: z.ZodNativeEnum<typeof ReviewApproval> =
    ReviewApproval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReviewApproval$ {
    /** @deprecated use `ReviewApproval$inboundSchema` instead. */
    export const inboundSchema = ReviewApproval$inboundSchema;
    /** @deprecated use `ReviewApproval$outboundSchema` instead. */
    export const outboundSchema = ReviewApproval$outboundSchema;
}

/** @internal */
export const Members$inboundSchema: z.ZodType<Members, z.ZodTypeDef, unknown> = z.object({
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    role: z.string(),
});

/** @internal */
export type Members$Outbound = {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
};

/** @internal */
export const Members$outboundSchema: z.ZodType<Members$Outbound, z.ZodTypeDef, Members> = z.object({
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    role: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Members$ {
    /** @deprecated use `Members$inboundSchema` instead. */
    export const inboundSchema = Members$inboundSchema;
    /** @deprecated use `Members$outboundSchema` instead. */
    export const outboundSchema = Members$outboundSchema;
    /** @deprecated use `Members$Outbound` instead. */
    export type Outbound = Members$Outbound;
}

/** @internal */
export const Admins$inboundSchema: z.ZodType<Admins, z.ZodTypeDef, unknown> = z.object({
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    role: z.string(),
});

/** @internal */
export type Admins$Outbound = {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
};

/** @internal */
export const Admins$outboundSchema: z.ZodType<Admins$Outbound, z.ZodTypeDef, Admins> = z.object({
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    role: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Admins$ {
    /** @deprecated use `Admins$inboundSchema` instead. */
    export const inboundSchema = Admins$inboundSchema;
    /** @deprecated use `Admins$outboundSchema` instead. */
    export const outboundSchema = Admins$outboundSchema;
    /** @deprecated use `Admins$Outbound` instead. */
    export type Outbound = Admins$Outbound;
}

/** @internal */
export const TeamDto$inboundSchema: z.ZodType<TeamDto, z.ZodTypeDef, unknown> = z.object({
    name: z.string(),
    defaultGateMetrics: z.array(z.lazy(() => DefaultGateMetrics$inboundSchema)),
    defaultExperimentPrimaryMetrics: z.array(
        z.lazy(() => DefaultExperimentPrimaryMetrics$inboundSchema)
    ),
    defaultExperimentSecondaryMetrics: z.array(
        z.lazy(() => DefaultExperimentSecondaryMetrics$inboundSchema)
    ),
    defaultHoldoutMetrics: z.array(z.lazy(() => DefaultHoldoutMetrics$inboundSchema)),
    changeTeamConfigs: ChangeTeamConfigs$inboundSchema,
    reviewApproval: ReviewApproval$inboundSchema,
    defaultTargetApplications: z.array(z.string()),
    defaultHoldoutID: z.nullable(z.any()).optional(),
    requireReviews: z.nullable(z.any()).optional(),
    requireGateTemplates: z.nullable(z.any()).optional(),
    requireExperimentTemplates: z.nullable(z.any()).optional(),
    members: z.array(z.lazy(() => Members$inboundSchema)),
    admins: z.array(z.lazy(() => Admins$inboundSchema)),
});

/** @internal */
export type TeamDto$Outbound = {
    name: string;
    defaultGateMetrics: Array<DefaultGateMetrics$Outbound>;
    defaultExperimentPrimaryMetrics: Array<DefaultExperimentPrimaryMetrics$Outbound>;
    defaultExperimentSecondaryMetrics: Array<DefaultExperimentSecondaryMetrics$Outbound>;
    defaultHoldoutMetrics: Array<DefaultHoldoutMetrics$Outbound>;
    changeTeamConfigs: string;
    reviewApproval: string;
    defaultTargetApplications: Array<string>;
    defaultHoldoutID?: any | null | undefined;
    requireReviews?: any | null | undefined;
    requireGateTemplates?: any | null | undefined;
    requireExperimentTemplates?: any | null | undefined;
    members: Array<Members$Outbound>;
    admins: Array<Admins$Outbound>;
};

/** @internal */
export const TeamDto$outboundSchema: z.ZodType<TeamDto$Outbound, z.ZodTypeDef, TeamDto> = z.object({
    name: z.string(),
    defaultGateMetrics: z.array(z.lazy(() => DefaultGateMetrics$outboundSchema)),
    defaultExperimentPrimaryMetrics: z.array(
        z.lazy(() => DefaultExperimentPrimaryMetrics$outboundSchema)
    ),
    defaultExperimentSecondaryMetrics: z.array(
        z.lazy(() => DefaultExperimentSecondaryMetrics$outboundSchema)
    ),
    defaultHoldoutMetrics: z.array(z.lazy(() => DefaultHoldoutMetrics$outboundSchema)),
    changeTeamConfigs: ChangeTeamConfigs$outboundSchema,
    reviewApproval: ReviewApproval$outboundSchema,
    defaultTargetApplications: z.array(z.string()),
    defaultHoldoutID: z.nullable(z.any()).optional(),
    requireReviews: z.nullable(z.any()).optional(),
    requireGateTemplates: z.nullable(z.any()).optional(),
    requireExperimentTemplates: z.nullable(z.any()).optional(),
    members: z.array(z.lazy(() => Members$outboundSchema)),
    admins: z.array(z.lazy(() => Admins$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TeamDto$ {
    /** @deprecated use `TeamDto$inboundSchema` instead. */
    export const inboundSchema = TeamDto$inboundSchema;
    /** @deprecated use `TeamDto$outboundSchema` instead. */
    export const outboundSchema = TeamDto$outboundSchema;
    /** @deprecated use `TeamDto$Outbound` instead. */
    export type Outbound = TeamDto$Outbound;
}