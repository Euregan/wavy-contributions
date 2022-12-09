import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import {
  QueryRequest,
  QueryPromiseChain,
  Query,
  MutationRequest,
  MutationPromiseChain,
  Mutation,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends QueryRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Query, R>>

  mutation<R extends MutationRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Mutation, R>>

  chain: {
    query: QueryPromiseChain

    mutation: MutationPromiseChain
  }
}

export type QueryResult<fields extends QueryRequest> = FieldsSelection<
  Query,
  fields
>

export declare const generateQueryOp: (
  fields: QueryRequest & { __name?: string },
) => GraphqlOperation
export type MutationResult<fields extends MutationRequest> = FieldsSelection<
  Mutation,
  fields
>

export declare const generateMutationOp: (
  fields: MutationRequest & { __name?: string },
) => GraphqlOperation

export declare const enumActorType: {
  readonly USER: 'USER'
  readonly TEAM: 'TEAM'
}

export declare const enumAuditLogOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumCheckAnnotationLevel: {
  readonly FAILURE: 'FAILURE'
  readonly NOTICE: 'NOTICE'
  readonly WARNING: 'WARNING'
}

export declare const enumCheckConclusionState: {
  readonly ACTION_REQUIRED: 'ACTION_REQUIRED'
  readonly TIMED_OUT: 'TIMED_OUT'
  readonly CANCELLED: 'CANCELLED'
  readonly FAILURE: 'FAILURE'
  readonly SUCCESS: 'SUCCESS'
  readonly NEUTRAL: 'NEUTRAL'
  readonly SKIPPED: 'SKIPPED'
  readonly STARTUP_FAILURE: 'STARTUP_FAILURE'
  readonly STALE: 'STALE'
}

export declare const enumCheckRunState: {
  readonly ACTION_REQUIRED: 'ACTION_REQUIRED'
  readonly CANCELLED: 'CANCELLED'
  readonly COMPLETED: 'COMPLETED'
  readonly FAILURE: 'FAILURE'
  readonly IN_PROGRESS: 'IN_PROGRESS'
  readonly NEUTRAL: 'NEUTRAL'
  readonly PENDING: 'PENDING'
  readonly QUEUED: 'QUEUED'
  readonly SKIPPED: 'SKIPPED'
  readonly STALE: 'STALE'
  readonly STARTUP_FAILURE: 'STARTUP_FAILURE'
  readonly SUCCESS: 'SUCCESS'
  readonly TIMED_OUT: 'TIMED_OUT'
  readonly WAITING: 'WAITING'
}

export declare const enumCheckRunType: {
  readonly ALL: 'ALL'
  readonly LATEST: 'LATEST'
}

export declare const enumCheckStatusState: {
  readonly QUEUED: 'QUEUED'
  readonly IN_PROGRESS: 'IN_PROGRESS'
  readonly COMPLETED: 'COMPLETED'
  readonly WAITING: 'WAITING'
  readonly PENDING: 'PENDING'
  readonly REQUESTED: 'REQUESTED'
}

export declare const enumCollaboratorAffiliation: {
  readonly OUTSIDE: 'OUTSIDE'
  readonly DIRECT: 'DIRECT'
  readonly ALL: 'ALL'
}

export declare const enumCommentAuthorAssociation: {
  readonly MEMBER: 'MEMBER'
  readonly OWNER: 'OWNER'
  readonly MANNEQUIN: 'MANNEQUIN'
  readonly COLLABORATOR: 'COLLABORATOR'
  readonly CONTRIBUTOR: 'CONTRIBUTOR'
  readonly FIRST_TIME_CONTRIBUTOR: 'FIRST_TIME_CONTRIBUTOR'
  readonly FIRST_TIMER: 'FIRST_TIMER'
  readonly NONE: 'NONE'
}

export declare const enumCommentCannotUpdateReason: {
  readonly ARCHIVED: 'ARCHIVED'
  readonly INSUFFICIENT_ACCESS: 'INSUFFICIENT_ACCESS'
  readonly LOCKED: 'LOCKED'
  readonly LOGIN_REQUIRED: 'LOGIN_REQUIRED'
  readonly MAINTENANCE: 'MAINTENANCE'
  readonly VERIFIED_EMAIL_REQUIRED: 'VERIFIED_EMAIL_REQUIRED'
  readonly DENIED: 'DENIED'
}

export declare const enumCommitContributionOrderField: {
  readonly OCCURRED_AT: 'OCCURRED_AT'
  readonly COMMIT_COUNT: 'COMMIT_COUNT'
}

export declare const enumComparisonStatus: {
  readonly DIVERGED: 'DIVERGED'
  readonly AHEAD: 'AHEAD'
  readonly BEHIND: 'BEHIND'
  readonly IDENTICAL: 'IDENTICAL'
}

export declare const enumContributionLevel: {
  readonly NONE: 'NONE'
  readonly FIRST_QUARTILE: 'FIRST_QUARTILE'
  readonly SECOND_QUARTILE: 'SECOND_QUARTILE'
  readonly THIRD_QUARTILE: 'THIRD_QUARTILE'
  readonly FOURTH_QUARTILE: 'FOURTH_QUARTILE'
}

export declare const enumDefaultRepositoryPermissionField: {
  readonly NONE: 'NONE'
  readonly READ: 'READ'
  readonly WRITE: 'WRITE'
  readonly ADMIN: 'ADMIN'
}

export declare const enumDependencyGraphEcosystem: {
  readonly RUBYGEMS: 'RUBYGEMS'
  readonly NPM: 'NPM'
  readonly PIP: 'PIP'
  readonly MAVEN: 'MAVEN'
  readonly NUGET: 'NUGET'
  readonly COMPOSER: 'COMPOSER'
  readonly GO: 'GO'
  readonly ACTIONS: 'ACTIONS'
  readonly RUST: 'RUST'
  readonly PUB: 'PUB'
}

export declare const enumDeploymentOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumDeploymentProtectionRuleType: {
  readonly REQUIRED_REVIEWERS: 'REQUIRED_REVIEWERS'
  readonly WAIT_TIMER: 'WAIT_TIMER'
}

export declare const enumDeploymentReviewState: {
  readonly APPROVED: 'APPROVED'
  readonly REJECTED: 'REJECTED'
}

export declare const enumDeploymentState: {
  readonly ABANDONED: 'ABANDONED'
  readonly ACTIVE: 'ACTIVE'
  readonly DESTROYED: 'DESTROYED'
  readonly ERROR: 'ERROR'
  readonly FAILURE: 'FAILURE'
  readonly INACTIVE: 'INACTIVE'
  readonly PENDING: 'PENDING'
  readonly QUEUED: 'QUEUED'
  readonly IN_PROGRESS: 'IN_PROGRESS'
  readonly WAITING: 'WAITING'
}

export declare const enumDeploymentStatusState: {
  readonly PENDING: 'PENDING'
  readonly SUCCESS: 'SUCCESS'
  readonly FAILURE: 'FAILURE'
  readonly INACTIVE: 'INACTIVE'
  readonly ERROR: 'ERROR'
  readonly QUEUED: 'QUEUED'
  readonly IN_PROGRESS: 'IN_PROGRESS'
  readonly WAITING: 'WAITING'
}

export declare const enumDiffSide: {
  readonly LEFT: 'LEFT'
  readonly RIGHT: 'RIGHT'
}

export declare const enumDiscussionOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumDiscussionPollOptionOrderField: {
  readonly AUTHORED_ORDER: 'AUTHORED_ORDER'
  readonly VOTE_COUNT: 'VOTE_COUNT'
}

