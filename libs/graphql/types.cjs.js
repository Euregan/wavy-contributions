module.exports = {
    "scalars": [
        8,
        65,
        73,
        80,
        109,
        113,
        121,
        123,
        124,
        150,
        152,
        153,
        163,
        171,
        178,
        251,
        252,
        255,
        300,
        310,
        314,
        321,
        325,
        329,
        330,
        344,
        350,
        353,
        368,
        369,
        370,
        373,
        374,
        375,
        381,
        382,
        383,
        398,
        406,
        408,
        413,
        414,
        416,
        417,
        430,
        431,
        439,
        449,
        450,
        456,
        457,
        459,
        460,
        466,
        472,
        473,
        474,
        477,
        482,
        483,
        486,
        491,
        498,
        499,
        500,
        508,
        514,
        521,
        535,
        542,
        561,
        562,
        565,
        569,
        570,
        576,
        577,
        589,
        591,
        594,
        595,
        596,
        599,
        604,
        612,
        619,
        621,
        622,
        624,
        625,
        633,
        635,
        637,
        652,
        653,
        656,
        657,
        660,
        670,
        672,
        676,
        681,
        684,
        692,
        696,
        697,
        702,
        709,
        713,
        717,
        720,
        728,
        736,
        739,
        742,
        743,
        755,
        756,
        779,
        781,
        782,
        787,
        798,
        802,
        804,
        808,
        823,
        825,
        830,
        833,
        835,
        836,
        841,
        850,
        851,
        864,
        868,
        877,
        894,
        924,
        926,
        929,
        931,
        943,
        945,
        947,
        949,
        951,
        959,
        965,
        966,
        967,
        972,
        973,
        978,
        979,
        982,
        984,
        985,
        989,
        994,
        996,
        999,
        1026,
        1027,
        1028,
        1033,
        1037,
        1039,
        1041,
        1045,
        1047,
        1051,
        1056,
        1071,
        1077,
        1079,
        1083,
        1084,
        1085,
        1087,
        1091,
        1097,
        1105,
        1107,
        1108,
        1109,
        1110,
        1113,
        1128,
        1129,
        1137,
        1151,
        1155,
        1160,
        1161,
        1162,
        1164,
        1165,
        1171,
        1172,
        1177,
        1178,
        1186,
        1334,
        1346,
        1351,
        1362,
        1363
    ],
    "types": {
        "AbortQueuedMigrationsInput": {
            "ownerId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AbortQueuedMigrationsPayload": {
            "clientMutationId": [
                1129
            ],
            "success": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "AcceptEnterpriseAdministratorInvitationInput": {
            "invitationId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AcceptEnterpriseAdministratorInvitationPayload": {
            "clientMutationId": [
                1129
            ],
            "invitation": [
                364
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AcceptTopicSuggestionInput": {
            "repositoryId": [
                472
            ],
            "name": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AcceptTopicSuggestionPayload": {
            "clientMutationId": [
                1129
            ],
            "topic": [
                1175
            ],
            "__typename": [
                1129
            ]
        },
        "Actor": {
            "avatarUrl": [
                1186,
                {
                    "size": [
                        474
                    ]
                }
            ],
            "login": [
                1129
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "on_Bot": [
                81
            ],
            "on_EnterpriseUserAccount": [
                415
            ],
            "on_Mannequin": [
                538
            ],
            "on_Organization": [
                639
            ],
            "on_User": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "ActorLocation": {
            "city": [
                1129
            ],
            "country": [
                1129
            ],
            "countryCode": [
                1129
            ],
            "region": [
                1129
            ],
            "regionCode": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ActorType": {},
        "AddAssigneesToAssignableInput": {
            "assignableId": [
                472
            ],
            "assigneeIds": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddAssigneesToAssignablePayload": {
            "assignable": [
                59
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddCommentInput": {
            "subjectId": [
                472
            ],
            "body": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddCommentPayload": {
            "clientMutationId": [
                1129
            ],
            "commentEdge": [
                489
            ],
            "subject": [
                588
            ],
            "timelineEdge": [
                504
            ],
            "__typename": [
                1129
            ]
        },
        "AddDiscussionCommentInput": {
            "discussionId": [
                472
            ],
            "replyToId": [
                472
            ],
            "body": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddDiscussionCommentPayload": {
            "clientMutationId": [
                1129
            ],
            "comment": [
                338
            ],
            "__typename": [
                1129
            ]
        },
        "AddDiscussionPollVoteInput": {
            "pollOptionId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddDiscussionPollVotePayload": {
            "clientMutationId": [
                1129
            ],
            "pollOption": [
                346
            ],
            "__typename": [
                1129
            ]
        },
        "AddEnterpriseOrganizationMemberInput": {
            "enterpriseId": [
                472
            ],
            "organizationId": [
                472
            ],
            "userIds": [
                472
            ],
            "role": [
                656
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddEnterpriseOrganizationMemberPayload": {
            "clientMutationId": [
                1129
            ],
            "users": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "AddEnterpriseSupportEntitlementInput": {
            "enterpriseId": [
                472
            ],
            "login": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddEnterpriseSupportEntitlementPayload": {
            "clientMutationId": [
                1129
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddLabelsToLabelableInput": {
            "labelableId": [
                472
            ],
            "labelIds": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddLabelsToLabelablePayload": {
            "clientMutationId": [
                1129
            ],
            "labelable": [
                515
            ],
            "__typename": [
                1129
            ]
        },
        "AddProjectCardInput": {
            "projectColumnId": [
                472
            ],
            "contentId": [
                472
            ],
            "note": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddProjectCardPayload": {
            "cardEdge": [
                711
            ],
            "clientMutationId": [
                1129
            ],
            "projectColumn": [
                714
            ],
            "__typename": [
                1129
            ]
        },
        "AddProjectColumnInput": {
            "projectId": [
                472
            ],
            "name": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddProjectColumnPayload": {
            "clientMutationId": [
                1129
            ],
            "columnEdge": [
                716
            ],
            "project": [
                707
            ],
            "__typename": [
                1129
            ]
        },
        "AddProjectDraftIssueInput": {
            "projectId": [
                472
            ],
            "title": [
                1129
            ],
            "body": [
                1129
            ],
            "assigneeIds": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddProjectDraftIssuePayload": {
            "clientMutationId": [
                1129
            ],
            "projectNextItem": [
                729
            ],
            "__typename": [
                1129
            ]
        },
        "AddProjectNextItemInput": {
            "projectId": [
                472
            ],
            "contentId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddProjectNextItemPayload": {
            "clientMutationId": [
                1129
            ],
            "projectNextItem": [
                729
            ],
            "__typename": [
                1129
            ]
        },
        "AddProjectV2DraftIssueInput": {
            "projectId": [
                472
            ],
            "title": [
                1129
            ],
            "body": [
                1129
            ],
            "assigneeIds": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddProjectV2DraftIssuePayload": {
            "clientMutationId": [
                1129
            ],
            "projectItem": [
                759
            ],
            "__typename": [
                1129
            ]
        },
        "AddProjectV2ItemByIdInput": {
            "projectId": [
                472
            ],
            "contentId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddProjectV2ItemByIdPayload": {
            "clientMutationId": [
                1129
            ],
            "item": [
                759
            ],
            "__typename": [
                1129
            ]
        },
        "AddPullRequestReviewCommentInput": {
            "pullRequestId": [
                472
            ],
            "pullRequestReviewId": [
                472
            ],
            "commitOID": [
                456
            ],
            "body": [
                1129
            ],
            "path": [
                1129
            ],
            "position": [
                474
            ],
            "inReplyTo": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddPullRequestReviewCommentPayload": {
            "clientMutationId": [
                1129
            ],
            "comment": [
                827
            ],
            "commentEdge": [
                829
            ],
            "__typename": [
                1129
            ]
        },
        "AddPullRequestReviewInput": {
            "pullRequestId": [
                472
            ],
            "commitOID": [
                456
            ],
            "body": [
                1129
            ],
            "event": [
                835
            ],
            "comments": [
                357
            ],
            "threads": [
                358
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddPullRequestReviewPayload": {
            "clientMutationId": [
                1129
            ],
            "pullRequestReview": [
                826
            ],
            "reviewEdge": [
                834
            ],
            "__typename": [
                1129
            ]
        },
        "AddPullRequestReviewThreadInput": {
            "path": [
                1129
            ],
            "body": [
                1129
            ],
            "pullRequestId": [
                472
            ],
            "pullRequestReviewId": [
                472
            ],
            "line": [
                474
            ],
            "side": [
                330
            ],
            "startLine": [
                474
            ],
            "startSide": [
                330
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddPullRequestReviewThreadPayload": {
            "clientMutationId": [
                1129
            ],
            "thread": [
                837
            ],
            "__typename": [
                1129
            ]
        },
        "AddReactionInput": {
            "subjectId": [
                472
            ],
            "content": [
                864
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddReactionPayload": {
            "clientMutationId": [
                1129
            ],
            "reaction": [
                862
            ],
            "subject": [
                859
            ],
            "__typename": [
                1129
            ]
        },
        "AddStarInput": {
            "starrableId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddStarPayload": {
            "clientMutationId": [
                1129
            ],
            "starrable": [
                1116
            ],
            "__typename": [
                1129
            ]
        },
        "AddUpvoteInput": {
            "subjectId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddUpvotePayload": {
            "clientMutationId": [
                1129
            ],
            "subject": [
                1356
            ],
            "__typename": [
                1129
            ]
        },
        "AddVerifiableDomainInput": {
            "ownerId": [
                472
            ],
            "domain": [
                1186
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AddVerifiableDomainPayload": {
            "clientMutationId": [
                1129
            ],
            "domain": [
                1347
            ],
            "__typename": [
                1129
            ]
        },
        "AddedToProjectEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "__typename": [
                1129
            ]
        },
        "App": {
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "description": [
                1129
            ],
            "id": [
                472
            ],
            "ipAllowListEntries": [
                479,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        481
                    ]
                }
            ],
            "logoBackgroundColor": [
                1129
            ],
            "logoUrl": [
                1186,
                {
                    "size": [
                        474
                    ]
                }
            ],
            "name": [
                1129
            ],
            "slug": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "ApproveDeploymentsInput": {
            "workflowRunId": [
                472
            ],
            "environmentIds": [
                472
            ],
            "comment": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ApproveDeploymentsPayload": {
            "clientMutationId": [
                1129
            ],
            "deployments": [
                305
            ],
            "__typename": [
                1129
            ]
        },
        "ApproveVerifiableDomainInput": {
            "id": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ApproveVerifiableDomainPayload": {
            "clientMutationId": [
                1129
            ],
            "domain": [
                1347
            ],
            "__typename": [
                1129
            ]
        },
        "ArchiveProjectV2ItemInput": {
            "projectId": [
                472
            ],
            "itemId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ArchiveProjectV2ItemPayload": {
            "clientMutationId": [
                1129
            ],
            "item": [
                759
            ],
            "__typename": [
                1129
            ]
        },
        "ArchiveRepositoryInput": {
            "repositoryId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ArchiveRepositoryPayload": {
            "clientMutationId": [
                1129
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "Assignable": {
            "assignees": [
                1336,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "on_Issue": [
                485
            ],
            "on_PullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "AssignedEvent": {
            "actor": [
                6
            ],
            "assignable": [
                59
            ],
            "assignee": [
                61
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "Assignee": {
            "on_Bot": [
                81
            ],
            "on_Mannequin": [
                538
            ],
            "on_Organization": [
                639
            ],
            "on_User": [
                1333
            ],
            "on_Node": [
                588
            ],
            "on_Actor": [
                6
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_MemberStatusable": [
                554
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "AuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "operationType": [
                595
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "on_MembersCanDeleteReposClearAuditEntry": [
                555
            ],
            "on_MembersCanDeleteReposDisableAuditEntry": [
                556
            ],
            "on_MembersCanDeleteReposEnableAuditEntry": [
                557
            ],
            "on_OauthApplicationCreateAuditEntry": [
                593
            ],
            "on_OrgAddBillingManagerAuditEntry": [
                597
            ],
            "on_OrgAddMemberAuditEntry": [
                598
            ],
            "on_OrgBlockUserAuditEntry": [
                600
            ],
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": [
                601
            ],
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": [
                602
            ],
            "on_OrgCreateAuditEntry": [
                603
            ],
            "on_OrgDisableOauthAppRestrictionsAuditEntry": [
                605
            ],
            "on_OrgDisableSamlAuditEntry": [
                606
            ],
            "on_OrgDisableTwoFactorRequirementAuditEntry": [
                607
            ],
            "on_OrgEnableOauthAppRestrictionsAuditEntry": [
                608
            ],
            "on_OrgEnableSamlAuditEntry": [
                609
            ],
            "on_OrgEnableTwoFactorRequirementAuditEntry": [
                610
            ],
            "on_OrgInviteMemberAuditEntry": [
                613
            ],
            "on_OrgInviteToBusinessAuditEntry": [
                614
            ],
            "on_OrgOauthAppAccessApprovedAuditEntry": [
                615
            ],
            "on_OrgOauthAppAccessDeniedAuditEntry": [
                616
            ],
            "on_OrgOauthAppAccessRequestedAuditEntry": [
                617
            ],
            "on_OrgRemoveBillingManagerAuditEntry": [
                618
            ],
            "on_OrgRemoveMemberAuditEntry": [
                620
            ],
            "on_OrgRemoveOutsideCollaboratorAuditEntry": [
                623
            ],
            "on_OrgRestoreMemberAuditEntry": [
                626
            ],
            "on_OrgUnblockUserAuditEntry": [
                631
            ],
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": [
                632
            ],
            "on_OrgUpdateMemberAuditEntry": [
                634
            ],
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": [
                636
            ],
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": [
                638
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                703
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                704
            ],
            "on_RepoAccessAuditEntry": [
                923
            ],
            "on_RepoAddMemberAuditEntry": [
                925
            ],
            "on_RepoAddTopicAuditEntry": [
                927
            ],
            "on_RepoArchivedAuditEntry": [
                928
            ],
            "on_RepoChangeMergeSettingAuditEntry": [
                930
            ],
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": [
                932
            ],
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": [
                933
            ],
            "on_RepoConfigDisableContributorsOnlyAuditEntry": [
                934
            ],
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": [
                935
            ],
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": [
                936
            ],
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": [
                937
            ],
            "on_RepoConfigEnableContributorsOnlyAuditEntry": [
                938
            ],
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": [
                939
            ],
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": [
                940
            ],
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": [
                941
            ],
            "on_RepoCreateAuditEntry": [
                942
            ],
            "on_RepoDestroyAuditEntry": [
                944
            ],
            "on_RepoRemoveMemberAuditEntry": [
                946
            ],
            "on_RepoRemoveTopicAuditEntry": [
                948
            ],
            "on_RepositoryVisibilityChangeDisableAuditEntry": [
                990
            ],
            "on_RepositoryVisibilityChangeEnableAuditEntry": [
                991
            ],
            "on_TeamAddMemberAuditEntry": [
                1141
            ],
            "on_TeamAddRepositoryAuditEntry": [
                1142
            ],
            "on_TeamChangeParentTeamAuditEntry": [
                1144
            ],
            "on_TeamRemoveMemberAuditEntry": [
                1166
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                1167
            ],
            "__typename": [
                1129
            ]
        },
        "AuditEntryActor": {
            "on_Bot": [
                81
            ],
            "on_Organization": [
                639
            ],
            "on_User": [
                1333
            ],
            "on_Node": [
                588
            ],
            "on_Actor": [
                6
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_MemberStatusable": [
                554
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "AuditLogOrder": {
            "field": [
                65
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "AuditLogOrderField": {},
        "AutoMergeDisabledEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "disabler": [
                1333
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "reason": [
                1129
            ],
            "reasonCode": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "AutoMergeEnabledEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "enabler": [
                1333
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "AutoMergeRequest": {
            "authorEmail": [
                1129
            ],
            "commitBody": [
                1129
            ],
            "commitHeadline": [
                1129
            ],
            "enabledAt": [
                252
            ],
            "enabledBy": [
                6
            ],
            "mergeMethod": [
                823
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "AutoRebaseEnabledEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "enabler": [
                1333
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "AutoSquashEnabledEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "enabler": [
                1333
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "AutomaticBaseChangeFailedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "newBase": [
                1129
            ],
            "oldBase": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "AutomaticBaseChangeSucceededEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "newBase": [
                1129
            ],
            "oldBase": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "Base64String": {},
        "BaseRefChangedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "currentRefName": [
                1129
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "previousRefName": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "BaseRefDeletedEvent": {
            "actor": [
                6
            ],
            "baseRefName": [
                1129
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "BaseRefForcePushedEvent": {
            "actor": [
                6
            ],
            "afterCommit": [
                155
            ],
            "beforeCommit": [
                155
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "ref": [
                873
            ],
            "__typename": [
                1129
            ]
        },
        "Blame": {
            "ranges": [
                78
            ],
            "__typename": [
                1129
            ]
        },
        "BlameRange": {
            "age": [
                474
            ],
            "commit": [
                155
            ],
            "endingLine": [
                474
            ],
            "startingLine": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "Blob": {
            "abbreviatedOid": [
                1129
            ],
            "byteSize": [
                474
            ],
            "commitResourcePath": [
                1186
            ],
            "commitUrl": [
                1186
            ],
            "id": [
                472
            ],
            "isBinary": [
                80
            ],
            "isTruncated": [
                80
            ],
            "oid": [
                456
            ],
            "repository": [
                950
            ],
            "text": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "Boolean": {},
        "Bot": {
            "avatarUrl": [
                1186,
                {
                    "size": [
                        474
                    ]
                }
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "login": [
                1129
            ],
            "resourcePath": [
                1186
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "BranchActorAllowanceActor": {
            "on_App": [
                50
            ],
            "on_Team": [
                1140
            ],
            "on_User": [
                1333
            ],
            "on_Node": [
                588
            ],
            "on_Subscribable": [
                1135
            ],
            "on_MemberStatusable": [
                554
            ],
            "on_Actor": [
                6
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "BranchProtectionRule": {
            "allowsDeletions": [
                80
            ],
            "allowsForcePushes": [
                80
            ],
            "blocksCreations": [
                80
            ],
            "branchProtectionRuleConflicts": [
                85,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "bypassForcePushAllowances": [
                90,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "bypassPullRequestAllowances": [
                93,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "creator": [
                6
            ],
            "databaseId": [
                474
            ],
            "dismissesStaleReviews": [
                80
            ],
            "id": [
                472
            ],
            "isAdminEnforced": [
                80
            ],
            "lockAllowsFetchAndMerge": [
                80
            ],
            "lockBranch": [
                80
            ],
            "matchingRefs": [
                874,
                {
                    "query": [
                        1129
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "pattern": [
                1129
            ],
            "pushAllowances": [
                855,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "repository": [
                950
            ],
            "requireLastPushApproval": [
                80
            ],
            "requiredApprovingReviewCount": [
                474
            ],
            "requiredStatusCheckContexts": [
                1129
            ],
            "requiredStatusChecks": [
                1004
            ],
            "requiresApprovingReviews": [
                80
            ],
            "requiresCodeOwnerReviews": [
                80
            ],
            "requiresCommitSignatures": [
                80
            ],
            "requiresConversationResolution": [
                80
            ],
            "requiresLinearHistory": [
                80
            ],
            "requiresStatusChecks": [
                80
            ],
            "requiresStrictStatusChecks": [
                80
            ],
            "restrictsPushes": [
                80
            ],
            "restrictsReviewDismissals": [
                80
            ],
            "reviewDismissalAllowances": [
                1013,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "BranchProtectionRuleConflict": {
            "branchProtectionRule": [
                83
            ],
            "conflictingBranchProtectionRule": [
                83
            ],
            "ref": [
                873
            ],
            "__typename": [
                1129
            ]
        },
        "BranchProtectionRuleConflictConnection": {
            "edges": [
                86
            ],
            "nodes": [
                84
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "BranchProtectionRuleConflictEdge": {
            "cursor": [
                1129
            ],
            "node": [
                84
            ],
            "__typename": [
                1129
            ]
        },
        "BranchProtectionRuleConnection": {
            "edges": [
                88
            ],
            "nodes": [
                83
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "BranchProtectionRuleEdge": {
            "cursor": [
                1129
            ],
            "node": [
                83
            ],
            "__typename": [
                1129
            ]
        },
        "BypassForcePushAllowance": {
            "actor": [
                82
            ],
            "branchProtectionRule": [
                83
            ],
            "id": [
                472
            ],
            "__typename": [
                1129
            ]
        },
        "BypassForcePushAllowanceConnection": {
            "edges": [
                91
            ],
            "nodes": [
                89
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "BypassForcePushAllowanceEdge": {
            "cursor": [
                1129
            ],
            "node": [
                89
            ],
            "__typename": [
                1129
            ]
        },
        "BypassPullRequestAllowance": {
            "actor": [
                82
            ],
            "branchProtectionRule": [
                83
            ],
            "id": [
                472
            ],
            "__typename": [
                1129
            ]
        },
        "BypassPullRequestAllowanceConnection": {
            "edges": [
                94
            ],
            "nodes": [
                92
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "BypassPullRequestAllowanceEdge": {
            "cursor": [
                1129
            ],
            "node": [
                92
            ],
            "__typename": [
                1129
            ]
        },
        "CVSS": {
            "score": [
                431
            ],
            "vectorString": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CWE": {
            "cweId": [
                1129
            ],
            "description": [
                1129
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CWEConnection": {
            "edges": [
                98
            ],
            "nodes": [
                96
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "CWEEdge": {
            "cursor": [
                1129
            ],
            "node": [
                96
            ],
            "__typename": [
                1129
            ]
        },
        "CancelEnterpriseAdminInvitationInput": {
            "invitationId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CancelEnterpriseAdminInvitationPayload": {
            "clientMutationId": [
                1129
            ],
            "invitation": [
                364
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CancelSponsorshipInput": {
            "sponsorId": [
                472
            ],
            "sponsorLogin": [
                1129
            ],
            "sponsorableId": [
                472
            ],
            "sponsorableLogin": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CancelSponsorshipPayload": {
            "clientMutationId": [
                1129
            ],
            "sponsorsTier": [
                1092
            ],
            "__typename": [
                1129
            ]
        },
        "ChangeUserStatusInput": {
            "emoji": [
                1129
            ],
            "message": [
                1129
            ],
            "organizationId": [
                472
            ],
            "limitedAvailability": [
                80
            ],
            "expiresAt": [
                252
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ChangeUserStatusPayload": {
            "clientMutationId": [
                1129
            ],
            "status": [
                1342
            ],
            "__typename": [
                1129
            ]
        },
        "CheckAnnotation": {
            "annotationLevel": [
                109
            ],
            "blobUrl": [
                1186
            ],
            "databaseId": [
                474
            ],
            "location": [
                112
            ],
            "message": [
                1129
            ],
            "path": [
                1129
            ],
            "rawDetails": [
                1129
            ],
            "title": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CheckAnnotationConnection": {
            "edges": [
                108
            ],
            "nodes": [
                105
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "CheckAnnotationData": {
            "path": [
                1129
            ],
            "location": [
                111
            ],
            "annotationLevel": [
                109
            ],
            "message": [
                1129
            ],
            "title": [
                1129
            ],
            "rawDetails": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CheckAnnotationEdge": {
            "cursor": [
                1129
            ],
            "node": [
                105
            ],
            "__typename": [
                1129
            ]
        },
        "CheckAnnotationLevel": {},
        "CheckAnnotationPosition": {
            "column": [
                474
            ],
            "line": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "CheckAnnotationRange": {
            "startLine": [
                474
            ],
            "startColumn": [
                474
            ],
            "endLine": [
                474
            ],
            "endColumn": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "CheckAnnotationSpan": {
            "end": [
                110
            ],
            "start": [
                110
            ],
            "__typename": [
                1129
            ]
        },
        "CheckConclusionState": {},
        "CheckRun": {
            "annotations": [
                106,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "checkSuite": [
                128
            ],
            "completedAt": [
                252
            ],
            "conclusion": [
                113
            ],
            "databaseId": [
                474
            ],
            "deployment": [
                305
            ],
            "detailsUrl": [
                1186
            ],
            "externalId": [
                1129
            ],
            "id": [
                472
            ],
            "isRequired": [
                80,
                {
                    "pullRequestId": [
                        472
                    ],
                    "pullRequestNumber": [
                        474
                    ]
                }
            ],
            "name": [
                1129
            ],
            "pendingDeploymentRequest": [
                315
            ],
            "permalink": [
                1186
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "startedAt": [
                252
            ],
            "status": [
                124
            ],
            "steps": [
                126,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "number": [
                        474
                    ]
                }
            ],
            "summary": [
                1129
            ],
            "text": [
                1129
            ],
            "title": [
                1129
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "CheckRunAction": {
            "label": [
                1129
            ],
            "description": [
                1129
            ],
            "identifier": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CheckRunConnection": {
            "edges": [
                117
            ],
            "nodes": [
                114
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "CheckRunEdge": {
            "cursor": [
                1129
            ],
            "node": [
                114
            ],
            "__typename": [
                1129
            ]
        },
        "CheckRunFilter": {
            "checkType": [
                123
            ],
            "appId": [
                474
            ],
            "checkName": [
                1129
            ],
            "status": [
                124
            ],
            "statuses": [
                124
            ],
            "conclusions": [
                113
            ],
            "__typename": [
                1129
            ]
        },
        "CheckRunOutput": {
            "title": [
                1129
            ],
            "summary": [
                1129
            ],
            "text": [
                1129
            ],
            "annotations": [
                107
            ],
            "images": [
                120
            ],
            "__typename": [
                1129
            ]
        },
        "CheckRunOutputImage": {
            "alt": [
                1129
            ],
            "imageUrl": [
                1186
            ],
            "caption": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CheckRunState": {},
        "CheckRunStateCount": {
            "count": [
                474
            ],
            "state": [
                121
            ],
            "__typename": [
                1129
            ]
        },
        "CheckRunType": {},
        "CheckStatusState": {},
        "CheckStep": {
            "completedAt": [
                252
            ],
            "conclusion": [
                113
            ],
            "externalId": [
                1129
            ],
            "name": [
                1129
            ],
            "number": [
                474
            ],
            "secondsToCompletion": [
                474
            ],
            "startedAt": [
                252
            ],
            "status": [
                124
            ],
            "__typename": [
                1129
            ]
        },
        "CheckStepConnection": {
            "edges": [
                127
            ],
            "nodes": [
                125
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "CheckStepEdge": {
            "cursor": [
                1129
            ],
            "node": [
                125
            ],
            "__typename": [
                1129
            ]
        },
        "CheckSuite": {
            "app": [
                50
            ],
            "branch": [
                873
            ],
            "checkRuns": [
                116,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "filterBy": [
                        118
                    ]
                }
            ],
            "commit": [
                155
            ],
            "conclusion": [
                113
            ],
            "createdAt": [
                252
            ],
            "creator": [
                1333
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "matchingPullRequests": [
                820,
                {
                    "states": [
                        841,
                        "[PullRequestState!]"
                    ],
                    "labels": [
                        1129,
                        "[String!]"
                    ],
                    "headRefName": [
                        1129
                    ],
                    "baseRefName": [
                        1129
                    ],
                    "orderBy": [
                        497
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "push": [
                852
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "status": [
                124
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "workflowRun": [
                1358
            ],
            "__typename": [
                1129
            ]
        },
        "CheckSuiteAutoTriggerPreference": {
            "appId": [
                472
            ],
            "setting": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "CheckSuiteConnection": {
            "edges": [
                131
            ],
            "nodes": [
                128
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "CheckSuiteEdge": {
            "cursor": [
                1129
            ],
            "node": [
                128
            ],
            "__typename": [
                1129
            ]
        },
        "CheckSuiteFilter": {
            "appId": [
                474
            ],
            "checkName": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "Claimable": {
            "on_Mannequin": [
                538
            ],
            "on_User": [
                1333
            ],
            "on_Node": [
                588
            ],
            "on_Actor": [
                6
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "ClearLabelsFromLabelableInput": {
            "labelableId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ClearLabelsFromLabelablePayload": {
            "clientMutationId": [
                1129
            ],
            "labelable": [
                515
            ],
            "__typename": [
                1129
            ]
        },
        "ClearProjectV2ItemFieldValueInput": {
            "projectId": [
                472
            ],
            "itemId": [
                472
            ],
            "fieldId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ClearProjectV2ItemFieldValuePayload": {
            "clientMutationId": [
                1129
            ],
            "projectV2Item": [
                759
            ],
            "__typename": [
                1129
            ]
        },
        "CloneProjectInput": {
            "targetOwnerId": [
                472
            ],
            "sourceId": [
                472
            ],
            "includeWorkflows": [
                80
            ],
            "name": [
                1129
            ],
            "body": [
                1129
            ],
            "public": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CloneProjectPayload": {
            "clientMutationId": [
                1129
            ],
            "jobStatusId": [
                1129
            ],
            "project": [
                707
            ],
            "__typename": [
                1129
            ]
        },
        "CloneTemplateRepositoryInput": {
            "repositoryId": [
                472
            ],
            "name": [
                1129
            ],
            "ownerId": [
                472
            ],
            "description": [
                1129
            ],
            "visibility": [
                989
            ],
            "includeAllBranches": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CloneTemplateRepositoryPayload": {
            "clientMutationId": [
                1129
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "Closable": {
            "closed": [
                80
            ],
            "closedAt": [
                252
            ],
            "on_Issue": [
                485
            ],
            "on_Milestone": [
                571
            ],
            "on_Project": [
                707
            ],
            "on_ProjectNext": [
                721
            ],
            "on_ProjectV2": [
                744
            ],
            "on_PullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "CloseIssueInput": {
            "issueId": [
                472
            ],
            "stateReason": [
                486
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CloseIssuePayload": {
            "clientMutationId": [
                1129
            ],
            "issue": [
                485
            ],
            "__typename": [
                1129
            ]
        },
        "ClosePullRequestInput": {
            "pullRequestId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ClosePullRequestPayload": {
            "clientMutationId": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "ClosedEvent": {
            "actor": [
                6
            ],
            "closable": [
                142
            ],
            "closer": [
                148
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "resourcePath": [
                1186
            ],
            "stateReason": [
                500
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "Closer": {
            "on_Commit": [
                155
            ],
            "on_PullRequest": [
                812
            ],
            "on_Node": [
                588
            ],
            "on_GitObject": [
                455
            ],
            "on_Subscribable": [
                1135
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_Assignable": [
                59
            ],
            "on_Closable": [
                142
            ],
            "on_Comment": [
                151
            ],
            "on_Updatable": [
                1223
            ],
            "on_UpdatableComment": [
                1224
            ],
            "on_Labelable": [
                515
            ],
            "on_Lockable": [
                536
            ],
            "on_Reactable": [
                859
            ],
            "on_RepositoryNode": [
                980
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "__typename": [
                1129
            ]
        },
        "CodeOfConduct": {
            "body": [
                1129
            ],
            "id": [
                472
            ],
            "key": [
                1129
            ],
            "name": [
                1129
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "CollaboratorAffiliation": {},
        "Comment": {
            "author": [
                6
            ],
            "authorAssociation": [
                152
            ],
            "body": [
                1129
            ],
            "bodyHTML": [
                466
            ],
            "bodyText": [
                1129
            ],
            "createdAt": [
                252
            ],
            "createdViaEmail": [
                80
            ],
            "editor": [
                6
            ],
            "id": [
                472
            ],
            "includesCreatedEdit": [
                80
            ],
            "lastEditedAt": [
                252
            ],
            "publishedAt": [
                252
            ],
            "updatedAt": [
                252
            ],
            "userContentEdits": [
                1338,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "viewerDidAuthor": [
                80
            ],
            "on_CommitComment": [
                157
            ],
            "on_Discussion": [
                334
            ],
            "on_DiscussionComment": [
                338
            ],
            "on_GistComment": [
                442
            ],
            "on_Issue": [
                485
            ],
            "on_IssueComment": [
                487
            ],
            "on_PullRequest": [
                812
            ],
            "on_PullRequestReview": [
                826
            ],
            "on_PullRequestReviewComment": [
                827
            ],
            "on_TeamDiscussion": [
                1146
            ],
            "on_TeamDiscussionComment": [
                1147
            ],
            "__typename": [
                1129
            ]
        },
        "CommentAuthorAssociation": {},
        "CommentCannotUpdateReason": {},
        "CommentDeletedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "deletedCommentAuthor": [
                6
            ],
            "id": [
                472
            ],
            "__typename": [
                1129
            ]
        },
        "Commit": {
            "abbreviatedOid": [
                1129
            ],
            "additions": [
                474
            ],
            "associatedPullRequests": [
                820,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        824
                    ]
                }
            ],
            "author": [
                451
            ],
            "authoredByCommitter": [
                80
            ],
            "authoredDate": [
                252
            ],
            "authors": [
                452,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "blame": [
                77,
                {
                    "path": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "changedFiles": [
                474
            ],
            "changedFilesIfAvailable": [
                474
            ],
            "checkSuites": [
                130,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "filterBy": [
                        132
                    ]
                }
            ],
            "comments": [
                158,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "commitResourcePath": [
                1186
            ],
            "commitUrl": [
                1186
            ],
            "committedDate": [
                252
            ],
            "committedViaWeb": [
                80
            ],
            "committer": [
                451
            ],
            "deletions": [
                474
            ],
            "deployments": [
                306,
                {
                    "environments": [
                        1129,
                        "[String!]"
                    ],
                    "orderBy": [
                        309
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "file": [
                1185,
                {
                    "path": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "history": [
                166,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "path": [
                        1129
                    ],
                    "author": [
                        156
                    ],
                    "since": [
                        460
                    ],
                    "until": [
                        460
                    ]
                }
            ],
            "id": [
                472
            ],
            "message": [
                1129
            ],
            "messageBody": [
                1129
            ],
            "messageBodyHTML": [
                466
            ],
            "messageHeadline": [
                1129
            ],
            "messageHeadlineHTML": [
                466
            ],
            "oid": [
                456
            ],
            "onBehalfOf": [
                639
            ],
            "parents": [
                161,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "pushedDate": [
                252
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "signature": [
                458
            ],
            "status": [
                1121
            ],
            "statusCheckRollup": [
                1122
            ],
            "submodules": [
                1133,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "tarballUrl": [
                1186
            ],
            "tree": [
                1184
            ],
            "treeResourcePath": [
                1186
            ],
            "treeUrl": [
                1186
            ],
            "url": [
                1186
            ],
            "viewerCanSubscribe": [
                80
            ],
            "viewerSubscription": [
                1137
            ],
            "zipballUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "CommitAuthor": {
            "id": [
                472
            ],
            "emails": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CommitComment": {
            "author": [
                6
            ],
            "authorAssociation": [
                152
            ],
            "body": [
                1129
            ],
            "bodyHTML": [
                466
            ],
            "bodyText": [
                1129
            ],
            "commit": [
                155
            ],
            "createdAt": [
                252
            ],
            "createdViaEmail": [
                80
            ],
            "databaseId": [
                474
            ],
            "editor": [
                6
            ],
            "id": [
                472
            ],
            "includesCreatedEdit": [
                80
            ],
            "isMinimized": [
                80
            ],
            "lastEditedAt": [
                252
            ],
            "minimizedReason": [
                1129
            ],
            "path": [
                1129
            ],
            "position": [
                474
            ],
            "publishedAt": [
                252
            ],
            "reactionGroups": [
                866
            ],
            "reactions": [
                863,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "content": [
                        864
                    ],
                    "orderBy": [
                        867
                    ]
                }
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "userContentEdits": [
                1338,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "viewerCanDelete": [
                80
            ],
            "viewerCanMinimize": [
                80
            ],
            "viewerCanReact": [
                80
            ],
            "viewerCanUpdate": [
                80
            ],
            "viewerCannotUpdateReasons": [
                153
            ],
            "viewerDidAuthor": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "CommitCommentConnection": {
            "edges": [
                159
            ],
            "nodes": [
                157
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "CommitCommentEdge": {
            "cursor": [
                1129
            ],
            "node": [
                157
            ],
            "__typename": [
                1129
            ]
        },
        "CommitCommentThread": {
            "comments": [
                158,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "commit": [
                155
            ],
            "id": [
                472
            ],
            "path": [
                1129
            ],
            "position": [
                474
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "CommitConnection": {
            "edges": [
                165
            ],
            "nodes": [
                155
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "CommitContributionOrder": {
            "field": [
                163
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "CommitContributionOrderField": {},
        "CommitContributionsByRepository": {
            "contributions": [
                233,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        162
                    ]
                }
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "CommitEdge": {
            "cursor": [
                1129
            ],
            "node": [
                155
            ],
            "__typename": [
                1129
            ]
        },
        "CommitHistoryConnection": {
            "edges": [
                165
            ],
            "nodes": [
                155
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "CommitMessage": {
            "headline": [
                1129
            ],
            "body": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CommittableBranch": {
            "id": [
                472
            ],
            "repositoryNameWithOwner": [
                1129
            ],
            "branchName": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "Comparison": {
            "aheadBy": [
                474
            ],
            "baseTarget": [
                455
            ],
            "behindBy": [
                474
            ],
            "commits": [
                170,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "headTarget": [
                455
            ],
            "id": [
                472
            ],
            "status": [
                171
            ],
            "__typename": [
                1129
            ]
        },
        "ComparisonCommitConnection": {
            "authorCount": [
                474
            ],
            "edges": [
                165
            ],
            "nodes": [
                155
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ComparisonStatus": {},
        "ConnectedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "isCrossRepository": [
                80
            ],
            "source": [
                880
            ],
            "subject": [
                880
            ],
            "__typename": [
                1129
            ]
        },
        "Contribution": {
            "isRestricted": [
                80
            ],
            "occurredAt": [
                252
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "user": [
                1333
            ],
            "on_CreatedCommitContribution": [
                232
            ],
            "on_CreatedIssueContribution": [
                235
            ],
            "on_CreatedPullRequestContribution": [
                239
            ],
            "on_CreatedPullRequestReviewContribution": [
                243
            ],
            "on_CreatedRepositoryContribution": [
                246
            ],
            "on_JoinedGitHubContribution": [
                509
            ],
            "on_RestrictedContribution": [
                1010
            ],
            "__typename": [
                1129
            ]
        },
        "ContributionCalendar": {
            "colors": [
                1129
            ],
            "isHalloween": [
                80
            ],
            "months": [
                176
            ],
            "totalContributions": [
                474
            ],
            "weeks": [
                177
            ],
            "__typename": [
                1129
            ]
        },
        "ContributionCalendarDay": {
            "color": [
                1129
            ],
            "contributionCount": [
                474
            ],
            "contributionLevel": [
                178
            ],
            "date": [
                251
            ],
            "weekday": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ContributionCalendarMonth": {
            "firstDay": [
                251
            ],
            "name": [
                1129
            ],
            "totalWeeks": [
                474
            ],
            "year": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ContributionCalendarWeek": {
            "contributionDays": [
                175
            ],
            "firstDay": [
                251
            ],
            "__typename": [
                1129
            ]
        },
        "ContributionLevel": {},
        "ContributionOrder": {
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "ContributionsCollection": {
            "commitContributionsByRepository": [
                164,
                {
                    "maxRepositories": [
                        474
                    ]
                }
            ],
            "contributionCalendar": [
                174
            ],
            "contributionYears": [
                474
            ],
            "doesEndInCurrentMonth": [
                80
            ],
            "earliestRestrictedContributionDate": [
                251
            ],
            "endedAt": [
                252
            ],
            "firstIssueContribution": [
                238
            ],
            "firstPullRequestContribution": [
                242
            ],
            "firstRepositoryContribution": [
                249
            ],
            "hasActivityInThePast": [
                80
            ],
            "hasAnyContributions": [
                80
            ],
            "hasAnyRestrictedContributions": [
                80
            ],
            "isSingleDay": [
                80
            ],
            "issueContributions": [
                236,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "excludeFirst": [
                        80
                    ],
                    "excludePopular": [
                        80
                    ],
                    "orderBy": [
                        179
                    ]
                }
            ],
            "issueContributionsByRepository": [
                493,
                {
                    "maxRepositories": [
                        474
                    ],
                    "excludeFirst": [
                        80
                    ],
                    "excludePopular": [
                        80
                    ]
                }
            ],
            "joinedGitHubContribution": [
                509
            ],
            "latestRestrictedContributionDate": [
                251
            ],
            "mostRecentCollectionWithActivity": [
                180
            ],
            "mostRecentCollectionWithoutActivity": [
                180
            ],
            "popularIssueContribution": [
                235
            ],
            "popularPullRequestContribution": [
                239
            ],
            "pullRequestContributions": [
                240,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "excludeFirst": [
                        80
                    ],
                    "excludePopular": [
                        80
                    ],
                    "orderBy": [
                        179
                    ]
                }
            ],
            "pullRequestContributionsByRepository": [
                821,
                {
                    "maxRepositories": [
                        474
                    ],
                    "excludeFirst": [
                        80
                    ],
                    "excludePopular": [
                        80
                    ]
                }
            ],
            "pullRequestReviewContributions": [
                244,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        179
                    ]
                }
            ],
            "pullRequestReviewContributionsByRepository": [
                832,
                {
                    "maxRepositories": [
                        474
                    ]
                }
            ],
            "repositoryContributions": [
                247,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "excludeFirst": [
                        80
                    ],
                    "orderBy": [
                        179
                    ]
                }
            ],
            "restrictedContributionsCount": [
                474
            ],
            "startedAt": [
                252
            ],
            "totalCommitContributions": [
                474
            ],
            "totalIssueContributions": [
                474,
                {
                    "excludeFirst": [
                        80
                    ],
                    "excludePopular": [
                        80
                    ]
                }
            ],
            "totalPullRequestContributions": [
                474,
                {
                    "excludeFirst": [
                        80
                    ],
                    "excludePopular": [
                        80
                    ]
                }
            ],
            "totalPullRequestReviewContributions": [
                474
            ],
            "totalRepositoriesWithContributedCommits": [
                474
            ],
            "totalRepositoriesWithContributedIssues": [
                474,
                {
                    "excludeFirst": [
                        80
                    ],
                    "excludePopular": [
                        80
                    ]
                }
            ],
            "totalRepositoriesWithContributedPullRequestReviews": [
                474
            ],
            "totalRepositoriesWithContributedPullRequests": [
                474,
                {
                    "excludeFirst": [
                        80
                    ],
                    "excludePopular": [
                        80
                    ]
                }
            ],
            "totalRepositoryContributions": [
                474,
                {
                    "excludeFirst": [
                        80
                    ]
                }
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "ConvertProjectCardNoteToIssueInput": {
            "projectCardId": [
                472
            ],
            "repositoryId": [
                472
            ],
            "title": [
                1129
            ],
            "body": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ConvertProjectCardNoteToIssuePayload": {
            "clientMutationId": [
                1129
            ],
            "projectCard": [
                708
            ],
            "__typename": [
                1129
            ]
        },
        "ConvertPullRequestToDraftInput": {
            "pullRequestId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ConvertPullRequestToDraftPayload": {
            "clientMutationId": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "ConvertToDraftEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "ConvertedNoteToIssueEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "__typename": [
                1129
            ]
        },
        "ConvertedToDiscussionEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "discussion": [
                334
            ],
            "id": [
                472
            ],
            "__typename": [
                1129
            ]
        },
        "CreateAttributionInvitationInput": {
            "ownerId": [
                472
            ],
            "sourceId": [
                472
            ],
            "targetId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateAttributionInvitationPayload": {
            "clientMutationId": [
                1129
            ],
            "owner": [
                639
            ],
            "source": [
                133
            ],
            "target": [
                133
            ],
            "__typename": [
                1129
            ]
        },
        "CreateBranchProtectionRuleInput": {
            "repositoryId": [
                472
            ],
            "pattern": [
                1129
            ],
            "requiresApprovingReviews": [
                80
            ],
            "requiredApprovingReviewCount": [
                474
            ],
            "requiresCommitSignatures": [
                80
            ],
            "requiresLinearHistory": [
                80
            ],
            "blocksCreations": [
                80
            ],
            "allowsForcePushes": [
                80
            ],
            "allowsDeletions": [
                80
            ],
            "isAdminEnforced": [
                80
            ],
            "requiresStatusChecks": [
                80
            ],
            "requiresStrictStatusChecks": [
                80
            ],
            "requiresCodeOwnerReviews": [
                80
            ],
            "dismissesStaleReviews": [
                80
            ],
            "restrictsReviewDismissals": [
                80
            ],
            "reviewDismissalActorIds": [
                472
            ],
            "bypassPullRequestActorIds": [
                472
            ],
            "bypassForcePushActorIds": [
                472
            ],
            "restrictsPushes": [
                80
            ],
            "pushActorIds": [
                472
            ],
            "requiredStatusCheckContexts": [
                1129
            ],
            "requiredStatusChecks": [
                1005
            ],
            "requiresConversationResolution": [
                80
            ],
            "requireLastPushApproval": [
                80
            ],
            "lockBranch": [
                80
            ],
            "lockAllowsFetchAndMerge": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateBranchProtectionRulePayload": {
            "branchProtectionRule": [
                83
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateCheckRunInput": {
            "repositoryId": [
                472
            ],
            "name": [
                1129
            ],
            "headSha": [
                456
            ],
            "detailsUrl": [
                1186
            ],
            "externalId": [
                1129
            ],
            "status": [
                999
            ],
            "startedAt": [
                252
            ],
            "conclusion": [
                113
            ],
            "completedAt": [
                252
            ],
            "output": [
                119
            ],
            "actions": [
                115
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateCheckRunPayload": {
            "checkRun": [
                114
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateCheckSuiteInput": {
            "repositoryId": [
                472
            ],
            "headSha": [
                456
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateCheckSuitePayload": {
            "checkSuite": [
                128
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateCommitOnBranchInput": {
            "branch": [
                168
            ],
            "fileChanges": [
                428
            ],
            "message": [
                167
            ],
            "expectedHeadOid": [
                456
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateCommitOnBranchPayload": {
            "clientMutationId": [
                1129
            ],
            "commit": [
                155
            ],
            "ref": [
                873
            ],
            "__typename": [
                1129
            ]
        },
        "CreateDiscussionInput": {
            "repositoryId": [
                472
            ],
            "title": [
                1129
            ],
            "body": [
                1129
            ],
            "categoryId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateDiscussionPayload": {
            "clientMutationId": [
                1129
            ],
            "discussion": [
                334
            ],
            "__typename": [
                1129
            ]
        },
        "CreateEnterpriseOrganizationInput": {
            "enterpriseId": [
                472
            ],
            "login": [
                1129
            ],
            "profileName": [
                1129
            ],
            "billingEmail": [
                1129
            ],
            "adminLogins": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateEnterpriseOrganizationPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "organization": [
                639
            ],
            "__typename": [
                1129
            ]
        },
        "CreateEnvironmentInput": {
            "repositoryId": [
                472
            ],
            "name": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateEnvironmentPayload": {
            "clientMutationId": [
                1129
            ],
            "environment": [
                418
            ],
            "__typename": [
                1129
            ]
        },
        "CreateIpAllowListEntryInput": {
            "ownerId": [
                472
            ],
            "allowListValue": [
                1129
            ],
            "name": [
                1129
            ],
            "isActive": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateIpAllowListEntryPayload": {
            "clientMutationId": [
                1129
            ],
            "ipAllowListEntry": [
                478
            ],
            "__typename": [
                1129
            ]
        },
        "CreateIssueInput": {
            "repositoryId": [
                472
            ],
            "title": [
                1129
            ],
            "body": [
                1129
            ],
            "assigneeIds": [
                472
            ],
            "milestoneId": [
                472
            ],
            "labelIds": [
                472
            ],
            "projectIds": [
                472
            ],
            "issueTemplate": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateIssuePayload": {
            "clientMutationId": [
                1129
            ],
            "issue": [
                485
            ],
            "__typename": [
                1129
            ]
        },
        "CreateLinkedBranchInput": {
            "issueId": [
                472
            ],
            "oid": [
                456
            ],
            "name": [
                1129
            ],
            "repositoryId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateLinkedBranchPayload": {
            "clientMutationId": [
                1129
            ],
            "linkedBranch": [
                530
            ],
            "__typename": [
                1129
            ]
        },
        "CreateMigrationSourceInput": {
            "name": [
                1129
            ],
            "url": [
                1129
            ],
            "accessToken": [
                1129
            ],
            "type": [
                569
            ],
            "ownerId": [
                472
            ],
            "githubPat": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateMigrationSourcePayload": {
            "clientMutationId": [
                1129
            ],
            "migrationSource": [
                568
            ],
            "__typename": [
                1129
            ]
        },
        "CreateProjectInput": {
            "ownerId": [
                472
            ],
            "name": [
                1129
            ],
            "body": [
                1129
            ],
            "template": [
                743
            ],
            "repositoryIds": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateProjectPayload": {
            "clientMutationId": [
                1129
            ],
            "project": [
                707
            ],
            "__typename": [
                1129
            ]
        },
        "CreateProjectV2Input": {
            "ownerId": [
                472
            ],
            "title": [
                1129
            ],
            "repositoryId": [
                472
            ],
            "teamId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateProjectV2Payload": {
            "clientMutationId": [
                1129
            ],
            "projectV2": [
                744
            ],
            "__typename": [
                1129
            ]
        },
        "CreatePullRequestInput": {
            "repositoryId": [
                472
            ],
            "baseRefName": [
                1129
            ],
            "headRefName": [
                1129
            ],
            "title": [
                1129
            ],
            "body": [
                1129
            ],
            "maintainerCanModify": [
                80
            ],
            "draft": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreatePullRequestPayload": {
            "clientMutationId": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "CreateRefInput": {
            "repositoryId": [
                472
            ],
            "name": [
                1129
            ],
            "oid": [
                456
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateRefPayload": {
            "clientMutationId": [
                1129
            ],
            "ref": [
                873
            ],
            "__typename": [
                1129
            ]
        },
        "CreateRepositoryInput": {
            "name": [
                1129
            ],
            "ownerId": [
                472
            ],
            "description": [
                1129
            ],
            "visibility": [
                989
            ],
            "template": [
                80
            ],
            "homepageUrl": [
                1186
            ],
            "hasWikiEnabled": [
                80
            ],
            "hasIssuesEnabled": [
                80
            ],
            "teamId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateRepositoryPayload": {
            "clientMutationId": [
                1129
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "CreateSponsorsListingInput": {
            "sponsorableLogin": [
                1129
            ],
            "fiscalHostLogin": [
                1129
            ],
            "fiscallyHostedProjectProfileUrl": [
                1129
            ],
            "billingCountryOrRegionCode": [
                1085
            ],
            "residenceCountryOrRegionCode": [
                1085
            ],
            "contactEmail": [
                1129
            ],
            "fullDescription": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateSponsorsListingPayload": {
            "clientMutationId": [
                1129
            ],
            "sponsorsListing": [
                1088
            ],
            "__typename": [
                1129
            ]
        },
        "CreateSponsorsTierInput": {
            "sponsorableId": [
                472
            ],
            "sponsorableLogin": [
                1129
            ],
            "amount": [
                474
            ],
            "isRecurring": [
                80
            ],
            "repositoryId": [
                472
            ],
            "repositoryOwnerLogin": [
                1129
            ],
            "repositoryName": [
                1129
            ],
            "welcomeMessage": [
                1129
            ],
            "description": [
                1129
            ],
            "publish": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateSponsorsTierPayload": {
            "clientMutationId": [
                1129
            ],
            "sponsorsTier": [
                1092
            ],
            "__typename": [
                1129
            ]
        },
        "CreateSponsorshipInput": {
            "sponsorId": [
                472
            ],
            "sponsorLogin": [
                1129
            ],
            "sponsorableId": [
                472
            ],
            "sponsorableLogin": [
                1129
            ],
            "tierId": [
                472
            ],
            "amount": [
                474
            ],
            "isRecurring": [
                80
            ],
            "receiveEmails": [
                80
            ],
            "privacyLevel": [
                1108
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateSponsorshipPayload": {
            "clientMutationId": [
                1129
            ],
            "sponsorship": [
                1098
            ],
            "__typename": [
                1129
            ]
        },
        "CreateTeamDiscussionCommentInput": {
            "discussionId": [
                472
            ],
            "body": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateTeamDiscussionCommentPayload": {
            "clientMutationId": [
                1129
            ],
            "teamDiscussionComment": [
                1147
            ],
            "__typename": [
                1129
            ]
        },
        "CreateTeamDiscussionInput": {
            "teamId": [
                472
            ],
            "title": [
                1129
            ],
            "body": [
                1129
            ],
            "private": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "CreateTeamDiscussionPayload": {
            "clientMutationId": [
                1129
            ],
            "teamDiscussion": [
                1146
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedCommitContribution": {
            "commitCount": [
                474
            ],
            "isRestricted": [
                80
            ],
            "occurredAt": [
                252
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedCommitContributionConnection": {
            "edges": [
                234
            ],
            "nodes": [
                232
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedCommitContributionEdge": {
            "cursor": [
                1129
            ],
            "node": [
                232
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedIssueContribution": {
            "isRestricted": [
                80
            ],
            "issue": [
                485
            ],
            "occurredAt": [
                252
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedIssueContributionConnection": {
            "edges": [
                237
            ],
            "nodes": [
                235
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedIssueContributionEdge": {
            "cursor": [
                1129
            ],
            "node": [
                235
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedIssueOrRestrictedContribution": {
            "on_CreatedIssueContribution": [
                235
            ],
            "on_RestrictedContribution": [
                1010
            ],
            "on_Contribution": [
                173
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedPullRequestContribution": {
            "isRestricted": [
                80
            ],
            "occurredAt": [
                252
            ],
            "pullRequest": [
                812
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedPullRequestContributionConnection": {
            "edges": [
                241
            ],
            "nodes": [
                239
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedPullRequestContributionEdge": {
            "cursor": [
                1129
            ],
            "node": [
                239
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedPullRequestOrRestrictedContribution": {
            "on_CreatedPullRequestContribution": [
                239
            ],
            "on_RestrictedContribution": [
                1010
            ],
            "on_Contribution": [
                173
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedPullRequestReviewContribution": {
            "isRestricted": [
                80
            ],
            "occurredAt": [
                252
            ],
            "pullRequest": [
                812
            ],
            "pullRequestReview": [
                826
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedPullRequestReviewContributionConnection": {
            "edges": [
                245
            ],
            "nodes": [
                243
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedPullRequestReviewContributionEdge": {
            "cursor": [
                1129
            ],
            "node": [
                243
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedRepositoryContribution": {
            "isRestricted": [
                80
            ],
            "occurredAt": [
                252
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedRepositoryContributionConnection": {
            "edges": [
                248
            ],
            "nodes": [
                246
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedRepositoryContributionEdge": {
            "cursor": [
                1129
            ],
            "node": [
                246
            ],
            "__typename": [
                1129
            ]
        },
        "CreatedRepositoryOrRestrictedContribution": {
            "on_CreatedRepositoryContribution": [
                246
            ],
            "on_RestrictedContribution": [
                1010
            ],
            "on_Contribution": [
                173
            ],
            "__typename": [
                1129
            ]
        },
        "CrossReferencedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "isCrossRepository": [
                80
            ],
            "referencedAt": [
                252
            ],
            "resourcePath": [
                1186
            ],
            "source": [
                880
            ],
            "target": [
                880
            ],
            "url": [
                1186
            ],
            "willCloseTarget": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "Date": {},
        "DateTime": {},
        "DeclineTopicSuggestionInput": {
            "repositoryId": [
                472
            ],
            "name": [
                1129
            ],
            "reason": [
                1177
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeclineTopicSuggestionPayload": {
            "clientMutationId": [
                1129
            ],
            "topic": [
                1175
            ],
            "__typename": [
                1129
            ]
        },
        "DefaultRepositoryPermissionField": {},
        "Deletable": {
            "viewerCanDelete": [
                80
            ],
            "on_CommitComment": [
                157
            ],
            "on_Discussion": [
                334
            ],
            "on_DiscussionComment": [
                338
            ],
            "on_GistComment": [
                442
            ],
            "on_IssueComment": [
                487
            ],
            "on_PullRequestReview": [
                826
            ],
            "on_PullRequestReviewComment": [
                827
            ],
            "on_TeamDiscussion": [
                1146
            ],
            "on_TeamDiscussionComment": [
                1147
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteBranchProtectionRuleInput": {
            "branchProtectionRuleId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteBranchProtectionRulePayload": {
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteDeploymentInput": {
            "id": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteDeploymentPayload": {
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteDiscussionCommentInput": {
            "id": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteDiscussionCommentPayload": {
            "clientMutationId": [
                1129
            ],
            "comment": [
                338
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteDiscussionInput": {
            "id": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteDiscussionPayload": {
            "clientMutationId": [
                1129
            ],
            "discussion": [
                334
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteEnvironmentInput": {
            "id": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteEnvironmentPayload": {
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteIpAllowListEntryInput": {
            "ipAllowListEntryId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteIpAllowListEntryPayload": {
            "clientMutationId": [
                1129
            ],
            "ipAllowListEntry": [
                478
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteIssueCommentInput": {
            "id": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteIssueCommentPayload": {
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteIssueInput": {
            "issueId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteIssuePayload": {
            "clientMutationId": [
                1129
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteLinkedBranchInput": {
            "linkedBranchId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteLinkedBranchPayload": {
            "clientMutationId": [
                1129
            ],
            "issue": [
                485
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteProjectCardInput": {
            "cardId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteProjectCardPayload": {
            "clientMutationId": [
                1129
            ],
            "column": [
                714
            ],
            "deletedCardId": [
                472
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteProjectColumnInput": {
            "columnId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteProjectColumnPayload": {
            "clientMutationId": [
                1129
            ],
            "deletedColumnId": [
                472
            ],
            "project": [
                707
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteProjectInput": {
            "projectId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteProjectNextItemInput": {
            "projectId": [
                472
            ],
            "itemId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteProjectNextItemPayload": {
            "clientMutationId": [
                1129
            ],
            "deletedItemId": [
                472
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteProjectPayload": {
            "clientMutationId": [
                1129
            ],
            "owner": [
                740
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteProjectV2ItemInput": {
            "projectId": [
                472
            ],
            "itemId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteProjectV2ItemPayload": {
            "clientMutationId": [
                1129
            ],
            "deletedItemId": [
                472
            ],
            "__typename": [
                1129
            ]
        },
        "DeletePullRequestReviewCommentInput": {
            "id": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeletePullRequestReviewCommentPayload": {
            "clientMutationId": [
                1129
            ],
            "pullRequestReview": [
                826
            ],
            "pullRequestReviewComment": [
                827
            ],
            "__typename": [
                1129
            ]
        },
        "DeletePullRequestReviewInput": {
            "pullRequestReviewId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeletePullRequestReviewPayload": {
            "clientMutationId": [
                1129
            ],
            "pullRequestReview": [
                826
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteRefInput": {
            "refId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteRefPayload": {
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteTeamDiscussionCommentInput": {
            "id": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteTeamDiscussionCommentPayload": {
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteTeamDiscussionInput": {
            "id": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteTeamDiscussionPayload": {
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteVerifiableDomainInput": {
            "id": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DeleteVerifiableDomainPayload": {
            "clientMutationId": [
                1129
            ],
            "owner": [
                1352
            ],
            "__typename": [
                1129
            ]
        },
        "DemilestonedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "milestoneTitle": [
                1129
            ],
            "subject": [
                574
            ],
            "__typename": [
                1129
            ]
        },
        "DependabotUpdate": {
            "error": [
                299
            ],
            "pullRequest": [
                812
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "DependabotUpdateError": {
            "body": [
                1129
            ],
            "errorType": [
                1129
            ],
            "title": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DependencyGraphEcosystem": {},
        "DeployKey": {
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "key": [
                1129
            ],
            "readOnly": [
                80
            ],
            "title": [
                1129
            ],
            "verified": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "DeployKeyConnection": {
            "edges": [
                303
            ],
            "nodes": [
                301
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "DeployKeyEdge": {
            "cursor": [
                1129
            ],
            "node": [
                301
            ],
            "__typename": [
                1129
            ]
        },
        "DeployedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "deployment": [
                305
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "ref": [
                873
            ],
            "__typename": [
                1129
            ]
        },
        "Deployment": {
            "commit": [
                155
            ],
            "commitOid": [
                1129
            ],
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "databaseId": [
                474
            ],
            "description": [
                1129
            ],
            "environment": [
                1129
            ],
            "id": [
                472
            ],
            "latestEnvironment": [
                1129
            ],
            "latestStatus": [
                326
            ],
            "originalEnvironment": [
                1129
            ],
            "payload": [
                1129
            ],
            "ref": [
                873
            ],
            "repository": [
                950
            ],
            "state": [
                325
            ],
            "statuses": [
                327,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "task": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentConnection": {
            "edges": [
                307
            ],
            "nodes": [
                305
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentEdge": {
            "cursor": [
                1129
            ],
            "node": [
                305
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentEnvironmentChangedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "deploymentStatus": [
                326
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentOrder": {
            "field": [
                310
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentOrderField": {},
        "DeploymentProtectionRule": {
            "databaseId": [
                474
            ],
            "reviewers": [
                323,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "timeout": [
                474
            ],
            "type": [
                314
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentProtectionRuleConnection": {
            "edges": [
                313
            ],
            "nodes": [
                311
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentProtectionRuleEdge": {
            "cursor": [
                1129
            ],
            "node": [
                311
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentProtectionRuleType": {},
        "DeploymentRequest": {
            "currentUserCanApprove": [
                80
            ],
            "environment": [
                418
            ],
            "reviewers": [
                323,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "waitTimer": [
                474
            ],
            "waitTimerStartedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentRequestConnection": {
            "edges": [
                317
            ],
            "nodes": [
                315
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentRequestEdge": {
            "cursor": [
                1129
            ],
            "node": [
                315
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentReview": {
            "comment": [
                1129
            ],
            "databaseId": [
                474
            ],
            "environments": [
                419,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "id": [
                472
            ],
            "state": [
                321
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentReviewConnection": {
            "edges": [
                320
            ],
            "nodes": [
                318
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentReviewEdge": {
            "cursor": [
                1129
            ],
            "node": [
                318
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentReviewState": {},
        "DeploymentReviewer": {
            "on_Team": [
                1140
            ],
            "on_User": [
                1333
            ],
            "on_Node": [
                588
            ],
            "on_Subscribable": [
                1135
            ],
            "on_MemberStatusable": [
                554
            ],
            "on_Actor": [
                6
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentReviewerConnection": {
            "edges": [
                324
            ],
            "nodes": [
                322
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentReviewerEdge": {
            "cursor": [
                1129
            ],
            "node": [
                322
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentState": {},
        "DeploymentStatus": {
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "deployment": [
                305
            ],
            "description": [
                1129
            ],
            "environmentUrl": [
                1186
            ],
            "id": [
                472
            ],
            "logUrl": [
                1186
            ],
            "state": [
                329
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentStatusConnection": {
            "edges": [
                328
            ],
            "nodes": [
                326
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentStatusEdge": {
            "cursor": [
                1129
            ],
            "node": [
                326
            ],
            "__typename": [
                1129
            ]
        },
        "DeploymentStatusState": {},
        "DiffSide": {},
        "DisablePullRequestAutoMergeInput": {
            "pullRequestId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DisablePullRequestAutoMergePayload": {
            "actor": [
                6
            ],
            "clientMutationId": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "DisconnectedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "isCrossRepository": [
                80
            ],
            "source": [
                880
            ],
            "subject": [
                880
            ],
            "__typename": [
                1129
            ]
        },
        "Discussion": {
            "activeLockReason": [
                535
            ],
            "answer": [
                338
            ],
            "answerChosenAt": [
                252
            ],
            "answerChosenBy": [
                6
            ],
            "author": [
                6
            ],
            "authorAssociation": [
                152
            ],
            "body": [
                1129
            ],
            "bodyHTML": [
                466
            ],
            "bodyText": [
                1129
            ],
            "category": [
                335
            ],
            "comments": [
                339,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "createdAt": [
                252
            ],
            "createdViaEmail": [
                80
            ],
            "databaseId": [
                474
            ],
            "editor": [
                6
            ],
            "id": [
                472
            ],
            "includesCreatedEdit": [
                80
            ],
            "labels": [
                511,
                {
                    "orderBy": [
                        513
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "lastEditedAt": [
                252
            ],
            "locked": [
                80
            ],
            "number": [
                474
            ],
            "poll": [
                345
            ],
            "publishedAt": [
                252
            ],
            "reactionGroups": [
                866
            ],
            "reactions": [
                863,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "content": [
                        864
                    ],
                    "orderBy": [
                        867
                    ]
                }
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "title": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "upvoteCount": [
                474
            ],
            "url": [
                1186
            ],
            "userContentEdits": [
                1338,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "viewerCanDelete": [
                80
            ],
            "viewerCanReact": [
                80
            ],
            "viewerCanSubscribe": [
                80
            ],
            "viewerCanUpdate": [
                80
            ],
            "viewerCanUpvote": [
                80
            ],
            "viewerDidAuthor": [
                80
            ],
            "viewerHasUpvoted": [
                80
            ],
            "viewerSubscription": [
                1137
            ],
            "__typename": [
                1129
            ]
        },
        "DiscussionCategory": {
            "createdAt": [
                252
            ],
            "description": [
                1129
            ],
            "emoji": [
                1129
            ],
            "emojiHTML": [
                466
            ],
            "id": [
                472
            ],
            "isAnswerable": [
                80
            ],
            "name": [
                1129
            ],
            "repository": [
                950
            ],
            "slug": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "DiscussionCategoryConnection": {
            "edges": [
                337
            ],
            "nodes": [
                335
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "DiscussionCategoryEdge": {
            "cursor": [
                1129
            ],
            "node": [
                335
            ],
            "__typename": [
                1129
            ]
        },
        "DiscussionComment": {
            "author": [
                6
            ],
            "authorAssociation": [
                152
            ],
            "body": [
                1129
            ],
            "bodyHTML": [
                466
            ],
            "bodyText": [
                1129
            ],
            "createdAt": [
                252
            ],
            "createdViaEmail": [
                80
            ],
            "databaseId": [
                474
            ],
            "deletedAt": [
                252
            ],
            "discussion": [
                334
            ],
            "editor": [
                6
            ],
            "id": [
                472
            ],
            "includesCreatedEdit": [
                80
            ],
            "isAnswer": [
                80
            ],
            "isMinimized": [
                80
            ],
            "lastEditedAt": [
                252
            ],
            "minimizedReason": [
                1129
            ],
            "publishedAt": [
                252
            ],
            "reactionGroups": [
                866
            ],
            "reactions": [
                863,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "content": [
                        864
                    ],
                    "orderBy": [
                        867
                    ]
                }
            ],
            "replies": [
                339,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "replyTo": [
                338
            ],
            "resourcePath": [
                1186
            ],
            "updatedAt": [
                252
            ],
            "upvoteCount": [
                474
            ],
            "url": [
                1186
            ],
            "userContentEdits": [
                1338,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "viewerCanDelete": [
                80
            ],
            "viewerCanMarkAsAnswer": [
                80
            ],
            "viewerCanMinimize": [
                80
            ],
            "viewerCanReact": [
                80
            ],
            "viewerCanUnmarkAsAnswer": [
                80
            ],
            "viewerCanUpdate": [
                80
            ],
            "viewerCanUpvote": [
                80
            ],
            "viewerCannotUpdateReasons": [
                153
            ],
            "viewerDidAuthor": [
                80
            ],
            "viewerHasUpvoted": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "DiscussionCommentConnection": {
            "edges": [
                340
            ],
            "nodes": [
                338
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "DiscussionCommentEdge": {
            "cursor": [
                1129
            ],
            "node": [
                338
            ],
            "__typename": [
                1129
            ]
        },
        "DiscussionConnection": {
            "edges": [
                342
            ],
            "nodes": [
                334
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "DiscussionEdge": {
            "cursor": [
                1129
            ],
            "node": [
                334
            ],
            "__typename": [
                1129
            ]
        },
        "DiscussionOrder": {
            "field": [
                344
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "DiscussionOrderField": {},
        "DiscussionPoll": {
            "discussion": [
                334
            ],
            "id": [
                472
            ],
            "options": [
                347,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        349
                    ]
                }
            ],
            "question": [
                1129
            ],
            "totalVoteCount": [
                474
            ],
            "viewerCanVote": [
                80
            ],
            "viewerHasVoted": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "DiscussionPollOption": {
            "id": [
                472
            ],
            "option": [
                1129
            ],
            "poll": [
                345
            ],
            "totalVoteCount": [
                474
            ],
            "viewerHasVoted": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "DiscussionPollOptionConnection": {
            "edges": [
                348
            ],
            "nodes": [
                346
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "DiscussionPollOptionEdge": {
            "cursor": [
                1129
            ],
            "node": [
                346
            ],
            "__typename": [
                1129
            ]
        },
        "DiscussionPollOptionOrder": {
            "field": [
                350
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "DiscussionPollOptionOrderField": {},
        "DismissPullRequestReviewInput": {
            "pullRequestReviewId": [
                472
            ],
            "message": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DismissPullRequestReviewPayload": {
            "clientMutationId": [
                1129
            ],
            "pullRequestReview": [
                826
            ],
            "__typename": [
                1129
            ]
        },
        "DismissReason": {},
        "DismissRepositoryVulnerabilityAlertInput": {
            "repositoryVulnerabilityAlertId": [
                472
            ],
            "dismissReason": [
                353
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DismissRepositoryVulnerabilityAlertPayload": {
            "clientMutationId": [
                1129
            ],
            "repositoryVulnerabilityAlert": [
                992
            ],
            "__typename": [
                1129
            ]
        },
        "DraftIssue": {
            "assignees": [
                1336,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "body": [
                1129
            ],
            "bodyHTML": [
                466
            ],
            "bodyText": [
                1129
            ],
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "id": [
                472
            ],
            "project": [
                721
            ],
            "projectItem": [
                729
            ],
            "projectV2Items": [
                760,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "projectsV2": [
                745,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "title": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "DraftPullRequestReviewComment": {
            "path": [
                1129
            ],
            "position": [
                474
            ],
            "body": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "DraftPullRequestReviewThread": {
            "path": [
                1129
            ],
            "line": [
                474
            ],
            "side": [
                330
            ],
            "startLine": [
                474
            ],
            "startSide": [
                330
            ],
            "body": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "EnablePullRequestAutoMergeInput": {
            "pullRequestId": [
                472
            ],
            "commitHeadline": [
                1129
            ],
            "commitBody": [
                1129
            ],
            "mergeMethod": [
                823
            ],
            "authorEmail": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "EnablePullRequestAutoMergePayload": {
            "actor": [
                6
            ],
            "clientMutationId": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "Enterprise": {
            "avatarUrl": [
                1186,
                {
                    "size": [
                        474
                    ]
                }
            ],
            "billingInfo": [
                372
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "description": [
                1129
            ],
            "descriptionHTML": [
                466
            ],
            "id": [
                472
            ],
            "location": [
                1129
            ],
            "members": [
                378,
                {
                    "organizationLogins": [
                        1129,
                        "[String!]"
                    ],
                    "query": [
                        1129
                    ],
                    "orderBy": [
                        380
                    ],
                    "role": [
                        416
                    ],
                    "deployment": [
                        417
                    ],
                    "hasTwoFactorEnabled": [
                        80
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "name": [
                1129
            ],
            "organizations": [
                644,
                {
                    "query": [
                        1129
                    ],
                    "viewerOrganizationRole": [
                        1026
                    ],
                    "orderBy": [
                        659
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "ownerInfo": [
                388
            ],
            "resourcePath": [
                1186
            ],
            "slug": [
                1129
            ],
            "url": [
                1186
            ],
            "viewerIsAdmin": [
                80
            ],
            "websiteUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseAdministratorConnection": {
            "edges": [
                363
            ],
            "nodes": [
                1333
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseAdministratorEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1333
            ],
            "role": [
                369
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseAdministratorInvitation": {
            "createdAt": [
                252
            ],
            "email": [
                1129
            ],
            "enterprise": [
                361
            ],
            "id": [
                472
            ],
            "invitee": [
                1333
            ],
            "inviter": [
                1333
            ],
            "role": [
                369
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseAdministratorInvitationConnection": {
            "edges": [
                366
            ],
            "nodes": [
                364
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseAdministratorInvitationEdge": {
            "cursor": [
                1129
            ],
            "node": [
                364
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseAdministratorInvitationOrder": {
            "field": [
                368
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseAdministratorInvitationOrderField": {},
        "EnterpriseAdministratorRole": {},
        "EnterpriseAllowPrivateRepositoryForkingPolicyValue": {},
        "EnterpriseAuditEntryData": {
            "enterpriseResourcePath": [
                1186
            ],
            "enterpriseSlug": [
                1129
            ],
            "enterpriseUrl": [
                1186
            ],
            "on_MembersCanDeleteReposClearAuditEntry": [
                555
            ],
            "on_MembersCanDeleteReposDisableAuditEntry": [
                556
            ],
            "on_MembersCanDeleteReposEnableAuditEntry": [
                557
            ],
            "on_OrgInviteToBusinessAuditEntry": [
                614
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                703
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                704
            ],
            "on_RepositoryVisibilityChangeDisableAuditEntry": [
                990
            ],
            "on_RepositoryVisibilityChangeEnableAuditEntry": [
                991
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseBillingInfo": {
            "allLicensableUsersCount": [
                474
            ],
            "assetPacks": [
                474
            ],
            "bandwidthQuota": [
                431
            ],
            "bandwidthUsage": [
                431
            ],
            "bandwidthUsagePercentage": [
                474
            ],
            "storageQuota": [
                431
            ],
            "storageUsage": [
                431
            ],
            "storageUsagePercentage": [
                474
            ],
            "totalAvailableLicenses": [
                474
            ],
            "totalLicenses": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseDefaultRepositoryPermissionSettingValue": {},
        "EnterpriseEnabledDisabledSettingValue": {},
        "EnterpriseEnabledSettingValue": {},
        "EnterpriseIdentityProvider": {
            "digestMethod": [
                1027
            ],
            "enterprise": [
                361
            ],
            "externalIdentities": [
                423,
                {
                    "membersOnly": [
                        80
                    ],
                    "login": [
                        1129
                    ],
                    "userName": [
                        1129
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "id": [
                472
            ],
            "idpCertificate": [
                1363
            ],
            "issuer": [
                1129
            ],
            "recoveryCodes": [
                1129
            ],
            "signatureMethod": [
                1028
            ],
            "ssoUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseMember": {
            "on_EnterpriseUserAccount": [
                415
            ],
            "on_User": [
                1333
            ],
            "on_Actor": [
                6
            ],
            "on_Node": [
                588
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseMemberConnection": {
            "edges": [
                379
            ],
            "nodes": [
                377
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseMemberEdge": {
            "cursor": [
                1129
            ],
            "node": [
                377
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseMemberOrder": {
            "field": [
                381
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseMemberOrderField": {},
        "EnterpriseMembersCanCreateRepositoriesSettingValue": {},
        "EnterpriseMembersCanMakePurchasesSettingValue": {},
        "EnterpriseOrganizationMembershipConnection": {
            "edges": [
                385
            ],
            "nodes": [
                639
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseOrganizationMembershipEdge": {
            "cursor": [
                1129
            ],
            "node": [
                639
            ],
            "role": [
                416
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseOutsideCollaboratorConnection": {
            "edges": [
                387
            ],
            "nodes": [
                1333
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseOutsideCollaboratorEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1333
            ],
            "repositories": [
                392,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        981
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseOwnerInfo": {
            "admins": [
                362,
                {
                    "organizationLogins": [
                        1129,
                        "[String!]"
                    ],
                    "query": [
                        1129
                    ],
                    "role": [
                        369
                    ],
                    "orderBy": [
                        380
                    ],
                    "hasTwoFactorEnabled": [
                        80
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "affiliatedUsersWithTwoFactorDisabled": [
                1336,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "affiliatedUsersWithTwoFactorDisabledExist": [
                80
            ],
            "allowPrivateRepositoryForkingSetting": [
                374
            ],
            "allowPrivateRepositoryForkingSettingOrganizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "value": [
                        80,
                        "Boolean!"
                    ],
                    "orderBy": [
                        659
                    ]
                }
            ],
            "allowPrivateRepositoryForkingSettingPolicyValue": [
                370
            ],
            "defaultRepositoryPermissionSetting": [
                373
            ],
            "defaultRepositoryPermissionSettingOrganizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "value": [
                        255,
                        "DefaultRepositoryPermissionField!"
                    ],
                    "orderBy": [
                        659
                    ]
                }
            ],
            "domains": [
                1348,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "isVerified": [
                        80
                    ],
                    "isApproved": [
                        80
                    ],
                    "orderBy": [
                        1350
                    ]
                }
            ],
            "enterpriseServerInstallations": [
                395,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "connectedOnly": [
                        80
                    ],
                    "orderBy": [
                        397
                    ]
                }
            ],
            "ipAllowListEnabledSetting": [
                477
            ],
            "ipAllowListEntries": [
                479,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        481
                    ]
                }
            ],
            "ipAllowListForInstalledAppsEnabledSetting": [
                483
            ],
            "isUpdatingDefaultRepositoryPermission": [
                80
            ],
            "isUpdatingTwoFactorRequirement": [
                80
            ],
            "membersCanChangeRepositoryVisibilitySetting": [
                374
            ],
            "membersCanChangeRepositoryVisibilitySettingOrganizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "value": [
                        80,
                        "Boolean!"
                    ],
                    "orderBy": [
                        659
                    ]
                }
            ],
            "membersCanCreateInternalRepositoriesSetting": [
                80
            ],
            "membersCanCreatePrivateRepositoriesSetting": [
                80
            ],
            "membersCanCreatePublicRepositoriesSetting": [
                80
            ],
            "membersCanCreateRepositoriesSetting": [
                382
            ],
            "membersCanCreateRepositoriesSettingOrganizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "value": [
                        657,
                        "OrganizationMembersCanCreateRepositoriesSettingValue!"
                    ],
                    "orderBy": [
                        659
                    ]
                }
            ],
            "membersCanDeleteIssuesSetting": [
                374
            ],
            "membersCanDeleteIssuesSettingOrganizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "value": [
                        80,
                        "Boolean!"
                    ],
                    "orderBy": [
                        659
                    ]
                }
            ],
            "membersCanDeleteRepositoriesSetting": [
                374
            ],
            "membersCanDeleteRepositoriesSettingOrganizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "value": [
                        80,
                        "Boolean!"
                    ],
                    "orderBy": [
                        659
                    ]
                }
            ],
            "membersCanInviteCollaboratorsSetting": [
                374
            ],
            "membersCanInviteCollaboratorsSettingOrganizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "value": [
                        80,
                        "Boolean!"
                    ],
                    "orderBy": [
                        659
                    ]
                }
            ],
            "membersCanMakePurchasesSetting": [
                383
            ],
            "membersCanUpdateProtectedBranchesSetting": [
                374
            ],
            "membersCanUpdateProtectedBranchesSettingOrganizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "value": [
                        80,
                        "Boolean!"
                    ],
                    "orderBy": [
                        659
                    ]
                }
            ],
            "membersCanViewDependencyInsightsSetting": [
                374
            ],
            "membersCanViewDependencyInsightsSettingOrganizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "value": [
                        80,
                        "Boolean!"
                    ],
                    "orderBy": [
                        659
                    ]
                }
            ],
            "notificationDeliveryRestrictionEnabledSetting": [
                589
            ],
            "oidcProvider": [
                590
            ],
            "organizationProjectsSetting": [
                374
            ],
            "organizationProjectsSettingOrganizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "value": [
                        80,
                        "Boolean!"
                    ],
                    "orderBy": [
                        659
                    ]
                }
            ],
            "outsideCollaborators": [
                386,
                {
                    "login": [
                        1129
                    ],
                    "query": [
                        1129
                    ],
                    "orderBy": [
                        380
                    ],
                    "visibility": [
                        989
                    ],
                    "hasTwoFactorEnabled": [
                        80
                    ],
                    "organizationLogins": [
                        1129,
                        "[String!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "pendingAdminInvitations": [
                365,
                {
                    "query": [
                        1129
                    ],
                    "orderBy": [
                        367
                    ],
                    "role": [
                        369
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "pendingCollaboratorInvitations": [
                969,
                {
                    "query": [
                        1129
                    ],
                    "orderBy": [
                        971
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "pendingMemberInvitations": [
                389,
                {
                    "query": [
                        1129
                    ],
                    "organizationLogins": [
                        1129,
                        "[String!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "repositoryProjectsSetting": [
                374
            ],
            "repositoryProjectsSettingOrganizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "value": [
                        80,
                        "Boolean!"
                    ],
                    "orderBy": [
                        659
                    ]
                }
            ],
            "samlIdentityProvider": [
                376
            ],
            "samlIdentityProviderSettingOrganizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "value": [
                        473,
                        "IdentityProviderConfigurationState!"
                    ],
                    "orderBy": [
                        659
                    ]
                }
            ],
            "supportEntitlements": [
                378,
                {
                    "orderBy": [
                        380
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "teamDiscussionsSetting": [
                374
            ],
            "teamDiscussionsSettingOrganizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "value": [
                        80,
                        "Boolean!"
                    ],
                    "orderBy": [
                        659
                    ]
                }
            ],
            "twoFactorRequiredSetting": [
                375
            ],
            "twoFactorRequiredSettingOrganizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "value": [
                        80,
                        "Boolean!"
                    ],
                    "orderBy": [
                        659
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "EnterprisePendingMemberInvitationConnection": {
            "edges": [
                390
            ],
            "nodes": [
                649
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "totalUniqueUserCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "EnterprisePendingMemberInvitationEdge": {
            "cursor": [
                1129
            ],
            "node": [
                649
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseRepositoryInfo": {
            "id": [
                472
            ],
            "isPrivate": [
                80
            ],
            "name": [
                1129
            ],
            "nameWithOwner": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseRepositoryInfoConnection": {
            "edges": [
                393
            ],
            "nodes": [
                391
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseRepositoryInfoEdge": {
            "cursor": [
                1129
            ],
            "node": [
                391
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerInstallation": {
            "createdAt": [
                252
            ],
            "customerName": [
                1129
            ],
            "hostName": [
                1129
            ],
            "id": [
                472
            ],
            "isConnected": [
                80
            ],
            "updatedAt": [
                252
            ],
            "userAccounts": [
                400,
                {
                    "orderBy": [
                        407
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "userAccountsUploads": [
                410,
                {
                    "orderBy": [
                        412
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerInstallationConnection": {
            "edges": [
                396
            ],
            "nodes": [
                394
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerInstallationEdge": {
            "cursor": [
                1129
            ],
            "node": [
                394
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerInstallationOrder": {
            "field": [
                398
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerInstallationOrderField": {},
        "EnterpriseServerUserAccount": {
            "createdAt": [
                252
            ],
            "emails": [
                403,
                {
                    "orderBy": [
                        405
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "enterpriseServerInstallation": [
                394
            ],
            "id": [
                472
            ],
            "isSiteAdmin": [
                80
            ],
            "login": [
                1129
            ],
            "profileName": [
                1129
            ],
            "remoteCreatedAt": [
                252
            ],
            "remoteUserId": [
                474
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerUserAccountConnection": {
            "edges": [
                401
            ],
            "nodes": [
                399
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerUserAccountEdge": {
            "cursor": [
                1129
            ],
            "node": [
                399
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerUserAccountEmail": {
            "createdAt": [
                252
            ],
            "email": [
                1129
            ],
            "id": [
                472
            ],
            "isPrimary": [
                80
            ],
            "updatedAt": [
                252
            ],
            "userAccount": [
                399
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerUserAccountEmailConnection": {
            "edges": [
                404
            ],
            "nodes": [
                402
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerUserAccountEmailEdge": {
            "cursor": [
                1129
            ],
            "node": [
                402
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerUserAccountEmailOrder": {
            "field": [
                406
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerUserAccountEmailOrderField": {},
        "EnterpriseServerUserAccountOrder": {
            "field": [
                408
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerUserAccountOrderField": {},
        "EnterpriseServerUserAccountsUpload": {
            "createdAt": [
                252
            ],
            "enterprise": [
                361
            ],
            "enterpriseServerInstallation": [
                394
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "syncState": [
                414
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerUserAccountsUploadConnection": {
            "edges": [
                411
            ],
            "nodes": [
                409
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerUserAccountsUploadEdge": {
            "cursor": [
                1129
            ],
            "node": [
                409
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerUserAccountsUploadOrder": {
            "field": [
                413
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseServerUserAccountsUploadOrderField": {},
        "EnterpriseServerUserAccountsUploadSyncState": {},
        "EnterpriseUserAccount": {
            "avatarUrl": [
                1186,
                {
                    "size": [
                        474
                    ]
                }
            ],
            "createdAt": [
                252
            ],
            "enterprise": [
                361
            ],
            "id": [
                472
            ],
            "login": [
                1129
            ],
            "name": [
                1129
            ],
            "organizations": [
                384,
                {
                    "query": [
                        1129
                    ],
                    "orderBy": [
                        659
                    ],
                    "role": [
                        416
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "resourcePath": [
                1186
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "EnterpriseUserAccountMembershipRole": {},
        "EnterpriseUserDeployment": {},
        "Environment": {
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "protectionRules": [
                312,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "EnvironmentConnection": {
            "edges": [
                420
            ],
            "nodes": [
                418
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "EnvironmentEdge": {
            "cursor": [
                1129
            ],
            "node": [
                418
            ],
            "__typename": [
                1129
            ]
        },
        "ExternalIdentity": {
            "guid": [
                1129
            ],
            "id": [
                472
            ],
            "organizationInvitation": [
                649
            ],
            "samlIdentity": [
                425
            ],
            "scimIdentity": [
                426
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "ExternalIdentityAttribute": {
            "metadata": [
                1129
            ],
            "name": [
                1129
            ],
            "value": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ExternalIdentityConnection": {
            "edges": [
                424
            ],
            "nodes": [
                421
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ExternalIdentityEdge": {
            "cursor": [
                1129
            ],
            "node": [
                421
            ],
            "__typename": [
                1129
            ]
        },
        "ExternalIdentitySamlAttributes": {
            "attributes": [
                422
            ],
            "emails": [
                1341
            ],
            "familyName": [
                1129
            ],
            "givenName": [
                1129
            ],
            "groups": [
                1129
            ],
            "nameId": [
                1129
            ],
            "username": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ExternalIdentityScimAttributes": {
            "emails": [
                1341
            ],
            "familyName": [
                1129
            ],
            "givenName": [
                1129
            ],
            "groups": [
                1129
            ],
            "username": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "FileAddition": {
            "path": [
                1129
            ],
            "contents": [
                73
            ],
            "__typename": [
                1129
            ]
        },
        "FileChanges": {
            "deletions": [
                429
            ],
            "additions": [
                427
            ],
            "__typename": [
                1129
            ]
        },
        "FileDeletion": {
            "path": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "FileViewedState": {},
        "Float": {},
        "FollowOrganizationInput": {
            "organizationId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "FollowOrganizationPayload": {
            "clientMutationId": [
                1129
            ],
            "organization": [
                639
            ],
            "__typename": [
                1129
            ]
        },
        "FollowUserInput": {
            "userId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "FollowUserPayload": {
            "clientMutationId": [
                1129
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "FollowerConnection": {
            "edges": [
                1340
            ],
            "nodes": [
                1333
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "FollowingConnection": {
            "edges": [
                1340
            ],
            "nodes": [
                1333
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "FundingLink": {
            "platform": [
                439
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "FundingPlatform": {},
        "GenericHovercardContext": {
            "message": [
                1129
            ],
            "octicon": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "Gist": {
            "comments": [
                443,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "createdAt": [
                252
            ],
            "description": [
                1129
            ],
            "files": [
                447,
                {
                    "limit": [
                        474
                    ],
                    "oid": [
                        456
                    ]
                }
            ],
            "forks": [
                445,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        448
                    ]
                }
            ],
            "id": [
                472
            ],
            "isFork": [
                80
            ],
            "isPublic": [
                80
            ],
            "name": [
                1129
            ],
            "owner": [
                983
            ],
            "pushedAt": [
                252
            ],
            "resourcePath": [
                1186
            ],
            "stargazerCount": [
                474
            ],
            "stargazers": [
                1114,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1112
                    ]
                }
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "viewerHasStarred": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "GistComment": {
            "author": [
                6
            ],
            "authorAssociation": [
                152
            ],
            "body": [
                1129
            ],
            "bodyHTML": [
                466
            ],
            "bodyText": [
                1129
            ],
            "createdAt": [
                252
            ],
            "createdViaEmail": [
                80
            ],
            "databaseId": [
                474
            ],
            "editor": [
                6
            ],
            "gist": [
                441
            ],
            "id": [
                472
            ],
            "includesCreatedEdit": [
                80
            ],
            "isMinimized": [
                80
            ],
            "lastEditedAt": [
                252
            ],
            "minimizedReason": [
                1129
            ],
            "publishedAt": [
                252
            ],
            "updatedAt": [
                252
            ],
            "userContentEdits": [
                1338,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "viewerCanDelete": [
                80
            ],
            "viewerCanMinimize": [
                80
            ],
            "viewerCanUpdate": [
                80
            ],
            "viewerCannotUpdateReasons": [
                153
            ],
            "viewerDidAuthor": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "GistCommentConnection": {
            "edges": [
                444
            ],
            "nodes": [
                442
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "GistCommentEdge": {
            "cursor": [
                1129
            ],
            "node": [
                442
            ],
            "__typename": [
                1129
            ]
        },
        "GistConnection": {
            "edges": [
                446
            ],
            "nodes": [
                441
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "GistEdge": {
            "cursor": [
                1129
            ],
            "node": [
                441
            ],
            "__typename": [
                1129
            ]
        },
        "GistFile": {
            "encodedName": [
                1129
            ],
            "encoding": [
                1129
            ],
            "extension": [
                1129
            ],
            "isImage": [
                80
            ],
            "isTruncated": [
                80
            ],
            "language": [
                517
            ],
            "name": [
                1129
            ],
            "size": [
                474
            ],
            "text": [
                1129,
                {
                    "truncate": [
                        474
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "GistOrder": {
            "field": [
                449
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "GistOrderField": {},
        "GistPrivacy": {},
        "GitActor": {
            "avatarUrl": [
                1186,
                {
                    "size": [
                        474
                    ]
                }
            ],
            "date": [
                460
            ],
            "email": [
                1129
            ],
            "name": [
                1129
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "GitActorConnection": {
            "edges": [
                453
            ],
            "nodes": [
                451
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "GitActorEdge": {
            "cursor": [
                1129
            ],
            "node": [
                451
            ],
            "__typename": [
                1129
            ]
        },
        "GitHubMetadata": {
            "gitHubServicesSha": [
                456
            ],
            "gitIpAddresses": [
                1129
            ],
            "hookIpAddresses": [
                1129
            ],
            "importerIpAddresses": [
                1129
            ],
            "isPasswordAuthenticationVerifiable": [
                80
            ],
            "pagesIpAddresses": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "GitObject": {
            "abbreviatedOid": [
                1129
            ],
            "commitResourcePath": [
                1186
            ],
            "commitUrl": [
                1186
            ],
            "id": [
                472
            ],
            "oid": [
                456
            ],
            "repository": [
                950
            ],
            "on_Blob": [
                79
            ],
            "on_Commit": [
                155
            ],
            "on_Tag": [
                1139
            ],
            "on_Tree": [
                1184
            ],
            "__typename": [
                1129
            ]
        },
        "GitObjectID": {},
        "GitSSHRemote": {},
        "GitSignature": {
            "email": [
                1129
            ],
            "isValid": [
                80
            ],
            "payload": [
                1129
            ],
            "signature": [
                1129
            ],
            "signer": [
                1333
            ],
            "state": [
                459
            ],
            "wasSignedByGitHub": [
                80
            ],
            "on_GpgSignature": [
                461
            ],
            "on_SmimeSignature": [
                1065
            ],
            "on_SshSignature": [
                1111
            ],
            "on_UnknownSignature": [
                1197
            ],
            "__typename": [
                1129
            ]
        },
        "GitSignatureState": {},
        "GitTimestamp": {},
        "GpgSignature": {
            "email": [
                1129
            ],
            "isValid": [
                80
            ],
            "keyId": [
                1129
            ],
            "payload": [
                1129
            ],
            "signature": [
                1129
            ],
            "signer": [
                1333
            ],
            "state": [
                459
            ],
            "wasSignedByGitHub": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "GrantEnterpriseOrganizationsMigratorRoleInput": {
            "enterpriseId": [
                472
            ],
            "login": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "GrantEnterpriseOrganizationsMigratorRolePayload": {
            "clientMutationId": [
                1129
            ],
            "organizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "GrantMigratorRoleInput": {
            "organizationId": [
                472
            ],
            "actor": [
                1129
            ],
            "actorType": [
                8
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "GrantMigratorRolePayload": {
            "clientMutationId": [
                1129
            ],
            "success": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "HTML": {},
        "HeadRefDeletedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "headRef": [
                873
            ],
            "headRefName": [
                1129
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "HeadRefForcePushedEvent": {
            "actor": [
                6
            ],
            "afterCommit": [
                155
            ],
            "beforeCommit": [
                155
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "ref": [
                873
            ],
            "__typename": [
                1129
            ]
        },
        "HeadRefRestoredEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "Hovercard": {
            "contexts": [
                471
            ],
            "__typename": [
                1129
            ]
        },
        "HovercardContext": {
            "message": [
                1129
            ],
            "octicon": [
                1129
            ],
            "on_GenericHovercardContext": [
                440
            ],
            "on_OrganizationTeamsHovercardContext": [
                661
            ],
            "on_OrganizationsHovercardContext": [
                662
            ],
            "on_ReviewStatusHovercardContext": [
                1021
            ],
            "on_ViewerHovercardContext": [
                1355
            ],
            "__typename": [
                1129
            ]
        },
        "ID": {},
        "IdentityProviderConfigurationState": {},
        "Int": {},
        "InviteEnterpriseAdminInput": {
            "enterpriseId": [
                472
            ],
            "invitee": [
                1129
            ],
            "email": [
                1129
            ],
            "role": [
                369
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "InviteEnterpriseAdminPayload": {
            "clientMutationId": [
                1129
            ],
            "invitation": [
                364
            ],
            "__typename": [
                1129
            ]
        },
        "IpAllowListEnabledSettingValue": {},
        "IpAllowListEntry": {
            "allowListValue": [
                1129
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "isActive": [
                80
            ],
            "name": [
                1129
            ],
            "owner": [
                484
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "IpAllowListEntryConnection": {
            "edges": [
                480
            ],
            "nodes": [
                478
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "IpAllowListEntryEdge": {
            "cursor": [
                1129
            ],
            "node": [
                478
            ],
            "__typename": [
                1129
            ]
        },
        "IpAllowListEntryOrder": {
            "field": [
                482
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "IpAllowListEntryOrderField": {},
        "IpAllowListForInstalledAppsEnabledSettingValue": {},
        "IpAllowListOwner": {
            "on_App": [
                50
            ],
            "on_Enterprise": [
                361
            ],
            "on_Organization": [
                639
            ],
            "on_Node": [
                588
            ],
            "on_Actor": [
                6
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_MemberStatusable": [
                554
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "Issue": {
            "activeLockReason": [
                535
            ],
            "assignees": [
                1336,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "author": [
                6
            ],
            "authorAssociation": [
                152
            ],
            "body": [
                1129
            ],
            "bodyHTML": [
                466
            ],
            "bodyResourcePath": [
                1186
            ],
            "bodyText": [
                1129
            ],
            "bodyUrl": [
                1186
            ],
            "closed": [
                80
            ],
            "closedAt": [
                252
            ],
            "comments": [
                488,
                {
                    "orderBy": [
                        490
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "createdAt": [
                252
            ],
            "createdViaEmail": [
                80
            ],
            "databaseId": [
                474
            ],
            "editor": [
                6
            ],
            "hovercard": [
                470,
                {
                    "includeNotificationContexts": [
                        80
                    ]
                }
            ],
            "id": [
                472
            ],
            "includesCreatedEdit": [
                80
            ],
            "isPinned": [
                80
            ],
            "isReadByViewer": [
                80
            ],
            "labels": [
                511,
                {
                    "orderBy": [
                        513
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "lastEditedAt": [
                252
            ],
            "linkedBranches": [
                531,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "locked": [
                80
            ],
            "milestone": [
                571
            ],
            "number": [
                474
            ],
            "participants": [
                1336,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "projectCards": [
                710,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "archivedStates": [
                        709,
                        "[ProjectCardArchivedState]"
                    ]
                }
            ],
            "projectItems": [
                760,
                {
                    "includeArchived": [
                        80
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "projectNext": [
                721,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projectNextItems": [
                730,
                {
                    "includeArchived": [
                        80
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "projectV2": [
                744,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projectsNext": [
                722,
                {
                    "query": [
                        1129
                    ],
                    "sortBy": [
                        736
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "projectsV2": [
                745,
                {
                    "query": [
                        1129
                    ],
                    "orderBy": [
                        786
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "publishedAt": [
                252
            ],
            "reactionGroups": [
                866
            ],
            "reactions": [
                863,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "content": [
                        864
                    ],
                    "orderBy": [
                        867
                    ]
                }
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "state": [
                499
            ],
            "stateReason": [
                500
            ],
            "timeline": [
                502,
                {
                    "since": [
                        252
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "timelineItems": [
                506,
                {
                    "since": [
                        252
                    ],
                    "skip": [
                        474
                    ],
                    "itemTypes": [
                        508,
                        "[IssueTimelineItemsItemType!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "title": [
                1129
            ],
            "titleHTML": [
                1129
            ],
            "trackedInIssues": [
                492,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "trackedIssues": [
                492,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "trackedIssuesCount": [
                474,
                {
                    "states": [
                        1178,
                        "[TrackedIssueStates]"
                    ]
                }
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "userContentEdits": [
                1338,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "viewerCanReact": [
                80
            ],
            "viewerCanSubscribe": [
                80
            ],
            "viewerCanUpdate": [
                80
            ],
            "viewerCannotUpdateReasons": [
                153
            ],
            "viewerDidAuthor": [
                80
            ],
            "viewerSubscription": [
                1137
            ],
            "__typename": [
                1129
            ]
        },
        "IssueClosedStateReason": {},
        "IssueComment": {
            "author": [
                6
            ],
            "authorAssociation": [
                152
            ],
            "body": [
                1129
            ],
            "bodyHTML": [
                466
            ],
            "bodyText": [
                1129
            ],
            "createdAt": [
                252
            ],
            "createdViaEmail": [
                80
            ],
            "databaseId": [
                474
            ],
            "editor": [
                6
            ],
            "id": [
                472
            ],
            "includesCreatedEdit": [
                80
            ],
            "isMinimized": [
                80
            ],
            "issue": [
                485
            ],
            "lastEditedAt": [
                252
            ],
            "minimizedReason": [
                1129
            ],
            "publishedAt": [
                252
            ],
            "pullRequest": [
                812
            ],
            "reactionGroups": [
                866
            ],
            "reactions": [
                863,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "content": [
                        864
                    ],
                    "orderBy": [
                        867
                    ]
                }
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "userContentEdits": [
                1338,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "viewerCanDelete": [
                80
            ],
            "viewerCanMinimize": [
                80
            ],
            "viewerCanReact": [
                80
            ],
            "viewerCanUpdate": [
                80
            ],
            "viewerCannotUpdateReasons": [
                153
            ],
            "viewerDidAuthor": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "IssueCommentConnection": {
            "edges": [
                489
            ],
            "nodes": [
                487
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "IssueCommentEdge": {
            "cursor": [
                1129
            ],
            "node": [
                487
            ],
            "__typename": [
                1129
            ]
        },
        "IssueCommentOrder": {
            "field": [
                491
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "IssueCommentOrderField": {},
        "IssueConnection": {
            "edges": [
                494
            ],
            "nodes": [
                485
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "IssueContributionsByRepository": {
            "contributions": [
                236,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        179
                    ]
                }
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "IssueEdge": {
            "cursor": [
                1129
            ],
            "node": [
                485
            ],
            "__typename": [
                1129
            ]
        },
        "IssueFilters": {
            "assignee": [
                1129
            ],
            "createdBy": [
                1129
            ],
            "labels": [
                1129
            ],
            "mentioned": [
                1129
            ],
            "milestone": [
                1129
            ],
            "milestoneNumber": [
                1129
            ],
            "since": [
                252
            ],
            "states": [
                499
            ],
            "viewerSubscribed": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "IssueOrPullRequest": {
            "on_Issue": [
                485
            ],
            "on_PullRequest": [
                812
            ],
            "on_Node": [
                588
            ],
            "on_Assignable": [
                59
            ],
            "on_Closable": [
                142
            ],
            "on_Comment": [
                151
            ],
            "on_Updatable": [
                1223
            ],
            "on_UpdatableComment": [
                1224
            ],
            "on_Labelable": [
                515
            ],
            "on_Lockable": [
                536
            ],
            "on_Reactable": [
                859
            ],
            "on_RepositoryNode": [
                980
            ],
            "on_Subscribable": [
                1135
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "__typename": [
                1129
            ]
        },
        "IssueOrder": {
            "field": [
                498
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "IssueOrderField": {},
        "IssueState": {},
        "IssueStateReason": {},
        "IssueTemplate": {
            "about": [
                1129
            ],
            "body": [
                1129
            ],
            "filename": [
                1129
            ],
            "name": [
                1129
            ],
            "title": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "IssueTimelineConnection": {
            "edges": [
                504
            ],
            "nodes": [
                503
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "IssueTimelineItem": {
            "on_AssignedEvent": [
                60
            ],
            "on_ClosedEvent": [
                147
            ],
            "on_Commit": [
                155
            ],
            "on_CrossReferencedEvent": [
                250
            ],
            "on_DemilestonedEvent": [
                297
            ],
            "on_IssueComment": [
                487
            ],
            "on_LabeledEvent": [
                516
            ],
            "on_LockedEvent": [
                537
            ],
            "on_MilestonedEvent": [
                578
            ],
            "on_ReferencedEvent": [
                879
            ],
            "on_RenamedTitleEvent": [
                916
            ],
            "on_ReopenedEvent": [
                922
            ],
            "on_SubscribedEvent": [
                1136
            ],
            "on_TransferredEvent": [
                1183
            ],
            "on_UnassignedEvent": [
                1191
            ],
            "on_UnlabeledEvent": [
                1198
            ],
            "on_UnlockedEvent": [
                1207
            ],
            "on_UnsubscribedEvent": [
                1222
            ],
            "on_UserBlockedEvent": [
                1335
            ],
            "on_Node": [
                588
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_GitObject": [
                455
            ],
            "on_Subscribable": [
                1135
            ],
            "on_Comment": [
                151
            ],
            "on_Deletable": [
                256
            ],
            "on_Minimizable": [
                579
            ],
            "on_Updatable": [
                1223
            ],
            "on_UpdatableComment": [
                1224
            ],
            "on_Reactable": [
                859
            ],
            "on_RepositoryNode": [
                980
            ],
            "__typename": [
                1129
            ]
        },
        "IssueTimelineItemEdge": {
            "cursor": [
                1129
            ],
            "node": [
                503
            ],
            "__typename": [
                1129
            ]
        },
        "IssueTimelineItems": {
            "on_AddedToProjectEvent": [
                49
            ],
            "on_AssignedEvent": [
                60
            ],
            "on_ClosedEvent": [
                147
            ],
            "on_CommentDeletedEvent": [
                154
            ],
            "on_ConnectedEvent": [
                172
            ],
            "on_ConvertedNoteToIssueEvent": [
                186
            ],
            "on_ConvertedToDiscussionEvent": [
                187
            ],
            "on_CrossReferencedEvent": [
                250
            ],
            "on_DemilestonedEvent": [
                297
            ],
            "on_DisconnectedEvent": [
                333
            ],
            "on_IssueComment": [
                487
            ],
            "on_LabeledEvent": [
                516
            ],
            "on_LockedEvent": [
                537
            ],
            "on_MarkedAsDuplicateEvent": [
                549
            ],
            "on_MentionedEvent": [
                558
            ],
            "on_MilestonedEvent": [
                578
            ],
            "on_MovedColumnsInProjectEvent": [
                586
            ],
            "on_PinnedEvent": [
                698
            ],
            "on_ReferencedEvent": [
                879
            ],
            "on_RemovedFromProjectEvent": [
                915
            ],
            "on_RenamedTitleEvent": [
                916
            ],
            "on_ReopenedEvent": [
                922
            ],
            "on_SubscribedEvent": [
                1136
            ],
            "on_TransferredEvent": [
                1183
            ],
            "on_UnassignedEvent": [
                1191
            ],
            "on_UnlabeledEvent": [
                1198
            ],
            "on_UnlockedEvent": [
                1207
            ],
            "on_UnmarkedAsDuplicateEvent": [
                1214
            ],
            "on_UnpinnedEvent": [
                1219
            ],
            "on_UnsubscribedEvent": [
                1222
            ],
            "on_UserBlockedEvent": [
                1335
            ],
            "on_Node": [
                588
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_Comment": [
                151
            ],
            "on_Deletable": [
                256
            ],
            "on_Minimizable": [
                579
            ],
            "on_Updatable": [
                1223
            ],
            "on_UpdatableComment": [
                1224
            ],
            "on_Reactable": [
                859
            ],
            "on_RepositoryNode": [
                980
            ],
            "__typename": [
                1129
            ]
        },
        "IssueTimelineItemsConnection": {
            "edges": [
                507
            ],
            "filteredCount": [
                474
            ],
            "nodes": [
                505
            ],
            "pageCount": [
                474
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "IssueTimelineItemsEdge": {
            "cursor": [
                1129
            ],
            "node": [
                505
            ],
            "__typename": [
                1129
            ]
        },
        "IssueTimelineItemsItemType": {},
        "JoinedGitHubContribution": {
            "isRestricted": [
                80
            ],
            "occurredAt": [
                252
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "Label": {
            "color": [
                1129
            ],
            "createdAt": [
                252
            ],
            "description": [
                1129
            ],
            "id": [
                472
            ],
            "isDefault": [
                80
            ],
            "issues": [
                492,
                {
                    "orderBy": [
                        497
                    ],
                    "labels": [
                        1129,
                        "[String!]"
                    ],
                    "states": [
                        499,
                        "[IssueState!]"
                    ],
                    "filterBy": [
                        495
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "name": [
                1129
            ],
            "pullRequests": [
                820,
                {
                    "states": [
                        841,
                        "[PullRequestState!]"
                    ],
                    "labels": [
                        1129,
                        "[String!]"
                    ],
                    "headRefName": [
                        1129
                    ],
                    "baseRefName": [
                        1129
                    ],
                    "orderBy": [
                        497
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "LabelConnection": {
            "edges": [
                512
            ],
            "nodes": [
                510
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "LabelEdge": {
            "cursor": [
                1129
            ],
            "node": [
                510
            ],
            "__typename": [
                1129
            ]
        },
        "LabelOrder": {
            "field": [
                514
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "LabelOrderField": {},
        "Labelable": {
            "labels": [
                511,
                {
                    "orderBy": [
                        513
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "on_Discussion": [
                334
            ],
            "on_Issue": [
                485
            ],
            "on_PullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "LabeledEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "label": [
                510
            ],
            "labelable": [
                515
            ],
            "__typename": [
                1129
            ]
        },
        "Language": {
            "color": [
                1129
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "LanguageConnection": {
            "edges": [
                519
            ],
            "nodes": [
                517
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "totalSize": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "LanguageEdge": {
            "cursor": [
                1129
            ],
            "node": [
                517
            ],
            "size": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "LanguageOrder": {
            "field": [
                521
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "LanguageOrderField": {},
        "License": {
            "body": [
                1129
            ],
            "conditions": [
                523
            ],
            "description": [
                1129
            ],
            "featured": [
                80
            ],
            "hidden": [
                80
            ],
            "id": [
                472
            ],
            "implementation": [
                1129
            ],
            "key": [
                1129
            ],
            "limitations": [
                523
            ],
            "name": [
                1129
            ],
            "nickname": [
                1129
            ],
            "permissions": [
                523
            ],
            "pseudoLicense": [
                80
            ],
            "spdxId": [
                1129
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "LicenseRule": {
            "description": [
                1129
            ],
            "key": [
                1129
            ],
            "label": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "LinkProjectV2ToRepositoryInput": {
            "projectId": [
                472
            ],
            "repositoryId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "LinkProjectV2ToRepositoryPayload": {
            "clientMutationId": [
                1129
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "LinkProjectV2ToTeamInput": {
            "projectId": [
                472
            ],
            "teamId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "LinkProjectV2ToTeamPayload": {
            "clientMutationId": [
                1129
            ],
            "team": [
                1140
            ],
            "__typename": [
                1129
            ]
        },
        "LinkRepositoryToProjectInput": {
            "projectId": [
                472
            ],
            "repositoryId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "LinkRepositoryToProjectPayload": {
            "clientMutationId": [
                1129
            ],
            "project": [
                707
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "LinkedBranch": {
            "id": [
                472
            ],
            "ref": [
                873
            ],
            "__typename": [
                1129
            ]
        },
        "LinkedBranchConnection": {
            "edges": [
                532
            ],
            "nodes": [
                530
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "LinkedBranchEdge": {
            "cursor": [
                1129
            ],
            "node": [
                530
            ],
            "__typename": [
                1129
            ]
        },
        "LockLockableInput": {
            "lockableId": [
                472
            ],
            "lockReason": [
                535
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "LockLockablePayload": {
            "actor": [
                6
            ],
            "clientMutationId": [
                1129
            ],
            "lockedRecord": [
                536
            ],
            "__typename": [
                1129
            ]
        },
        "LockReason": {},
        "Lockable": {
            "activeLockReason": [
                535
            ],
            "locked": [
                80
            ],
            "on_Discussion": [
                334
            ],
            "on_Issue": [
                485
            ],
            "on_PullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "LockedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "lockReason": [
                535
            ],
            "lockable": [
                536
            ],
            "__typename": [
                1129
            ]
        },
        "Mannequin": {
            "avatarUrl": [
                1186,
                {
                    "size": [
                        474
                    ]
                }
            ],
            "claimant": [
                1333
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "email": [
                1129
            ],
            "id": [
                472
            ],
            "login": [
                1129
            ],
            "resourcePath": [
                1186
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "MannequinConnection": {
            "edges": [
                540
            ],
            "nodes": [
                538
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "MannequinEdge": {
            "cursor": [
                1129
            ],
            "node": [
                538
            ],
            "__typename": [
                1129
            ]
        },
        "MannequinOrder": {
            "field": [
                542
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "MannequinOrderField": {},
        "MarkDiscussionCommentAsAnswerInput": {
            "id": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "MarkDiscussionCommentAsAnswerPayload": {
            "clientMutationId": [
                1129
            ],
            "discussion": [
                334
            ],
            "__typename": [
                1129
            ]
        },
        "MarkFileAsViewedInput": {
            "pullRequestId": [
                472
            ],
            "path": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "MarkFileAsViewedPayload": {
            "clientMutationId": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "MarkPullRequestReadyForReviewInput": {
            "pullRequestId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "MarkPullRequestReadyForReviewPayload": {
            "clientMutationId": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "MarkedAsDuplicateEvent": {
            "actor": [
                6
            ],
            "canonical": [
                496
            ],
            "createdAt": [
                252
            ],
            "duplicate": [
                496
            ],
            "id": [
                472
            ],
            "isCrossRepository": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "MarketplaceCategory": {
            "description": [
                1129
            ],
            "howItWorks": [
                1129
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "primaryListingCount": [
                474
            ],
            "resourcePath": [
                1186
            ],
            "secondaryListingCount": [
                474
            ],
            "slug": [
                1129
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "MarketplaceListing": {
            "app": [
                50
            ],
            "companyUrl": [
                1186
            ],
            "configurationResourcePath": [
                1186
            ],
            "configurationUrl": [
                1186
            ],
            "documentationUrl": [
                1186
            ],
            "extendedDescription": [
                1129
            ],
            "extendedDescriptionHTML": [
                466
            ],
            "fullDescription": [
                1129
            ],
            "fullDescriptionHTML": [
                466
            ],
            "hasPublishedFreeTrialPlans": [
                80
            ],
            "hasTermsOfService": [
                80
            ],
            "hasVerifiedOwner": [
                80
            ],
            "howItWorks": [
                1129
            ],
            "howItWorksHTML": [
                466
            ],
            "id": [
                472
            ],
            "installationUrl": [
                1186
            ],
            "installedForViewer": [
                80
            ],
            "isArchived": [
                80
            ],
            "isDraft": [
                80
            ],
            "isPaid": [
                80
            ],
            "isPublic": [
                80
            ],
            "isRejected": [
                80
            ],
            "isUnverified": [
                80
            ],
            "isUnverifiedPending": [
                80
            ],
            "isVerificationPendingFromDraft": [
                80
            ],
            "isVerificationPendingFromUnverified": [
                80
            ],
            "isVerified": [
                80
            ],
            "logoBackgroundColor": [
                1129
            ],
            "logoUrl": [
                1186,
                {
                    "size": [
                        474
                    ]
                }
            ],
            "name": [
                1129
            ],
            "normalizedShortDescription": [
                1129
            ],
            "pricingUrl": [
                1186
            ],
            "primaryCategory": [
                550
            ],
            "privacyPolicyUrl": [
                1186
            ],
            "resourcePath": [
                1186
            ],
            "screenshotUrls": [
                1129
            ],
            "secondaryCategory": [
                550
            ],
            "shortDescription": [
                1129
            ],
            "slug": [
                1129
            ],
            "statusUrl": [
                1186
            ],
            "supportEmail": [
                1129
            ],
            "supportUrl": [
                1186
            ],
            "termsOfServiceUrl": [
                1186
            ],
            "url": [
                1186
            ],
            "viewerCanAddPlans": [
                80
            ],
            "viewerCanApprove": [
                80
            ],
            "viewerCanDelist": [
                80
            ],
            "viewerCanEdit": [
                80
            ],
            "viewerCanEditCategories": [
                80
            ],
            "viewerCanEditPlans": [
                80
            ],
            "viewerCanRedraft": [
                80
            ],
            "viewerCanReject": [
                80
            ],
            "viewerCanRequestApproval": [
                80
            ],
            "viewerHasPurchased": [
                80
            ],
            "viewerHasPurchasedForAllOrganizations": [
                80
            ],
            "viewerIsListingAdmin": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "MarketplaceListingConnection": {
            "edges": [
                553
            ],
            "nodes": [
                551
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "MarketplaceListingEdge": {
            "cursor": [
                1129
            ],
            "node": [
                551
            ],
            "__typename": [
                1129
            ]
        },
        "MemberStatusable": {
            "memberStatuses": [
                1343,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1345
                    ]
                }
            ],
            "on_Organization": [
                639
            ],
            "on_Team": [
                1140
            ],
            "__typename": [
                1129
            ]
        },
        "MembersCanDeleteReposClearAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "enterpriseResourcePath": [
                1186
            ],
            "enterpriseSlug": [
                1129
            ],
            "enterpriseUrl": [
                1186
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "MembersCanDeleteReposDisableAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "enterpriseResourcePath": [
                1186
            ],
            "enterpriseSlug": [
                1129
            ],
            "enterpriseUrl": [
                1186
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "MembersCanDeleteReposEnableAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "enterpriseResourcePath": [
                1186
            ],
            "enterpriseSlug": [
                1129
            ],
            "enterpriseUrl": [
                1186
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "MentionedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "__typename": [
                1129
            ]
        },
        "MergeBranchInput": {
            "repositoryId": [
                472
            ],
            "base": [
                1129
            ],
            "head": [
                1129
            ],
            "commitMessage": [
                1129
            ],
            "authorEmail": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "MergeBranchPayload": {
            "clientMutationId": [
                1129
            ],
            "mergeCommit": [
                155
            ],
            "__typename": [
                1129
            ]
        },
        "MergeCommitMessage": {},
        "MergeCommitTitle": {},
        "MergePullRequestInput": {
            "pullRequestId": [
                472
            ],
            "commitHeadline": [
                1129
            ],
            "commitBody": [
                1129
            ],
            "expectedHeadOid": [
                456
            ],
            "mergeMethod": [
                823
            ],
            "authorEmail": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "MergePullRequestPayload": {
            "actor": [
                6
            ],
            "clientMutationId": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "MergeableState": {},
        "MergedEvent": {
            "actor": [
                6
            ],
            "commit": [
                155
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "mergeRef": [
                873
            ],
            "mergeRefName": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "Migration": {
            "continueOnError": [
                80
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                1129
            ],
            "failureReason": [
                1129
            ],
            "id": [
                472
            ],
            "migrationLogUrl": [
                1186
            ],
            "migrationSource": [
                568
            ],
            "repositoryName": [
                1129
            ],
            "sourceUrl": [
                1186
            ],
            "state": [
                570
            ],
            "on_RepositoryMigration": [
                974
            ],
            "__typename": [
                1129
            ]
        },
        "MigrationSource": {
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "type": [
                569
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "MigrationSourceType": {},
        "MigrationState": {},
        "Milestone": {
            "closed": [
                80
            ],
            "closedAt": [
                252
            ],
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "description": [
                1129
            ],
            "dueOn": [
                252
            ],
            "id": [
                472
            ],
            "issues": [
                492,
                {
                    "orderBy": [
                        497
                    ],
                    "labels": [
                        1129,
                        "[String!]"
                    ],
                    "states": [
                        499,
                        "[IssueState!]"
                    ],
                    "filterBy": [
                        495
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "number": [
                474
            ],
            "progressPercentage": [
                431
            ],
            "pullRequests": [
                820,
                {
                    "states": [
                        841,
                        "[PullRequestState!]"
                    ],
                    "labels": [
                        1129,
                        "[String!]"
                    ],
                    "headRefName": [
                        1129
                    ],
                    "baseRefName": [
                        1129
                    ],
                    "orderBy": [
                        497
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "state": [
                577
            ],
            "title": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "MilestoneConnection": {
            "edges": [
                573
            ],
            "nodes": [
                571
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "MilestoneEdge": {
            "cursor": [
                1129
            ],
            "node": [
                571
            ],
            "__typename": [
                1129
            ]
        },
        "MilestoneItem": {
            "on_Issue": [
                485
            ],
            "on_PullRequest": [
                812
            ],
            "on_Node": [
                588
            ],
            "on_Assignable": [
                59
            ],
            "on_Closable": [
                142
            ],
            "on_Comment": [
                151
            ],
            "on_Updatable": [
                1223
            ],
            "on_UpdatableComment": [
                1224
            ],
            "on_Labelable": [
                515
            ],
            "on_Lockable": [
                536
            ],
            "on_Reactable": [
                859
            ],
            "on_RepositoryNode": [
                980
            ],
            "on_Subscribable": [
                1135
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "__typename": [
                1129
            ]
        },
        "MilestoneOrder": {
            "field": [
                576
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "MilestoneOrderField": {},
        "MilestoneState": {},
        "MilestonedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "milestoneTitle": [
                1129
            ],
            "subject": [
                574
            ],
            "__typename": [
                1129
            ]
        },
        "Minimizable": {
            "isMinimized": [
                80
            ],
            "minimizedReason": [
                1129
            ],
            "viewerCanMinimize": [
                80
            ],
            "on_CommitComment": [
                157
            ],
            "on_DiscussionComment": [
                338
            ],
            "on_GistComment": [
                442
            ],
            "on_IssueComment": [
                487
            ],
            "on_PullRequestReviewComment": [
                827
            ],
            "__typename": [
                1129
            ]
        },
        "MinimizeCommentInput": {
            "subjectId": [
                472
            ],
            "classifier": [
                949
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "MinimizeCommentPayload": {
            "clientMutationId": [
                1129
            ],
            "minimizedComment": [
                579
            ],
            "__typename": [
                1129
            ]
        },
        "MoveProjectCardInput": {
            "cardId": [
                472
            ],
            "columnId": [
                472
            ],
            "afterCardId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "MoveProjectCardPayload": {
            "cardEdge": [
                711
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "MoveProjectColumnInput": {
            "columnId": [
                472
            ],
            "afterColumnId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "MoveProjectColumnPayload": {
            "clientMutationId": [
                1129
            ],
            "columnEdge": [
                716
            ],
            "__typename": [
                1129
            ]
        },
        "MovedColumnsInProjectEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "__typename": [
                1129
            ]
        },
        "Mutation": {
            "abortQueuedMigrations": [
                1,
                {
                    "input": [
                        0,
                        "AbortQueuedMigrationsInput!"
                    ]
                }
            ],
            "acceptEnterpriseAdministratorInvitation": [
                3,
                {
                    "input": [
                        2,
                        "AcceptEnterpriseAdministratorInvitationInput!"
                    ]
                }
            ],
            "acceptTopicSuggestion": [
                5,
                {
                    "input": [
                        4,
                        "AcceptTopicSuggestionInput!"
                    ]
                }
            ],
            "addAssigneesToAssignable": [
                10,
                {
                    "input": [
                        9,
                        "AddAssigneesToAssignableInput!"
                    ]
                }
            ],
            "addComment": [
                12,
                {
                    "input": [
                        11,
                        "AddCommentInput!"
                    ]
                }
            ],
            "addDiscussionComment": [
                14,
                {
                    "input": [
                        13,
                        "AddDiscussionCommentInput!"
                    ]
                }
            ],
            "addDiscussionPollVote": [
                16,
                {
                    "input": [
                        15,
                        "AddDiscussionPollVoteInput!"
                    ]
                }
            ],
            "addEnterpriseOrganizationMember": [
                18,
                {
                    "input": [
                        17,
                        "AddEnterpriseOrganizationMemberInput!"
                    ]
                }
            ],
            "addEnterpriseSupportEntitlement": [
                20,
                {
                    "input": [
                        19,
                        "AddEnterpriseSupportEntitlementInput!"
                    ]
                }
            ],
            "addLabelsToLabelable": [
                22,
                {
                    "input": [
                        21,
                        "AddLabelsToLabelableInput!"
                    ]
                }
            ],
            "addProjectCard": [
                24,
                {
                    "input": [
                        23,
                        "AddProjectCardInput!"
                    ]
                }
            ],
            "addProjectColumn": [
                26,
                {
                    "input": [
                        25,
                        "AddProjectColumnInput!"
                    ]
                }
            ],
            "addProjectDraftIssue": [
                28,
                {
                    "input": [
                        27,
                        "AddProjectDraftIssueInput!"
                    ]
                }
            ],
            "addProjectNextItem": [
                30,
                {
                    "input": [
                        29,
                        "AddProjectNextItemInput!"
                    ]
                }
            ],
            "addProjectV2DraftIssue": [
                32,
                {
                    "input": [
                        31,
                        "AddProjectV2DraftIssueInput!"
                    ]
                }
            ],
            "addProjectV2ItemById": [
                34,
                {
                    "input": [
                        33,
                        "AddProjectV2ItemByIdInput!"
                    ]
                }
            ],
            "addPullRequestReview": [
                38,
                {
                    "input": [
                        37,
                        "AddPullRequestReviewInput!"
                    ]
                }
            ],
            "addPullRequestReviewComment": [
                36,
                {
                    "input": [
                        35,
                        "AddPullRequestReviewCommentInput!"
                    ]
                }
            ],
            "addPullRequestReviewThread": [
                40,
                {
                    "input": [
                        39,
                        "AddPullRequestReviewThreadInput!"
                    ]
                }
            ],
            "addReaction": [
                42,
                {
                    "input": [
                        41,
                        "AddReactionInput!"
                    ]
                }
            ],
            "addStar": [
                44,
                {
                    "input": [
                        43,
                        "AddStarInput!"
                    ]
                }
            ],
            "addUpvote": [
                46,
                {
                    "input": [
                        45,
                        "AddUpvoteInput!"
                    ]
                }
            ],
            "addVerifiableDomain": [
                48,
                {
                    "input": [
                        47,
                        "AddVerifiableDomainInput!"
                    ]
                }
            ],
            "approveDeployments": [
                52,
                {
                    "input": [
                        51,
                        "ApproveDeploymentsInput!"
                    ]
                }
            ],
            "approveVerifiableDomain": [
                54,
                {
                    "input": [
                        53,
                        "ApproveVerifiableDomainInput!"
                    ]
                }
            ],
            "archiveProjectV2Item": [
                56,
                {
                    "input": [
                        55,
                        "ArchiveProjectV2ItemInput!"
                    ]
                }
            ],
            "archiveRepository": [
                58,
                {
                    "input": [
                        57,
                        "ArchiveRepositoryInput!"
                    ]
                }
            ],
            "cancelEnterpriseAdminInvitation": [
                100,
                {
                    "input": [
                        99,
                        "CancelEnterpriseAdminInvitationInput!"
                    ]
                }
            ],
            "cancelSponsorship": [
                102,
                {
                    "input": [
                        101,
                        "CancelSponsorshipInput!"
                    ]
                }
            ],
            "changeUserStatus": [
                104,
                {
                    "input": [
                        103,
                        "ChangeUserStatusInput!"
                    ]
                }
            ],
            "clearLabelsFromLabelable": [
                135,
                {
                    "input": [
                        134,
                        "ClearLabelsFromLabelableInput!"
                    ]
                }
            ],
            "clearProjectV2ItemFieldValue": [
                137,
                {
                    "input": [
                        136,
                        "ClearProjectV2ItemFieldValueInput!"
                    ]
                }
            ],
            "cloneProject": [
                139,
                {
                    "input": [
                        138,
                        "CloneProjectInput!"
                    ]
                }
            ],
            "cloneTemplateRepository": [
                141,
                {
                    "input": [
                        140,
                        "CloneTemplateRepositoryInput!"
                    ]
                }
            ],
            "closeIssue": [
                144,
                {
                    "input": [
                        143,
                        "CloseIssueInput!"
                    ]
                }
            ],
            "closePullRequest": [
                146,
                {
                    "input": [
                        145,
                        "ClosePullRequestInput!"
                    ]
                }
            ],
            "convertProjectCardNoteToIssue": [
                182,
                {
                    "input": [
                        181,
                        "ConvertProjectCardNoteToIssueInput!"
                    ]
                }
            ],
            "convertPullRequestToDraft": [
                184,
                {
                    "input": [
                        183,
                        "ConvertPullRequestToDraftInput!"
                    ]
                }
            ],
            "createAttributionInvitation": [
                189,
                {
                    "input": [
                        188,
                        "CreateAttributionInvitationInput!"
                    ]
                }
            ],
            "createBranchProtectionRule": [
                191,
                {
                    "input": [
                        190,
                        "CreateBranchProtectionRuleInput!"
                    ]
                }
            ],
            "createCheckRun": [
                193,
                {
                    "input": [
                        192,
                        "CreateCheckRunInput!"
                    ]
                }
            ],
            "createCheckSuite": [
                195,
                {
                    "input": [
                        194,
                        "CreateCheckSuiteInput!"
                    ]
                }
            ],
            "createCommitOnBranch": [
                197,
                {
                    "input": [
                        196,
                        "CreateCommitOnBranchInput!"
                    ]
                }
            ],
            "createDiscussion": [
                199,
                {
                    "input": [
                        198,
                        "CreateDiscussionInput!"
                    ]
                }
            ],
            "createEnterpriseOrganization": [
                201,
                {
                    "input": [
                        200,
                        "CreateEnterpriseOrganizationInput!"
                    ]
                }
            ],
            "createEnvironment": [
                203,
                {
                    "input": [
                        202,
                        "CreateEnvironmentInput!"
                    ]
                }
            ],
            "createIpAllowListEntry": [
                205,
                {
                    "input": [
                        204,
                        "CreateIpAllowListEntryInput!"
                    ]
                }
            ],
            "createIssue": [
                207,
                {
                    "input": [
                        206,
                        "CreateIssueInput!"
                    ]
                }
            ],
            "createLinkedBranch": [
                209,
                {
                    "input": [
                        208,
                        "CreateLinkedBranchInput!"
                    ]
                }
            ],
            "createMigrationSource": [
                211,
                {
                    "input": [
                        210,
                        "CreateMigrationSourceInput!"
                    ]
                }
            ],
            "createProject": [
                213,
                {
                    "input": [
                        212,
                        "CreateProjectInput!"
                    ]
                }
            ],
            "createProjectV2": [
                215,
                {
                    "input": [
                        214,
                        "CreateProjectV2Input!"
                    ]
                }
            ],
            "createPullRequest": [
                217,
                {
                    "input": [
                        216,
                        "CreatePullRequestInput!"
                    ]
                }
            ],
            "createRef": [
                219,
                {
                    "input": [
                        218,
                        "CreateRefInput!"
                    ]
                }
            ],
            "createRepository": [
                221,
                {
                    "input": [
                        220,
                        "CreateRepositoryInput!"
                    ]
                }
            ],
            "createSponsorsListing": [
                223,
                {
                    "input": [
                        222,
                        "CreateSponsorsListingInput!"
                    ]
                }
            ],
            "createSponsorsTier": [
                225,
                {
                    "input": [
                        224,
                        "CreateSponsorsTierInput!"
                    ]
                }
            ],
            "createSponsorship": [
                227,
                {
                    "input": [
                        226,
                        "CreateSponsorshipInput!"
                    ]
                }
            ],
            "createTeamDiscussion": [
                231,
                {
                    "input": [
                        230,
                        "CreateTeamDiscussionInput!"
                    ]
                }
            ],
            "createTeamDiscussionComment": [
                229,
                {
                    "input": [
                        228,
                        "CreateTeamDiscussionCommentInput!"
                    ]
                }
            ],
            "declineTopicSuggestion": [
                254,
                {
                    "input": [
                        253,
                        "DeclineTopicSuggestionInput!"
                    ]
                }
            ],
            "deleteBranchProtectionRule": [
                258,
                {
                    "input": [
                        257,
                        "DeleteBranchProtectionRuleInput!"
                    ]
                }
            ],
            "deleteDeployment": [
                260,
                {
                    "input": [
                        259,
                        "DeleteDeploymentInput!"
                    ]
                }
            ],
            "deleteDiscussion": [
                264,
                {
                    "input": [
                        263,
                        "DeleteDiscussionInput!"
                    ]
                }
            ],
            "deleteDiscussionComment": [
                262,
                {
                    "input": [
                        261,
                        "DeleteDiscussionCommentInput!"
                    ]
                }
            ],
            "deleteEnvironment": [
                266,
                {
                    "input": [
                        265,
                        "DeleteEnvironmentInput!"
                    ]
                }
            ],
            "deleteIpAllowListEntry": [
                268,
                {
                    "input": [
                        267,
                        "DeleteIpAllowListEntryInput!"
                    ]
                }
            ],
            "deleteIssue": [
                272,
                {
                    "input": [
                        271,
                        "DeleteIssueInput!"
                    ]
                }
            ],
            "deleteIssueComment": [
                270,
                {
                    "input": [
                        269,
                        "DeleteIssueCommentInput!"
                    ]
                }
            ],
            "deleteLinkedBranch": [
                274,
                {
                    "input": [
                        273,
                        "DeleteLinkedBranchInput!"
                    ]
                }
            ],
            "deleteProject": [
                282,
                {
                    "input": [
                        279,
                        "DeleteProjectInput!"
                    ]
                }
            ],
            "deleteProjectCard": [
                276,
                {
                    "input": [
                        275,
                        "DeleteProjectCardInput!"
                    ]
                }
            ],
            "deleteProjectColumn": [
                278,
                {
                    "input": [
                        277,
                        "DeleteProjectColumnInput!"
                    ]
                }
            ],
            "deleteProjectNextItem": [
                281,
                {
                    "input": [
                        280,
                        "DeleteProjectNextItemInput!"
                    ]
                }
            ],
            "deleteProjectV2Item": [
                284,
                {
                    "input": [
                        283,
                        "DeleteProjectV2ItemInput!"
                    ]
                }
            ],
            "deletePullRequestReview": [
                288,
                {
                    "input": [
                        287,
                        "DeletePullRequestReviewInput!"
                    ]
                }
            ],
            "deletePullRequestReviewComment": [
                286,
                {
                    "input": [
                        285,
                        "DeletePullRequestReviewCommentInput!"
                    ]
                }
            ],
            "deleteRef": [
                290,
                {
                    "input": [
                        289,
                        "DeleteRefInput!"
                    ]
                }
            ],
            "deleteTeamDiscussion": [
                294,
                {
                    "input": [
                        293,
                        "DeleteTeamDiscussionInput!"
                    ]
                }
            ],
            "deleteTeamDiscussionComment": [
                292,
                {
                    "input": [
                        291,
                        "DeleteTeamDiscussionCommentInput!"
                    ]
                }
            ],
            "deleteVerifiableDomain": [
                296,
                {
                    "input": [
                        295,
                        "DeleteVerifiableDomainInput!"
                    ]
                }
            ],
            "disablePullRequestAutoMerge": [
                332,
                {
                    "input": [
                        331,
                        "DisablePullRequestAutoMergeInput!"
                    ]
                }
            ],
            "dismissPullRequestReview": [
                352,
                {
                    "input": [
                        351,
                        "DismissPullRequestReviewInput!"
                    ]
                }
            ],
            "dismissRepositoryVulnerabilityAlert": [
                355,
                {
                    "input": [
                        354,
                        "DismissRepositoryVulnerabilityAlertInput!"
                    ]
                }
            ],
            "enablePullRequestAutoMerge": [
                360,
                {
                    "input": [
                        359,
                        "EnablePullRequestAutoMergeInput!"
                    ]
                }
            ],
            "followOrganization": [
                433,
                {
                    "input": [
                        432,
                        "FollowOrganizationInput!"
                    ]
                }
            ],
            "followUser": [
                435,
                {
                    "input": [
                        434,
                        "FollowUserInput!"
                    ]
                }
            ],
            "grantEnterpriseOrganizationsMigratorRole": [
                463,
                {
                    "input": [
                        462,
                        "GrantEnterpriseOrganizationsMigratorRoleInput!"
                    ]
                }
            ],
            "grantMigratorRole": [
                465,
                {
                    "input": [
                        464,
                        "GrantMigratorRoleInput!"
                    ]
                }
            ],
            "inviteEnterpriseAdmin": [
                476,
                {
                    "input": [
                        475,
                        "InviteEnterpriseAdminInput!"
                    ]
                }
            ],
            "linkProjectV2ToRepository": [
                525,
                {
                    "input": [
                        524,
                        "LinkProjectV2ToRepositoryInput!"
                    ]
                }
            ],
            "linkProjectV2ToTeam": [
                527,
                {
                    "input": [
                        526,
                        "LinkProjectV2ToTeamInput!"
                    ]
                }
            ],
            "linkRepositoryToProject": [
                529,
                {
                    "input": [
                        528,
                        "LinkRepositoryToProjectInput!"
                    ]
                }
            ],
            "lockLockable": [
                534,
                {
                    "input": [
                        533,
                        "LockLockableInput!"
                    ]
                }
            ],
            "markDiscussionCommentAsAnswer": [
                544,
                {
                    "input": [
                        543,
                        "MarkDiscussionCommentAsAnswerInput!"
                    ]
                }
            ],
            "markFileAsViewed": [
                546,
                {
                    "input": [
                        545,
                        "MarkFileAsViewedInput!"
                    ]
                }
            ],
            "markPullRequestReadyForReview": [
                548,
                {
                    "input": [
                        547,
                        "MarkPullRequestReadyForReviewInput!"
                    ]
                }
            ],
            "mergeBranch": [
                560,
                {
                    "input": [
                        559,
                        "MergeBranchInput!"
                    ]
                }
            ],
            "mergePullRequest": [
                564,
                {
                    "input": [
                        563,
                        "MergePullRequestInput!"
                    ]
                }
            ],
            "minimizeComment": [
                581,
                {
                    "input": [
                        580,
                        "MinimizeCommentInput!"
                    ]
                }
            ],
            "moveProjectCard": [
                583,
                {
                    "input": [
                        582,
                        "MoveProjectCardInput!"
                    ]
                }
            ],
            "moveProjectColumn": [
                585,
                {
                    "input": [
                        584,
                        "MoveProjectColumnInput!"
                    ]
                }
            ],
            "pinIssue": [
                688,
                {
                    "input": [
                        687,
                        "PinIssueInput!"
                    ]
                }
            ],
            "regenerateEnterpriseIdentityProviderRecoveryCodes": [
                882,
                {
                    "input": [
                        881,
                        "RegenerateEnterpriseIdentityProviderRecoveryCodesInput!"
                    ]
                }
            ],
            "regenerateVerifiableDomainToken": [
                884,
                {
                    "input": [
                        883,
                        "RegenerateVerifiableDomainTokenInput!"
                    ]
                }
            ],
            "rejectDeployments": [
                886,
                {
                    "input": [
                        885,
                        "RejectDeploymentsInput!"
                    ]
                }
            ],
            "removeAssigneesFromAssignable": [
                896,
                {
                    "input": [
                        895,
                        "RemoveAssigneesFromAssignableInput!"
                    ]
                }
            ],
            "removeEnterpriseAdmin": [
                898,
                {
                    "input": [
                        897,
                        "RemoveEnterpriseAdminInput!"
                    ]
                }
            ],
            "removeEnterpriseIdentityProvider": [
                900,
                {
                    "input": [
                        899,
                        "RemoveEnterpriseIdentityProviderInput!"
                    ]
                }
            ],
            "removeEnterpriseOrganization": [
                902,
                {
                    "input": [
                        901,
                        "RemoveEnterpriseOrganizationInput!"
                    ]
                }
            ],
            "removeEnterpriseSupportEntitlement": [
                904,
                {
                    "input": [
                        903,
                        "RemoveEnterpriseSupportEntitlementInput!"
                    ]
                }
            ],
            "removeLabelsFromLabelable": [
                906,
                {
                    "input": [
                        905,
                        "RemoveLabelsFromLabelableInput!"
                    ]
                }
            ],
            "removeOutsideCollaborator": [
                908,
                {
                    "input": [
                        907,
                        "RemoveOutsideCollaboratorInput!"
                    ]
                }
            ],
            "removeReaction": [
                910,
                {
                    "input": [
                        909,
                        "RemoveReactionInput!"
                    ]
                }
            ],
            "removeStar": [
                912,
                {
                    "input": [
                        911,
                        "RemoveStarInput!"
                    ]
                }
            ],
            "removeUpvote": [
                914,
                {
                    "input": [
                        913,
                        "RemoveUpvoteInput!"
                    ]
                }
            ],
            "reopenIssue": [
                919,
                {
                    "input": [
                        918,
                        "ReopenIssueInput!"
                    ]
                }
            ],
            "reopenPullRequest": [
                921,
                {
                    "input": [
                        920,
                        "ReopenPullRequestInput!"
                    ]
                }
            ],
            "requestReviews": [
                998,
                {
                    "input": [
                        997,
                        "RequestReviewsInput!"
                    ]
                }
            ],
            "rerequestCheckSuite": [
                1007,
                {
                    "input": [
                        1006,
                        "RerequestCheckSuiteInput!"
                    ]
                }
            ],
            "resolveReviewThread": [
                1009,
                {
                    "input": [
                        1008,
                        "ResolveReviewThreadInput!"
                    ]
                }
            ],
            "revokeEnterpriseOrganizationsMigratorRole": [
                1023,
                {
                    "input": [
                        1022,
                        "RevokeEnterpriseOrganizationsMigratorRoleInput!"
                    ]
                }
            ],
            "revokeMigratorRole": [
                1025,
                {
                    "input": [
                        1024,
                        "RevokeMigratorRoleInput!"
                    ]
                }
            ],
            "setEnterpriseIdentityProvider": [
                1058,
                {
                    "input": [
                        1057,
                        "SetEnterpriseIdentityProviderInput!"
                    ]
                }
            ],
            "setOrganizationInteractionLimit": [
                1060,
                {
                    "input": [
                        1059,
                        "SetOrganizationInteractionLimitInput!"
                    ]
                }
            ],
            "setRepositoryInteractionLimit": [
                1062,
                {
                    "input": [
                        1061,
                        "SetRepositoryInteractionLimitInput!"
                    ]
                }
            ],
            "setUserInteractionLimit": [
                1064,
                {
                    "input": [
                        1063,
                        "SetUserInteractionLimitInput!"
                    ]
                }
            ],
            "startRepositoryMigration": [
                1120,
                {
                    "input": [
                        1119,
                        "StartRepositoryMigrationInput!"
                    ]
                }
            ],
            "submitPullRequestReview": [
                1131,
                {
                    "input": [
                        1130,
                        "SubmitPullRequestReviewInput!"
                    ]
                }
            ],
            "transferEnterpriseOrganization": [
                1180,
                {
                    "input": [
                        1179,
                        "TransferEnterpriseOrganizationInput!"
                    ]
                }
            ],
            "transferIssue": [
                1182,
                {
                    "input": [
                        1181,
                        "TransferIssueInput!"
                    ]
                }
            ],
            "unarchiveProjectV2Item": [
                1188,
                {
                    "input": [
                        1187,
                        "UnarchiveProjectV2ItemInput!"
                    ]
                }
            ],
            "unarchiveRepository": [
                1190,
                {
                    "input": [
                        1189,
                        "UnarchiveRepositoryInput!"
                    ]
                }
            ],
            "unfollowOrganization": [
                1193,
                {
                    "input": [
                        1192,
                        "UnfollowOrganizationInput!"
                    ]
                }
            ],
            "unfollowUser": [
                1195,
                {
                    "input": [
                        1194,
                        "UnfollowUserInput!"
                    ]
                }
            ],
            "unlinkProjectV2FromRepository": [
                1200,
                {
                    "input": [
                        1199,
                        "UnlinkProjectV2FromRepositoryInput!"
                    ]
                }
            ],
            "unlinkProjectV2FromTeam": [
                1202,
                {
                    "input": [
                        1201,
                        "UnlinkProjectV2FromTeamInput!"
                    ]
                }
            ],
            "unlinkRepositoryFromProject": [
                1204,
                {
                    "input": [
                        1203,
                        "UnlinkRepositoryFromProjectInput!"
                    ]
                }
            ],
            "unlockLockable": [
                1206,
                {
                    "input": [
                        1205,
                        "UnlockLockableInput!"
                    ]
                }
            ],
            "unmarkDiscussionCommentAsAnswer": [
                1209,
                {
                    "input": [
                        1208,
                        "UnmarkDiscussionCommentAsAnswerInput!"
                    ]
                }
            ],
            "unmarkFileAsViewed": [
                1211,
                {
                    "input": [
                        1210,
                        "UnmarkFileAsViewedInput!"
                    ]
                }
            ],
            "unmarkIssueAsDuplicate": [
                1213,
                {
                    "input": [
                        1212,
                        "UnmarkIssueAsDuplicateInput!"
                    ]
                }
            ],
            "unminimizeComment": [
                1216,
                {
                    "input": [
                        1215,
                        "UnminimizeCommentInput!"
                    ]
                }
            ],
            "unpinIssue": [
                1218,
                {
                    "input": [
                        1217,
                        "UnpinIssueInput!"
                    ]
                }
            ],
            "unresolveReviewThread": [
                1221,
                {
                    "input": [
                        1220,
                        "UnresolveReviewThreadInput!"
                    ]
                }
            ],
            "updateBranchProtectionRule": [
                1226,
                {
                    "input": [
                        1225,
                        "UpdateBranchProtectionRuleInput!"
                    ]
                }
            ],
            "updateCheckRun": [
                1228,
                {
                    "input": [
                        1227,
                        "UpdateCheckRunInput!"
                    ]
                }
            ],
            "updateCheckSuitePreferences": [
                1230,
                {
                    "input": [
                        1229,
                        "UpdateCheckSuitePreferencesInput!"
                    ]
                }
            ],
            "updateDiscussion": [
                1234,
                {
                    "input": [
                        1233,
                        "UpdateDiscussionInput!"
                    ]
                }
            ],
            "updateDiscussionComment": [
                1232,
                {
                    "input": [
                        1231,
                        "UpdateDiscussionCommentInput!"
                    ]
                }
            ],
            "updateEnterpriseAdministratorRole": [
                1236,
                {
                    "input": [
                        1235,
                        "UpdateEnterpriseAdministratorRoleInput!"
                    ]
                }
            ],
            "updateEnterpriseAllowPrivateRepositoryForkingSetting": [
                1238,
                {
                    "input": [
                        1237,
                        "UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseDefaultRepositoryPermissionSetting": [
                1240,
                {
                    "input": [
                        1239,
                        "UpdateEnterpriseDefaultRepositoryPermissionSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanChangeRepositoryVisibilitySetting": [
                1242,
                {
                    "input": [
                        1241,
                        "UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanCreateRepositoriesSetting": [
                1244,
                {
                    "input": [
                        1243,
                        "UpdateEnterpriseMembersCanCreateRepositoriesSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanDeleteIssuesSetting": [
                1246,
                {
                    "input": [
                        1245,
                        "UpdateEnterpriseMembersCanDeleteIssuesSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanDeleteRepositoriesSetting": [
                1248,
                {
                    "input": [
                        1247,
                        "UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanInviteCollaboratorsSetting": [
                1250,
                {
                    "input": [
                        1249,
                        "UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanMakePurchasesSetting": [
                1252,
                {
                    "input": [
                        1251,
                        "UpdateEnterpriseMembersCanMakePurchasesSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanUpdateProtectedBranchesSetting": [
                1254,
                {
                    "input": [
                        1253,
                        "UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanViewDependencyInsightsSetting": [
                1256,
                {
                    "input": [
                        1255,
                        "UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseOrganizationProjectsSetting": [
                1258,
                {
                    "input": [
                        1257,
                        "UpdateEnterpriseOrganizationProjectsSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseOwnerOrganizationRole": [
                1260,
                {
                    "input": [
                        1259,
                        "UpdateEnterpriseOwnerOrganizationRoleInput!"
                    ]
                }
            ],
            "updateEnterpriseProfile": [
                1262,
                {
                    "input": [
                        1261,
                        "UpdateEnterpriseProfileInput!"
                    ]
                }
            ],
            "updateEnterpriseRepositoryProjectsSetting": [
                1264,
                {
                    "input": [
                        1263,
                        "UpdateEnterpriseRepositoryProjectsSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseTeamDiscussionsSetting": [
                1266,
                {
                    "input": [
                        1265,
                        "UpdateEnterpriseTeamDiscussionsSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseTwoFactorAuthenticationRequiredSetting": [
                1268,
                {
                    "input": [
                        1267,
                        "UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput!"
                    ]
                }
            ],
            "updateEnvironment": [
                1270,
                {
                    "input": [
                        1269,
                        "UpdateEnvironmentInput!"
                    ]
                }
            ],
            "updateIpAllowListEnabledSetting": [
                1272,
                {
                    "input": [
                        1271,
                        "UpdateIpAllowListEnabledSettingInput!"
                    ]
                }
            ],
            "updateIpAllowListEntry": [
                1274,
                {
                    "input": [
                        1273,
                        "UpdateIpAllowListEntryInput!"
                    ]
                }
            ],
            "updateIpAllowListForInstalledAppsEnabledSetting": [
                1276,
                {
                    "input": [
                        1275,
                        "UpdateIpAllowListForInstalledAppsEnabledSettingInput!"
                    ]
                }
            ],
            "updateIssue": [
                1280,
                {
                    "input": [
                        1279,
                        "UpdateIssueInput!"
                    ]
                }
            ],
            "updateIssueComment": [
                1278,
                {
                    "input": [
                        1277,
                        "UpdateIssueCommentInput!"
                    ]
                }
            ],
            "updateNotificationRestrictionSetting": [
                1282,
                {
                    "input": [
                        1281,
                        "UpdateNotificationRestrictionSettingInput!"
                    ]
                }
            ],
            "updateOrganizationAllowPrivateRepositoryForkingSetting": [
                1284,
                {
                    "input": [
                        1283,
                        "UpdateOrganizationAllowPrivateRepositoryForkingSettingInput!"
                    ]
                }
            ],
            "updateOrganizationWebCommitSignoffSetting": [
                1286,
                {
                    "input": [
                        1285,
                        "UpdateOrganizationWebCommitSignoffSettingInput!"
                    ]
                }
            ],
            "updateProject": [
                1298,
                {
                    "input": [
                        1293,
                        "UpdateProjectInput!"
                    ]
                }
            ],
            "updateProjectCard": [
                1288,
                {
                    "input": [
                        1287,
                        "UpdateProjectCardInput!"
                    ]
                }
            ],
            "updateProjectColumn": [
                1290,
                {
                    "input": [
                        1289,
                        "UpdateProjectColumnInput!"
                    ]
                }
            ],
            "updateProjectDraftIssue": [
                1292,
                {
                    "input": [
                        1291,
                        "UpdateProjectDraftIssueInput!"
                    ]
                }
            ],
            "updateProjectNext": [
                1297,
                {
                    "input": [
                        1294,
                        "UpdateProjectNextInput!"
                    ]
                }
            ],
            "updateProjectNextItemField": [
                1296,
                {
                    "input": [
                        1295,
                        "UpdateProjectNextItemFieldInput!"
                    ]
                }
            ],
            "updateProjectV2": [
                1306,
                {
                    "input": [
                        1301,
                        "UpdateProjectV2Input!"
                    ]
                }
            ],
            "updateProjectV2DraftIssue": [
                1300,
                {
                    "input": [
                        1299,
                        "UpdateProjectV2DraftIssueInput!"
                    ]
                }
            ],
            "updateProjectV2ItemFieldValue": [
                1303,
                {
                    "input": [
                        1302,
                        "UpdateProjectV2ItemFieldValueInput!"
                    ]
                }
            ],
            "updateProjectV2ItemPosition": [
                1305,
                {
                    "input": [
                        1304,
                        "UpdateProjectV2ItemPositionInput!"
                    ]
                }
            ],
            "updatePullRequest": [
                1310,
                {
                    "input": [
                        1309,
                        "UpdatePullRequestInput!"
                    ]
                }
            ],
            "updatePullRequestBranch": [
                1308,
                {
                    "input": [
                        1307,
                        "UpdatePullRequestBranchInput!"
                    ]
                }
            ],
            "updatePullRequestReview": [
                1314,
                {
                    "input": [
                        1313,
                        "UpdatePullRequestReviewInput!"
                    ]
                }
            ],
            "updatePullRequestReviewComment": [
                1312,
                {
                    "input": [
                        1311,
                        "UpdatePullRequestReviewCommentInput!"
                    ]
                }
            ],
            "updateRef": [
                1316,
                {
                    "input": [
                        1315,
                        "UpdateRefInput!"
                    ]
                }
            ],
            "updateRepository": [
                1318,
                {
                    "input": [
                        1317,
                        "UpdateRepositoryInput!"
                    ]
                }
            ],
            "updateRepositoryWebCommitSignoffSetting": [
                1320,
                {
                    "input": [
                        1319,
                        "UpdateRepositoryWebCommitSignoffSettingInput!"
                    ]
                }
            ],
            "updateSponsorshipPreferences": [
                1322,
                {
                    "input": [
                        1321,
                        "UpdateSponsorshipPreferencesInput!"
                    ]
                }
            ],
            "updateSubscription": [
                1324,
                {
                    "input": [
                        1323,
                        "UpdateSubscriptionInput!"
                    ]
                }
            ],
            "updateTeamDiscussion": [
                1328,
                {
                    "input": [
                        1327,
                        "UpdateTeamDiscussionInput!"
                    ]
                }
            ],
            "updateTeamDiscussionComment": [
                1326,
                {
                    "input": [
                        1325,
                        "UpdateTeamDiscussionCommentInput!"
                    ]
                }
            ],
            "updateTeamsRepository": [
                1330,
                {
                    "input": [
                        1329,
                        "UpdateTeamsRepositoryInput!"
                    ]
                }
            ],
            "updateTopics": [
                1332,
                {
                    "input": [
                        1331,
                        "UpdateTopicsInput!"
                    ]
                }
            ],
            "verifyVerifiableDomain": [
                1354,
                {
                    "input": [
                        1353,
                        "VerifyVerifiableDomainInput!"
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "Node": {
            "id": [
                472
            ],
            "on_AddedToProjectEvent": [
                49
            ],
            "on_App": [
                50
            ],
            "on_AssignedEvent": [
                60
            ],
            "on_AutoMergeDisabledEvent": [
                66
            ],
            "on_AutoMergeEnabledEvent": [
                67
            ],
            "on_AutoRebaseEnabledEvent": [
                69
            ],
            "on_AutoSquashEnabledEvent": [
                70
            ],
            "on_AutomaticBaseChangeFailedEvent": [
                71
            ],
            "on_AutomaticBaseChangeSucceededEvent": [
                72
            ],
            "on_BaseRefChangedEvent": [
                74
            ],
            "on_BaseRefDeletedEvent": [
                75
            ],
            "on_BaseRefForcePushedEvent": [
                76
            ],
            "on_Blob": [
                79
            ],
            "on_Bot": [
                81
            ],
            "on_BranchProtectionRule": [
                83
            ],
            "on_BypassForcePushAllowance": [
                89
            ],
            "on_BypassPullRequestAllowance": [
                92
            ],
            "on_CWE": [
                96
            ],
            "on_CheckRun": [
                114
            ],
            "on_CheckSuite": [
                128
            ],
            "on_ClosedEvent": [
                147
            ],
            "on_CodeOfConduct": [
                149
            ],
            "on_CommentDeletedEvent": [
                154
            ],
            "on_Commit": [
                155
            ],
            "on_CommitComment": [
                157
            ],
            "on_CommitCommentThread": [
                160
            ],
            "on_Comparison": [
                169
            ],
            "on_ConnectedEvent": [
                172
            ],
            "on_ConvertToDraftEvent": [
                185
            ],
            "on_ConvertedNoteToIssueEvent": [
                186
            ],
            "on_ConvertedToDiscussionEvent": [
                187
            ],
            "on_CrossReferencedEvent": [
                250
            ],
            "on_DemilestonedEvent": [
                297
            ],
            "on_DeployKey": [
                301
            ],
            "on_DeployedEvent": [
                304
            ],
            "on_Deployment": [
                305
            ],
            "on_DeploymentEnvironmentChangedEvent": [
                308
            ],
            "on_DeploymentReview": [
                318
            ],
            "on_DeploymentStatus": [
                326
            ],
            "on_DisconnectedEvent": [
                333
            ],
            "on_Discussion": [
                334
            ],
            "on_DiscussionCategory": [
                335
            ],
            "on_DiscussionComment": [
                338
            ],
            "on_DiscussionPoll": [
                345
            ],
            "on_DiscussionPollOption": [
                346
            ],
            "on_DraftIssue": [
                356
            ],
            "on_Enterprise": [
                361
            ],
            "on_EnterpriseAdministratorInvitation": [
                364
            ],
            "on_EnterpriseIdentityProvider": [
                376
            ],
            "on_EnterpriseRepositoryInfo": [
                391
            ],
            "on_EnterpriseServerInstallation": [
                394
            ],
            "on_EnterpriseServerUserAccount": [
                399
            ],
            "on_EnterpriseServerUserAccountEmail": [
                402
            ],
            "on_EnterpriseServerUserAccountsUpload": [
                409
            ],
            "on_EnterpriseUserAccount": [
                415
            ],
            "on_Environment": [
                418
            ],
            "on_ExternalIdentity": [
                421
            ],
            "on_Gist": [
                441
            ],
            "on_GistComment": [
                442
            ],
            "on_HeadRefDeletedEvent": [
                467
            ],
            "on_HeadRefForcePushedEvent": [
                468
            ],
            "on_HeadRefRestoredEvent": [
                469
            ],
            "on_IpAllowListEntry": [
                478
            ],
            "on_Issue": [
                485
            ],
            "on_IssueComment": [
                487
            ],
            "on_Label": [
                510
            ],
            "on_LabeledEvent": [
                516
            ],
            "on_Language": [
                517
            ],
            "on_License": [
                522
            ],
            "on_LinkedBranch": [
                530
            ],
            "on_LockedEvent": [
                537
            ],
            "on_Mannequin": [
                538
            ],
            "on_MarkedAsDuplicateEvent": [
                549
            ],
            "on_MarketplaceCategory": [
                550
            ],
            "on_MarketplaceListing": [
                551
            ],
            "on_MembersCanDeleteReposClearAuditEntry": [
                555
            ],
            "on_MembersCanDeleteReposDisableAuditEntry": [
                556
            ],
            "on_MembersCanDeleteReposEnableAuditEntry": [
                557
            ],
            "on_MentionedEvent": [
                558
            ],
            "on_MergedEvent": [
                566
            ],
            "on_MigrationSource": [
                568
            ],
            "on_Milestone": [
                571
            ],
            "on_MilestonedEvent": [
                578
            ],
            "on_MovedColumnsInProjectEvent": [
                586
            ],
            "on_OIDCProvider": [
                590
            ],
            "on_OauthApplicationCreateAuditEntry": [
                593
            ],
            "on_OrgAddBillingManagerAuditEntry": [
                597
            ],
            "on_OrgAddMemberAuditEntry": [
                598
            ],
            "on_OrgBlockUserAuditEntry": [
                600
            ],
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": [
                601
            ],
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": [
                602
            ],
            "on_OrgCreateAuditEntry": [
                603
            ],
            "on_OrgDisableOauthAppRestrictionsAuditEntry": [
                605
            ],
            "on_OrgDisableSamlAuditEntry": [
                606
            ],
            "on_OrgDisableTwoFactorRequirementAuditEntry": [
                607
            ],
            "on_OrgEnableOauthAppRestrictionsAuditEntry": [
                608
            ],
            "on_OrgEnableSamlAuditEntry": [
                609
            ],
            "on_OrgEnableTwoFactorRequirementAuditEntry": [
                610
            ],
            "on_OrgInviteMemberAuditEntry": [
                613
            ],
            "on_OrgInviteToBusinessAuditEntry": [
                614
            ],
            "on_OrgOauthAppAccessApprovedAuditEntry": [
                615
            ],
            "on_OrgOauthAppAccessDeniedAuditEntry": [
                616
            ],
            "on_OrgOauthAppAccessRequestedAuditEntry": [
                617
            ],
            "on_OrgRemoveBillingManagerAuditEntry": [
                618
            ],
            "on_OrgRemoveMemberAuditEntry": [
                620
            ],
            "on_OrgRemoveOutsideCollaboratorAuditEntry": [
                623
            ],
            "on_OrgRestoreMemberAuditEntry": [
                626
            ],
            "on_OrgUnblockUserAuditEntry": [
                631
            ],
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": [
                632
            ],
            "on_OrgUpdateMemberAuditEntry": [
                634
            ],
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": [
                636
            ],
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": [
                638
            ],
            "on_Organization": [
                639
            ],
            "on_OrganizationIdentityProvider": [
                648
            ],
            "on_OrganizationInvitation": [
                649
            ],
            "on_Package": [
                663
            ],
            "on_PackageFile": [
                666
            ],
            "on_PackageTag": [
                675
            ],
            "on_PackageVersion": [
                677
            ],
            "on_PinnedDiscussion": [
                693
            ],
            "on_PinnedEvent": [
                698
            ],
            "on_PinnedIssue": [
                699
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                703
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                704
            ],
            "on_Project": [
                707
            ],
            "on_ProjectCard": [
                708
            ],
            "on_ProjectColumn": [
                714
            ],
            "on_ProjectNext": [
                721
            ],
            "on_ProjectNextField": [
                724
            ],
            "on_ProjectNextItem": [
                729
            ],
            "on_ProjectNextItemFieldValue": [
                733
            ],
            "on_ProjectV2": [
                744
            ],
            "on_ProjectV2Field": [
                747
            ],
            "on_ProjectV2Item": [
                759
            ],
            "on_ProjectV2ItemFieldDateValue": [
                763
            ],
            "on_ProjectV2ItemFieldIterationValue": [
                764
            ],
            "on_ProjectV2ItemFieldNumberValue": [
                767
            ],
            "on_ProjectV2ItemFieldSingleSelectValue": [
                771
            ],
            "on_ProjectV2ItemFieldTextValue": [
                772
            ],
            "on_ProjectV2IterationField": [
                783
            ],
            "on_ProjectV2SingleSelectField": [
                790
            ],
            "on_ProjectV2View": [
                799
            ],
            "on_ProjectView": [
                805
            ],
            "on_PublicKey": [
                809
            ],
            "on_PullRequest": [
                812
            ],
            "on_PullRequestCommit": [
                816
            ],
            "on_PullRequestCommitCommentThread": [
                817
            ],
            "on_PullRequestReview": [
                826
            ],
            "on_PullRequestReviewComment": [
                827
            ],
            "on_PullRequestReviewThread": [
                837
            ],
            "on_PullRequestThread": [
                843
            ],
            "on_Push": [
                852
            ],
            "on_PushAllowance": [
                853
            ],
            "on_Reaction": [
                862
            ],
            "on_ReadyForReviewEvent": [
                872
            ],
            "on_Ref": [
                873
            ],
            "on_ReferencedEvent": [
                879
            ],
            "on_Release": [
                887
            ],
            "on_ReleaseAsset": [
                888
            ],
            "on_RemovedFromProjectEvent": [
                915
            ],
            "on_RenamedTitleEvent": [
                916
            ],
            "on_ReopenedEvent": [
                922
            ],
            "on_RepoAccessAuditEntry": [
                923
            ],
            "on_RepoAddMemberAuditEntry": [
                925
            ],
            "on_RepoAddTopicAuditEntry": [
                927
            ],
            "on_RepoArchivedAuditEntry": [
                928
            ],
            "on_RepoChangeMergeSettingAuditEntry": [
                930
            ],
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": [
                932
            ],
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": [
                933
            ],
            "on_RepoConfigDisableContributorsOnlyAuditEntry": [
                934
            ],
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": [
                935
            ],
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": [
                936
            ],
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": [
                937
            ],
            "on_RepoConfigEnableContributorsOnlyAuditEntry": [
                938
            ],
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": [
                939
            ],
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": [
                940
            ],
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": [
                941
            ],
            "on_RepoCreateAuditEntry": [
                942
            ],
            "on_RepoDestroyAuditEntry": [
                944
            ],
            "on_RepoRemoveMemberAuditEntry": [
                946
            ],
            "on_RepoRemoveTopicAuditEntry": [
                948
            ],
            "on_Repository": [
                950
            ],
            "on_RepositoryInvitation": [
                968
            ],
            "on_RepositoryMigration": [
                974
            ],
            "on_RepositoryTopic": [
                986
            ],
            "on_RepositoryVisibilityChangeDisableAuditEntry": [
                990
            ],
            "on_RepositoryVisibilityChangeEnableAuditEntry": [
                991
            ],
            "on_RepositoryVulnerabilityAlert": [
                992
            ],
            "on_ReviewDismissalAllowance": [
                1011
            ],
            "on_ReviewDismissedEvent": [
                1015
            ],
            "on_ReviewRequest": [
                1016
            ],
            "on_ReviewRequestRemovedEvent": [
                1019
            ],
            "on_ReviewRequestedEvent": [
                1020
            ],
            "on_SavedReply": [
                1029
            ],
            "on_SecurityAdvisory": [
                1038
            ],
            "on_SponsorsActivity": [
                1078
            ],
            "on_SponsorsListing": [
                1088
            ],
            "on_SponsorsListingFeaturedItem": [
                1090
            ],
            "on_SponsorsTier": [
                1092
            ],
            "on_Sponsorship": [
                1098
            ],
            "on_SponsorshipNewsletter": [
                1101
            ],
            "on_Status": [
                1121
            ],
            "on_StatusCheckRollup": [
                1122
            ],
            "on_StatusContext": [
                1126
            ],
            "on_SubscribedEvent": [
                1136
            ],
            "on_Tag": [
                1139
            ],
            "on_Team": [
                1140
            ],
            "on_TeamAddMemberAuditEntry": [
                1141
            ],
            "on_TeamAddRepositoryAuditEntry": [
                1142
            ],
            "on_TeamChangeParentTeamAuditEntry": [
                1144
            ],
            "on_TeamDiscussion": [
                1146
            ],
            "on_TeamDiscussionComment": [
                1147
            ],
            "on_TeamRemoveMemberAuditEntry": [
                1166
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                1167
            ],
            "on_Topic": [
                1175
            ],
            "on_TransferredEvent": [
                1183
            ],
            "on_Tree": [
                1184
            ],
            "on_UnassignedEvent": [
                1191
            ],
            "on_UnlabeledEvent": [
                1198
            ],
            "on_UnlockedEvent": [
                1207
            ],
            "on_UnmarkedAsDuplicateEvent": [
                1214
            ],
            "on_UnpinnedEvent": [
                1219
            ],
            "on_UnsubscribedEvent": [
                1222
            ],
            "on_User": [
                1333
            ],
            "on_UserBlockedEvent": [
                1335
            ],
            "on_UserContentEdit": [
                1337
            ],
            "on_UserStatus": [
                1342
            ],
            "on_VerifiableDomain": [
                1347
            ],
            "on_Workflow": [
                1357
            ],
            "on_WorkflowRun": [
                1358
            ],
            "__typename": [
                1129
            ]
        },
        "NotificationRestrictionSettingValue": {},
        "OIDCProvider": {
            "enterprise": [
                361
            ],
            "externalIdentities": [
                423,
                {
                    "membersOnly": [
                        80
                    ],
                    "login": [
                        1129
                    ],
                    "userName": [
                        1129
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "id": [
                472
            ],
            "providerType": [
                591
            ],
            "tenantId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "OIDCProviderType": {},
        "OauthApplicationAuditEntryData": {
            "oauthApplicationName": [
                1129
            ],
            "oauthApplicationResourcePath": [
                1186
            ],
            "oauthApplicationUrl": [
                1186
            ],
            "on_OauthApplicationCreateAuditEntry": [
                593
            ],
            "on_OrgOauthAppAccessApprovedAuditEntry": [
                615
            ],
            "on_OrgOauthAppAccessDeniedAuditEntry": [
                616
            ],
            "on_OrgOauthAppAccessRequestedAuditEntry": [
                617
            ],
            "__typename": [
                1129
            ]
        },
        "OauthApplicationCreateAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "applicationUrl": [
                1186
            ],
            "callbackUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "oauthApplicationName": [
                1129
            ],
            "oauthApplicationResourcePath": [
                1186
            ],
            "oauthApplicationUrl": [
                1186
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "rateLimit": [
                474
            ],
            "state": [
                594
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OauthApplicationCreateAuditEntryState": {},
        "OperationType": {},
        "OrderDirection": {},
        "OrgAddBillingManagerAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "invitationEmail": [
                1129
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgAddMemberAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "permission": [
                599
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgAddMemberAuditEntryPermission": {},
        "OrgBlockUserAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "blockedUser": [
                1333
            ],
            "blockedUserName": [
                1129
            ],
            "blockedUserResourcePath": [
                1186
            ],
            "blockedUserUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgConfigDisableCollaboratorsOnlyAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgConfigEnableCollaboratorsOnlyAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgCreateAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "billingPlan": [
                604
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgCreateAuditEntryBillingPlan": {},
        "OrgDisableOauthAppRestrictionsAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgDisableSamlAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "digestMethodUrl": [
                1186
            ],
            "id": [
                472
            ],
            "issuerUrl": [
                1186
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "signatureMethodUrl": [
                1186
            ],
            "singleSignOnUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgDisableTwoFactorRequirementAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgEnableOauthAppRestrictionsAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgEnableSamlAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "digestMethodUrl": [
                1186
            ],
            "id": [
                472
            ],
            "issuerUrl": [
                1186
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "signatureMethodUrl": [
                1186
            ],
            "singleSignOnUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgEnableTwoFactorRequirementAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgEnterpriseOwnerOrder": {
            "field": [
                612
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "OrgEnterpriseOwnerOrderField": {},
        "OrgInviteMemberAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "email": [
                1129
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationInvitation": [
                649
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgInviteToBusinessAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "enterpriseResourcePath": [
                1186
            ],
            "enterpriseSlug": [
                1129
            ],
            "enterpriseUrl": [
                1186
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgOauthAppAccessApprovedAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "oauthApplicationName": [
                1129
            ],
            "oauthApplicationResourcePath": [
                1186
            ],
            "oauthApplicationUrl": [
                1186
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgOauthAppAccessDeniedAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "oauthApplicationName": [
                1129
            ],
            "oauthApplicationResourcePath": [
                1186
            ],
            "oauthApplicationUrl": [
                1186
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgOauthAppAccessRequestedAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "oauthApplicationName": [
                1129
            ],
            "oauthApplicationResourcePath": [
                1186
            ],
            "oauthApplicationUrl": [
                1186
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgRemoveBillingManagerAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "reason": [
                619
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgRemoveBillingManagerAuditEntryReason": {},
        "OrgRemoveMemberAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "membershipTypes": [
                621
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "reason": [
                622
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgRemoveMemberAuditEntryMembershipType": {},
        "OrgRemoveMemberAuditEntryReason": {},
        "OrgRemoveOutsideCollaboratorAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "membershipTypes": [
                624
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "reason": [
                625
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgRemoveOutsideCollaboratorAuditEntryMembershipType": {},
        "OrgRemoveOutsideCollaboratorAuditEntryReason": {},
        "OrgRestoreMemberAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "restoredCustomEmailRoutingsCount": [
                474
            ],
            "restoredIssueAssignmentsCount": [
                474
            ],
            "restoredMemberships": [
                627
            ],
            "restoredMembershipsCount": [
                474
            ],
            "restoredRepositoriesCount": [
                474
            ],
            "restoredRepositoryStarsCount": [
                474
            ],
            "restoredRepositoryWatchesCount": [
                474
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgRestoreMemberAuditEntryMembership": {
            "on_OrgRestoreMemberMembershipOrganizationAuditEntryData": [
                628
            ],
            "on_OrgRestoreMemberMembershipRepositoryAuditEntryData": [
                629
            ],
            "on_OrgRestoreMemberMembershipTeamAuditEntryData": [
                630
            ],
            "on_OrganizationAuditEntryData": [
                642
            ],
            "on_RepositoryAuditEntryData": [
                952
            ],
            "on_TeamAuditEntryData": [
                1143
            ],
            "__typename": [
                1129
            ]
        },
        "OrgRestoreMemberMembershipOrganizationAuditEntryData": {
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgRestoreMemberMembershipRepositoryAuditEntryData": {
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgRestoreMemberMembershipTeamAuditEntryData": {
            "team": [
                1140
            ],
            "teamName": [
                1129
            ],
            "teamResourcePath": [
                1186
            ],
            "teamUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgUnblockUserAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "blockedUser": [
                1333
            ],
            "blockedUserName": [
                1129
            ],
            "blockedUserResourcePath": [
                1186
            ],
            "blockedUserUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgUpdateDefaultRepositoryPermissionAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "permission": [
                633
            ],
            "permissionWas": [
                633
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgUpdateDefaultRepositoryPermissionAuditEntryPermission": {},
        "OrgUpdateMemberAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "permission": [
                635
            ],
            "permissionWas": [
                635
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrgUpdateMemberAuditEntryPermission": {},
        "OrgUpdateMemberRepositoryCreationPermissionAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "canCreateRepositories": [
                80
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "visibility": [
                637
            ],
            "__typename": [
                1129
            ]
        },
        "OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility": {},
        "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "canInviteOutsideCollaboratorsToRepositories": [
                80
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "Organization": {
            "anyPinnableItems": [
                80,
                {
                    "type": [
                        692
                    ]
                }
            ],
            "auditLog": [
                641,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "query": [
                        1129
                    ],
                    "orderBy": [
                        64
                    ]
                }
            ],
            "avatarUrl": [
                1186,
                {
                    "size": [
                        474
                    ]
                }
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "description": [
                1129
            ],
            "descriptionHTML": [
                1129
            ],
            "domains": [
                1348,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "isVerified": [
                        80
                    ],
                    "isApproved": [
                        80
                    ],
                    "orderBy": [
                        1350
                    ]
                }
            ],
            "email": [
                1129
            ],
            "enterpriseOwners": [
                646,
                {
                    "query": [
                        1129
                    ],
                    "organizationRole": [
                        1026
                    ],
                    "orderBy": [
                        611
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "estimatedNextSponsorsPayoutInCents": [
                474
            ],
            "hasSponsorsListing": [
                80
            ],
            "id": [
                472
            ],
            "interactionAbility": [
                964
            ],
            "ipAllowListEnabledSetting": [
                477
            ],
            "ipAllowListEntries": [
                479,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        481
                    ]
                }
            ],
            "ipAllowListForInstalledAppsEnabledSetting": [
                483
            ],
            "isSponsoredBy": [
                80,
                {
                    "accountLogin": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "isSponsoringViewer": [
                80
            ],
            "isVerified": [
                80
            ],
            "itemShowcase": [
                705
            ],
            "location": [
                1129
            ],
            "login": [
                1129
            ],
            "mannequins": [
                539,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        541
                    ]
                }
            ],
            "memberStatuses": [
                1343,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1345
                    ]
                }
            ],
            "membersCanForkPrivateRepositories": [
                80
            ],
            "membersWithRole": [
                654,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "monthlyEstimatedSponsorsIncomeInCents": [
                474
            ],
            "name": [
                1129
            ],
            "newTeamResourcePath": [
                1186
            ],
            "newTeamUrl": [
                1186
            ],
            "notificationDeliveryRestrictionEnabledSetting": [
                589
            ],
            "organizationBillingEmail": [
                1129
            ],
            "packages": [
                664,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "names": [
                        1129,
                        "[String]"
                    ],
                    "repositoryId": [
                        472
                    ],
                    "packageType": [
                        676
                    ],
                    "orderBy": [
                        671
                    ]
                }
            ],
            "pendingMembers": [
                1336,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "pinnableItems": [
                690,
                {
                    "types": [
                        692,
                        "[PinnableItemType!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "pinnedItems": [
                690,
                {
                    "types": [
                        692,
                        "[PinnableItemType!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "pinnedItemsRemaining": [
                474
            ],
            "project": [
                707,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projectNext": [
                721,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projectV2": [
                744,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projects": [
                718,
                {
                    "orderBy": [
                        738
                    ],
                    "search": [
                        1129
                    ],
                    "states": [
                        742,
                        "[ProjectState!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "projectsNext": [
                722,
                {
                    "query": [
                        1129
                    ],
                    "sortBy": [
                        736
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "projectsResourcePath": [
                1186
            ],
            "projectsUrl": [
                1186
            ],
            "projectsV2": [
                745,
                {
                    "query": [
                        1129
                    ],
                    "orderBy": [
                        786
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "recentProjects": [
                745,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "repositories": [
                957,
                {
                    "privacy": [
                        985
                    ],
                    "orderBy": [
                        981
                    ],
                    "affiliations": [
                        951,
                        "[RepositoryAffiliation]"
                    ],
                    "ownerAffiliations": [
                        951,
                        "[RepositoryAffiliation]"
                    ],
                    "isLocked": [
                        80
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "isFork": [
                        80
                    ]
                }
            ],
            "repository": [
                950,
                {
                    "name": [
                        1129,
                        "String!"
                    ],
                    "followRenames": [
                        80
                    ]
                }
            ],
            "repositoryDiscussionComments": [
                339,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "repositoryId": [
                        472
                    ],
                    "onlyAnswers": [
                        80
                    ]
                }
            ],
            "repositoryDiscussions": [
                341,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        343
                    ],
                    "repositoryId": [
                        472
                    ],
                    "answered": [
                        80
                    ]
                }
            ],
            "repositoryMigrations": [
                975,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "state": [
                        570
                    ],
                    "repositoryName": [
                        1129
                    ],
                    "orderBy": [
                        977
                    ]
                }
            ],
            "requiresTwoFactorAuthentication": [
                80
            ],
            "resourcePath": [
                1186
            ],
            "samlIdentityProvider": [
                648
            ],
            "sponsoring": [
                1068,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1070
                    ]
                }
            ],
            "sponsors": [
                1068,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "tierId": [
                        472
                    ],
                    "orderBy": [
                        1070
                    ]
                }
            ],
            "sponsorsActivities": [
                1080,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "period": [
                        1084
                    ],
                    "since": [
                        252
                    ],
                    "until": [
                        252
                    ],
                    "orderBy": [
                        1082
                    ],
                    "actions": [
                        1079,
                        "[SponsorsActivityAction!]"
                    ],
                    "includeAsSponsor": [
                        80
                    ]
                }
            ],
            "sponsorsListing": [
                1088
            ],
            "sponsorshipForViewerAsSponsor": [
                1098
            ],
            "sponsorshipForViewerAsSponsorable": [
                1098
            ],
            "sponsorshipNewsletters": [
                1102,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1104
                    ]
                }
            ],
            "sponsorshipsAsMaintainer": [
                1099,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "includePrivate": [
                        80
                    ],
                    "orderBy": [
                        1106
                    ]
                }
            ],
            "sponsorshipsAsSponsor": [
                1099,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1106
                    ],
                    "maintainerLogins": [
                        1129,
                        "[String!]"
                    ]
                }
            ],
            "team": [
                1140,
                {
                    "slug": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "teams": [
                1145,
                {
                    "privacy": [
                        1165
                    ],
                    "role": [
                        1172
                    ],
                    "query": [
                        1129
                    ],
                    "userLogins": [
                        1129,
                        "[String!]"
                    ],
                    "orderBy": [
                        1163
                    ],
                    "ldapMapped": [
                        80
                    ],
                    "rootTeamsOnly": [
                        80
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "teamsResourcePath": [
                1186
            ],
            "teamsUrl": [
                1186
            ],
            "twitterUsername": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "viewerCanAdminister": [
                80
            ],
            "viewerCanChangePinnedItems": [
                80
            ],
            "viewerCanCreateProjects": [
                80
            ],
            "viewerCanCreateRepositories": [
                80
            ],
            "viewerCanCreateTeams": [
                80
            ],
            "viewerCanSponsor": [
                80
            ],
            "viewerIsAMember": [
                80
            ],
            "viewerIsFollowing": [
                80
            ],
            "viewerIsSponsoring": [
                80
            ],
            "webCommitSignoffRequired": [
                80
            ],
            "websiteUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationAuditEntry": {
            "on_MembersCanDeleteReposClearAuditEntry": [
                555
            ],
            "on_MembersCanDeleteReposDisableAuditEntry": [
                556
            ],
            "on_MembersCanDeleteReposEnableAuditEntry": [
                557
            ],
            "on_OauthApplicationCreateAuditEntry": [
                593
            ],
            "on_OrgAddBillingManagerAuditEntry": [
                597
            ],
            "on_OrgAddMemberAuditEntry": [
                598
            ],
            "on_OrgBlockUserAuditEntry": [
                600
            ],
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": [
                601
            ],
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": [
                602
            ],
            "on_OrgCreateAuditEntry": [
                603
            ],
            "on_OrgDisableOauthAppRestrictionsAuditEntry": [
                605
            ],
            "on_OrgDisableSamlAuditEntry": [
                606
            ],
            "on_OrgDisableTwoFactorRequirementAuditEntry": [
                607
            ],
            "on_OrgEnableOauthAppRestrictionsAuditEntry": [
                608
            ],
            "on_OrgEnableSamlAuditEntry": [
                609
            ],
            "on_OrgEnableTwoFactorRequirementAuditEntry": [
                610
            ],
            "on_OrgInviteMemberAuditEntry": [
                613
            ],
            "on_OrgInviteToBusinessAuditEntry": [
                614
            ],
            "on_OrgOauthAppAccessApprovedAuditEntry": [
                615
            ],
            "on_OrgOauthAppAccessDeniedAuditEntry": [
                616
            ],
            "on_OrgOauthAppAccessRequestedAuditEntry": [
                617
            ],
            "on_OrgRemoveBillingManagerAuditEntry": [
                618
            ],
            "on_OrgRemoveMemberAuditEntry": [
                620
            ],
            "on_OrgRemoveOutsideCollaboratorAuditEntry": [
                623
            ],
            "on_OrgRestoreMemberAuditEntry": [
                626
            ],
            "on_OrgUnblockUserAuditEntry": [
                631
            ],
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": [
                632
            ],
            "on_OrgUpdateMemberAuditEntry": [
                634
            ],
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": [
                636
            ],
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": [
                638
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                703
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                704
            ],
            "on_RepoAccessAuditEntry": [
                923
            ],
            "on_RepoAddMemberAuditEntry": [
                925
            ],
            "on_RepoAddTopicAuditEntry": [
                927
            ],
            "on_RepoArchivedAuditEntry": [
                928
            ],
            "on_RepoChangeMergeSettingAuditEntry": [
                930
            ],
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": [
                932
            ],
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": [
                933
            ],
            "on_RepoConfigDisableContributorsOnlyAuditEntry": [
                934
            ],
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": [
                935
            ],
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": [
                936
            ],
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": [
                937
            ],
            "on_RepoConfigEnableContributorsOnlyAuditEntry": [
                938
            ],
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": [
                939
            ],
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": [
                940
            ],
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": [
                941
            ],
            "on_RepoCreateAuditEntry": [
                942
            ],
            "on_RepoDestroyAuditEntry": [
                944
            ],
            "on_RepoRemoveMemberAuditEntry": [
                946
            ],
            "on_RepoRemoveTopicAuditEntry": [
                948
            ],
            "on_RepositoryVisibilityChangeDisableAuditEntry": [
                990
            ],
            "on_RepositoryVisibilityChangeEnableAuditEntry": [
                991
            ],
            "on_TeamAddMemberAuditEntry": [
                1141
            ],
            "on_TeamAddRepositoryAuditEntry": [
                1142
            ],
            "on_TeamChangeParentTeamAuditEntry": [
                1144
            ],
            "on_TeamRemoveMemberAuditEntry": [
                1166
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                1167
            ],
            "on_Node": [
                588
            ],
            "on_AuditEntry": [
                62
            ],
            "on_EnterpriseAuditEntryData": [
                371
            ],
            "on_OrganizationAuditEntryData": [
                642
            ],
            "on_OauthApplicationAuditEntryData": [
                592
            ],
            "on_RepositoryAuditEntryData": [
                952
            ],
            "on_TopicAuditEntryData": [
                1176
            ],
            "on_TeamAuditEntryData": [
                1143
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationAuditEntryConnection": {
            "edges": [
                643
            ],
            "nodes": [
                640
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationAuditEntryData": {
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "on_MembersCanDeleteReposClearAuditEntry": [
                555
            ],
            "on_MembersCanDeleteReposDisableAuditEntry": [
                556
            ],
            "on_MembersCanDeleteReposEnableAuditEntry": [
                557
            ],
            "on_OauthApplicationCreateAuditEntry": [
                593
            ],
            "on_OrgAddBillingManagerAuditEntry": [
                597
            ],
            "on_OrgAddMemberAuditEntry": [
                598
            ],
            "on_OrgBlockUserAuditEntry": [
                600
            ],
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": [
                601
            ],
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": [
                602
            ],
            "on_OrgCreateAuditEntry": [
                603
            ],
            "on_OrgDisableOauthAppRestrictionsAuditEntry": [
                605
            ],
            "on_OrgDisableSamlAuditEntry": [
                606
            ],
            "on_OrgDisableTwoFactorRequirementAuditEntry": [
                607
            ],
            "on_OrgEnableOauthAppRestrictionsAuditEntry": [
                608
            ],
            "on_OrgEnableSamlAuditEntry": [
                609
            ],
            "on_OrgEnableTwoFactorRequirementAuditEntry": [
                610
            ],
            "on_OrgInviteMemberAuditEntry": [
                613
            ],
            "on_OrgInviteToBusinessAuditEntry": [
                614
            ],
            "on_OrgOauthAppAccessApprovedAuditEntry": [
                615
            ],
            "on_OrgOauthAppAccessDeniedAuditEntry": [
                616
            ],
            "on_OrgOauthAppAccessRequestedAuditEntry": [
                617
            ],
            "on_OrgRemoveBillingManagerAuditEntry": [
                618
            ],
            "on_OrgRemoveMemberAuditEntry": [
                620
            ],
            "on_OrgRemoveOutsideCollaboratorAuditEntry": [
                623
            ],
            "on_OrgRestoreMemberAuditEntry": [
                626
            ],
            "on_OrgRestoreMemberMembershipOrganizationAuditEntryData": [
                628
            ],
            "on_OrgUnblockUserAuditEntry": [
                631
            ],
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": [
                632
            ],
            "on_OrgUpdateMemberAuditEntry": [
                634
            ],
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": [
                636
            ],
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": [
                638
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                703
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                704
            ],
            "on_RepoAccessAuditEntry": [
                923
            ],
            "on_RepoAddMemberAuditEntry": [
                925
            ],
            "on_RepoAddTopicAuditEntry": [
                927
            ],
            "on_RepoArchivedAuditEntry": [
                928
            ],
            "on_RepoChangeMergeSettingAuditEntry": [
                930
            ],
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": [
                932
            ],
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": [
                933
            ],
            "on_RepoConfigDisableContributorsOnlyAuditEntry": [
                934
            ],
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": [
                935
            ],
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": [
                936
            ],
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": [
                937
            ],
            "on_RepoConfigEnableContributorsOnlyAuditEntry": [
                938
            ],
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": [
                939
            ],
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": [
                940
            ],
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": [
                941
            ],
            "on_RepoCreateAuditEntry": [
                942
            ],
            "on_RepoDestroyAuditEntry": [
                944
            ],
            "on_RepoRemoveMemberAuditEntry": [
                946
            ],
            "on_RepoRemoveTopicAuditEntry": [
                948
            ],
            "on_RepositoryVisibilityChangeDisableAuditEntry": [
                990
            ],
            "on_RepositoryVisibilityChangeEnableAuditEntry": [
                991
            ],
            "on_TeamAddMemberAuditEntry": [
                1141
            ],
            "on_TeamAddRepositoryAuditEntry": [
                1142
            ],
            "on_TeamChangeParentTeamAuditEntry": [
                1144
            ],
            "on_TeamRemoveMemberAuditEntry": [
                1166
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                1167
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationAuditEntryEdge": {
            "cursor": [
                1129
            ],
            "node": [
                640
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationConnection": {
            "edges": [
                645
            ],
            "nodes": [
                639
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationEdge": {
            "cursor": [
                1129
            ],
            "node": [
                639
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationEnterpriseOwnerConnection": {
            "edges": [
                647
            ],
            "nodes": [
                1333
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationEnterpriseOwnerEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1333
            ],
            "organizationRole": [
                1026
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationIdentityProvider": {
            "digestMethod": [
                1186
            ],
            "externalIdentities": [
                423,
                {
                    "membersOnly": [
                        80
                    ],
                    "login": [
                        1129
                    ],
                    "userName": [
                        1129
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "id": [
                472
            ],
            "idpCertificate": [
                1363
            ],
            "issuer": [
                1129
            ],
            "organization": [
                639
            ],
            "signatureMethod": [
                1186
            ],
            "ssoUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationInvitation": {
            "createdAt": [
                252
            ],
            "email": [
                1129
            ],
            "id": [
                472
            ],
            "invitationType": [
                653
            ],
            "invitee": [
                1333
            ],
            "inviter": [
                1333
            ],
            "organization": [
                639
            ],
            "role": [
                652
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationInvitationConnection": {
            "edges": [
                651
            ],
            "nodes": [
                649
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationInvitationEdge": {
            "cursor": [
                1129
            ],
            "node": [
                649
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationInvitationRole": {},
        "OrganizationInvitationType": {},
        "OrganizationMemberConnection": {
            "edges": [
                655
            ],
            "nodes": [
                1333
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationMemberEdge": {
            "cursor": [
                1129
            ],
            "hasTwoFactorEnabled": [
                80
            ],
            "node": [
                1333
            ],
            "role": [
                656
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationMemberRole": {},
        "OrganizationMembersCanCreateRepositoriesSettingValue": {},
        "OrganizationOrUser": {
            "on_Organization": [
                639
            ],
            "on_User": [
                1333
            ],
            "on_Node": [
                588
            ],
            "on_Actor": [
                6
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_MemberStatusable": [
                554
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationOrder": {
            "field": [
                660
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationOrderField": {},
        "OrganizationTeamsHovercardContext": {
            "message": [
                1129
            ],
            "octicon": [
                1129
            ],
            "relevantTeams": [
                1145,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "teamsResourcePath": [
                1186
            ],
            "teamsUrl": [
                1186
            ],
            "totalTeamCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "OrganizationsHovercardContext": {
            "message": [
                1129
            ],
            "octicon": [
                1129
            ],
            "relevantOrganizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "totalOrganizationCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "Package": {
            "id": [
                472
            ],
            "latestVersion": [
                677
            ],
            "name": [
                1129
            ],
            "packageType": [
                676
            ],
            "repository": [
                950
            ],
            "statistics": [
                674
            ],
            "version": [
                677,
                {
                    "version": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "versions": [
                678,
                {
                    "orderBy": [
                        680
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "PackageConnection": {
            "edges": [
                665
            ],
            "nodes": [
                663
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PackageEdge": {
            "cursor": [
                1129
            ],
            "node": [
                663
            ],
            "__typename": [
                1129
            ]
        },
        "PackageFile": {
            "id": [
                472
            ],
            "md5": [
                1129
            ],
            "name": [
                1129
            ],
            "packageVersion": [
                677
            ],
            "sha1": [
                1129
            ],
            "sha256": [
                1129
            ],
            "size": [
                474
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "PackageFileConnection": {
            "edges": [
                668
            ],
            "nodes": [
                666
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PackageFileEdge": {
            "cursor": [
                1129
            ],
            "node": [
                666
            ],
            "__typename": [
                1129
            ]
        },
        "PackageFileOrder": {
            "field": [
                670
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "PackageFileOrderField": {},
        "PackageOrder": {
            "field": [
                672
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "PackageOrderField": {},
        "PackageOwner": {
            "id": [
                472
            ],
            "packages": [
                664,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "names": [
                        1129,
                        "[String]"
                    ],
                    "repositoryId": [
                        472
                    ],
                    "packageType": [
                        676
                    ],
                    "orderBy": [
                        671
                    ]
                }
            ],
            "on_Organization": [
                639
            ],
            "on_Repository": [
                950
            ],
            "on_User": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "PackageStatistics": {
            "downloadsTotalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PackageTag": {
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "version": [
                677
            ],
            "__typename": [
                1129
            ]
        },
        "PackageType": {},
        "PackageVersion": {
            "files": [
                667,
                {
                    "orderBy": [
                        669
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "id": [
                472
            ],
            "package": [
                663
            ],
            "platform": [
                1129
            ],
            "preRelease": [
                80
            ],
            "readme": [
                1129
            ],
            "release": [
                887
            ],
            "statistics": [
                682
            ],
            "summary": [
                1129
            ],
            "version": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "PackageVersionConnection": {
            "edges": [
                679
            ],
            "nodes": [
                677
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PackageVersionEdge": {
            "cursor": [
                1129
            ],
            "node": [
                677
            ],
            "__typename": [
                1129
            ]
        },
        "PackageVersionOrder": {
            "field": [
                681
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "PackageVersionOrderField": {},
        "PackageVersionStatistics": {
            "downloadsTotalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PageInfo": {
            "endCursor": [
                1129
            ],
            "hasNextPage": [
                80
            ],
            "hasPreviousPage": [
                80
            ],
            "startCursor": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "PatchStatus": {},
        "PermissionGranter": {
            "on_Organization": [
                639
            ],
            "on_Repository": [
                950
            ],
            "on_Team": [
                1140
            ],
            "on_Node": [
                588
            ],
            "on_Actor": [
                6
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_MemberStatusable": [
                554
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "on_Subscribable": [
                1135
            ],
            "on_Starrable": [
                1116
            ],
            "on_RepositoryInfo": [
                963
            ],
            "__typename": [
                1129
            ]
        },
        "PermissionSource": {
            "organization": [
                639
            ],
            "permission": [
                255
            ],
            "source": [
                685
            ],
            "__typename": [
                1129
            ]
        },
        "PinIssueInput": {
            "issueId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "PinIssuePayload": {
            "clientMutationId": [
                1129
            ],
            "issue": [
                485
            ],
            "__typename": [
                1129
            ]
        },
        "PinnableItem": {
            "on_Gist": [
                441
            ],
            "on_Repository": [
                950
            ],
            "on_Node": [
                588
            ],
            "on_Starrable": [
                1116
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_PackageOwner": [
                673
            ],
            "on_Subscribable": [
                1135
            ],
            "on_RepositoryInfo": [
                963
            ],
            "__typename": [
                1129
            ]
        },
        "PinnableItemConnection": {
            "edges": [
                691
            ],
            "nodes": [
                689
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PinnableItemEdge": {
            "cursor": [
                1129
            ],
            "node": [
                689
            ],
            "__typename": [
                1129
            ]
        },
        "PinnableItemType": {},
        "PinnedDiscussion": {
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "discussion": [
                334
            ],
            "gradientStopColors": [
                1129
            ],
            "id": [
                472
            ],
            "pattern": [
                697
            ],
            "pinnedBy": [
                6
            ],
            "preconfiguredGradient": [
                696
            ],
            "repository": [
                950
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "PinnedDiscussionConnection": {
            "edges": [
                695
            ],
            "nodes": [
                693
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PinnedDiscussionEdge": {
            "cursor": [
                1129
            ],
            "node": [
                693
            ],
            "__typename": [
                1129
            ]
        },
        "PinnedDiscussionGradient": {},
        "PinnedDiscussionPattern": {},
        "PinnedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "issue": [
                485
            ],
            "__typename": [
                1129
            ]
        },
        "PinnedIssue": {
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "issue": [
                485
            ],
            "pinnedBy": [
                6
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "PinnedIssueConnection": {
            "edges": [
                701
            ],
            "nodes": [
                699
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PinnedIssueEdge": {
            "cursor": [
                1129
            ],
            "node": [
                699
            ],
            "__typename": [
                1129
            ]
        },
        "PreciseDateTime": {},
        "PrivateRepositoryForkingDisableAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "enterpriseResourcePath": [
                1186
            ],
            "enterpriseSlug": [
                1129
            ],
            "enterpriseUrl": [
                1186
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "PrivateRepositoryForkingEnableAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "enterpriseResourcePath": [
                1186
            ],
            "enterpriseSlug": [
                1129
            ],
            "enterpriseUrl": [
                1186
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "ProfileItemShowcase": {
            "hasPinnedItems": [
                80
            ],
            "items": [
                690,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "ProfileOwner": {
            "anyPinnableItems": [
                80,
                {
                    "type": [
                        692
                    ]
                }
            ],
            "email": [
                1129
            ],
            "id": [
                472
            ],
            "itemShowcase": [
                705
            ],
            "location": [
                1129
            ],
            "login": [
                1129
            ],
            "name": [
                1129
            ],
            "pinnableItems": [
                690,
                {
                    "types": [
                        692,
                        "[PinnableItemType!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "pinnedItems": [
                690,
                {
                    "types": [
                        692,
                        "[PinnableItemType!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "pinnedItemsRemaining": [
                474
            ],
            "viewerCanChangePinnedItems": [
                80
            ],
            "websiteUrl": [
                1186
            ],
            "on_Organization": [
                639
            ],
            "on_User": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "Project": {
            "body": [
                1129
            ],
            "bodyHTML": [
                466
            ],
            "closed": [
                80
            ],
            "closedAt": [
                252
            ],
            "columns": [
                715,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "number": [
                474
            ],
            "owner": [
                740
            ],
            "pendingCards": [
                710,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "archivedStates": [
                        709,
                        "[ProjectCardArchivedState]"
                    ]
                }
            ],
            "progress": [
                741
            ],
            "resourcePath": [
                1186
            ],
            "state": [
                742
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "viewerCanUpdate": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectCard": {
            "column": [
                714
            ],
            "content": [
                712
            ],
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "isArchived": [
                80
            ],
            "note": [
                1129
            ],
            "project": [
                707
            ],
            "resourcePath": [
                1186
            ],
            "state": [
                713
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectCardArchivedState": {},
        "ProjectCardConnection": {
            "edges": [
                711
            ],
            "nodes": [
                708
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectCardEdge": {
            "cursor": [
                1129
            ],
            "node": [
                708
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectCardItem": {
            "on_Issue": [
                485
            ],
            "on_PullRequest": [
                812
            ],
            "on_Node": [
                588
            ],
            "on_Assignable": [
                59
            ],
            "on_Closable": [
                142
            ],
            "on_Comment": [
                151
            ],
            "on_Updatable": [
                1223
            ],
            "on_UpdatableComment": [
                1224
            ],
            "on_Labelable": [
                515
            ],
            "on_Lockable": [
                536
            ],
            "on_Reactable": [
                859
            ],
            "on_RepositoryNode": [
                980
            ],
            "on_Subscribable": [
                1135
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectCardState": {},
        "ProjectColumn": {
            "cards": [
                710,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "archivedStates": [
                        709,
                        "[ProjectCardArchivedState]"
                    ]
                }
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "project": [
                707
            ],
            "purpose": [
                717
            ],
            "resourcePath": [
                1186
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectColumnConnection": {
            "edges": [
                716
            ],
            "nodes": [
                714
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectColumnEdge": {
            "cursor": [
                1129
            ],
            "node": [
                714
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectColumnPurpose": {},
        "ProjectConnection": {
            "edges": [
                719
            ],
            "nodes": [
                707
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectEdge": {
            "cursor": [
                1129
            ],
            "node": [
                707
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectItemType": {},
        "ProjectNext": {
            "closed": [
                80
            ],
            "closedAt": [
                252
            ],
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "databaseId": [
                474
            ],
            "description": [
                1129
            ],
            "fields": [
                726,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "id": [
                472
            ],
            "items": [
                730,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "number": [
                474
            ],
            "owner": [
                737
            ],
            "public": [
                80
            ],
            "repositories": [
                957,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "resourcePath": [
                1186
            ],
            "shortDescription": [
                1129
            ],
            "title": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "viewerCanUpdate": [
                80
            ],
            "views": [
                806,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectNextConnection": {
            "edges": [
                723
            ],
            "nodes": [
                721
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectNextEdge": {
            "cursor": [
                1129
            ],
            "node": [
                721
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectNextField": {
            "createdAt": [
                252
            ],
            "dataType": [
                728
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "project": [
                721
            ],
            "settings": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectNextFieldCommon": {
            "createdAt": [
                252
            ],
            "dataType": [
                728
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "project": [
                721
            ],
            "settings": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "on_ProjectNextField": [
                724
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectNextFieldConnection": {
            "edges": [
                727
            ],
            "nodes": [
                724
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectNextFieldEdge": {
            "cursor": [
                1129
            ],
            "node": [
                724
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectNextFieldType": {},
        "ProjectNextItem": {
            "content": [
                731
            ],
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "databaseId": [
                474
            ],
            "fieldValues": [
                734,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "id": [
                472
            ],
            "isArchived": [
                80
            ],
            "project": [
                721
            ],
            "title": [
                1129
            ],
            "type": [
                720
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectNextItemConnection": {
            "edges": [
                732
            ],
            "nodes": [
                729
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectNextItemContent": {
            "on_DraftIssue": [
                356
            ],
            "on_Issue": [
                485
            ],
            "on_PullRequest": [
                812
            ],
            "on_Node": [
                588
            ],
            "on_Assignable": [
                59
            ],
            "on_Closable": [
                142
            ],
            "on_Comment": [
                151
            ],
            "on_Updatable": [
                1223
            ],
            "on_UpdatableComment": [
                1224
            ],
            "on_Labelable": [
                515
            ],
            "on_Lockable": [
                536
            ],
            "on_Reactable": [
                859
            ],
            "on_RepositoryNode": [
                980
            ],
            "on_Subscribable": [
                1135
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectNextItemEdge": {
            "cursor": [
                1129
            ],
            "node": [
                729
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectNextItemFieldValue": {
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "projectField": [
                724
            ],
            "projectItem": [
                729
            ],
            "updatedAt": [
                252
            ],
            "value": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectNextItemFieldValueConnection": {
            "edges": [
                735
            ],
            "nodes": [
                733
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectNextItemFieldValueEdge": {
            "cursor": [
                1129
            ],
            "node": [
                733
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectNextOrderField": {},
        "ProjectNextOwner": {
            "id": [
                472
            ],
            "projectNext": [
                721,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projectsNext": [
                722,
                {
                    "query": [
                        1129
                    ],
                    "sortBy": [
                        736
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "on_Issue": [
                485
            ],
            "on_Organization": [
                639
            ],
            "on_PullRequest": [
                812
            ],
            "on_User": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectOrder": {
            "field": [
                739
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectOrderField": {},
        "ProjectOwner": {
            "id": [
                472
            ],
            "project": [
                707,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projects": [
                718,
                {
                    "orderBy": [
                        738
                    ],
                    "search": [
                        1129
                    ],
                    "states": [
                        742,
                        "[ProjectState!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "projectsResourcePath": [
                1186
            ],
            "projectsUrl": [
                1186
            ],
            "viewerCanCreateProjects": [
                80
            ],
            "on_Organization": [
                639
            ],
            "on_Repository": [
                950
            ],
            "on_User": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectProgress": {
            "doneCount": [
                474
            ],
            "donePercentage": [
                431
            ],
            "enabled": [
                80
            ],
            "inProgressCount": [
                474
            ],
            "inProgressPercentage": [
                431
            ],
            "todoCount": [
                474
            ],
            "todoPercentage": [
                431
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectState": {},
        "ProjectTemplate": {},
        "ProjectV2": {
            "closed": [
                80
            ],
            "closedAt": [
                252
            ],
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "databaseId": [
                474
            ],
            "field": [
                749,
                {
                    "name": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "fields": [
                750,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        754
                    ]
                }
            ],
            "id": [
                472
            ],
            "items": [
                760,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        780
                    ]
                }
            ],
            "number": [
                474
            ],
            "owner": [
                788
            ],
            "public": [
                80
            ],
            "readme": [
                1129
            ],
            "repositories": [
                957,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        981
                    ]
                }
            ],
            "resourcePath": [
                1186
            ],
            "shortDescription": [
                1129
            ],
            "teams": [
                1145,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1163
                    ]
                }
            ],
            "title": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "view": [
                799,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "viewerCanUpdate": [
                80
            ],
            "views": [
                800,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        803
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2Connection": {
            "edges": [
                746
            ],
            "nodes": [
                744
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2Edge": {
            "cursor": [
                1129
            ],
            "node": [
                744
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2Field": {
            "createdAt": [
                252
            ],
            "dataType": [
                756
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "project": [
                744
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2FieldCommon": {
            "createdAt": [
                252
            ],
            "dataType": [
                756
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "project": [
                744
            ],
            "updatedAt": [
                252
            ],
            "on_ProjectV2Field": [
                747
            ],
            "on_ProjectV2IterationField": [
                783
            ],
            "on_ProjectV2SingleSelectField": [
                790
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2FieldConfiguration": {
            "on_ProjectV2Field": [
                747
            ],
            "on_ProjectV2IterationField": [
                783
            ],
            "on_ProjectV2SingleSelectField": [
                790
            ],
            "on_ProjectV2FieldCommon": [
                748
            ],
            "on_Node": [
                588
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2FieldConfigurationConnection": {
            "edges": [
                751
            ],
            "nodes": [
                749
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2FieldConfigurationEdge": {
            "cursor": [
                1129
            ],
            "node": [
                749
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2FieldConnection": {
            "edges": [
                753
            ],
            "nodes": [
                747
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2FieldEdge": {
            "cursor": [
                1129
            ],
            "node": [
                747
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2FieldOrder": {
            "field": [
                755
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2FieldOrderField": {},
        "ProjectV2FieldType": {},
        "ProjectV2FieldValue": {
            "text": [
                1129
            ],
            "number": [
                431
            ],
            "date": [
                251
            ],
            "singleSelectOptionId": [
                1129
            ],
            "iterationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2Filters": {
            "state": [
                798
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2Item": {
            "content": [
                761
            ],
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "databaseId": [
                474
            ],
            "fieldValueByName": [
                774,
                {
                    "name": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "fieldValues": [
                776,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        778
                    ]
                }
            ],
            "id": [
                472
            ],
            "isArchived": [
                80
            ],
            "project": [
                744
            ],
            "type": [
                782
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemConnection": {
            "edges": [
                762
            ],
            "nodes": [
                759
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemContent": {
            "on_DraftIssue": [
                356
            ],
            "on_Issue": [
                485
            ],
            "on_PullRequest": [
                812
            ],
            "on_Node": [
                588
            ],
            "on_Assignable": [
                59
            ],
            "on_Closable": [
                142
            ],
            "on_Comment": [
                151
            ],
            "on_Updatable": [
                1223
            ],
            "on_UpdatableComment": [
                1224
            ],
            "on_Labelable": [
                515
            ],
            "on_Lockable": [
                536
            ],
            "on_Reactable": [
                859
            ],
            "on_RepositoryNode": [
                980
            ],
            "on_Subscribable": [
                1135
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemEdge": {
            "cursor": [
                1129
            ],
            "node": [
                759
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldDateValue": {
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "databaseId": [
                474
            ],
            "date": [
                251
            ],
            "field": [
                749
            ],
            "id": [
                472
            ],
            "item": [
                759
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldIterationValue": {
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "databaseId": [
                474
            ],
            "duration": [
                474
            ],
            "field": [
                749
            ],
            "id": [
                472
            ],
            "item": [
                759
            ],
            "iterationId": [
                1129
            ],
            "startDate": [
                251
            ],
            "title": [
                1129
            ],
            "titleHTML": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldLabelValue": {
            "field": [
                749
            ],
            "labels": [
                511,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldMilestoneValue": {
            "field": [
                749
            ],
            "milestone": [
                571
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldNumberValue": {
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "databaseId": [
                474
            ],
            "field": [
                749
            ],
            "id": [
                472
            ],
            "item": [
                759
            ],
            "number": [
                431
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldPullRequestValue": {
            "field": [
                749
            ],
            "pullRequests": [
                820,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        824
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldRepositoryValue": {
            "field": [
                749
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldReviewerValue": {
            "field": [
                749
            ],
            "reviewers": [
                1001,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldSingleSelectValue": {
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "databaseId": [
                474
            ],
            "field": [
                749
            ],
            "id": [
                472
            ],
            "item": [
                759
            ],
            "name": [
                1129
            ],
            "nameHTML": [
                1129
            ],
            "optionId": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldTextValue": {
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "databaseId": [
                474
            ],
            "field": [
                749
            ],
            "id": [
                472
            ],
            "item": [
                759
            ],
            "text": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldUserValue": {
            "field": [
                749
            ],
            "users": [
                1336,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldValue": {
            "on_ProjectV2ItemFieldDateValue": [
                763
            ],
            "on_ProjectV2ItemFieldIterationValue": [
                764
            ],
            "on_ProjectV2ItemFieldLabelValue": [
                765
            ],
            "on_ProjectV2ItemFieldMilestoneValue": [
                766
            ],
            "on_ProjectV2ItemFieldNumberValue": [
                767
            ],
            "on_ProjectV2ItemFieldPullRequestValue": [
                768
            ],
            "on_ProjectV2ItemFieldRepositoryValue": [
                769
            ],
            "on_ProjectV2ItemFieldReviewerValue": [
                770
            ],
            "on_ProjectV2ItemFieldSingleSelectValue": [
                771
            ],
            "on_ProjectV2ItemFieldTextValue": [
                772
            ],
            "on_ProjectV2ItemFieldUserValue": [
                773
            ],
            "on_ProjectV2ItemFieldValueCommon": [
                775
            ],
            "on_Node": [
                588
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldValueCommon": {
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "databaseId": [
                474
            ],
            "field": [
                749
            ],
            "id": [
                472
            ],
            "item": [
                759
            ],
            "updatedAt": [
                252
            ],
            "on_ProjectV2ItemFieldDateValue": [
                763
            ],
            "on_ProjectV2ItemFieldIterationValue": [
                764
            ],
            "on_ProjectV2ItemFieldNumberValue": [
                767
            ],
            "on_ProjectV2ItemFieldSingleSelectValue": [
                771
            ],
            "on_ProjectV2ItemFieldTextValue": [
                772
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldValueConnection": {
            "edges": [
                777
            ],
            "nodes": [
                774
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldValueEdge": {
            "cursor": [
                1129
            ],
            "node": [
                774
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldValueOrder": {
            "field": [
                779
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemFieldValueOrderField": {},
        "ProjectV2ItemOrder": {
            "field": [
                781
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ItemOrderField": {},
        "ProjectV2ItemType": {},
        "ProjectV2IterationField": {
            "configuration": [
                784
            ],
            "createdAt": [
                252
            ],
            "dataType": [
                756
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "project": [
                744
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2IterationFieldConfiguration": {
            "completedIterations": [
                785
            ],
            "duration": [
                474
            ],
            "iterations": [
                785
            ],
            "startDay": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2IterationFieldIteration": {
            "duration": [
                474
            ],
            "id": [
                1129
            ],
            "startDate": [
                251
            ],
            "title": [
                1129
            ],
            "titleHTML": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2Order": {
            "field": [
                787
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2OrderField": {},
        "ProjectV2Owner": {
            "id": [
                472
            ],
            "projectV2": [
                744,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projectsV2": [
                745,
                {
                    "query": [
                        1129
                    ],
                    "orderBy": [
                        786
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "on_Issue": [
                485
            ],
            "on_Organization": [
                639
            ],
            "on_PullRequest": [
                812
            ],
            "on_User": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2Recent": {
            "recentProjects": [
                745,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "on_Organization": [
                639
            ],
            "on_Repository": [
                950
            ],
            "on_User": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2SingleSelectField": {
            "createdAt": [
                252
            ],
            "dataType": [
                756
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "options": [
                791
            ],
            "project": [
                744
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2SingleSelectFieldOption": {
            "id": [
                1129
            ],
            "name": [
                1129
            ],
            "nameHTML": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2SortBy": {
            "direction": [
                596
            ],
            "field": [
                747
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2SortByConnection": {
            "edges": [
                794
            ],
            "nodes": [
                792
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2SortByEdge": {
            "cursor": [
                1129
            ],
            "node": [
                792
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2SortByField": {
            "direction": [
                596
            ],
            "field": [
                749
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2SortByFieldConnection": {
            "edges": [
                797
            ],
            "nodes": [
                795
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2SortByFieldEdge": {
            "cursor": [
                1129
            ],
            "node": [
                795
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2State": {},
        "ProjectV2View": {
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "fields": [
                750,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        754
                    ]
                }
            ],
            "filter": [
                1129
            ],
            "groupBy": [
                752,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        754
                    ]
                }
            ],
            "groupByFields": [
                750,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        754
                    ]
                }
            ],
            "id": [
                472
            ],
            "layout": [
                802
            ],
            "name": [
                1129
            ],
            "number": [
                474
            ],
            "project": [
                744
            ],
            "sortBy": [
                793,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "sortByFields": [
                796,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "updatedAt": [
                252
            ],
            "verticalGroupBy": [
                752,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        754
                    ]
                }
            ],
            "verticalGroupByFields": [
                750,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        754
                    ]
                }
            ],
            "visibleFields": [
                752,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        754
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ViewConnection": {
            "edges": [
                801
            ],
            "nodes": [
                799
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ViewEdge": {
            "cursor": [
                1129
            ],
            "node": [
                799
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ViewLayout": {},
        "ProjectV2ViewOrder": {
            "field": [
                804
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectV2ViewOrderField": {},
        "ProjectView": {
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "filter": [
                1129
            ],
            "groupBy": [
                474
            ],
            "id": [
                472
            ],
            "layout": [
                808
            ],
            "name": [
                1129
            ],
            "number": [
                474
            ],
            "project": [
                721
            ],
            "sortBy": [
                1066
            ],
            "updatedAt": [
                252
            ],
            "verticalGroupBy": [
                474
            ],
            "visibleFields": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectViewConnection": {
            "edges": [
                807
            ],
            "nodes": [
                805
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectViewEdge": {
            "cursor": [
                1129
            ],
            "node": [
                805
            ],
            "__typename": [
                1129
            ]
        },
        "ProjectViewLayout": {},
        "PublicKey": {
            "accessedAt": [
                252
            ],
            "createdAt": [
                252
            ],
            "fingerprint": [
                1129
            ],
            "id": [
                472
            ],
            "isReadOnly": [
                80
            ],
            "key": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "PublicKeyConnection": {
            "edges": [
                811
            ],
            "nodes": [
                809
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PublicKeyEdge": {
            "cursor": [
                1129
            ],
            "node": [
                809
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequest": {
            "activeLockReason": [
                535
            ],
            "additions": [
                474
            ],
            "assignees": [
                1336,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "author": [
                6
            ],
            "authorAssociation": [
                152
            ],
            "autoMergeRequest": [
                68
            ],
            "baseRef": [
                873
            ],
            "baseRefName": [
                1129
            ],
            "baseRefOid": [
                456
            ],
            "baseRepository": [
                950
            ],
            "body": [
                1129
            ],
            "bodyHTML": [
                466
            ],
            "bodyText": [
                1129
            ],
            "changedFiles": [
                474
            ],
            "checksResourcePath": [
                1186
            ],
            "checksUrl": [
                1186
            ],
            "closed": [
                80
            ],
            "closedAt": [
                252
            ],
            "closingIssuesReferences": [
                492,
                {
                    "userLinkedOnly": [
                        80
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        497
                    ]
                }
            ],
            "comments": [
                488,
                {
                    "orderBy": [
                        490
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "commits": [
                818,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "createdAt": [
                252
            ],
            "createdViaEmail": [
                80
            ],
            "databaseId": [
                474
            ],
            "deletions": [
                474
            ],
            "editor": [
                6
            ],
            "files": [
                814,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "headRef": [
                873
            ],
            "headRefName": [
                1129
            ],
            "headRefOid": [
                456
            ],
            "headRepository": [
                950
            ],
            "headRepositoryOwner": [
                983
            ],
            "hovercard": [
                470,
                {
                    "includeNotificationContexts": [
                        80
                    ]
                }
            ],
            "id": [
                472
            ],
            "includesCreatedEdit": [
                80
            ],
            "isCrossRepository": [
                80
            ],
            "isDraft": [
                80
            ],
            "isReadByViewer": [
                80
            ],
            "labels": [
                511,
                {
                    "orderBy": [
                        513
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "lastEditedAt": [
                252
            ],
            "latestOpinionatedReviews": [
                831,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "writersOnly": [
                        80
                    ]
                }
            ],
            "latestReviews": [
                831,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "locked": [
                80
            ],
            "maintainerCanModify": [
                80
            ],
            "mergeCommit": [
                155
            ],
            "mergeable": [
                565
            ],
            "merged": [
                80
            ],
            "mergedAt": [
                252
            ],
            "mergedBy": [
                6
            ],
            "milestone": [
                571
            ],
            "number": [
                474
            ],
            "participants": [
                1336,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "permalink": [
                1186
            ],
            "potentialMergeCommit": [
                155
            ],
            "projectCards": [
                710,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "archivedStates": [
                        709,
                        "[ProjectCardArchivedState]"
                    ]
                }
            ],
            "projectItems": [
                760,
                {
                    "includeArchived": [
                        80
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "projectNext": [
                721,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projectNextItems": [
                730,
                {
                    "includeArchived": [
                        80
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "projectV2": [
                744,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projectsNext": [
                722,
                {
                    "query": [
                        1129
                    ],
                    "sortBy": [
                        736
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "projectsV2": [
                745,
                {
                    "query": [
                        1129
                    ],
                    "orderBy": [
                        786
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "publishedAt": [
                252
            ],
            "reactionGroups": [
                866
            ],
            "reactions": [
                863,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "content": [
                        864
                    ],
                    "orderBy": [
                        867
                    ]
                }
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "revertResourcePath": [
                1186
            ],
            "revertUrl": [
                1186
            ],
            "reviewDecision": [
                833
            ],
            "reviewRequests": [
                1017,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "reviewThreads": [
                838,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "reviews": [
                831,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "states": [
                        836,
                        "[PullRequestReviewState!]"
                    ],
                    "author": [
                        1129
                    ]
                }
            ],
            "state": [
                841
            ],
            "suggestedReviewers": [
                1138
            ],
            "timeline": [
                844,
                {
                    "since": [
                        252
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "timelineItems": [
                848,
                {
                    "since": [
                        252
                    ],
                    "skip": [
                        474
                    ],
                    "itemTypes": [
                        850,
                        "[PullRequestTimelineItemsItemType!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "title": [
                1129
            ],
            "titleHTML": [
                466
            ],
            "totalCommentsCount": [
                474
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "userContentEdits": [
                1338,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "viewerCanApplySuggestion": [
                80
            ],
            "viewerCanDeleteHeadRef": [
                80
            ],
            "viewerCanDisableAutoMerge": [
                80
            ],
            "viewerCanEditFiles": [
                80
            ],
            "viewerCanEnableAutoMerge": [
                80
            ],
            "viewerCanMergeAsAdmin": [
                80
            ],
            "viewerCanReact": [
                80
            ],
            "viewerCanSubscribe": [
                80
            ],
            "viewerCanUpdate": [
                80
            ],
            "viewerCannotUpdateReasons": [
                153
            ],
            "viewerDidAuthor": [
                80
            ],
            "viewerLatestReview": [
                826
            ],
            "viewerLatestReviewRequest": [
                1016
            ],
            "viewerMergeBodyText": [
                1129,
                {
                    "mergeType": [
                        823
                    ]
                }
            ],
            "viewerMergeHeadlineText": [
                1129,
                {
                    "mergeType": [
                        823
                    ]
                }
            ],
            "viewerSubscription": [
                1137
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestChangedFile": {
            "additions": [
                474
            ],
            "changeType": [
                684
            ],
            "deletions": [
                474
            ],
            "path": [
                1129
            ],
            "viewerViewedState": [
                430
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestChangedFileConnection": {
            "edges": [
                815
            ],
            "nodes": [
                813
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestChangedFileEdge": {
            "cursor": [
                1129
            ],
            "node": [
                813
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestCommit": {
            "commit": [
                155
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestCommitCommentThread": {
            "comments": [
                158,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "commit": [
                155
            ],
            "id": [
                472
            ],
            "path": [
                1129
            ],
            "position": [
                474
            ],
            "pullRequest": [
                812
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestCommitConnection": {
            "edges": [
                819
            ],
            "nodes": [
                816
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestCommitEdge": {
            "cursor": [
                1129
            ],
            "node": [
                816
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestConnection": {
            "edges": [
                822
            ],
            "nodes": [
                812
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestContributionsByRepository": {
            "contributions": [
                240,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        179
                    ]
                }
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestEdge": {
            "cursor": [
                1129
            ],
            "node": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestMergeMethod": {},
        "PullRequestOrder": {
            "field": [
                825
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestOrderField": {},
        "PullRequestReview": {
            "author": [
                6
            ],
            "authorAssociation": [
                152
            ],
            "authorCanPushToRepository": [
                80
            ],
            "body": [
                1129
            ],
            "bodyHTML": [
                466
            ],
            "bodyText": [
                1129
            ],
            "comments": [
                828,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "commit": [
                155
            ],
            "createdAt": [
                252
            ],
            "createdViaEmail": [
                80
            ],
            "databaseId": [
                474
            ],
            "editor": [
                6
            ],
            "id": [
                472
            ],
            "includesCreatedEdit": [
                80
            ],
            "lastEditedAt": [
                252
            ],
            "onBehalfOf": [
                1145,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "publishedAt": [
                252
            ],
            "pullRequest": [
                812
            ],
            "reactionGroups": [
                866
            ],
            "reactions": [
                863,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "content": [
                        864
                    ],
                    "orderBy": [
                        867
                    ]
                }
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "state": [
                836
            ],
            "submittedAt": [
                252
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "userContentEdits": [
                1338,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "viewerCanDelete": [
                80
            ],
            "viewerCanReact": [
                80
            ],
            "viewerCanUpdate": [
                80
            ],
            "viewerCannotUpdateReasons": [
                153
            ],
            "viewerDidAuthor": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestReviewComment": {
            "author": [
                6
            ],
            "authorAssociation": [
                152
            ],
            "body": [
                1129
            ],
            "bodyHTML": [
                466
            ],
            "bodyText": [
                1129
            ],
            "commit": [
                155
            ],
            "createdAt": [
                252
            ],
            "createdViaEmail": [
                80
            ],
            "databaseId": [
                474
            ],
            "diffHunk": [
                1129
            ],
            "draftedAt": [
                252
            ],
            "editor": [
                6
            ],
            "id": [
                472
            ],
            "includesCreatedEdit": [
                80
            ],
            "isMinimized": [
                80
            ],
            "lastEditedAt": [
                252
            ],
            "minimizedReason": [
                1129
            ],
            "originalCommit": [
                155
            ],
            "originalPosition": [
                474
            ],
            "outdated": [
                80
            ],
            "path": [
                1129
            ],
            "position": [
                474
            ],
            "publishedAt": [
                252
            ],
            "pullRequest": [
                812
            ],
            "pullRequestReview": [
                826
            ],
            "reactionGroups": [
                866
            ],
            "reactions": [
                863,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "content": [
                        864
                    ],
                    "orderBy": [
                        867
                    ]
                }
            ],
            "replyTo": [
                827
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "state": [
                830
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "userContentEdits": [
                1338,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "viewerCanDelete": [
                80
            ],
            "viewerCanMinimize": [
                80
            ],
            "viewerCanReact": [
                80
            ],
            "viewerCanUpdate": [
                80
            ],
            "viewerCannotUpdateReasons": [
                153
            ],
            "viewerDidAuthor": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestReviewCommentConnection": {
            "edges": [
                829
            ],
            "nodes": [
                827
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestReviewCommentEdge": {
            "cursor": [
                1129
            ],
            "node": [
                827
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestReviewCommentState": {},
        "PullRequestReviewConnection": {
            "edges": [
                834
            ],
            "nodes": [
                826
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestReviewContributionsByRepository": {
            "contributions": [
                244,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        179
                    ]
                }
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestReviewDecision": {},
        "PullRequestReviewEdge": {
            "cursor": [
                1129
            ],
            "node": [
                826
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestReviewEvent": {},
        "PullRequestReviewState": {},
        "PullRequestReviewThread": {
            "comments": [
                828,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "skip": [
                        474
                    ]
                }
            ],
            "diffSide": [
                330
            ],
            "id": [
                472
            ],
            "isCollapsed": [
                80
            ],
            "isOutdated": [
                80
            ],
            "isResolved": [
                80
            ],
            "line": [
                474
            ],
            "originalLine": [
                474
            ],
            "originalStartLine": [
                474
            ],
            "path": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "repository": [
                950
            ],
            "resolvedBy": [
                1333
            ],
            "startDiffSide": [
                330
            ],
            "startLine": [
                474
            ],
            "viewerCanReply": [
                80
            ],
            "viewerCanResolve": [
                80
            ],
            "viewerCanUnresolve": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestReviewThreadConnection": {
            "edges": [
                839
            ],
            "nodes": [
                837
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestReviewThreadEdge": {
            "cursor": [
                1129
            ],
            "node": [
                837
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestRevisionMarker": {
            "createdAt": [
                252
            ],
            "lastSeenCommit": [
                155
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestState": {},
        "PullRequestTemplate": {
            "body": [
                1129
            ],
            "filename": [
                1129
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestThread": {
            "comments": [
                828,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "skip": [
                        474
                    ]
                }
            ],
            "diffSide": [
                330
            ],
            "id": [
                472
            ],
            "isCollapsed": [
                80
            ],
            "isOutdated": [
                80
            ],
            "isResolved": [
                80
            ],
            "line": [
                474
            ],
            "pullRequest": [
                812
            ],
            "repository": [
                950
            ],
            "resolvedBy": [
                1333
            ],
            "startDiffSide": [
                330
            ],
            "startLine": [
                474
            ],
            "viewerCanReply": [
                80
            ],
            "viewerCanResolve": [
                80
            ],
            "viewerCanUnresolve": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestTimelineConnection": {
            "edges": [
                846
            ],
            "nodes": [
                845
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestTimelineItem": {
            "on_AssignedEvent": [
                60
            ],
            "on_BaseRefDeletedEvent": [
                75
            ],
            "on_BaseRefForcePushedEvent": [
                76
            ],
            "on_ClosedEvent": [
                147
            ],
            "on_Commit": [
                155
            ],
            "on_CommitCommentThread": [
                160
            ],
            "on_CrossReferencedEvent": [
                250
            ],
            "on_DemilestonedEvent": [
                297
            ],
            "on_DeployedEvent": [
                304
            ],
            "on_DeploymentEnvironmentChangedEvent": [
                308
            ],
            "on_HeadRefDeletedEvent": [
                467
            ],
            "on_HeadRefForcePushedEvent": [
                468
            ],
            "on_HeadRefRestoredEvent": [
                469
            ],
            "on_IssueComment": [
                487
            ],
            "on_LabeledEvent": [
                516
            ],
            "on_LockedEvent": [
                537
            ],
            "on_MergedEvent": [
                566
            ],
            "on_MilestonedEvent": [
                578
            ],
            "on_PullRequestReview": [
                826
            ],
            "on_PullRequestReviewComment": [
                827
            ],
            "on_PullRequestReviewThread": [
                837
            ],
            "on_ReferencedEvent": [
                879
            ],
            "on_RenamedTitleEvent": [
                916
            ],
            "on_ReopenedEvent": [
                922
            ],
            "on_ReviewDismissedEvent": [
                1015
            ],
            "on_ReviewRequestRemovedEvent": [
                1019
            ],
            "on_ReviewRequestedEvent": [
                1020
            ],
            "on_SubscribedEvent": [
                1136
            ],
            "on_UnassignedEvent": [
                1191
            ],
            "on_UnlabeledEvent": [
                1198
            ],
            "on_UnlockedEvent": [
                1207
            ],
            "on_UnsubscribedEvent": [
                1222
            ],
            "on_UserBlockedEvent": [
                1335
            ],
            "on_Node": [
                588
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_GitObject": [
                455
            ],
            "on_Subscribable": [
                1135
            ],
            "on_RepositoryNode": [
                980
            ],
            "on_Comment": [
                151
            ],
            "on_Deletable": [
                256
            ],
            "on_Minimizable": [
                579
            ],
            "on_Updatable": [
                1223
            ],
            "on_UpdatableComment": [
                1224
            ],
            "on_Reactable": [
                859
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestTimelineItemEdge": {
            "cursor": [
                1129
            ],
            "node": [
                845
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestTimelineItems": {
            "on_AddedToProjectEvent": [
                49
            ],
            "on_AssignedEvent": [
                60
            ],
            "on_AutoMergeDisabledEvent": [
                66
            ],
            "on_AutoMergeEnabledEvent": [
                67
            ],
            "on_AutoRebaseEnabledEvent": [
                69
            ],
            "on_AutoSquashEnabledEvent": [
                70
            ],
            "on_AutomaticBaseChangeFailedEvent": [
                71
            ],
            "on_AutomaticBaseChangeSucceededEvent": [
                72
            ],
            "on_BaseRefChangedEvent": [
                74
            ],
            "on_BaseRefDeletedEvent": [
                75
            ],
            "on_BaseRefForcePushedEvent": [
                76
            ],
            "on_ClosedEvent": [
                147
            ],
            "on_CommentDeletedEvent": [
                154
            ],
            "on_ConnectedEvent": [
                172
            ],
            "on_ConvertToDraftEvent": [
                185
            ],
            "on_ConvertedNoteToIssueEvent": [
                186
            ],
            "on_ConvertedToDiscussionEvent": [
                187
            ],
            "on_CrossReferencedEvent": [
                250
            ],
            "on_DemilestonedEvent": [
                297
            ],
            "on_DeployedEvent": [
                304
            ],
            "on_DeploymentEnvironmentChangedEvent": [
                308
            ],
            "on_DisconnectedEvent": [
                333
            ],
            "on_HeadRefDeletedEvent": [
                467
            ],
            "on_HeadRefForcePushedEvent": [
                468
            ],
            "on_HeadRefRestoredEvent": [
                469
            ],
            "on_IssueComment": [
                487
            ],
            "on_LabeledEvent": [
                516
            ],
            "on_LockedEvent": [
                537
            ],
            "on_MarkedAsDuplicateEvent": [
                549
            ],
            "on_MentionedEvent": [
                558
            ],
            "on_MergedEvent": [
                566
            ],
            "on_MilestonedEvent": [
                578
            ],
            "on_MovedColumnsInProjectEvent": [
                586
            ],
            "on_PinnedEvent": [
                698
            ],
            "on_PullRequestCommit": [
                816
            ],
            "on_PullRequestCommitCommentThread": [
                817
            ],
            "on_PullRequestReview": [
                826
            ],
            "on_PullRequestReviewThread": [
                837
            ],
            "on_PullRequestRevisionMarker": [
                840
            ],
            "on_ReadyForReviewEvent": [
                872
            ],
            "on_ReferencedEvent": [
                879
            ],
            "on_RemovedFromProjectEvent": [
                915
            ],
            "on_RenamedTitleEvent": [
                916
            ],
            "on_ReopenedEvent": [
                922
            ],
            "on_ReviewDismissedEvent": [
                1015
            ],
            "on_ReviewRequestRemovedEvent": [
                1019
            ],
            "on_ReviewRequestedEvent": [
                1020
            ],
            "on_SubscribedEvent": [
                1136
            ],
            "on_TransferredEvent": [
                1183
            ],
            "on_UnassignedEvent": [
                1191
            ],
            "on_UnlabeledEvent": [
                1198
            ],
            "on_UnlockedEvent": [
                1207
            ],
            "on_UnmarkedAsDuplicateEvent": [
                1214
            ],
            "on_UnpinnedEvent": [
                1219
            ],
            "on_UnsubscribedEvent": [
                1222
            ],
            "on_UserBlockedEvent": [
                1335
            ],
            "on_Node": [
                588
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_Comment": [
                151
            ],
            "on_Deletable": [
                256
            ],
            "on_Minimizable": [
                579
            ],
            "on_Updatable": [
                1223
            ],
            "on_UpdatableComment": [
                1224
            ],
            "on_Reactable": [
                859
            ],
            "on_RepositoryNode": [
                980
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestTimelineItemsConnection": {
            "edges": [
                849
            ],
            "filteredCount": [
                474
            ],
            "nodes": [
                847
            ],
            "pageCount": [
                474
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestTimelineItemsEdge": {
            "cursor": [
                1129
            ],
            "node": [
                847
            ],
            "__typename": [
                1129
            ]
        },
        "PullRequestTimelineItemsItemType": {},
        "PullRequestUpdateState": {},
        "Push": {
            "id": [
                472
            ],
            "nextSha": [
                456
            ],
            "permalink": [
                1186
            ],
            "previousSha": [
                456
            ],
            "pusher": [
                6
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "PushAllowance": {
            "actor": [
                854
            ],
            "branchProtectionRule": [
                83
            ],
            "id": [
                472
            ],
            "__typename": [
                1129
            ]
        },
        "PushAllowanceActor": {
            "on_App": [
                50
            ],
            "on_Team": [
                1140
            ],
            "on_User": [
                1333
            ],
            "on_Node": [
                588
            ],
            "on_Subscribable": [
                1135
            ],
            "on_MemberStatusable": [
                554
            ],
            "on_Actor": [
                6
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "PushAllowanceConnection": {
            "edges": [
                856
            ],
            "nodes": [
                853
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "PushAllowanceEdge": {
            "cursor": [
                1129
            ],
            "node": [
                853
            ],
            "__typename": [
                1129
            ]
        },
        "Query": {
            "codeOfConduct": [
                149,
                {
                    "key": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "codesOfConduct": [
                149
            ],
            "enterprise": [
                361,
                {
                    "slug": [
                        1129,
                        "String!"
                    ],
                    "invitationToken": [
                        1129
                    ]
                }
            ],
            "enterpriseAdministratorInvitation": [
                364,
                {
                    "userLogin": [
                        1129,
                        "String!"
                    ],
                    "enterpriseSlug": [
                        1129,
                        "String!"
                    ],
                    "role": [
                        369,
                        "EnterpriseAdministratorRole!"
                    ]
                }
            ],
            "enterpriseAdministratorInvitationByToken": [
                364,
                {
                    "invitationToken": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "license": [
                522,
                {
                    "key": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "licenses": [
                522
            ],
            "marketplaceCategories": [
                550,
                {
                    "includeCategories": [
                        1129,
                        "[String!]"
                    ],
                    "excludeEmpty": [
                        80
                    ],
                    "excludeSubcategories": [
                        80
                    ]
                }
            ],
            "marketplaceCategory": [
                550,
                {
                    "slug": [
                        1129,
                        "String!"
                    ],
                    "useTopicAliases": [
                        80
                    ]
                }
            ],
            "marketplaceListing": [
                551,
                {
                    "slug": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "marketplaceListings": [
                552,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "categorySlug": [
                        1129
                    ],
                    "useTopicAliases": [
                        80
                    ],
                    "viewerCanAdmin": [
                        80
                    ],
                    "adminId": [
                        472
                    ],
                    "organizationId": [
                        472
                    ],
                    "allStates": [
                        80
                    ],
                    "slugs": [
                        1129,
                        "[String]"
                    ],
                    "primaryCategoryOnly": [
                        80
                    ],
                    "withFreeTrialsOnly": [
                        80
                    ]
                }
            ],
            "meta": [
                454
            ],
            "node": [
                588,
                {
                    "id": [
                        472,
                        "ID!"
                    ]
                }
            ],
            "nodes": [
                588,
                {
                    "ids": [
                        472,
                        "[ID!]!"
                    ]
                }
            ],
            "organization": [
                639,
                {
                    "login": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "rateLimit": [
                858,
                {
                    "dryRun": [
                        80
                    ]
                }
            ],
            "relay": [
                857
            ],
            "repository": [
                950,
                {
                    "owner": [
                        1129,
                        "String!"
                    ],
                    "name": [
                        1129,
                        "String!"
                    ],
                    "followRenames": [
                        80
                    ]
                }
            ],
            "repositoryOwner": [
                983,
                {
                    "login": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "resource": [
                1196,
                {
                    "url": [
                        1186,
                        "URI!"
                    ]
                }
            ],
            "search": [
                1035,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "query": [
                        1129,
                        "String!"
                    ],
                    "type": [
                        1037,
                        "SearchType!"
                    ]
                }
            ],
            "securityAdvisories": [
                1040,
                {
                    "orderBy": [
                        1046
                    ],
                    "identifier": [
                        1044
                    ],
                    "publishedSince": [
                        252
                    ],
                    "updatedSince": [
                        252
                    ],
                    "classifications": [
                        1039,
                        "[SecurityAdvisoryClassification!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "securityAdvisory": [
                1038,
                {
                    "ghsaId": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "securityVulnerabilities": [
                1053,
                {
                    "orderBy": [
                        1055
                    ],
                    "ecosystem": [
                        1041
                    ],
                    "package": [
                        1129
                    ],
                    "severities": [
                        1051,
                        "[SecurityAdvisorySeverity!]"
                    ],
                    "classifications": [
                        1039,
                        "[SecurityAdvisoryClassification!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "sponsorables": [
                1074,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1076
                    ],
                    "onlyDependencies": [
                        80
                    ],
                    "orgLoginForDependencies": [
                        1129
                    ],
                    "dependencyEcosystem": [
                        1041
                    ],
                    "ecosystem": [
                        300
                    ]
                }
            ],
            "topic": [
                1175,
                {
                    "name": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "user": [
                1333,
                {
                    "login": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "viewer": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "RateLimit": {
            "cost": [
                474
            ],
            "limit": [
                474
            ],
            "nodeCount": [
                474
            ],
            "remaining": [
                474
            ],
            "resetAt": [
                252
            ],
            "used": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "Reactable": {
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "reactionGroups": [
                866
            ],
            "reactions": [
                863,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "content": [
                        864
                    ],
                    "orderBy": [
                        867
                    ]
                }
            ],
            "viewerCanReact": [
                80
            ],
            "on_CommitComment": [
                157
            ],
            "on_Discussion": [
                334
            ],
            "on_DiscussionComment": [
                338
            ],
            "on_Issue": [
                485
            ],
            "on_IssueComment": [
                487
            ],
            "on_PullRequest": [
                812
            ],
            "on_PullRequestReview": [
                826
            ],
            "on_PullRequestReviewComment": [
                827
            ],
            "on_Release": [
                887
            ],
            "on_TeamDiscussion": [
                1146
            ],
            "on_TeamDiscussionComment": [
                1147
            ],
            "__typename": [
                1129
            ]
        },
        "ReactingUserConnection": {
            "edges": [
                861
            ],
            "nodes": [
                1333
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ReactingUserEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1333
            ],
            "reactedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "Reaction": {
            "content": [
                864
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "reactable": [
                859
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "ReactionConnection": {
            "edges": [
                865
            ],
            "nodes": [
                862
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "viewerHasReacted": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "ReactionContent": {},
        "ReactionEdge": {
            "cursor": [
                1129
            ],
            "node": [
                862
            ],
            "__typename": [
                1129
            ]
        },
        "ReactionGroup": {
            "content": [
                864
            ],
            "createdAt": [
                252
            ],
            "reactors": [
                870,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "subject": [
                859
            ],
            "users": [
                860,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "viewerHasReacted": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "ReactionOrder": {
            "field": [
                868
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "ReactionOrderField": {},
        "Reactor": {
            "on_Bot": [
                81
            ],
            "on_Mannequin": [
                538
            ],
            "on_Organization": [
                639
            ],
            "on_User": [
                1333
            ],
            "on_Node": [
                588
            ],
            "on_Actor": [
                6
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_MemberStatusable": [
                554
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "ReactorConnection": {
            "edges": [
                871
            ],
            "nodes": [
                869
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ReactorEdge": {
            "cursor": [
                1129
            ],
            "node": [
                869
            ],
            "reactedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "ReadyForReviewEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "Ref": {
            "associatedPullRequests": [
                820,
                {
                    "states": [
                        841,
                        "[PullRequestState!]"
                    ],
                    "labels": [
                        1129,
                        "[String!]"
                    ],
                    "headRefName": [
                        1129
                    ],
                    "baseRefName": [
                        1129
                    ],
                    "orderBy": [
                        497
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "branchProtectionRule": [
                83
            ],
            "compare": [
                169,
                {
                    "headRef": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "prefix": [
                1129
            ],
            "refUpdateRule": [
                878
            ],
            "repository": [
                950
            ],
            "target": [
                455
            ],
            "__typename": [
                1129
            ]
        },
        "RefConnection": {
            "edges": [
                875
            ],
            "nodes": [
                873
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "RefEdge": {
            "cursor": [
                1129
            ],
            "node": [
                873
            ],
            "__typename": [
                1129
            ]
        },
        "RefOrder": {
            "field": [
                877
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "RefOrderField": {},
        "RefUpdateRule": {
            "allowsDeletions": [
                80
            ],
            "allowsForcePushes": [
                80
            ],
            "blocksCreations": [
                80
            ],
            "pattern": [
                1129
            ],
            "requiredApprovingReviewCount": [
                474
            ],
            "requiredStatusCheckContexts": [
                1129
            ],
            "requiresCodeOwnerReviews": [
                80
            ],
            "requiresConversationResolution": [
                80
            ],
            "requiresLinearHistory": [
                80
            ],
            "requiresSignatures": [
                80
            ],
            "viewerAllowedToDismissReviews": [
                80
            ],
            "viewerCanPush": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "ReferencedEvent": {
            "actor": [
                6
            ],
            "commit": [
                155
            ],
            "commitRepository": [
                950
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "isCrossRepository": [
                80
            ],
            "isDirectReference": [
                80
            ],
            "subject": [
                880
            ],
            "__typename": [
                1129
            ]
        },
        "ReferencedSubject": {
            "on_Issue": [
                485
            ],
            "on_PullRequest": [
                812
            ],
            "on_Node": [
                588
            ],
            "on_Assignable": [
                59
            ],
            "on_Closable": [
                142
            ],
            "on_Comment": [
                151
            ],
            "on_Updatable": [
                1223
            ],
            "on_UpdatableComment": [
                1224
            ],
            "on_Labelable": [
                515
            ],
            "on_Lockable": [
                536
            ],
            "on_Reactable": [
                859
            ],
            "on_RepositoryNode": [
                980
            ],
            "on_Subscribable": [
                1135
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "__typename": [
                1129
            ]
        },
        "RegenerateEnterpriseIdentityProviderRecoveryCodesInput": {
            "enterpriseId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RegenerateEnterpriseIdentityProviderRecoveryCodesPayload": {
            "clientMutationId": [
                1129
            ],
            "identityProvider": [
                376
            ],
            "__typename": [
                1129
            ]
        },
        "RegenerateVerifiableDomainTokenInput": {
            "id": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RegenerateVerifiableDomainTokenPayload": {
            "clientMutationId": [
                1129
            ],
            "verificationToken": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RejectDeploymentsInput": {
            "workflowRunId": [
                472
            ],
            "environmentIds": [
                472
            ],
            "comment": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RejectDeploymentsPayload": {
            "clientMutationId": [
                1129
            ],
            "deployments": [
                305
            ],
            "__typename": [
                1129
            ]
        },
        "Release": {
            "author": [
                1333
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "description": [
                1129
            ],
            "descriptionHTML": [
                466
            ],
            "id": [
                472
            ],
            "isDraft": [
                80
            ],
            "isLatest": [
                80
            ],
            "isPrerelease": [
                80
            ],
            "mentions": [
                1336,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "name": [
                1129
            ],
            "publishedAt": [
                252
            ],
            "reactionGroups": [
                866
            ],
            "reactions": [
                863,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "content": [
                        864
                    ],
                    "orderBy": [
                        867
                    ]
                }
            ],
            "releaseAssets": [
                889,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "name": [
                        1129
                    ]
                }
            ],
            "repository": [
                950
            ],
            "resourcePath": [
                1186
            ],
            "shortDescriptionHTML": [
                466,
                {
                    "limit": [
                        474
                    ]
                }
            ],
            "tag": [
                873
            ],
            "tagCommit": [
                155
            ],
            "tagName": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "viewerCanReact": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "ReleaseAsset": {
            "contentType": [
                1129
            ],
            "createdAt": [
                252
            ],
            "downloadCount": [
                474
            ],
            "downloadUrl": [
                1186
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "release": [
                887
            ],
            "size": [
                474
            ],
            "updatedAt": [
                252
            ],
            "uploadedBy": [
                1333
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "ReleaseAssetConnection": {
            "edges": [
                890
            ],
            "nodes": [
                888
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ReleaseAssetEdge": {
            "cursor": [
                1129
            ],
            "node": [
                888
            ],
            "__typename": [
                1129
            ]
        },
        "ReleaseConnection": {
            "edges": [
                892
            ],
            "nodes": [
                887
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ReleaseEdge": {
            "cursor": [
                1129
            ],
            "node": [
                887
            ],
            "__typename": [
                1129
            ]
        },
        "ReleaseOrder": {
            "field": [
                894
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "ReleaseOrderField": {},
        "RemoveAssigneesFromAssignableInput": {
            "assignableId": [
                472
            ],
            "assigneeIds": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveAssigneesFromAssignablePayload": {
            "assignable": [
                59
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveEnterpriseAdminInput": {
            "enterpriseId": [
                472
            ],
            "login": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveEnterpriseAdminPayload": {
            "admin": [
                1333
            ],
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "message": [
                1129
            ],
            "viewer": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveEnterpriseIdentityProviderInput": {
            "enterpriseId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveEnterpriseIdentityProviderPayload": {
            "clientMutationId": [
                1129
            ],
            "identityProvider": [
                376
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveEnterpriseOrganizationInput": {
            "enterpriseId": [
                472
            ],
            "organizationId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveEnterpriseOrganizationPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "organization": [
                639
            ],
            "viewer": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveEnterpriseSupportEntitlementInput": {
            "enterpriseId": [
                472
            ],
            "login": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveEnterpriseSupportEntitlementPayload": {
            "clientMutationId": [
                1129
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveLabelsFromLabelableInput": {
            "labelableId": [
                472
            ],
            "labelIds": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveLabelsFromLabelablePayload": {
            "clientMutationId": [
                1129
            ],
            "labelable": [
                515
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveOutsideCollaboratorInput": {
            "userId": [
                472
            ],
            "organizationId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveOutsideCollaboratorPayload": {
            "clientMutationId": [
                1129
            ],
            "removedUser": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveReactionInput": {
            "subjectId": [
                472
            ],
            "content": [
                864
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveReactionPayload": {
            "clientMutationId": [
                1129
            ],
            "reaction": [
                862
            ],
            "subject": [
                859
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveStarInput": {
            "starrableId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveStarPayload": {
            "clientMutationId": [
                1129
            ],
            "starrable": [
                1116
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveUpvoteInput": {
            "subjectId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RemoveUpvotePayload": {
            "clientMutationId": [
                1129
            ],
            "subject": [
                1356
            ],
            "__typename": [
                1129
            ]
        },
        "RemovedFromProjectEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "__typename": [
                1129
            ]
        },
        "RenamedTitleEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "currentTitle": [
                1129
            ],
            "id": [
                472
            ],
            "previousTitle": [
                1129
            ],
            "subject": [
                917
            ],
            "__typename": [
                1129
            ]
        },
        "RenamedTitleSubject": {
            "on_Issue": [
                485
            ],
            "on_PullRequest": [
                812
            ],
            "on_Node": [
                588
            ],
            "on_Assignable": [
                59
            ],
            "on_Closable": [
                142
            ],
            "on_Comment": [
                151
            ],
            "on_Updatable": [
                1223
            ],
            "on_UpdatableComment": [
                1224
            ],
            "on_Labelable": [
                515
            ],
            "on_Lockable": [
                536
            ],
            "on_Reactable": [
                859
            ],
            "on_RepositoryNode": [
                980
            ],
            "on_Subscribable": [
                1135
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "__typename": [
                1129
            ]
        },
        "ReopenIssueInput": {
            "issueId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ReopenIssuePayload": {
            "clientMutationId": [
                1129
            ],
            "issue": [
                485
            ],
            "__typename": [
                1129
            ]
        },
        "ReopenPullRequestInput": {
            "pullRequestId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ReopenPullRequestPayload": {
            "clientMutationId": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "ReopenedEvent": {
            "actor": [
                6
            ],
            "closable": [
                142
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "stateReason": [
                500
            ],
            "__typename": [
                1129
            ]
        },
        "RepoAccessAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "visibility": [
                924
            ],
            "__typename": [
                1129
            ]
        },
        "RepoAccessAuditEntryVisibility": {},
        "RepoAddMemberAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "visibility": [
                926
            ],
            "__typename": [
                1129
            ]
        },
        "RepoAddMemberAuditEntryVisibility": {},
        "RepoAddTopicAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "topic": [
                1175
            ],
            "topicName": [
                1129
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepoArchivedAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "visibility": [
                929
            ],
            "__typename": [
                1129
            ]
        },
        "RepoArchivedAuditEntryVisibility": {},
        "RepoChangeMergeSettingAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "isEnabled": [
                80
            ],
            "mergeType": [
                931
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepoChangeMergeSettingAuditEntryMergeType": {},
        "RepoConfigDisableAnonymousGitAccessAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepoConfigDisableCollaboratorsOnlyAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepoConfigDisableContributorsOnlyAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepoConfigDisableSockpuppetDisallowedAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepoConfigEnableAnonymousGitAccessAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepoConfigEnableCollaboratorsOnlyAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepoConfigEnableContributorsOnlyAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepoConfigEnableSockpuppetDisallowedAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepoConfigLockAnonymousGitAccessAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepoConfigUnlockAnonymousGitAccessAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepoCreateAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "forkParentName": [
                1129
            ],
            "forkSourceName": [
                1129
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "visibility": [
                943
            ],
            "__typename": [
                1129
            ]
        },
        "RepoCreateAuditEntryVisibility": {},
        "RepoDestroyAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "visibility": [
                945
            ],
            "__typename": [
                1129
            ]
        },
        "RepoDestroyAuditEntryVisibility": {},
        "RepoRemoveMemberAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "visibility": [
                947
            ],
            "__typename": [
                1129
            ]
        },
        "RepoRemoveMemberAuditEntryVisibility": {},
        "RepoRemoveTopicAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "topic": [
                1175
            ],
            "topicName": [
                1129
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "ReportedContentClassifiers": {},
        "Repository": {
            "allowUpdateBranch": [
                80
            ],
            "assignableUsers": [
                1336,
                {
                    "query": [
                        1129
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "autoMergeAllowed": [
                80
            ],
            "branchProtectionRules": [
                87,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "codeOfConduct": [
                149
            ],
            "codeowners": [
                953,
                {
                    "refName": [
                        1129
                    ]
                }
            ],
            "collaborators": [
                955,
                {
                    "affiliation": [
                        150
                    ],
                    "query": [
                        1129
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "commitComments": [
                158,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "contactLinks": [
                958
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "defaultBranchRef": [
                873
            ],
            "deleteBranchOnMerge": [
                80
            ],
            "deployKeys": [
                302,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "deployments": [
                306,
                {
                    "environments": [
                        1129,
                        "[String!]"
                    ],
                    "orderBy": [
                        309
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "description": [
                1129
            ],
            "descriptionHTML": [
                466
            ],
            "discussion": [
                334,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "discussionCategories": [
                336,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "filterByAssignable": [
                        80
                    ]
                }
            ],
            "discussionCategory": [
                335,
                {
                    "slug": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "discussions": [
                341,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "categoryId": [
                        472
                    ],
                    "orderBy": [
                        343
                    ]
                }
            ],
            "diskUsage": [
                474
            ],
            "environment": [
                418,
                {
                    "name": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "environments": [
                419,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "forkCount": [
                474
            ],
            "forkingAllowed": [
                80
            ],
            "forks": [
                957,
                {
                    "privacy": [
                        985
                    ],
                    "orderBy": [
                        981
                    ],
                    "affiliations": [
                        951,
                        "[RepositoryAffiliation]"
                    ],
                    "ownerAffiliations": [
                        951,
                        "[RepositoryAffiliation]"
                    ],
                    "isLocked": [
                        80
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "fundingLinks": [
                438
            ],
            "hasDiscussionsEnabled": [
                80
            ],
            "hasIssuesEnabled": [
                80
            ],
            "hasProjectsEnabled": [
                80
            ],
            "hasWikiEnabled": [
                80
            ],
            "homepageUrl": [
                1186
            ],
            "id": [
                472
            ],
            "interactionAbility": [
                964
            ],
            "isArchived": [
                80
            ],
            "isBlankIssuesEnabled": [
                80
            ],
            "isDisabled": [
                80
            ],
            "isEmpty": [
                80
            ],
            "isFork": [
                80
            ],
            "isInOrganization": [
                80
            ],
            "isLocked": [
                80
            ],
            "isMirror": [
                80
            ],
            "isPrivate": [
                80
            ],
            "isSecurityPolicyEnabled": [
                80
            ],
            "isTemplate": [
                80
            ],
            "isUserConfigurationRepository": [
                80
            ],
            "issue": [
                485,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "issueOrPullRequest": [
                496,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "issueTemplates": [
                501
            ],
            "issues": [
                492,
                {
                    "orderBy": [
                        497
                    ],
                    "labels": [
                        1129,
                        "[String!]"
                    ],
                    "states": [
                        499,
                        "[IssueState!]"
                    ],
                    "filterBy": [
                        495
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "label": [
                510,
                {
                    "name": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "labels": [
                511,
                {
                    "orderBy": [
                        513
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "query": [
                        1129
                    ]
                }
            ],
            "languages": [
                518,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        520
                    ]
                }
            ],
            "latestRelease": [
                887
            ],
            "licenseInfo": [
                522
            ],
            "lockReason": [
                973
            ],
            "mentionableUsers": [
                1336,
                {
                    "query": [
                        1129
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "mergeCommitAllowed": [
                80
            ],
            "mergeCommitMessage": [
                561
            ],
            "mergeCommitTitle": [
                562
            ],
            "milestone": [
                571,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "milestones": [
                572,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "states": [
                        577,
                        "[MilestoneState!]"
                    ],
                    "orderBy": [
                        575
                    ],
                    "query": [
                        1129
                    ]
                }
            ],
            "mirrorUrl": [
                1186
            ],
            "name": [
                1129
            ],
            "nameWithOwner": [
                1129
            ],
            "object": [
                455,
                {
                    "oid": [
                        456
                    ],
                    "expression": [
                        1129
                    ]
                }
            ],
            "openGraphImageUrl": [
                1186
            ],
            "owner": [
                983
            ],
            "packages": [
                664,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "names": [
                        1129,
                        "[String]"
                    ],
                    "repositoryId": [
                        472
                    ],
                    "packageType": [
                        676
                    ],
                    "orderBy": [
                        671
                    ]
                }
            ],
            "parent": [
                950
            ],
            "pinnedDiscussions": [
                694,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "pinnedIssues": [
                700,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "primaryLanguage": [
                517
            ],
            "project": [
                707,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projectNext": [
                721,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projectV2": [
                744,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projects": [
                718,
                {
                    "orderBy": [
                        738
                    ],
                    "search": [
                        1129
                    ],
                    "states": [
                        742,
                        "[ProjectState!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "projectsNext": [
                722,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "query": [
                        1129
                    ],
                    "sortBy": [
                        736
                    ]
                }
            ],
            "projectsResourcePath": [
                1186
            ],
            "projectsUrl": [
                1186
            ],
            "projectsV2": [
                745,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "query": [
                        1129
                    ],
                    "orderBy": [
                        786
                    ]
                }
            ],
            "pullRequest": [
                812,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "pullRequestTemplates": [
                842
            ],
            "pullRequests": [
                820,
                {
                    "states": [
                        841,
                        "[PullRequestState!]"
                    ],
                    "labels": [
                        1129,
                        "[String!]"
                    ],
                    "headRefName": [
                        1129
                    ],
                    "baseRefName": [
                        1129
                    ],
                    "orderBy": [
                        497
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "pushedAt": [
                252
            ],
            "rebaseMergeAllowed": [
                80
            ],
            "recentProjects": [
                745,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "ref": [
                873,
                {
                    "qualifiedName": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "refs": [
                874,
                {
                    "query": [
                        1129
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "refPrefix": [
                        1129,
                        "String!"
                    ],
                    "direction": [
                        596
                    ],
                    "orderBy": [
                        876
                    ]
                }
            ],
            "release": [
                887,
                {
                    "tagName": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "releases": [
                891,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        893
                    ]
                }
            ],
            "repositoryTopics": [
                987,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "resourcePath": [
                1186
            ],
            "securityPolicyUrl": [
                1186
            ],
            "shortDescriptionHTML": [
                466,
                {
                    "limit": [
                        474
                    ]
                }
            ],
            "squashMergeAllowed": [
                80
            ],
            "squashMergeCommitMessage": [
                1109
            ],
            "squashMergeCommitTitle": [
                1110
            ],
            "squashPrTitleUsedAsDefault": [
                80
            ],
            "sshUrl": [
                457
            ],
            "stargazerCount": [
                474
            ],
            "stargazers": [
                1114,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1112
                    ]
                }
            ],
            "submodules": [
                1133,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "tempCloneToken": [
                1129
            ],
            "templateRepository": [
                950
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "usesCustomOpenGraphImage": [
                80
            ],
            "viewerCanAdminister": [
                80
            ],
            "viewerCanCreateProjects": [
                80
            ],
            "viewerCanSubscribe": [
                80
            ],
            "viewerCanUpdateTopics": [
                80
            ],
            "viewerDefaultCommitEmail": [
                1129
            ],
            "viewerDefaultMergeMethod": [
                823
            ],
            "viewerHasStarred": [
                80
            ],
            "viewerPermission": [
                984
            ],
            "viewerPossibleCommitEmails": [
                1129
            ],
            "viewerSubscription": [
                1137
            ],
            "visibility": [
                989
            ],
            "vulnerabilityAlerts": [
                993,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "states": [
                        996,
                        "[RepositoryVulnerabilityAlertState!]"
                    ],
                    "dependencyScopes": [
                        994,
                        "[RepositoryVulnerabilityAlertDependencyScope!]"
                    ]
                }
            ],
            "watchers": [
                1336,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "webCommitSignoffRequired": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryAffiliation": {},
        "RepositoryAuditEntryData": {
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "on_OrgRestoreMemberMembershipRepositoryAuditEntryData": [
                629
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                703
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                704
            ],
            "on_RepoAccessAuditEntry": [
                923
            ],
            "on_RepoAddMemberAuditEntry": [
                925
            ],
            "on_RepoAddTopicAuditEntry": [
                927
            ],
            "on_RepoArchivedAuditEntry": [
                928
            ],
            "on_RepoChangeMergeSettingAuditEntry": [
                930
            ],
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": [
                932
            ],
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": [
                933
            ],
            "on_RepoConfigDisableContributorsOnlyAuditEntry": [
                934
            ],
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": [
                935
            ],
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": [
                936
            ],
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": [
                937
            ],
            "on_RepoConfigEnableContributorsOnlyAuditEntry": [
                938
            ],
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": [
                939
            ],
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": [
                940
            ],
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": [
                941
            ],
            "on_RepoCreateAuditEntry": [
                942
            ],
            "on_RepoDestroyAuditEntry": [
                944
            ],
            "on_RepoRemoveMemberAuditEntry": [
                946
            ],
            "on_RepoRemoveTopicAuditEntry": [
                948
            ],
            "on_TeamAddRepositoryAuditEntry": [
                1142
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                1167
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryCodeowners": {
            "errors": [
                954
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryCodeownersError": {
            "column": [
                474
            ],
            "kind": [
                1129
            ],
            "line": [
                474
            ],
            "message": [
                1129
            ],
            "path": [
                1129
            ],
            "source": [
                1129
            ],
            "suggestion": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryCollaboratorConnection": {
            "edges": [
                956
            ],
            "nodes": [
                1333
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryCollaboratorEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1333
            ],
            "permission": [
                984
            ],
            "permissionSources": [
                686
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryConnection": {
            "edges": [
                962
            ],
            "nodes": [
                950
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "totalDiskUsage": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryContactLink": {
            "about": [
                1129
            ],
            "name": [
                1129
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryContributionType": {},
        "RepositoryDiscussionAuthor": {
            "repositoryDiscussions": [
                341,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        343
                    ],
                    "repositoryId": [
                        472
                    ],
                    "answered": [
                        80
                    ]
                }
            ],
            "on_Organization": [
                639
            ],
            "on_User": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryDiscussionCommentAuthor": {
            "repositoryDiscussionComments": [
                339,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "repositoryId": [
                        472
                    ],
                    "onlyAnswers": [
                        80
                    ]
                }
            ],
            "on_Organization": [
                639
            ],
            "on_User": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryEdge": {
            "cursor": [
                1129
            ],
            "node": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryInfo": {
            "createdAt": [
                252
            ],
            "description": [
                1129
            ],
            "descriptionHTML": [
                466
            ],
            "forkCount": [
                474
            ],
            "hasDiscussionsEnabled": [
                80
            ],
            "hasIssuesEnabled": [
                80
            ],
            "hasProjectsEnabled": [
                80
            ],
            "hasWikiEnabled": [
                80
            ],
            "homepageUrl": [
                1186
            ],
            "isArchived": [
                80
            ],
            "isFork": [
                80
            ],
            "isInOrganization": [
                80
            ],
            "isLocked": [
                80
            ],
            "isMirror": [
                80
            ],
            "isPrivate": [
                80
            ],
            "isTemplate": [
                80
            ],
            "licenseInfo": [
                522
            ],
            "lockReason": [
                973
            ],
            "mirrorUrl": [
                1186
            ],
            "name": [
                1129
            ],
            "nameWithOwner": [
                1129
            ],
            "openGraphImageUrl": [
                1186
            ],
            "owner": [
                983
            ],
            "pushedAt": [
                252
            ],
            "resourcePath": [
                1186
            ],
            "shortDescriptionHTML": [
                466,
                {
                    "limit": [
                        474
                    ]
                }
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "usesCustomOpenGraphImage": [
                80
            ],
            "visibility": [
                989
            ],
            "on_Repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryInteractionAbility": {
            "expiresAt": [
                252
            ],
            "limit": [
                965
            ],
            "origin": [
                967
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryInteractionLimit": {},
        "RepositoryInteractionLimitExpiry": {},
        "RepositoryInteractionLimitOrigin": {},
        "RepositoryInvitation": {
            "email": [
                1129
            ],
            "id": [
                472
            ],
            "invitee": [
                1333
            ],
            "inviter": [
                1333
            ],
            "permalink": [
                1186
            ],
            "permission": [
                984
            ],
            "repository": [
                963
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryInvitationConnection": {
            "edges": [
                970
            ],
            "nodes": [
                968
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryInvitationEdge": {
            "cursor": [
                1129
            ],
            "node": [
                968
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryInvitationOrder": {
            "field": [
                972
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryInvitationOrderField": {},
        "RepositoryLockReason": {},
        "RepositoryMigration": {
            "continueOnError": [
                80
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                1129
            ],
            "failureReason": [
                1129
            ],
            "id": [
                472
            ],
            "migrationLogUrl": [
                1186
            ],
            "migrationSource": [
                568
            ],
            "repositoryName": [
                1129
            ],
            "sourceUrl": [
                1186
            ],
            "state": [
                570
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryMigrationConnection": {
            "edges": [
                976
            ],
            "nodes": [
                974
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryMigrationEdge": {
            "cursor": [
                1129
            ],
            "node": [
                974
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryMigrationOrder": {
            "field": [
                979
            ],
            "direction": [
                978
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryMigrationOrderDirection": {},
        "RepositoryMigrationOrderField": {},
        "RepositoryNode": {
            "repository": [
                950
            ],
            "on_CommitComment": [
                157
            ],
            "on_CommitCommentThread": [
                160
            ],
            "on_DependabotUpdate": [
                298
            ],
            "on_Discussion": [
                334
            ],
            "on_DiscussionCategory": [
                335
            ],
            "on_Issue": [
                485
            ],
            "on_IssueComment": [
                487
            ],
            "on_PinnedDiscussion": [
                693
            ],
            "on_PullRequest": [
                812
            ],
            "on_PullRequestCommitCommentThread": [
                817
            ],
            "on_PullRequestReview": [
                826
            ],
            "on_PullRequestReviewComment": [
                827
            ],
            "on_RepositoryVulnerabilityAlert": [
                992
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryOrder": {
            "field": [
                982
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryOrderField": {},
        "RepositoryOwner": {
            "avatarUrl": [
                1186,
                {
                    "size": [
                        474
                    ]
                }
            ],
            "id": [
                472
            ],
            "login": [
                1129
            ],
            "repositories": [
                957,
                {
                    "privacy": [
                        985
                    ],
                    "orderBy": [
                        981
                    ],
                    "affiliations": [
                        951,
                        "[RepositoryAffiliation]"
                    ],
                    "ownerAffiliations": [
                        951,
                        "[RepositoryAffiliation]"
                    ],
                    "isLocked": [
                        80
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "isFork": [
                        80
                    ]
                }
            ],
            "repository": [
                950,
                {
                    "name": [
                        1129,
                        "String!"
                    ],
                    "followRenames": [
                        80
                    ]
                }
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "on_Organization": [
                639
            ],
            "on_User": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryPermission": {},
        "RepositoryPrivacy": {},
        "RepositoryTopic": {
            "id": [
                472
            ],
            "resourcePath": [
                1186
            ],
            "topic": [
                1175
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryTopicConnection": {
            "edges": [
                988
            ],
            "nodes": [
                986
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryTopicEdge": {
            "cursor": [
                1129
            ],
            "node": [
                986
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryVisibility": {},
        "RepositoryVisibilityChangeDisableAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "enterpriseResourcePath": [
                1186
            ],
            "enterpriseSlug": [
                1129
            ],
            "enterpriseUrl": [
                1186
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryVisibilityChangeEnableAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "enterpriseResourcePath": [
                1186
            ],
            "enterpriseSlug": [
                1129
            ],
            "enterpriseUrl": [
                1186
            ],
            "id": [
                472
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryVulnerabilityAlert": {
            "createdAt": [
                252
            ],
            "dependabotUpdate": [
                298
            ],
            "dependencyScope": [
                994
            ],
            "dismissComment": [
                1129
            ],
            "dismissReason": [
                1129
            ],
            "dismissedAt": [
                252
            ],
            "dismisser": [
                1333
            ],
            "fixReason": [
                1129
            ],
            "fixedAt": [
                252
            ],
            "id": [
                472
            ],
            "number": [
                474
            ],
            "repository": [
                950
            ],
            "securityAdvisory": [
                1038
            ],
            "securityVulnerability": [
                1052
            ],
            "state": [
                996
            ],
            "vulnerableManifestFilename": [
                1129
            ],
            "vulnerableManifestPath": [
                1129
            ],
            "vulnerableRequirements": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryVulnerabilityAlertConnection": {
            "edges": [
                995
            ],
            "nodes": [
                992
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryVulnerabilityAlertDependencyScope": {},
        "RepositoryVulnerabilityAlertEdge": {
            "cursor": [
                1129
            ],
            "node": [
                992
            ],
            "__typename": [
                1129
            ]
        },
        "RepositoryVulnerabilityAlertState": {},
        "RequestReviewsInput": {
            "pullRequestId": [
                472
            ],
            "userIds": [
                472
            ],
            "teamIds": [
                472
            ],
            "union": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RequestReviewsPayload": {
            "actor": [
                6
            ],
            "clientMutationId": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "requestedReviewersEdge": [
                1340
            ],
            "__typename": [
                1129
            ]
        },
        "RequestableCheckStatusState": {},
        "RequestedReviewer": {
            "on_Mannequin": [
                538
            ],
            "on_Team": [
                1140
            ],
            "on_User": [
                1333
            ],
            "on_Node": [
                588
            ],
            "on_Actor": [
                6
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_Subscribable": [
                1135
            ],
            "on_MemberStatusable": [
                554
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "RequestedReviewerConnection": {
            "edges": [
                1002
            ],
            "nodes": [
                1000
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "RequestedReviewerEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1000
            ],
            "__typename": [
                1129
            ]
        },
        "RequirableByPullRequest": {
            "isRequired": [
                80,
                {
                    "pullRequestId": [
                        472
                    ],
                    "pullRequestNumber": [
                        474
                    ]
                }
            ],
            "on_CheckRun": [
                114
            ],
            "on_StatusContext": [
                1126
            ],
            "__typename": [
                1129
            ]
        },
        "RequiredStatusCheckDescription": {
            "app": [
                50
            ],
            "context": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RequiredStatusCheckInput": {
            "context": [
                1129
            ],
            "appId": [
                472
            ],
            "__typename": [
                1129
            ]
        },
        "RerequestCheckSuiteInput": {
            "repositoryId": [
                472
            ],
            "checkSuiteId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RerequestCheckSuitePayload": {
            "checkSuite": [
                128
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ResolveReviewThreadInput": {
            "threadId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "ResolveReviewThreadPayload": {
            "clientMutationId": [
                1129
            ],
            "thread": [
                837
            ],
            "__typename": [
                1129
            ]
        },
        "RestrictedContribution": {
            "isRestricted": [
                80
            ],
            "occurredAt": [
                252
            ],
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "ReviewDismissalAllowance": {
            "actor": [
                1012
            ],
            "branchProtectionRule": [
                83
            ],
            "id": [
                472
            ],
            "__typename": [
                1129
            ]
        },
        "ReviewDismissalAllowanceActor": {
            "on_App": [
                50
            ],
            "on_Team": [
                1140
            ],
            "on_User": [
                1333
            ],
            "on_Node": [
                588
            ],
            "on_Subscribable": [
                1135
            ],
            "on_MemberStatusable": [
                554
            ],
            "on_Actor": [
                6
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "ReviewDismissalAllowanceConnection": {
            "edges": [
                1014
            ],
            "nodes": [
                1011
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ReviewDismissalAllowanceEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1011
            ],
            "__typename": [
                1129
            ]
        },
        "ReviewDismissedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "dismissalMessage": [
                1129
            ],
            "dismissalMessageHTML": [
                1129
            ],
            "id": [
                472
            ],
            "previousReviewState": [
                836
            ],
            "pullRequest": [
                812
            ],
            "pullRequestCommit": [
                816
            ],
            "resourcePath": [
                1186
            ],
            "review": [
                826
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "ReviewRequest": {
            "asCodeOwner": [
                80
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "requestedReviewer": [
                1000
            ],
            "__typename": [
                1129
            ]
        },
        "ReviewRequestConnection": {
            "edges": [
                1018
            ],
            "nodes": [
                1016
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "ReviewRequestEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1016
            ],
            "__typename": [
                1129
            ]
        },
        "ReviewRequestRemovedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "requestedReviewer": [
                1000
            ],
            "__typename": [
                1129
            ]
        },
        "ReviewRequestedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "pullRequest": [
                812
            ],
            "requestedReviewer": [
                1000
            ],
            "__typename": [
                1129
            ]
        },
        "ReviewStatusHovercardContext": {
            "message": [
                1129
            ],
            "octicon": [
                1129
            ],
            "reviewDecision": [
                833
            ],
            "__typename": [
                1129
            ]
        },
        "RevokeEnterpriseOrganizationsMigratorRoleInput": {
            "enterpriseId": [
                472
            ],
            "login": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RevokeEnterpriseOrganizationsMigratorRolePayload": {
            "clientMutationId": [
                1129
            ],
            "organizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "RevokeMigratorRoleInput": {
            "organizationId": [
                472
            ],
            "actor": [
                1129
            ],
            "actorType": [
                8
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "RevokeMigratorRolePayload": {
            "clientMutationId": [
                1129
            ],
            "success": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "RoleInOrganization": {},
        "SamlDigestAlgorithm": {},
        "SamlSignatureAlgorithm": {},
        "SavedReply": {
            "body": [
                1129
            ],
            "bodyHTML": [
                466
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "title": [
                1129
            ],
            "user": [
                6
            ],
            "__typename": [
                1129
            ]
        },
        "SavedReplyConnection": {
            "edges": [
                1031
            ],
            "nodes": [
                1029
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "SavedReplyEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1029
            ],
            "__typename": [
                1129
            ]
        },
        "SavedReplyOrder": {
            "field": [
                1033
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "SavedReplyOrderField": {},
        "SearchResultItem": {
            "on_App": [
                50
            ],
            "on_Discussion": [
                334
            ],
            "on_Issue": [
                485
            ],
            "on_MarketplaceListing": [
                551
            ],
            "on_Organization": [
                639
            ],
            "on_PullRequest": [
                812
            ],
            "on_Repository": [
                950
            ],
            "on_User": [
                1333
            ],
            "on_Node": [
                588
            ],
            "on_Comment": [
                151
            ],
            "on_Updatable": [
                1223
            ],
            "on_Deletable": [
                256
            ],
            "on_Labelable": [
                515
            ],
            "on_Lockable": [
                536
            ],
            "on_RepositoryNode": [
                980
            ],
            "on_Subscribable": [
                1135
            ],
            "on_Reactable": [
                859
            ],
            "on_Votable": [
                1356
            ],
            "on_Assignable": [
                59
            ],
            "on_Closable": [
                142
            ],
            "on_UpdatableComment": [
                1224
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_Actor": [
                6
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_MemberStatusable": [
                554
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "on_Starrable": [
                1116
            ],
            "on_RepositoryInfo": [
                963
            ],
            "__typename": [
                1129
            ]
        },
        "SearchResultItemConnection": {
            "codeCount": [
                474
            ],
            "discussionCount": [
                474
            ],
            "edges": [
                1036
            ],
            "issueCount": [
                474
            ],
            "nodes": [
                1034
            ],
            "pageInfo": [
                683
            ],
            "repositoryCount": [
                474
            ],
            "userCount": [
                474
            ],
            "wikiCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "SearchResultItemEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1034
            ],
            "textMatches": [
                1173
            ],
            "__typename": [
                1129
            ]
        },
        "SearchType": {},
        "SecurityAdvisory": {
            "classification": [
                1039
            ],
            "cvss": [
                95
            ],
            "cwes": [
                97,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "databaseId": [
                474
            ],
            "description": [
                1129
            ],
            "ghsaId": [
                1129
            ],
            "id": [
                472
            ],
            "identifiers": [
                1043
            ],
            "notificationsPermalink": [
                1186
            ],
            "origin": [
                1129
            ],
            "permalink": [
                1186
            ],
            "publishedAt": [
                252
            ],
            "references": [
                1050
            ],
            "severity": [
                1051
            ],
            "summary": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "vulnerabilities": [
                1053,
                {
                    "orderBy": [
                        1055
                    ],
                    "ecosystem": [
                        1041
                    ],
                    "package": [
                        1129
                    ],
                    "severities": [
                        1051,
                        "[SecurityAdvisorySeverity!]"
                    ],
                    "classifications": [
                        1039,
                        "[SecurityAdvisoryClassification!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "withdrawnAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "SecurityAdvisoryClassification": {},
        "SecurityAdvisoryConnection": {
            "edges": [
                1042
            ],
            "nodes": [
                1038
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "SecurityAdvisoryEcosystem": {},
        "SecurityAdvisoryEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1038
            ],
            "__typename": [
                1129
            ]
        },
        "SecurityAdvisoryIdentifier": {
            "type": [
                1129
            ],
            "value": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "SecurityAdvisoryIdentifierFilter": {
            "type": [
                1045
            ],
            "value": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "SecurityAdvisoryIdentifierType": {},
        "SecurityAdvisoryOrder": {
            "field": [
                1047
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "SecurityAdvisoryOrderField": {},
        "SecurityAdvisoryPackage": {
            "ecosystem": [
                1041
            ],
            "name": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "SecurityAdvisoryPackageVersion": {
            "identifier": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "SecurityAdvisoryReference": {
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "SecurityAdvisorySeverity": {},
        "SecurityVulnerability": {
            "advisory": [
                1038
            ],
            "firstPatchedVersion": [
                1049
            ],
            "package": [
                1048
            ],
            "severity": [
                1051
            ],
            "updatedAt": [
                252
            ],
            "vulnerableVersionRange": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "SecurityVulnerabilityConnection": {
            "edges": [
                1054
            ],
            "nodes": [
                1052
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "SecurityVulnerabilityEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1052
            ],
            "__typename": [
                1129
            ]
        },
        "SecurityVulnerabilityOrder": {
            "field": [
                1056
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "SecurityVulnerabilityOrderField": {},
        "SetEnterpriseIdentityProviderInput": {
            "enterpriseId": [
                472
            ],
            "ssoUrl": [
                1186
            ],
            "issuer": [
                1129
            ],
            "idpCertificate": [
                1129
            ],
            "signatureMethod": [
                1028
            ],
            "digestMethod": [
                1027
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "SetEnterpriseIdentityProviderPayload": {
            "clientMutationId": [
                1129
            ],
            "identityProvider": [
                376
            ],
            "__typename": [
                1129
            ]
        },
        "SetOrganizationInteractionLimitInput": {
            "organizationId": [
                472
            ],
            "limit": [
                965
            ],
            "expiry": [
                966
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "SetOrganizationInteractionLimitPayload": {
            "clientMutationId": [
                1129
            ],
            "organization": [
                639
            ],
            "__typename": [
                1129
            ]
        },
        "SetRepositoryInteractionLimitInput": {
            "repositoryId": [
                472
            ],
            "limit": [
                965
            ],
            "expiry": [
                966
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "SetRepositoryInteractionLimitPayload": {
            "clientMutationId": [
                1129
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "SetUserInteractionLimitInput": {
            "userId": [
                472
            ],
            "limit": [
                965
            ],
            "expiry": [
                966
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "SetUserInteractionLimitPayload": {
            "clientMutationId": [
                1129
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "SmimeSignature": {
            "email": [
                1129
            ],
            "isValid": [
                80
            ],
            "payload": [
                1129
            ],
            "signature": [
                1129
            ],
            "signer": [
                1333
            ],
            "state": [
                459
            ],
            "wasSignedByGitHub": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "SortBy": {
            "direction": [
                596
            ],
            "field": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "Sponsor": {
            "on_Organization": [
                639
            ],
            "on_User": [
                1333
            ],
            "on_Node": [
                588
            ],
            "on_Actor": [
                6
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_MemberStatusable": [
                554
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorConnection": {
            "edges": [
                1069
            ],
            "nodes": [
                1067
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1067
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorOrder": {
            "field": [
                1071
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorOrderField": {},
        "Sponsorable": {
            "estimatedNextSponsorsPayoutInCents": [
                474
            ],
            "hasSponsorsListing": [
                80
            ],
            "isSponsoredBy": [
                80,
                {
                    "accountLogin": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "isSponsoringViewer": [
                80
            ],
            "monthlyEstimatedSponsorsIncomeInCents": [
                474
            ],
            "sponsoring": [
                1068,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1070
                    ]
                }
            ],
            "sponsors": [
                1068,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "tierId": [
                        472
                    ],
                    "orderBy": [
                        1070
                    ]
                }
            ],
            "sponsorsActivities": [
                1080,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "period": [
                        1084
                    ],
                    "since": [
                        252
                    ],
                    "until": [
                        252
                    ],
                    "orderBy": [
                        1082
                    ],
                    "actions": [
                        1079,
                        "[SponsorsActivityAction!]"
                    ],
                    "includeAsSponsor": [
                        80
                    ]
                }
            ],
            "sponsorsListing": [
                1088
            ],
            "sponsorshipForViewerAsSponsor": [
                1098
            ],
            "sponsorshipForViewerAsSponsorable": [
                1098
            ],
            "sponsorshipNewsletters": [
                1102,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1104
                    ]
                }
            ],
            "sponsorshipsAsMaintainer": [
                1099,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "includePrivate": [
                        80
                    ],
                    "orderBy": [
                        1106
                    ]
                }
            ],
            "sponsorshipsAsSponsor": [
                1099,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1106
                    ],
                    "maintainerLogins": [
                        1129,
                        "[String!]"
                    ]
                }
            ],
            "viewerCanSponsor": [
                80
            ],
            "viewerIsSponsoring": [
                80
            ],
            "on_Organization": [
                639
            ],
            "on_User": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorableItem": {
            "on_Organization": [
                639
            ],
            "on_User": [
                1333
            ],
            "on_Node": [
                588
            ],
            "on_Actor": [
                6
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_MemberStatusable": [
                554
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorableItemConnection": {
            "edges": [
                1075
            ],
            "nodes": [
                1073
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorableItemEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1073
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorableOrder": {
            "field": [
                1077
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorableOrderField": {},
        "SponsorsActivity": {
            "action": [
                1079
            ],
            "id": [
                472
            ],
            "previousSponsorsTier": [
                1092
            ],
            "sponsor": [
                1067
            ],
            "sponsorable": [
                1072
            ],
            "sponsorsTier": [
                1092
            ],
            "timestamp": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorsActivityAction": {},
        "SponsorsActivityConnection": {
            "edges": [
                1081
            ],
            "nodes": [
                1078
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorsActivityEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1078
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorsActivityOrder": {
            "field": [
                1083
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorsActivityOrderField": {},
        "SponsorsActivityPeriod": {},
        "SponsorsCountryOrRegionCode": {},
        "SponsorsGoal": {
            "description": [
                1129
            ],
            "kind": [
                1087
            ],
            "percentComplete": [
                474
            ],
            "targetValue": [
                474
            ],
            "title": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorsGoalKind": {},
        "SponsorsListing": {
            "activeGoal": [
                1086
            ],
            "billingCountryOrRegion": [
                1129
            ],
            "contactEmailAddress": [
                1129
            ],
            "createdAt": [
                252
            ],
            "dashboardResourcePath": [
                1186
            ],
            "dashboardUrl": [
                1186
            ],
            "featuredItems": [
                1090,
                {
                    "featureableTypes": [
                        1091,
                        "[SponsorsListingFeaturedItemFeatureableType!]"
                    ]
                }
            ],
            "fiscalHost": [
                639
            ],
            "fullDescription": [
                1129
            ],
            "fullDescriptionHTML": [
                466
            ],
            "id": [
                472
            ],
            "isPublic": [
                80
            ],
            "name": [
                1129
            ],
            "nextPayoutDate": [
                251
            ],
            "residenceCountryOrRegion": [
                1129
            ],
            "resourcePath": [
                1186
            ],
            "shortDescription": [
                1129
            ],
            "slug": [
                1129
            ],
            "sponsorable": [
                1072
            ],
            "tiers": [
                1094,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1096
                    ]
                }
            ],
            "url": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorsListingFeatureableItem": {
            "on_Repository": [
                950
            ],
            "on_User": [
                1333
            ],
            "on_Node": [
                588
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_PackageOwner": [
                673
            ],
            "on_Subscribable": [
                1135
            ],
            "on_Starrable": [
                1116
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_RepositoryInfo": [
                963
            ],
            "on_Actor": [
                6
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorsListingFeaturedItem": {
            "createdAt": [
                252
            ],
            "description": [
                1129
            ],
            "featureable": [
                1089
            ],
            "id": [
                472
            ],
            "position": [
                474
            ],
            "sponsorsListing": [
                1088
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorsListingFeaturedItemFeatureableType": {},
        "SponsorsTier": {
            "adminInfo": [
                1093
            ],
            "closestLesserValueTier": [
                1092
            ],
            "createdAt": [
                252
            ],
            "description": [
                1129
            ],
            "descriptionHTML": [
                466
            ],
            "id": [
                472
            ],
            "isCustomAmount": [
                80
            ],
            "isOneTime": [
                80
            ],
            "monthlyPriceInCents": [
                474
            ],
            "monthlyPriceInDollars": [
                474
            ],
            "name": [
                1129
            ],
            "sponsorsListing": [
                1088
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorsTierAdminInfo": {
            "isDraft": [
                80
            ],
            "isPublished": [
                80
            ],
            "isRetired": [
                80
            ],
            "sponsorships": [
                1099,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "includePrivate": [
                        80
                    ],
                    "orderBy": [
                        1106
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorsTierConnection": {
            "edges": [
                1095
            ],
            "nodes": [
                1092
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorsTierEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1092
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorsTierOrder": {
            "field": [
                1097
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorsTierOrderField": {},
        "Sponsorship": {
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "isOneTimePayment": [
                80
            ],
            "isSponsorOptedIntoEmail": [
                80
            ],
            "maintainer": [
                1333
            ],
            "privacyLevel": [
                1108
            ],
            "sponsor": [
                1333
            ],
            "sponsorEntity": [
                1067
            ],
            "sponsorable": [
                1072
            ],
            "tier": [
                1092
            ],
            "tierSelectedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorshipConnection": {
            "edges": [
                1100
            ],
            "nodes": [
                1098
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "totalRecurringMonthlyPriceInCents": [
                474
            ],
            "totalRecurringMonthlyPriceInDollars": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorshipEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1098
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorshipNewsletter": {
            "body": [
                1129
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "isPublished": [
                80
            ],
            "sponsorable": [
                1072
            ],
            "subject": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorshipNewsletterConnection": {
            "edges": [
                1103
            ],
            "nodes": [
                1101
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorshipNewsletterEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1101
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorshipNewsletterOrder": {
            "field": [
                1105
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorshipNewsletterOrderField": {},
        "SponsorshipOrder": {
            "field": [
                1107
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "SponsorshipOrderField": {},
        "SponsorshipPrivacy": {},
        "SquashMergeCommitMessage": {},
        "SquashMergeCommitTitle": {},
        "SshSignature": {
            "email": [
                1129
            ],
            "isValid": [
                80
            ],
            "keyFingerprint": [
                1129
            ],
            "payload": [
                1129
            ],
            "signature": [
                1129
            ],
            "signer": [
                1333
            ],
            "state": [
                459
            ],
            "wasSignedByGitHub": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "StarOrder": {
            "field": [
                1113
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "StarOrderField": {},
        "StargazerConnection": {
            "edges": [
                1115
            ],
            "nodes": [
                1333
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "StargazerEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1333
            ],
            "starredAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "Starrable": {
            "id": [
                472
            ],
            "stargazerCount": [
                474
            ],
            "stargazers": [
                1114,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1112
                    ]
                }
            ],
            "viewerHasStarred": [
                80
            ],
            "on_Gist": [
                441
            ],
            "on_Repository": [
                950
            ],
            "on_Topic": [
                1175
            ],
            "__typename": [
                1129
            ]
        },
        "StarredRepositoryConnection": {
            "edges": [
                1118
            ],
            "isOverLimit": [
                80
            ],
            "nodes": [
                950
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "StarredRepositoryEdge": {
            "cursor": [
                1129
            ],
            "node": [
                950
            ],
            "starredAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "StartRepositoryMigrationInput": {
            "sourceId": [
                472
            ],
            "ownerId": [
                472
            ],
            "sourceRepositoryUrl": [
                1186
            ],
            "repositoryName": [
                1129
            ],
            "continueOnError": [
                80
            ],
            "gitArchiveUrl": [
                1129
            ],
            "metadataArchiveUrl": [
                1129
            ],
            "accessToken": [
                1129
            ],
            "githubPat": [
                1129
            ],
            "skipReleases": [
                80
            ],
            "targetRepoVisibility": [
                1129
            ],
            "lockSource": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "StartRepositoryMigrationPayload": {
            "clientMutationId": [
                1129
            ],
            "repositoryMigration": [
                974
            ],
            "__typename": [
                1129
            ]
        },
        "Status": {
            "combinedContexts": [
                1124,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "commit": [
                155
            ],
            "context": [
                1126,
                {
                    "name": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "contexts": [
                1126
            ],
            "id": [
                472
            ],
            "state": [
                1128
            ],
            "__typename": [
                1129
            ]
        },
        "StatusCheckRollup": {
            "commit": [
                155
            ],
            "contexts": [
                1124,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "id": [
                472
            ],
            "state": [
                1128
            ],
            "__typename": [
                1129
            ]
        },
        "StatusCheckRollupContext": {
            "on_CheckRun": [
                114
            ],
            "on_StatusContext": [
                1126
            ],
            "on_Node": [
                588
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_RequirableByPullRequest": [
                1003
            ],
            "__typename": [
                1129
            ]
        },
        "StatusCheckRollupContextConnection": {
            "checkRunCount": [
                474
            ],
            "checkRunCountsByState": [
                122
            ],
            "edges": [
                1125
            ],
            "nodes": [
                1123
            ],
            "pageInfo": [
                683
            ],
            "statusContextCount": [
                474
            ],
            "statusContextCountsByState": [
                1127
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "StatusCheckRollupContextEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1123
            ],
            "__typename": [
                1129
            ]
        },
        "StatusContext": {
            "avatarUrl": [
                1186,
                {
                    "size": [
                        474
                    ]
                }
            ],
            "commit": [
                155
            ],
            "context": [
                1129
            ],
            "createdAt": [
                252
            ],
            "creator": [
                6
            ],
            "description": [
                1129
            ],
            "id": [
                472
            ],
            "isRequired": [
                80,
                {
                    "pullRequestId": [
                        472
                    ],
                    "pullRequestNumber": [
                        474
                    ]
                }
            ],
            "state": [
                1128
            ],
            "targetUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "StatusContextStateCount": {
            "count": [
                474
            ],
            "state": [
                1128
            ],
            "__typename": [
                1129
            ]
        },
        "StatusState": {},
        "String": {},
        "SubmitPullRequestReviewInput": {
            "pullRequestId": [
                472
            ],
            "pullRequestReviewId": [
                472
            ],
            "event": [
                835
            ],
            "body": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "SubmitPullRequestReviewPayload": {
            "clientMutationId": [
                1129
            ],
            "pullRequestReview": [
                826
            ],
            "__typename": [
                1129
            ]
        },
        "Submodule": {
            "branch": [
                1129
            ],
            "gitUrl": [
                1186
            ],
            "name": [
                1129
            ],
            "nameRaw": [
                73
            ],
            "path": [
                1129
            ],
            "pathRaw": [
                73
            ],
            "subprojectCommitOid": [
                456
            ],
            "__typename": [
                1129
            ]
        },
        "SubmoduleConnection": {
            "edges": [
                1134
            ],
            "nodes": [
                1132
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "SubmoduleEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1132
            ],
            "__typename": [
                1129
            ]
        },
        "Subscribable": {
            "id": [
                472
            ],
            "viewerCanSubscribe": [
                80
            ],
            "viewerSubscription": [
                1137
            ],
            "on_Commit": [
                155
            ],
            "on_Discussion": [
                334
            ],
            "on_Issue": [
                485
            ],
            "on_PullRequest": [
                812
            ],
            "on_Repository": [
                950
            ],
            "on_Team": [
                1140
            ],
            "on_TeamDiscussion": [
                1146
            ],
            "__typename": [
                1129
            ]
        },
        "SubscribedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "subscribable": [
                1135
            ],
            "__typename": [
                1129
            ]
        },
        "SubscriptionState": {},
        "SuggestedReviewer": {
            "isAuthor": [
                80
            ],
            "isCommenter": [
                80
            ],
            "reviewer": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "Tag": {
            "abbreviatedOid": [
                1129
            ],
            "commitResourcePath": [
                1186
            ],
            "commitUrl": [
                1186
            ],
            "id": [
                472
            ],
            "message": [
                1129
            ],
            "name": [
                1129
            ],
            "oid": [
                456
            ],
            "repository": [
                950
            ],
            "tagger": [
                451
            ],
            "target": [
                455
            ],
            "__typename": [
                1129
            ]
        },
        "Team": {
            "ancestors": [
                1145,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "avatarUrl": [
                1186,
                {
                    "size": [
                        474
                    ]
                }
            ],
            "childTeams": [
                1145,
                {
                    "orderBy": [
                        1163
                    ],
                    "userLogins": [
                        1129,
                        "[String!]"
                    ],
                    "immediateOnly": [
                        80
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "combinedSlug": [
                1129
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "description": [
                1129
            ],
            "discussion": [
                1146,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "discussions": [
                1152,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "isPinned": [
                        80
                    ],
                    "orderBy": [
                        1154
                    ]
                }
            ],
            "discussionsResourcePath": [
                1186
            ],
            "discussionsUrl": [
                1186
            ],
            "editTeamResourcePath": [
                1186
            ],
            "editTeamUrl": [
                1186
            ],
            "id": [
                472
            ],
            "invitations": [
                650,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "memberStatuses": [
                1343,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1345
                    ]
                }
            ],
            "members": [
                1157,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "query": [
                        1129
                    ],
                    "membership": [
                        1162
                    ],
                    "role": [
                        1161
                    ],
                    "orderBy": [
                        1159
                    ]
                }
            ],
            "membersResourcePath": [
                1186
            ],
            "membersUrl": [
                1186
            ],
            "name": [
                1129
            ],
            "newTeamResourcePath": [
                1186
            ],
            "newTeamUrl": [
                1186
            ],
            "organization": [
                639
            ],
            "parentTeam": [
                1140
            ],
            "privacy": [
                1165
            ],
            "projectV2": [
                744,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projectsV2": [
                745,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        786
                    ],
                    "filterBy": [
                        758
                    ],
                    "query": [
                        1129
                    ]
                }
            ],
            "repositories": [
                1168,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "query": [
                        1129
                    ],
                    "orderBy": [
                        1170
                    ]
                }
            ],
            "repositoriesResourcePath": [
                1186
            ],
            "repositoriesUrl": [
                1186
            ],
            "resourcePath": [
                1186
            ],
            "slug": [
                1129
            ],
            "teamsResourcePath": [
                1186
            ],
            "teamsUrl": [
                1186
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "viewerCanAdminister": [
                80
            ],
            "viewerCanSubscribe": [
                80
            ],
            "viewerSubscription": [
                1137
            ],
            "__typename": [
                1129
            ]
        },
        "TeamAddMemberAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "isLdapMapped": [
                80
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "team": [
                1140
            ],
            "teamName": [
                1129
            ],
            "teamResourcePath": [
                1186
            ],
            "teamUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "TeamAddRepositoryAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "isLdapMapped": [
                80
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "team": [
                1140
            ],
            "teamName": [
                1129
            ],
            "teamResourcePath": [
                1186
            ],
            "teamUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "TeamAuditEntryData": {
            "team": [
                1140
            ],
            "teamName": [
                1129
            ],
            "teamResourcePath": [
                1186
            ],
            "teamUrl": [
                1186
            ],
            "on_OrgRestoreMemberMembershipTeamAuditEntryData": [
                630
            ],
            "on_TeamAddMemberAuditEntry": [
                1141
            ],
            "on_TeamAddRepositoryAuditEntry": [
                1142
            ],
            "on_TeamChangeParentTeamAuditEntry": [
                1144
            ],
            "on_TeamRemoveMemberAuditEntry": [
                1166
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                1167
            ],
            "__typename": [
                1129
            ]
        },
        "TeamChangeParentTeamAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "isLdapMapped": [
                80
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "parentTeam": [
                1140
            ],
            "parentTeamName": [
                1129
            ],
            "parentTeamNameWas": [
                1129
            ],
            "parentTeamResourcePath": [
                1186
            ],
            "parentTeamUrl": [
                1186
            ],
            "parentTeamWas": [
                1140
            ],
            "parentTeamWasResourcePath": [
                1186
            ],
            "parentTeamWasUrl": [
                1186
            ],
            "team": [
                1140
            ],
            "teamName": [
                1129
            ],
            "teamResourcePath": [
                1186
            ],
            "teamUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "TeamConnection": {
            "edges": [
                1156
            ],
            "nodes": [
                1140
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "TeamDiscussion": {
            "author": [
                6
            ],
            "authorAssociation": [
                152
            ],
            "body": [
                1129
            ],
            "bodyHTML": [
                466
            ],
            "bodyText": [
                1129
            ],
            "bodyVersion": [
                1129
            ],
            "comments": [
                1148,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1150
                    ],
                    "fromComment": [
                        474
                    ]
                }
            ],
            "commentsResourcePath": [
                1186
            ],
            "commentsUrl": [
                1186
            ],
            "createdAt": [
                252
            ],
            "createdViaEmail": [
                80
            ],
            "databaseId": [
                474
            ],
            "editor": [
                6
            ],
            "id": [
                472
            ],
            "includesCreatedEdit": [
                80
            ],
            "isPinned": [
                80
            ],
            "isPrivate": [
                80
            ],
            "lastEditedAt": [
                252
            ],
            "number": [
                474
            ],
            "publishedAt": [
                252
            ],
            "reactionGroups": [
                866
            ],
            "reactions": [
                863,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "content": [
                        864
                    ],
                    "orderBy": [
                        867
                    ]
                }
            ],
            "resourcePath": [
                1186
            ],
            "team": [
                1140
            ],
            "title": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "userContentEdits": [
                1338,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "viewerCanDelete": [
                80
            ],
            "viewerCanPin": [
                80
            ],
            "viewerCanReact": [
                80
            ],
            "viewerCanSubscribe": [
                80
            ],
            "viewerCanUpdate": [
                80
            ],
            "viewerCannotUpdateReasons": [
                153
            ],
            "viewerDidAuthor": [
                80
            ],
            "viewerSubscription": [
                1137
            ],
            "__typename": [
                1129
            ]
        },
        "TeamDiscussionComment": {
            "author": [
                6
            ],
            "authorAssociation": [
                152
            ],
            "body": [
                1129
            ],
            "bodyHTML": [
                466
            ],
            "bodyText": [
                1129
            ],
            "bodyVersion": [
                1129
            ],
            "createdAt": [
                252
            ],
            "createdViaEmail": [
                80
            ],
            "databaseId": [
                474
            ],
            "discussion": [
                1146
            ],
            "editor": [
                6
            ],
            "id": [
                472
            ],
            "includesCreatedEdit": [
                80
            ],
            "lastEditedAt": [
                252
            ],
            "number": [
                474
            ],
            "publishedAt": [
                252
            ],
            "reactionGroups": [
                866
            ],
            "reactions": [
                863,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "content": [
                        864
                    ],
                    "orderBy": [
                        867
                    ]
                }
            ],
            "resourcePath": [
                1186
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "userContentEdits": [
                1338,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "viewerCanDelete": [
                80
            ],
            "viewerCanReact": [
                80
            ],
            "viewerCanUpdate": [
                80
            ],
            "viewerCannotUpdateReasons": [
                153
            ],
            "viewerDidAuthor": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "TeamDiscussionCommentConnection": {
            "edges": [
                1149
            ],
            "nodes": [
                1147
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "TeamDiscussionCommentEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1147
            ],
            "__typename": [
                1129
            ]
        },
        "TeamDiscussionCommentOrder": {
            "field": [
                1151
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "TeamDiscussionCommentOrderField": {},
        "TeamDiscussionConnection": {
            "edges": [
                1153
            ],
            "nodes": [
                1146
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "TeamDiscussionEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1146
            ],
            "__typename": [
                1129
            ]
        },
        "TeamDiscussionOrder": {
            "field": [
                1155
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "TeamDiscussionOrderField": {},
        "TeamEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1140
            ],
            "__typename": [
                1129
            ]
        },
        "TeamMemberConnection": {
            "edges": [
                1158
            ],
            "nodes": [
                1333
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "TeamMemberEdge": {
            "cursor": [
                1129
            ],
            "memberAccessResourcePath": [
                1186
            ],
            "memberAccessUrl": [
                1186
            ],
            "node": [
                1333
            ],
            "role": [
                1161
            ],
            "__typename": [
                1129
            ]
        },
        "TeamMemberOrder": {
            "field": [
                1160
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "TeamMemberOrderField": {},
        "TeamMemberRole": {},
        "TeamMembershipType": {},
        "TeamOrder": {
            "field": [
                1164
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "TeamOrderField": {},
        "TeamPrivacy": {},
        "TeamRemoveMemberAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "isLdapMapped": [
                80
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "team": [
                1140
            ],
            "teamName": [
                1129
            ],
            "teamResourcePath": [
                1186
            ],
            "teamUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "TeamRemoveRepositoryAuditEntry": {
            "action": [
                1129
            ],
            "actor": [
                63
            ],
            "actorIp": [
                1129
            ],
            "actorLocation": [
                7
            ],
            "actorLogin": [
                1129
            ],
            "actorResourcePath": [
                1186
            ],
            "actorUrl": [
                1186
            ],
            "createdAt": [
                702
            ],
            "id": [
                472
            ],
            "isLdapMapped": [
                80
            ],
            "operationType": [
                595
            ],
            "organization": [
                639
            ],
            "organizationName": [
                1129
            ],
            "organizationResourcePath": [
                1186
            ],
            "organizationUrl": [
                1186
            ],
            "repository": [
                950
            ],
            "repositoryName": [
                1129
            ],
            "repositoryResourcePath": [
                1186
            ],
            "repositoryUrl": [
                1186
            ],
            "team": [
                1140
            ],
            "teamName": [
                1129
            ],
            "teamResourcePath": [
                1186
            ],
            "teamUrl": [
                1186
            ],
            "user": [
                1333
            ],
            "userLogin": [
                1129
            ],
            "userResourcePath": [
                1186
            ],
            "userUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "TeamRepositoryConnection": {
            "edges": [
                1169
            ],
            "nodes": [
                950
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "TeamRepositoryEdge": {
            "cursor": [
                1129
            ],
            "node": [
                950
            ],
            "permission": [
                984
            ],
            "__typename": [
                1129
            ]
        },
        "TeamRepositoryOrder": {
            "field": [
                1171
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "TeamRepositoryOrderField": {},
        "TeamRole": {},
        "TextMatch": {
            "fragment": [
                1129
            ],
            "highlights": [
                1174
            ],
            "property": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "TextMatchHighlight": {
            "beginIndice": [
                474
            ],
            "endIndice": [
                474
            ],
            "text": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "Topic": {
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "relatedTopics": [
                1175,
                {
                    "first": [
                        474
                    ]
                }
            ],
            "repositories": [
                957,
                {
                    "privacy": [
                        985
                    ],
                    "orderBy": [
                        981
                    ],
                    "affiliations": [
                        951,
                        "[RepositoryAffiliation]"
                    ],
                    "ownerAffiliations": [
                        951,
                        "[RepositoryAffiliation]"
                    ],
                    "isLocked": [
                        80
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "sponsorableOnly": [
                        80
                    ]
                }
            ],
            "stargazerCount": [
                474
            ],
            "stargazers": [
                1114,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1112
                    ]
                }
            ],
            "viewerHasStarred": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "TopicAuditEntryData": {
            "topic": [
                1175
            ],
            "topicName": [
                1129
            ],
            "on_RepoAddTopicAuditEntry": [
                927
            ],
            "on_RepoRemoveTopicAuditEntry": [
                948
            ],
            "__typename": [
                1129
            ]
        },
        "TopicSuggestionDeclineReason": {},
        "TrackedIssueStates": {},
        "TransferEnterpriseOrganizationInput": {
            "organizationId": [
                472
            ],
            "destinationEnterpriseId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "TransferEnterpriseOrganizationPayload": {
            "clientMutationId": [
                1129
            ],
            "organization": [
                639
            ],
            "__typename": [
                1129
            ]
        },
        "TransferIssueInput": {
            "issueId": [
                472
            ],
            "repositoryId": [
                472
            ],
            "createLabelsIfMissing": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "TransferIssuePayload": {
            "clientMutationId": [
                1129
            ],
            "issue": [
                485
            ],
            "__typename": [
                1129
            ]
        },
        "TransferredEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "fromRepository": [
                950
            ],
            "id": [
                472
            ],
            "issue": [
                485
            ],
            "__typename": [
                1129
            ]
        },
        "Tree": {
            "abbreviatedOid": [
                1129
            ],
            "commitResourcePath": [
                1186
            ],
            "commitUrl": [
                1186
            ],
            "entries": [
                1185
            ],
            "id": [
                472
            ],
            "oid": [
                456
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "TreeEntry": {
            "extension": [
                1129
            ],
            "isGenerated": [
                80
            ],
            "language": [
                517
            ],
            "lineCount": [
                474
            ],
            "mode": [
                474
            ],
            "name": [
                1129
            ],
            "nameRaw": [
                73
            ],
            "object": [
                455
            ],
            "oid": [
                456
            ],
            "path": [
                1129
            ],
            "pathRaw": [
                73
            ],
            "repository": [
                950
            ],
            "size": [
                474
            ],
            "submodule": [
                1132
            ],
            "type": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "URI": {},
        "UnarchiveProjectV2ItemInput": {
            "projectId": [
                472
            ],
            "itemId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UnarchiveProjectV2ItemPayload": {
            "clientMutationId": [
                1129
            ],
            "item": [
                759
            ],
            "__typename": [
                1129
            ]
        },
        "UnarchiveRepositoryInput": {
            "repositoryId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UnarchiveRepositoryPayload": {
            "clientMutationId": [
                1129
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "UnassignedEvent": {
            "actor": [
                6
            ],
            "assignable": [
                59
            ],
            "assignee": [
                61
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "UnfollowOrganizationInput": {
            "organizationId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UnfollowOrganizationPayload": {
            "clientMutationId": [
                1129
            ],
            "organization": [
                639
            ],
            "__typename": [
                1129
            ]
        },
        "UnfollowUserInput": {
            "userId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UnfollowUserPayload": {
            "clientMutationId": [
                1129
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "UniformResourceLocatable": {
            "resourcePath": [
                1186
            ],
            "url": [
                1186
            ],
            "on_Bot": [
                81
            ],
            "on_CheckRun": [
                114
            ],
            "on_ClosedEvent": [
                147
            ],
            "on_Commit": [
                155
            ],
            "on_ConvertToDraftEvent": [
                185
            ],
            "on_CrossReferencedEvent": [
                250
            ],
            "on_Gist": [
                441
            ],
            "on_Issue": [
                485
            ],
            "on_Mannequin": [
                538
            ],
            "on_MergedEvent": [
                566
            ],
            "on_Milestone": [
                571
            ],
            "on_Organization": [
                639
            ],
            "on_PullRequest": [
                812
            ],
            "on_PullRequestCommit": [
                816
            ],
            "on_ReadyForReviewEvent": [
                872
            ],
            "on_Release": [
                887
            ],
            "on_Repository": [
                950
            ],
            "on_RepositoryTopic": [
                986
            ],
            "on_ReviewDismissedEvent": [
                1015
            ],
            "on_TeamDiscussion": [
                1146
            ],
            "on_TeamDiscussionComment": [
                1147
            ],
            "on_User": [
                1333
            ],
            "on_WorkflowRun": [
                1358
            ],
            "__typename": [
                1129
            ]
        },
        "UnknownSignature": {
            "email": [
                1129
            ],
            "isValid": [
                80
            ],
            "payload": [
                1129
            ],
            "signature": [
                1129
            ],
            "signer": [
                1333
            ],
            "state": [
                459
            ],
            "wasSignedByGitHub": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "UnlabeledEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "label": [
                510
            ],
            "labelable": [
                515
            ],
            "__typename": [
                1129
            ]
        },
        "UnlinkProjectV2FromRepositoryInput": {
            "projectId": [
                472
            ],
            "repositoryId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UnlinkProjectV2FromRepositoryPayload": {
            "clientMutationId": [
                1129
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "UnlinkProjectV2FromTeamInput": {
            "projectId": [
                472
            ],
            "teamId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UnlinkProjectV2FromTeamPayload": {
            "clientMutationId": [
                1129
            ],
            "team": [
                1140
            ],
            "__typename": [
                1129
            ]
        },
        "UnlinkRepositoryFromProjectInput": {
            "projectId": [
                472
            ],
            "repositoryId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UnlinkRepositoryFromProjectPayload": {
            "clientMutationId": [
                1129
            ],
            "project": [
                707
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "UnlockLockableInput": {
            "lockableId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UnlockLockablePayload": {
            "actor": [
                6
            ],
            "clientMutationId": [
                1129
            ],
            "unlockedRecord": [
                536
            ],
            "__typename": [
                1129
            ]
        },
        "UnlockedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "lockable": [
                536
            ],
            "__typename": [
                1129
            ]
        },
        "UnmarkDiscussionCommentAsAnswerInput": {
            "id": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UnmarkDiscussionCommentAsAnswerPayload": {
            "clientMutationId": [
                1129
            ],
            "discussion": [
                334
            ],
            "__typename": [
                1129
            ]
        },
        "UnmarkFileAsViewedInput": {
            "pullRequestId": [
                472
            ],
            "path": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UnmarkFileAsViewedPayload": {
            "clientMutationId": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "UnmarkIssueAsDuplicateInput": {
            "duplicateId": [
                472
            ],
            "canonicalId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UnmarkIssueAsDuplicatePayload": {
            "clientMutationId": [
                1129
            ],
            "duplicate": [
                496
            ],
            "__typename": [
                1129
            ]
        },
        "UnmarkedAsDuplicateEvent": {
            "actor": [
                6
            ],
            "canonical": [
                496
            ],
            "createdAt": [
                252
            ],
            "duplicate": [
                496
            ],
            "id": [
                472
            ],
            "isCrossRepository": [
                80
            ],
            "__typename": [
                1129
            ]
        },
        "UnminimizeCommentInput": {
            "subjectId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UnminimizeCommentPayload": {
            "clientMutationId": [
                1129
            ],
            "unminimizedComment": [
                579
            ],
            "__typename": [
                1129
            ]
        },
        "UnpinIssueInput": {
            "issueId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UnpinIssuePayload": {
            "clientMutationId": [
                1129
            ],
            "issue": [
                485
            ],
            "__typename": [
                1129
            ]
        },
        "UnpinnedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "issue": [
                485
            ],
            "__typename": [
                1129
            ]
        },
        "UnresolveReviewThreadInput": {
            "threadId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UnresolveReviewThreadPayload": {
            "clientMutationId": [
                1129
            ],
            "thread": [
                837
            ],
            "__typename": [
                1129
            ]
        },
        "UnsubscribedEvent": {
            "actor": [
                6
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "subscribable": [
                1135
            ],
            "__typename": [
                1129
            ]
        },
        "Updatable": {
            "viewerCanUpdate": [
                80
            ],
            "on_CommitComment": [
                157
            ],
            "on_Discussion": [
                334
            ],
            "on_DiscussionComment": [
                338
            ],
            "on_GistComment": [
                442
            ],
            "on_Issue": [
                485
            ],
            "on_IssueComment": [
                487
            ],
            "on_Project": [
                707
            ],
            "on_ProjectNext": [
                721
            ],
            "on_ProjectV2": [
                744
            ],
            "on_PullRequest": [
                812
            ],
            "on_PullRequestReview": [
                826
            ],
            "on_PullRequestReviewComment": [
                827
            ],
            "on_TeamDiscussion": [
                1146
            ],
            "on_TeamDiscussionComment": [
                1147
            ],
            "__typename": [
                1129
            ]
        },
        "UpdatableComment": {
            "viewerCannotUpdateReasons": [
                153
            ],
            "on_CommitComment": [
                157
            ],
            "on_DiscussionComment": [
                338
            ],
            "on_GistComment": [
                442
            ],
            "on_Issue": [
                485
            ],
            "on_IssueComment": [
                487
            ],
            "on_PullRequest": [
                812
            ],
            "on_PullRequestReview": [
                826
            ],
            "on_PullRequestReviewComment": [
                827
            ],
            "on_TeamDiscussion": [
                1146
            ],
            "on_TeamDiscussionComment": [
                1147
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateBranchProtectionRuleInput": {
            "branchProtectionRuleId": [
                472
            ],
            "pattern": [
                1129
            ],
            "requiresApprovingReviews": [
                80
            ],
            "requiredApprovingReviewCount": [
                474
            ],
            "requiresCommitSignatures": [
                80
            ],
            "requiresLinearHistory": [
                80
            ],
            "blocksCreations": [
                80
            ],
            "allowsForcePushes": [
                80
            ],
            "allowsDeletions": [
                80
            ],
            "isAdminEnforced": [
                80
            ],
            "requiresStatusChecks": [
                80
            ],
            "requiresStrictStatusChecks": [
                80
            ],
            "requiresCodeOwnerReviews": [
                80
            ],
            "dismissesStaleReviews": [
                80
            ],
            "restrictsReviewDismissals": [
                80
            ],
            "reviewDismissalActorIds": [
                472
            ],
            "bypassPullRequestActorIds": [
                472
            ],
            "bypassForcePushActorIds": [
                472
            ],
            "restrictsPushes": [
                80
            ],
            "pushActorIds": [
                472
            ],
            "requiredStatusCheckContexts": [
                1129
            ],
            "requiredStatusChecks": [
                1005
            ],
            "requiresConversationResolution": [
                80
            ],
            "requireLastPushApproval": [
                80
            ],
            "lockBranch": [
                80
            ],
            "lockAllowsFetchAndMerge": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateBranchProtectionRulePayload": {
            "branchProtectionRule": [
                83
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateCheckRunInput": {
            "repositoryId": [
                472
            ],
            "checkRunId": [
                472
            ],
            "name": [
                1129
            ],
            "detailsUrl": [
                1186
            ],
            "externalId": [
                1129
            ],
            "status": [
                999
            ],
            "startedAt": [
                252
            ],
            "conclusion": [
                113
            ],
            "completedAt": [
                252
            ],
            "output": [
                119
            ],
            "actions": [
                115
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateCheckRunPayload": {
            "checkRun": [
                114
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateCheckSuitePreferencesInput": {
            "repositoryId": [
                472
            ],
            "autoTriggerPreferences": [
                129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateCheckSuitePreferencesPayload": {
            "clientMutationId": [
                1129
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateDiscussionCommentInput": {
            "commentId": [
                472
            ],
            "body": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateDiscussionCommentPayload": {
            "clientMutationId": [
                1129
            ],
            "comment": [
                338
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateDiscussionInput": {
            "discussionId": [
                472
            ],
            "title": [
                1129
            ],
            "body": [
                1129
            ],
            "categoryId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateDiscussionPayload": {
            "clientMutationId": [
                1129
            ],
            "discussion": [
                334
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseAdministratorRoleInput": {
            "enterpriseId": [
                472
            ],
            "login": [
                1129
            ],
            "role": [
                369
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseAdministratorRolePayload": {
            "clientMutationId": [
                1129
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput": {
            "enterpriseId": [
                472
            ],
            "settingValue": [
                374
            ],
            "policyValue": [
                370
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseDefaultRepositoryPermissionSettingInput": {
            "enterpriseId": [
                472
            ],
            "settingValue": [
                373
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseDefaultRepositoryPermissionSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput": {
            "enterpriseId": [
                472
            ],
            "settingValue": [
                374
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanCreateRepositoriesSettingInput": {
            "enterpriseId": [
                472
            ],
            "settingValue": [
                382
            ],
            "membersCanCreateRepositoriesPolicyEnabled": [
                80
            ],
            "membersCanCreatePublicRepositories": [
                80
            ],
            "membersCanCreatePrivateRepositories": [
                80
            ],
            "membersCanCreateInternalRepositories": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanDeleteIssuesSettingInput": {
            "enterpriseId": [
                472
            ],
            "settingValue": [
                374
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanDeleteIssuesSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput": {
            "enterpriseId": [
                472
            ],
            "settingValue": [
                374
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput": {
            "enterpriseId": [
                472
            ],
            "settingValue": [
                374
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanMakePurchasesSettingInput": {
            "enterpriseId": [
                472
            ],
            "settingValue": [
                383
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanMakePurchasesSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput": {
            "enterpriseId": [
                472
            ],
            "settingValue": [
                374
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput": {
            "enterpriseId": [
                472
            ],
            "settingValue": [
                374
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseOrganizationProjectsSettingInput": {
            "enterpriseId": [
                472
            ],
            "settingValue": [
                374
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseOrganizationProjectsSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseOwnerOrganizationRoleInput": {
            "enterpriseId": [
                472
            ],
            "organizationId": [
                472
            ],
            "organizationRole": [
                1026
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseOwnerOrganizationRolePayload": {
            "clientMutationId": [
                1129
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseProfileInput": {
            "enterpriseId": [
                472
            ],
            "name": [
                1129
            ],
            "description": [
                1129
            ],
            "websiteUrl": [
                1129
            ],
            "location": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseProfilePayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseRepositoryProjectsSettingInput": {
            "enterpriseId": [
                472
            ],
            "settingValue": [
                374
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseRepositoryProjectsSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseTeamDiscussionsSettingInput": {
            "enterpriseId": [
                472
            ],
            "settingValue": [
                374
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseTeamDiscussionsSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput": {
            "enterpriseId": [
                472
            ],
            "settingValue": [
                375
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "enterprise": [
                361
            ],
            "message": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnvironmentInput": {
            "environmentId": [
                472
            ],
            "waitTimer": [
                474
            ],
            "reviewers": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateEnvironmentPayload": {
            "clientMutationId": [
                1129
            ],
            "environment": [
                418
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateIpAllowListEnabledSettingInput": {
            "ownerId": [
                472
            ],
            "settingValue": [
                477
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateIpAllowListEnabledSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "owner": [
                484
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateIpAllowListEntryInput": {
            "ipAllowListEntryId": [
                472
            ],
            "allowListValue": [
                1129
            ],
            "name": [
                1129
            ],
            "isActive": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateIpAllowListEntryPayload": {
            "clientMutationId": [
                1129
            ],
            "ipAllowListEntry": [
                478
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateIpAllowListForInstalledAppsEnabledSettingInput": {
            "ownerId": [
                472
            ],
            "settingValue": [
                483
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateIpAllowListForInstalledAppsEnabledSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "owner": [
                484
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateIssueCommentInput": {
            "id": [
                472
            ],
            "body": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateIssueCommentPayload": {
            "clientMutationId": [
                1129
            ],
            "issueComment": [
                487
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateIssueInput": {
            "id": [
                472
            ],
            "title": [
                1129
            ],
            "body": [
                1129
            ],
            "assigneeIds": [
                472
            ],
            "milestoneId": [
                472
            ],
            "labelIds": [
                472
            ],
            "state": [
                499
            ],
            "projectIds": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateIssuePayload": {
            "actor": [
                6
            ],
            "clientMutationId": [
                1129
            ],
            "issue": [
                485
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateNotificationRestrictionSettingInput": {
            "ownerId": [
                472
            ],
            "settingValue": [
                589
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateNotificationRestrictionSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "owner": [
                1352
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateOrganizationAllowPrivateRepositoryForkingSettingInput": {
            "organizationId": [
                472
            ],
            "forkingEnabled": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "message": [
                1129
            ],
            "organization": [
                639
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateOrganizationWebCommitSignoffSettingInput": {
            "organizationId": [
                472
            ],
            "webCommitSignoffRequired": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateOrganizationWebCommitSignoffSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "message": [
                1129
            ],
            "organization": [
                639
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectCardInput": {
            "projectCardId": [
                472
            ],
            "isArchived": [
                80
            ],
            "note": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectCardPayload": {
            "clientMutationId": [
                1129
            ],
            "projectCard": [
                708
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectColumnInput": {
            "projectColumnId": [
                472
            ],
            "name": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectColumnPayload": {
            "clientMutationId": [
                1129
            ],
            "projectColumn": [
                714
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectDraftIssueInput": {
            "draftIssueId": [
                472
            ],
            "title": [
                1129
            ],
            "body": [
                1129
            ],
            "assigneeIds": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectDraftIssuePayload": {
            "clientMutationId": [
                1129
            ],
            "draftIssue": [
                356
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectInput": {
            "projectId": [
                472
            ],
            "name": [
                1129
            ],
            "body": [
                1129
            ],
            "state": [
                742
            ],
            "public": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectNextInput": {
            "projectId": [
                472
            ],
            "title": [
                1129
            ],
            "description": [
                1129
            ],
            "shortDescription": [
                1129
            ],
            "closed": [
                80
            ],
            "public": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectNextItemFieldInput": {
            "projectId": [
                472
            ],
            "itemId": [
                472
            ],
            "fieldId": [
                472
            ],
            "value": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectNextItemFieldPayload": {
            "clientMutationId": [
                1129
            ],
            "projectNextItem": [
                729
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectNextPayload": {
            "clientMutationId": [
                1129
            ],
            "projectNext": [
                721
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectPayload": {
            "clientMutationId": [
                1129
            ],
            "project": [
                707
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectV2DraftIssueInput": {
            "draftIssueId": [
                472
            ],
            "title": [
                1129
            ],
            "body": [
                1129
            ],
            "assigneeIds": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectV2DraftIssuePayload": {
            "clientMutationId": [
                1129
            ],
            "draftIssue": [
                356
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectV2Input": {
            "projectId": [
                472
            ],
            "title": [
                1129
            ],
            "shortDescription": [
                1129
            ],
            "readme": [
                1129
            ],
            "closed": [
                80
            ],
            "public": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectV2ItemFieldValueInput": {
            "projectId": [
                472
            ],
            "itemId": [
                472
            ],
            "fieldId": [
                472
            ],
            "value": [
                757
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectV2ItemFieldValuePayload": {
            "clientMutationId": [
                1129
            ],
            "projectV2Item": [
                759
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectV2ItemPositionInput": {
            "projectId": [
                472
            ],
            "itemId": [
                472
            ],
            "afterId": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectV2ItemPositionPayload": {
            "clientMutationId": [
                1129
            ],
            "items": [
                760,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateProjectV2Payload": {
            "clientMutationId": [
                1129
            ],
            "projectV2": [
                744
            ],
            "__typename": [
                1129
            ]
        },
        "UpdatePullRequestBranchInput": {
            "pullRequestId": [
                472
            ],
            "expectedHeadOid": [
                456
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdatePullRequestBranchPayload": {
            "clientMutationId": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "UpdatePullRequestInput": {
            "pullRequestId": [
                472
            ],
            "baseRefName": [
                1129
            ],
            "title": [
                1129
            ],
            "body": [
                1129
            ],
            "state": [
                851
            ],
            "maintainerCanModify": [
                80
            ],
            "assigneeIds": [
                472
            ],
            "milestoneId": [
                472
            ],
            "labelIds": [
                472
            ],
            "projectIds": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdatePullRequestPayload": {
            "actor": [
                6
            ],
            "clientMutationId": [
                1129
            ],
            "pullRequest": [
                812
            ],
            "__typename": [
                1129
            ]
        },
        "UpdatePullRequestReviewCommentInput": {
            "pullRequestReviewCommentId": [
                472
            ],
            "body": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdatePullRequestReviewCommentPayload": {
            "clientMutationId": [
                1129
            ],
            "pullRequestReviewComment": [
                827
            ],
            "__typename": [
                1129
            ]
        },
        "UpdatePullRequestReviewInput": {
            "pullRequestReviewId": [
                472
            ],
            "body": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdatePullRequestReviewPayload": {
            "clientMutationId": [
                1129
            ],
            "pullRequestReview": [
                826
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateRefInput": {
            "refId": [
                472
            ],
            "oid": [
                456
            ],
            "force": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateRefPayload": {
            "clientMutationId": [
                1129
            ],
            "ref": [
                873
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateRepositoryInput": {
            "repositoryId": [
                472
            ],
            "name": [
                1129
            ],
            "description": [
                1129
            ],
            "template": [
                80
            ],
            "homepageUrl": [
                1186
            ],
            "hasWikiEnabled": [
                80
            ],
            "hasIssuesEnabled": [
                80
            ],
            "hasProjectsEnabled": [
                80
            ],
            "hasDiscussionsEnabled": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateRepositoryPayload": {
            "clientMutationId": [
                1129
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateRepositoryWebCommitSignoffSettingInput": {
            "repositoryId": [
                472
            ],
            "webCommitSignoffRequired": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateRepositoryWebCommitSignoffSettingPayload": {
            "clientMutationId": [
                1129
            ],
            "message": [
                1129
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateSponsorshipPreferencesInput": {
            "sponsorId": [
                472
            ],
            "sponsorLogin": [
                1129
            ],
            "sponsorableId": [
                472
            ],
            "sponsorableLogin": [
                1129
            ],
            "receiveEmails": [
                80
            ],
            "privacyLevel": [
                1108
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateSponsorshipPreferencesPayload": {
            "clientMutationId": [
                1129
            ],
            "sponsorship": [
                1098
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateSubscriptionInput": {
            "subscribableId": [
                472
            ],
            "state": [
                1137
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateSubscriptionPayload": {
            "clientMutationId": [
                1129
            ],
            "subscribable": [
                1135
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateTeamDiscussionCommentInput": {
            "id": [
                472
            ],
            "body": [
                1129
            ],
            "bodyVersion": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateTeamDiscussionCommentPayload": {
            "clientMutationId": [
                1129
            ],
            "teamDiscussionComment": [
                1147
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateTeamDiscussionInput": {
            "id": [
                472
            ],
            "title": [
                1129
            ],
            "body": [
                1129
            ],
            "bodyVersion": [
                1129
            ],
            "pinned": [
                80
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateTeamDiscussionPayload": {
            "clientMutationId": [
                1129
            ],
            "teamDiscussion": [
                1146
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateTeamsRepositoryInput": {
            "repositoryId": [
                472
            ],
            "teamIds": [
                472
            ],
            "permission": [
                984
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateTeamsRepositoryPayload": {
            "clientMutationId": [
                1129
            ],
            "repository": [
                950
            ],
            "teams": [
                1140
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateTopicsInput": {
            "repositoryId": [
                472
            ],
            "topicNames": [
                1129
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UpdateTopicsPayload": {
            "clientMutationId": [
                1129
            ],
            "invalidTopicNames": [
                1129
            ],
            "repository": [
                950
            ],
            "__typename": [
                1129
            ]
        },
        "User": {
            "anyPinnableItems": [
                80,
                {
                    "type": [
                        692
                    ]
                }
            ],
            "avatarUrl": [
                1186,
                {
                    "size": [
                        474
                    ]
                }
            ],
            "bio": [
                1129
            ],
            "bioHTML": [
                466
            ],
            "canReceiveOrganizationEmailsWhenNotificationsRestricted": [
                80,
                {
                    "login": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "commitComments": [
                158,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "company": [
                1129
            ],
            "companyHTML": [
                466
            ],
            "contributionsCollection": [
                180,
                {
                    "organizationID": [
                        472
                    ],
                    "from": [
                        252
                    ],
                    "to": [
                        252
                    ]
                }
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "email": [
                1129
            ],
            "estimatedNextSponsorsPayoutInCents": [
                474
            ],
            "followers": [
                436,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "following": [
                437,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "gist": [
                441,
                {
                    "name": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "gistComments": [
                443,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "gists": [
                445,
                {
                    "privacy": [
                        450
                    ],
                    "orderBy": [
                        448
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "hasSponsorsListing": [
                80
            ],
            "hovercard": [
                470,
                {
                    "primarySubjectId": [
                        472
                    ]
                }
            ],
            "id": [
                472
            ],
            "interactionAbility": [
                964
            ],
            "isBountyHunter": [
                80
            ],
            "isCampusExpert": [
                80
            ],
            "isDeveloperProgramMember": [
                80
            ],
            "isEmployee": [
                80
            ],
            "isFollowingViewer": [
                80
            ],
            "isGitHubStar": [
                80
            ],
            "isHireable": [
                80
            ],
            "isSiteAdmin": [
                80
            ],
            "isSponsoredBy": [
                80,
                {
                    "accountLogin": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "isSponsoringViewer": [
                80
            ],
            "isViewer": [
                80
            ],
            "issueComments": [
                488,
                {
                    "orderBy": [
                        490
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "issues": [
                492,
                {
                    "orderBy": [
                        497
                    ],
                    "labels": [
                        1129,
                        "[String!]"
                    ],
                    "states": [
                        499,
                        "[IssueState!]"
                    ],
                    "filterBy": [
                        495
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "itemShowcase": [
                705
            ],
            "location": [
                1129
            ],
            "login": [
                1129
            ],
            "monthlyEstimatedSponsorsIncomeInCents": [
                474
            ],
            "name": [
                1129
            ],
            "organization": [
                639,
                {
                    "login": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "organizationVerifiedDomainEmails": [
                1129,
                {
                    "login": [
                        1129,
                        "String!"
                    ]
                }
            ],
            "organizations": [
                644,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "packages": [
                664,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "names": [
                        1129,
                        "[String]"
                    ],
                    "repositoryId": [
                        472
                    ],
                    "packageType": [
                        676
                    ],
                    "orderBy": [
                        671
                    ]
                }
            ],
            "pinnableItems": [
                690,
                {
                    "types": [
                        692,
                        "[PinnableItemType!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "pinnedItems": [
                690,
                {
                    "types": [
                        692,
                        "[PinnableItemType!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "pinnedItemsRemaining": [
                474
            ],
            "project": [
                707,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projectNext": [
                721,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projectV2": [
                744,
                {
                    "number": [
                        474,
                        "Int!"
                    ]
                }
            ],
            "projects": [
                718,
                {
                    "orderBy": [
                        738
                    ],
                    "search": [
                        1129
                    ],
                    "states": [
                        742,
                        "[ProjectState!]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "projectsNext": [
                722,
                {
                    "query": [
                        1129
                    ],
                    "sortBy": [
                        736
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "projectsResourcePath": [
                1186
            ],
            "projectsUrl": [
                1186
            ],
            "projectsV2": [
                745,
                {
                    "query": [
                        1129
                    ],
                    "orderBy": [
                        786
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "publicKeys": [
                810,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "pullRequests": [
                820,
                {
                    "states": [
                        841,
                        "[PullRequestState!]"
                    ],
                    "labels": [
                        1129,
                        "[String!]"
                    ],
                    "headRefName": [
                        1129
                    ],
                    "baseRefName": [
                        1129
                    ],
                    "orderBy": [
                        497
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "recentProjects": [
                745,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "repositories": [
                957,
                {
                    "privacy": [
                        985
                    ],
                    "orderBy": [
                        981
                    ],
                    "affiliations": [
                        951,
                        "[RepositoryAffiliation]"
                    ],
                    "ownerAffiliations": [
                        951,
                        "[RepositoryAffiliation]"
                    ],
                    "isLocked": [
                        80
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "isFork": [
                        80
                    ]
                }
            ],
            "repositoriesContributedTo": [
                957,
                {
                    "privacy": [
                        985
                    ],
                    "orderBy": [
                        981
                    ],
                    "isLocked": [
                        80
                    ],
                    "includeUserRepositories": [
                        80
                    ],
                    "contributionTypes": [
                        959,
                        "[RepositoryContributionType]"
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "repository": [
                950,
                {
                    "name": [
                        1129,
                        "String!"
                    ],
                    "followRenames": [
                        80
                    ]
                }
            ],
            "repositoryDiscussionComments": [
                339,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "repositoryId": [
                        472
                    ],
                    "onlyAnswers": [
                        80
                    ]
                }
            ],
            "repositoryDiscussions": [
                341,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        343
                    ],
                    "repositoryId": [
                        472
                    ],
                    "answered": [
                        80
                    ]
                }
            ],
            "resourcePath": [
                1186
            ],
            "savedReplies": [
                1030,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1032
                    ]
                }
            ],
            "sponsoring": [
                1068,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1070
                    ]
                }
            ],
            "sponsors": [
                1068,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "tierId": [
                        472
                    ],
                    "orderBy": [
                        1070
                    ]
                }
            ],
            "sponsorsActivities": [
                1080,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "period": [
                        1084
                    ],
                    "since": [
                        252
                    ],
                    "until": [
                        252
                    ],
                    "orderBy": [
                        1082
                    ],
                    "actions": [
                        1079,
                        "[SponsorsActivityAction!]"
                    ],
                    "includeAsSponsor": [
                        80
                    ]
                }
            ],
            "sponsorsListing": [
                1088
            ],
            "sponsorshipForViewerAsSponsor": [
                1098
            ],
            "sponsorshipForViewerAsSponsorable": [
                1098
            ],
            "sponsorshipNewsletters": [
                1102,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1104
                    ]
                }
            ],
            "sponsorshipsAsMaintainer": [
                1099,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "includePrivate": [
                        80
                    ],
                    "orderBy": [
                        1106
                    ]
                }
            ],
            "sponsorshipsAsSponsor": [
                1099,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1106
                    ],
                    "maintainerLogins": [
                        1129,
                        "[String!]"
                    ]
                }
            ],
            "starredRepositories": [
                1117,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "ownedByViewer": [
                        80
                    ],
                    "orderBy": [
                        1112
                    ]
                }
            ],
            "status": [
                1342
            ],
            "topRepositories": [
                957,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        981,
                        "RepositoryOrder!"
                    ],
                    "since": [
                        252
                    ]
                }
            ],
            "twitterUsername": [
                1129
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "viewerCanChangePinnedItems": [
                80
            ],
            "viewerCanCreateProjects": [
                80
            ],
            "viewerCanFollow": [
                80
            ],
            "viewerCanSponsor": [
                80
            ],
            "viewerIsFollowing": [
                80
            ],
            "viewerIsSponsoring": [
                80
            ],
            "watching": [
                957,
                {
                    "privacy": [
                        985
                    ],
                    "orderBy": [
                        981
                    ],
                    "affiliations": [
                        951,
                        "[RepositoryAffiliation]"
                    ],
                    "ownerAffiliations": [
                        951,
                        "[RepositoryAffiliation]"
                    ],
                    "isLocked": [
                        80
                    ],
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "websiteUrl": [
                1186
            ],
            "__typename": [
                1129
            ]
        },
        "UserBlockDuration": {},
        "UserBlockedEvent": {
            "actor": [
                6
            ],
            "blockDuration": [
                1334
            ],
            "createdAt": [
                252
            ],
            "id": [
                472
            ],
            "subject": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "UserConnection": {
            "edges": [
                1340
            ],
            "nodes": [
                1333
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "UserContentEdit": {
            "createdAt": [
                252
            ],
            "deletedAt": [
                252
            ],
            "deletedBy": [
                6
            ],
            "diff": [
                1129
            ],
            "editedAt": [
                252
            ],
            "editor": [
                6
            ],
            "id": [
                472
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "UserContentEditConnection": {
            "edges": [
                1339
            ],
            "nodes": [
                1337
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "UserContentEditEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1337
            ],
            "__typename": [
                1129
            ]
        },
        "UserEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "UserEmailMetadata": {
            "primary": [
                80
            ],
            "type": [
                1129
            ],
            "value": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "UserStatus": {
            "createdAt": [
                252
            ],
            "emoji": [
                1129
            ],
            "emojiHTML": [
                466
            ],
            "expiresAt": [
                252
            ],
            "id": [
                472
            ],
            "indicatesLimitedAvailability": [
                80
            ],
            "message": [
                1129
            ],
            "organization": [
                639
            ],
            "updatedAt": [
                252
            ],
            "user": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "UserStatusConnection": {
            "edges": [
                1344
            ],
            "nodes": [
                1342
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "UserStatusEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1342
            ],
            "__typename": [
                1129
            ]
        },
        "UserStatusOrder": {
            "field": [
                1346
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "UserStatusOrderField": {},
        "VerifiableDomain": {
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "dnsHostName": [
                1186
            ],
            "domain": [
                1186
            ],
            "hasFoundHostName": [
                80
            ],
            "hasFoundVerificationToken": [
                80
            ],
            "id": [
                472
            ],
            "isApproved": [
                80
            ],
            "isRequiredForPolicyEnforcement": [
                80
            ],
            "isVerified": [
                80
            ],
            "owner": [
                1352
            ],
            "punycodeEncodedDomain": [
                1186
            ],
            "tokenExpirationTime": [
                252
            ],
            "updatedAt": [
                252
            ],
            "verificationToken": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "VerifiableDomainConnection": {
            "edges": [
                1349
            ],
            "nodes": [
                1347
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "VerifiableDomainEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1347
            ],
            "__typename": [
                1129
            ]
        },
        "VerifiableDomainOrder": {
            "field": [
                1351
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "VerifiableDomainOrderField": {},
        "VerifiableDomainOwner": {
            "on_Enterprise": [
                361
            ],
            "on_Organization": [
                639
            ],
            "on_Node": [
                588
            ],
            "on_Actor": [
                6
            ],
            "on_PackageOwner": [
                673
            ],
            "on_ProjectOwner": [
                740
            ],
            "on_ProjectNextOwner": [
                737
            ],
            "on_ProjectV2Owner": [
                788
            ],
            "on_ProjectV2Recent": [
                789
            ],
            "on_RepositoryDiscussionAuthor": [
                960
            ],
            "on_RepositoryDiscussionCommentAuthor": [
                961
            ],
            "on_RepositoryOwner": [
                983
            ],
            "on_UniformResourceLocatable": [
                1196
            ],
            "on_MemberStatusable": [
                554
            ],
            "on_ProfileOwner": [
                706
            ],
            "on_Sponsorable": [
                1072
            ],
            "__typename": [
                1129
            ]
        },
        "VerifyVerifiableDomainInput": {
            "id": [
                472
            ],
            "clientMutationId": [
                1129
            ],
            "__typename": [
                1129
            ]
        },
        "VerifyVerifiableDomainPayload": {
            "clientMutationId": [
                1129
            ],
            "domain": [
                1347
            ],
            "__typename": [
                1129
            ]
        },
        "ViewerHovercardContext": {
            "message": [
                1129
            ],
            "octicon": [
                1129
            ],
            "viewer": [
                1333
            ],
            "__typename": [
                1129
            ]
        },
        "Votable": {
            "upvoteCount": [
                474
            ],
            "viewerCanUpvote": [
                80
            ],
            "viewerHasUpvoted": [
                80
            ],
            "on_Discussion": [
                334
            ],
            "on_DiscussionComment": [
                338
            ],
            "__typename": [
                1129
            ]
        },
        "Workflow": {
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "id": [
                472
            ],
            "name": [
                1129
            ],
            "runs": [
                1359,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ],
                    "orderBy": [
                        1361
                    ]
                }
            ],
            "updatedAt": [
                252
            ],
            "__typename": [
                1129
            ]
        },
        "WorkflowRun": {
            "checkSuite": [
                128
            ],
            "createdAt": [
                252
            ],
            "databaseId": [
                474
            ],
            "deploymentReviews": [
                319,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "id": [
                472
            ],
            "pendingDeploymentRequests": [
                316,
                {
                    "after": [
                        1129
                    ],
                    "before": [
                        1129
                    ],
                    "first": [
                        474
                    ],
                    "last": [
                        474
                    ]
                }
            ],
            "resourcePath": [
                1186
            ],
            "runNumber": [
                474
            ],
            "updatedAt": [
                252
            ],
            "url": [
                1186
            ],
            "workflow": [
                1357
            ],
            "__typename": [
                1129
            ]
        },
        "WorkflowRunConnection": {
            "edges": [
                1360
            ],
            "nodes": [
                1358
            ],
            "pageInfo": [
                683
            ],
            "totalCount": [
                474
            ],
            "__typename": [
                1129
            ]
        },
        "WorkflowRunEdge": {
            "cursor": [
                1129
            ],
            "node": [
                1358
            ],
            "__typename": [
                1129
            ]
        },
        "WorkflowRunOrder": {
            "field": [
                1362
            ],
            "direction": [
                596
            ],
            "__typename": [
                1129
            ]
        },
        "WorkflowRunOrderField": {},
        "X509Certificate": {}
    }
}