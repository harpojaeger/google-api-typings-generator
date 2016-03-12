// Type definitions for Google Google Play Game Services API v1
// Project: https://developers.google.com/games/services/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.games {
    
    interface AchievementDefinition {
        // The type of the achievement.
        // Possible values are:  
        // - "STANDARD" - Achievement is either locked or unlocked. 
        // - "INCREMENTAL" - Achievement is incremental.
        achievementType?: string,
        // The description of the achievement.
        description?: string,
        // Experience points which will be earned when unlocking this achievement.
        experiencePoints?: string,
        // The total steps for an incremental achievement as a string.
        formattedTotalSteps?: string,
        // The ID of the achievement.
        id?: string,
        // The initial state of the achievement.
        // Possible values are:  
        // - "HIDDEN" - Achievement is hidden. 
        // - "REVEALED" - Achievement is revealed. 
        // - "UNLOCKED" - Achievement is unlocked.
        initialState?: string,
        // Indicates whether the revealed icon image being returned is a default image, or is provided by the game.
        isRevealedIconUrlDefault?: boolean,
        // Indicates whether the unlocked icon image being returned is a default image, or is game-provided.
        isUnlockedIconUrlDefault?: boolean,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#achievementDefinition.
        kind?: string,
        // The name of the achievement.
        name?: string,
        // The image URL for the revealed achievement icon.
        revealedIconUrl?: string,
        // The total steps for an incremental achievement.
        totalSteps?: number,
        // The image URL for the unlocked achievement icon.
        unlockedIconUrl?: string,
    }
    
    interface AchievementDefinitionsListResponse {
        // The achievement definitions.
        items?: AchievementDefinition[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#achievementDefinitionsListResponse.
        kind?: string,
        // Token corresponding to the next page of results.
        nextPageToken?: string,
    }
    
    interface AchievementIncrementResponse {
        // The current steps recorded for this incremental achievement.
        currentSteps?: number,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#achievementIncrementResponse.
        kind?: string,
        // Whether the current steps for the achievement has reached the number of steps required to unlock.
        newlyUnlocked?: boolean,
    }
    
    interface AchievementRevealResponse {
        // The current state of the achievement for which a reveal was attempted. This might be UNLOCKED if the achievement was already unlocked.
        // Possible values are:  
        // - "REVEALED" - Achievement is revealed. 
        // - "UNLOCKED" - Achievement is unlocked.
        currentState?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#achievementRevealResponse.
        kind?: string,
    }
    
    interface AchievementSetStepsAtLeastResponse {
        // The current steps recorded for this incremental achievement.
        currentSteps?: number,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#achievementSetStepsAtLeastResponse.
        kind?: string,
        // Whether the the current steps for the achievement has reached the number of steps required to unlock.
        newlyUnlocked?: boolean,
    }
    
    interface AchievementUnlockResponse {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUnlockResponse.
        kind?: string,
        // Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).
        newlyUnlocked?: boolean,
    }
    
    interface AchievementUpdateMultipleRequest {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateMultipleRequest.
        kind?: string,
        // The individual achievement update requests.
        updates?: AchievementUpdateRequest[],        
    }
    
    interface AchievementUpdateMultipleResponse {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateListResponse.
        kind?: string,
        // The updated state of the achievements.
        updatedAchievements?: AchievementUpdateResponse[],        
    }
    
    interface AchievementUpdateRequest {
        // The achievement this update is being applied to.
        achievementId?: string,
        // The payload if an update of type INCREMENT was requested for the achievement.
        incrementPayload?: GamesAchievementIncrement,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateRequest.
        kind?: string,
        // The payload if an update of type SET_STEPS_AT_LEAST was requested for the achievement.
        setStepsAtLeastPayload?: GamesAchievementSetStepsAtLeast,
        // The type of update being applied.
        // Possible values are:  
        // - "REVEAL" - Achievement is revealed. 
        // - "UNLOCK" - Achievement is unlocked. 
        // - "INCREMENT" - Achievement is incremented. 
        // - "SET_STEPS_AT_LEAST" - Achievement progress is set to at least the passed value.
        updateType?: string,
    }
    
    interface AchievementUpdateResponse {
        // The achievement this update is was applied to.
        achievementId?: string,
        // The current state of the achievement.
        // Possible values are:  
        // - "HIDDEN" - Achievement is hidden. 
        // - "REVEALED" - Achievement is revealed. 
        // - "UNLOCKED" - Achievement is unlocked.
        currentState?: string,
        // The current steps recorded for this achievement if it is incremental.
        currentSteps?: number,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateResponse.
        kind?: string,
        // Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).
        newlyUnlocked?: boolean,
        // Whether the requested updates actually affected the achievement.
        updateOccurred?: boolean,
    }
    
    interface AggregateStats {
        // The number of messages sent between a pair of peers.
        count?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#aggregateStats.
        kind?: string,
        // The maximum amount.
        max?: string,
        // The minimum amount.
        min?: string,
        // The total number of bytes sent for messages between a pair of peers.
        sum?: string,
    }
    
    interface AnonymousPlayer {
        // The base URL for the image to display for the anonymous player.
        avatarImageUrl?: string,
        // The name to display for the anonymous player.
        displayName?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#anonymousPlayer.
        kind?: string,
    }
    
    interface Application {
        // The number of achievements visible to the currently authenticated player.
        achievement_count?: number,
        // The assets of the application.
        assets?: ImageAsset[],        
        // The author of the application.
        author?: string,
        // The category of the application.
        category?: ApplicationCategory,
        // The description of the application.
        description?: string,
        // A list of features that have been enabled for the application.
        // Possible values are:  
        // - "SNAPSHOTS" - Snapshots has been enabled
        enabledFeatures?: string[],        
        // The ID of the application.
        id?: string,
        // The instances of the application.
        instances?: Instance[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#application.
        kind?: string,
        // The last updated timestamp of the application.
        lastUpdatedTimestamp?: string,
        // The number of leaderboards visible to the currently authenticated player.
        leaderboard_count?: number,
        // The name of the application.
        name?: string,
        // A hint to the client UI for what color to use as an app-themed color. The color is given as an RGB triplet (e.g. "E0E0E0").
        themeColor?: string,
    }
    
    interface ApplicationCategory {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#applicationCategory.
        kind?: string,
        // The primary category.
        primary?: string,
        // The secondary category.
        secondary?: string,
    }
    
    interface ApplicationVerifyResponse {
        // An alternate ID that was once used for the player that was issued the auth token used in this request. (This field is not normally populated.)
        alternate_player_id?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#applicationVerifyResponse.
        kind?: string,
        // The ID of the player that was issued the auth token used in this request.
        player_id?: string,
    }
    
    interface Category {
        // The category name.
        category?: string,
        // Experience points earned in this category.
        experiencePoints?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#category.
        kind?: string,
    }
    
    interface CategoryListResponse {
        // The list of categories with usage data.
        items?: Category[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#categoryListResponse.
        kind?: string,
        // Token corresponding to the next page of results.
        nextPageToken?: string,
    }
    
    interface EventBatchRecordFailure {
        // The cause for the update failure.
        // Possible values are:  
        // - "TOO_LARGE": A batch request was issued with more events than are allowed in a single batch. 
        // - "TIME_PERIOD_EXPIRED": A batch was sent with data too far in the past to record. 
        // - "TIME_PERIOD_SHORT": A batch was sent with a time range that was too short. 
        // - "TIME_PERIOD_LONG": A batch was sent with a time range that was too long. 
        // - "ALREADY_UPDATED": An attempt was made to record a batch of data which was already seen. 
        // - "RECORD_RATE_HIGH": An attempt was made to record data faster than the server will apply updates.
        failureCause?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#eventBatchRecordFailure.
        kind?: string,
        // The time range which was rejected; empty for a request-wide failure.
        range?: EventPeriodRange,
    }
    
    interface EventChild {
        // The ID of the child event.
        childId?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#eventChild.
        kind?: string,
    }
    
    interface EventDefinition {
        // A list of events that are a child of this event.
        childEvents?: EventChild[],        
        // Description of what this event represents.
        description?: string,
        // The name to display for the event.
        displayName?: string,
        // The ID of the event.
        id?: string,
        // The base URL for the image that represents the event.
        imageUrl?: string,
        // Indicates whether the icon image being returned is a default image, or is game-provided.
        isDefaultImageUrl?: boolean,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#eventDefinition.
        kind?: string,
        // The visibility of event being tracked in this definition.
        // Possible values are:  
        // - "REVEALED": This event should be visible to all users. 
        // - "HIDDEN": This event should only be shown to users that have recorded this event at least once.
        visibility?: string,
    }
    
    interface EventDefinitionListResponse {
        // The event definitions.
        items?: EventDefinition[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#eventDefinitionListResponse.
        kind?: string,
        // The pagination token for the next page of results.
        nextPageToken?: string,
    }
    
    interface EventPeriodRange {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#eventPeriodRange.
        kind?: string,
        // The time when this update period ends, in millis, since 1970 UTC (Unix Epoch).
        periodEndMillis?: string,
        // The time when this update period begins, in millis, since 1970 UTC (Unix Epoch).
        periodStartMillis?: string,
    }
    
    interface EventPeriodUpdate {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#eventPeriodUpdate.
        kind?: string,
        // The time period being covered by this update.
        timePeriod?: EventPeriodRange,
        // The updates being made for this time period.
        updates?: EventUpdateRequest[],        
    }
    
    interface EventRecordFailure {
        // The ID of the event that was not updated.
        eventId?: string,
        // The cause for the update failure.
        // Possible values are:  
        // - "NOT_FOUND" - An attempt was made to set an event that was not defined. 
        // - "INVALID_UPDATE_VALUE" - An attempt was made to increment an event by a non-positive value.
        failureCause?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#eventRecordFailure.
        kind?: string,
    }
    
    interface EventRecordRequest {
        // The current time when this update was sent, in milliseconds, since 1970 UTC (Unix Epoch).
        currentTimeMillis?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#eventRecordRequest.
        kind?: string,
        // The request ID used to identify this attempt to record events.
        requestId?: string,
        // A list of the time period updates being made in this request.
        timePeriods?: EventPeriodUpdate[],        
    }
    
    interface EventUpdateRequest {
        // The ID of the event being modified in this update.
        definitionId?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#eventUpdateRequest.
        kind?: string,
        // The number of times this event occurred in this time period.
        updateCount?: string,
    }
    
    interface EventUpdateResponse {
        // Any batch-wide failures which occurred applying updates.
        batchFailures?: EventBatchRecordFailure[],        
        // Any failures updating a particular event.
        eventFailures?: EventRecordFailure[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#eventUpdateResponse.
        kind?: string,
        // The current status of any updated events
        playerEvents?: PlayerEvent[],        
    }
    
    interface GamesAchievementIncrement {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#GamesAchievementIncrement.
        kind?: string,
        // The requestId associated with an increment to an achievement.
        requestId?: string,
        // The number of steps to be incremented.
        steps?: number,
    }
    
    interface GamesAchievementSetStepsAtLeast {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#GamesAchievementSetStepsAtLeast.
        kind?: string,
        // The minimum number of steps for the achievement to be set to.
        steps?: number,
    }
    
    interface ImageAsset {
        // The height of the asset.
        height?: number,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#imageAsset.
        kind?: string,
        // The name of the asset.
        name?: string,
        // The URL of the asset.
        url?: string,
        // The width of the asset.
        width?: number,
    }
    
    interface Instance {
        // URI which shows where a user can acquire this instance.
        acquisitionUri?: string,
        // Platform dependent details for Android.
        androidInstance?: InstanceAndroidDetails,
        // Platform dependent details for iOS.
        iosInstance?: InstanceIosDetails,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#instance.
        kind?: string,
        // Localized display name.
        name?: string,
        // The platform type.
        // Possible values are:  
        // - "ANDROID" - Instance is for Android. 
        // - "IOS" - Instance is for iOS 
        // - "WEB_APP" - Instance is for Web App.
        platformType?: string,
        // Flag to show if this game instance supports realtime play.
        realtimePlay?: boolean,
        // Flag to show if this game instance supports turn based play.
        turnBasedPlay?: boolean,
        // Platform dependent details for Web.
        webInstance?: InstanceWebDetails,
    }
    
    interface InstanceAndroidDetails {
        // Flag indicating whether the anti-piracy check is enabled.
        enablePiracyCheck?: boolean,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#instanceAndroidDetails.
        kind?: string,
        // Android package name which maps to Google Play URL.
        packageName?: string,
        // Indicates that this instance is the default for new installations.
        preferred?: boolean,
    }
    
    interface InstanceIosDetails {
        // Bundle identifier.
        bundleIdentifier?: string,
        // iTunes App ID.
        itunesAppId?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#instanceIosDetails.
        kind?: string,
        // Indicates that this instance is the default for new installations on iPad devices.
        preferredForIpad?: boolean,
        // Indicates that this instance is the default for new installations on iPhone devices.
        preferredForIphone?: boolean,
        // Flag to indicate if this instance supports iPad.
        supportIpad?: boolean,
        // Flag to indicate if this instance supports iPhone.
        supportIphone?: boolean,
    }
    
    interface InstanceWebDetails {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#instanceWebDetails.
        kind?: string,
        // Launch URL for the game.
        launchUrl?: string,
        // Indicates that this instance is the default for new installations.
        preferred?: boolean,
    }
    
    interface Leaderboard {
        // The icon for the leaderboard.
        iconUrl?: string,
        // The leaderboard ID.
        id?: string,
        // Indicates whether the icon image being returned is a default image, or is game-provided.
        isIconUrlDefault?: boolean,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboard.
        kind?: string,
        // The name of the leaderboard.
        name?: string,
        // How scores are ordered.
        // Possible values are:  
        // - "LARGER_IS_BETTER" - Larger values are better; scores are sorted in descending order. 
        // - "SMALLER_IS_BETTER" - Smaller values are better; scores are sorted in ascending order.
        order?: string,
    }
    
    interface LeaderboardEntry {
        // The localized string for the numerical value of this score.
        formattedScore?: string,
        // The localized string for the rank of this score for this leaderboard.
        formattedScoreRank?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardEntry.
        kind?: string,
        // The player who holds this score.
        player?: Player,
        // The rank of this score for this leaderboard.
        scoreRank?: string,
        // Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
        scoreTag?: string,
        // The numerical value of this score.
        scoreValue?: string,
        // The time span of this high score.
        // Possible values are:  
        // - "ALL_TIME" - The score is an all-time high score. 
        // - "WEEKLY" - The score is a weekly high score. 
        // - "DAILY" - The score is a daily high score.
        timeSpan?: string,
        // The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.
        writeTimestampMillis?: string,
    }
    
    interface LeaderboardListResponse {
        // The leaderboards.
        items?: Leaderboard[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardListResponse.
        kind?: string,
        // Token corresponding to the next page of results.
        nextPageToken?: string,
    }
    
    interface LeaderboardScoreRank {
        // The number of scores in the leaderboard as a string.
        formattedNumScores?: string,
        // The rank in the leaderboard as a string.
        formattedRank?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardScoreRank.
        kind?: string,
        // The number of scores in the leaderboard.
        numScores?: string,
        // The rank in the leaderboard.
        rank?: string,
    }
    
    interface LeaderboardScores {
        // The scores in the leaderboard.
        items?: LeaderboardEntry[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardScores.
        kind?: string,
        // The pagination token for the next page of results.
        nextPageToken?: string,
        // The total number of scores in the leaderboard.
        numScores?: string,
        // The score of the requesting player on the leaderboard. The player's score may appear both here and in the list of scores above. If you are viewing a public leaderboard and the player is not sharing their gameplay information publicly, the scoreRank and formattedScoreRank values will not be present.
        playerScore?: LeaderboardEntry,
        // The pagination token for the previous page of results.
        prevPageToken?: string,
    }
    
    interface MetagameConfig {
        // Current version of the metagame configuration data. When this data is updated, the version number will be increased by one.
        currentVersion?: number,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#metagameConfig.
        kind?: string,
        // The list of player levels.
        playerLevels?: PlayerLevel[],        
    }
    
    interface NetworkDiagnostics {
        // The Android network subtype.
        androidNetworkSubtype?: number,
        // The Android network type.
        androidNetworkType?: number,
        // iOS network type as defined in Reachability.h.
        iosNetworkType?: number,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#networkDiagnostics.
        kind?: string,
        // The MCC+MNC code for the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperator() On iOS, see: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html
        networkOperatorCode?: string,
        // The name of the carrier of the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperatorName() On iOS: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html#//apple_ref/occ/instp/CTCarrier/carrierName
        networkOperatorName?: string,
        // The amount of time in milliseconds it took for the client to establish a connection with the XMPP server.
        registrationLatencyMillis?: number,
    }
    
    interface ParticipantResult {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#participantResult.
        kind?: string,
        // The ID of the participant.
        participantId?: string,
        // The placement or ranking of the participant in the match results; a number from one to the number of participants in the match. Multiple participants may have the same placing value in case of a type.
        placing?: number,
        // The result of the participant for this match.
        // Possible values are:  
        // - "MATCH_RESULT_WIN" - The participant won the match. 
        // - "MATCH_RESULT_LOSS" - The participant lost the match. 
        // - "MATCH_RESULT_TIE" - The participant tied the match. 
        // - "MATCH_RESULT_NONE" - There was no winner for the match (nobody wins or loses this kind of game.) 
        // - "MATCH_RESULT_DISCONNECT" - The participant disconnected / left during the match. 
        // - "MATCH_RESULT_DISAGREED" - Different clients reported different results for this participant.
        result?: string,
    }
    
    interface PeerChannelDiagnostics {
        // Number of bytes received.
        bytesReceived?: AggregateStats,
        // Number of bytes sent.
        bytesSent?: AggregateStats,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#peerChannelDiagnostics.
        kind?: string,
        // Number of messages lost.
        numMessagesLost?: number,
        // Number of messages received.
        numMessagesReceived?: number,
        // Number of messages sent.
        numMessagesSent?: number,
        // Number of send failures.
        numSendFailures?: number,
        // Roundtrip latency stats in milliseconds.
        roundtripLatencyMillis?: AggregateStats,
    }
    
    interface PeerSessionDiagnostics {
        // Connected time in milliseconds.
        connectedTimestampMillis?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#peerSessionDiagnostics.
        kind?: string,
        // The participant ID of the peer.
        participantId?: string,
        // Reliable channel diagnostics.
        reliableChannel?: PeerChannelDiagnostics,
        // Unreliable channel diagnostics.
        unreliableChannel?: PeerChannelDiagnostics,
    }
    
    interface Played {
        // True if the player was auto-matched with the currently authenticated user.
        autoMatched?: boolean,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#played.
        kind?: string,
        // The last time the player played the game in milliseconds since the epoch in UTC.
        timeMillis?: string,
    }
    
    interface Player {
        // The base URL for the image that represents the player.
        avatarImageUrl?: string,
        // The url to the landscape mode player banner image.
        bannerUrlLandscape?: string,
        // The url to the portrait mode player banner image.
        bannerUrlPortrait?: string,
        // The name to display for the player.
        displayName?: string,
        // An object to represent Play Game experience information for the player.
        experienceInfo?: PlayerExperienceInfo,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#player.
        kind?: string,
        // Details about the last time this player played a multiplayer game with the currently authenticated player. Populated for PLAYED_WITH player collection members.
        lastPlayedWith?: Played,
        // An object representation of the individual components of the player's name. For some players, these fields may not be present.
        name?: {        
            // The family name of this player. In some places, this is known as the last name.
            familyName?: string,
            // The given name of this player. In some places, this is known as the first name.
            givenName?: string,
        },        
        // The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs.
        originalPlayerId?: string,
        // The ID of the player.
        playerId?: string,
        // The player's title rewarded for their game activities.
        title?: string,
    }
    
    interface PlayerAchievement {
        // The state of the achievement.
        // Possible values are:  
        // - "HIDDEN" - Achievement is hidden. 
        // - "REVEALED" - Achievement is revealed. 
        // - "UNLOCKED" - Achievement is unlocked.
        achievementState?: string,
        // The current steps for an incremental achievement.
        currentSteps?: number,
        // Experience points earned for the achievement. This field is absent for achievements that have not yet been unlocked and 0 for achievements that have been unlocked by testers but that are unpublished.
        experiencePoints?: string,
        // The current steps for an incremental achievement as a string.
        formattedCurrentStepsString?: string,
        // The ID of the achievement.
        id?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#playerAchievement.
        kind?: string,
        // The timestamp of the last modification to this achievement's state.
        lastUpdatedTimestamp?: string,
    }
    
    interface PlayerAchievementListResponse {
        // The achievements.
        items?: PlayerAchievement[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#playerAchievementListResponse.
        kind?: string,
        // Token corresponding to the next page of results.
        nextPageToken?: string,
    }
    
    interface PlayerEvent {
        // The ID of the event definition.
        definitionId?: string,
        // The current number of times this event has occurred, as a string. The formatting of this string depends on the configuration of your event in the Play Games Developer Console.
        formattedNumEvents?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#playerEvent.
        kind?: string,
        // The current number of times this event has occurred.
        numEvents?: string,
        // The ID of the player.
        playerId?: string,
    }
    
    interface PlayerEventListResponse {
        // The player events.
        items?: PlayerEvent[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#playerEventListResponse.
        kind?: string,
        // The pagination token for the next page of results.
        nextPageToken?: string,
    }
    
    interface PlayerExperienceInfo {
        // The current number of experience points for the player.
        currentExperiencePoints?: string,
        // The current level of the player.
        currentLevel?: PlayerLevel,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#playerExperienceInfo.
        kind?: string,
        // The timestamp when the player was leveled up, in millis since Unix epoch UTC.
        lastLevelUpTimestampMillis?: string,
        // The next level of the player. If the current level is the maximum level, this should be same as the current level.
        nextLevel?: PlayerLevel,
    }
    
    interface PlayerLeaderboardScore {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#playerLeaderboardScore.
        kind?: string,
        // The ID of the leaderboard this score is in.
        leaderboard_id?: string,
        // The public rank of the score in this leaderboard. This object will not be present if the user is not sharing their scores publicly.
        publicRank?: LeaderboardScoreRank,
        // The formatted value of this score.
        scoreString?: string,
        // Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
        scoreTag?: string,
        // The numerical value of this score.
        scoreValue?: string,
        // The social rank of the score in this leaderboard.
        socialRank?: LeaderboardScoreRank,
        // The time span of this score.
        // Possible values are:  
        // - "ALL_TIME" - The score is an all-time score. 
        // - "WEEKLY" - The score is a weekly score. 
        // - "DAILY" - The score is a daily score.
        timeSpan?: string,
        // The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.
        writeTimestamp?: string,
    }
    
    interface PlayerLeaderboardScoreListResponse {
        // The leaderboard scores.
        items?: PlayerLeaderboardScore[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#playerLeaderboardScoreListResponse.
        kind?: string,
        // The pagination token for the next page of results.
        nextPageToken?: string,
        // The Player resources for the owner of this score.
        player?: Player,
    }
    
    interface PlayerLevel {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#playerLevel.
        kind?: string,
        // The level for the user.
        level?: number,
        // The maximum experience points for this level.
        maxExperiencePoints?: string,
        // The minimum experience points for this level.
        minExperiencePoints?: string,
    }
    
    interface PlayerListResponse {
        // The players.
        items?: Player[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#playerListResponse.
        kind?: string,
        // Token corresponding to the next page of results.
        nextPageToken?: string,
    }
    
    interface PlayerScore {
        // The formatted score for this player score.
        formattedScore?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#playerScore.
        kind?: string,
        // The numerical value for this player score.
        score?: string,
        // Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
        scoreTag?: string,
        // The time span for this player score.
        // Possible values are:  
        // - "ALL_TIME" - The score is an all-time score. 
        // - "WEEKLY" - The score is a weekly score. 
        // - "DAILY" - The score is a daily score.
        timeSpan?: string,
    }
    
    interface PlayerScoreListResponse {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreListResponse.
        kind?: string,
        // The score submissions statuses.
        submittedScores?: PlayerScoreResponse[],        
    }
    
    interface PlayerScoreResponse {
        // The time spans where the submitted score is better than the existing score for that time span.
        // Possible values are:  
        // - "ALL_TIME" - The score is an all-time score. 
        // - "WEEKLY" - The score is a weekly score. 
        // - "DAILY" - The score is a daily score.
        beatenScoreTimeSpans?: string[],        
        // The formatted value of the submitted score.
        formattedScore?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreResponse.
        kind?: string,
        // The leaderboard ID that this score was submitted to.
        leaderboardId?: string,
        // Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
        scoreTag?: string,
        // The scores in time spans that have not been beaten. As an example, the submitted score may be better than the player's DAILY score, but not better than the player's scores for the WEEKLY or ALL_TIME time spans.
        unbeatenScores?: PlayerScore[],        
    }
    
    interface PlayerScoreSubmissionList {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreSubmissionList.
        kind?: string,
        // The score submissions.
        scores?: ScoreSubmission[],        
    }
    
    interface PushToken {
        // The revision of the client SDK used by your application, in the same format that's used by revisions.check. Used to send backward compatible messages. Format: [PLATFORM_TYPE]:[VERSION_NUMBER]. Possible values of PLATFORM_TYPE are:  
        // - IOS - Push token is for iOS
        clientRevision?: string,
        // Unique identifier for this push token.
        id?: PushTokenId,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#pushToken.
        kind?: string,
        // The preferred language for notifications that are sent using this token.
        language?: string,
    }
    
    interface PushTokenId {
        // A push token ID for iOS devices.
        ios?: {        
            // Device token supplied by an iOS system call to register for remote notifications. Encode this field as web-safe base64.
            apns_device_token?: string,
            // Indicates whether this token should be used for the production or sandbox APNS server.
            apns_environment?: string,
        },        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#pushTokenId.
        kind?: string,
    }
    
    interface Quest {
        // The timestamp at which the user accepted the quest in milliseconds since the epoch in UTC. Only present if the player has accepted the quest.
        acceptedTimestampMillis?: string,
        // The ID of the application this quest is part of.
        applicationId?: string,
        // The banner image URL for the quest.
        bannerUrl?: string,
        // The description of the quest.
        description?: string,
        // The timestamp at which the quest ceases to be active in milliseconds since the epoch in UTC.
        endTimestampMillis?: string,
        // The icon image URL for the quest.
        iconUrl?: string,
        // The ID of the quest.
        id?: string,
        // Indicates whether the banner image being returned is a default image, or is game-provided.
        isDefaultBannerUrl?: boolean,
        // Indicates whether the icon image being returned is a default image, or is game-provided.
        isDefaultIconUrl?: boolean,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#quest.
        kind?: string,
        // The timestamp at which the quest was last updated by the user in milliseconds since the epoch in UTC. Only present if the player has accepted the quest.
        lastUpdatedTimestampMillis?: string,
        // The quest milestones.
        milestones?: QuestMilestone[],        
        // The name of the quest.
        name?: string,
        // The timestamp at which the user should be notified that the quest will end soon in milliseconds since the epoch in UTC.
        notifyTimestampMillis?: string,
        // The timestamp at which the quest becomes active in milliseconds since the epoch in UTC.
        startTimestampMillis?: string,
        // The state of the quest.
        // Possible values are:  
        // - "UPCOMING": The quest is upcoming. The user can see the quest, but cannot accept it until it is open. 
        // - "OPEN": The quest is currently open and may be accepted at this time. 
        // - "ACCEPTED": The user is currently participating in this quest. 
        // - "COMPLETED": The user has completed the quest. 
        // - "FAILED": The quest was attempted but was not completed before the deadline expired. 
        // - "EXPIRED": The quest has expired and was not accepted. 
        // - "DELETED": The quest should be deleted from the local database.
        state?: string,
    }
    
    interface QuestContribution {
        // The formatted value of the contribution as a string. Format depends on the configuration for the associated event definition in the Play Games Developer Console.
        formattedValue?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#questContribution.
        kind?: string,
        // The value of the contribution.
        value?: string,
    }
    
    interface QuestCriterion {
        // The total number of times the associated event must be incremented for the player to complete this quest.
        completionContribution?: QuestContribution,
        // The number of increments the player has made toward the completion count event increments required to complete the quest. This value will not exceed the completion contribution.
        // There will be no currentContribution until the player has accepted the quest.
        currentContribution?: QuestContribution,
        // The ID of the event the criterion corresponds to.
        eventId?: string,
        // The value of the event associated with this quest at the time that the quest was accepted. This value may change if event increments that took place before the start of quest are uploaded after the quest starts.
        // There will be no initialPlayerProgress until the player has accepted the quest.
        initialPlayerProgress?: QuestContribution,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#questCriterion.
        kind?: string,
    }
    
    interface QuestListResponse {
        // The quests.
        items?: Quest[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#questListResponse.
        kind?: string,
        // Token corresponding to the next page of results.
        nextPageToken?: string,
    }
    
    interface QuestMilestone {
        // The completion reward data of the milestone, represented as a Base64-encoded string. This is a developer-specified binary blob with size between 0 and 2 KB before encoding.
        completionRewardData?: string,
        // The criteria of the milestone.
        criteria?: QuestCriterion[],        
        // The milestone ID.
        id?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#questMilestone.
        kind?: string,
        // The current state of the milestone.
        // Possible values are:  
        // - "COMPLETED_NOT_CLAIMED" - The milestone is complete, but has not yet been claimed. 
        // - "CLAIMED" - The milestone is complete and has been claimed. 
        // - "NOT_COMPLETED" - The milestone has not yet been completed. 
        // - "NOT_STARTED" - The milestone is for a quest that has not yet been accepted.
        state?: string,
    }
    
    interface RevisionCheckResponse {
        // The version of the API this client revision should use when calling API methods.
        apiVersion?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#revisionCheckResponse.
        kind?: string,
        // The result of the revision check.
        // Possible values are:  
        // - "OK" - The revision being used is current. 
        // - "DEPRECATED" - There is currently a newer version available, but the revision being used still works. 
        // - "INVALID" - The revision being used is not supported in any released version.
        revisionStatus?: string,
    }
    
    interface Room {
        // The ID of the application being played.
        applicationId?: string,
        // Criteria for auto-matching players into this room.
        autoMatchingCriteria?: RoomAutoMatchingCriteria,
        // Auto-matching status for this room. Not set if the room is not currently in the auto-matching queue.
        autoMatchingStatus?: RoomAutoMatchStatus,
        // Details about the room creation.
        creationDetails?: RoomModification,
        // This short description is generated by our servers and worded relative to the player requesting the room. It is intended to be displayed when the room is shown in a list (that is, an invitation to a room.)
        description?: string,
        // The ID of the participant that invited the user to the room. Not set if the user was not invited to the room.
        inviterId?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#room.
        kind?: string,
        // Details about the last update to the room.
        lastUpdateDetails?: RoomModification,
        // The participants involved in the room, along with their statuses. Includes participants who have left or declined invitations.
        participants?: RoomParticipant[],        
        // Globally unique ID for a room.
        roomId?: string,
        // The version of the room status: an increasing counter, used by the client to ignore out-of-order updates to room status.
        roomStatusVersion?: number,
        // The status of the room.
        // Possible values are:  
        // - "ROOM_INVITING" - One or more players have been invited and not responded. 
        // - "ROOM_AUTO_MATCHING" - One or more slots need to be filled by auto-matching. 
        // - "ROOM_CONNECTING" - Players have joined and are connecting to each other (either before or after auto-matching). 
        // - "ROOM_ACTIVE" - All players have joined and connected to each other. 
        // - "ROOM_DELETED" - The room should no longer be shown on the client. Returned in sync calls when a player joins a room (as a tombstone), or for rooms where all joined participants have left.
        status?: string,
        // The variant / mode of the application being played; can be any integer value, or left blank.
        variant?: number,
    }
    
    interface RoomAutoMatchStatus {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#roomAutoMatchStatus.
        kind?: string,
        // An estimate for the amount of time (in seconds) that auto-matching is expected to take to complete.
        waitEstimateSeconds?: number,
    }
    
    interface RoomAutoMatchingCriteria {
        // A bitmask indicating when auto-matches are valid. When ANDed with other exclusive bitmasks, the result must be zero. Can be used to support exclusive roles within a game.
        exclusiveBitmask?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#roomAutoMatchingCriteria.
        kind?: string,
        // The maximum number of players that should be added to the room by auto-matching.
        maxAutoMatchingPlayers?: number,
        // The minimum number of players that should be added to the room by auto-matching.
        minAutoMatchingPlayers?: number,
    }
    
    interface RoomClientAddress {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#roomClientAddress.
        kind?: string,
        // The XMPP address of the client on the Google Games XMPP network.
        xmppAddress?: string,
    }
    
    interface RoomCreateRequest {
        // Criteria for auto-matching players into this room.
        autoMatchingCriteria?: RoomAutoMatchingCriteria,
        // The capabilities that this client supports for realtime communication.
        capabilities?: string[],        
        // Client address for the player creating the room.
        clientAddress?: RoomClientAddress,
        // The player IDs to invite to the room.
        invitedPlayerIds?: string[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#roomCreateRequest.
        kind?: string,
        // Network diagnostics for the client creating the room.
        networkDiagnostics?: NetworkDiagnostics,
        // A randomly generated numeric ID. This number is used at the server to ensure that the request is handled correctly across retries.
        requestId?: string,
        // The variant / mode of the application to be played. This can be any integer value, or left blank. You should use a small number of variants to keep the auto-matching pool as large as possible.
        variant?: number,
    }
    
    interface RoomJoinRequest {
        // The capabilities that this client supports for realtime communication.
        capabilities?: string[],        
        // Client address for the player joining the room.
        clientAddress?: RoomClientAddress,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#roomJoinRequest.
        kind?: string,
        // Network diagnostics for the client joining the room.
        networkDiagnostics?: NetworkDiagnostics,
    }
    
    interface RoomLeaveDiagnostics {
        // Android network subtype. http://developer.android.com/reference/android/net/NetworkInfo.html#getSubtype()
        androidNetworkSubtype?: number,
        // Android network type. http://developer.android.com/reference/android/net/NetworkInfo.html#getType()
        androidNetworkType?: number,
        // iOS network type as defined in Reachability.h.
        iosNetworkType?: number,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#roomLeaveDiagnostics.
        kind?: string,
        // The MCC+MNC code for the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperator() On iOS, see: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html
        networkOperatorCode?: string,
        // The name of the carrier of the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperatorName() On iOS: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html#//apple_ref/occ/instp/CTCarrier/carrierName
        networkOperatorName?: string,
        // Diagnostics about all peer sessions.
        peerSession?: PeerSessionDiagnostics[],        
        // Whether or not sockets were used.
        socketsUsed?: boolean,
    }
    
    interface RoomLeaveRequest {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#roomLeaveRequest.
        kind?: string,
        // Diagnostics for a player leaving the room.
        leaveDiagnostics?: RoomLeaveDiagnostics,
        // Reason for leaving the match.
        // Possible values are:  
        // - "PLAYER_LEFT" - The player chose to leave the room.. 
        // - "GAME_LEFT" - The game chose to remove the player from the room. 
        // - "REALTIME_ABANDONED" - The player switched to another application and abandoned the room. 
        // - "REALTIME_PEER_CONNECTION_FAILURE" - The client was unable to establish a connection to other peer(s). 
        // - "REALTIME_SERVER_CONNECTION_FAILURE" - The client was unable to communicate with the server. 
        // - "REALTIME_SERVER_ERROR" - The client received an error response when it tried to communicate with the server. 
        // - "REALTIME_TIMEOUT" - The client timed out while waiting for a room. 
        // - "REALTIME_CLIENT_DISCONNECTING" - The client disconnects without first calling Leave. 
        // - "REALTIME_SIGN_OUT" - The user signed out of G+ while in the room. 
        // - "REALTIME_GAME_CRASHED" - The game crashed. 
        // - "REALTIME_ROOM_SERVICE_CRASHED" - RoomAndroidService crashed. 
        // - "REALTIME_DIFFERENT_CLIENT_ROOM_OPERATION" - Another client is trying to enter a room. 
        // - "REALTIME_SAME_CLIENT_ROOM_OPERATION" - The same client is trying to enter a new room.
        reason?: string,
    }
    
    interface RoomList {
        // The rooms.
        items?: Room[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#roomList.
        kind?: string,
        // The pagination token for the next page of results.
        nextPageToken?: string,
    }
    
    interface RoomModification {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#roomModification.
        kind?: string,
        // The timestamp at which they modified the room, in milliseconds since the epoch in UTC.
        modifiedTimestampMillis?: string,
        // The ID of the participant that modified the room.
        participantId?: string,
    }
    
    interface RoomP2PStatus {
        // The amount of time in milliseconds it took to establish connections with this peer.
        connectionSetupLatencyMillis?: number,
        // The error code in event of a failure.
        // Possible values are:  
        // - "P2P_FAILED" - The client failed to establish a P2P connection with the peer. 
        // - "PRESENCE_FAILED" - The client failed to register to receive P2P connections. 
        // - "RELAY_SERVER_FAILED" - The client received an error when trying to use the relay server to establish a P2P connection with the peer.
        error?: string,
        // More detailed diagnostic message returned in event of a failure.
        error_reason?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#roomP2PStatus.
        kind?: string,
        // The ID of the participant.
        participantId?: string,
        // The status of the peer in the room.
        // Possible values are:  
        // - "CONNECTION_ESTABLISHED" - The client established a P2P connection with the peer. 
        // - "CONNECTION_FAILED" - The client failed to establish directed presence with the peer.
        status?: string,
        // The amount of time in milliseconds it took to send packets back and forth on the unreliable channel with this peer.
        unreliableRoundtripLatencyMillis?: number,
    }
    
    interface RoomP2PStatuses {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#roomP2PStatuses.
        kind?: string,
        // The updates for the peers.
        updates?: RoomP2PStatus[],        
    }
    
    interface RoomParticipant {
        // True if this participant was auto-matched with the requesting player.
        autoMatched?: boolean,
        // Information about a player that has been anonymously auto-matched against the requesting player. (Either player or autoMatchedPlayer will be set.)
        autoMatchedPlayer?: AnonymousPlayer,
        // The capabilities which can be used when communicating with this participant.
        capabilities?: string[],        
        // Client address for the participant.
        clientAddress?: RoomClientAddress,
        // True if this participant is in the fully connected set of peers in the room.
        connected?: boolean,
        // An identifier for the participant in the scope of the room. Cannot be used to identify a player across rooms or in other contexts.
        id?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#roomParticipant.
        kind?: string,
        // The reason the participant left the room; populated if the participant status is PARTICIPANT_LEFT.
        // Possible values are:  
        // - "PLAYER_LEFT" - The player explicitly chose to leave the room. 
        // - "GAME_LEFT" - The game chose to remove the player from the room. 
        // - "ABANDONED" - The player switched to another application and abandoned the room.
        // - "PEER_CONNECTION_FAILURE" - The client was unable to establish or maintain a connection to other peer(s) in the room.
        // - "SERVER_ERROR" - The client received an error response when it tried to communicate with the server. 
        // - "TIMEOUT" - The client timed out while waiting for players to join and connect. 
        // - "PRESENCE_FAILURE" - The client's XMPP connection ended abruptly.
        leaveReason?: string,
        // Information about the player. Not populated if this player was anonymously auto-matched against the requesting player. (Either player or autoMatchedPlayer will be set.)
        player?: Player,
        // The status of the participant with respect to the room.
        // Possible values are:  
        // - "PARTICIPANT_INVITED" - The participant has been invited to join the room, but has not yet responded. 
        // - "PARTICIPANT_JOINED" - The participant has joined the room (either after creating it or accepting an invitation.) 
        // - "PARTICIPANT_DECLINED" - The participant declined an invitation to join the room. 
        // - "PARTICIPANT_LEFT" - The participant joined the room and then left it.
        status?: string,
    }
    
    interface RoomStatus {
        // Auto-matching status for this room. Not set if the room is not currently in the automatching queue.
        autoMatchingStatus?: RoomAutoMatchStatus,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#roomStatus.
        kind?: string,
        // The participants involved in the room, along with their statuses. Includes participants who have left or declined invitations.
        participants?: RoomParticipant[],        
        // Globally unique ID for a room.
        roomId?: string,
        // The status of the room.
        // Possible values are:  
        // - "ROOM_INVITING" - One or more players have been invited and not responded. 
        // - "ROOM_AUTO_MATCHING" - One or more slots need to be filled by auto-matching. 
        // - "ROOM_CONNECTING" - Players have joined are connecting to each other (either before or after auto-matching). 
        // - "ROOM_ACTIVE" - All players have joined and connected to each other. 
        // - "ROOM_DELETED" - All joined players have left.
        status?: string,
        // The version of the status for the room: an increasing counter, used by the client to ignore out-of-order updates to room status.
        statusVersion?: number,
    }
    
    interface ScoreSubmission {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#scoreSubmission.
        kind?: string,
        // The leaderboard this score is being submitted to.
        leaderboardId?: string,
        // The new score being submitted.
        score?: string,
        // Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
        scoreTag?: string,
        // Signature Values will contain URI-safe characters as defined by section 2.3 of RFC 3986.
        signature?: string,
    }
    
    interface Snapshot {
        // The cover image of this snapshot. May be absent if there is no image.
        coverImage?: SnapshotImage,
        // The description of this snapshot.
        description?: string,
        // The ID of the file underlying this snapshot in the Drive API. Only present if the snapshot is a view on a Drive file and the file is owned by the caller.
        driveId?: string,
        // The duration associated with this snapshot, in millis.
        durationMillis?: string,
        // The ID of the snapshot.
        id?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#snapshot.
        kind?: string,
        // The timestamp (in millis since Unix epoch) of the last modification to this snapshot.
        lastModifiedMillis?: string,
        // The progress value (64-bit integer set by developer) associated with this snapshot.
        progressValue?: string,
        // The title of this snapshot.
        title?: string,
        // The type of this snapshot.
        // Possible values are:  
        // - "SAVE_GAME" - A snapshot representing a save game.
        type?: string,
        // The unique name provided when the snapshot was created.
        uniqueName?: string,
    }
    
    interface SnapshotImage {
        // The height of the image.
        height?: number,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#snapshotImage.
        kind?: string,
        // The MIME type of the image.
        mime_type?: string,
        // The URL of the image. This URL may be invalidated at any time and should not be cached.
        url?: string,
        // The width of the image.
        width?: number,
    }
    
    interface SnapshotListResponse {
        // The snapshots.
        items?: Snapshot[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#snapshotListResponse.
        kind?: string,
        // Token corresponding to the next page of results. If there are no more results, the token is omitted.
        nextPageToken?: string,
    }
    
    interface TurnBasedAutoMatchingCriteria {
        // A bitmask indicating when auto-matches are valid. When ANDed with other exclusive bitmasks, the result must be zero. Can be used to support exclusive roles within a game.
        exclusiveBitmask?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedAutoMatchingCriteria.
        kind?: string,
        // The maximum number of players that should be added to the match by auto-matching.
        maxAutoMatchingPlayers?: number,
        // The minimum number of players that should be added to the match by auto-matching.
        minAutoMatchingPlayers?: number,
    }
    
    interface TurnBasedMatch {
        // The ID of the application being played.
        applicationId?: string,
        // Criteria for auto-matching players into this match.
        autoMatchingCriteria?: TurnBasedAutoMatchingCriteria,
        // Details about the match creation.
        creationDetails?: TurnBasedMatchModification,
        // The data / game state for this match.
        data?: TurnBasedMatchData,
        // This short description is generated by our servers based on turn state and is localized and worded relative to the player requesting the match. It is intended to be displayed when the match is shown in a list.
        description?: string,
        // The ID of the participant that invited the user to the match. Not set if the user was not invited to the match.
        inviterId?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatch.
        kind?: string,
        // Details about the last update to the match.
        lastUpdateDetails?: TurnBasedMatchModification,
        // Globally unique ID for a turn-based match.
        matchId?: string,
        // The number of the match in a chain of rematches. Will be set to 1 for the first match and incremented by 1 for each rematch.
        matchNumber?: number,
        // The version of this match: an increasing counter, used to avoid out-of-date updates to the match.
        matchVersion?: number,
        // The participants involved in the match, along with their statuses. Includes participants who have left or declined invitations.
        participants?: TurnBasedMatchParticipant[],        
        // The ID of the participant that is taking a turn.
        pendingParticipantId?: string,
        // The data / game state for the previous match; set for the first turn of rematches only.
        previousMatchData?: TurnBasedMatchData,
        // The ID of a rematch of this match. Only set for completed matches that have been rematched.
        rematchId?: string,
        // The results reported for this match.
        results?: ParticipantResult[],        
        // The status of the match.
        // Possible values are:  
        // - "MATCH_AUTO_MATCHING" - One or more slots need to be filled by auto-matching; the match cannot be established until they are filled. 
        // - "MATCH_ACTIVE" - The match has started. 
        // - "MATCH_COMPLETE" - The match has finished. 
        // - "MATCH_CANCELED" - The match was canceled. 
        // - "MATCH_EXPIRED" - The match expired due to inactivity. 
        // - "MATCH_DELETED" - The match should no longer be shown on the client. Returned only for tombstones for matches when sync is called.
        status?: string,
        // The status of the current user in the match. Derived from the match type, match status, the user's participant status, and the pending participant for the match.
        // Possible values are:  
        // - "USER_INVITED" - The user has been invited to join the match and has not responded yet. 
        // - "USER_AWAITING_TURN" - The user is waiting for their turn. 
        // - "USER_TURN" - The user has an action to take in the match. 
        // - "USER_MATCH_COMPLETED" - The match has ended (it is completed, canceled, or expired.)
        userMatchStatus?: string,
        // The variant / mode of the application being played; can be any integer value, or left blank.
        variant?: number,
        // The ID of another participant in the match that can be used when describing the participants the user is playing with.
        withParticipantId?: string,
    }
    
    interface TurnBasedMatchCreateRequest {
        // Criteria for auto-matching players into this match.
        autoMatchingCriteria?: TurnBasedAutoMatchingCriteria,
        // The player ids to invite to the match.
        invitedPlayerIds?: string[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchCreateRequest.
        kind?: string,
        // A randomly generated numeric ID. This number is used at the server to ensure that the request is handled correctly across retries.
        requestId?: string,
        // The variant / mode of the application to be played. This can be any integer value, or left blank. You should use a small number of variants to keep the auto-matching pool as large as possible.
        variant?: number,
    }
    
    interface TurnBasedMatchData {
        // The byte representation of the data (limited to 128 kB), as a Base64-encoded string with the URL_SAFE encoding option.
        data?: string,
        // True if this match has data available but it wasn't returned in a list response; fetching the match individually will retrieve this data.
        dataAvailable?: boolean,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchData.
        kind?: string,
    }
    
    interface TurnBasedMatchDataRequest {
        // The byte representation of the data (limited to 128 kB), as a Base64-encoded string with the URL_SAFE encoding option.
        data?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchDataRequest.
        kind?: string,
    }
    
    interface TurnBasedMatchList {
        // The matches.
        items?: TurnBasedMatch[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchList.
        kind?: string,
        // The pagination token for the next page of results.
        nextPageToken?: string,
    }
    
    interface TurnBasedMatchModification {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchModification.
        kind?: string,
        // The timestamp at which they modified the match, in milliseconds since the epoch in UTC.
        modifiedTimestampMillis?: string,
        // The ID of the participant that modified the match.
        participantId?: string,
    }
    
    interface TurnBasedMatchParticipant {
        // True if this participant was auto-matched with the requesting player.
        autoMatched?: boolean,
        // Information about a player that has been anonymously auto-matched against the requesting player. (Either player or autoMatchedPlayer will be set.)
        autoMatchedPlayer?: AnonymousPlayer,
        // An identifier for the participant in the scope of the match. Cannot be used to identify a player across matches or in other contexts.
        id?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchParticipant.
        kind?: string,
        // Information about the player. Not populated if this player was anonymously auto-matched against the requesting player. (Either player or autoMatchedPlayer will be set.)
        player?: Player,
        // The status of the participant with respect to the match.
        // Possible values are:  
        // - "PARTICIPANT_NOT_INVITED_YET" - The participant is slated to be invited to the match, but the invitation has not been sent; the invite will be sent when it becomes their turn. 
        // - "PARTICIPANT_INVITED" - The participant has been invited to join the match, but has not yet responded. 
        // - "PARTICIPANT_JOINED" - The participant has joined the match (either after creating it or accepting an invitation.) 
        // - "PARTICIPANT_DECLINED" - The participant declined an invitation to join the match. 
        // - "PARTICIPANT_LEFT" - The participant joined the match and then left it. 
        // - "PARTICIPANT_FINISHED" - The participant finished playing in the match. 
        // - "PARTICIPANT_UNRESPONSIVE" - The participant did not take their turn in the allotted time.
        status?: string,
    }
    
    interface TurnBasedMatchRematch {
        // Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchRematch.
        kind?: string,
        // The old match that the rematch was created from; will be updated such that the rematchId field will point at the new match.
        previousMatch?: TurnBasedMatch,
        // The newly created match; a rematch of the old match with the same participants.
        rematch?: TurnBasedMatch,
    }
    
    interface TurnBasedMatchResults {
        // The final match data.
        data?: TurnBasedMatchDataRequest,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchResults.
        kind?: string,
        // The version of the match being updated.
        matchVersion?: number,
        // The match results for the participants in the match.
        results?: ParticipantResult[],        
    }
    
    interface TurnBasedMatchSync {
        // The matches.
        items?: TurnBasedMatch[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchSync.
        kind?: string,
        // True if there were more matches available to fetch at the time the response was generated (which were not returned due to page size limits.)
        moreAvailable?: boolean,
        // The pagination token for the next page of results.
        nextPageToken?: string,
    }
    
    interface TurnBasedMatchTurn {
        // The shared game state data after the turn is over.
        data?: TurnBasedMatchDataRequest,
        // Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchTurn.
        kind?: string,
        // The version of this match: an increasing counter, used to avoid out-of-date updates to the match.
        matchVersion?: number,
        // The ID of the participant who should take their turn next. May be set to the current player's participant ID to update match state without changing the turn. If not set, the match will wait for other player(s) to join via automatching; this is only valid if automatch criteria is set on the match with remaining slots for automatched players.
        pendingParticipantId?: string,
        // The match results for the participants in the match.
        results?: ParticipantResult[],        
    }
    
    interface AchievementDefinitionsResource {
        // Lists all the achievement definitions for your application.
        list (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
            maxResults?: number,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<AchievementDefinitionsListResponse>;        
        
    }
    
    
    interface AchievementsResource {
        // Increments the steps of the achievement with the given ID for the currently authenticated player.
        increment (request: {        
            // The ID of the achievement used by this method.
            achievementId: string,
            // A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
            requestId?: string,
            // The number of steps to increment.
            stepsToIncrement: number,
        }) : gapi.client.Request<AchievementIncrementResponse>;        
        
        // Lists the progress for all your application's achievements for the currently authenticated player.
        list (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
            maxResults?: number,
            // The token returned by the previous request.
            pageToken?: string,
            // A player ID. A value of me may be used in place of the authenticated player's ID.
            playerId: string,
            // Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.
            state?: string,
        }) : gapi.client.Request<PlayerAchievementListResponse>;        
        
        // Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player.
        reveal (request: {        
            // The ID of the achievement used by this method.
            achievementId: string,
        }) : gapi.client.Request<AchievementRevealResponse>;        
        
        // Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
        setStepsAtLeast (request: {        
            // The ID of the achievement used by this method.
            achievementId: string,
            // The minimum value to set the steps to.
            steps: number,
        }) : gapi.client.Request<AchievementSetStepsAtLeastResponse>;        
        
        // Unlocks this achievement for the currently authenticated player.
        unlock (request: {        
            // The ID of the achievement used by this method.
            achievementId: string,
        }) : gapi.client.Request<AchievementUnlockResponse>;        
        
        // Updates multiple achievements for the currently authenticated player.
        updateMultiple (request: {        
        }) : gapi.client.Request<AchievementUpdateMultipleResponse>;        
        
    }
    
    
    interface ApplicationsResource {
        // Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified platformType, the returned response will not include any instance data.
        get (request: {        
            // The application ID from the Google Play developer console.
            applicationId: string,
            // The preferred language to use for strings returned by this method.
            language?: string,
            // Restrict application details returned to the specific platform.
            platformType?: string,
        }) : gapi.client.Request<Application>;        
        
        // Indicate that the the currently authenticated user is playing your application.
        played (request: {        
        }) : gapi.client.Request<void>;        
        
        // Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.
        verify (request: {        
            // The application ID from the Google Play developer console.
            applicationId: string,
        }) : gapi.client.Request<ApplicationVerifyResponse>;        
        
    }
    
    
    interface EventsResource {
        // Returns a list showing the current progress on events in this application for the currently authenticated user.
        listByPlayer (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults.
            maxResults?: number,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<PlayerEventListResponse>;        
        
        // Returns a list of the event definitions in this application.
        listDefinitions (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified maxResults.
            maxResults?: number,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<EventDefinitionListResponse>;        
        
        // Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.
        record (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
        }) : gapi.client.Request<EventUpdateResponse>;        
        
    }
    
    
    interface LeaderboardsResource {
        // Retrieves the metadata of the leaderboard with the given ID.
        get (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the leaderboard.
            leaderboardId: string,
        }) : gapi.client.Request<Leaderboard>;        
        
        // Lists all the leaderboard metadata for your application.
        list (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified maxResults.
            maxResults?: number,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<LeaderboardListResponse>;        
        
    }
    
    
    interface MetagameResource {
        // Return the metagame configuration data for the calling application.
        getMetagameConfig (request: {        
        }) : gapi.client.Request<MetagameConfig>;        
        
        // List play data aggregated per category for the player corresponding to playerId.
        listCategoriesByPlayer (request: {        
            // The collection of categories for which data will be returned.
            collection: string,
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified maxResults.
            maxResults?: number,
            // The token returned by the previous request.
            pageToken?: string,
            // A player ID. A value of me may be used in place of the authenticated player's ID.
            playerId: string,
        }) : gapi.client.Request<CategoryListResponse>;        
        
    }
    
    
    interface PlayersResource {
        // Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set playerId to me.
        get (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // A player ID. A value of me may be used in place of the authenticated player's ID.
            playerId: string,
        }) : gapi.client.Request<Player>;        
        
        // Get the collection of players for the currently authenticated user.
        list (request: {        
            // Collection of players being retrieved
            collection: string,
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
            maxResults?: number,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<PlayerListResponse>;        
        
    }
    
    
    interface PushtokensResource {
        // Removes a push token for the current user and application. Removing a non-existent push token will report success.
        remove (request: {        
        }) : gapi.client.Request<void>;        
        
        // Registers a push token for the current user and application.
        update (request: {        
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface QuestMilestonesResource {
        // Report that a reward for the milestone corresponding to milestoneId for the quest corresponding to questId has been claimed by the currently authorized user.
        claim (request: {        
            // The ID of the milestone.
            milestoneId: string,
            // The ID of the quest.
            questId: string,
            // A numeric ID to ensure that the request is handled correctly across retries. Your client application must generate this ID randomly.
            requestId: string,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface QuestsResource {
        // Indicates that the currently authorized user will participate in the quest.
        accept (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the quest.
            questId: string,
        }) : gapi.client.Request<Quest>;        
        
        // Get a list of quests for your application and the currently authenticated player.
        list (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The maximum number of quest resources to return in the response, used for paging. For any response, the actual number of quest resources returned may be less than the specified maxResults. Acceptable values are 1 to 50, inclusive. (Default: 50).
            maxResults?: number,
            // The token returned by the previous request.
            pageToken?: string,
            // A player ID. A value of me may be used in place of the authenticated player's ID.
            playerId: string,
        }) : gapi.client.Request<QuestListResponse>;        
        
    }
    
    
    interface RevisionsResource {
        // Checks whether the games client is out of date.
        check (request: {        
            // The revision of the client SDK used by your application. Format:
            // [PLATFORM_TYPE]:[VERSION_NUMBER]. Possible values of PLATFORM_TYPE are:
            //  
            // - "ANDROID" - Client is running the Android SDK. 
            // - "IOS" - Client is running the iOS SDK. 
            // - "WEB_APP" - Client is running as a Web App.
            clientRevision: string,
        }) : gapi.client.Request<RevisionCheckResponse>;        
        
    }
    
    
    interface RoomsResource {
        // Create a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
        create (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
        }) : gapi.client.Request<Room>;        
        
        // Decline an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
        decline (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the room.
            roomId: string,
        }) : gapi.client.Request<Room>;        
        
        // Dismiss an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
        dismiss (request: {        
            // The ID of the room.
            roomId: string,
        }) : gapi.client.Request<void>;        
        
        // Get the data for a room.
        get (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the room.
            roomId: string,
        }) : gapi.client.Request<Room>;        
        
        // Join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
        join (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the room.
            roomId: string,
        }) : gapi.client.Request<Room>;        
        
        // Leave a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
        leave (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the room.
            roomId: string,
        }) : gapi.client.Request<Room>;        
        
        // Returns invitations to join rooms.
        list (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The maximum number of rooms to return in the response, used for paging. For any response, the actual number of rooms to return may be less than the specified maxResults.
            maxResults?: number,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<RoomList>;        
        
        // Updates sent by a client reporting the status of peers in a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
        reportStatus (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the room.
            roomId: string,
        }) : gapi.client.Request<RoomStatus>;        
        
    }
    
    
    interface ScoresResource {
        // Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, leaderboardId can be set to ALL to retrieve data for all leaderboards in a given time span.
        // NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
        get (request: {        
            // The types of ranks to return. If the parameter is omitted, no ranks will be returned.
            includeRankType?: string,
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.
            leaderboardId: string,
            // The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
            maxResults?: number,
            // The token returned by the previous request.
            pageToken?: string,
            // A player ID. A value of me may be used in place of the authenticated player's ID.
            playerId: string,
            // The time span for the scores and ranks you're requesting.
            timeSpan: string,
        }) : gapi.client.Request<PlayerLeaderboardScoreListResponse>;        
        
        // Lists the scores in a leaderboard, starting from the top.
        list (request: {        
            // The collection of scores you're requesting.
            collection: string,
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the leaderboard.
            leaderboardId: string,
            // The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
            maxResults?: number,
            // The token returned by the previous request.
            pageToken?: string,
            // The time span for the scores and ranks you're requesting.
            timeSpan: string,
        }) : gapi.client.Request<LeaderboardScores>;        
        
        // Lists the scores in a leaderboard around (and including) a player's score.
        listWindow (request: {        
            // The collection of scores you're requesting.
            collection: string,
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the leaderboard.
            leaderboardId: string,
            // The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
            maxResults?: number,
            // The token returned by the previous request.
            pageToken?: string,
            // The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.
            resultsAbove?: number,
            // True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.
            returnTopIfAbsent?: boolean,
            // The time span for the scores and ranks you're requesting.
            timeSpan: string,
        }) : gapi.client.Request<LeaderboardScores>;        
        
        // Submits a score to the specified leaderboard.
        submit (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the leaderboard.
            leaderboardId: string,
            // The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units.
            score: string,
            // Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
            scoreTag?: string,
        }) : gapi.client.Request<PlayerScoreResponse>;        
        
        // Submits multiple scores to leaderboards.
        submitMultiple (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
        }) : gapi.client.Request<PlayerScoreListResponse>;        
        
    }
    
    
    interface SnapshotsResource {
        // Retrieves the metadata for a given snapshot ID.
        get (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the snapshot.
            snapshotId: string,
        }) : gapi.client.Request<Snapshot>;        
        
        // Retrieves a list of snapshots created by your application for the player corresponding to the player ID.
        list (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified maxResults.
            maxResults?: number,
            // The token returned by the previous request.
            pageToken?: string,
            // A player ID. A value of me may be used in place of the authenticated player's ID.
            playerId: string,
        }) : gapi.client.Request<SnapshotListResponse>;        
        
    }
    
    
    interface TurnBasedMatchesResource {
        // Cancel a turn-based match.
        cancel (request: {        
            // The ID of the match.
            matchId: string,
        }) : gapi.client.Request<void>;        
        
        // Create a turn-based match.
        create (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
        }) : gapi.client.Request<TurnBasedMatch>;        
        
        // Decline an invitation to play a turn-based match.
        decline (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the match.
            matchId: string,
        }) : gapi.client.Request<TurnBasedMatch>;        
        
        // Dismiss a turn-based match from the match list. The match will no longer show up in the list and will not generate notifications.
        dismiss (request: {        
            // The ID of the match.
            matchId: string,
        }) : gapi.client.Request<void>;        
        
        // Finish a turn-based match. Each player should make this call once, after all results are in. Only the player whose turn it is may make the first call to Finish, and can pass in the final match state.
        finish (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the match.
            matchId: string,
        }) : gapi.client.Request<TurnBasedMatch>;        
        
        // Get the data for a turn-based match.
        get (request: {        
            // Get match data along with metadata.
            includeMatchData?: boolean,
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the match.
            matchId: string,
        }) : gapi.client.Request<TurnBasedMatch>;        
        
        // Join a turn-based match.
        join (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the match.
            matchId: string,
        }) : gapi.client.Request<TurnBasedMatch>;        
        
        // Leave a turn-based match when it is not the current player's turn, without canceling the match.
        leave (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the match.
            matchId: string,
        }) : gapi.client.Request<TurnBasedMatch>;        
        
        // Leave a turn-based match during the current player's turn, without canceling the match.
        leaveTurn (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the match.
            matchId: string,
            // The version of the match being updated.
            matchVersion: number,
            // The ID of another participant who should take their turn next. If not set, the match will wait for other player(s) to join via automatching; this is only valid if automatch criteria is set on the match with remaining slots for automatched players.
            pendingParticipantId?: string,
        }) : gapi.client.Request<TurnBasedMatch>;        
        
        // Returns turn-based matches the player is or was involved in.
        list (request: {        
            // True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
            includeMatchData?: boolean,
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
            maxCompletedMatches?: number,
            // The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
            maxResults?: number,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<TurnBasedMatchList>;        
        
        // Create a rematch of a match that was previously completed, with the same participants. This can be called by only one player on a match still in their list; the player must have called Finish first. Returns the newly created match; it will be the caller's turn.
        rematch (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the match.
            matchId: string,
            // A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
            requestId?: string,
        }) : gapi.client.Request<TurnBasedMatchRematch>;        
        
        // Returns turn-based matches the player is or was involved in that changed since the last sync call, with the least recent changes coming first. Matches that should be removed from the local cache will have a status of MATCH_DELETED.
        sync (request: {        
            // True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
            includeMatchData?: boolean,
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
            maxCompletedMatches?: number,
            // The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
            maxResults?: number,
            // The token returned by the previous request.
            pageToken?: string,
        }) : gapi.client.Request<TurnBasedMatchSync>;        
        
        // Commit the results of a player turn.
        takeTurn (request: {        
            // The preferred language to use for strings returned by this method.
            language?: string,
            // The ID of the match.
            matchId: string,
        }) : gapi.client.Request<TurnBasedMatch>;        
        
    }
    
}

declare module gapi.client.games {
    var achievementDefinitions: gapi.client.games.AchievementDefinitionsResource; 
    
    var achievements: gapi.client.games.AchievementsResource; 
    
    var applications: gapi.client.games.ApplicationsResource; 
    
    var events: gapi.client.games.EventsResource; 
    
    var leaderboards: gapi.client.games.LeaderboardsResource; 
    
    var metagame: gapi.client.games.MetagameResource; 
    
    var players: gapi.client.games.PlayersResource; 
    
    var pushtokens: gapi.client.games.PushtokensResource; 
    
    var questMilestones: gapi.client.games.QuestMilestonesResource; 
    
    var quests: gapi.client.games.QuestsResource; 
    
    var revisions: gapi.client.games.RevisionsResource; 
    
    var rooms: gapi.client.games.RoomsResource; 
    
    var scores: gapi.client.games.ScoresResource; 
    
    var snapshots: gapi.client.games.SnapshotsResource; 
    
    var turnBasedMatches: gapi.client.games.TurnBasedMatchesResource; 
    
}
