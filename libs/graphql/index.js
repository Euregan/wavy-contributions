const {
  linkTypeMap,
  createClient: createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} = require('@genql/runtime')
var typeMap = linkTypeMap(require('./types.cjs'))

var version = '2.10.0'
assertSameVersion(version)

module.exports.version = version

module.exports.createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'https://api.github.com/graphql',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

module.exports.enumActorType = {
  USER: 'USER',
  TEAM: 'TEAM',
}

module.exports.enumAuditLogOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumCheckAnnotationLevel = {
  FAILURE: 'FAILURE',
  NOTICE: 'NOTICE',
  WARNING: 'WARNING',
}

module.exports.enumCheckConclusionState = {
  ACTION_REQUIRED: 'ACTION_REQUIRED',
  TIMED_OUT: 'TIMED_OUT',
  CANCELLED: 'CANCELLED',
  FAILURE: 'FAILURE',
  SUCCESS: 'SUCCESS',
  NEUTRAL: 'NEUTRAL',
  SKIPPED: 'SKIPPED',
  STARTUP_FAILURE: 'STARTUP_FAILURE',
  STALE: 'STALE',
}

module.exports.enumCheckRunState = {
  ACTION_REQUIRED: 'ACTION_REQUIRED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED',
  FAILURE: 'FAILURE',
  IN_PROGRESS: 'IN_PROGRESS',
  NEUTRAL: 'NEUTRAL',
  PENDING: 'PENDING',
  QUEUED: 'QUEUED',
  SKIPPED: 'SKIPPED',
  STALE: 'STALE',
  STARTUP_FAILURE: 'STARTUP_FAILURE',
  SUCCESS: 'SUCCESS',
  TIMED_OUT: 'TIMED_OUT',
  WAITING: 'WAITING',
}

module.exports.enumCheckRunType = {
  ALL: 'ALL',
  LATEST: 'LATEST',
}

module.exports.enumCheckStatusState = {
  QUEUED: 'QUEUED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  WAITING: 'WAITING',
  PENDING: 'PENDING',
  REQUESTED: 'REQUESTED',
}

module.exports.enumCollaboratorAffiliation = {
  OUTSIDE: 'OUTSIDE',
  DIRECT: 'DIRECT',
  ALL: 'ALL',
}

module.exports.enumCommentAuthorAssociation = {
  MEMBER: 'MEMBER',
  OWNER: 'OWNER',
  MANNEQUIN: 'MANNEQUIN',
  COLLABORATOR: 'COLLABORATOR',
  CONTRIBUTOR: 'CONTRIBUTOR',
  FIRST_TIME_CONTRIBUTOR: 'FIRST_TIME_CONTRIBUTOR',
  FIRST_TIMER: 'FIRST_TIMER',
  NONE: 'NONE',
}

module.exports.enumCommentCannotUpdateReason = {
  ARCHIVED: 'ARCHIVED',
  INSUFFICIENT_ACCESS: 'INSUFFICIENT_ACCESS',
  LOCKED: 'LOCKED',
  LOGIN_REQUIRED: 'LOGIN_REQUIRED',
  MAINTENANCE: 'MAINTENANCE',
  VERIFIED_EMAIL_REQUIRED: 'VERIFIED_EMAIL_REQUIRED',
  DENIED: 'DENIED',
}

module.exports.enumCommitContributionOrderField = {
  OCCURRED_AT: 'OCCURRED_AT',
  COMMIT_COUNT: 'COMMIT_COUNT',
}

module.exports.enumComparisonStatus = {
  DIVERGED: 'DIVERGED',
  AHEAD: 'AHEAD',
  BEHIND: 'BEHIND',
  IDENTICAL: 'IDENTICAL',
}

module.exports.enumContributionLevel = {
  NONE: 'NONE',
  FIRST_QUARTILE: 'FIRST_QUARTILE',
  SECOND_QUARTILE: 'SECOND_QUARTILE',
  THIRD_QUARTILE: 'THIRD_QUARTILE',
  FOURTH_QUARTILE: 'FOURTH_QUARTILE',
}

module.exports.enumDefaultRepositoryPermissionField = {
  NONE: 'NONE',
  READ: 'READ',
  WRITE: 'WRITE',
  ADMIN: 'ADMIN',
}

module.exports.enumDependencyGraphEcosystem = {
  RUBYGEMS: 'RUBYGEMS',
  NPM: 'NPM',
  PIP: 'PIP',
  MAVEN: 'MAVEN',
  NUGET: 'NUGET',
  COMPOSER: 'COMPOSER',
  GO: 'GO',
  ACTIONS: 'ACTIONS',
  RUST: 'RUST',
  PUB: 'PUB',
}

module.exports.enumDeploymentOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumDeploymentProtectionRuleType = {
  REQUIRED_REVIEWERS: 'REQUIRED_REVIEWERS',
  WAIT_TIMER: 'WAIT_TIMER',
}

module.exports.enumDeploymentReviewState = {
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
}

module.exports.enumDeploymentState = {
  ABANDONED: 'ABANDONED',
  ACTIVE: 'ACTIVE',
  DESTROYED: 'DESTROYED',
  ERROR: 'ERROR',
  FAILURE: 'FAILURE',
  INACTIVE: 'INACTIVE',
  PENDING: 'PENDING',
  QUEUED: 'QUEUED',
  IN_PROGRESS: 'IN_PROGRESS',
  WAITING: 'WAITING',
}

module.exports.enumDeploymentStatusState = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  INACTIVE: 'INACTIVE',
  ERROR: 'ERROR',
  QUEUED: 'QUEUED',
  IN_PROGRESS: 'IN_PROGRESS',
  WAITING: 'WAITING',
}

module.exports.enumDiffSide = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
}