export declare const enumDismissReason: {
  readonly FIX_STARTED: 'FIX_STARTED'
  readonly NO_BANDWIDTH: 'NO_BANDWIDTH'
  readonly TOLERABLE_RISK: 'TOLERABLE_RISK'
  readonly INACCURATE: 'INACCURATE'
  readonly NOT_USED: 'NOT_USED'
}

export declare const enumEnterpriseAdministratorInvitationOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumEnterpriseAdministratorRole: {
  readonly OWNER: 'OWNER'
  readonly BILLING_MANAGER: 'BILLING_MANAGER'
}

export declare const enumEnterpriseAllowPrivateRepositoryForkingPolicyValue: {
  readonly ENTERPRISE_ORGANIZATIONS: 'ENTERPRISE_ORGANIZATIONS'
  readonly SAME_ORGANIZATION: 'SAME_ORGANIZATION'
  readonly SAME_ORGANIZATION_USER_ACCOUNTS: 'SAME_ORGANIZATION_USER_ACCOUNTS'
  readonly ENTERPRISE_ORGANIZATIONS_USER_ACCOUNTS: 'ENTERPRISE_ORGANIZATIONS_USER_ACCOUNTS'
  readonly USER_ACCOUNTS: 'USER_ACCOUNTS'
  readonly EVERYWHERE: 'EVERYWHERE'
}

export declare const enumEnterpriseDefaultRepositoryPermissionSettingValue: {
  readonly NO_POLICY: 'NO_POLICY'
  readonly ADMIN: 'ADMIN'
  readonly WRITE: 'WRITE'
  readonly READ: 'READ'
  readonly NONE: 'NONE'
}

export declare const enumEnterpriseEnabledDisabledSettingValue: {
  readonly ENABLED: 'ENABLED'
  readonly DISABLED: 'DISABLED'
  readonly NO_POLICY: 'NO_POLICY'
}

export declare const enumEnterpriseEnabledSettingValue: {
  readonly ENABLED: 'ENABLED'
  readonly NO_POLICY: 'NO_POLICY'
}

export declare const enumEnterpriseMemberOrderField: {
  readonly LOGIN: 'LOGIN'
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumEnterpriseMembersCanCreateRepositoriesSettingValue: {
  readonly NO_POLICY: 'NO_POLICY'
  readonly ALL: 'ALL'
  readonly PUBLIC: 'PUBLIC'
  readonly PRIVATE: 'PRIVATE'
  readonly DISABLED: 'DISABLED'
}

export declare const enumEnterpriseMembersCanMakePurchasesSettingValue: {
  readonly ENABLED: 'ENABLED'
  readonly DISABLED: 'DISABLED'
}

export declare const enumEnterpriseServerInstallationOrderField: {
  readonly HOST_NAME: 'HOST_NAME'
  readonly CUSTOMER_NAME: 'CUSTOMER_NAME'
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumEnterpriseServerUserAccountEmailOrderField: {
  readonly EMAIL: 'EMAIL'
}

export declare const enumEnterpriseServerUserAccountOrderField: {
  readonly LOGIN: 'LOGIN'
  readonly REMOTE_CREATED_AT: 'REMOTE_CREATED_AT'
}

export declare const enumEnterpriseServerUserAccountsUploadOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumEnterpriseServerUserAccountsUploadSyncState: {
  readonly PENDING: 'PENDING'
  readonly SUCCESS: 'SUCCESS'
  readonly FAILURE: 'FAILURE'
}

export declare const enumEnterpriseUserAccountMembershipRole: {
  readonly MEMBER: 'MEMBER'
  readonly OWNER: 'OWNER'
  readonly UNAFFILIATED: 'UNAFFILIATED'
}

export declare const enumEnterpriseUserDeployment: {
  readonly CLOUD: 'CLOUD'
  readonly SERVER: 'SERVER'
}

export declare const enumFileViewedState: {
  readonly DISMISSED: 'DISMISSED'
  readonly VIEWED: 'VIEWED'
  readonly UNVIEWED: 'UNVIEWED'
}

export declare const enumFundingPlatform: {
  readonly GITHUB: 'GITHUB'
  readonly PATREON: 'PATREON'
  readonly OPEN_COLLECTIVE: 'OPEN_COLLECTIVE'
  readonly KO_FI: 'KO_FI'
  readonly TIDELIFT: 'TIDELIFT'
  readonly COMMUNITY_BRIDGE: 'COMMUNITY_BRIDGE'
  readonly LIBERAPAY: 'LIBERAPAY'
  readonly ISSUEHUNT: 'ISSUEHUNT'
  readonly OTECHIE: 'OTECHIE'
  readonly LFX_CROWDFUNDING: 'LFX_CROWDFUNDING'
  readonly CUSTOM: 'CUSTOM'
}

export declare const enumGistOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly UPDATED_AT: 'UPDATED_AT'
  readonly PUSHED_AT: 'PUSHED_AT'
}

export declare const enumGistPrivacy: {
  readonly PUBLIC: 'PUBLIC'
  readonly SECRET: 'SECRET'
  readonly ALL: 'ALL'
}

export declare const enumGitSignatureState: {
  readonly VALID: 'VALID'
  readonly INVALID: 'INVALID'
  readonly MALFORMED_SIG: 'MALFORMED_SIG'
  readonly UNKNOWN_KEY: 'UNKNOWN_KEY'
  readonly BAD_EMAIL: 'BAD_EMAIL'
  readonly UNVERIFIED_EMAIL: 'UNVERIFIED_EMAIL'
  readonly NO_USER: 'NO_USER'
  readonly UNKNOWN_SIG_TYPE: 'UNKNOWN_SIG_TYPE'
  readonly UNSIGNED: 'UNSIGNED'
  readonly GPGVERIFY_UNAVAILABLE: 'GPGVERIFY_UNAVAILABLE'
  readonly GPGVERIFY_ERROR: 'GPGVERIFY_ERROR'
  readonly NOT_SIGNING_KEY: 'NOT_SIGNING_KEY'
  readonly EXPIRED_KEY: 'EXPIRED_KEY'
  readonly OCSP_PENDING: 'OCSP_PENDING'
  readonly OCSP_ERROR: 'OCSP_ERROR'
  readonly BAD_CERT: 'BAD_CERT'
  readonly OCSP_REVOKED: 'OCSP_REVOKED'
}

export declare const enumIdentityProviderConfigurationState: {
  readonly ENFORCED: 'ENFORCED'
  readonly CONFIGURED: 'CONFIGURED'
  readonly UNCONFIGURED: 'UNCONFIGURED'
}

export declare const enumIpAllowListEnabledSettingValue: {
  readonly ENABLED: 'ENABLED'
  readonly DISABLED: 'DISABLED'
}

export declare const enumIpAllowListEntryOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly ALLOW_LIST_VALUE: 'ALLOW_LIST_VALUE'
}

export declare const enumIpAllowListForInstalledAppsEnabledSettingValue: {
  readonly ENABLED: 'ENABLED'
  readonly DISABLED: 'DISABLED'
}

export declare const enumIssueClosedStateReason: {
  readonly COMPLETED: 'COMPLETED'
  readonly NOT_PLANNED: 'NOT_PLANNED'
}

export declare const enumIssueCommentOrderField: {
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumIssueOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly UPDATED_AT: 'UPDATED_AT'
  readonly COMMENTS: 'COMMENTS'
}

export declare const enumIssueState: {
  readonly OPEN: 'OPEN'
  readonly CLOSED: 'CLOSED'
}

export declare const enumIssueStateReason: {
  readonly REOPENED: 'REOPENED'
  readonly NOT_PLANNED: 'NOT_PLANNED'
  readonly COMPLETED: 'COMPLETED'
}

