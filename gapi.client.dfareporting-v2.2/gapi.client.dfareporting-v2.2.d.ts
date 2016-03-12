// Type definitions for Google DCM/DFA Reporting And Trafficking API v2.2
// Project: https://developers.google.com/doubleclick-advertisers/reporting/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.dfareporting {
    
    interface Account {
        // Account permissions assigned to this account.
        accountPermissionIds?: string[],        
        // Profile for this account. This is a read-only field that can be left blank.
        accountProfile?: string,
        // Whether this account is active.
        active?: boolean,
        // Maximum number of active ads allowed for this account.
        activeAdsLimitTier?: string,
        // Whether to serve creatives with Active View tags. If disabled, viewability data will not be available for any impressions.
        activeViewOptOut?: boolean,
        // User role permissions available to the user roles of this account.
        availablePermissionIds?: string[],        
        // Whether campaigns created in this account will be enabled for comScore vCE by default.
        comscoreVceEnabled?: boolean,
        // ID of the country associated with this account.
        countryId?: string,
        // ID of currency associated with this account. This is a required field.
        // Acceptable values are: 
        // - "1" for USD 
        // - "2" for GBP 
        // - "3" for ESP 
        // - "4" for SEK 
        // - "5" for CAD 
        // - "6" for JPY 
        // - "7" for DEM 
        // - "8" for AUD 
        // - "9" for FRF 
        // - "10" for ITL 
        // - "11" for DKK 
        // - "12" for NOK 
        // - "13" for FIM 
        // - "14" for ZAR 
        // - "15" for IEP 
        // - "16" for NLG 
        // - "17" for EUR 
        // - "18" for KRW 
        // - "19" for TWD 
        // - "20" for SGD 
        // - "21" for CNY 
        // - "22" for HKD 
        // - "23" for NZD 
        // - "24" for MYR 
        // - "25" for BRL 
        // - "26" for PTE 
        // - "27" for MXP 
        // - "28" for CLP 
        // - "29" for TRY 
        // - "30" for ARS 
        // - "31" for PEN 
        // - "32" for ILS 
        // - "33" for CHF 
        // - "34" for VEF 
        // - "35" for COP 
        // - "36" for GTQ 
        // - "37" for PLN 
        // - "39" for INR 
        // - "40" for THB 
        // - "41" for IDR 
        // - "42" for CZK 
        // - "43" for RON 
        // - "44" for HUF 
        // - "45" for RUB 
        // - "46" for AED 
        // - "47" for BGN 
        // - "48" for HRK
        currencyId?: string,
        // Default placement dimensions for this account.
        defaultCreativeSizeId?: string,
        // Description of this account.
        description?: string,
        // ID of this account. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#account".
        kind?: string,
        // Locale of this account.
        // Acceptable values are: 
        // - "cs" (Czech) 
        // - "de" (German) 
        // - "en" (English) 
        // - "en-GB" (English United Kingdom) 
        // - "es" (Spanish) 
        // - "fr" (French) 
        // - "it" (Italian) 
        // - "ja" (Japanese) 
        // - "ko" (Korean) 
        // - "pl" (Polish) 
        // - "pt-BR" (Portuguese Brazil) 
        // - "ru" (Russian) 
        // - "sv" (Swedish) 
        // - "tr" (Turkish) 
        // - "zh-CN" (Chinese Simplified) 
        // - "zh-TW" (Chinese Traditional)
        locale?: string,
        // Maximum image size allowed for this account.
        maximumImageSize?: string,
        // Name of this account. This is a required field, and must be less than 128 characters long and be globally unique.
        name?: string,
        // Whether campaigns created in this account will be enabled for Nielsen OCR reach ratings by default.
        nielsenOcrEnabled?: boolean,
        // Reporting configuration of this account.
        reportsConfiguration?: ReportsConfiguration,
        // File size limit in kilobytes of Rich Media teaser creatives. Must be between 1 and 10240.
        teaserSizeLimit?: string,
    }
    
    interface AccountActiveAdSummary {
        // ID of the account.
        accountId?: string,
        // Ads that have been activated for the account
        activeAds?: string,
        // Maximum number of active ads allowed for the account.
        activeAdsLimitTier?: string,
        // Ads that can be activated for the account.
        availableAds?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountActiveAdSummary".
        kind?: string,
    }
    
    interface AccountPermission {
        // Account profiles associated with this account permission.
        // 
        // Possible values are:
        // - "ACCOUNT_PROFILE_BASIC"
        // - "ACCOUNT_PROFILE_STANDARD"
        accountProfiles?: string[],        
        // ID of this account permission.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermission".
        kind?: string,
        // Administrative level required to enable this account permission.
        level?: string,
        // Name of this account permission.
        name?: string,
        // Permission group of this account permission.
        permissionGroupId?: string,
    }
    
    interface AccountPermissionGroup {
        // ID of this account permission group.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroup".
        kind?: string,
        // Name of this account permission group.
        name?: string,
    }
    
    interface AccountPermissionGroupsListResponse {
        // Account permission group collection.
        accountPermissionGroups?: AccountPermissionGroup[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroupsListResponse".
        kind?: string,
    }
    
    interface AccountPermissionsListResponse {
        // Account permission collection.
        accountPermissions?: AccountPermission[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionsListResponse".
        kind?: string,
    }
    
    interface AccountUserProfile {
        // Account ID of the user profile. This is a read-only field that can be left blank.
        accountId?: string,
        // Whether this user profile is active. This defaults to false, and must be set true on insert for the user profile to be usable.
        active?: boolean,
        // Filter that describes which advertisers are visible to the user profile.
        advertiserFilter?: ObjectFilter,
        // Filter that describes which campaigns are visible to the user profile.
        campaignFilter?: ObjectFilter,
        // Comments for this user profile.
        comments?: string,
        // Email of the user profile. The email addresss must be linked to a Google Account. This field is required on insertion and is read-only after insertion.
        email?: string,
        // ID of the user profile. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfile".
        kind?: string,
        // Locale of the user profile. This is a required field.
        // Acceptable values are:  
        // - "cs" (Czech) 
        // - "de" (German) 
        // - "en" (English) 
        // - "en-GB" (English United Kingdom) 
        // - "es" (Spanish) 
        // - "fr" (French) 
        // - "it" (Italian) 
        // - "ja" (Japanese) 
        // - "ko" (Korean) 
        // - "pl" (Polish) 
        // - "pt-BR" (Portuguese Brazil)
        // - "ru" (Russian) 
        // - "sv" (Swedish) 
        // - "tr" (Turkish) 
        // - "zh-CN" (Chinese Simplified) 
        // - "zh-TW" (Chinese Traditional)
        locale?: string,
        // Name of the user profile. This is a required field. Must be less than 64 characters long, must be globally unique, and cannot contain whitespace or any of the following characters: "&;"#%,".
        name?: string,
        // Filter that describes which sites are visible to the user profile.
        siteFilter?: ObjectFilter,
        // Subaccount ID of the user profile. This is a read-only field that can be left blank.
        subaccountId?: string,
        // Trafficker type of this user profile.
        traffickerType?: string,
        // User type of the user profile. This is a read-only field that can be left blank.
        userAccessType?: string,
        // Filter that describes which user roles are visible to the user profile.
        userRoleFilter?: ObjectFilter,
        // User role ID of the user profile. This is a required field.
        userRoleId?: string,
    }
    
    interface AccountUserProfilesListResponse {
        // Account user profile collection.
        accountUserProfiles?: AccountUserProfile[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfilesListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface AccountsListResponse {
        // Account collection.
        accounts?: Account[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface Activities {
        // List of activity filters. The dimension values need to be all either of type "dfa:activity" or "dfa:activityGroup".
        filters?: DimensionValue[],        
        // The kind of resource this is, in this case dfareporting#activities.
        kind?: string,
        // List of names of floodlight activity metrics.
        metricNames?: string[],        
    }
    
    interface Ad {
        // Account ID of this ad. This is a read-only field that can be left blank.
        accountId?: string,
        // Whether this ad is active.
        active?: boolean,
        // Advertiser ID of this ad. This is a required field on insertion.
        advertiserId?: string,
        // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
        advertiserIdDimensionValue?: DimensionValue,
        // Whether this ad is archived.
        archived?: boolean,
        // Audience segment ID that is being targeted for this ad. Applicable when type is AD_SERVING_STANDARD_AD.
        audienceSegmentId?: string,
        // Campaign ID of this ad. This is a required field on insertion.
        campaignId?: string,
        // Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
        campaignIdDimensionValue?: DimensionValue,
        // Click-through URL for this ad. This is a required field on insertion. Applicable when type is AD_SERVING_CLICK_TRACKER.
        clickThroughUrl?: ClickThroughUrl,
        // Click-through URL suffix properties for this ad. Applies to the URL in the ad or (if overriding ad properties) the URL in the creative.
        clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties,
        // Comments for this ad.
        comments?: string,
        // Compatibility of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. WEB and WEB_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
        compatibility?: string,
        // Information about the creation of this ad.This is a read-only field.
        createInfo?: LastModifiedInfo,
        // Creative group assignments for this ad. Applicable when type is AD_SERVING_CLICK_TRACKER. Only one assignment per creative group number is allowed for a maximum of two assignments.
        creativeGroupAssignments?: CreativeGroupAssignment[],        
        // Creative rotation for this ad. Applicable when type is AD_SERVING_DEFAULT_AD, AD_SERVING_STANDARD_AD, or AD_SERVING_TRACKING. When type is AD_SERVING_DEFAULT_AD, this field should have exactly one creativeAssignment.
        creativeRotation?: CreativeRotation,
        // Time and day targeting information for this ad. Applicable when type is AD_SERVING_STANDARD_AD.
        dayPartTargeting?: DayPartTargeting,
        // Default click-through event tag properties for this ad.
        defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties,
        // Delivery schedule information for this ad. Applicable when type is AD_SERVING_STANDARD_AD or AD_SERVING_TRACKING. This field along with subfields priority and impressionRatio are required on insertion when type is AD_SERVING_STANDARD_AD.
        deliverySchedule?: DeliverySchedule,
        // Whether this ad is a dynamic click tracker. Applicable when type is AD_SERVING_CLICK_TRACKER. This is a required field on insert, and is read-only after insert.
        dynamicClickTracker?: boolean,
        // Date and time that this ad should stop serving. Must be later than the start time. This is a required field on insertion.
        endTime?: string,
        // Event tag overrides for this ad.
        eventTagOverrides?: EventTagOverride[],        
        // Geographical targeting information for this ad.Applicable when type is AD_SERVING_STANDARD_AD.
        geoTargeting?: GeoTargeting,
        // ID of this ad. This is a read-only, auto-generated field.
        id?: string,
        // Dimension value for the ID of this ad. This is a read-only, auto-generated field.
        idDimensionValue?: DimensionValue,
        // Key-value targeting information for this ad. Applicable when type is AD_SERVING_STANDARD_AD.
        keyValueTargetingExpression?: KeyValueTargetingExpression,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#ad".
        kind?: string,
        // Information about the most recent modification of this ad. This is a read-only field.
        lastModifiedInfo?: LastModifiedInfo,
        // Name of this ad. This is a required field and must be less than 256 characters long.
        name?: string,
        // Placement assignments for this ad.
        placementAssignments?: PlacementAssignment[],        
        // Applicable when type is AD_SERVING_STANDARD_AD. Remarketing list targeting expression for this ad.
        remarketingListExpression?: ListTargetingExpression,
        // Size of this ad. Applicable when type is AD_SERVING_DEFAULT_AD.
        size?: Size,
        // Whether this ad is ssl compliant. This is a read-only field that is auto-generated when the ad is inserted or updated.
        sslCompliant?: boolean,
        // Whether this ad requires ssl. This is a read-only field that is auto-generated when the ad is inserted or updated.
        sslRequired?: boolean,
        // Date and time that this ad should start serving. If creating an ad, this field must be a time in the future. This is a required field on insertion.
        startTime?: string,
        // Subaccount ID of this ad. This is a read-only field that can be left blank.
        subaccountId?: string,
        // Technology platform targeting information for this ad. Applicable when type is AD_SERVING_STANDARD_AD.
        technologyTargeting?: TechnologyTargeting,
        // Type of ad. This is a required field on insertion. Note that default ads (AD_SERVING_DEFAULT_AD) cannot be created directly (see Creative resource).
        type?: string,
    }
    
    interface AdSlot {
        // Comment for this ad slot.
        comment?: string,
        // Ad slot compatibility. WEB and WEB_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
        compatibility?: string,
        // Height of this ad slot.
        height?: string,
        // ID of the placement from an external platform that is linked to this ad slot.
        linkedPlacementId?: string,
        // Name of this ad slot.
        name?: string,
        // Payment source type of this ad slot.
        paymentSourceType?: string,
        // Primary ad slot of a roadblock inventory item.
        primary?: boolean,
        // Width of this ad slot.
        width?: string,
    }
    
    interface AdsListResponse {
        // Ad collection.
        ads?: Ad[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#adsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface Advertiser {
        // Account ID of this advertiser.This is a read-only field that can be left blank.
        accountId?: string,
        // ID of the advertiser group this advertiser belongs to. You can group advertisers for reporting purposes, allowing you to see aggregated information for all advertisers in each group.
        advertiserGroupId?: string,
        // Suffix added to click-through URL of ad creative associations under this advertiser. Must be less than 129 characters long.
        clickThroughUrlSuffix?: string,
        // ID of the click-through event tag to apply by default to the landing pages of this advertiser's campaigns.
        defaultClickThroughEventTagId?: string,
        // Default email address used in sender field for tag emails.
        defaultEmail?: string,
        // Floodlight configuration ID of this advertiser. The floodlight configuration ID will be created automatically, so on insert this field should be left blank. This field can be set to another advertiser's floodlight configuration ID in order to share that advertiser's floodlight configuration with this advertiser, so long as: 
        // - This advertiser's original floodlight configuration is not already associated with floodlight activities or floodlight activity groups. 
        // - This advertiser's original floodlight configuration is not already shared with another advertiser.
        floodlightConfigurationId?: string,
        // Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.
        floodlightConfigurationIdDimensionValue?: DimensionValue,
        // ID of this advertiser. This is a read-only, auto-generated field.
        id?: string,
        // Dimension value for the ID of this advertiser. This is a read-only, auto-generated field.
        idDimensionValue?: DimensionValue,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiser".
        kind?: string,
        // Name of this advertiser. This is a required field and must be less than 256 characters long and unique among advertisers of the same account.
        name?: string,
        // Original floodlight configuration before any sharing occurred. Set the floodlightConfigurationId of this advertiser to originalFloodlightConfigurationId to unshare the advertiser's current floodlight configuration. You cannot unshare an advertiser's floodlight configuration if the shared configuration has activities associated with any campaign or placement.
        originalFloodlightConfigurationId?: string,
        // Status of this advertiser.
        status?: string,
        // Subaccount ID of this advertiser.This is a read-only field that can be left blank.
        subaccountId?: string,
        // Suspension status of this advertiser.
        suspended?: boolean,
    }
    
    interface AdvertiserGroup {
        // Account ID of this advertiser group. This is a read-only field that can be left blank.
        accountId?: string,
        // ID of this advertiser group. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroup".
        kind?: string,
        // Name of this advertiser group. This is a required field and must be less than 256 characters long and unique among advertiser groups of the same account.
        name?: string,
    }
    
    interface AdvertiserGroupsListResponse {
        // Advertiser group collection.
        advertiserGroups?: AdvertiserGroup[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroupsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface AdvertisersListResponse {
        // Advertiser collection.
        advertisers?: Advertiser[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertisersListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface AudienceSegment {
        // Weight allocated to this segment. Must be between 1 and 1000. The weight assigned will be understood in proportion to the weights assigned to other segments in the same segment group.
        allocation?: number,
        // ID of this audience segment. This is a read-only, auto-generated field.
        id?: string,
        // Name of this audience segment. This is a required field and must be less than 65 characters long.
        name?: string,
    }
    
    interface AudienceSegmentGroup {
        // Audience segments assigned to this group. The number of segments must be between 2 and 100.
        audienceSegments?: AudienceSegment[],        
        // ID of this audience segment group. This is a read-only, auto-generated field.
        id?: string,
        // Name of this audience segment group. This is a required field and must be less than 65 characters long.
        name?: string,
    }
    
    interface Browser {
        // ID referring to this grouping of browser and version numbers. This is the ID used for targeting.
        browserVersionId?: string,
        // DART ID of this browser. This is the ID used when generating reports.
        dartId?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#browser".
        kind?: string,
        // Major version number (leftmost number) of this browser. For example, for Chrome 5.0.376.86 beta, this field should be set to 5. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is.
        majorVersion?: string,
        // Minor version number (number after first dot on left) of this browser. For example, for Chrome 5.0.375.86 beta, this field should be set to 0. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is.
        minorVersion?: string,
        // Name of this browser.
        name?: string,
    }
    
    interface BrowsersListResponse {
        // Browser collection.
        browsers?: Browser[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#browsersListResponse".
        kind?: string,
    }
    
    interface Campaign {
        // Account ID of this campaign. This is a read-only field that can be left blank.
        accountId?: string,
        // Additional creative optimization configurations for the campaign.
        additionalCreativeOptimizationConfigurations?: CreativeOptimizationConfiguration[],        
        // Advertiser group ID of the associated advertiser.
        advertiserGroupId?: string,
        // Advertiser ID of this campaign. This is a required field.
        advertiserId?: string,
        // Dimension value for the advertiser ID of this campaign. This is a read-only, auto-generated field.
        advertiserIdDimensionValue?: DimensionValue,
        // Whether this campaign has been archived.
        archived?: boolean,
        // Audience segment groups assigned to this campaign. Cannot have more than 300 segment groups.
        audienceSegmentGroups?: AudienceSegmentGroup[],        
        // Billing invoice code included in the DCM client billing invoices associated with the campaign.
        billingInvoiceCode?: string,
        // Click-through URL suffix override properties for this campaign.
        clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties,
        // Arbitrary comments about this campaign. Must be less than 256 characters long.
        comment?: string,
        // Whether comScore vCE reports are enabled for this campaign.
        comscoreVceEnabled?: boolean,
        // Information about the creation of this campaign. This is a read-only field.
        createInfo?: LastModifiedInfo,
        // List of creative group IDs that are assigned to the campaign.
        creativeGroupIds?: string[],        
        // Creative optimization configuration for the campaign.
        creativeOptimizationConfiguration?: CreativeOptimizationConfiguration,
        // Click-through event tag ID override properties for this campaign.
        defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties,
        // Date on which the campaign will stop running. On insert, the end date must be today or a future date. The end date must be later than or be the same as the start date. If, for example, you set 6/25/2015 as both the start and end dates, the effective campaign run date is just that day only, 6/25/2015. The hours, minutes, and seconds of the end date should not be set, as doing so will result in an error. This is a required field.
        endDate?: string,
        // Overrides that can be used to activate or deactivate advertiser event tags.
        eventTagOverrides?: EventTagOverride[],        
        // External ID for this campaign.
        externalId?: string,
        // ID of this campaign. This is a read-only auto-generated field.
        id?: string,
        // Dimension value for the ID of this campaign. This is a read-only, auto-generated field.
        idDimensionValue?: DimensionValue,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaign".
        kind?: string,
        // Information about the most recent modification of this campaign. This is a read-only field.
        lastModifiedInfo?: LastModifiedInfo,
        // Lookback window settings for the campaign.
        lookbackConfiguration?: LookbackConfiguration,
        // Name of this campaign. This is a required field and must be less than 256 characters long and unique among campaigns of the same advertiser.
        name?: string,
        // Whether Nielsen reports are enabled for this campaign.
        nielsenOcrEnabled?: boolean,
        // Date on which the campaign starts running. The start date can be any date. The hours, minutes, and seconds of the start date should not be set, as doing so will result in an error. This is a required field.
        startDate?: string,
        // Subaccount ID of this campaign. This is a read-only field that can be left blank.
        subaccountId?: string,
        // Campaign trafficker contact emails.
        traffickerEmails?: string[],        
    }
    
    interface CampaignCreativeAssociation {
        // ID of the creative associated with the campaign. This is a required field.
        creativeId?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociation".
        kind?: string,
    }
    
    interface CampaignCreativeAssociationsListResponse {
        // Campaign creative association collection
        campaignCreativeAssociations?: CampaignCreativeAssociation[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociationsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface CampaignsListResponse {
        // Campaign collection.
        campaigns?: Campaign[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface ChangeLog {
        // Account ID of the modified object.
        accountId?: string,
        // Action which caused the change.
        action?: string,
        // Time when the object was modified.
        changeTime?: string,
        // Field name of the object which changed.
        fieldName?: string,
        // ID of this change log.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLog".
        kind?: string,
        // New value of the object field.
        newValue?: string,
        // ID of the object of this change log. The object could be a campaign, placement, ad, or other type.
        objectId?: string,
        // Object type of the change log.
        objectType?: string,
        // Old value of the object field.
        oldValue?: string,
        // Subaccount ID of the modified object.
        subaccountId?: string,
        // Transaction ID of this change log. When a single API call results in many changes, each change will have a separate ID in the change log but will share the same transactionId.
        transactionId?: string,
        // ID of the user who modified the object.
        userProfileId?: string,
        // User profile name of the user who modified the object.
        userProfileName?: string,
    }
    
    interface ChangeLogsListResponse {
        // Change log collection.
        changeLogs?: ChangeLog[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLogsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface CitiesListResponse {
        // City collection.
        cities?: City[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#citiesListResponse".
        kind?: string,
    }
    
    interface City {
        // Country code of the country to which this city belongs.
        countryCode?: string,
        // DART ID of the country to which this city belongs.
        countryDartId?: string,
        // DART ID of this city. This is the ID used for targeting and generating reports.
        dartId?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#city".
        kind?: string,
        // Metro region code of the metro region (DMA) to which this city belongs.
        metroCode?: string,
        // ID of the metro region (DMA) to which this city belongs.
        metroDmaId?: string,
        // Name of this city.
        name?: string,
        // Region code of the region to which this city belongs.
        regionCode?: string,
        // DART ID of the region to which this city belongs.
        regionDartId?: string,
    }
    
    interface ClickTag {
        // Advertiser event name associated with the click tag. This field is used by ENHANCED_BANNER, ENHANCED_IMAGE, and HTML5_BANNER creatives.
        eventName?: string,
        // Parameter name for the specified click tag. For ENHANCED_IMAGE creative assets, this field must match the value of the creative asset's creativeAssetId.name field.
        name?: string,
        // Parameter value for the specified click tag. This field contains a click-through url.
        value?: string,
    }
    
    interface ClickThroughUrl {
        // Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: 
        // - If defaultLandingPage is enabled then the campaign's default landing page URL is assigned to this field.
        // - If defaultLandingPage is not enabled and a landingPageId is specified then that landing page's URL is assigned to this field.
        // - If neither of the above cases apply, then the customClickThroughUrl is assigned to this field.
        computedClickThroughUrl?: string,
        // Custom click-through URL. Applicable if the defaultLandingPage field is set to false and the landingPageId field is left unset.
        customClickThroughUrl?: string,
        // Whether the campaign default landing page is used.
        defaultLandingPage?: boolean,
        // ID of the landing page for the click-through URL. Applicable if the defaultLandingPage field is set to false.
        landingPageId?: string,
    }
    
    interface ClickThroughUrlSuffixProperties {
        // Click-through URL suffix to apply to all ads in this entity's scope. Must be less than 128 characters long.
        clickThroughUrlSuffix?: string,
        // Whether this entity should override the inherited click-through URL suffix with its own defined value.
        overrideInheritedSuffix?: boolean,
    }
    
    interface CompanionClickThroughOverride {
        // Click-through URL of this companion click-through override.
        clickThroughUrl?: ClickThroughUrl,
        // ID of the creative for this companion click-through override.
        creativeId?: string,
    }
    
    interface CompatibleFields {
        // Contains items that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".
        crossDimensionReachReportCompatibleFields?: CrossDimensionReachReportCompatibleFields,
        // Contains items that are compatible to be selected for a report of type "FLOODLIGHT".
        floodlightReportCompatibleFields?: FloodlightReportCompatibleFields,
        // The kind of resource this is, in this case dfareporting#compatibleFields.
        kind?: string,
        // Contains items that are compatible to be selected for a report of type "PATH_TO_CONVERSION".
        pathToConversionReportCompatibleFields?: PathToConversionReportCompatibleFields,
        // Contains items that are compatible to be selected for a report of type "REACH".
        reachReportCompatibleFields?: ReachReportCompatibleFields,
        // Contains items that are compatible to be selected for a report of type "STANDARD".
        reportCompatibleFields?: ReportCompatibleFields,
    }
    
    interface ConnectionType {
        // ID of this connection type.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionType".
        kind?: string,
        // Name of this connection type.
        name?: string,
    }
    
    interface ConnectionTypesListResponse {
        // Collection of connection types such as broadband and mobile.
        connectionTypes?: ConnectionType[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionTypesListResponse".
        kind?: string,
    }
    
    interface ContentCategoriesListResponse {
        // Content category collection.
        contentCategories?: ContentCategory[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategoriesListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface ContentCategory {
        // Account ID of this content category. This is a read-only field that can be left blank.
        accountId?: string,
        // ID of this content category. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategory".
        kind?: string,
        // Name of this content category. This is a required field and must be less than 256 characters long and unique among content categories of the same account.
        name?: string,
    }
    
    interface CountriesListResponse {
        // Country collection.
        countries?: Country[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#countriesListResponse".
        kind?: string,
    }
    
    interface Country {
        // Country code.
        countryCode?: string,
        // DART ID of this country. This is the ID used for targeting and generating reports.
        dartId?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#country".
        kind?: string,
        // Name of this country.
        name?: string,
        // Whether ad serving supports secure servers in this country.
        sslEnabled?: boolean,
    }
    
    interface Creative {
        // Account ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types.
        accountId?: string,
        // Whether the creative is active. Applicable to all creative types.
        active?: boolean,
        // Ad parameters user for VPAID creative. This is a read-only field. Applicable to the following creative types: all VPAID.
        adParameters?: string,
        // Keywords for a Rich Media creative. Keywords let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use keywords to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
        adTagKeys?: string[],        
        // Advertiser ID of this creative. This is a required field. Applicable to all creative types.
        advertiserId?: string,
        // Whether script access is allowed for this creative. This is a read-only and deprecated field which will automatically be set to true on update. Applicable to the following creative types: FLASH_INPAGE.
        allowScriptAccess?: boolean,
        // Whether the creative is archived. Applicable to all creative types.
        archived?: boolean,
        // Type of artwork used for the creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
        artworkType?: string,
        // Authoring tool for HTML5 banner creatives. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
        authoringTool?: string,
        // Whether images are automatically advanced for enhanced image creatives. Applicable to the following creative types: ENHANCED_IMAGE.
        auto_advance_images?: boolean,
        // The 6-character HTML color code, beginning with #, for the background of the window area where the Flash file is displayed. Default is white. Applicable to the following creative types: FLASH_INPAGE.
        backgroundColor?: string,
        // Click-through URL for backup image. Applicable to the following creative types: ENHANCED_BANNER, FLASH_INPAGE, and HTML5_BANNER.
        backupImageClickThroughUrl?: string,
        // List of feature dependencies that will cause a backup image to be served if the browser that serves the ad does not support them. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative asset correctly. This field is initially auto-generated to contain all features detected by DCM for all the assets of this creative and can then be modified by the client. To reset this field, copy over all the creativeAssets' detected features. Applicable to the following creative types: ENHANCED_BANNER and HTML5_BANNER.
        backupImageFeatures?: string[],        
        // Reporting label used for HTML5 banner backup image. Applicable to the following creative types: ENHANCED_BANNER.
        backupImageReportingLabel?: string,
        // Target window for backup image. Applicable to the following creative types: ENHANCED_BANNER, FLASH_INPAGE, and HTML5_BANNER.
        backupImageTargetWindow?: TargetWindow,
        // Click tags of the creative. For ENHANCED_BANNER, FLASH_INPAGE, and HTML5_BANNER creatives, this is a subset of detected click tags for the assets associated with this creative. After creating a flash asset, detected click tags will be returned in the creativeAssetMetadata. When inserting the creative, populate the creative clickTags field using the creativeAssetMetadata.clickTags field. For ENHANCED_IMAGE creatives, there should be exactly one entry in this list for each image creative asset. A click tag is matched with a corresponding creative asset by matching the clickTag.name field with the creativeAsset.assetIdentifier.name field. Applicable to the following creative types: ENHANCED_BANNER, ENHANCED_IMAGE, FLASH_INPAGE, HTML5_BANNER.
        clickTags?: ClickTag[],        
        // Industry standard ID assigned to creative for reach and frequency. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID.
        commercialId?: string,
        // List of companion creatives assigned to an in-Stream videocreative. Acceptable values include IDs of existing flash and image creatives. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID.
        companionCreatives?: string[],        
        // Compatibilities associated with this creative. This is a read-only field. WEB and WEB_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. Applicable to all creative types.
        // 
        // Acceptable values are:
        // - "APP"
        // - "APP_INTERSTITIAL"
        // - "IN_STREAM_VIDEO"
        // - "WEB"
        // - "WEB_INTERSTITIAL"
        compatibility?: string[],        
        // Whether Flash assets associated with the creative need to be automatically converted to HTML5. This flag is enabled by default and users can choose to disable it if they don't want the system to generate and use HTML5 asset for this creative. Applicable to the following creative types: ENHANCED_BANNER and FLASH_INPAGE.
        convertFlashToHtml5?: boolean,
        // List of counter events configured for the creative. For ENHANCED_IMAGE creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: ENHANCED_IMAGE, all RICH_MEDIA, and all VPAID.
        counterCustomEvents?: CreativeCustomEvent[],        
        // Assets associated with a creative. Applicable to all but the following creative types: INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and REDIRECT
        creativeAssets?: CreativeAsset[],        
        // Creative field assignments for this creative. Applicable to all creative types.
        creativeFieldAssignments?: CreativeFieldAssignment[],        
        // Custom key-values for a Rich Media creative. Key-values let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use key-values to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
        customKeyValues?: string[],        
        // List of exit events configured for the creative. For ENHANCED_BANNER and ENHANCED_IMAGE creatives, these are read-only and auto-generated from clickTags, For ENHANCED_BANNER, an event is also created from the backupImageReportingLabel. Applicable to the following creative types: ENHANCED_BANNER, ENHANCED_IMAGE, all RICH_MEDIA, and all VPAID.
        exitCustomEvents?: CreativeCustomEvent[],        
        // OpenWindow FSCommand of this creative. This lets the SWF file communicate with either Flash Player or the program hosting Flash Player, such as a web browser. This is only triggered if allowScriptAccess field is true. Applicable to the following creative types: FLASH_INPAGE.
        fsCommand?: FsCommand,
        // HTML code for the creative. This is a required field when applicable. This field is ignored if htmlCodeLocked is false. Applicable to the following creative types: all CUSTOM, FLASH_INPAGE, and HTML5_BANNER, and all RICH_MEDIA.
        htmlCode?: string,
        // Whether HTML code is DCM-generated or manually entered. Set to true to ignore changes to htmlCode. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER.
        htmlCodeLocked?: boolean,
        // ID of this creative. This is a read-only, auto-generated field. Applicable to all creative types.
        id?: string,
        // Dimension value for the ID of this creative. This is a read-only field. Applicable to all creative types.
        idDimensionValue?: DimensionValue,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creative".
        kind?: string,
        // Creative last modification information. This is a read-only field. Applicable to all creative types.
        lastModifiedInfo?: LastModifiedInfo,
        // Latest Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
        latestTraffickedCreativeId?: string,
        // Name of the creative. This is a required field and must be less than 256 characters long. Applicable to all creative types.
        name?: string,
        // Override CSS value for rich media creatives. Applicable to the following creative types: all RICH_MEDIA.
        overrideCss?: string,
        // URL of hosted image or hosted video or another ad tag. For INSTREAM_VIDEO_REDIRECT creatives this is the in-stream video redirect URL. The standard for a VAST (Video Ad Serving Template) ad response allows for a redirect link to another VAST 2.0 or 3.0 call. This is a required field when applicable. Applicable to the following creative types: INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, REDIRECT, and INSTREAM_VIDEO_REDIRECT
        redirectUrl?: string,
        // ID of current rendering version. This is a read-only field. Applicable to all creative types.
        renderingId?: string,
        // Dimension value for the rendering ID of this creative. This is a read-only field. Applicable to all creative types.
        renderingIdDimensionValue?: DimensionValue,
        // The minimum required Flash plugin version for this creative. For example, 11.2.202.235. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
        requiredFlashPluginVersion?: string,
        // The internal Flash version for this creative as calculated by DoubleClick Studio. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE, ENHANCED_BANNER, all RICH_MEDIA, and all VPAID.
        requiredFlashVersion?: number,
        // Size associated with this creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. This is a required field when applicable; however for IMAGE and FLASH_INPAGE creatives, if left blank, this field will be automatically set using the actual size of the associated image assets. Applicable to the following creative types: ENHANCED_BANNER, ENHANCED_IMAGE, FLASH_INPAGE, HTML5_BANNER, IMAGE, and all RICH_MEDIA.
        size?: Size,
        // Whether the user can choose to skip the creative. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID.
        skippable?: boolean,
        // Whether the creative is SSL-compliant. This is a read-only field. Applicable to all creative types.
        sslCompliant?: boolean,
        // Whether creative should be treated as SSL compliant even if the system scan shows it's not. Applicable to all creative types.
        sslOverride?: boolean,
        // Studio advertiser ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
        studioAdvertiserId?: string,
        // Studio creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
        studioCreativeId?: string,
        // Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
        studioTraffickedCreativeId?: string,
        // Subaccount ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types.
        subaccountId?: string,
        // Third-party URL used to record backup image impressions. Applicable to the following creative types: all RICH_MEDIA
        thirdPartyBackupImageImpressionsUrl?: string,
        // Third-party URL used to record rich media impressions. Applicable to the following creative types: all RICH_MEDIA
        thirdPartyRichMediaImpressionsUrl?: string,
        // Third-party URLs for tracking in-stream video creative events. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID.
        thirdPartyUrls?: ThirdPartyTrackingUrl[],        
        // List of timer events configured for the creative. For ENHANCED_IMAGE creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: ENHANCED_IMAGE, all RICH_MEDIA, and all VPAID.
        timerCustomEvents?: CreativeCustomEvent[],        
        // Combined size of all creative assets. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
        totalFileSize?: string,
        // Type of this creative.This is a required field. Applicable to all creative types.
        type?: string,
        // The version number helps you keep track of multiple versions of your creative in your reports. The version number will always be auto-generated during insert operations to start at 1. For tracking creatives the version cannot be incremented and will always remain at 1. For all other creative types the version can be incremented only by 1 during update operations. In addition, the version will be automatically incremented by 1 when undergoing Rich Media creative merging. Applicable to all creative types.
        version?: number,
        // Description of the video ad. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID.
        videoDescription?: string,
        // Creative video duration in seconds. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO, all RICH_MEDIA, and all VPAID.
        videoDuration?: number,
    }
    
    interface CreativeAsset {
        // Whether ActionScript3 is enabled for the flash asset. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE and ENHANCED_BANNER.
        actionScript3?: boolean,
        // Whether the video asset is active. This is a read-only field for VPAID_NON_LINEAR assets. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
        active?: boolean,
        // Possible alignments for an asset. This is a read-only field. Applicable to the following creative types: RICH_MEDIA_MULTI_FLOATING.
        alignment?: string,
        // Artwork type of rich media creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
        artworkType?: string,
        // Identifier of this asset. This is the same identifier returned during creative asset insert operation. This is a required field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
        assetIdentifier?: CreativeAssetId,
        // Exit event configured for the backup image. Applicable to the following creative types: all RICH_MEDIA.
        backupImageExit?: CreativeCustomEvent,
        // Detected bit-rate for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
        bitRate?: number,
        // Rich media child asset type. This is a read-only field. Applicable to the following creative types: all VPAID.
        childAssetType?: string,
        // Size of an asset when collapsed. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID. Additionally, applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING or ASSET_DISPLAY_TYPE_PEEL_DOWN.
        collapsedSize?: Size,
        // Custom start time in seconds for making the asset visible. Applicable to the following creative types: all RICH_MEDIA.
        customStartTimeValue?: number,
        // List of feature dependencies for the creative asset that are detected by DCM. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field. Applicable to the following creative types: ENHANCED_BANNER and HTML5_BANNER.
        detectedFeatures?: string[],        
        // Type of rich media asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
        displayType?: string,
        // Duration in seconds for which an asset will be displayed. Applicable to the following creative types: INSTREAM_VIDEO and VPAID_LINEAR.
        duration?: number,
        // Duration type for which an asset will be displayed. Applicable to the following creative types: all RICH_MEDIA.
        durationType?: string,
        // Detected expanded dimension for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
        expandedDimension?: Size,
        // File size associated with this creative asset. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
        fileSize?: string,
        // Flash version of the asset. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE, ENHANCED_BANNER, all RICH_MEDIA, and all VPAID.
        flashVersion?: number,
        // Whether to hide Flash objects flag for an asset. Applicable to the following creative types: all RICH_MEDIA.
        hideFlashObjects?: boolean,
        // Whether to hide selection boxes flag for an asset. Applicable to the following creative types: all RICH_MEDIA.
        hideSelectionBoxes?: boolean,
        // Whether the asset is horizontally locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
        horizontallyLocked?: boolean,
        // Numeric ID of this creative asset. This is a required field and should not be modified. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
        id?: string,
        // Detected MIME type for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
        mimeType?: string,
        // Offset position for an asset in collapsed mode. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID. Additionally, only applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING or ASSET_DISPLAY_TYPE_PEEL_DOWN.
        offset?: OffsetPosition,
        // Whether the backup asset is original or changed by the user in DCM. Applicable to the following creative types: all RICH_MEDIA.
        originalBackup?: boolean,
        // Offset position for an asset. Applicable to the following creative types: all RICH_MEDIA.
        position?: OffsetPosition,
        // Offset left unit for an asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
        positionLeftUnit?: string,
        // Offset top unit for an asset. This is a read-only field if the asset displayType is ASSET_DISPLAY_TYPE_OVERLAY. Applicable to the following creative types: all RICH_MEDIA.
        positionTopUnit?: string,
        // Progressive URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
        progressiveServingUrl?: string,
        // Whether the asset pushes down other content. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable when the asset offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height.
        pushdown?: boolean,
        // Pushdown duration in seconds for an asset. Must be between 0 and 9.99. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable when the asset pushdown field is true, the offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height.
        pushdownDuration?: number,
        // Role of the asset in relation to creative. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. This is a required field.
        // PRIMARY applies to ENHANCED_BANNER, FLASH_INPAGE, HTML5_BANNER, IMAGE, IMAGE_GALLERY, all RICH_MEDIA (which may contain multiple primary assets), and all VPAID creatives.
        // BACKUP_IMAGE applies to ENHANCED_BANNER, FLASH_INPAGE, HTML5_BANNER, all RICH_MEDIA, and all VPAID creatives.
        // ADDITIONAL_IMAGE and ADDITIONAL_FLASH apply to FLASH_INPAGE creatives.
        // OTHER refers to assets from sources other than DCM, such as Studio uploaded assets, applicable to all RICH_MEDIA and all VPAID creatives.
        // PARENT_VIDEO refers to videos uploaded by the user in DCM and is applicable to INSTREAM_VIDEO and VPAID_LINEAR creatives.
        // TRANSCODED_VIDEO refers to videos transcoded by DCM from PARENT_VIDEO assets and is applicable to INSTREAM_VIDEO and VPAID_LINEAR creatives.
        // ALTERNATE_VIDEO refers to the DCM representation of child asset videos from Studio, and is applicable to VPAID_LINEAR creatives. These cannot be added or removed within DCM.
        // For VPAID_LINEAR creatives, PARENT_VIDEO, TRANSCODED_VIDEO and ALTERNATE_VIDEO assets that are marked active serve as backup in case the VPAID creative cannot be served. Only PARENT_VIDEO assets can be added or removed for an INSTREAM_VIDEO or VPAID_LINEAR creative.
        role?: string,
        // Size associated with this creative asset. This is a required field when applicable; however for IMAGE and FLASH_INPAGE creatives, if left blank, this field will be automatically set using the actual size of the associated image asset. Applicable to the following creative types: ENHANCED_BANNER, ENHANCED_IMAGE, FLASH_INPAGE, HTML5_BANNER, IMAGE, and all RICH_MEDIA.
        size?: Size,
        // Whether the asset is SSL-compliant. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
        sslCompliant?: boolean,
        // Initial wait time type before making the asset visible. Applicable to the following creative types: all RICH_MEDIA.
        startTimeType?: string,
        // Streaming URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
        streamingServingUrl?: string,
        // Whether the asset is transparent. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable to HTML5 assets.
        transparency?: boolean,
        // Whether the asset is vertically locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
        verticallyLocked?: boolean,
        // Detected video duration for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
        videoDuration?: number,
        // Window mode options for flash assets. Applicable to the following creative types: FLASH_INPAGE, RICH_MEDIA_EXPANDING, RICH_MEDIA_IM_EXPAND, RICH_MEDIA_INPAGE, and RICH_MEDIA_INPAGE_FLOATING.
        windowMode?: string,
        // zIndex value of an asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable to assets whose displayType is NOT one of the following types: ASSET_DISPLAY_TYPE_INPAGE or ASSET_DISPLAY_TYPE_OVERLAY.
        zIndex?: number,
        // File name of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
        zipFilename?: string,
        // Size of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
        zipFilesize?: string,
    }
    
    interface CreativeAssetId {
        // Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is used to identify the uploaded asset. Characters in the name must be alphanumeric or one of the following: ".-_ ". Spaces are allowed.
        name?: string,
        // Type of asset to upload. This is a required field. IMAGE is solely used for IMAGE creatives. Other image assets should use HTML_IMAGE.
        type?: string,
    }
    
    interface CreativeAssetMetadata {
        // ID of the creative asset. This is a required field.
        assetIdentifier?: CreativeAssetId,
        // List of detected click tags for assets. This is a read-only auto-generated field.
        clickTags?: ClickTag[],        
        // List of feature dependencies for the creative asset that are detected by DCM. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field.
        detectedFeatures?: string[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeAssetMetadata".
        kind?: string,
        // Rules validated during code generation that generated a warning. This is a read-only, auto-generated field.
        // 
        // Possible values are:
        // - "CLICK_TAG_NON_TOP_LEVEL"
        // - "CLICK_TAG_MISSING"
        // - "CLICK_TAG_MORE_THAN_ONE"
        // - "CLICK_TAG_INVALID"
        // - "ORPHANED_ASSET"
        // - "PRIMARY_HTML_MISSING"
        // - "EXTERNAL_FILE_REFERENCED"
        // - "MRAID_REFERENCED"
        // - "ADMOB_REFERENCED"
        // - "FILE_TYPE_INVALID"
        // - "ZIP_INVALID"
        // - "LINKED_FILE_NOT_FOUND"
        // - "MAX_FLASH_VERSION_11"
        // - "NOT_SSL_COMPLIANT"
        // - "FILE_DETAIL_EMPTY"
        // - "ASSET_INVALID"
        // - "GWD_PROPERTIES_INVALID"
        // - "ENABLER_UNSUPPORTED_METHOD_DCM"
        // - "ASSET_FORMAT_UNSUPPORTED_DCM"
        // - "COMPONENT_UNSUPPORTED_DCM"
        // - "HTML5_FEATURE_UNSUPPORTED' "
        warnedValidationRules?: string[],        
    }
    
    interface CreativeAssignment {
        // Whether this creative assignment is active. When true, the creative will be included in the ad's rotation.
        active?: boolean,
        // Whether applicable event tags should fire when this creative assignment is rendered. If this value is unset when the ad is inserted or updated, it will default to true for all creative types EXCEPT for INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO.
        applyEventTags?: boolean,
        // Click-through URL of the creative assignment.
        clickThroughUrl?: ClickThroughUrl,
        // Companion creative overrides for this creative assignment. Applicable to video ads.
        companionCreativeOverrides?: CompanionClickThroughOverride[],        
        // Creative group assignments for this creative assignment. Only one assignment per creative group number is allowed for a maximum of two assignments.
        creativeGroupAssignments?: CreativeGroupAssignment[],        
        // ID of the creative to be assigned. This is a required field.
        creativeId?: string,
        // Dimension value for the ID of the creative. This is a read-only, auto-generated field.
        creativeIdDimensionValue?: DimensionValue,
        // Date and time that the assigned creative should stop serving. Must be later than the start time.
        endTime?: string,
        // Rich media exit overrides for this creative assignment.
        // Applicable when the creative type is any of the following: 
        // - RICH_MEDIA_INPAGE
        // - RICH_MEDIA_INPAGE_FLOATING
        // - RICH_MEDIA_IM_EXPAND
        // - RICH_MEDIA_EXPANDING
        // - RICH_MEDIA_INTERSTITIAL_FLOAT
        // - RICH_MEDIA_MOBILE_IN_APP
        // - RICH_MEDIA_MULTI_FLOATING
        // - RICH_MEDIA_PEEL_DOWN
        // - ADVANCED_BANNER
        // - VPAID_LINEAR
        // - VPAID_NON_LINEAR
        richMediaExitOverrides?: RichMediaExitOverride[],        
        // Sequence number of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_SEQUENTIAL.
        sequence?: number,
        // Whether the creative to be assigned is SSL-compliant. This is a read-only field that is auto-generated when the ad is inserted or updated.
        sslCompliant?: boolean,
        // Date and time that the assigned creative should start serving.
        startTime?: string,
        // Weight of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_RANDOM.
        weight?: number,
    }
    
    interface CreativeCustomEvent {
        // User-entered name for the event.
        advertiserCustomEventName?: string,
        // Type of the event. This is a read-only field.
        advertiserCustomEventType?: string,
        // Artwork label column, used to link events in DCM back to events in Studio. This is a required field and should not be modified after insertion.
        artworkLabel?: string,
        // Artwork type used by the creative.This is a read-only field.
        artworkType?: string,
        // Exit URL of the event. This field is used only for exit events.
        exitUrl?: string,
        // ID of this event. This is a required field and should not be modified after insertion.
        id?: string,
        // Properties for rich media popup windows. This field is used only for exit events.
        popupWindowProperties?: PopupWindowProperties,
        // Target type used by the event.
        targetType?: string,
        // Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field.
        videoReportingId?: string,
    }
    
    interface CreativeField {
        // Account ID of this creative field. This is a read-only field that can be left blank.
        accountId?: string,
        // Advertiser ID of this creative field. This is a required field on insertion.
        advertiserId?: string,
        // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
        advertiserIdDimensionValue?: DimensionValue,
        // ID of this creative field. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeField".
        kind?: string,
        // Name of this creative field. This is a required field and must be less than 256 characters long and unique among creative fields of the same advertiser.
        name?: string,
        // Subaccount ID of this creative field. This is a read-only field that can be left blank.
        subaccountId?: string,
    }
    
    interface CreativeFieldAssignment {
        // ID of the creative field.
        creativeFieldId?: string,
        // ID of the creative field value.
        creativeFieldValueId?: string,
    }
    
    interface CreativeFieldValue {
        // ID of this creative field value. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValue".
        kind?: string,
        // Value of this creative field value. It needs to be less than 256 characters in length and unique per creative field.
        value?: string,
    }
    
    interface CreativeFieldValuesListResponse {
        // Creative field value collection.
        creativeFieldValues?: CreativeFieldValue[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValuesListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface CreativeFieldsListResponse {
        // Creative field collection.
        creativeFields?: CreativeField[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface CreativeGroup {
        // Account ID of this creative group. This is a read-only field that can be left blank.
        accountId?: string,
        // Advertiser ID of this creative group. This is a required field on insertion.
        advertiserId?: string,
        // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
        advertiserIdDimensionValue?: DimensionValue,
        // Subgroup of the creative group. Assign your creative groups to one of the following subgroups in order to filter or manage them more easily. This field is required on insertion and is read-only after insertion.
        // Acceptable values are: 
        // - 1
        // - 2
        groupNumber?: number,
        // ID of this creative group. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroup".
        kind?: string,
        // Name of this creative group. This is a required field and must be less than 256 characters long and unique among creative groups of the same advertiser.
        name?: string,
        // Subaccount ID of this creative group. This is a read-only field that can be left blank.
        subaccountId?: string,
    }
    
    interface CreativeGroupAssignment {
        // ID of the creative group to be assigned.
        creativeGroupId?: string,
        // Creative group number of the creative group assignment.
        creativeGroupNumber?: string,
    }
    
    interface CreativeGroupsListResponse {
        // Creative group collection.
        creativeGroups?: CreativeGroup[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroupsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface CreativeOptimizationConfiguration {
        // ID of this creative optimization config. This field is auto-generated when the campaign is inserted or updated. It can be null for existing campaigns.
        id?: string,
        // Name of this creative optimization config. This is a required field and must be less than 129 characters long.
        name?: string,
        // List of optimization activities associated with this configuration.
        optimizationActivitys?: OptimizationActivity[],        
        // Optimization model for this configuration.
        optimizationModel?: string,
    }
    
    interface CreativeRotation {
        // Creative assignments in this creative rotation.
        creativeAssignments?: CreativeAssignment[],        
        // Creative optimization configuration that is used by this ad. It should refer to one of the existing optimization configurations in the ad's campaign. If it is unset or set to 0, then the campaign's default optimization configuration will be used for this ad.
        creativeOptimizationConfigurationId?: string,
        // Type of creative rotation. Can be used to specify whether to use sequential or random rotation.
        type?: string,
        // Strategy for calculating weights. Used with CREATIVE_ROTATION_TYPE_RANDOM.
        weightCalculationStrategy?: string,
    }
    
    interface CreativeSettings {
        // Header text for iFrames for this site. Must be less than or equal to 2000 characters long.
        iFrameFooter?: string,
        // Header text for iFrames for this site. Must be less than or equal to 2000 characters long.
        iFrameHeader?: string,
    }
    
    interface CreativesListResponse {
        // Creative collection.
        creatives?: Creative[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativesListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface CrossDimensionReachReportCompatibleFields {
        // Dimensions which are compatible to be selected in the "breakdown" section of the report.
        breakdown?: Dimension[],        
        // Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
        dimensionFilters?: Dimension[],        
        // The kind of resource this is, in this case dfareporting#crossDimensionReachReportCompatibleFields.
        kind?: string,
        // Metrics which are compatible to be selected in the "metricNames" section of the report.
        metrics?: Metric[],        
        // Metrics which are compatible to be selected in the "overlapMetricNames" section of the report.
        overlapMetrics?: Metric[],        
    }
    
    interface CustomRichMediaEvents {
        // List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName.
        filteredEventIds?: DimensionValue[],        
        // The kind of resource this is, in this case dfareporting#customRichMediaEvents.
        kind?: string,
    }
    
    interface DateRange {
        // The end date of the date range, inclusive. A string of the format: "yyyy-MM-dd".
        endDate?: string,
        // The kind of resource this is, in this case dfareporting#dateRange.
        kind?: string,
        // The date range relative to the date of when the report is run.
        relativeDateRange?: string,
        // The start date of the date range, inclusive. A string of the format: "yyyy-MM-dd".
        startDate?: string,
    }
    
    interface DayPartTargeting {
        // Days of the week when the ad will serve.
        // 
        // Acceptable values are:
        // - "SUNDAY"
        // - "MONDAY"
        // - "TUESDAY"
        // - "WEDNESDAY"
        // - "THURSDAY"
        // - "FRIDAY"
        // - "SATURDAY"
        daysOfWeek?: string[],        
        // Hours of the day when the ad will serve. Must be an integer between 0 and 23 (inclusive), where 0 is midnight to 1 AM, and 23 is 11 PM to midnight. Can be specified with days of week, in which case the ad would serve during these hours on the specified days. For example, if Monday, Wednesday, Friday are the days of week specified and 9-10am, 3-5pm (hours 9, 15, and 16) is specified, the ad would serve Monday, Wednesdays, and Fridays at 9-10am and 3-5pm.
        hoursOfDay?: number[],        
        // Whether or not to use the user's local time. If false, the America/New York time zone applies.
        userLocalTime?: boolean,
    }
    
    interface DefaultClickThroughEventTagProperties {
        // ID of the click-through event tag to apply to all ads in this entity's scope.
        defaultClickThroughEventTagId?: string,
        // Whether this entity should override the inherited default click-through event tag with its own defined value.
        overrideInheritedEventTag?: boolean,
    }
    
    interface DeliverySchedule {
        // Limit on the number of times an individual user can be served the ad within a specified period of time.
        frequencyCap?: FrequencyCap,
        // Whether or not hard cutoff is enabled. If true, the ad will not serve after the end date and time. Otherwise the ad will continue to be served until it has reached its delivery goals.
        hardCutoff?: boolean,
        // Impression ratio for this ad. This ratio determines how often each ad is served relative to the others. For example, if ad A has an impression ratio of 1 and ad B has an impression ratio of 3, then DCM will serve ad B three times as often as ad A. Must be between 1 and 10.
        impressionRatio?: string,
        // Serving priority of an ad, with respect to other ads. The lower the priority number, the greater the priority with which it is served.
        priority?: string,
    }
    
    interface DfpSettings {
        // DFP network code for this directory site.
        dfp_network_code?: string,
        // DFP network name for this directory site.
        dfp_network_name?: string,
        // Whether this directory site accepts programmatic placements.
        programmaticPlacementAccepted?: boolean,
        // Whether this directory site accepts publisher-paid tags.
        pubPaidPlacementAccepted?: boolean,
        // Whether this directory site is available only via DoubleClick Publisher Portal.
        publisherPortalOnly?: boolean,
    }
    
    interface Dimension {
        // The kind of resource this is, in this case dfareporting#dimension.
        kind?: string,
        // The dimension name, e.g. dfa:advertiser
        name?: string,
    }
    
    interface DimensionFilter {
        // The name of the dimension to filter.
        dimensionName?: string,
        // The kind of resource this is, in this case dfareporting#dimensionFilter.
        kind?: string,
        // The value of the dimension to filter.
        value?: string,
    }
    
    interface DimensionValue {
        // The name of the dimension.
        dimensionName?: string,
        // The eTag of this response for caching purposes.
        etag?: string,
        // The ID associated with the value if available.
        id?: string,
        // The kind of resource this is, in this case dfareporting#dimensionValue.
        kind?: string,
        // Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
        matchType?: string,
        // The value of the dimension.
        value?: string,
    }
    
    interface DimensionValueList {
        // The eTag of this response for caching purposes.
        etag?: string,
        // The dimension values returned in this response.
        items?: DimensionValue[],        
        // The kind of list this is, in this case dfareporting#dimensionValueList.
        kind?: string,
        // Continuation token used to page through dimension values. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
        nextPageToken?: string,
    }
    
    interface DimensionValueRequest {
        // The name of the dimension for which values should be requested.
        dimensionName?: string,
        // The end date of the date range for which to retrieve dimension values. A string of the format "yyyy-MM-dd".
        endDate?: string,
        // The list of filters by which to filter values. The filters are ANDed.
        filters?: DimensionFilter[],        
        // The kind of request this is, in this case dfareporting#dimensionValueRequest.
        kind?: string,
        // The start date of the date range for which to retrieve dimension values. A string of the format "yyyy-MM-dd".
        startDate?: string,
    }
    
    interface DirectorySite {
        // Whether this directory site is active.
        active?: boolean,
        // Directory site contacts.
        contactAssignments?: DirectorySiteContactAssignment[],        
        // Country ID of this directory site.
        countryId?: string,
        // Currency ID of this directory site.
        // Possible values are: 
        // - "1" for USD 
        // - "2" for GBP 
        // - "3" for ESP 
        // - "4" for SEK 
        // - "5" for CAD 
        // - "6" for JPY 
        // - "7" for DEM 
        // - "8" for AUD 
        // - "9" for FRF 
        // - "10" for ITL 
        // - "11" for DKK 
        // - "12" for NOK 
        // - "13" for FIM 
        // - "14" for ZAR 
        // - "15" for IEP 
        // - "16" for NLG 
        // - "17" for EUR 
        // - "18" for KRW 
        // - "19" for TWD 
        // - "20" for SGD 
        // - "21" for CNY 
        // - "22" for HKD 
        // - "23" for NZD 
        // - "24" for MYR 
        // - "25" for BRL 
        // - "26" for PTE 
        // - "27" for MXP 
        // - "28" for CLP 
        // - "29" for TRY 
        // - "30" for ARS 
        // - "31" for PEN 
        // - "32" for ILS 
        // - "33" for CHF 
        // - "34" for VEF 
        // - "35" for COP 
        // - "36" for GTQ 
        // - "37" for PLN 
        // - "39" for INR 
        // - "40" for THB 
        // - "41" for IDR 
        // - "42" for CZK 
        // - "43" for RON 
        // - "44" for HUF 
        // - "45" for RUB 
        // - "46" for AED 
        // - "47" for BGN 
        // - "48" for HRK
        currencyId?: string,
        // Description of this directory site.
        description?: string,
        // ID of this directory site. This is a read-only, auto-generated field.
        id?: string,
        // Dimension value for the ID of this directory site. This is a read-only, auto-generated field.
        idDimensionValue?: DimensionValue,
        // Tag types for regular placements.
        // 
        // Acceptable values are:
        // - "STANDARD"
        // - "IFRAME_JAVASCRIPT_INPAGE"
        // - "INTERNAL_REDIRECT_INPAGE"
        // - "JAVASCRIPT_INPAGE"
        inpageTagFormats?: string[],        
        // Tag types for interstitial placements.
        // 
        // Acceptable values are:
        // - "IFRAME_JAVASCRIPT_INTERSTITIAL"
        // - "INTERNAL_REDIRECT_INTERSTITIAL"
        // - "JAVASCRIPT_INTERSTITIAL"
        interstitialTagFormats?: string[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySite".
        kind?: string,
        // Name of this directory site.
        name?: string,
        // Parent directory site ID.
        parentId?: string,
        // Directory site settings.
        settings?: DirectorySiteSettings,
        // URL of this directory site.
        url?: string,
    }
    
    interface DirectorySiteContact {
        // Address of this directory site contact.
        address?: string,
        // Email address of this directory site contact.
        email?: string,
        // First name of this directory site contact.
        firstName?: string,
        // ID of this directory site contact. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySiteContact".
        kind?: string,
        // Last name of this directory site contact.
        lastName?: string,
        // Phone number of this directory site contact.
        phone?: string,
        // Directory site contact role.
        role?: string,
        // Title or designation of this directory site contact.
        title?: string,
        // Directory site contact type.
        type?: string,
    }
    
    interface DirectorySiteContactAssignment {
        // ID of this directory site contact. This is a read-only, auto-generated field.
        contactId?: string,
        // Visibility of this directory site contact assignment. When set to PUBLIC this contact assignment is visible to all account and agency users; when set to PRIVATE it is visible only to the site.
        visibility?: string,
    }
    
    interface DirectorySiteContactsListResponse {
        // Directory site contact collection
        directorySiteContacts?: DirectorySiteContact[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySiteContactsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface DirectorySiteSettings {
        // Whether this directory site has disabled active view creatives.
        activeViewOptOut?: boolean,
        // Directory site DFP settings.
        dfp_settings?: DfpSettings,
        // Whether this site accepts in-stream video ads.
        instream_video_placement_accepted?: boolean,
        // Whether this site accepts interstitial ads.
        interstitialPlacementAccepted?: boolean,
        // Whether this directory site has disabled Nielsen OCR reach ratings.
        nielsenOcrOptOut?: boolean,
        // Whether this directory site has disabled generation of Verification ins tags.
        verificationTagOptOut?: boolean,
        // Whether this directory site has disabled active view for in-stream video creatives.
        videoActiveViewOptOut?: boolean,
    }
    
    interface DirectorySitesListResponse {
        // Directory site collection.
        directorySites?: DirectorySite[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySitesListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface EventTag {
        // Account ID of this event tag. This is a read-only field that can be left blank.
        accountId?: string,
        // Advertiser ID of this event tag. This field or the campaignId field is required on insertion.
        advertiserId?: string,
        // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
        advertiserIdDimensionValue?: DimensionValue,
        // Campaign ID of this event tag. This field or the advertiserId field is required on insertion.
        campaignId?: string,
        // Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
        campaignIdDimensionValue?: DimensionValue,
        // Whether this event tag should be automatically enabled for all of the advertiser's campaigns and ads.
        enabledByDefault?: boolean,
        // Whether to remove this event tag from ads that are trafficked through DoubleClick Bid Manager to Ad Exchange. This may be useful if the event tag uses a pixel that is unapproved for Ad Exchange bids on one or more networks, such as the Google Display Network.
        excludeFromAdxRequests?: boolean,
        // ID of this event tag. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTag".
        kind?: string,
        // Name of this event tag. This is a required field and must be less than 256 characters long.
        name?: string,
        // Site filter type for this event tag. If no type is specified then the event tag will be applied to all sites.
        siteFilterType?: string,
        // Filter list of site IDs associated with this event tag. The siteFilterType determines whether this is a whitelist or blacklist filter.
        siteIds?: string[],        
        // Whether this tag is SSL-compliant or not. This is a read-only field.
        sslCompliant?: boolean,
        // Status of this event tag. Must be ENABLED for this event tag to fire. This is a required field.
        status?: string,
        // Subaccount ID of this event tag. This is a read-only field that can be left blank.
        subaccountId?: string,
        // Event tag type. Can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. This is a required field.
        type?: string,
        // Payload URL for this event tag. The URL on a click-through event tag should have a landing page URL appended to the end of it. This field is required on insertion.
        url?: string,
        // Number of times the landing page URL should be URL-escaped before being appended to the click-through event tag URL. Only applies to click-through event tags as specified by the event tag type.
        urlEscapeLevels?: number,
    }
    
    interface EventTagOverride {
        // Whether this override is enabled.
        enabled?: boolean,
        // ID of this event tag override. This is a read-only, auto-generated field.
        id?: string,
    }
    
    interface EventTagsListResponse {
        // Event tag collection.
        eventTags?: EventTag[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTagsListResponse".
        kind?: string,
    }
    
    interface File {
        // The date range for which the file has report data. The date range will always be the absolute date range for which the report is run.
        dateRange?: DateRange,
        // The eTag of this response for caching purposes.
        etag?: string,
        // The filename of the file.
        fileName?: string,
        // The output format of the report. Only available once the file is available.
        format?: string,
        // The unique ID of this report file.
        id?: string,
        // The kind of resource this is, in this case dfareporting#file.
        kind?: string,
        // The timestamp in milliseconds since epoch when this file was last modified.
        lastModifiedTime?: string,
        // The ID of the report this file was generated from.
        reportId?: string,
        // The status of the report file.
        status?: string,
        // The URLs where the completed report file can be downloaded.
        urls?: {        
            // The URL for downloading the report data through the API.
            apiUrl?: string,
            // The URL for downloading the report data through a browser.
            browserUrl?: string,
        },        
    }
    
    interface FileList {
        // The eTag of this response for caching purposes.
        etag?: string,
        // The files returned in this response.
        items?: File[],        
        // The kind of list this is, in this case dfareporting#fileList.
        kind?: string,
        // Continuation token used to page through files. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
        nextPageToken?: string,
    }
    
    interface Flight {
        // Inventory item flight end date.
        endDate?: string,
        // Rate or cost of this flight.
        rateOrCost?: string,
        // Inventory item flight start date.
        startDate?: string,
        // Units of this flight.
        units?: string,
    }
    
    interface FloodlightActivitiesGenerateTagResponse {
        // Generated tag for this floodlight activity.
        floodlightActivityTag?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesGenerateTagResponse".
        kind?: string,
    }
    
    interface FloodlightActivitiesListResponse {
        // Floodlight activity collection.
        floodlightActivities?: FloodlightActivity[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface FloodlightActivity {
        // Account ID of this floodlight activity. This is a read-only field that can be left blank.
        accountId?: string,
        // Advertiser ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's advertiser or the existing activity's advertiser.
        advertiserId?: string,
        // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
        advertiserIdDimensionValue?: DimensionValue,
        // Code type used for cache busting in the generated tag.
        cacheBustingType?: string,
        // Counting method for conversions for this floodlight activity. This is a required field.
        countingMethod?: string,
        // Dynamic floodlight tags.
        defaultTags?: FloodlightActivityDynamicTag[],        
        // URL where this tag will be deployed. If specified, must be less than 256 characters long.
        expectedUrl?: string,
        // Floodlight activity group ID of this floodlight activity. This is a required field.
        floodlightActivityGroupId?: string,
        // Name of the associated floodlight activity group. This is a read-only field.
        floodlightActivityGroupName?: string,
        // Tag string of the associated floodlight activity group. This is a read-only field.
        floodlightActivityGroupTagString?: string,
        // Type of the associated floodlight activity group. This is a read-only field.
        floodlightActivityGroupType?: string,
        // Floodlight configuration ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's floodlight configuration or from the existing activity's floodlight configuration.
        floodlightConfigurationId?: string,
        // Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.
        floodlightConfigurationIdDimensionValue?: DimensionValue,
        // Whether this activity is archived.
        hidden?: boolean,
        // ID of this floodlight activity. This is a read-only, auto-generated field.
        id?: string,
        // Dimension value for the ID of this floodlight activity. This is a read-only, auto-generated field.
        idDimensionValue?: DimensionValue,
        // Whether the image tag is enabled for this activity.
        imageTagEnabled?: boolean,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivity".
        kind?: string,
        // Name of this floodlight activity. This is a required field. Must be less than 129 characters long and cannot contain quotes.
        name?: string,
        // General notes or implementation instructions for the tag.
        notes?: string,
        // Publisher dynamic floodlight tags.
        publisherTags?: FloodlightActivityPublisherDynamicTag[],        
        // Whether this tag should use SSL.
        secure?: boolean,
        // Whether the floodlight activity is SSL-compliant. This is a read-only field, its value detected by the system from the floodlight tags.
        sslCompliant?: boolean,
        // Whether this floodlight activity must be SSL-compliant.
        sslRequired?: boolean,
        // Subaccount ID of this floodlight activity. This is a read-only field that can be left blank.
        subaccountId?: string,
        // Tag format type for the floodlight activity. If left blank, the tag format will default to HTML.
        tagFormat?: string,
        // Value of the cat= paramter in the floodlight tag, which the ad servers use to identify the activity. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being [a-z][A-Z][0-9][-][ _ ]. This tag string must also be unique among activities of the same activity group. This field is read-only after insertion.
        tagString?: string,
        // List of the user-defined variables used by this conversion tag. These map to the "u[1-20]=" in the tags. Each of these can have a user defined type.
        // Acceptable values are:
        // - "U1"
        // - "U2"
        // - "U3"
        // - "U4"
        // - "U5"
        // - "U6"
        // - "U7"
        // - "U8"
        // - "U9"
        // - "U10"
        // - "U11"
        // - "U12"
        // - "U13"
        // - "U14"
        // - "U15"
        // - "U16"
        // - "U17"
        // - "U18"
        // - "U19"
        // - "U20"
        userDefinedVariableTypes?: string[],        
    }
    
    interface FloodlightActivityDynamicTag {
        // ID of this dynamic tag. This is a read-only, auto-generated field.
        id?: string,
        // Name of this tag.
        name?: string,
        // Tag code.
        tag?: string,
    }
    
    interface FloodlightActivityGroup {
        // Account ID of this floodlight activity group. This is a read-only field that can be left blank.
        accountId?: string,
        // Advertiser ID of this floodlight activity group. If this field is left blank, the value will be copied over either from the floodlight configuration's advertiser or from the existing activity group's advertiser.
        advertiserId?: string,
        // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
        advertiserIdDimensionValue?: DimensionValue,
        // Floodlight configuration ID of this floodlight activity group. This is a required field.
        floodlightConfigurationId?: string,
        // Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.
        floodlightConfigurationIdDimensionValue?: DimensionValue,
        // ID of this floodlight activity group. This is a read-only, auto-generated field.
        id?: string,
        // Dimension value for the ID of this floodlight activity group. This is a read-only, auto-generated field.
        idDimensionValue?: DimensionValue,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroup".
        kind?: string,
        // Name of this floodlight activity group. This is a required field. Must be less than 65 characters long and cannot contain quotes.
        name?: string,
        // Subaccount ID of this floodlight activity group. This is a read-only field that can be left blank.
        subaccountId?: string,
        // Value of the type= parameter in the floodlight tag, which the ad servers use to identify the activity group that the activity belongs to. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being [a-z][A-Z][0-9][-][ _ ]. This tag string must also be unique among activity groups of the same floodlight configuration. This field is read-only after insertion.
        tagString?: string,
        // Type of the floodlight activity group. This is a required field that is read-only after insertion.
        type?: string,
    }
    
    interface FloodlightActivityGroupsListResponse {
        // Floodlight activity group collection.
        floodlightActivityGroups?: FloodlightActivityGroup[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroupsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface FloodlightActivityPublisherDynamicTag {
        // Whether this tag is applicable only for click-throughs.
        clickThrough?: boolean,
        // Directory site ID of this dynamic tag. This is a write-only field that can be used as an alternative to the siteId field. When this resource is retrieved, only the siteId field will be populated.
        directorySiteId?: string,
        // Dynamic floodlight tag.
        dynamicTag?: FloodlightActivityDynamicTag,
        // Site ID of this dynamic tag.
        siteId?: string,
        // Dimension value for the ID of the site. This is a read-only, auto-generated field.
        siteIdDimensionValue?: DimensionValue,
        // Whether this tag is applicable only for view-throughs.
        viewThrough?: boolean,
    }
    
    interface FloodlightConfiguration {
        // Account ID of this floodlight configuration. This is a read-only field that can be left blank.
        accountId?: string,
        // Advertiser ID of the parent advertiser of this floodlight configuration.
        advertiserId?: string,
        // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
        advertiserIdDimensionValue?: DimensionValue,
        // Whether advertiser data is shared with Google Analytics.
        analyticsDataSharingEnabled?: boolean,
        // Whether the exposure-to-conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting.
        exposureToConversionEnabled?: boolean,
        // Day that will be counted as the first day of the week in reports. This is a required field.
        firstDayOfWeek?: string,
        // ID of this floodlight configuration. This is a read-only, auto-generated field.
        id?: string,
        // Dimension value for the ID of this floodlight configuration. This is a read-only, auto-generated field.
        idDimensionValue?: DimensionValue,
        // Whether in-app attribution tracking is enabled.
        inAppAttributionTrackingEnabled?: boolean,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfiguration".
        kind?: string,
        // Lookback window settings for this floodlight configuration.
        lookbackConfiguration?: LookbackConfiguration,
        // Types of attribution options for natural search conversions.
        naturalSearchConversionAttributionOption?: string,
        // Settings for DCM Omniture integration.
        omnitureSettings?: OmnitureSettings,
        // Whether floodlight activities owned by this configuration are required to be SSL-compliant.
        sslRequired?: boolean,
        // List of standard variables enabled for this configuration.
        // 
        // Acceptable values are:
        // - "ORD"
        // - "NUM"
        standardVariableTypes?: string[],        
        // Subaccount ID of this floodlight configuration. This is a read-only field that can be left blank.
        subaccountId?: string,
        // Configuration settings for dynamic and image floodlight tags.
        tagSettings?: TagSettings,
        // List of third-party authentication tokens enabled for this configuration.
        thirdPartyAuthenticationTokens?: ThirdPartyAuthenticationToken[],        
        // List of user defined variables enabled for this configuration.
        userDefinedVariableConfigurations?: UserDefinedVariableConfiguration[],        
    }
    
    interface FloodlightConfigurationsListResponse {
        // Floodlight configuration collection.
        floodlightConfigurations?: FloodlightConfiguration[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfigurationsListResponse".
        kind?: string,
    }
    
    interface FloodlightReportCompatibleFields {
        // Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
        dimensionFilters?: Dimension[],        
        // Dimensions which are compatible to be selected in the "dimensions" section of the report.
        dimensions?: Dimension[],        
        // The kind of resource this is, in this case dfareporting#floodlightReportCompatibleFields.
        kind?: string,
        // Metrics which are compatible to be selected in the "metricNames" section of the report.
        metrics?: Metric[],        
    }
    
    interface FrequencyCap {
        // Duration of time, in seconds, for this frequency cap. The maximum duration is 90 days in seconds, or 7,776,000.
        duration?: string,
        // Number of times an individual user can be served the ad within the specified duration. The maximum allowed is 15.
        impressions?: string,
    }
    
    interface FsCommand {
        // Distance from the left of the browser.Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.
        left?: number,
        // Position in the browser where the window will open.
        positionOption?: string,
        // Distance from the top of the browser. Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.
        top?: number,
        // Height of the window.
        windowHeight?: number,
        // Width of the window.
        windowWidth?: number,
    }
    
    interface GeoTargeting {
        // Cities to be targeted. For each city only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a city, do not target or exclude the country of the city, and do not target the metro or region of the city.
        cities?: City[],        
        // Countries to be targeted or excluded from targeting, depending on the setting of the excludeCountries field. For each country only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting or excluding a country, do not target regions, cities, metros, or postal codes in the same country.
        countries?: Country[],        
        // Whether or not to exclude the countries in the countries field from targeting. If false, the countries field refers to countries which will be targeted by the ad.
        excludeCountries?: boolean,
        // Metros to be targeted. For each metro only dmaId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a metro, do not target or exclude the country of the metro.
        metros?: Metro[],        
        // Postal codes to be targeted. For each postal code only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a postal code, do not target or exclude the country of the postal code.
        postalCodes?: PostalCode[],        
        // Regions to be targeted. For each region only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a region, do not target or exclude the country of the region.
        regions?: Region[],        
    }
    
    interface InventoryItem {
        // Account ID of this inventory item.
        accountId?: string,
        // Ad slots of this inventory item. If this inventory item represents a standalone placement, there will be exactly one ad slot. If this inventory item represents a placement group, there will be more than one ad slot, each representing one child placement in that placement group.
        adSlots?: AdSlot[],        
        // Advertiser ID of this inventory item.
        advertiserId?: string,
        // Content category ID of this inventory item.
        contentCategoryId?: string,
        // Estimated click-through rate of this inventory item.
        estimatedClickThroughRate?: string,
        // Estimated conversion rate of this inventory item.
        estimatedConversionRate?: string,
        // ID of this inventory item.
        id?: string,
        // Whether this inventory item is in plan.
        inPlan?: boolean,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItem".
        kind?: string,
        // Information about the most recent modification of this inventory item.
        lastModifiedInfo?: LastModifiedInfo,
        // Name of this inventory item. For standalone inventory items, this is the same name as that of its only ad slot. For group inventory items, this can differ from the name of any of its ad slots.
        name?: string,
        // Negotiation channel ID of this inventory item.
        negotiationChannelId?: string,
        // Order ID of this inventory item.
        orderId?: string,
        // Placement strategy ID of this inventory item.
        placementStrategyId?: string,
        // Pricing of this inventory item.
        pricing?: Pricing,
        // Project ID of this inventory item.
        projectId?: string,
        // RFP ID of this inventory item.
        rfpId?: string,
        // ID of the site this inventory item is associated with.
        siteId?: string,
        // Subaccount ID of this inventory item.
        subaccountId?: string,
    }
    
    interface InventoryItemsListResponse {
        // Inventory item collection
        inventoryItems?: InventoryItem[],        
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItemsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
    }
    
    interface KeyValueTargetingExpression {
        // Keyword expression being targeted by the ad.
        expression?: string,
    }
    
    interface LandingPage {
        // Whether or not this landing page will be assigned to any ads or creatives that do not have a landing page assigned explicitly. Only one default landing page is allowed per campaign.
        default?: boolean,
        // ID of this landing page. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#landingPage".
        kind?: string,
        // Name of this landing page. This is a required field. It must be less than 256 characters long, and must be unique among landing pages of the same campaign.
        name?: string,
        // URL of this landing page. This is a required field.
        url?: string,
    }
    
    interface LandingPagesListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#landingPagesListResponse".
        kind?: string,
        // Landing page collection
        landingPages?: LandingPage[],        
    }
    
    interface LastModifiedInfo {
        // Timestamp of the last change in milliseconds since epoch.
        time?: string,
    }
    
    interface ListPopulationClause {
        // Terms of this list population clause. Each clause is made up of list population terms representing constraints and are joined by ORs.
        terms?: ListPopulationTerm[],        
    }
    
    interface ListPopulationRule {
        // Floodlight activity ID associated with this rule. This field can be left blank.
        floodlightActivityId?: string,
        // Name of floodlight activity associated with this rule. This is a read-only, auto-generated field.
        floodlightActivityName?: string,
        // Clauses that make up this list population rule. Clauses are joined by ANDs, and the clauses themselves are made up of list population terms which are joined by ORs.
        listPopulationClauses?: ListPopulationClause[],        
    }
    
    interface ListPopulationTerm {
        // Will be true if the term should check if the user is in the list and false if the term should check if the user is not in the list. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. False by default.
        contains?: boolean,
        // Whether to negate the comparison result of this term during rule evaluation. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
        negation?: boolean,
        // Comparison operator of this term. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
        operator?: string,
        // ID of the list in question. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM.
        remarketingListId?: string,
        // List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM, then variableName, variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM then remarketingListId and contains are applicable. If set to REFERRER_TERM then operator, value, and negation are applicable.
        type?: string,
        // Literal to compare the variable to. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
        value?: string,
        // Friendly name of this term's variable. This is a read-only, auto-generated field. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM.
        variableFriendlyName?: string,
        // Name of the variable (U1, U2, etc.) being compared in this term. This field is only relevant when type is set to null, CUSTOM_VARIABLE_TERM or REFERRER_TERM.
        variableName?: string,
    }
    
    interface ListTargetingExpression {
        // Expression describing which lists are being targeted by the ad.
        expression?: string,
    }
    
    interface LookbackConfiguration {
        // Lookback window, in days, from the last time a given user clicked on one of your ads. If you enter 0, clicks will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used.
        clickDuration?: number,
        // Lookback window, in days, from the last time a given user viewed one of your ads. If you enter 0, impressions will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used.
        postImpressionActivitiesDuration?: number,
    }
    
    interface Metric {
        // The kind of resource this is, in this case dfareporting#metric.
        kind?: string,
        // The metric name, e.g. dfa:impressions
        name?: string,
    }
    
    interface Metro {
        // Country code of the country to which this metro region belongs.
        countryCode?: string,
        // DART ID of the country to which this metro region belongs.
        countryDartId?: string,
        // DART ID of this metro region.
        dartId?: string,
        // DMA ID of this metro region. This is the ID used for targeting and generating reports, and is equivalent to metro_code.
        dmaId?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#metro".
        kind?: string,
        // Metro code of this metro region. This is equivalent to dma_id.
        metroCode?: string,
        // Name of this metro region.
        name?: string,
    }
    
    interface MetrosListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#metrosListResponse".
        kind?: string,
        // Metro collection.
        metros?: Metro[],        
    }
    
    interface MobileCarrier {
        // Country code of the country to which this mobile carrier belongs.
        countryCode?: string,
        // DART ID of the country to which this mobile carrier belongs.
        countryDartId?: string,
        // ID of this mobile carrier.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarrier".
        kind?: string,
        // Name of this mobile carrier.
        name?: string,
    }
    
    interface MobileCarriersListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarriersListResponse".
        kind?: string,
        // Mobile carrier collection.
        mobileCarriers?: MobileCarrier[],        
    }
    
    interface ObjectFilter {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#objectFilter".
        kind?: string,
        // Applicable when status is ASSIGNED. The user has access to objects with these object IDs.
        objectIds?: string[],        
        // Status of the filter. NONE means the user has access to none of the objects. ALL means the user has access to all objects. ASSIGNED means the user has access to the objects with IDs in the objectIds list.
        status?: string,
    }
    
    interface OffsetPosition {
        // Offset distance from left side of an asset or a window.
        left?: number,
        // Offset distance from top side of an asset or a window.
        top?: number,
    }
    
    interface OmnitureSettings {
        // Whether placement cost data will be sent to Omniture. This property can be enabled only if omnitureIntegrationEnabled is true.
        omnitureCostDataEnabled?: boolean,
        // Whether Omniture integration is enabled. This property can be enabled only when the "Advanced Ad Serving" account setting is enabled.
        omnitureIntegrationEnabled?: boolean,
    }
    
    interface OperatingSystem {
        // DART ID of this operating system. This is the ID used for targeting.
        dartId?: string,
        // Whether this operating system is for desktop.
        desktop?: boolean,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystem".
        kind?: string,
        // Whether this operating system is for mobile.
        mobile?: boolean,
        // Name of this operating system.
        name?: string,
    }
    
    interface OperatingSystemVersion {
        // ID of this operating system version.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersion".
        kind?: string,
        // Major version (leftmost number) of this operating system version.
        majorVersion?: string,
        // Minor version (number after the first dot) of this operating system version.
        minorVersion?: string,
        // Name of this operating system version.
        name?: string,
        // Operating system of this operating system version.
        operatingSystem?: OperatingSystem,
    }
    
    interface OperatingSystemVersionsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersionsListResponse".
        kind?: string,
        // Operating system version collection.
        operatingSystemVersions?: OperatingSystemVersion[],        
    }
    
    interface OperatingSystemsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemsListResponse".
        kind?: string,
        // Operating system collection.
        operatingSystems?: OperatingSystem[],        
    }
    
    interface OptimizationActivity {
        // Floodlight activity ID of this optimization activity. This is a required field.
        floodlightActivityId?: string,
        // Dimension value for the ID of the floodlight activity. This is a read-only, auto-generated field.
        floodlightActivityIdDimensionValue?: DimensionValue,
        // Weight associated with this optimization. Must be greater than 1. The weight assigned will be understood in proportion to the weights assigned to the other optimization activities.
        weight?: number,
    }
    
    interface Order {
        // Account ID of this order.
        accountId?: string,
        // Advertiser ID of this order.
        advertiserId?: string,
        // IDs for users that have to approve documents created for this order.
        approverUserProfileIds?: string[],        
        // Buyer invoice ID associated with this order.
        buyerInvoiceId?: string,
        // Name of the buyer organization.
        buyerOrganizationName?: string,
        // Comments in this order.
        comments?: string,
        // Contacts for this order.
        contacts?: OrderContact[],        
        // ID of this order. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#order".
        kind?: string,
        // Information about the most recent modification of this order.
        lastModifiedInfo?: LastModifiedInfo,
        // Name of this order.
        name?: string,
        // Notes of this order.
        notes?: string,
        // ID of the terms and conditions template used in this order.
        planningTermId?: string,
        // Project ID of this order.
        projectId?: string,
        // Seller order ID associated with this order.
        sellerOrderId?: string,
        // Name of the seller organization.
        sellerOrganizationName?: string,
        // Site IDs this order is associated with.
        siteId?: string[],        
        // Free-form site names this order is associated with.
        siteNames?: string[],        
        // Subaccount ID of this order.
        subaccountId?: string,
        // Terms and conditions of this order.
        termsAndConditions?: string,
    }
    
    interface OrderContact {
        // Free-form information about this contact. It could be any information related to this contact in addition to type, title, name, and signature user profile ID.
        contactInfo?: string,
        // Name of this contact.
        contactName?: string,
        // Title of this contact.
        contactTitle?: string,
        // Type of this contact.
        contactType?: string,
        // ID of the user profile containing the signature that will be embedded into order documents.
        signatureUserProfileId?: string,
    }
    
    interface OrderDocument {
        // Account ID of this order document.
        accountId?: string,
        // Advertiser ID of this order document.
        advertiserId?: string,
        // The amended order document ID of this order document. An order document can be created by optionally amending another order document so that the change history can be preserved.
        amendedOrderDocumentId?: string,
        // IDs of users who have approved this order document.
        approvedByUserProfileIds?: string[],        
        // Whether this order document is cancelled.
        cancelled?: boolean,
        // Information about the creation of this order document.
        createdInfo?: LastModifiedInfo,
        // Effective date of this order document.
        effectiveDate?: string,
        // ID of this order document.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#orderDocument".
        kind?: string,
        // List of email addresses that received the last sent document.
        lastSentRecipients?: string[],        
        // Timestamp of the last email sent with this order document.
        lastSentTime?: string,
        // ID of the order from which this order document is created.
        orderId?: string,
        // Project ID of this order document.
        projectId?: string,
        // Whether this order document has been signed.
        signed?: boolean,
        // Subaccount ID of this order document.
        subaccountId?: string,
        // Title of this order document.
        title?: string,
        // Type of this order document
        type?: string,
    }
    
    interface OrderDocumentsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#orderDocumentsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
        // Order document collection
        orderDocuments?: OrderDocument[],        
    }
    
    interface OrdersListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#ordersListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
        // Order collection.
        orders?: Order[],        
    }
    
    interface PathToConversionReportCompatibleFields {
        // Conversion dimensions which are compatible to be selected in the "conversionDimensions" section of the report.
        conversionDimensions?: Dimension[],        
        // Custom floodlight variables which are compatible to be selected in the "customFloodlightVariables" section of the report.
        customFloodlightVariables?: Dimension[],        
        // The kind of resource this is, in this case dfareporting#pathToConversionReportCompatibleFields.
        kind?: string,
        // Metrics which are compatible to be selected in the "metricNames" section of the report.
        metrics?: Metric[],        
        // Per-interaction dimensions which are compatible to be selected in the "perInteractionDimensions" section of the report.
        perInteractionDimensions?: Dimension[],        
    }
    
    interface Placement {
        // Account ID of this placement. This field can be left blank.
        accountId?: string,
        // Advertiser ID of this placement. This field can be left blank.
        advertiserId?: string,
        // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
        advertiserIdDimensionValue?: DimensionValue,
        // Whether this placement is archived.
        archived?: boolean,
        // Campaign ID of this placement. This field is a required field on insertion.
        campaignId?: string,
        // Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
        campaignIdDimensionValue?: DimensionValue,
        // Comments for this placement.
        comment?: string,
        // Placement compatibility. WEB and WEB_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps.IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. This field is required on insertion.
        compatibility?: string,
        // ID of the content category assigned to this placement.
        contentCategoryId?: string,
        // Information about the creation of this placement. This is a read-only field.
        createInfo?: LastModifiedInfo,
        // Directory site ID of this placement. On insert, you must set either this field or the siteId field to specify the site associated with this placement. This is a required field that is read-only after insertion.
        directorySiteId?: string,
        // Dimension value for the ID of the directory site. This is a read-only, auto-generated field.
        directorySiteIdDimensionValue?: DimensionValue,
        // External ID for this placement.
        externalId?: string,
        // ID of this placement. This is a read-only, auto-generated field.
        id?: string,
        // Dimension value for the ID of this placement. This is a read-only, auto-generated field.
        idDimensionValue?: DimensionValue,
        // Key name of this placement. This is a read-only, auto-generated field.
        keyName?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#placement".
        kind?: string,
        // Information about the most recent modification of this placement. This is a read-only field.
        lastModifiedInfo?: LastModifiedInfo,
        // Lookback window settings for this placement.
        lookbackConfiguration?: LookbackConfiguration,
        // Name of this placement.This is a required field and must be less than 256 characters long.
        name?: string,
        // Whether payment was approved for this placement. This is a read-only field relevant only to publisher-paid placements.
        paymentApproved?: boolean,
        // Payment source for this placement. This is a required field that is read-only after insertion.
        paymentSource?: string,
        // ID of this placement's group, if applicable.
        placementGroupId?: string,
        // Dimension value for the ID of the placement group. This is a read-only, auto-generated field.
        placementGroupIdDimensionValue?: DimensionValue,
        // ID of the placement strategy assigned to this placement.
        placementStrategyId?: string,
        // Pricing schedule of this placement. This field is required on insertion, specifically subfields startDate, endDate and pricingType.
        pricingSchedule?: PricingSchedule,
        // Whether this placement is the primary placement of a roadblock (placement group). You cannot change this field from true to false. Setting this field to true will automatically set the primary field on the original primary placement of the roadblock to false, and it will automatically set the roadblock's primaryPlacementId field to the ID of this placement.
        primary?: boolean,
        // Information about the last publisher update. This is a read-only field.
        publisherUpdateInfo?: LastModifiedInfo,
        // Site ID associated with this placement. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement. This is a required field that is read-only after insertion.
        siteId?: string,
        // Dimension value for the ID of the site. This is a read-only, auto-generated field.
        siteIdDimensionValue?: DimensionValue,
        // Size associated with this placement. When inserting or updating a placement, only the size ID field is used. This field is required on insertion.
        size?: Size,
        // Whether creatives assigned to this placement must be SSL-compliant.
        sslRequired?: boolean,
        // Third-party placement status.
        status?: string,
        // Subaccount ID of this placement. This field can be left blank.
        subaccountId?: string,
        // Tag formats to generate for this placement. This field is required on insertion.
        // Acceptable values are:
        // - "PLACEMENT_TAG_STANDARD"
        // - "PLACEMENT_TAG_IFRAME_JAVASCRIPT"
        // - "PLACEMENT_TAG_IFRAME_ILAYER"
        // - "PLACEMENT_TAG_INTERNAL_REDIRECT"
        // - "PLACEMENT_TAG_JAVASCRIPT"
        // - "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT"
        // - "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT"
        // - "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT"
        // - "PLACEMENT_TAG_CLICK_COMMANDS"
        // - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH"
        // - "PLACEMENT_TAG_TRACKING"
        // - "PLACEMENT_TAG_TRACKING_IFRAME"
        // - "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
        tagFormats?: string[],        
        // Tag settings for this placement.
        tagSetting?: TagSetting,
    }
    
    interface PlacementAssignment {
        // Whether this placement assignment is active. When true, the placement will be included in the ad's rotation.
        active?: boolean,
        // ID of the placement to be assigned. This is a required field.
        placementId?: string,
        // Dimension value for the ID of the placement. This is a read-only, auto-generated field.
        placementIdDimensionValue?: DimensionValue,
        // Whether the placement to be assigned requires SSL. This is a read-only field that is auto-generated when the ad is inserted or updated.
        sslRequired?: boolean,
    }
    
    interface PlacementGroup {
        // Account ID of this placement group. This is a read-only field that can be left blank.
        accountId?: string,
        // Advertiser ID of this placement group. This is a required field on insertion.
        advertiserId?: string,
        // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
        advertiserIdDimensionValue?: DimensionValue,
        // Whether this placement group is archived.
        archived?: boolean,
        // Campaign ID of this placement group. This field is required on insertion.
        campaignId?: string,
        // Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
        campaignIdDimensionValue?: DimensionValue,
        // IDs of placements which are assigned to this placement group. This is a read-only, auto-generated field.
        childPlacementIds?: string[],        
        // Comments for this placement group.
        comment?: string,
        // ID of the content category assigned to this placement group.
        contentCategoryId?: string,
        // Information about the creation of this placement group. This is a read-only field.
        createInfo?: LastModifiedInfo,
        // Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field to specify the site associated with this placement group. This is a required field that is read-only after insertion.
        directorySiteId?: string,
        // Dimension value for the ID of the directory site. This is a read-only, auto-generated field.
        directorySiteIdDimensionValue?: DimensionValue,
        // External ID for this placement.
        externalId?: string,
        // ID of this placement group. This is a read-only, auto-generated field.
        id?: string,
        // Dimension value for the ID of this placement group. This is a read-only, auto-generated field.
        idDimensionValue?: DimensionValue,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroup".
        kind?: string,
        // Information about the most recent modification of this placement group. This is a read-only field.
        lastModifiedInfo?: LastModifiedInfo,
        // Name of this placement group. This is a required field and must be less than 256 characters long.
        name?: string,
        // Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion.
        placementGroupType?: string,
        // ID of the placement strategy assigned to this placement group.
        placementStrategyId?: string,
        // Pricing schedule of this placement group. This field is required on insertion.
        pricingSchedule?: PricingSchedule,
        // ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field will automatically modify the primary field on all affected roadblock child placements.
        primaryPlacementId?: string,
        // Dimension value for the ID of the primary placement. This is a read-only, auto-generated field.
        primaryPlacementIdDimensionValue?: DimensionValue,
        // Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement group. This is a required field that is read-only after insertion.
        siteId?: string,
        // Dimension value for the ID of the site. This is a read-only, auto-generated field.
        siteIdDimensionValue?: DimensionValue,
        // Subaccount ID of this placement group. This is a read-only field that can be left blank.
        subaccountId?: string,
    }
    
    interface PlacementGroupsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroupsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
        // Placement group collection.
        placementGroups?: PlacementGroup[],        
    }
    
    interface PlacementStrategiesListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategiesListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
        // Placement strategy collection.
        placementStrategies?: PlacementStrategy[],        
    }
    
    interface PlacementStrategy {
        // Account ID of this placement strategy.This is a read-only field that can be left blank.
        accountId?: string,
        // ID of this placement strategy. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategy".
        kind?: string,
        // Name of this placement strategy. This is a required field. It must be less than 256 characters long and unique among placement strategies of the same account.
        name?: string,
    }
    
    interface PlacementTag {
        // Placement ID
        placementId?: string,
        // Tags generated for this placement.
        tagDatas?: TagData[],        
    }
    
    interface PlacementsGenerateTagsResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsGenerateTagsResponse".
        kind?: string,
        // Set of generated tags for the specified placements.
        placementTags?: PlacementTag[],        
    }
    
    interface PlacementsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
        // Placement collection.
        placements?: Placement[],        
    }
    
    interface PlatformType {
        // ID of this platform type.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformType".
        kind?: string,
        // Name of this platform type.
        name?: string,
    }
    
    interface PlatformTypesListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformTypesListResponse".
        kind?: string,
        // Platform type collection.
        platformTypes?: PlatformType[],        
    }
    
    interface PopupWindowProperties {
        // Popup dimension for a creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID
        dimension?: Size,
        // Upper-left corner coordinates of the popup window. Applicable if positionType is COORDINATES.
        offset?: OffsetPosition,
        // Popup window position either centered or at specific coordinate.
        positionType?: string,
        // Whether to display the browser address bar.
        showAddressBar?: boolean,
        // Whether to display the browser menu bar.
        showMenuBar?: boolean,
        // Whether to display the browser scroll bar.
        showScrollBar?: boolean,
        // Whether to display the browser status bar.
        showStatusBar?: boolean,
        // Whether to display the browser tool bar.
        showToolBar?: boolean,
        // Title of popup window.
        title?: string,
    }
    
    interface PostalCode {
        // Postal code. This is equivalent to the id field.
        code?: string,
        // Country code of the country to which this postal code belongs.
        countryCode?: string,
        // DART ID of the country to which this postal code belongs.
        countryDartId?: string,
        // ID of this postal code.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCode".
        kind?: string,
    }
    
    interface PostalCodesListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCodesListResponse".
        kind?: string,
        // Postal code collection.
        postalCodes?: PostalCode[],        
    }
    
    interface Pricing {
        // Cap cost type of this inventory item.
        capCostType?: string,
        // End date of this inventory item.
        endDate?: string,
        // Flights of this inventory item. A flight (a.k.a. pricing period) represents the inventory item pricing information for a specific period of time.
        flights?: Flight[],        
        // Group type of this inventory item if it represents a placement group. Is null otherwise. There are two type of placement groups: PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE is a simple group of inventory items that acts as a single pricing point for a group of tags. PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK is a group of inventory items that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned inventory items to be marked as primary.
        groupType?: string,
        // Pricing type of this inventory item.
        pricingType?: string,
        // Start date of this inventory item.
        startDate?: string,
    }
    
    interface PricingSchedule {
        // Placement cap cost option.
        capCostOption?: string,
        // Whether cap costs are ignored by ad serving.
        disregardOverdelivery?: boolean,
        // Placement end date. This date must be later than, or the same day as, the placement start date, but not later than the campaign end date. If, for example, you set 6/25/2015 as both the start and end dates, the effective placement date is just that day only, 6/25/2015. The hours, minutes, and seconds of the end date should not be set, as doing so will result in an error. This field is required on insertion.
        endDate?: string,
        // Whether this placement is flighted. If true, pricing periods will be computed automatically.
        flighted?: boolean,
        // Floodlight activity ID associated with this placement. This field should be set when placement pricing type is set to PRICING_TYPE_CPA.
        floodlightActivityId?: string,
        // Pricing periods for this placement.
        pricingPeriods?: PricingSchedulePricingPeriod[],        
        // Placement pricing type. This field is required on insertion.
        pricingType?: string,
        // Placement start date. This date must be later than, or the same day as, the campaign start date. The hours, minutes, and seconds of the start date should not be set, as doing so will result in an error. This field is required on insertion.
        startDate?: string,
        // Testing start date of this placement. The hours, minutes, and seconds of the start date should not be set, as doing so will result in an error.
        testingStartDate?: string,
    }
    
    interface PricingSchedulePricingPeriod {
        // Pricing period end date. This date must be later than, or the same day as, the pricing period start date, but not later than the placement end date. The period end date can be the same date as the period start date. If, for example, you set 6/25/2015 as both the start and end dates, the effective pricing period date is just that day only, 6/25/2015. The hours, minutes, and seconds of the end date should not be set, as doing so will result in an error.
        endDate?: string,
        // Comments for this pricing period.
        pricingComment?: string,
        // Rate or cost of this pricing period.
        rateOrCostNanos?: string,
        // Pricing period start date. This date must be later than, or the same day as, the placement start date. The hours, minutes, and seconds of the start date should not be set, as doing so will result in an error.
        startDate?: string,
        // Units of this pricing period.
        units?: string,
    }
    
    interface Project {
        // Account ID of this project.
        accountId?: string,
        // Advertiser ID of this project.
        advertiserId?: string,
        // Audience age group of this project.
        audienceAgeGroup?: string,
        // Audience gender of this project.
        audienceGender?: string,
        // Budget of this project in the currency specified by the current account. The value stored in this field represents only the non-fractional amount. For example, for USD, the smallest value that can be represented by this field is 1 US dollar.
        budget?: string,
        // Client billing code of this project.
        clientBillingCode?: string,
        // Name of the project client.
        clientName?: string,
        // End date of the project.
        endDate?: string,
        // ID of this project. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#project".
        kind?: string,
        // Information about the most recent modification of this project.
        lastModifiedInfo?: LastModifiedInfo,
        // Name of this project.
        name?: string,
        // Overview of this project.
        overview?: string,
        // Start date of the project.
        startDate?: string,
        // Subaccount ID of this project.
        subaccountId?: string,
        // Number of clicks that the advertiser is targeting.
        targetClicks?: string,
        // Number of conversions that the advertiser is targeting.
        targetConversions?: string,
        // CPA that the advertiser is targeting.
        targetCpaNanos?: string,
        // CPC that the advertiser is targeting.
        targetCpcNanos?: string,
        // CPM that the advertiser is targeting.
        targetCpmNanos?: string,
        // Number of impressions that the advertiser is targeting.
        targetImpressions?: string,
    }
    
    interface ProjectsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#projectsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
        // Project collection.
        projects?: Project[],        
    }
    
    interface ReachReportCompatibleFields {
        // Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
        dimensionFilters?: Dimension[],        
        // Dimensions which are compatible to be selected in the "dimensions" section of the report.
        dimensions?: Dimension[],        
        // The kind of resource this is, in this case dfareporting#reachReportCompatibleFields.
        kind?: string,
        // Metrics which are compatible to be selected in the "metricNames" section of the report.
        metrics?: Metric[],        
        // Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report.
        pivotedActivityMetrics?: Metric[],        
        // Metrics which are compatible to be selected in the "reachByFrequencyMetricNames" section of the report.
        reachByFrequencyMetrics?: Metric[],        
    }
    
    interface Recipient {
        // The delivery type for the recipient.
        deliveryType?: string,
        // The email address of the recipient.
        email?: string,
        // The kind of resource this is, in this case dfareporting#recipient.
        kind?: string,
    }
    
    interface Region {
        // Country code of the country to which this region belongs.
        countryCode?: string,
        // DART ID of the country to which this region belongs.
        countryDartId?: string,
        // DART ID of this region.
        dartId?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#region".
        kind?: string,
        // Name of this region.
        name?: string,
        // Region code.
        regionCode?: string,
    }
    
    interface RegionsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#regionsListResponse".
        kind?: string,
        // Region collection.
        regions?: Region[],        
    }
    
    interface RemarketingList {
        // Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
        accountId?: string,
        // Whether this remarketing list is active.
        active?: boolean,
        // Dimension value for the advertiser ID that owns this remarketing list. This is a required field.
        advertiserId?: string,
        // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
        advertiserIdDimensionValue?: DimensionValue,
        // Remarketing list description.
        description?: string,
        // Remarketing list ID. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingList".
        kind?: string,
        // Number of days that a user should remain in the remarketing list without an impression.
        lifeSpan?: string,
        // Rule used to populate the remarketing list with users.
        listPopulationRule?: ListPopulationRule,
        // Number of users currently in the list. This is a read-only field.
        listSize?: string,
        // Product from which this remarketing list was originated.
        listSource?: string,
        // Name of the remarketing list. This is a required field. Must be no greater than 128 characters long.
        name?: string,
        // Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
        subaccountId?: string,
    }
    
    interface RemarketingListShare {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListShare".
        kind?: string,
        // Remarketing list ID. This is a read-only, auto-generated field.
        remarketingListId?: string,
        // Accounts that the remarketing list is shared with.
        sharedAccountIds?: string[],        
        // Advertisers that the remarketing list is shared with.
        sharedAdvertiserIds?: string[],        
    }
    
    interface RemarketingListsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
        // Remarketing list collection.
        remarketingLists?: RemarketingList[],        
    }
    
    interface Report {
        // The account ID to which this report belongs.
        accountId?: string,
        // The report criteria for a report of type "STANDARD".
        criteria?: {        
            // Activity group.
            activities?: Activities,
            // Custom Rich Media Events group.
            customRichMediaEvents?: CustomRichMediaEvents,
            // The date range for which this report should be run.
            dateRange?: DateRange,
            // The list of filters on which dimensions are filtered.
            // Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
            dimensionFilters?: DimensionValue[],            
            // The list of standard dimensions the report should include.
            dimensions?: SortedDimension[],            
            // The list of names of metrics the report should include.
            metricNames?: string[],            
        },        
        // The report criteria for a report of type "CROSS_DIMENSION_REACH".
        crossDimensionReachCriteria?: {        
            // The list of dimensions the report should include.
            breakdown?: SortedDimension[],            
            // The date range this report should be run for.
            dateRange?: DateRange,
            // The dimension option.
            dimension?: string,
            // The list of filters on which dimensions are filtered.
            dimensionFilters?: DimensionValue[],            
            // The list of names of metrics the report should include.
            metricNames?: string[],            
            // The list of names of overlap metrics the report should include.
            overlapMetricNames?: string[],            
            // Whether the report is pivoted or not. Defaults to true.
            pivoted?: boolean,
        },        
        // The report's email delivery settings.
        delivery?: {        
            // Whether the report should be emailed to the report owner.
            emailOwner?: boolean,
            // The type of delivery for the owner to receive, if enabled.
            emailOwnerDeliveryType?: string,
            // The message to be sent with each email.
            message?: string,
            // The list of recipients to which to email the report.
            recipients?: Recipient[],            
        },        
        // The eTag of this response for caching purposes.
        etag?: string,
        // The filename used when generating report files for this report.
        fileName?: string,
        // The report criteria for a report of type "FLOODLIGHT".
        floodlightCriteria?: {        
            // The list of custom rich media events to include.
            customRichMediaEvents?: DimensionValue[],            
            // The date range this report should be run for.
            dateRange?: DateRange,
            // The list of filters on which dimensions are filtered.
            // Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
            dimensionFilters?: DimensionValue[],            
            // The list of dimensions the report should include.
            dimensions?: SortedDimension[],            
            // The floodlight ID for which to show data in this report. All advertisers associated with that ID will automatically be added. The dimension of the value needs to be 'dfa:floodlightConfigId'.
            floodlightConfigId?: DimensionValue,
            // The list of names of metrics the report should include.
            metricNames?: string[],            
            // The properties of the report.
            reportProperties?: {            
                // Include conversions that have no cookie, but do have an exposure path.
                includeAttributedIPConversions?: boolean,
                // Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window.
                includeUnattributedCookieConversions?: boolean,
                // Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion.
                includeUnattributedIPConversions?: boolean,
            },            
        },        
        // The output format of the report. If not specified, default format is "CSV". Note that the actual format in the completed report file might differ if for instance the report's size exceeds the format's capabilities. "CSV" will then be the fallback format.
        format?: string,
        // The unique ID identifying this report resource.
        id?: string,
        // The kind of resource this is, in this case dfareporting#report.
        kind?: string,
        // The timestamp (in milliseconds since epoch) of when this report was last modified.
        lastModifiedTime?: string,
        // The name of the report.
        name?: string,
        // The user profile id of the owner of this report.
        ownerProfileId?: string,
        // The report criteria for a report of type "PATH_TO_CONVERSION".
        pathToConversionCriteria?: {        
            // The list of 'dfa:activity' values to filter on.
            activityFilters?: DimensionValue[],            
            // The list of conversion dimensions the report should include.
            conversionDimensions?: SortedDimension[],            
            // The list of custom floodlight variables the report should include.
            customFloodlightVariables?: SortedDimension[],            
            // The list of custom rich media events to include.
            customRichMediaEvents?: DimensionValue[],            
            // The date range this report should be run for.
            dateRange?: DateRange,
            // The floodlight ID for which to show data in this report. All advertisers associated with that ID will automatically be added. The dimension of the value needs to be 'dfa:floodlightConfigId'.
            floodlightConfigId?: DimensionValue,
            // The list of names of metrics the report should include.
            metricNames?: string[],            
            // The list of per interaction dimensions the report should include.
            perInteractionDimensions?: SortedDimension[],            
            // The properties of the report.
            reportProperties?: {            
                // DFA checks to see if a click interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90.
                clicksLookbackWindow?: number,
                // DFA checks to see if an impression interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90.
                impressionsLookbackWindow?: number,
                // Deprecated: has no effect.
                includeAttributedIPConversions?: boolean,
                // Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window.
                includeUnattributedCookieConversions?: boolean,
                // Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion.
                includeUnattributedIPConversions?: boolean,
                // The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report.
                maximumClickInteractions?: number,
                // The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report.
                maximumImpressionInteractions?: number,
                // The maximum amount of time that can take place between interactions (clicks or impressions) by the same user. Valid values: 1-90.
                maximumInteractionGap?: number,
                // Enable pivoting on interaction path.
                pivotOnInteractionPath?: boolean,
            },            
        },        
        // The report criteria for a report of type "REACH".
        reachCriteria?: {        
            // Activity group.
            activities?: Activities,
            // Custom Rich Media Events group.
            customRichMediaEvents?: CustomRichMediaEvents,
            // The date range this report should be run for.
            dateRange?: DateRange,
            // The list of filters on which dimensions are filtered.
            // Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
            dimensionFilters?: DimensionValue[],            
            // The list of dimensions the report should include.
            dimensions?: SortedDimension[],            
            // Whether to enable all reach dimension combinations in the report. Defaults to false. If enabled, the date range of the report should be within the last three months.
            enableAllDimensionCombinations?: boolean,
            // The list of names of metrics the report should include.
            metricNames?: string[],            
            // The list of names of  Reach By Frequency metrics the report should include.
            reachByFrequencyMetricNames?: string[],            
        },        
        // The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY".
        schedule?: {        
            // Whether the schedule is active or not. Must be set to either true or false.
            active?: boolean,
            // Defines every how many days, weeks or months the report should be run. Needs to be set when "repeats" is either "DAILY", "WEEKLY" or "MONTHLY".
            every?: number,
            // The expiration date when the scheduled report stops running.
            expirationDate?: string,
            // The interval for which the report is repeated. Note:  
            // - "DAILY" also requires field "every" to be set. 
            // - "WEEKLY" also requires fields "every" and "repeatsOnWeekDays" to be set. 
            // - "MONTHLY" also requires fields "every" and "runsOnDayOfMonth" to be set.
            repeats?: string,
            // List of week days "WEEKLY" on which scheduled reports should run.
            repeatsOnWeekDays?: string[],            
            // Enum to define for "MONTHLY" scheduled reports whether reports should be repeated on the same day of the month as "startDate" or the same day of the week of the month.
            // Example: If 'startDate' is Monday, April 2nd 2012 (2012-04-02), "DAY_OF_MONTH" would run subsequent reports on the 2nd of every Month, and "WEEK_OF_MONTH" would run subsequent reports on the first Monday of the month.
            runsOnDayOfMonth?: string,
            // Start date of date range for which scheduled reports should be run.
            startDate?: string,
        },        
        // The subaccount ID to which this report belongs if applicable.
        subAccountId?: string,
        // The type of the report.
        type?: string,
    }
    
    interface ReportCompatibleFields {
        // Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
        dimensionFilters?: Dimension[],        
        // Dimensions which are compatible to be selected in the "dimensions" section of the report.
        dimensions?: Dimension[],        
        // The kind of resource this is, in this case dfareporting#reportCompatibleFields.
        kind?: string,
        // Metrics which are compatible to be selected in the "metricNames" section of the report.
        metrics?: Metric[],        
        // Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report.
        pivotedActivityMetrics?: Metric[],        
    }
    
    interface ReportList {
        // The eTag of this response for caching purposes.
        etag?: string,
        // The reports returned in this response.
        items?: Report[],        
        // The kind of list this is, in this case dfareporting#reportList.
        kind?: string,
        // Continuation token used to page through reports. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
        nextPageToken?: string,
    }
    
    interface ReportsConfiguration {
        // Whether the exposure to conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting.
        exposureToConversionEnabled?: boolean,
        // Default lookback windows for new advertisers in this account.
        lookbackConfiguration?: LookbackConfiguration,
        // Report generation time zone ID of this account. This is a required field that can only be changed by a superuser.
        // Acceptable values are:
        // 
        // - "1" for "America/New_York" 
        // - "2" for "Europe/London" 
        // - "3" for "Europe/Paris" 
        // - "4" for "Africa/Johannesburg" 
        // - "5" for "Asia/Jerusalem" 
        // - "6" for "Asia/Shanghai" 
        // - "7" for "Asia/Hong_Kong" 
        // - "8" for "Asia/Tokyo" 
        // - "9" for "Australia/Sydney" 
        // - "10" for "Asia/Dubai" 
        // - "11" for "America/Los_Angeles" 
        // - "12" for "Pacific/Auckland" 
        // - "13" for "America/Sao_Paulo"
        reportGenerationTimeZoneId?: string,
    }
    
    interface RichMediaExitOverride {
        // Click-through URL to override the default exit URL. Applicable if the useCustomExitUrl field is set to true.
        customExitUrl?: string,
        // ID for the override to refer to a specific exit in the creative.
        exitId?: string,
        // Whether to use the custom exit URL.
        useCustomExitUrl?: boolean,
    }
    
    interface Site {
        // Account ID of this site. This is a read-only field that can be left blank.
        accountId?: string,
        // Whether this site is approved.
        approved?: boolean,
        // Directory site associated with this site. This is a required field that is read-only after insertion.
        directorySiteId?: string,
        // Dimension value for the ID of the directory site. This is a read-only, auto-generated field.
        directorySiteIdDimensionValue?: DimensionValue,
        // ID of this site. This is a read-only, auto-generated field.
        id?: string,
        // Dimension value for the ID of this site. This is a read-only, auto-generated field.
        idDimensionValue?: DimensionValue,
        // Key name of this site. This is a read-only, auto-generated field.
        keyName?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#site".
        kind?: string,
        // Name of this site.This is a required field. Must be less than 128 characters long. If this site is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this site is a top-level site, and the name must be unique among top-level sites of the same account.
        name?: string,
        // Site contacts.
        siteContacts?: SiteContact[],        
        // Site-wide settings.
        siteSettings?: SiteSettings,
        // Subaccount ID of this site. This is a read-only field that can be left blank.
        subaccountId?: string,
    }
    
    interface SiteContact {
        // Address of this site contact.
        address?: string,
        // Site contact type.
        contactType?: string,
        // Email address of this site contact. This is a required field.
        email?: string,
        // First name of this site contact.
        firstName?: string,
        // ID of this site contact. This is a read-only, auto-generated field.
        id?: string,
        // Last name of this site contact.
        lastName?: string,
        // Primary phone number of this site contact.
        phone?: string,
        // Title or designation of this site contact.
        title?: string,
    }
    
    interface SiteSettings {
        // Whether active view creatives are disabled for this site.
        activeViewOptOut?: boolean,
        // Site-wide creative settings.
        creativeSettings?: CreativeSettings,
        // Whether brand safe ads are disabled for this site.
        disableBrandSafeAds?: boolean,
        // Whether new cookies are disabled for this site.
        disableNewCookie?: boolean,
        // Lookback window settings for this site.
        lookbackConfiguration?: LookbackConfiguration,
        // Configuration settings for dynamic and image floodlight tags.
        tagSetting?: TagSetting,
    }
    
    interface SitesListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#sitesListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
        // Site collection.
        sites?: Site[],        
    }
    
    interface Size {
        // Height of this size.
        height?: number,
        // IAB standard size. This is a read-only, auto-generated field.
        iab?: boolean,
        // ID of this size. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#size".
        kind?: string,
        // Width of this size.
        width?: number,
    }
    
    interface SizesListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#sizesListResponse".
        kind?: string,
        // Size collection.
        sizes?: Size[],        
    }
    
    interface SortedDimension {
        // The kind of resource this is, in this case dfareporting#sortedDimension.
        kind?: string,
        // The name of the dimension.
        name?: string,
        // An optional sort order for the dimension column.
        sortOrder?: string,
    }
    
    interface Subaccount {
        // ID of the account that contains this subaccount. This is a read-only field that can be left blank.
        accountId?: string,
        // IDs of the available user role permissions for this subaccount.
        availablePermissionIds?: string[],        
        // ID of this subaccount. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccount".
        kind?: string,
        // Name of this subaccount. This is a required field. Must be less than 128 characters long and be unique among subaccounts of the same account.
        name?: string,
    }
    
    interface SubaccountsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccountsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
        // Subaccount collection.
        subaccounts?: Subaccount[],        
    }
    
    interface TagData {
        // Ad associated with this placement tag.
        adId?: string,
        // Tag string to record a click.
        clickTag?: string,
        // Creative associated with this placement tag.
        creativeId?: string,
        // TagData tag format of this tag.
        format?: string,
        // Tag string for serving an ad.
        impressionTag?: string,
    }
    
    interface TagSetting {
        // Additional key-values to be included in tags. Each key-value pair must be of the form key=value, and pairs must be separated by a semicolon (;). Keys and values must not contain commas. For example, id=2;color=red is a valid value for this field.
        additionalKeyValues?: string,
        // Whether static landing page URLs should be included in the tags. This setting applies only to placements.
        includeClickThroughUrls?: boolean,
        // Whether click-tracking string should be included in the tags.
        includeClickTracking?: boolean,
        // Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags for this site. Publishers can then add keywords to those placeholders.
        keywordOption?: string,
    }
    
    interface TagSettings {
        // Whether dynamic floodlight tags are enabled.
        dynamicTagEnabled?: boolean,
        // Whether image tags are enabled.
        imageTagEnabled?: boolean,
    }
    
    interface TargetWindow {
        // User-entered value.
        customHtml?: string,
        // Type of browser window for which the backup image of the flash creative can be displayed.
        targetWindowOption?: string,
    }
    
    interface TargetableRemarketingList {
        // Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
        accountId?: string,
        // Whether this targetable remarketing list is active.
        active?: boolean,
        // Dimension value for the advertiser ID that owns this targetable remarketing list.
        advertiserId?: string,
        // Dimension value for the ID of the advertiser.
        advertiserIdDimensionValue?: DimensionValue,
        // Targetable remarketing list description.
        description?: string,
        // Targetable remarketing list ID.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingList".
        kind?: string,
        // Number of days that a user should remain in the targetable remarketing list without an impression.
        lifeSpan?: string,
        // Number of users currently in the list. This is a read-only field.
        listSize?: string,
        // Product from which this targetable remarketing list was originated.
        listSource?: string,
        // Name of the targetable remarketing list. Is no greater than 128 characters long.
        name?: string,
        // Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
        subaccountId?: string,
    }
    
    interface TargetableRemarketingListsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingListsListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
        // Targetable remarketing list collection.
        targetableRemarketingLists?: TargetableRemarketingList[],        
    }
    
    interface TechnologyTargeting {
        // Browsers that this ad targets. For each browser either set browserVersionId or dartId along with the version numbers. If both are specified, only browserVersionId will be used.The other fields are populated automatically when the ad is inserted or updated.
        browsers?: Browser[],        
        // Connection types that this ad targets. For each connection type only id is required.The other fields are populated automatically when the ad is inserted or updated.
        connectionTypes?: ConnectionType[],        
        // Mobile carriers that this ad targets. For each mobile carrier only id is required, and the other fields are populated automatically when the ad is inserted or updated. If targeting a mobile carrier, do not set targeting for any zip codes.
        mobileCarriers?: MobileCarrier[],        
        // Operating system versions that this ad targets. To target all versions, use operatingSystems. For each operating system version, only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system version, do not set targeting for the corresponding operating system in operatingSystems.
        operatingSystemVersions?: OperatingSystemVersion[],        
        // Operating systems that this ad targets. To target specific versions, use operatingSystemVersions. For each operating system only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system, do not set targeting for operating system versions for the same operating system.
        operatingSystems?: OperatingSystem[],        
        // Platform types that this ad targets. For example, desktop, mobile, or tablet. For each platform type, only id is required, and the other fields are populated automatically when the ad is inserted or updated.
        platformTypes?: PlatformType[],        
    }
    
    interface ThirdPartyAuthenticationToken {
        // Name of the third-party authentication token.
        name?: string,
        // Value of the third-party authentication token. This is a read-only, auto-generated field.
        value?: string,
    }
    
    interface ThirdPartyTrackingUrl {
        // Third-party URL type for in-stream video creatives.
        thirdPartyUrlType?: string,
        // URL for the specified third-party URL type.
        url?: string,
    }
    
    interface UserDefinedVariableConfiguration {
        // Data type for the variable. This is a required field.
        dataType?: string,
        // User-friendly name for the variable which will appear in reports. This is a required field, must be less than 64 characters long, and cannot contain the following characters: ""<>".
        reportName?: string,
        // Variable name in the tag. This is a required field.
        variableType?: string,
    }
    
    interface UserProfile {
        // The account ID to which this profile belongs.
        accountId?: string,
        // The account name this profile belongs to.
        accountName?: string,
        // The eTag of this response for caching purposes.
        etag?: string,
        // The kind of resource this is, in this case dfareporting#userProfile.
        kind?: string,
        // The unique ID of the user profile.
        profileId?: string,
        // The sub account ID this profile belongs to if applicable.
        subAccountId?: string,
        // The sub account name this profile belongs to if applicable.
        subAccountName?: string,
        // The user name.
        userName?: string,
    }
    
    interface UserProfileList {
        // The eTag of this response for caching purposes.
        etag?: string,
        // The user profiles returned in this response.
        items?: UserProfile[],        
        // The kind of list this is, in this case dfareporting#userProfileList.
        kind?: string,
    }
    
    interface UserRole {
        // Account ID of this user role. This is a read-only field that can be left blank.
        accountId?: string,
        // Whether this is a default user role. Default user roles are created by the system for the account/subaccount and cannot be modified or deleted. Each default user role comes with a basic set of preassigned permissions.
        defaultUserRole?: boolean,
        // ID of this user role. This is a read-only, auto-generated field.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRole".
        kind?: string,
        // Name of this user role. This is a required field. Must be less than 256 characters long. If this user role is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this user role is a top-level user role, and the name must be unique among top-level user roles of the same account.
        name?: string,
        // ID of the user role that this user role is based on or copied from. This is a required field.
        parentUserRoleId?: string,
        // List of permissions associated with this user role.
        permissions?: UserRolePermission[],        
        // Subaccount ID of this user role. This is a read-only field that can be left blank.
        subaccountId?: string,
    }
    
    interface UserRolePermission {
        // Levels of availability for a user role permission.
        availability?: string,
        // ID of this user role permission.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermission".
        kind?: string,
        // Name of this user role permission.
        name?: string,
        // ID of the permission group that this user role permission belongs to.
        permissionGroupId?: string,
    }
    
    interface UserRolePermissionGroup {
        // ID of this user role permission.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroup".
        kind?: string,
        // Name of this user role permission group.
        name?: string,
    }
    
    interface UserRolePermissionGroupsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroupsListResponse".
        kind?: string,
        // User role permission group collection.
        userRolePermissionGroups?: UserRolePermissionGroup[],        
    }
    
    interface UserRolePermissionsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionsListResponse".
        kind?: string,
        // User role permission collection.
        userRolePermissions?: UserRolePermission[],        
    }
    
    interface UserRolesListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolesListResponse".
        kind?: string,
        // Pagination token to be used for the next list operation.
        nextPageToken?: string,
        // User role collection.
        userRoles?: UserRole[],        
    }
    
    interface AccountActiveAdSummariesResource {
        // Gets the account's active ad summary by account ID.
        get (request: {        
            // User profile ID associated with this request.
            profileId: string,
            // Account ID.
            summaryAccountId: string,
        }) : gapi.client.Request<AccountActiveAdSummary>;        
        
    }
    
    
    interface AccountPermissionGroupsResource {
        // Gets one account permission group by ID.
        get (request: {        
            // Account permission group ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<AccountPermissionGroup>;        
        
        // Retrieves the list of account permission groups.
        list (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<AccountPermissionGroupsListResponse>;        
        
    }
    
    
    interface AccountPermissionsResource {
        // Gets one account permission by ID.
        get (request: {        
            // Account permission ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<AccountPermission>;        
        
        // Retrieves the list of account permissions.
        list (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<AccountPermissionsListResponse>;        
        
    }
    
    
    interface AccountUserProfilesResource {
        // Gets one account user profile by ID.
        get (request: {        
            // User profile ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<AccountUserProfile>;        
        
        // Inserts a new account user profile.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<AccountUserProfile>;        
        
        // Retrieves a list of account user profiles, possibly filtered.
        list (request: {        
            // Select only active user profiles.
            active?: boolean,
            // Select only user profiles with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
            // Select only user profiles with the specified subaccount ID.
            subaccountId?: string,
            // Select only user profiles with the specified user role ID.
            userRoleId?: string,
        }) : gapi.client.Request<AccountUserProfilesListResponse>;        
        
        // Updates an existing account user profile. This method supports patch semantics.
        patch (request: {        
            // User profile ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<AccountUserProfile>;        
        
        // Updates an existing account user profile.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<AccountUserProfile>;        
        
    }
    
    
    interface AccountsResource {
        // Gets one account by ID.
        get (request: {        
            // Account ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Account>;        
        
        // Retrieves the list of accounts, possibly filtered.
        list (request: {        
            // Select only active accounts. Don't set this field to select both active and non-active accounts.
            active?: boolean,
            // Select only accounts with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<AccountsListResponse>;        
        
        // Updates an existing account. This method supports patch semantics.
        patch (request: {        
            // Account ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Account>;        
        
        // Updates an existing account.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Account>;        
        
    }
    
    
    interface AdsResource {
        // Gets one ad by ID.
        get (request: {        
            // Ad ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Ad>;        
        
        // Inserts a new ad.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Ad>;        
        
        // Retrieves a list of ads, possibly filtered.
        list (request: {        
            // Select only active ads.
            active?: boolean,
            // Select only ads with this advertiser ID.
            advertiserId?: string,
            // Select only archived ads.
            archived?: boolean,
            // Select only ads with these audience segment IDs.
            audienceSegmentIds?: string,
            // Select only ads with these campaign IDs.
            campaignIds?: string,
            // Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. WEB and WEB_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
            compatibility?: string,
            // Select only ads with these creative IDs assigned.
            creativeIds?: string,
            // Select only ads with these creative optimization configuration IDs.
            creativeOptimizationConfigurationIds?: string,
            // Select only ads with the specified creativeType.
            creativeType?: string,
            // Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both.
            dynamicClickTracker?: boolean,
            // Select only ads with these IDs.
            ids?: string,
            // Select only ads with these landing page IDs.
            landingPageIds?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Select only ads with this event tag override ID.
            overriddenEventTagId?: string,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // Select only ads with these placement IDs assigned.
            placementIds?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Select only ads whose list targeting expression use these remarketing list IDs.
            remarketingListIds?: string,
            // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".
            searchString?: string,
            // Select only ads with these size IDs.
            sizeIds?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
            // Select only ads that are SSL-compliant.
            sslCompliant?: boolean,
            // Select only ads that require SSL.
            sslRequired?: boolean,
            // Select only ads with these types.
            type?: string,
        }) : gapi.client.Request<AdsListResponse>;        
        
        // Updates an existing ad. This method supports patch semantics.
        patch (request: {        
            // Ad ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Ad>;        
        
        // Updates an existing ad.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Ad>;        
        
    }
    
    
    interface AdvertiserGroupsResource {
        // Deletes an existing advertiser group.
        delete (request: {        
            // Advertiser group ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets one advertiser group by ID.
        get (request: {        
            // Advertiser group ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<AdvertiserGroup>;        
        
        // Inserts a new advertiser group.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<AdvertiserGroup>;        
        
        // Retrieves a list of advertiser groups, possibly filtered.
        list (request: {        
            // Select only advertiser groups with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<AdvertiserGroupsListResponse>;        
        
        // Updates an existing advertiser group. This method supports patch semantics.
        patch (request: {        
            // Advertiser group ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<AdvertiserGroup>;        
        
        // Updates an existing advertiser group.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<AdvertiserGroup>;        
        
    }
    
    
    interface AdvertisersResource {
        // Gets one advertiser by ID.
        get (request: {        
            // Advertiser ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Advertiser>;        
        
        // Inserts a new advertiser.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Advertiser>;        
        
        // Retrieves a list of advertisers, possibly filtered.
        list (request: {        
            // Select only advertisers with these advertiser group IDs.
            advertiserGroupIds?: string,
            // Select only advertisers with these floodlight configuration IDs.
            floodlightConfigurationIds?: string,
            // Select only advertisers with these IDs.
            ids?: string,
            // Select only advertisers which do not belong to any advertiser group.
            includeAdvertisersWithoutGroupsOnly?: boolean,
            // Maximum number of results to return.
            maxResults?: number,
            // Select only advertisers which use another advertiser's floodlight configuration.
            onlyParent?: boolean,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
            // Select only advertisers with the specified status.
            status?: string,
            // Select only advertisers with these subaccount IDs.
            subaccountId?: string,
        }) : gapi.client.Request<AdvertisersListResponse>;        
        
        // Updates an existing advertiser. This method supports patch semantics.
        patch (request: {        
            // Advertiser ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Advertiser>;        
        
        // Updates an existing advertiser.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Advertiser>;        
        
    }
    
    
    interface BrowsersResource {
        // Retrieves a list of browsers.
        list (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<BrowsersListResponse>;        
        
    }
    
    
    interface CampaignCreativeAssociationsResource {
        // Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
        insert (request: {        
            // Campaign ID in this association.
            campaignId: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<CampaignCreativeAssociation>;        
        
        // Retrieves the list of creative IDs associated with the specified campaign.
        list (request: {        
            // Campaign ID in this association.
            campaignId: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<CampaignCreativeAssociationsListResponse>;        
        
    }
    
    
    interface CampaignsResource {
        // Gets one campaign by ID.
        get (request: {        
            // Campaign ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Campaign>;        
        
        // Inserts a new campaign.
        insert (request: {        
            // Default landing page name for this new campaign. Must be less than 256 characters long.
            defaultLandingPageName: string,
            // Default landing page URL for this new campaign.
            defaultLandingPageUrl: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Campaign>;        
        
        // Retrieves a list of campaigns, possibly filtered.
        list (request: {        
            // Select only campaigns whose advertisers belong to these advertiser groups.
            advertiserGroupIds?: string,
            // Select only campaigns that belong to these advertisers.
            advertiserIds?: string,
            // Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns.
            archived?: boolean,
            // Select only campaigns that have at least one optimization activity.
            atLeastOneOptimizationActivity?: boolean,
            // Exclude campaigns with these IDs.
            excludedIds?: string,
            // Select only campaigns with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Select only campaigns that have overridden this event tag ID.
            overriddenEventTagId?: string,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
            // Select only campaigns that belong to this subaccount.
            subaccountId?: string,
        }) : gapi.client.Request<CampaignsListResponse>;        
        
        // Updates an existing campaign. This method supports patch semantics.
        patch (request: {        
            // Campaign ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Campaign>;        
        
        // Updates an existing campaign.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Campaign>;        
        
    }
    
    
    interface ChangeLogsResource {
        // Gets one change log by ID.
        get (request: {        
            // Change log ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<ChangeLog>;        
        
        // Retrieves a list of change logs.
        list (request: {        
            // Select only change logs with the specified action.
            action?: string,
            // Select only change logs with these IDs.
            ids?: string,
            // Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
            maxChangeTime?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Select only change logs whose change time is before the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
            minChangeTime?: string,
            // Select only change logs with these object IDs.
            objectIds?: string,
            // Select only change logs with the specified object type.
            objectType?: string,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Select only change logs whose object ID, user name, old or new values match the search string.
            searchString?: string,
            // Select only change logs with these user profile IDs.
            userProfileIds?: string,
        }) : gapi.client.Request<ChangeLogsListResponse>;        
        
    }
    
    
    interface CitiesResource {
        // Retrieves a list of cities, possibly filtered.
        list (request: {        
            // Select only cities from these countries.
            countryDartIds?: string,
            // Select only cities with these DART IDs.
            dartIds?: string,
            // Select only cities with names starting with this prefix.
            namePrefix?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Select only cities from these regions.
            regionDartIds?: string,
        }) : gapi.client.Request<CitiesListResponse>;        
        
    }
    
    
    interface ConnectionTypesResource {
        // Gets one connection type by ID.
        get (request: {        
            // Connection type ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<ConnectionType>;        
        
        // Retrieves a list of connection types.
        list (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<ConnectionTypesListResponse>;        
        
    }
    
    
    interface ContentCategoriesResource {
        // Deletes an existing content category.
        delete (request: {        
            // Content category ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets one content category by ID.
        get (request: {        
            // Content category ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<ContentCategory>;        
        
        // Inserts a new content category.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<ContentCategory>;        
        
        // Retrieves a list of content categories, possibly filtered.
        list (request: {        
            // Select only content categories with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<ContentCategoriesListResponse>;        
        
        // Updates an existing content category. This method supports patch semantics.
        patch (request: {        
            // Content category ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<ContentCategory>;        
        
        // Updates an existing content category.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<ContentCategory>;        
        
    }
    
    
    interface CountriesResource {
        // Gets one country by ID.
        get (request: {        
            // Country DART ID.
            dartId: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Country>;        
        
        // Retrieves a list of countries.
        list (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<CountriesListResponse>;        
        
    }
    
    
    interface CreativeAssetsResource {
        // Inserts a new creative asset.
        insert (request: {        
            // Advertiser ID of this creative. This is a required field.
            advertiserId: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<CreativeAssetMetadata>;        
        
    }
    
    
    interface CreativeFieldValuesResource {
        // Deletes an existing creative field value.
        delete (request: {        
            // Creative field ID for this creative field value.
            creativeFieldId: string,
            // Creative Field Value ID
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets one creative field value by ID.
        get (request: {        
            // Creative field ID for this creative field value.
            creativeFieldId: string,
            // Creative Field Value ID
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<CreativeFieldValue>;        
        
        // Inserts a new creative field value.
        insert (request: {        
            // Creative field ID for this creative field value.
            creativeFieldId: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<CreativeFieldValue>;        
        
        // Retrieves a list of creative field values, possibly filtered.
        list (request: {        
            // Creative field ID for this creative field value.
            creativeFieldId: string,
            // Select only creative field values with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed.
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<CreativeFieldValuesListResponse>;        
        
        // Updates an existing creative field value. This method supports patch semantics.
        patch (request: {        
            // Creative field ID for this creative field value.
            creativeFieldId: string,
            // Creative Field Value ID
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<CreativeFieldValue>;        
        
        // Updates an existing creative field value.
        update (request: {        
            // Creative field ID for this creative field value.
            creativeFieldId: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<CreativeFieldValue>;        
        
    }
    
    
    interface CreativeFieldsResource {
        // Deletes an existing creative field.
        delete (request: {        
            // Creative Field ID
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets one creative field by ID.
        get (request: {        
            // Creative Field ID
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<CreativeField>;        
        
        // Inserts a new creative field.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<CreativeField>;        
        
        // Retrieves a list of creative fields, possibly filtered.
        list (request: {        
            // Select only creative fields that belong to these advertisers.
            advertiserIds?: string,
            // Select only creative fields with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<CreativeFieldsListResponse>;        
        
        // Updates an existing creative field. This method supports patch semantics.
        patch (request: {        
            // Creative Field ID
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<CreativeField>;        
        
        // Updates an existing creative field.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<CreativeField>;        
        
    }
    
    
    interface CreativeGroupsResource {
        // Gets one creative group by ID.
        get (request: {        
            // Creative group ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<CreativeGroup>;        
        
        // Inserts a new creative group.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<CreativeGroup>;        
        
        // Retrieves a list of creative groups, possibly filtered.
        list (request: {        
            // Select only creative groups that belong to these advertisers.
            advertiserIds?: string,
            // Select only creative groups that belong to this subgroup.
            groupNumber?: number,
            // Select only creative groups with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<CreativeGroupsListResponse>;        
        
        // Updates an existing creative group. This method supports patch semantics.
        patch (request: {        
            // Creative group ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<CreativeGroup>;        
        
        // Updates an existing creative group.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<CreativeGroup>;        
        
    }
    
    
    interface CreativesResource {
        // Gets one creative by ID.
        get (request: {        
            // Creative ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Creative>;        
        
        // Inserts a new creative.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Creative>;        
        
        // Retrieves a list of creatives, possibly filtered.
        list (request: {        
            // Select only active creatives. Leave blank to select active and inactive creatives.
            active?: boolean,
            // Select only creatives with this advertiser ID.
            advertiserId?: string,
            // Select only archived creatives. Leave blank to select archived and unarchived creatives.
            archived?: boolean,
            // Select only creatives with this campaign ID.
            campaignId?: string,
            // Select only in-stream video creatives with these companion IDs.
            companionCreativeIds?: string,
            // Select only creatives with these creative field IDs.
            creativeFieldIds?: string,
            // Select only creatives with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Select only creatives with these rendering IDs.
            renderingIds?: string,
            // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative".
            searchString?: string,
            // Select only creatives with these size IDs.
            sizeIds?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
            // Select only creatives corresponding to this Studio creative ID.
            studioCreativeId?: string,
            // Select only creatives with these creative types.
            types?: string,
        }) : gapi.client.Request<CreativesListResponse>;        
        
        // Updates an existing creative. This method supports patch semantics.
        patch (request: {        
            // Creative ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Creative>;        
        
        // Updates an existing creative.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Creative>;        
        
    }
    
    
    interface DimensionValuesResource {
        // Retrieves list of report dimension values for a list of filters.
        query (request: {        
            // Maximum number of results to return.
            maxResults?: number,
            // The value of the nextToken from the previous result page.
            pageToken?: string,
            // The DFA user profile ID.
            profileId: string,
        }) : gapi.client.Request<DimensionValueList>;        
        
    }
    
    
    interface DirectorySiteContactsResource {
        // Gets one directory site contact by ID.
        get (request: {        
            // Directory site contact ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<DirectorySiteContact>;        
        
        // Retrieves a list of directory site contacts, possibly filtered.
        list (request: {        
            // Select only directory site contacts with these directory site IDs. This is a required field.
            directorySiteIds?: string,
            // Select only directory site contacts with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "directory site contact*2015" will return objects with names like "directory site contact June 2015", "directory site contact April 2015", or simply "directory site contact 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site contact" will match objects with name "my directory site contact", "directory site contact 2015", or simply "directory site contact".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<DirectorySiteContactsListResponse>;        
        
    }
    
    
    interface DirectorySitesResource {
        // Gets one directory site by ID.
        get (request: {        
            // Directory site ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<DirectorySite>;        
        
        // Inserts a new directory site.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<DirectorySite>;        
        
        // Retrieves a list of directory sites, possibly filtered.
        list (request: {        
            // This search filter is no longer supported and will have no effect on the results returned.
            acceptsInStreamVideoPlacements?: boolean,
            // This search filter is no longer supported and will have no effect on the results returned.
            acceptsInterstitialPlacements?: boolean,
            // Select only directory sites that accept publisher paid placements. This field can be left blank.
            acceptsPublisherPaidPlacements?: boolean,
            // Select only active directory sites. Leave blank to retrieve both active and inactive directory sites.
            active?: boolean,
            // Select only directory sites with this country ID.
            countryId?: string,
            // Select only directory sites with this DFP network code.
            dfp_network_code?: string,
            // Select only directory sites with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // Select only directory sites with this parent ID.
            parentId?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<DirectorySitesListResponse>;        
        
    }
    
    
    interface EventTagsResource {
        // Deletes an existing event tag.
        delete (request: {        
            // Event tag ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets one event tag by ID.
        get (request: {        
            // Event tag ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<EventTag>;        
        
        // Inserts a new event tag.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<EventTag>;        
        
        // Retrieves a list of event tags, possibly filtered.
        list (request: {        
            // Select only event tags that belong to this ad.
            adId?: string,
            // Select only event tags that belong to this advertiser.
            advertiserId?: string,
            // Select only event tags that belong to this campaign.
            campaignId?: string,
            // Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags.
            definitionsOnly?: boolean,
            // Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well.
            enabled?: boolean,
            // Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking.
            eventTagTypes?: string,
            // Select only event tags with these IDs.
            ids?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<EventTagsListResponse>;        
        
        // Updates an existing event tag. This method supports patch semantics.
        patch (request: {        
            // Event tag ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<EventTag>;        
        
        // Updates an existing event tag.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<EventTag>;        
        
    }
    
    
    interface FilesResource {
        // Retrieves a report file by its report ID and file ID.
        get (request: {        
            // The ID of the report file.
            fileId: string,
            // The ID of the report.
            reportId: string,
        }) : gapi.client.Request<File>;        
        
        // Lists files for a user profile.
        list (request: {        
            // Maximum number of results to return.
            maxResults?: number,
            // The value of the nextToken from the previous result page.
            pageToken?: string,
            // The DFA profile ID.
            profileId: string,
            // The scope that defines which results are returned, default is 'MINE'.
            scope?: string,
            // The field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is 'DESCENDING'.
            sortOrder?: string,
        }) : gapi.client.Request<FileList>;        
        
    }
    
    
    interface FloodlightActivitiesResource {
        // Deletes an existing floodlight activity.
        delete (request: {        
            // Floodlight activity ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<void>;        
        
        // Generates a tag for a floodlight activity.
        generatetag (request: {        
            // Floodlight activity ID for which we want to generate a tag.
            floodlightActivityId?: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<FloodlightActivitiesGenerateTagResponse>;        
        
        // Gets one floodlight activity by ID.
        get (request: {        
            // Floodlight activity ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<FloodlightActivity>;        
        
        // Inserts a new floodlight activity.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<FloodlightActivity>;        
        
        // Retrieves a list of floodlight activities, possibly filtered.
        list (request: {        
            // Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
            advertiserId?: string,
            // Select only floodlight activities with the specified floodlight activity group IDs.
            floodlightActivityGroupIds?: string,
            // Select only floodlight activities with the specified floodlight activity group name.
            floodlightActivityGroupName?: string,
            // Select only floodlight activities with the specified floodlight activity group tag string.
            floodlightActivityGroupTagString?: string,
            // Select only floodlight activities with the specified floodlight activity group type.
            floodlightActivityGroupType?: string,
            // Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
            floodlightConfigurationId?: string,
            // Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
            // Select only floodlight activities with the specified tag string.
            tagString?: string,
        }) : gapi.client.Request<FloodlightActivitiesListResponse>;        
        
        // Updates an existing floodlight activity. This method supports patch semantics.
        patch (request: {        
            // Floodlight activity ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<FloodlightActivity>;        
        
        // Updates an existing floodlight activity.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<FloodlightActivity>;        
        
    }
    
    
    interface FloodlightActivityGroupsResource {
        // Deletes an existing floodlight activity group.
        delete (request: {        
            // Floodlight activity Group ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets one floodlight activity group by ID.
        get (request: {        
            // Floodlight activity Group ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<FloodlightActivityGroup>;        
        
        // Inserts a new floodlight activity group.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<FloodlightActivityGroup>;        
        
        // Retrieves a list of floodlight activity groups, possibly filtered.
        list (request: {        
            // Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
            advertiserId?: string,
            // Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result.
            floodlightConfigurationId?: string,
            // Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
            // Select only floodlight activity groups with the specified floodlight activity group type.
            type?: string,
        }) : gapi.client.Request<FloodlightActivityGroupsListResponse>;        
        
        // Updates an existing floodlight activity group. This method supports patch semantics.
        patch (request: {        
            // Floodlight activity Group ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<FloodlightActivityGroup>;        
        
        // Updates an existing floodlight activity group.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<FloodlightActivityGroup>;        
        
    }
    
    
    interface FloodlightConfigurationsResource {
        // Gets one floodlight configuration by ID.
        get (request: {        
            // Floodlight configuration ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<FloodlightConfiguration>;        
        
        // Retrieves a list of floodlight configurations, possibly filtered.
        list (request: {        
            // Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned.
            ids?: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<FloodlightConfigurationsListResponse>;        
        
        // Updates an existing floodlight configuration. This method supports patch semantics.
        patch (request: {        
            // Floodlight configuration ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<FloodlightConfiguration>;        
        
        // Updates an existing floodlight configuration.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<FloodlightConfiguration>;        
        
    }
    
    
    interface InventoryItemsResource {
        // Gets one inventory item by ID.
        get (request: {        
            // Inventory item ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
            // Project ID for order documents.
            projectId: string,
        }) : gapi.client.Request<InventoryItem>;        
        
        // Retrieves a list of inventory items, possibly filtered.
        list (request: {        
            // Select only inventory items with these IDs.
            ids?: string,
            // Select only inventory items that are in plan.
            inPlan?: boolean,
            // Maximum number of results to return.
            maxResults?: number,
            // Select only inventory items that belong to specified orders.
            orderId?: string,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Project ID for order documents.
            projectId: string,
            // Select only inventory items that are associated with these sites.
            siteId?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<InventoryItemsListResponse>;        
        
    }
    
    
    interface LandingPagesResource {
        // Deletes an existing campaign landing page.
        delete (request: {        
            // Landing page campaign ID.
            campaignId: string,
            // Landing page ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets one campaign landing page by ID.
        get (request: {        
            // Landing page campaign ID.
            campaignId: string,
            // Landing page ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<LandingPage>;        
        
        // Inserts a new landing page for the specified campaign.
        insert (request: {        
            // Landing page campaign ID.
            campaignId: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<LandingPage>;        
        
        // Retrieves the list of landing pages for the specified campaign.
        list (request: {        
            // Landing page campaign ID.
            campaignId: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<LandingPagesListResponse>;        
        
        // Updates an existing campaign landing page. This method supports patch semantics.
        patch (request: {        
            // Landing page campaign ID.
            campaignId: string,
            // Landing page ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<LandingPage>;        
        
        // Updates an existing campaign landing page.
        update (request: {        
            // Landing page campaign ID.
            campaignId: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<LandingPage>;        
        
    }
    
    
    interface MetrosResource {
        // Retrieves a list of metros.
        list (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<MetrosListResponse>;        
        
    }
    
    
    interface MobileCarriersResource {
        // Gets one mobile carrier by ID.
        get (request: {        
            // Mobile carrier ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<MobileCarrier>;        
        
        // Retrieves a list of mobile carriers.
        list (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<MobileCarriersListResponse>;        
        
    }
    
    
    interface OperatingSystemVersionsResource {
        // Gets one operating system version by ID.
        get (request: {        
            // Operating system version ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<OperatingSystemVersion>;        
        
        // Retrieves a list of operating system versions.
        list (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<OperatingSystemVersionsListResponse>;        
        
    }
    
    
    interface OperatingSystemsResource {
        // Gets one operating system by DART ID.
        get (request: {        
            // Operating system DART ID.
            dartId: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<OperatingSystem>;        
        
        // Retrieves a list of operating systems.
        list (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<OperatingSystemsListResponse>;        
        
    }
    
    
    interface OrderDocumentsResource {
        // Gets one order document by ID.
        get (request: {        
            // Order document ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
            // Project ID for order documents.
            projectId: string,
        }) : gapi.client.Request<OrderDocument>;        
        
        // Retrieves a list of order documents, possibly filtered.
        list (request: {        
            // Select only order documents that have been approved by at least one user.
            approved?: boolean,
            // Select only order documents with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Select only order documents for specified orders.
            orderId?: string,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Project ID for order documents.
            projectId: string,
            // Allows searching for order documents by name or ID. Wildcards (*) are allowed. For example, "orderdocument*2015" will return order documents with names like "orderdocument June 2015", "orderdocument April 2015", or simply "orderdocument 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "orderdocument" will match order documents with name "my orderdocument", "orderdocument 2015", or simply "orderdocument".
            searchString?: string,
            // Select only order documents that are associated with these sites.
            siteId?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<OrderDocumentsListResponse>;        
        
    }
    
    
    interface OrdersResource {
        // Gets one order by ID.
        get (request: {        
            // Order ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
            // Project ID for orders.
            projectId: string,
        }) : gapi.client.Request<Order>;        
        
        // Retrieves a list of orders, possibly filtered.
        list (request: {        
            // Select only orders with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Project ID for orders.
            projectId: string,
            // Allows searching for orders by name or ID. Wildcards (*) are allowed. For example, "order*2015" will return orders with names like "order June 2015", "order April 2015", or simply "order 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "order" will match orders with name "my order", "order 2015", or simply "order".
            searchString?: string,
            // Select only orders that are associated with these site IDs.
            siteId?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<OrdersListResponse>;        
        
    }
    
    
    interface PlacementGroupsResource {
        // Gets one placement group by ID.
        get (request: {        
            // Placement group ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<PlacementGroup>;        
        
        // Inserts a new placement group.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<PlacementGroup>;        
        
        // Retrieves a list of placement groups, possibly filtered.
        list (request: {        
            // Select only placement groups that belong to these advertisers.
            advertiserIds?: string,
            // Select only archived placements. Don't set this field to select both archived and non-archived placements.
            archived?: boolean,
            // Select only placement groups that belong to these campaigns.
            campaignIds?: string,
            // Select only placement groups that are associated with these content categories.
            contentCategoryIds?: string,
            // Select only placement groups that are associated with these directory sites.
            directorySiteIds?: string,
            // Select only placement groups with these IDs.
            ids?: string,
            // Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
            maxEndDate?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
            maxStartDate?: string,
            // Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
            minEndDate?: string,
            // Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
            minStartDate?: string,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
            placementGroupType?: string,
            // Select only placement groups that are associated with these placement strategies.
            placementStrategyIds?: string,
            // Select only placement groups with these pricing types.
            pricingTypes?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup".
            searchString?: string,
            // Select only placement groups that are associated with these sites.
            siteIds?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<PlacementGroupsListResponse>;        
        
        // Updates an existing placement group. This method supports patch semantics.
        patch (request: {        
            // Placement group ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<PlacementGroup>;        
        
        // Updates an existing placement group.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<PlacementGroup>;        
        
    }
    
    
    interface PlacementStrategiesResource {
        // Deletes an existing placement strategy.
        delete (request: {        
            // Placement strategy ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets one placement strategy by ID.
        get (request: {        
            // Placement strategy ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<PlacementStrategy>;        
        
        // Inserts a new placement strategy.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<PlacementStrategy>;        
        
        // Retrieves a list of placement strategies, possibly filtered.
        list (request: {        
            // Select only placement strategies with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<PlacementStrategiesListResponse>;        
        
        // Updates an existing placement strategy. This method supports patch semantics.
        patch (request: {        
            // Placement strategy ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<PlacementStrategy>;        
        
        // Updates an existing placement strategy.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<PlacementStrategy>;        
        
    }
    
    
    interface PlacementsResource {
        // Generates tags for a placement.
        generatetags (request: {        
            // Generate placements belonging to this campaign. This is a required field.
            campaignId?: string,
            // Generate tags for these placements.
            placementIds?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Tag formats to generate for these placements.
            tagFormats?: string,
        }) : gapi.client.Request<PlacementsGenerateTagsResponse>;        
        
        // Gets one placement by ID.
        get (request: {        
            // Placement ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Placement>;        
        
        // Inserts a new placement.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Placement>;        
        
        // Retrieves a list of placements, possibly filtered.
        list (request: {        
            // Select only placements that belong to these advertisers.
            advertiserIds?: string,
            // Select only archived placements. Don't set this field to select both archived and non-archived placements.
            archived?: boolean,
            // Select only placements that belong to these campaigns.
            campaignIds?: string,
            // Select only placements that are associated with these compatibilities. WEB and WEB_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps.IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
            compatibilities?: string,
            // Select only placements that are associated with these content categories.
            contentCategoryIds?: string,
            // Select only placements that are associated with these directory sites.
            directorySiteIds?: string,
            // Select only placements that belong to these placement groups.
            groupIds?: string,
            // Select only placements with these IDs.
            ids?: string,
            // Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
            maxEndDate?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
            maxStartDate?: string,
            // Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
            minEndDate?: string,
            // Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
            minStartDate?: string,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // Select only placements with this payment source.
            paymentSource?: string,
            // Select only placements that are associated with these placement strategies.
            placementStrategyIds?: string,
            // Select only placements with these pricing types.
            pricingTypes?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement".
            searchString?: string,
            // Select only placements that are associated with these sites.
            siteIds?: string,
            // Select only placements that are associated with these sizes.
            sizeIds?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<PlacementsListResponse>;        
        
        // Updates an existing placement. This method supports patch semantics.
        patch (request: {        
            // Placement ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Placement>;        
        
        // Updates an existing placement.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Placement>;        
        
    }
    
    
    interface PlatformTypesResource {
        // Gets one platform type by ID.
        get (request: {        
            // Platform type ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<PlatformType>;        
        
        // Retrieves a list of platform types.
        list (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<PlatformTypesListResponse>;        
        
    }
    
    
    interface PostalCodesResource {
        // Gets one postal code by ID.
        get (request: {        
            // Postal code ID.
            code: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<PostalCode>;        
        
        // Retrieves a list of postal codes.
        list (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<PostalCodesListResponse>;        
        
    }
    
    
    interface ProjectsResource {
        // Gets one project by ID.
        get (request: {        
            // Project ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Project>;        
        
        // Retrieves a list of projects, possibly filtered.
        list (request: {        
            // Select only projects with these advertiser IDs.
            advertiserIds?: string,
            // Select only projects with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, "project*2015" will return projects with names like "project June 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<ProjectsListResponse>;        
        
    }
    
    
    interface RegionsResource {
        // Retrieves a list of regions.
        list (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<RegionsListResponse>;        
        
    }
    
    
    interface RemarketingListSharesResource {
        // Gets one remarketing list share by remarketing list ID.
        get (request: {        
            // User profile ID associated with this request.
            profileId: string,
            // Remarketing list ID.
            remarketingListId: string,
        }) : gapi.client.Request<RemarketingListShare>;        
        
        // Updates an existing remarketing list share. This method supports patch semantics.
        patch (request: {        
            // User profile ID associated with this request.
            profileId: string,
            // Remarketing list ID.
            remarketingListId: string,
        }) : gapi.client.Request<RemarketingListShare>;        
        
        // Updates an existing remarketing list share.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<RemarketingListShare>;        
        
    }
    
    
    interface RemarketingListsResource {
        // Gets one remarketing list by ID.
        get (request: {        
            // Remarketing list ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<RemarketingList>;        
        
        // Inserts a new remarketing list.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<RemarketingList>;        
        
        // Retrieves a list of remarketing lists, possibly filtered.
        list (request: {        
            // Select only active or only inactive remarketing lists.
            active?: boolean,
            // Select only remarketing lists owned by this advertiser.
            advertiserId: string,
            // Select only remarketing lists that have this floodlight activity ID.
            floodlightActivityId?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
            name?: string,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<RemarketingListsListResponse>;        
        
        // Updates an existing remarketing list. This method supports patch semantics.
        patch (request: {        
            // Remarketing list ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<RemarketingList>;        
        
        // Updates an existing remarketing list.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<RemarketingList>;        
        
    }
    
    
    interface CompatibleFieldsResource {
        // Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
        query (request: {        
            // The DFA user profile ID.
            profileId: string,
        }) : gapi.client.Request<CompatibleFields>;        
        
    }
    
    
    interface FilesResource {
        // Retrieves a report file.
        get (request: {        
            // The ID of the report file.
            fileId: string,
            // The DFA profile ID.
            profileId: string,
            // The ID of the report.
            reportId: string,
        }) : gapi.client.Request<File>;        
        
        // Lists files for a report.
        list (request: {        
            // Maximum number of results to return.
            maxResults?: number,
            // The value of the nextToken from the previous result page.
            pageToken?: string,
            // The DFA profile ID.
            profileId: string,
            // The ID of the parent report.
            reportId: string,
            // The field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is 'DESCENDING'.
            sortOrder?: string,
        }) : gapi.client.Request<FileList>;        
        
    }
    
    
    interface ReportsResource {
        // Deletes a report by its ID.
        delete (request: {        
            // The DFA user profile ID.
            profileId: string,
            // The ID of the report.
            reportId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a report by its ID.
        get (request: {        
            // The DFA user profile ID.
            profileId: string,
            // The ID of the report.
            reportId: string,
        }) : gapi.client.Request<Report>;        
        
        // Creates a report.
        insert (request: {        
            // The DFA user profile ID.
            profileId: string,
        }) : gapi.client.Request<Report>;        
        
        // Retrieves list of reports.
        list (request: {        
            // Maximum number of results to return.
            maxResults?: number,
            // The value of the nextToken from the previous result page.
            pageToken?: string,
            // The DFA user profile ID.
            profileId: string,
            // The scope that defines which results are returned, default is 'MINE'.
            scope?: string,
            // The field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is 'DESCENDING'.
            sortOrder?: string,
        }) : gapi.client.Request<ReportList>;        
        
        // Updates a report. This method supports patch semantics.
        patch (request: {        
            // The DFA user profile ID.
            profileId: string,
            // The ID of the report.
            reportId: string,
        }) : gapi.client.Request<Report>;        
        
        // Runs a report.
        run (request: {        
            // The DFA profile ID.
            profileId: string,
            // The ID of the report.
            reportId: string,
            // If set and true, tries to run the report synchronously.
            synchronous?: boolean,
        }) : gapi.client.Request<File>;        
        
        // Updates a report.
        update (request: {        
            // The DFA user profile ID.
            profileId: string,
            // The ID of the report.
            reportId: string,
        }) : gapi.client.Request<Report>;        
        
        compatibleFields: CompatibleFieldsResource,
        files: FilesResource,
    }
    
    
    interface SitesResource {
        // Gets one site by ID.
        get (request: {        
            // Site ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Site>;        
        
        // Inserts a new site.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Site>;        
        
        // Retrieves a list of sites, possibly filtered.
        list (request: {        
            // This search filter is no longer supported and will have no effect on the results returned.
            acceptsInStreamVideoPlacements?: boolean,
            // This search filter is no longer supported and will have no effect on the results returned.
            acceptsInterstitialPlacements?: boolean,
            // Select only sites that accept publisher paid placements.
            acceptsPublisherPaidPlacements?: boolean,
            // Select only AdWords sites.
            adWordsSite?: boolean,
            // Select only approved sites.
            approved?: boolean,
            // Select only sites with these campaign IDs.
            campaignIds?: string,
            // Select only sites with these directory site IDs.
            directorySiteIds?: string,
            // Select only sites with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
            // Select only sites with this subaccount ID.
            subaccountId?: string,
            // Select only sites that have not been mapped to a directory site.
            unmappedSite?: boolean,
        }) : gapi.client.Request<SitesListResponse>;        
        
        // Updates an existing site. This method supports patch semantics.
        patch (request: {        
            // Site ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Site>;        
        
        // Updates an existing site.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Site>;        
        
    }
    
    
    interface SizesResource {
        // Gets one size by ID.
        get (request: {        
            // Size ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Size>;        
        
        // Inserts a new size.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Size>;        
        
        // Retrieves a list of sizes, possibly filtered.
        list (request: {        
            // Select only sizes with this height.
            height?: number,
            // Select only IAB standard sizes.
            iabStandard?: boolean,
            // Select only sizes with these IDs.
            ids?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Select only sizes with this width.
            width?: number,
        }) : gapi.client.Request<SizesListResponse>;        
        
    }
    
    
    interface SubaccountsResource {
        // Gets one subaccount by ID.
        get (request: {        
            // Subaccount ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Subaccount>;        
        
        // Inserts a new subaccount.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Subaccount>;        
        
        // Gets a list of subaccounts, possibly filtered.
        list (request: {        
            // Select only subaccounts with these IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<SubaccountsListResponse>;        
        
        // Updates an existing subaccount. This method supports patch semantics.
        patch (request: {        
            // Subaccount ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Subaccount>;        
        
        // Updates an existing subaccount.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<Subaccount>;        
        
    }
    
    
    interface TargetableRemarketingListsResource {
        // Gets one remarketing list by ID.
        get (request: {        
            // Remarketing list ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<TargetableRemarketingList>;        
        
        // Retrieves a list of targetable remarketing lists, possibly filtered.
        list (request: {        
            // Select only active or only inactive targetable remarketing lists.
            active?: boolean,
            // Select only targetable remarketing lists targetable by these advertisers.
            advertiserId: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
            name?: string,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
        }) : gapi.client.Request<TargetableRemarketingListsListResponse>;        
        
    }
    
    
    interface UserProfilesResource {
        // Gets one user profile by ID.
        get (request: {        
            // The user profile ID.
            profileId: string,
        }) : gapi.client.Request<UserProfile>;        
        
        // Retrieves list of user profiles for a user.
        list (request: {        
        }) : gapi.client.Request<UserProfileList>;        
        
    }
    
    
    interface UserRolePermissionGroupsResource {
        // Gets one user role permission group by ID.
        get (request: {        
            // User role permission group ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<UserRolePermissionGroup>;        
        
        // Gets a list of all supported user role permission groups.
        list (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<UserRolePermissionGroupsListResponse>;        
        
    }
    
    
    interface UserRolePermissionsResource {
        // Gets one user role permission by ID.
        get (request: {        
            // User role permission ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<UserRolePermission>;        
        
        // Gets a list of user role permissions, possibly filtered.
        list (request: {        
            // Select only user role permissions with these IDs.
            ids?: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<UserRolePermissionsListResponse>;        
        
    }
    
    
    interface UserRolesResource {
        // Deletes an existing user role.
        delete (request: {        
            // User role ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets one user role by ID.
        get (request: {        
            // User role ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<UserRole>;        
        
        // Inserts a new user role.
        insert (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<UserRole>;        
        
        // Retrieves a list of user roles, possibly filtered.
        list (request: {        
            // Select only account level user roles not associated with any specific subaccount.
            accountUserRoleOnly?: boolean,
            // Select only user roles with the specified IDs.
            ids?: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Value of the nextPageToken from the previous result page.
            pageToken?: string,
            // User profile ID associated with this request.
            profileId: string,
            // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole".
            searchString?: string,
            // Field by which to sort the list.
            sortField?: string,
            // Order of sorted results, default is ASCENDING.
            sortOrder?: string,
            // Select only user roles that belong to this subaccount.
            subaccountId?: string,
        }) : gapi.client.Request<UserRolesListResponse>;        
        
        // Updates an existing user role. This method supports patch semantics.
        patch (request: {        
            // User role ID.
            id: string,
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<UserRole>;        
        
        // Updates an existing user role.
        update (request: {        
            // User profile ID associated with this request.
            profileId: string,
        }) : gapi.client.Request<UserRole>;        
        
    }
    
}

declare module gapi.client.dfareporting {
    var accountActiveAdSummaries: gapi.client.dfareporting.AccountActiveAdSummariesResource; 
    
    var accountPermissionGroups: gapi.client.dfareporting.AccountPermissionGroupsResource; 
    
    var accountPermissions: gapi.client.dfareporting.AccountPermissionsResource; 
    
    var accountUserProfiles: gapi.client.dfareporting.AccountUserProfilesResource; 
    
    var accounts: gapi.client.dfareporting.AccountsResource; 
    
    var ads: gapi.client.dfareporting.AdsResource; 
    
    var advertiserGroups: gapi.client.dfareporting.AdvertiserGroupsResource; 
    
    var advertisers: gapi.client.dfareporting.AdvertisersResource; 
    
    var browsers: gapi.client.dfareporting.BrowsersResource; 
    
    var campaignCreativeAssociations: gapi.client.dfareporting.CampaignCreativeAssociationsResource; 
    
    var campaigns: gapi.client.dfareporting.CampaignsResource; 
    
    var changeLogs: gapi.client.dfareporting.ChangeLogsResource; 
    
    var cities: gapi.client.dfareporting.CitiesResource; 
    
    var connectionTypes: gapi.client.dfareporting.ConnectionTypesResource; 
    
    var contentCategories: gapi.client.dfareporting.ContentCategoriesResource; 
    
    var countries: gapi.client.dfareporting.CountriesResource; 
    
    var creativeAssets: gapi.client.dfareporting.CreativeAssetsResource; 
    
    var creativeFieldValues: gapi.client.dfareporting.CreativeFieldValuesResource; 
    
    var creativeFields: gapi.client.dfareporting.CreativeFieldsResource; 
    
    var creativeGroups: gapi.client.dfareporting.CreativeGroupsResource; 
    
    var creatives: gapi.client.dfareporting.CreativesResource; 
    
    var dimensionValues: gapi.client.dfareporting.DimensionValuesResource; 
    
    var directorySiteContacts: gapi.client.dfareporting.DirectorySiteContactsResource; 
    
    var directorySites: gapi.client.dfareporting.DirectorySitesResource; 
    
    var eventTags: gapi.client.dfareporting.EventTagsResource; 
    
    var files: gapi.client.dfareporting.FilesResource; 
    
    var floodlightActivities: gapi.client.dfareporting.FloodlightActivitiesResource; 
    
    var floodlightActivityGroups: gapi.client.dfareporting.FloodlightActivityGroupsResource; 
    
    var floodlightConfigurations: gapi.client.dfareporting.FloodlightConfigurationsResource; 
    
    var inventoryItems: gapi.client.dfareporting.InventoryItemsResource; 
    
    var landingPages: gapi.client.dfareporting.LandingPagesResource; 
    
    var metros: gapi.client.dfareporting.MetrosResource; 
    
    var mobileCarriers: gapi.client.dfareporting.MobileCarriersResource; 
    
    var operatingSystemVersions: gapi.client.dfareporting.OperatingSystemVersionsResource; 
    
    var operatingSystems: gapi.client.dfareporting.OperatingSystemsResource; 
    
    var orderDocuments: gapi.client.dfareporting.OrderDocumentsResource; 
    
    var orders: gapi.client.dfareporting.OrdersResource; 
    
    var placementGroups: gapi.client.dfareporting.PlacementGroupsResource; 
    
    var placementStrategies: gapi.client.dfareporting.PlacementStrategiesResource; 
    
    var placements: gapi.client.dfareporting.PlacementsResource; 
    
    var platformTypes: gapi.client.dfareporting.PlatformTypesResource; 
    
    var postalCodes: gapi.client.dfareporting.PostalCodesResource; 
    
    var projects: gapi.client.dfareporting.ProjectsResource; 
    
    var regions: gapi.client.dfareporting.RegionsResource; 
    
    var remarketingListShares: gapi.client.dfareporting.RemarketingListSharesResource; 
    
    var remarketingLists: gapi.client.dfareporting.RemarketingListsResource; 
    
    var reports: gapi.client.dfareporting.ReportsResource; 
    
    var sites: gapi.client.dfareporting.SitesResource; 
    
    var sizes: gapi.client.dfareporting.SizesResource; 
    
    var subaccounts: gapi.client.dfareporting.SubaccountsResource; 
    
    var targetableRemarketingLists: gapi.client.dfareporting.TargetableRemarketingListsResource; 
    
    var userProfiles: gapi.client.dfareporting.UserProfilesResource; 
    
    var userRolePermissionGroups: gapi.client.dfareporting.UserRolePermissionGroupsResource; 
    
    var userRolePermissions: gapi.client.dfareporting.UserRolePermissionsResource; 
    
    var userRoles: gapi.client.dfareporting.UserRolesResource; 
    
}