module.exports.enumDiscussionOrderField = {
  CREATED_AT: 'CREATED_AT',
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumDiscussionPollOptionOrderField = {
  AUTHORED_ORDER: 'AUTHORED_ORDER',
  VOTE_COUNT: 'VOTE_COUNT',
}

module.exports.enumDismissReason = {
  FIX_STARTED: 'FIX_STARTED',
  NO_BANDWIDTH: 'NO_BANDWIDTH',
  TOLERABLE_RISK: 'TOLERABLE_RISK',
  INACCURATE: 'INACCURATE',
  NOT_USED: 'NOT_USED',
}

module.exports.enumEnterpriseAdministratorInvitationOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumEnterpriseAdministratorRole = {
  OWNER: 'OWNER',
  BILLING_MANAGER: 'BILLING_MANAGER',
}

module.exports.enumEnterpriseAllowPrivateRepositoryForkingPolicyValue = {
  ENTERPRISE_ORGANIZATIONS: 'ENTERPRISE_ORGANIZATIONS',
  SAME_ORGANIZATION: 'SAME_ORGANIZATION',
  SAME_ORGANIZATION_USER_ACCOUNTS: 'SAME_ORGANIZATION_USER_ACCOUNTS',
  ENTERPRISE_ORGANIZATIONS_USER_ACCOUNTS:
    'ENTERPRISE_ORGANIZATIONS_USER_ACCOUNTS',
  USER_ACCOUNTS: 'USER_ACCOUNTS',
  EVERYWHERE: 'EVERYWHERE',
}

module.exports.enumEnterpriseDefaultRepositoryPermissionSettingValue = {
  NO_POLICY: 'NO_POLICY',
  ADMIN: 'ADMIN',
  WRITE: 'WRITE',
  READ: 'READ',
  NONE: 'NONE',
}

module.exports.enumEnterpriseEnabledDisabledSettingValue = {
  ENABLED: 'ENABLED',
  DISABLED: 'DISABLED',
  NO_POLICY: 'NO_POLICY',
}

module.exports.enumEnterpriseEnabledSettingValue = {
  ENABLED: 'ENABLED',
  NO_POLICY: 'NO_POLICY',
}

module.exports.enumEnterpriseMemberOrderField = {
  LOGIN: 'LOGIN',
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumEnterpriseMembersCanCreateRepositoriesSettingValue = {
  NO_POLICY: 'NO_POLICY',
  ALL: 'ALL',
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
  DISABLED: 'DISABLED',
}

module.exports.enumEnterpriseMembersCanMakePurchasesSettingValue = {
  ENABLED: 'ENABLED',
  DISABLED: 'DISABLED',
}

module.exports.enumEnterpriseServerInstallationOrderField = {
  HOST_NAME: 'HOST_NAME',
  CUSTOMER_NAME: 'CUSTOMER_NAME',
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumEnterpriseServerUserAccountEmailOrderField = {
  EMAIL: 'EMAIL',
}

module.exports.enumEnterpriseServerUserAccountOrderField = {
  LOGIN: 'LOGIN',
  REMOTE_CREATED_AT: 'REMOTE_CREATED_AT',
}

module.exports.enumEnterpriseServerUserAccountsUploadOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumEnterpriseServerUserAccountsUploadSyncState = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

module.exports.enumEnterpriseUserAccountMembershipRole = {
  MEMBER: 'MEMBER',
  OWNER: 'OWNER',
  UNAFFILIATED: 'UNAFFILIATED',
}

module.exports.enumEnterpriseUserDeployment = {
  CLOUD: 'CLOUD',
  SERVER: 'SERVER',
}

module.exports.enumFileViewedState = {
  DISMISSED: 'DISMISSED',
  VIEWED: 'VIEWED',
  UNVIEWED: 'UNVIEWED',
}

module.exports.enumFundingPlatform = {
  GITHUB: 'GITHUB',
  PATREON: 'PATREON',
  OPEN_COLLECTIVE: 'OPEN_COLLECTIVE',
  KO_FI: 'KO_FI',
  TIDELIFT: 'TIDELIFT',
  COMMUNITY_BRIDGE: 'COMMUNITY_BRIDGE',
  LIBERAPAY: 'LIBERAPAY',
  ISSUEHUNT: 'ISSUEHUNT',
  OTECHIE: 'OTECHIE',
  LFX_CROWDFUNDING: 'LFX_CROWDFUNDING',
  CUSTOM: 'CUSTOM',
}

module.exports.enumGistOrderField = {
  CREATED_AT: 'CREATED_AT',
  UPDATED_AT: 'UPDATED_AT',
  PUSHED_AT: 'PUSHED_AT',
}

module.exports.enumGistPrivacy = {
  PUBLIC: 'PUBLIC',
  SECRET: 'SECRET',
  ALL: 'ALL',
}

module.exports.enumGitSignatureState = {
  VALID: 'VALID',
  INVALID: 'INVALID',
  MALFORMED_SIG: 'MALFORMED_SIG',
  UNKNOWN_KEY: 'UNKNOWN_KEY',
  BAD_EMAIL: 'BAD_EMAIL',
  UNVERIFIED_EMAIL: 'UNVERIFIED_EMAIL',
  NO_USER: 'NO_USER',
  UNKNOWN_SIG_TYPE: 'UNKNOWN_SIG_TYPE',
  UNSIGNED: 'UNSIGNED',
  GPGVERIFY_UNAVAILABLE: 'GPGVERIFY_UNAVAILABLE',
  GPGVERIFY_ERROR: 'GPGVERIFY_ERROR',
  NOT_SIGNING_KEY: 'NOT_SIGNING_KEY',
  EXPIRED_KEY: 'EXPIRED_KEY',
  OCSP_PENDING: 'OCSP_PENDING',
  OCSP_ERROR: 'OCSP_ERROR',
  BAD_CERT: 'BAD_CERT',
  OCSP_REVOKED: 'OCSP_REVOKED',
}

module.exports.enumIdentityProviderConfigurationState = {
  ENFORCED: 'ENFORCED',
  CONFIGURED: 'CONFIGURED',
  UNCONFIGURED: 'UNCONFIGURED',
}

module.exports.enumIpAllowListEnabledSettingValue = {
  ENABLED: 'ENABLED',
  DISABLED: 'DISABLED',
}

module.exports.enumIpAllowListEntryOrderField = {
  CREATED_AT: 'CREATED_AT',
  ALLOW_LIST_VALUE: 'ALLOW_LIST_VALUE',
}

module.exports.enumIpAllowListForInstalledAppsEnabledSettingValue = {
  ENABLED: 'ENABLED',
  DISABLED: 'DISABLED',
}

module.exports.enumIssueClosedStateReason = {
  COMPLETED: 'COMPLETED',
  NOT_PLANNED: 'NOT_PLANNED',
}

module.exports.enumIssueCommentOrderField = {
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumIssueOrderField = {
  CREATED_AT: 'CREATED_AT',
  UPDATED_AT: 'UPDATED_AT',
  COMMENTS: 'COMMENTS',
}

module.exports.enumIssueState = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
}

module.exports.enumIssueStateReason = {
  REOPENED: 'REOPENED',
  NOT_PLANNED: 'NOT_PLANNED',
  COMPLETED: 'COMPLETED',
}

module.exports.enumIssueTimelineItemsItemType = {
  ISSUE_COMMENT: 'ISSUE_COMMENT',
  CROSS_REFERENCED_EVENT: 'CROSS_REFERENCED_EVENT',
  ADDED_TO_PROJECT_EVENT: 'ADDED_TO_PROJECT_EVENT',
  ASSIGNED_EVENT: 'ASSIGNED_EVENT',
  CLOSED_EVENT: 'CLOSED_EVENT',
  COMMENT_DELETED_EVENT: 'COMMENT_DELETED_EVENT',
  CONNECTED_EVENT: 'CONNECTED_EVENT',
  CONVERTED_NOTE_TO_ISSUE_EVENT: 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  CONVERTED_TO_DISCUSSION_EVENT: 'CONVERTED_TO_DISCUSSION_EVENT',
  DEMILESTONED_EVENT: 'DEMILESTONED_EVENT',
  DISCONNECTED_EVENT: 'DISCONNECTED_EVENT',
  LABELED_EVENT: 'LABELED_EVENT',
  LOCKED_EVENT: 'LOCKED_EVENT',
  MARKED_AS_DUPLICATE_EVENT: 'MARKED_AS_DUPLICATE_EVENT',
  MENTIONED_EVENT: 'MENTIONED_EVENT',
  MILESTONED_EVENT: 'MILESTONED_EVENT',
  MOVED_COLUMNS_IN_PROJECT_EVENT: 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  PINNED_EVENT: 'PINNED_EVENT',
  REFERENCED_EVENT: 'REFERENCED_EVENT',
  REMOVED_FROM_PROJECT_EVENT: 'REMOVED_FROM_PROJECT_EVENT',
  RENAMED_TITLE_EVENT: 'RENAMED_TITLE_EVENT',
  REOPENED_EVENT: 'REOPENED_EVENT',
  SUBSCRIBED_EVENT: 'SUBSCRIBED_EVENT',
  TRANSFERRED_EVENT: 'TRANSFERRED_EVENT',
  UNASSIGNED_EVENT: 'UNASSIGNED_EVENT',
  UNLABELED_EVENT: 'UNLABELED_EVENT',
  UNLOCKED_EVENT: 'UNLOCKED_EVENT',
  USER_BLOCKED_EVENT: 'USER_BLOCKED_EVENT',
  UNMARKED_AS_DUPLICATE_EVENT: 'UNMARKED_AS_DUPLICATE_EVENT',
  UNPINNED_EVENT: 'UNPINNED_EVENT',
  UNSUBSCRIBED_EVENT: 'UNSUBSCRIBED_EVENT',
}

module.exports.enumLabelOrderField = {
  NAME: 'NAME',
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumLanguageOrderField = {
  SIZE: 'SIZE',
}

module.exports.enumLockReason = {
  OFF_TOPIC: 'OFF_TOPIC',
  TOO_HEATED: 'TOO_HEATED',
  RESOLVED: 'RESOLVED',
  SPAM: 'SPAM',
}

module.exports.enumMannequinOrderField = {
  LOGIN: 'LOGIN',
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumMergeCommitMessage = {
  PR_TITLE: 'PR_TITLE',
  PR_BODY: 'PR_BODY',
  BLANK: 'BLANK',
}

module.exports.enumMergeCommitTitle = {
  PR_TITLE: 'PR_TITLE',
  MERGE_MESSAGE: 'MERGE_MESSAGE',
}

module.exports.enumMergeableState = {
  MERGEABLE: 'MERGEABLE',
  CONFLICTING: 'CONFLICTING',
  UNKNOWN: 'UNKNOWN',
}

module.exports.enumMigrationSourceType = {
  AZURE_DEVOPS: 'AZURE_DEVOPS',
  BITBUCKET_SERVER: 'BITBUCKET_SERVER',
  GITHUB_ARCHIVE: 'GITHUB_ARCHIVE',
}

module.exports.enumMigrationState = {
  NOT_STARTED: 'NOT_STARTED',
  QUEUED: 'QUEUED',
  IN_PROGRESS: 'IN_PROGRESS',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
  PENDING_VALIDATION: 'PENDING_VALIDATION',
  FAILED_VALIDATION: 'FAILED_VALIDATION',
}

module.exports.enumMilestoneOrderField = {
  DUE_DATE: 'DUE_DATE',
  CREATED_AT: 'CREATED_AT',
  UPDATED_AT: 'UPDATED_AT',
  NUMBER: 'NUMBER',
}

module.exports.enumMilestoneState = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
}

module.exports.enumNotificationRestrictionSettingValue = {
  ENABLED: 'ENABLED',
  DISABLED: 'DISABLED',
}

module.exports.enumOidcProviderType = {
  AAD: 'AAD',
}

module.exports.enumOauthApplicationCreateAuditEntryState = {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  PENDING_DELETION: 'PENDING_DELETION',
}

module.exports.enumOperationType = {
  ACCESS: 'ACCESS',
  AUTHENTICATION: 'AUTHENTICATION',
  CREATE: 'CREATE',
  MODIFY: 'MODIFY',
  REMOVE: 'REMOVE',
  RESTORE: 'RESTORE',
  TRANSFER: 'TRANSFER',
}

module.exports.enumOrderDirection = {
  ASC: 'ASC',
  DESC: 'DESC',
}

module.exports.enumOrgAddMemberAuditEntryPermission = {
  READ: 'READ',
  ADMIN: 'ADMIN',
}

module.exports.enumOrgCreateAuditEntryBillingPlan = {
  FREE: 'FREE',
  BUSINESS: 'BUSINESS',
  BUSINESS_PLUS: 'BUSINESS_PLUS',
  UNLIMITED: 'UNLIMITED',
  TIERED_PER_SEAT: 'TIERED_PER_SEAT',
}

module.exports.enumOrgEnterpriseOwnerOrderField = {
  LOGIN: 'LOGIN',
}

module.exports.enumOrgRemoveBillingManagerAuditEntryReason = {
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE:
    'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SAML_EXTERNAL_IDENTITY_MISSING: 'SAML_EXTERNAL_IDENTITY_MISSING',
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY:
    'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY',
}

module.exports.enumOrgRemoveMemberAuditEntryMembershipType = {
  SUSPENDED: 'SUSPENDED',
  DIRECT_MEMBER: 'DIRECT_MEMBER',
  ADMIN: 'ADMIN',
  BILLING_MANAGER: 'BILLING_MANAGER',
  UNAFFILIATED: 'UNAFFILIATED',
  OUTSIDE_COLLABORATOR: 'OUTSIDE_COLLABORATOR',
}

module.exports.enumOrgRemoveMemberAuditEntryReason = {
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE:
    'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SAML_EXTERNAL_IDENTITY_MISSING: 'SAML_EXTERNAL_IDENTITY_MISSING',
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY:
    'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY',
  USER_ACCOUNT_DELETED: 'USER_ACCOUNT_DELETED',
  TWO_FACTOR_ACCOUNT_RECOVERY: 'TWO_FACTOR_ACCOUNT_RECOVERY',
}

module.exports.enumOrgRemoveOutsideCollaboratorAuditEntryMembershipType = {
  OUTSIDE_COLLABORATOR: 'OUTSIDE_COLLABORATOR',
  UNAFFILIATED: 'UNAFFILIATED',
  BILLING_MANAGER: 'BILLING_MANAGER',
}

module.exports.enumOrgRemoveOutsideCollaboratorAuditEntryReason = {
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE:
    'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SAML_EXTERNAL_IDENTITY_MISSING: 'SAML_EXTERNAL_IDENTITY_MISSING',
}

module.exports.enumOrgUpdateDefaultRepositoryPermissionAuditEntryPermission = {
  READ: 'READ',
  WRITE: 'WRITE',
  ADMIN: 'ADMIN',
  NONE: 'NONE',
}

module.exports.enumOrgUpdateMemberAuditEntryPermission = {
  READ: 'READ',
  ADMIN: 'ADMIN',
}

module.exports.enumOrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = {
  ALL: 'ALL',
  PUBLIC: 'PUBLIC',
  NONE: 'NONE',
  PRIVATE: 'PRIVATE',
  INTERNAL: 'INTERNAL',
  PUBLIC_INTERNAL: 'PUBLIC_INTERNAL',
  PRIVATE_INTERNAL: 'PRIVATE_INTERNAL',
  PUBLIC_PRIVATE: 'PUBLIC_PRIVATE',
}

module.exports.enumOrganizationInvitationRole = {
  DIRECT_MEMBER: 'DIRECT_MEMBER',
  ADMIN: 'ADMIN',
  BILLING_MANAGER: 'BILLING_MANAGER',
  REINSTATE: 'REINSTATE',
}

module.exports.enumOrganizationInvitationType = {
  USER: 'USER',
  EMAIL: 'EMAIL',
}

module.exports.enumOrganizationMemberRole = {
  MEMBER: 'MEMBER',
  ADMIN: 'ADMIN',
}

module.exports.enumOrganizationMembersCanCreateRepositoriesSettingValue = {
  ALL: 'ALL',
  PRIVATE: 'PRIVATE',
  INTERNAL: 'INTERNAL',
  DISABLED: 'DISABLED',
}

module.exports.enumOrganizationOrderField = {
  CREATED_AT: 'CREATED_AT',
  LOGIN: 'LOGIN',
}

module.exports.enumPackageFileOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumPackageOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumPackageType = {
  NPM: 'NPM',
  RUBYGEMS: 'RUBYGEMS',
  MAVEN: 'MAVEN',
  DOCKER: 'DOCKER',
  DEBIAN: 'DEBIAN',
  NUGET: 'NUGET',
  PYPI: 'PYPI',
}

module.exports.enumPackageVersionOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumPatchStatus = {
  ADDED: 'ADDED',
  DELETED: 'DELETED',
  RENAMED: 'RENAMED',
  COPIED: 'COPIED',
  MODIFIED: 'MODIFIED',
  CHANGED: 'CHANGED',
}

module.exports.enumPinnableItemType = {
  REPOSITORY: 'REPOSITORY',
  GIST: 'GIST',
  ISSUE: 'ISSUE',
  PROJECT: 'PROJECT',
  PULL_REQUEST: 'PULL_REQUEST',
  USER: 'USER',
  ORGANIZATION: 'ORGANIZATION',
  TEAM: 'TEAM',
}

module.exports.enumPinnedDiscussionGradient = {
  RED_ORANGE: 'RED_ORANGE',
  BLUE_MINT: 'BLUE_MINT',
  BLUE_PURPLE: 'BLUE_PURPLE',
  PINK_BLUE: 'PINK_BLUE',
  PURPLE_CORAL: 'PURPLE_CORAL',
}

module.exports.enumPinnedDiscussionPattern = {
  DOT_FILL: 'DOT_FILL',
  PLUS: 'PLUS',
  ZAP: 'ZAP',
  CHEVRON_UP: 'CHEVRON_UP',
  DOT: 'DOT',
  HEART_FILL: 'HEART_FILL',
}

module.exports.enumProjectCardArchivedState = {
  ARCHIVED: 'ARCHIVED',
  NOT_ARCHIVED: 'NOT_ARCHIVED',
}

module.exports.enumProjectCardState = {
  CONTENT_ONLY: 'CONTENT_ONLY',
  NOTE_ONLY: 'NOTE_ONLY',
  REDACTED: 'REDACTED',
}

module.exports.enumProjectColumnPurpose = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
}

module.exports.enumProjectItemType = {
  ISSUE: 'ISSUE',
  PULL_REQUEST: 'PULL_REQUEST',
  DRAFT_ISSUE: 'DRAFT_ISSUE',
  REDACTED: 'REDACTED',
}

module.exports.enumProjectNextFieldType = {
  ASSIGNEES: 'ASSIGNEES',
  LINKED_PULL_REQUESTS: 'LINKED_PULL_REQUESTS',
  REVIEWERS: 'REVIEWERS',
  LABELS: 'LABELS',
  MILESTONE: 'MILESTONE',
  REPOSITORY: 'REPOSITORY',
  TITLE: 'TITLE',
  TEXT: 'TEXT',
  SINGLE_SELECT: 'SINGLE_SELECT',
  NUMBER: 'NUMBER',
  DATE: 'DATE',
  ITERATION: 'ITERATION',
  TRACKS: 'TRACKS',
  TRACKED_BY: 'TRACKED_BY',
}

module.exports.enumProjectNextOrderField = {
  TITLE: 'TITLE',
  NUMBER: 'NUMBER',
  UPDATED_AT: 'UPDATED_AT',
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumProjectOrderField = {
  CREATED_AT: 'CREATED_AT',
  UPDATED_AT: 'UPDATED_AT',
  NAME: 'NAME',
}

module.exports.enumProjectState = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
}

module.exports.enumProjectTemplate = {
  BASIC_KANBAN: 'BASIC_KANBAN',
  AUTOMATED_KANBAN_V2: 'AUTOMATED_KANBAN_V2',
  AUTOMATED_REVIEWS_KANBAN: 'AUTOMATED_REVIEWS_KANBAN',
  BUG_TRIAGE: 'BUG_TRIAGE',
}

module.exports.enumProjectV2FieldOrderField = {
  POSITION: 'POSITION',
  CREATED_AT: 'CREATED_AT',
  NAME: 'NAME',
}

module.exports.enumProjectV2FieldType = {
  ASSIGNEES: 'ASSIGNEES',
  LINKED_PULL_REQUESTS: 'LINKED_PULL_REQUESTS',
  REVIEWERS: 'REVIEWERS',
  LABELS: 'LABELS',
  MILESTONE: 'MILESTONE',
  REPOSITORY: 'REPOSITORY',
  TITLE: 'TITLE',
  TEXT: 'TEXT',
  SINGLE_SELECT: 'SINGLE_SELECT',
  NUMBER: 'NUMBER',
  DATE: 'DATE',
  ITERATION: 'ITERATION',
  TRACKS: 'TRACKS',
  TRACKED_BY: 'TRACKED_BY',
}

module.exports.enumProjectV2ItemFieldValueOrderField = {
  POSITION: 'POSITION',
}

module.exports.enumProjectV2ItemOrderField = {
  POSITION: 'POSITION',
}

module.exports.enumProjectV2ItemType = {
  ISSUE: 'ISSUE',
  PULL_REQUEST: 'PULL_REQUEST',
  DRAFT_ISSUE: 'DRAFT_ISSUE',
  REDACTED: 'REDACTED',
}

module.exports.enumProjectV2OrderField = {
  TITLE: 'TITLE',
  NUMBER: 'NUMBER',
  UPDATED_AT: 'UPDATED_AT',
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumProjectV2State = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
}

module.exports.enumProjectV2ViewLayout = {
  BOARD_LAYOUT: 'BOARD_LAYOUT',
  TABLE_LAYOUT: 'TABLE_LAYOUT',
}

module.exports.enumProjectV2ViewOrderField = {
  POSITION: 'POSITION',
  CREATED_AT: 'CREATED_AT',
  NAME: 'NAME',
}

module.exports.enumProjectViewLayout = {
  BOARD_LAYOUT: 'BOARD_LAYOUT',
  TABLE_LAYOUT: 'TABLE_LAYOUT',
}

module.exports.enumPullRequestMergeMethod = {
  MERGE: 'MERGE',
  SQUASH: 'SQUASH',
  REBASE: 'REBASE',
}

module.exports.enumPullRequestOrderField = {
  CREATED_AT: 'CREATED_AT',
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumPullRequestReviewCommentState = {
  PENDING: 'PENDING',
  SUBMITTED: 'SUBMITTED',
}

module.exports.enumPullRequestReviewDecision = {
  CHANGES_REQUESTED: 'CHANGES_REQUESTED',
  APPROVED: 'APPROVED',
  REVIEW_REQUIRED: 'REVIEW_REQUIRED',
}

module.exports.enumPullRequestReviewEvent = {
  COMMENT: 'COMMENT',
  APPROVE: 'APPROVE',
  REQUEST_CHANGES: 'REQUEST_CHANGES',
  DISMISS: 'DISMISS',
}

module.exports.enumPullRequestReviewState = {
  PENDING: 'PENDING',
  COMMENTED: 'COMMENTED',
  APPROVED: 'APPROVED',
  CHANGES_REQUESTED: 'CHANGES_REQUESTED',
  DISMISSED: 'DISMISSED',
}

module.exports.enumPullRequestState = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  MERGED: 'MERGED',
}

module.exports.enumPullRequestTimelineItemsItemType = {
  PULL_REQUEST_COMMIT: 'PULL_REQUEST_COMMIT',
  PULL_REQUEST_COMMIT_COMMENT_THREAD: 'PULL_REQUEST_COMMIT_COMMENT_THREAD',
  PULL_REQUEST_REVIEW: 'PULL_REQUEST_REVIEW',
  PULL_REQUEST_REVIEW_THREAD: 'PULL_REQUEST_REVIEW_THREAD',
  PULL_REQUEST_REVISION_MARKER: 'PULL_REQUEST_REVISION_MARKER',
  AUTOMATIC_BASE_CHANGE_FAILED_EVENT: 'AUTOMATIC_BASE_CHANGE_FAILED_EVENT',
  AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT:
    'AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT',
  AUTO_MERGE_DISABLED_EVENT: 'AUTO_MERGE_DISABLED_EVENT',
  AUTO_MERGE_ENABLED_EVENT: 'AUTO_MERGE_ENABLED_EVENT',
  AUTO_REBASE_ENABLED_EVENT: 'AUTO_REBASE_ENABLED_EVENT',
  AUTO_SQUASH_ENABLED_EVENT: 'AUTO_SQUASH_ENABLED_EVENT',
  BASE_REF_CHANGED_EVENT: 'BASE_REF_CHANGED_EVENT',
  BASE_REF_FORCE_PUSHED_EVENT: 'BASE_REF_FORCE_PUSHED_EVENT',
  BASE_REF_DELETED_EVENT: 'BASE_REF_DELETED_EVENT',
  DEPLOYED_EVENT: 'DEPLOYED_EVENT',
  DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT: 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT',
  HEAD_REF_DELETED_EVENT: 'HEAD_REF_DELETED_EVENT',
  HEAD_REF_FORCE_PUSHED_EVENT: 'HEAD_REF_FORCE_PUSHED_EVENT',
  HEAD_REF_RESTORED_EVENT: 'HEAD_REF_RESTORED_EVENT',
  MERGED_EVENT: 'MERGED_EVENT',
  REVIEW_DISMISSED_EVENT: 'REVIEW_DISMISSED_EVENT',
  REVIEW_REQUESTED_EVENT: 'REVIEW_REQUESTED_EVENT',
  REVIEW_REQUEST_REMOVED_EVENT: 'REVIEW_REQUEST_REMOVED_EVENT',
  READY_FOR_REVIEW_EVENT: 'READY_FOR_REVIEW_EVENT',
  CONVERT_TO_DRAFT_EVENT: 'CONVERT_TO_DRAFT_EVENT',
  ADDED_TO_MERGE_QUEUE_EVENT: 'ADDED_TO_MERGE_QUEUE_EVENT',
  REMOVED_FROM_MERGE_QUEUE_EVENT: 'REMOVED_FROM_MERGE_QUEUE_EVENT',
  ISSUE_COMMENT: 'ISSUE_COMMENT',
  CROSS_REFERENCED_EVENT: 'CROSS_REFERENCED_EVENT',
  ADDED_TO_PROJECT_EVENT: 'ADDED_TO_PROJECT_EVENT',
  ASSIGNED_EVENT: 'ASSIGNED_EVENT',
  CLOSED_EVENT: 'CLOSED_EVENT',
  COMMENT_DELETED_EVENT: 'COMMENT_DELETED_EVENT',
  CONNECTED_EVENT: 'CONNECTED_EVENT',
  CONVERTED_NOTE_TO_ISSUE_EVENT: 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  CONVERTED_TO_DISCUSSION_EVENT: 'CONVERTED_TO_DISCUSSION_EVENT',
  DEMILESTONED_EVENT: 'DEMILESTONED_EVENT',
  DISCONNECTED_EVENT: 'DISCONNECTED_EVENT',
  LABELED_EVENT: 'LABELED_EVENT',
  LOCKED_EVENT: 'LOCKED_EVENT',
  MARKED_AS_DUPLICATE_EVENT: 'MARKED_AS_DUPLICATE_EVENT',
  MENTIONED_EVENT: 'MENTIONED_EVENT',
  MILESTONED_EVENT: 'MILESTONED_EVENT',
  MOVED_COLUMNS_IN_PROJECT_EVENT: 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  PINNED_EVENT: 'PINNED_EVENT',
  REFERENCED_EVENT: 'REFERENCED_EVENT',
  REMOVED_FROM_PROJECT_EVENT: 'REMOVED_FROM_PROJECT_EVENT',
  RENAMED_TITLE_EVENT: 'RENAMED_TITLE_EVENT',
  REOPENED_EVENT: 'REOPENED_EVENT',
  SUBSCRIBED_EVENT: 'SUBSCRIBED_EVENT',
  TRANSFERRED_EVENT: 'TRANSFERRED_EVENT',
  UNASSIGNED_EVENT: 'UNASSIGNED_EVENT',
  UNLABELED_EVENT: 'UNLABELED_EVENT',
  UNLOCKED_EVENT: 'UNLOCKED_EVENT',
  USER_BLOCKED_EVENT: 'USER_BLOCKED_EVENT',
  UNMARKED_AS_DUPLICATE_EVENT: 'UNMARKED_AS_DUPLICATE_EVENT',
  UNPINNED_EVENT: 'UNPINNED_EVENT',
  UNSUBSCRIBED_EVENT: 'UNSUBSCRIBED_EVENT',
}

module.exports.enumPullRequestUpdateState = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
}

module.exports.enumReactionContent = {
  THUMBS_UP: 'THUMBS_UP',
  THUMBS_DOWN: 'THUMBS_DOWN',
  LAUGH: 'LAUGH',
  HOORAY: 'HOORAY',
  CONFUSED: 'CONFUSED',
  HEART: 'HEART',
  ROCKET: 'ROCKET',
  EYES: 'EYES',
}

module.exports.enumReactionOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumRefOrderField = {
  TAG_COMMIT_DATE: 'TAG_COMMIT_DATE',
  ALPHABETICAL: 'ALPHABETICAL',
}

module.exports.enumReleaseOrderField = {
  CREATED_AT: 'CREATED_AT',
  NAME: 'NAME',
}

module.exports.enumRepoAccessAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumRepoAddMemberAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumRepoArchivedAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumRepoChangeMergeSettingAuditEntryMergeType = {
  MERGE: 'MERGE',
  REBASE: 'REBASE',
  SQUASH: 'SQUASH',
}

module.exports.enumRepoCreateAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumRepoDestroyAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumRepoRemoveMemberAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumReportedContentClassifiers = {
  SPAM: 'SPAM',
  ABUSE: 'ABUSE',
  OFF_TOPIC: 'OFF_TOPIC',
  OUTDATED: 'OUTDATED',
  DUPLICATE: 'DUPLICATE',
  RESOLVED: 'RESOLVED',
}

module.exports.enumRepositoryAffiliation = {
  OWNER: 'OWNER',
  COLLABORATOR: 'COLLABORATOR',
  ORGANIZATION_MEMBER: 'ORGANIZATION_MEMBER',
}

module.exports.enumRepositoryContributionType = {
  COMMIT: 'COMMIT',
  ISSUE: 'ISSUE',
  PULL_REQUEST: 'PULL_REQUEST',
  REPOSITORY: 'REPOSITORY',
  PULL_REQUEST_REVIEW: 'PULL_REQUEST_REVIEW',
}

module.exports.enumRepositoryInteractionLimit = {
  EXISTING_USERS: 'EXISTING_USERS',
  CONTRIBUTORS_ONLY: 'CONTRIBUTORS_ONLY',
  COLLABORATORS_ONLY: 'COLLABORATORS_ONLY',
  NO_LIMIT: 'NO_LIMIT',
}

module.exports.enumRepositoryInteractionLimitExpiry = {
  ONE_DAY: 'ONE_DAY',
  THREE_DAYS: 'THREE_DAYS',
  ONE_WEEK: 'ONE_WEEK',
  ONE_MONTH: 'ONE_MONTH',
  SIX_MONTHS: 'SIX_MONTHS',
}

module.exports.enumRepositoryInteractionLimitOrigin = {
  REPOSITORY: 'REPOSITORY',
  ORGANIZATION: 'ORGANIZATION',
  USER: 'USER',
}

module.exports.enumRepositoryInvitationOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumRepositoryLockReason = {
  MOVING: 'MOVING',
  BILLING: 'BILLING',
  RENAME: 'RENAME',
  MIGRATING: 'MIGRATING',
  TRADE_RESTRICTION: 'TRADE_RESTRICTION',
}

module.exports.enumRepositoryMigrationOrderDirection = {
  ASC: 'ASC',
  DESC: 'DESC',
}

module.exports.enumRepositoryMigrationOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumRepositoryOrderField = {
  CREATED_AT: 'CREATED_AT',
  UPDATED_AT: 'UPDATED_AT',
  PUSHED_AT: 'PUSHED_AT',
  NAME: 'NAME',
  STARGAZERS: 'STARGAZERS',
}

module.exports.enumRepositoryPermission = {
  ADMIN: 'ADMIN',
  MAINTAIN: 'MAINTAIN',
  WRITE: 'WRITE',
  TRIAGE: 'TRIAGE',
  READ: 'READ',
}

module.exports.enumRepositoryPrivacy = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
}

module.exports.enumRepositoryVisibility = {
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
  INTERNAL: 'INTERNAL',
}

module.exports.enumRepositoryVulnerabilityAlertDependencyScope = {
  RUNTIME: 'RUNTIME',
  DEVELOPMENT: 'DEVELOPMENT',
}

module.exports.enumRepositoryVulnerabilityAlertState = {
  OPEN: 'OPEN',
  FIXED: 'FIXED',
  DISMISSED: 'DISMISSED',
}

module.exports.enumRequestableCheckStatusState = {
  QUEUED: 'QUEUED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  WAITING: 'WAITING',
  PENDING: 'PENDING',
}

module.exports.enumRoleInOrganization = {
  OWNER: 'OWNER',
  DIRECT_MEMBER: 'DIRECT_MEMBER',
  UNAFFILIATED: 'UNAFFILIATED',
}

module.exports.enumSamlDigestAlgorithm = {
  SHA1: 'SHA1',
  SHA256: 'SHA256',
  SHA384: 'SHA384',
  SHA512: 'SHA512',
}

module.exports.enumSamlSignatureAlgorithm = {
  RSA_SHA1: 'RSA_SHA1',
  RSA_SHA256: 'RSA_SHA256',
  RSA_SHA384: 'RSA_SHA384',
  RSA_SHA512: 'RSA_SHA512',
}

module.exports.enumSavedReplyOrderField = {
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumSearchType = {
  ISSUE: 'ISSUE',
  REPOSITORY: 'REPOSITORY',
  USER: 'USER',
  DISCUSSION: 'DISCUSSION',
}

module.exports.enumSecurityAdvisoryClassification = {
  GENERAL: 'GENERAL',
  MALWARE: 'MALWARE',
}

module.exports.enumSecurityAdvisoryEcosystem = {
  COMPOSER: 'COMPOSER',
  ERLANG: 'ERLANG',
  ACTIONS: 'ACTIONS',
  GO: 'GO',
  MAVEN: 'MAVEN',
  NPM: 'NPM',
  NUGET: 'NUGET',
  PIP: 'PIP',
  PUB: 'PUB',
  RUBYGEMS: 'RUBYGEMS',
  RUST: 'RUST',
}

module.exports.enumSecurityAdvisoryIdentifierType = {
  CVE: 'CVE',
  GHSA: 'GHSA',
}

module.exports.enumSecurityAdvisoryOrderField = {
  PUBLISHED_AT: 'PUBLISHED_AT',
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumSecurityAdvisorySeverity = {
  LOW: 'LOW',
  MODERATE: 'MODERATE',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL',
}

module.exports.enumSecurityVulnerabilityOrderField = {
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumSponsorOrderField = {
  LOGIN: 'LOGIN',
  RELEVANCE: 'RELEVANCE',
}

module.exports.enumSponsorableOrderField = {
  LOGIN: 'LOGIN',
}

module.exports.enumSponsorsActivityAction = {
  NEW_SPONSORSHIP: 'NEW_SPONSORSHIP',
  CANCELLED_SPONSORSHIP: 'CANCELLED_SPONSORSHIP',
  TIER_CHANGE: 'TIER_CHANGE',
  REFUND: 'REFUND',
  PENDING_CHANGE: 'PENDING_CHANGE',
  SPONSOR_MATCH_DISABLED: 'SPONSOR_MATCH_DISABLED',
}

module.exports.enumSponsorsActivityOrderField = {
  TIMESTAMP: 'TIMESTAMP',
}

module.exports.enumSponsorsActivityPeriod = {
  DAY: 'DAY',
  WEEK: 'WEEK',
  MONTH: 'MONTH',
  ALL: 'ALL',
}

module.exports.enumSponsorsCountryOrRegionCode = {
  AF: 'AF',
  AX: 'AX',
  AL: 'AL',
  DZ: 'DZ',
  AS: 'AS',
  AD: 'AD',
  AO: 'AO',
  AI: 'AI',
  AQ: 'AQ',
  AG: 'AG',
  AR: 'AR',
  AM: 'AM',
  AW: 'AW',
  AU: 'AU',
  AT: 'AT',
  AZ: 'AZ',
  BS: 'BS',
  BH: 'BH',
  BD: 'BD',
  BB: 'BB',
  BY: 'BY',
  BE: 'BE',
  BZ: 'BZ',
  BJ: 'BJ',
  BM: 'BM',
  BT: 'BT',
  BO: 'BO',
  BQ: 'BQ',
  BA: 'BA',
  BW: 'BW',
  BV: 'BV',
  BR: 'BR',
  IO: 'IO',
  BN: 'BN',
  BG: 'BG',
  BF: 'BF',
  BI: 'BI',
  KH: 'KH',
  CM: 'CM',
  CA: 'CA',
  CV: 'CV',
  KY: 'KY',
  CF: 'CF',
  TD: 'TD',
  CL: 'CL',
  CN: 'CN',
  CX: 'CX',
  CC: 'CC',
  CO: 'CO',
  KM: 'KM',
  CG: 'CG',
  CD: 'CD',
  CK: 'CK',
  CR: 'CR',
  CI: 'CI',
  HR: 'HR',
  CW: 'CW',
  CY: 'CY',
  CZ: 'CZ',
  DK: 'DK',
  DJ: 'DJ',
  DM: 'DM',
  DO: 'DO',
  EC: 'EC',
  EG: 'EG',
  SV: 'SV',
  GQ: 'GQ',
  ER: 'ER',
  EE: 'EE',
  ET: 'ET',
  FK: 'FK',
  FO: 'FO',
  FJ: 'FJ',
  FI: 'FI',
  FR: 'FR',
  GF: 'GF',
  PF: 'PF',
  TF: 'TF',
  GA: 'GA',
  GM: 'GM',
  GE: 'GE',
  DE: 'DE',
  GH: 'GH',
  GI: 'GI',
  GR: 'GR',
  GL: 'GL',
  GD: 'GD',
  GP: 'GP',
  GU: 'GU',
  GT: 'GT',
  GG: 'GG',
  GN: 'GN',
  GW: 'GW',
  GY: 'GY',
  HT: 'HT',
  HM: 'HM',
  HN: 'HN',
  HK: 'HK',
  HU: 'HU',
  IS: 'IS',
  IN: 'IN',
  ID: 'ID',
  IR: 'IR',
  IQ: 'IQ',
  IE: 'IE',
  IM: 'IM',
  IL: 'IL',
  IT: 'IT',
  JM: 'JM',
  JP: 'JP',
  JE: 'JE',
  JO: 'JO',
  KZ: 'KZ',
  KE: 'KE',
  KI: 'KI',
  KR: 'KR',
  KW: 'KW',
  KG: 'KG',
  LA: 'LA',
  LV: 'LV',
  LB: 'LB',
  LS: 'LS',
  LR: 'LR',
  LY: 'LY',
  LI: 'LI',
  LT: 'LT',
  LU: 'LU',
  MO: 'MO',
  MK: 'MK',
  MG: 'MG',
  MW: 'MW',
  MY: 'MY',
  MV: 'MV',
  ML: 'ML',
  MT: 'MT',
  MH: 'MH',
  MQ: 'MQ',
  MR: 'MR',
  MU: 'MU',
  YT: 'YT',
  MX: 'MX',
  FM: 'FM',
  MD: 'MD',
  MC: 'MC',
  MN: 'MN',
  ME: 'ME',
  MS: 'MS',
  MA: 'MA',
  MZ: 'MZ',
  MM: 'MM',
  NA: 'NA',
  NR: 'NR',
  NP: 'NP',
  NL: 'NL',
  NC: 'NC',
  NZ: 'NZ',
  NI: 'NI',
  NE: 'NE',
  NG: 'NG',
  NU: 'NU',
  NF: 'NF',
  MP: 'MP',
  NO: 'NO',
  OM: 'OM',
  PK: 'PK',
  PW: 'PW',
  PS: 'PS',
  PA: 'PA',
  PG: 'PG',
  PY: 'PY',
  PE: 'PE',
  PH: 'PH',
  PN: 'PN',
  PL: 'PL',
  PT: 'PT',
  PR: 'PR',
  QA: 'QA',
  RE: 'RE',
  RO: 'RO',
  RU: 'RU',
  RW: 'RW',
  BL: 'BL',
  SH: 'SH',
  KN: 'KN',
  LC: 'LC',
  MF: 'MF',
  PM: 'PM',
  VC: 'VC',
  WS: 'WS',
  SM: 'SM',
  ST: 'ST',
  SA: 'SA',
  SN: 'SN',
  RS: 'RS',
  SC: 'SC',
  SL: 'SL',
  SG: 'SG',
  SX: 'SX',
  SK: 'SK',
  SI: 'SI',
  SB: 'SB',
  SO: 'SO',
  ZA: 'ZA',
  GS: 'GS',
  SS: 'SS',
  ES: 'ES',
  LK: 'LK',
  SD: 'SD',
  SR: 'SR',
  SJ: 'SJ',
  SZ: 'SZ',
  SE: 'SE',
  CH: 'CH',
  TW: 'TW',
  TJ: 'TJ',
  TZ: 'TZ',
  TH: 'TH',
  TL: 'TL',
  TG: 'TG',
  TK: 'TK',
  TO: 'TO',
  TT: 'TT',
  TN: 'TN',
  TR: 'TR',
  TM: 'TM',
  TC: 'TC',
  TV: 'TV',
  UG: 'UG',
  UA: 'UA',
  AE: 'AE',
  GB: 'GB',
  UM: 'UM',
  US: 'US',
  UY: 'UY',
  UZ: 'UZ',
  VU: 'VU',
  VA: 'VA',
  VE: 'VE',
  VN: 'VN',
  VG: 'VG',
  VI: 'VI',
  WF: 'WF',
  EH: 'EH',
  YE: 'YE',
  ZM: 'ZM',
  ZW: 'ZW',
}

module.exports.enumSponsorsGoalKind = {
  TOTAL_SPONSORS_COUNT: 'TOTAL_SPONSORS_COUNT',
  MONTHLY_SPONSORSHIP_AMOUNT: 'MONTHLY_SPONSORSHIP_AMOUNT',
}

module.exports.enumSponsorsListingFeaturedItemFeatureableType = {
  REPOSITORY: 'REPOSITORY',
  USER: 'USER',
}

module.exports.enumSponsorsTierOrderField = {
  CREATED_AT: 'CREATED_AT',
  MONTHLY_PRICE_IN_CENTS: 'MONTHLY_PRICE_IN_CENTS',
}

module.exports.enumSponsorshipNewsletterOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumSponsorshipOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumSponsorshipPrivacy = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
}

module.exports.enumSquashMergeCommitMessage = {
  PR_BODY: 'PR_BODY',
  COMMIT_MESSAGES: 'COMMIT_MESSAGES',
  BLANK: 'BLANK',
}

module.exports.enumSquashMergeCommitTitle = {
  PR_TITLE: 'PR_TITLE',
  COMMIT_OR_PR_TITLE: 'COMMIT_OR_PR_TITLE',
}

module.exports.enumStarOrderField = {
  STARRED_AT: 'STARRED_AT',
}

module.exports.enumStatusState = {
  EXPECTED: 'EXPECTED',
  ERROR: 'ERROR',
  FAILURE: 'FAILURE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
}

module.exports.enumSubscriptionState = {
  UNSUBSCRIBED: 'UNSUBSCRIBED',
  SUBSCRIBED: 'SUBSCRIBED',
  IGNORED: 'IGNORED',
}

module.exports.enumTeamDiscussionCommentOrderField = {
  NUMBER: 'NUMBER',
}

module.exports.enumTeamDiscussionOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumTeamMemberOrderField = {
  LOGIN: 'LOGIN',
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumTeamMemberRole = {
  MAINTAINER: 'MAINTAINER',
  MEMBER: 'MEMBER',
}

module.exports.enumTeamMembershipType = {
  IMMEDIATE: 'IMMEDIATE',
  CHILD_TEAM: 'CHILD_TEAM',
  ALL: 'ALL',
}

module.exports.enumTeamOrderField = {
  NAME: 'NAME',
}

module.exports.enumTeamPrivacy = {
  SECRET: 'SECRET',
  VISIBLE: 'VISIBLE',
}

module.exports.enumTeamRepositoryOrderField = {
  CREATED_AT: 'CREATED_AT',
  UPDATED_AT: 'UPDATED_AT',
  PUSHED_AT: 'PUSHED_AT',
  NAME: 'NAME',
  PERMISSION: 'PERMISSION',
  STARGAZERS: 'STARGAZERS',
}

module.exports.enumTeamRole = {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
}

module.exports.enumTopicSuggestionDeclineReason = {
  NOT_RELEVANT: 'NOT_RELEVANT',
  TOO_SPECIFIC: 'TOO_SPECIFIC',
  PERSONAL_PREFERENCE: 'PERSONAL_PREFERENCE',
  TOO_GENERAL: 'TOO_GENERAL',
}

module.exports.enumTrackedIssueStates = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
}

module.exports.enumUserBlockDuration = {
  ONE_DAY: 'ONE_DAY',
  THREE_DAYS: 'THREE_DAYS',
  ONE_WEEK: 'ONE_WEEK',
  ONE_MONTH: 'ONE_MONTH',
  PERMANENT: 'PERMANENT',
}

module.exports.enumUserStatusOrderField = {
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumVerifiableDomainOrderField = {
  DOMAIN: 'DOMAIN',
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumWorkflowRunOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
module.exports.generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
module.exports.generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
module.exports.everything = {
  __scalar: true,
}

var schemaExports = require('./guards.cjs')
for (var k in schemaExports) {
  module.exports[k] = schemaExports[k]
}