export declare const enumIssueTimelineItemsItemType: {
  readonly ISSUE_COMMENT: 'ISSUE_COMMENT'
  readonly CROSS_REFERENCED_EVENT: 'CROSS_REFERENCED_EVENT'
  readonly ADDED_TO_PROJECT_EVENT: 'ADDED_TO_PROJECT_EVENT'
  readonly ASSIGNED_EVENT: 'ASSIGNED_EVENT'
  readonly CLOSED_EVENT: 'CLOSED_EVENT'
  readonly COMMENT_DELETED_EVENT: 'COMMENT_DELETED_EVENT'
  readonly CONNECTED_EVENT: 'CONNECTED_EVENT'
  readonly CONVERTED_NOTE_TO_ISSUE_EVENT: 'CONVERTED_NOTE_TO_ISSUE_EVENT'
  readonly CONVERTED_TO_DISCUSSION_EVENT: 'CONVERTED_TO_DISCUSSION_EVENT'
  readonly DEMILESTONED_EVENT: 'DEMILESTONED_EVENT'
  readonly DISCONNECTED_EVENT: 'DISCONNECTED_EVENT'
  readonly LABELED_EVENT: 'LABELED_EVENT'
  readonly LOCKED_EVENT: 'LOCKED_EVENT'
  readonly MARKED_AS_DUPLICATE_EVENT: 'MARKED_AS_DUPLICATE_EVENT'
  readonly MENTIONED_EVENT: 'MENTIONED_EVENT'
  readonly MILESTONED_EVENT: 'MILESTONED_EVENT'
  readonly MOVED_COLUMNS_IN_PROJECT_EVENT: 'MOVED_COLUMNS_IN_PROJECT_EVENT'
  readonly PINNED_EVENT: 'PINNED_EVENT'
  readonly REFERENCED_EVENT: 'REFERENCED_EVENT'
  readonly REMOVED_FROM_PROJECT_EVENT: 'REMOVED_FROM_PROJECT_EVENT'
  readonly RENAMED_TITLE_EVENT: 'RENAMED_TITLE_EVENT'
  readonly REOPENED_EVENT: 'REOPENED_EVENT'
  readonly SUBSCRIBED_EVENT: 'SUBSCRIBED_EVENT'
  readonly TRANSFERRED_EVENT: 'TRANSFERRED_EVENT'
  readonly UNASSIGNED_EVENT: 'UNASSIGNED_EVENT'
  readonly UNLABELED_EVENT: 'UNLABELED_EVENT'
  readonly UNLOCKED_EVENT: 'UNLOCKED_EVENT'
  readonly USER_BLOCKED_EVENT: 'USER_BLOCKED_EVENT'
  readonly UNMARKED_AS_DUPLICATE_EVENT: 'UNMARKED_AS_DUPLICATE_EVENT'
  readonly UNPINNED_EVENT: 'UNPINNED_EVENT'
  readonly UNSUBSCRIBED_EVENT: 'UNSUBSCRIBED_EVENT'
}

export declare const enumLabelOrderField: {
  readonly NAME: 'NAME'
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumLanguageOrderField: {
  readonly SIZE: 'SIZE'
}

export declare const enumLockReason: {
  readonly OFF_TOPIC: 'OFF_TOPIC'
  readonly TOO_HEATED: 'TOO_HEATED'
  readonly RESOLVED: 'RESOLVED'
  readonly SPAM: 'SPAM'
}

export declare const enumMannequinOrderField: {
  readonly LOGIN: 'LOGIN'
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumMergeCommitMessage: {
  readonly PR_TITLE: 'PR_TITLE'
  readonly PR_BODY: 'PR_BODY'
  readonly BLANK: 'BLANK'
}

export declare const enumMergeCommitTitle: {
  readonly PR_TITLE: 'PR_TITLE'
  readonly MERGE_MESSAGE: 'MERGE_MESSAGE'
}

export declare const enumMergeableState: {
  readonly MERGEABLE: 'MERGEABLE'
  readonly CONFLICTING: 'CONFLICTING'
  readonly UNKNOWN: 'UNKNOWN'
}

export declare const enumMigrationSourceType: {
  readonly AZURE_DEVOPS: 'AZURE_DEVOPS'
  readonly BITBUCKET_SERVER: 'BITBUCKET_SERVER'
  readonly GITHUB_ARCHIVE: 'GITHUB_ARCHIVE'
}

export declare const enumMigrationState: {
  readonly NOT_STARTED: 'NOT_STARTED'
  readonly QUEUED: 'QUEUED'
  readonly IN_PROGRESS: 'IN_PROGRESS'
  readonly SUCCEEDED: 'SUCCEEDED'
  readonly FAILED: 'FAILED'
  readonly PENDING_VALIDATION: 'PENDING_VALIDATION'
  readonly FAILED_VALIDATION: 'FAILED_VALIDATION'
}

export declare const enumMilestoneOrderField: {
  readonly DUE_DATE: 'DUE_DATE'
  readonly CREATED_AT: 'CREATED_AT'
  readonly UPDATED_AT: 'UPDATED_AT'
  readonly NUMBER: 'NUMBER'
}

export declare const enumMilestoneState: {
  readonly OPEN: 'OPEN'
  readonly CLOSED: 'CLOSED'
}

export declare const enumNotificationRestrictionSettingValue: {
  readonly ENABLED: 'ENABLED'
  readonly DISABLED: 'DISABLED'
}

export declare const enumOidcProviderType: {
  readonly AAD: 'AAD'
}

export declare const enumOauthApplicationCreateAuditEntryState: {
  readonly ACTIVE: 'ACTIVE'
  readonly SUSPENDED: 'SUSPENDED'
  readonly PENDING_DELETION: 'PENDING_DELETION'
}

export declare const enumOperationType: {
  readonly ACCESS: 'ACCESS'
  readonly AUTHENTICATION: 'AUTHENTICATION'
  readonly CREATE: 'CREATE'
  readonly MODIFY: 'MODIFY'
  readonly REMOVE: 'REMOVE'
  readonly RESTORE: 'RESTORE'
  readonly TRANSFER: 'TRANSFER'
}

export declare const enumOrderDirection: {
  readonly ASC: 'ASC'
  readonly DESC: 'DESC'
}

export declare const enumOrgAddMemberAuditEntryPermission: {
  readonly READ: 'READ'
  readonly ADMIN: 'ADMIN'
}

export declare const enumOrgCreateAuditEntryBillingPlan: {
  readonly FREE: 'FREE'
  readonly BUSINESS: 'BUSINESS'
  readonly BUSINESS_PLUS: 'BUSINESS_PLUS'
  readonly UNLIMITED: 'UNLIMITED'
  readonly TIERED_PER_SEAT: 'TIERED_PER_SEAT'
}

export declare const enumOrgEnterpriseOwnerOrderField: {
  readonly LOGIN: 'LOGIN'
}

export declare const enumOrgRemoveBillingManagerAuditEntryReason: {
  readonly TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE: 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
  readonly SAML_EXTERNAL_IDENTITY_MISSING: 'SAML_EXTERNAL_IDENTITY_MISSING'
  readonly SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY: 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
}

export declare const enumOrgRemoveMemberAuditEntryMembershipType: {
  readonly SUSPENDED: 'SUSPENDED'
  readonly DIRECT_MEMBER: 'DIRECT_MEMBER'
  readonly ADMIN: 'ADMIN'
  readonly BILLING_MANAGER: 'BILLING_MANAGER'
  readonly UNAFFILIATED: 'UNAFFILIATED'
  readonly OUTSIDE_COLLABORATOR: 'OUTSIDE_COLLABORATOR'
}

export declare const enumOrgRemoveMemberAuditEntryReason: {
  readonly TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE: 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
  readonly SAML_EXTERNAL_IDENTITY_MISSING: 'SAML_EXTERNAL_IDENTITY_MISSING'
  readonly SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY: 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
  readonly USER_ACCOUNT_DELETED: 'USER_ACCOUNT_DELETED'
  readonly TWO_FACTOR_ACCOUNT_RECOVERY: 'TWO_FACTOR_ACCOUNT_RECOVERY'
}

export declare const enumOrgRemoveOutsideCollaboratorAuditEntryMembershipType: {
  readonly OUTSIDE_COLLABORATOR: 'OUTSIDE_COLLABORATOR'
  readonly UNAFFILIATED: 'UNAFFILIATED'
  readonly BILLING_MANAGER: 'BILLING_MANAGER'
}

export declare const enumOrgRemoveOutsideCollaboratorAuditEntryReason: {
  readonly TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE: 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
  readonly SAML_EXTERNAL_IDENTITY_MISSING: 'SAML_EXTERNAL_IDENTITY_MISSING'
}

export declare const enumOrgUpdateDefaultRepositoryPermissionAuditEntryPermission: {
  readonly READ: 'READ'
  readonly WRITE: 'WRITE'
  readonly ADMIN: 'ADMIN'
  readonly NONE: 'NONE'
}

export declare const enumOrgUpdateMemberAuditEntryPermission: {
  readonly READ: 'READ'
  readonly ADMIN: 'ADMIN'
}

export declare const enumOrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility: {
  readonly ALL: 'ALL'
  readonly PUBLIC: 'PUBLIC'
  readonly NONE: 'NONE'
  readonly PRIVATE: 'PRIVATE'
  readonly INTERNAL: 'INTERNAL'
  readonly PUBLIC_INTERNAL: 'PUBLIC_INTERNAL'
  readonly PRIVATE_INTERNAL: 'PRIVATE_INTERNAL'
  readonly PUBLIC_PRIVATE: 'PUBLIC_PRIVATE'
}

export declare const enumOrganizationInvitationRole: {
  readonly DIRECT_MEMBER: 'DIRECT_MEMBER'
  readonly ADMIN: 'ADMIN'
  readonly BILLING_MANAGER: 'BILLING_MANAGER'
  readonly REINSTATE: 'REINSTATE'
}

export declare const enumOrganizationInvitationType: {
  readonly USER: 'USER'
  readonly EMAIL: 'EMAIL'
}

export declare const enumOrganizationMemberRole: {
  readonly MEMBER: 'MEMBER'
  readonly ADMIN: 'ADMIN'
}

export declare const enumOrganizationMembersCanCreateRepositoriesSettingValue: {
  readonly ALL: 'ALL'
  readonly PRIVATE: 'PRIVATE'
  readonly INTERNAL: 'INTERNAL'
  readonly DISABLED: 'DISABLED'
}

export declare const enumOrganizationOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly LOGIN: 'LOGIN'
}

export declare const enumPackageFileOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumPackageOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumPackageType: {
  readonly NPM: 'NPM'
  readonly RUBYGEMS: 'RUBYGEMS'
  readonly MAVEN: 'MAVEN'
  readonly DOCKER: 'DOCKER'
  readonly DEBIAN: 'DEBIAN'
  readonly NUGET: 'NUGET'
  readonly PYPI: 'PYPI'
}

export declare const enumPackageVersionOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumPatchStatus: {
  readonly ADDED: 'ADDED'
  readonly DELETED: 'DELETED'
  readonly RENAMED: 'RENAMED'
  readonly COPIED: 'COPIED'
  readonly MODIFIED: 'MODIFIED'
  readonly CHANGED: 'CHANGED'
}

export declare const enumPinnableItemType: {
  readonly REPOSITORY: 'REPOSITORY'
  readonly GIST: 'GIST'
  readonly ISSUE: 'ISSUE'
  readonly PROJECT: 'PROJECT'
  readonly PULL_REQUEST: 'PULL_REQUEST'
  readonly USER: 'USER'
  readonly ORGANIZATION: 'ORGANIZATION'
  readonly TEAM: 'TEAM'
}

export declare const enumPinnedDiscussionGradient: {
  readonly RED_ORANGE: 'RED_ORANGE'
  readonly BLUE_MINT: 'BLUE_MINT'
  readonly BLUE_PURPLE: 'BLUE_PURPLE'
  readonly PINK_BLUE: 'PINK_BLUE'
  readonly PURPLE_CORAL: 'PURPLE_CORAL'
}

export declare const enumPinnedDiscussionPattern: {
  readonly DOT_FILL: 'DOT_FILL'
  readonly PLUS: 'PLUS'
  readonly ZAP: 'ZAP'
  readonly CHEVRON_UP: 'CHEVRON_UP'
  readonly DOT: 'DOT'
  readonly HEART_FILL: 'HEART_FILL'
}

export declare const enumProjectCardArchivedState: {
  readonly ARCHIVED: 'ARCHIVED'
  readonly NOT_ARCHIVED: 'NOT_ARCHIVED'
}

export declare const enumProjectCardState: {
  readonly CONTENT_ONLY: 'CONTENT_ONLY'
  readonly NOTE_ONLY: 'NOTE_ONLY'
  readonly REDACTED: 'REDACTED'
}

export declare const enumProjectColumnPurpose: {
  readonly TODO: 'TODO'
  readonly IN_PROGRESS: 'IN_PROGRESS'
  readonly DONE: 'DONE'
}

export declare const enumProjectItemType: {
  readonly ISSUE: 'ISSUE'
  readonly PULL_REQUEST: 'PULL_REQUEST'
  readonly DRAFT_ISSUE: 'DRAFT_ISSUE'
  readonly REDACTED: 'REDACTED'
}

export declare const enumProjectNextFieldType: {
  readonly ASSIGNEES: 'ASSIGNEES'
  readonly LINKED_PULL_REQUESTS: 'LINKED_PULL_REQUESTS'
  readonly REVIEWERS: 'REVIEWERS'
  readonly LABELS: 'LABELS'
  readonly MILESTONE: 'MILESTONE'
  readonly REPOSITORY: 'REPOSITORY'
  readonly TITLE: 'TITLE'
  readonly TEXT: 'TEXT'
  readonly SINGLE_SELECT: 'SINGLE_SELECT'
  readonly NUMBER: 'NUMBER'
  readonly DATE: 'DATE'
  readonly ITERATION: 'ITERATION'
  readonly TRACKS: 'TRACKS'
  readonly TRACKED_BY: 'TRACKED_BY'
}

export declare const enumProjectNextOrderField: {
  readonly TITLE: 'TITLE'
  readonly NUMBER: 'NUMBER'
  readonly UPDATED_AT: 'UPDATED_AT'
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumProjectOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly UPDATED_AT: 'UPDATED_AT'
  readonly NAME: 'NAME'
}

export declare const enumProjectState: {
  readonly OPEN: 'OPEN'
  readonly CLOSED: 'CLOSED'
}

export declare const enumProjectTemplate: {
  readonly BASIC_KANBAN: 'BASIC_KANBAN'
  readonly AUTOMATED_KANBAN_V2: 'AUTOMATED_KANBAN_V2'
  readonly AUTOMATED_REVIEWS_KANBAN: 'AUTOMATED_REVIEWS_KANBAN'
  readonly BUG_TRIAGE: 'BUG_TRIAGE'
}

export declare const enumProjectV2FieldOrderField: {
  readonly POSITION: 'POSITION'
  readonly CREATED_AT: 'CREATED_AT'
  readonly NAME: 'NAME'
}

export declare const enumProjectV2FieldType: {
  readonly ASSIGNEES: 'ASSIGNEES'
  readonly LINKED_PULL_REQUESTS: 'LINKED_PULL_REQUESTS'
  readonly REVIEWERS: 'REVIEWERS'
  readonly LABELS: 'LABELS'
  readonly MILESTONE: 'MILESTONE'
  readonly REPOSITORY: 'REPOSITORY'
  readonly TITLE: 'TITLE'
  readonly TEXT: 'TEXT'
  readonly SINGLE_SELECT: 'SINGLE_SELECT'
  readonly NUMBER: 'NUMBER'
  readonly DATE: 'DATE'
  readonly ITERATION: 'ITERATION'
  readonly TRACKS: 'TRACKS'
  readonly TRACKED_BY: 'TRACKED_BY'
}

export declare const enumProjectV2ItemFieldValueOrderField: {
  readonly POSITION: 'POSITION'
}

export declare const enumProjectV2ItemOrderField: {
  readonly POSITION: 'POSITION'
}

export declare const enumProjectV2ItemType: {
  readonly ISSUE: 'ISSUE'
  readonly PULL_REQUEST: 'PULL_REQUEST'
  readonly DRAFT_ISSUE: 'DRAFT_ISSUE'
  readonly REDACTED: 'REDACTED'
}

export declare const enumProjectV2OrderField: {
  readonly TITLE: 'TITLE'
  readonly NUMBER: 'NUMBER'
  readonly UPDATED_AT: 'UPDATED_AT'
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumProjectV2State: {
  readonly OPEN: 'OPEN'
  readonly CLOSED: 'CLOSED'
}

export declare const enumProjectV2ViewLayout: {
  readonly BOARD_LAYOUT: 'BOARD_LAYOUT'
  readonly TABLE_LAYOUT: 'TABLE_LAYOUT'
}

export declare const enumProjectV2ViewOrderField: {
  readonly POSITION: 'POSITION'
  readonly CREATED_AT: 'CREATED_AT'
  readonly NAME: 'NAME'
}

export declare const enumProjectViewLayout: {
  readonly BOARD_LAYOUT: 'BOARD_LAYOUT'
  readonly TABLE_LAYOUT: 'TABLE_LAYOUT'
}

export declare const enumPullRequestMergeMethod: {
  readonly MERGE: 'MERGE'
  readonly SQUASH: 'SQUASH'
  readonly REBASE: 'REBASE'
}

export declare const enumPullRequestOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumPullRequestReviewCommentState: {
  readonly PENDING: 'PENDING'
  readonly SUBMITTED: 'SUBMITTED'
}

export declare const enumPullRequestReviewDecision: {
  readonly CHANGES_REQUESTED: 'CHANGES_REQUESTED'
  readonly APPROVED: 'APPROVED'
  readonly REVIEW_REQUIRED: 'REVIEW_REQUIRED'
}

export declare const enumPullRequestReviewEvent: {
  readonly COMMENT: 'COMMENT'
  readonly APPROVE: 'APPROVE'
  readonly REQUEST_CHANGES: 'REQUEST_CHANGES'
  readonly DISMISS: 'DISMISS'
}

export declare const enumPullRequestReviewState: {
  readonly PENDING: 'PENDING'
  readonly COMMENTED: 'COMMENTED'
  readonly APPROVED: 'APPROVED'
  readonly CHANGES_REQUESTED: 'CHANGES_REQUESTED'
  readonly DISMISSED: 'DISMISSED'
}

export declare const enumPullRequestState: {
  readonly OPEN: 'OPEN'
  readonly CLOSED: 'CLOSED'
  readonly MERGED: 'MERGED'
}

export declare const enumPullRequestTimelineItemsItemType: {
  readonly PULL_REQUEST_COMMIT: 'PULL_REQUEST_COMMIT'
  readonly PULL_REQUEST_COMMIT_COMMENT_THREAD: 'PULL_REQUEST_COMMIT_COMMENT_THREAD'
  readonly PULL_REQUEST_REVIEW: 'PULL_REQUEST_REVIEW'
  readonly PULL_REQUEST_REVIEW_THREAD: 'PULL_REQUEST_REVIEW_THREAD'
  readonly PULL_REQUEST_REVISION_MARKER: 'PULL_REQUEST_REVISION_MARKER'
  readonly AUTOMATIC_BASE_CHANGE_FAILED_EVENT: 'AUTOMATIC_BASE_CHANGE_FAILED_EVENT'
  readonly AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT: 'AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT'
  readonly AUTO_MERGE_DISABLED_EVENT: 'AUTO_MERGE_DISABLED_EVENT'
  readonly AUTO_MERGE_ENABLED_EVENT: 'AUTO_MERGE_ENABLED_EVENT'
  readonly AUTO_REBASE_ENABLED_EVENT: 'AUTO_REBASE_ENABLED_EVENT'
  readonly AUTO_SQUASH_ENABLED_EVENT: 'AUTO_SQUASH_ENABLED_EVENT'
  readonly BASE_REF_CHANGED_EVENT: 'BASE_REF_CHANGED_EVENT'
  readonly BASE_REF_FORCE_PUSHED_EVENT: 'BASE_REF_FORCE_PUSHED_EVENT'
  readonly BASE_REF_DELETED_EVENT: 'BASE_REF_DELETED_EVENT'
  readonly DEPLOYED_EVENT: 'DEPLOYED_EVENT'
  readonly DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT: 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT'
  readonly HEAD_REF_DELETED_EVENT: 'HEAD_REF_DELETED_EVENT'
  readonly HEAD_REF_FORCE_PUSHED_EVENT: 'HEAD_REF_FORCE_PUSHED_EVENT'
  readonly HEAD_REF_RESTORED_EVENT: 'HEAD_REF_RESTORED_EVENT'
  readonly MERGED_EVENT: 'MERGED_EVENT'
  readonly REVIEW_DISMISSED_EVENT: 'REVIEW_DISMISSED_EVENT'
  readonly REVIEW_REQUESTED_EVENT: 'REVIEW_REQUESTED_EVENT'
  readonly REVIEW_REQUEST_REMOVED_EVENT: 'REVIEW_REQUEST_REMOVED_EVENT'
  readonly READY_FOR_REVIEW_EVENT: 'READY_FOR_REVIEW_EVENT'
  readonly CONVERT_TO_DRAFT_EVENT: 'CONVERT_TO_DRAFT_EVENT'
  readonly ADDED_TO_MERGE_QUEUE_EVENT: 'ADDED_TO_MERGE_QUEUE_EVENT'
  readonly REMOVED_FROM_MERGE_QUEUE_EVENT: 'REMOVED_FROM_MERGE_QUEUE_EVENT'
  readonly ISSUE_COMMENT: 'ISSUE_COMMENT'
  readonly CROSS_REFERENCED_EVENT: 'CROSS_REFERENCED_EVENT'
  readonly ADDED_TO_PROJECT_EVENT: 'ADDED_TO_PROJECT_EVENT'
  readonly ASSIGNED_EVENT: 'ASSIGNED_EVENT'
  readonly CLOSED_EVENT: 'CLOSED_EVENT'
  readonly COMMENT_DELETED_EVENT: 'COMMENT_DELETED_EVENT'
  readonly CONNECTED_EVENT: 'CONNECTED_EVENT'
  readonly CONVERTED_NOTE_TO_ISSUE_EVENT: 'CONVERTED_NOTE_TO_ISSUE_EVENT'
  readonly CONVERTED_TO_DISCUSSION_EVENT: 'CONVERTED_TO_DISCUSSION_EVENT'
  readonly DEMILESTONED_EVENT: 'DEMILESTONED_EVENT'
  readonly DISCONNECTED_EVENT: 'DISCONNECTED_EVENT'
  readonly LABELED_EVENT: 'LABELED_EVENT'
  readonly LOCKED_EVENT: 'LOCKED_EVENT'
  readonly MARKED_AS_DUPLICATE_EVENT: 'MARKED_AS_DUPLICATE_EVENT'
  readonly MENTIONED_EVENT: 'MENTIONED_EVENT'
  readonly MILESTONED_EVENT: 'MILESTONED_EVENT'
  readonly MOVED_COLUMNS_IN_PROJECT_EVENT: 'MOVED_COLUMNS_IN_PROJECT_EVENT'
  readonly PINNED_EVENT: 'PINNED_EVENT'
  readonly REFERENCED_EVENT: 'REFERENCED_EVENT'
  readonly REMOVED_FROM_PROJECT_EVENT: 'REMOVED_FROM_PROJECT_EVENT'
  readonly RENAMED_TITLE_EVENT: 'RENAMED_TITLE_EVENT'
  readonly REOPENED_EVENT: 'REOPENED_EVENT'
  readonly SUBSCRIBED_EVENT: 'SUBSCRIBED_EVENT'
  readonly TRANSFERRED_EVENT: 'TRANSFERRED_EVENT'
  readonly UNASSIGNED_EVENT: 'UNASSIGNED_EVENT'
  readonly UNLABELED_EVENT: 'UNLABELED_EVENT'
  readonly UNLOCKED_EVENT: 'UNLOCKED_EVENT'
  readonly USER_BLOCKED_EVENT: 'USER_BLOCKED_EVENT'
  readonly UNMARKED_AS_DUPLICATE_EVENT: 'UNMARKED_AS_DUPLICATE_EVENT'
  readonly UNPINNED_EVENT: 'UNPINNED_EVENT'
  readonly UNSUBSCRIBED_EVENT: 'UNSUBSCRIBED_EVENT'
}

export declare const enumPullRequestUpdateState: {
  readonly OPEN: 'OPEN'
  readonly CLOSED: 'CLOSED'
}

export declare const enumReactionContent: {
  readonly THUMBS_UP: 'THUMBS_UP'
  readonly THUMBS_DOWN: 'THUMBS_DOWN'
  readonly LAUGH: 'LAUGH'
  readonly HOORAY: 'HOORAY'
  readonly CONFUSED: 'CONFUSED'
  readonly HEART: 'HEART'
  readonly ROCKET: 'ROCKET'
  readonly EYES: 'EYES'
}

export declare const enumReactionOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumRefOrderField: {
  readonly TAG_COMMIT_DATE: 'TAG_COMMIT_DATE'
  readonly ALPHABETICAL: 'ALPHABETICAL'
}

export declare const enumReleaseOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly NAME: 'NAME'
}

export declare const enumRepoAccessAuditEntryVisibility: {
  readonly INTERNAL: 'INTERNAL'
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumRepoAddMemberAuditEntryVisibility: {
  readonly INTERNAL: 'INTERNAL'
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumRepoArchivedAuditEntryVisibility: {
  readonly INTERNAL: 'INTERNAL'
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumRepoChangeMergeSettingAuditEntryMergeType: {
  readonly MERGE: 'MERGE'
  readonly REBASE: 'REBASE'
  readonly SQUASH: 'SQUASH'
}

export declare const enumRepoCreateAuditEntryVisibility: {
  readonly INTERNAL: 'INTERNAL'
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumRepoDestroyAuditEntryVisibility: {
  readonly INTERNAL: 'INTERNAL'
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumRepoRemoveMemberAuditEntryVisibility: {
  readonly INTERNAL: 'INTERNAL'
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumReportedContentClassifiers: {
  readonly SPAM: 'SPAM'
  readonly ABUSE: 'ABUSE'
  readonly OFF_TOPIC: 'OFF_TOPIC'
  readonly OUTDATED: 'OUTDATED'
  readonly DUPLICATE: 'DUPLICATE'
  readonly RESOLVED: 'RESOLVED'
}

export declare const enumRepositoryAffiliation: {
  readonly OWNER: 'OWNER'
  readonly COLLABORATOR: 'COLLABORATOR'
  readonly ORGANIZATION_MEMBER: 'ORGANIZATION_MEMBER'
}

export declare const enumRepositoryContributionType: {
  readonly COMMIT: 'COMMIT'
  readonly ISSUE: 'ISSUE'
  readonly PULL_REQUEST: 'PULL_REQUEST'
  readonly REPOSITORY: 'REPOSITORY'
  readonly PULL_REQUEST_REVIEW: 'PULL_REQUEST_REVIEW'
}

export declare const enumRepositoryInteractionLimit: {
  readonly EXISTING_USERS: 'EXISTING_USERS'
  readonly CONTRIBUTORS_ONLY: 'CONTRIBUTORS_ONLY'
  readonly COLLABORATORS_ONLY: 'COLLABORATORS_ONLY'
  readonly NO_LIMIT: 'NO_LIMIT'
}

export declare const enumRepositoryInteractionLimitExpiry: {
  readonly ONE_DAY: 'ONE_DAY'
  readonly THREE_DAYS: 'THREE_DAYS'
  readonly ONE_WEEK: 'ONE_WEEK'
  readonly ONE_MONTH: 'ONE_MONTH'
  readonly SIX_MONTHS: 'SIX_MONTHS'
}

export declare const enumRepositoryInteractionLimitOrigin: {
  readonly REPOSITORY: 'REPOSITORY'
  readonly ORGANIZATION: 'ORGANIZATION'
  readonly USER: 'USER'
}

export declare const enumRepositoryInvitationOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumRepositoryLockReason: {
  readonly MOVING: 'MOVING'
  readonly BILLING: 'BILLING'
  readonly RENAME: 'RENAME'
  readonly MIGRATING: 'MIGRATING'
  readonly TRADE_RESTRICTION: 'TRADE_RESTRICTION'
}

export declare const enumRepositoryMigrationOrderDirection: {
  readonly ASC: 'ASC'
  readonly DESC: 'DESC'
}

export declare const enumRepositoryMigrationOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumRepositoryOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly UPDATED_AT: 'UPDATED_AT'
  readonly PUSHED_AT: 'PUSHED_AT'
  readonly NAME: 'NAME'
  readonly STARGAZERS: 'STARGAZERS'
}

export declare const enumRepositoryPermission: {
  readonly ADMIN: 'ADMIN'
  readonly MAINTAIN: 'MAINTAIN'
  readonly WRITE: 'WRITE'
  readonly TRIAGE: 'TRIAGE'
  readonly READ: 'READ'
}

export declare const enumRepositoryPrivacy: {
  readonly PUBLIC: 'PUBLIC'
  readonly PRIVATE: 'PRIVATE'
}

export declare const enumRepositoryVisibility: {
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
  readonly INTERNAL: 'INTERNAL'
}

export declare const enumRepositoryVulnerabilityAlertDependencyScope: {
  readonly RUNTIME: 'RUNTIME'
  readonly DEVELOPMENT: 'DEVELOPMENT'
}

export declare const enumRepositoryVulnerabilityAlertState: {
  readonly OPEN: 'OPEN'
  readonly FIXED: 'FIXED'
  readonly DISMISSED: 'DISMISSED'
}

export declare const enumRequestableCheckStatusState: {
  readonly QUEUED: 'QUEUED'
  readonly IN_PROGRESS: 'IN_PROGRESS'
  readonly COMPLETED: 'COMPLETED'
  readonly WAITING: 'WAITING'
  readonly PENDING: 'PENDING'
}

export declare const enumRoleInOrganization: {
  readonly OWNER: 'OWNER'
  readonly DIRECT_MEMBER: 'DIRECT_MEMBER'
  readonly UNAFFILIATED: 'UNAFFILIATED'
}

export declare const enumSamlDigestAlgorithm: {
  readonly SHA1: 'SHA1'
  readonly SHA256: 'SHA256'
  readonly SHA384: 'SHA384'
  readonly SHA512: 'SHA512'
}

export declare const enumSamlSignatureAlgorithm: {
  readonly RSA_SHA1: 'RSA_SHA1'
  readonly RSA_SHA256: 'RSA_SHA256'
  readonly RSA_SHA384: 'RSA_SHA384'
  readonly RSA_SHA512: 'RSA_SHA512'
}

export declare const enumSavedReplyOrderField: {
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumSearchType: {
  readonly ISSUE: 'ISSUE'
  readonly REPOSITORY: 'REPOSITORY'
  readonly USER: 'USER'
  readonly DISCUSSION: 'DISCUSSION'
}

export declare const enumSecurityAdvisoryClassification: {
  readonly GENERAL: 'GENERAL'
  readonly MALWARE: 'MALWARE'
}

export declare const enumSecurityAdvisoryEcosystem: {
  readonly COMPOSER: 'COMPOSER'
  readonly ERLANG: 'ERLANG'
  readonly ACTIONS: 'ACTIONS'
  readonly GO: 'GO'
  readonly MAVEN: 'MAVEN'
  readonly NPM: 'NPM'
  readonly NUGET: 'NUGET'
  readonly PIP: 'PIP'
  readonly PUB: 'PUB'
  readonly RUBYGEMS: 'RUBYGEMS'
  readonly RUST: 'RUST'
}

export declare const enumSecurityAdvisoryIdentifierType: {
  readonly CVE: 'CVE'
  readonly GHSA: 'GHSA'
}

export declare const enumSecurityAdvisoryOrderField: {
  readonly PUBLISHED_AT: 'PUBLISHED_AT'
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumSecurityAdvisorySeverity: {
  readonly LOW: 'LOW'
  readonly MODERATE: 'MODERATE'
  readonly HIGH: 'HIGH'
  readonly CRITICAL: 'CRITICAL'
}

export declare const enumSecurityVulnerabilityOrderField: {
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumSponsorOrderField: {
  readonly LOGIN: 'LOGIN'
  readonly RELEVANCE: 'RELEVANCE'
}

export declare const enumSponsorableOrderField: {
  readonly LOGIN: 'LOGIN'
}

export declare const enumSponsorsActivityAction: {
  readonly NEW_SPONSORSHIP: 'NEW_SPONSORSHIP'
  readonly CANCELLED_SPONSORSHIP: 'CANCELLED_SPONSORSHIP'
  readonly TIER_CHANGE: 'TIER_CHANGE'
  readonly REFUND: 'REFUND'
  readonly PENDING_CHANGE: 'PENDING_CHANGE'
  readonly SPONSOR_MATCH_DISABLED: 'SPONSOR_MATCH_DISABLED'
}

export declare const enumSponsorsActivityOrderField: {
  readonly TIMESTAMP: 'TIMESTAMP'
}

export declare const enumSponsorsActivityPeriod: {
  readonly DAY: 'DAY'
  readonly WEEK: 'WEEK'
  readonly MONTH: 'MONTH'
  readonly ALL: 'ALL'
}

export declare const enumSponsorsCountryOrRegionCode: {
  readonly AF: 'AF'
  readonly AX: 'AX'
  readonly AL: 'AL'
  readonly DZ: 'DZ'
  readonly AS: 'AS'
  readonly AD: 'AD'
  readonly AO: 'AO'
  readonly AI: 'AI'
  readonly AQ: 'AQ'
  readonly AG: 'AG'
  readonly AR: 'AR'
  readonly AM: 'AM'
  readonly AW: 'AW'
  readonly AU: 'AU'
  readonly AT: 'AT'
  readonly AZ: 'AZ'
  readonly BS: 'BS'
  readonly BH: 'BH'
  readonly BD: 'BD'
  readonly BB: 'BB'
  readonly BY: 'BY'
  readonly BE: 'BE'
  readonly BZ: 'BZ'
  readonly BJ: 'BJ'
  readonly BM: 'BM'
  readonly BT: 'BT'
  readonly BO: 'BO'
  readonly BQ: 'BQ'
  readonly BA: 'BA'
  readonly BW: 'BW'
  readonly BV: 'BV'
  readonly BR: 'BR'
  readonly IO: 'IO'
  readonly BN: 'BN'
  readonly BG: 'BG'
  readonly BF: 'BF'
  readonly BI: 'BI'
  readonly KH: 'KH'
  readonly CM: 'CM'
  readonly CA: 'CA'
  readonly CV: 'CV'
  readonly KY: 'KY'
  readonly CF: 'CF'
  readonly TD: 'TD'
  readonly CL: 'CL'
  readonly CN: 'CN'
  readonly CX: 'CX'
  readonly CC: 'CC'
  readonly CO: 'CO'
  readonly KM: 'KM'
  readonly CG: 'CG'
  readonly CD: 'CD'
  readonly CK: 'CK'
  readonly CR: 'CR'
  readonly CI: 'CI'
  readonly HR: 'HR'
  readonly CW: 'CW'
  readonly CY: 'CY'
  readonly CZ: 'CZ'
  readonly DK: 'DK'
  readonly DJ: 'DJ'
  readonly DM: 'DM'
  readonly DO: 'DO'
  readonly EC: 'EC'
  readonly EG: 'EG'
  readonly SV: 'SV'
  readonly GQ: 'GQ'
  readonly ER: 'ER'
  readonly EE: 'EE'
  readonly ET: 'ET'
  readonly FK: 'FK'
  readonly FO: 'FO'
  readonly FJ: 'FJ'
  readonly FI: 'FI'
  readonly FR: 'FR'
  readonly GF: 'GF'
  readonly PF: 'PF'
  readonly TF: 'TF'
  readonly GA: 'GA'
  readonly GM: 'GM'
  readonly GE: 'GE'
  readonly DE: 'DE'
  readonly GH: 'GH'
  readonly GI: 'GI'
  readonly GR: 'GR'
  readonly GL: 'GL'
  readonly GD: 'GD'
  readonly GP: 'GP'
  readonly GU: 'GU'
  readonly GT: 'GT'
  readonly GG: 'GG'
  readonly GN: 'GN'
  readonly GW: 'GW'
  readonly GY: 'GY'
  readonly HT: 'HT'
  readonly HM: 'HM'
  readonly HN: 'HN'
  readonly HK: 'HK'
  readonly HU: 'HU'
  readonly IS: 'IS'
  readonly IN: 'IN'
  readonly ID: 'ID'
  readonly IR: 'IR'
  readonly IQ: 'IQ'
  readonly IE: 'IE'
  readonly IM: 'IM'
  readonly IL: 'IL'
  readonly IT: 'IT'
  readonly JM: 'JM'
  readonly JP: 'JP'
  readonly JE: 'JE'
  readonly JO: 'JO'
  readonly KZ: 'KZ'
  readonly KE: 'KE'
  readonly KI: 'KI'
  readonly KR: 'KR'
  readonly KW: 'KW'
  readonly KG: 'KG'
  readonly LA: 'LA'
  readonly LV: 'LV'
  readonly LB: 'LB'
  readonly LS: 'LS'
  readonly LR: 'LR'
  readonly LY: 'LY'
  readonly LI: 'LI'
  readonly LT: 'LT'
  readonly LU: 'LU'
  readonly MO: 'MO'
  readonly MK: 'MK'
  readonly MG: 'MG'
  readonly MW: 'MW'
  readonly MY: 'MY'
  readonly MV: 'MV'
  readonly ML: 'ML'
  readonly MT: 'MT'
  readonly MH: 'MH'
  readonly MQ: 'MQ'
  readonly MR: 'MR'
  readonly MU: 'MU'
  readonly YT: 'YT'
  readonly MX: 'MX'
  readonly FM: 'FM'
  readonly MD: 'MD'
  readonly MC: 'MC'
  readonly MN: 'MN'
  readonly ME: 'ME'
  readonly MS: 'MS'
  readonly MA: 'MA'
  readonly MZ: 'MZ'
  readonly MM: 'MM'
  readonly NA: 'NA'
  readonly NR: 'NR'
  readonly NP: 'NP'
  readonly NL: 'NL'
  readonly NC: 'NC'
  readonly NZ: 'NZ'
  readonly NI: 'NI'
  readonly NE: 'NE'
  readonly NG: 'NG'
  readonly NU: 'NU'
  readonly NF: 'NF'
  readonly MP: 'MP'
  readonly NO: 'NO'
  readonly OM: 'OM'
  readonly PK: 'PK'
  readonly PW: 'PW'
  readonly PS: 'PS'
  readonly PA: 'PA'
  readonly PG: 'PG'
  readonly PY: 'PY'
  readonly PE: 'PE'
  readonly PH: 'PH'
  readonly PN: 'PN'
  readonly PL: 'PL'
  readonly PT: 'PT'
  readonly PR: 'PR'
  readonly QA: 'QA'
  readonly RE: 'RE'
  readonly RO: 'RO'
  readonly RU: 'RU'
  readonly RW: 'RW'
  readonly BL: 'BL'
  readonly SH: 'SH'
  readonly KN: 'KN'
  readonly LC: 'LC'
  readonly MF: 'MF'
  readonly PM: 'PM'
  readonly VC: 'VC'
  readonly WS: 'WS'
  readonly SM: 'SM'
  readonly ST: 'ST'
  readonly SA: 'SA'
  readonly SN: 'SN'
  readonly RS: 'RS'
  readonly SC: 'SC'
  readonly SL: 'SL'
  readonly SG: 'SG'
  readonly SX: 'SX'
  readonly SK: 'SK'
  readonly SI: 'SI'
  readonly SB: 'SB'
  readonly SO: 'SO'
  readonly ZA: 'ZA'
  readonly GS: 'GS'
  readonly SS: 'SS'
  readonly ES: 'ES'
  readonly LK: 'LK'
  readonly SD: 'SD'
  readonly SR: 'SR'
  readonly SJ: 'SJ'
  readonly SZ: 'SZ'
  readonly SE: 'SE'
  readonly CH: 'CH'
  readonly TW: 'TW'
  readonly TJ: 'TJ'
  readonly TZ: 'TZ'
  readonly TH: 'TH'
  readonly TL: 'TL'
  readonly TG: 'TG'
  readonly TK: 'TK'
  readonly TO: 'TO'
  readonly TT: 'TT'
  readonly TN: 'TN'
  readonly TR: 'TR'
  readonly TM: 'TM'
  readonly TC: 'TC'
  readonly TV: 'TV'
  readonly UG: 'UG'
  readonly UA: 'UA'
  readonly AE: 'AE'
  readonly GB: 'GB'
  readonly UM: 'UM'
  readonly US: 'US'
  readonly UY: 'UY'
  readonly UZ: 'UZ'
  readonly VU: 'VU'
  readonly VA: 'VA'
  readonly VE: 'VE'
  readonly VN: 'VN'
  readonly VG: 'VG'
  readonly VI: 'VI'
  readonly WF: 'WF'
  readonly EH: 'EH'
  readonly YE: 'YE'
  readonly ZM: 'ZM'
  readonly ZW: 'ZW'
}

export declare const enumSponsorsGoalKind: {
  readonly TOTAL_SPONSORS_COUNT: 'TOTAL_SPONSORS_COUNT'
  readonly MONTHLY_SPONSORSHIP_AMOUNT: 'MONTHLY_SPONSORSHIP_AMOUNT'
}

export declare const enumSponsorsListingFeaturedItemFeatureableType: {
  readonly REPOSITORY: 'REPOSITORY'
  readonly USER: 'USER'
}

export declare const enumSponsorsTierOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly MONTHLY_PRICE_IN_CENTS: 'MONTHLY_PRICE_IN_CENTS'
}

export declare const enumSponsorshipNewsletterOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumSponsorshipOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumSponsorshipPrivacy: {
  readonly PUBLIC: 'PUBLIC'
  readonly PRIVATE: 'PRIVATE'
}

export declare const enumSquashMergeCommitMessage: {
  readonly PR_BODY: 'PR_BODY'
  readonly COMMIT_MESSAGES: 'COMMIT_MESSAGES'
  readonly BLANK: 'BLANK'
}

export declare const enumSquashMergeCommitTitle: {
  readonly PR_TITLE: 'PR_TITLE'
  readonly COMMIT_OR_PR_TITLE: 'COMMIT_OR_PR_TITLE'
}

export declare const enumStarOrderField: {
  readonly STARRED_AT: 'STARRED_AT'
}

export declare const enumStatusState: {
  readonly EXPECTED: 'EXPECTED'
  readonly ERROR: 'ERROR'
  readonly FAILURE: 'FAILURE'
  readonly PENDING: 'PENDING'
  readonly SUCCESS: 'SUCCESS'
}

export declare const enumSubscriptionState: {
  readonly UNSUBSCRIBED: 'UNSUBSCRIBED'
  readonly SUBSCRIBED: 'SUBSCRIBED'
  readonly IGNORED: 'IGNORED'
}

export declare const enumTeamDiscussionCommentOrderField: {
  readonly NUMBER: 'NUMBER'
}

export declare const enumTeamDiscussionOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumTeamMemberOrderField: {
  readonly LOGIN: 'LOGIN'
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumTeamMemberRole: {
  readonly MAINTAINER: 'MAINTAINER'
  readonly MEMBER: 'MEMBER'
}

export declare const enumTeamMembershipType: {
  readonly IMMEDIATE: 'IMMEDIATE'
  readonly CHILD_TEAM: 'CHILD_TEAM'
  readonly ALL: 'ALL'
}

export declare const enumTeamOrderField: {
  readonly NAME: 'NAME'
}

export declare const enumTeamPrivacy: {
  readonly SECRET: 'SECRET'
  readonly VISIBLE: 'VISIBLE'
}

export declare const enumTeamRepositoryOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly UPDATED_AT: 'UPDATED_AT'
  readonly PUSHED_AT: 'PUSHED_AT'
  readonly NAME: 'NAME'
  readonly PERMISSION: 'PERMISSION'
  readonly STARGAZERS: 'STARGAZERS'
}

export declare const enumTeamRole: {
  readonly ADMIN: 'ADMIN'
  readonly MEMBER: 'MEMBER'
}

export declare const enumTopicSuggestionDeclineReason: {
  readonly NOT_RELEVANT: 'NOT_RELEVANT'
  readonly TOO_SPECIFIC: 'TOO_SPECIFIC'
  readonly PERSONAL_PREFERENCE: 'PERSONAL_PREFERENCE'
  readonly TOO_GENERAL: 'TOO_GENERAL'
}

export declare const enumTrackedIssueStates: {
  readonly OPEN: 'OPEN'
  readonly CLOSED: 'CLOSED'
}

export declare const enumUserBlockDuration: {
  readonly ONE_DAY: 'ONE_DAY'
  readonly THREE_DAYS: 'THREE_DAYS'
  readonly ONE_WEEK: 'ONE_WEEK'
  readonly ONE_MONTH: 'ONE_MONTH'
  readonly PERMANENT: 'PERMANENT'
}

export declare const enumUserStatusOrderField: {
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumVerifiableDomainOrderField: {
  readonly DOMAIN: 'DOMAIN'
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumWorkflowRunOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}
