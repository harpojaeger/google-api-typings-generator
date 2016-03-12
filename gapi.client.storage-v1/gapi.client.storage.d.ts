// Type definitions for Google Cloud Storage JSON API v1
// Project: https://developers.google.com/storage/docs/json_api/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.storage {
    
    interface Bucket {
        // Access controls on the bucket.
        acl?: BucketAccessControl[],        
        // The bucket's Cross-Origin Resource Sharing (CORS) configuration.
        cors?: {        
            // The value, in seconds, to return in the  Access-Control-Max-Age header used in preflight responses.
            maxAgeSeconds?: number,
            // The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".
            method?: string[],            
            // The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin".
            origin?: string[],            
            // The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.
            responseHeader?: string[],            
        }[],        
        // Default access controls to apply to new objects when no ACL is provided.
        defaultObjectAcl?: ObjectAccessControl[],        
        // HTTP 1.1 Entity tag for the bucket.
        etag?: string,
        // The ID of the bucket.
        id?: string,
        // The kind of item this is. For buckets, this is always storage#bucket.
        kind?: string,
        // The bucket's lifecycle configuration. See lifecycle management for more information.
        lifecycle?: {        
            // A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken.
            rule?: {            
                // The action to take.
                action?: {                
                    // Type of the action. Currently, only Delete is supported.
                    type?: string,
                },                
                // The condition(s) under which the action will be taken.
                condition?: {                
                    // Age of an object (in days). This condition is satisfied when an object reaches the specified age.
                    age?: number,
                    // A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when an object is created before midnight of the specified date in UTC.
                    createdBefore?: string,
                    // Relevant only for versioned objects. If the value is true, this condition matches live objects; if the value is false, it matches archived objects.
                    isLive?: boolean,
                    // Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object.
                    numNewerVersions?: number,
                },                
            }[],            
        },        
        // The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the developer's guide for the authoritative list.
        location?: string,
        // The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
        logging?: {        
            // The destination bucket where the current bucket's logs should be placed.
            logBucket?: string,
            // A prefix for log object names.
            logObjectPrefix?: string,
        },        
        // The metadata generation of this bucket.
        metageneration?: string,
        // The name of the bucket.
        name?: string,
        // The owner of the bucket. This is always the project team's owner group.
        owner?: {        
            // The entity, in the form project-owner-projectId.
            entity?: string,
            // The ID for the entity.
            entityId?: string,
        },        
        // The project number of the project the bucket belongs to.
        projectNumber?: string,
        // The URI of this bucket.
        selfLink?: string,
        // The bucket's storage class. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include STANDARD, NEARLINE and DURABLE_REDUCED_AVAILABILITY. Defaults to STANDARD. For more information, see storage classes.
        storageClass?: string,
        // The creation time of the bucket in RFC 3339 format.
        timeCreated?: string,
        // The modification time of the bucket in RFC 3339 format.
        updated?: string,
        // The bucket's versioning configuration.
        versioning?: {        
            // While set to true, versioning is fully enabled for this bucket.
            enabled?: boolean,
        },        
        // The bucket's website configuration.
        website?: {        
            // Behaves as the bucket's directory index where missing objects are treated as potential directories.
            mainPageSuffix?: string,
            // The custom object to return when a requested resource is not found.
            notFoundPage?: string,
        },        
    }
    
    interface BucketAccessControl {
        // The name of the bucket.
        bucket?: string,
        // The domain associated with the entity, if any.
        domain?: string,
        // The email address associated with the entity, if any.
        email?: string,
        // The entity holding the permission, in one of the following forms: 
        // - user-userId 
        // - user-email 
        // - group-groupId 
        // - group-email 
        // - domain-domain 
        // - project-team-projectId 
        // - allUsers 
        // - allAuthenticatedUsers Examples: 
        // - The user liz@example.com would be user-liz@example.com. 
        // - The group example@googlegroups.com would be group-example@googlegroups.com. 
        // - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
        entity?: string,
        // The ID for the entity, if any.
        entityId?: string,
        // HTTP 1.1 Entity tag for the access-control entry.
        etag?: string,
        // The ID of the access-control entry.
        id?: string,
        // The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl.
        kind?: string,
        // The project team associated with the entity, if any.
        projectTeam?: {        
            // The project number.
            projectNumber?: string,
            // The team. Can be owners, editors, or viewers.
            team?: string,
        },        
        // The access permission for the entity. Can be READER, WRITER, or OWNER.
        role?: string,
        // The link to this access-control entry.
        selfLink?: string,
    }
    
    interface BucketAccessControls {
        // The list of items.
        items?: BucketAccessControl[],        
        // The kind of item this is. For lists of bucket access control entries, this is always storage#bucketAccessControls.
        kind?: string,
    }
    
    interface Buckets {
        // The list of items.
        items?: Bucket[],        
        // The kind of item this is. For lists of buckets, this is always storage#buckets.
        kind?: string,
        // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
    }
    
    interface Channel {
        // The address where notifications are delivered for this channel.
        address?: string,
        // Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
        expiration?: string,
        // A UUID or similar unique string that identifies this channel.
        id?: string,
        // Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string "api#channel".
        kind?: string,
        // Additional parameters controlling delivery channel behavior. Optional.
        params?: any,
        // A Boolean value to indicate whether payload is wanted. Optional.
        payload?: boolean,
        // An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
        resourceId?: string,
        // A version-specific identifier for the watched resource.
        resourceUri?: string,
        // An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
        token?: string,
        // The type of delivery mechanism used for this channel.
        type?: string,
    }
    
    interface ComposeRequest {
        // Properties of the resulting object.
        destination?: Object,
        // The kind of item this is.
        kind?: string,
        // The list of source objects that will be concatenated into a single object.
        sourceObjects?: {        
            // The generation of this object to use as the source.
            generation?: string,
            // The source object's name. The source object's bucket is implicitly the destination bucket.
            name?: string,
            // Conditions that must be met for this operation to execute.
            objectPreconditions?: {            
                // Only perform the composition if the generation of the source object that would be used matches this value. If this value and a generation are both specified, they must be the same value or the call will fail.
                ifGenerationMatch?: string,
            },            
        }[],        
    }
    
    interface Object {
        // Access controls on the object.
        acl?: ObjectAccessControl[],        
        // The name of the bucket containing this object.
        bucket?: string,
        // Cache-Control directive for the object data.
        cacheControl?: string,
        // Number of underlying components that make up this object. Components are accumulated by compose operations.
        componentCount?: number,
        // Content-Disposition of the object data.
        contentDisposition?: string,
        // Content-Encoding of the object data.
        contentEncoding?: string,
        // Content-Language of the object data.
        contentLanguage?: string,
        // Content-Type of the object data.
        contentType?: string,
        // CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see Hashes and ETags: Best Practices.
        crc32c?: string,
        // Metadata of customer-supplied encryption key, if the object is encrypted by such a key.
        customerEncryption?: {        
            // The encryption algorithm.
            encryptionAlgorithm?: string,
            // SHA256 hash value of the encryption key.
            keySha256?: string,
        },        
        // HTTP 1.1 Entity tag for the object.
        etag?: string,
        // The content generation of this object. Used for object versioning.
        generation?: string,
        // The ID of the object.
        id?: string,
        // The kind of item this is. For objects, this is always storage#object.
        kind?: string,
        // MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see Hashes and ETags: Best Practices.
        md5Hash?: string,
        // Media download link.
        mediaLink?: string,
        // User-provided metadata, in key/value pairs.
        metadata?: any,
        // The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object.
        metageneration?: string,
        // The name of this object. Required if not specified by URL parameter.
        name?: string,
        // The owner of the object. This will always be the uploader of the object.
        owner?: {        
            // The entity, in the form user-userId.
            entity?: string,
            // The ID for the entity.
            entityId?: string,
        },        
        // The link to this object.
        selfLink?: string,
        // Content-Length of the data in bytes.
        size?: string,
        // Storage class of the object.
        storageClass?: string,
        // The creation time of the object in RFC 3339 format.
        timeCreated?: string,
        // The deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.
        timeDeleted?: string,
        // The modification time of the object metadata in RFC 3339 format.
        updated?: string,
    }
    
    interface ObjectAccessControl {
        // The name of the bucket.
        bucket?: string,
        // The domain associated with the entity, if any.
        domain?: string,
        // The email address associated with the entity, if any.
        email?: string,
        // The entity holding the permission, in one of the following forms: 
        // - user-userId 
        // - user-email 
        // - group-groupId 
        // - group-email 
        // - domain-domain 
        // - project-team-projectId 
        // - allUsers 
        // - allAuthenticatedUsers Examples: 
        // - The user liz@example.com would be user-liz@example.com. 
        // - The group example@googlegroups.com would be group-example@googlegroups.com. 
        // - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
        entity?: string,
        // The ID for the entity, if any.
        entityId?: string,
        // HTTP 1.1 Entity tag for the access-control entry.
        etag?: string,
        // The content generation of the object.
        generation?: string,
        // The ID of the access-control entry.
        id?: string,
        // The kind of item this is. For object access control entries, this is always storage#objectAccessControl.
        kind?: string,
        // The name of the object.
        object?: string,
        // The project team associated with the entity, if any.
        projectTeam?: {        
            // The project number.
            projectNumber?: string,
            // The team. Can be owners, editors, or viewers.
            team?: string,
        },        
        // The access permission for the entity. Can be READER or OWNER.
        role?: string,
        // The link to this access-control entry.
        selfLink?: string,
    }
    
    interface ObjectAccessControls {
        // The list of items.
        items?: any[],        
        // The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls.
        kind?: string,
    }
    
    interface Objects {
        // The list of items.
        items?: Object[],        
        // The kind of item this is. For lists of objects, this is always storage#objects.
        kind?: string,
        // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
        // The list of prefixes of objects matching-but-not-listed up to and including the requested delimiter.
        prefixes?: string[],        
    }
    
    interface RewriteResponse {
        // true if the copy is finished; otherwise, false if the copy is in progress. This property is always present in the response.
        done?: boolean,
        // The kind of item this is.
        kind?: string,
        // The total size of the object being copied in bytes. This property is always present in the response.
        objectSize?: string,
        // A resource containing the metadata for the copied-to object. This property is present in the response only when copying completes.
        resource?: Object,
        // A token to use in subsequent requests to continue copying data. This token is present in the response only when there is more data to copy.
        rewriteToken?: string,
        // The total bytes written so far, which can be used to provide a waiting user with a progress indicator. This property is always present in the response.
        totalBytesRewritten?: string,
    }
    
    interface BucketAccessControlsResource {
        // Permanently deletes the ACL entry for the specified entity on the specified bucket.
        delete (request: {        
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
        }) : gapi.client.Request<void>;        
        
        // Returns the ACL entry for the specified entity on the specified bucket.
        get (request: {        
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
        }) : gapi.client.Request<BucketAccessControl>;        
        
        // Creates a new ACL entry on the specified bucket.
        insert (request: {        
            // Name of a bucket.
            bucket: string,
        }) : gapi.client.Request<BucketAccessControl>;        
        
        // Retrieves ACL entries on the specified bucket.
        list (request: {        
            // Name of a bucket.
            bucket: string,
        }) : gapi.client.Request<BucketAccessControls>;        
        
        // Updates an ACL entry on the specified bucket. This method supports patch semantics.
        patch (request: {        
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
        }) : gapi.client.Request<BucketAccessControl>;        
        
        // Updates an ACL entry on the specified bucket.
        update (request: {        
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
        }) : gapi.client.Request<BucketAccessControl>;        
        
    }
    
    
    interface BucketsResource {
        // Permanently deletes an empty bucket.
        delete (request: {        
            // Name of a bucket.
            bucket: string,
            // If set, only deletes the bucket if its metageneration matches this value.
            ifMetagenerationMatch?: string,
            // If set, only deletes the bucket if its metageneration does not match this value.
            ifMetagenerationNotMatch?: string,
        }) : gapi.client.Request<void>;        
        
        // Returns metadata for the specified bucket.
        get (request: {        
            // Name of a bucket.
            bucket: string,
            // Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
            ifMetagenerationMatch?: string,
            // Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
            ifMetagenerationNotMatch?: string,
            // Set of properties to return. Defaults to noAcl.
            projection?: string,
        }) : gapi.client.Request<Bucket>;        
        
        // Creates a new bucket.
        insert (request: {        
            // Apply a predefined set of access controls to this bucket.
            predefinedAcl?: string,
            // Apply a predefined set of default object access controls to this bucket.
            predefinedDefaultObjectAcl?: string,
            // A valid API project identifier.
            project: string,
            // Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
            projection?: string,
        }) : gapi.client.Request<Bucket>;        
        
        // Retrieves a list of buckets for a given project.
        list (request: {        
            // Maximum number of buckets to return.
            maxResults?: number,
            // A previously-returned page token representing part of the larger set of results to view.
            pageToken?: string,
            // Filter results to buckets whose names begin with this prefix.
            prefix?: string,
            // A valid API project identifier.
            project: string,
            // Set of properties to return. Defaults to noAcl.
            projection?: string,
        }) : gapi.client.Request<Buckets>;        
        
        // Updates a bucket. This method supports patch semantics.
        patch (request: {        
            // Name of a bucket.
            bucket: string,
            // Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
            ifMetagenerationMatch?: string,
            // Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
            ifMetagenerationNotMatch?: string,
            // Apply a predefined set of access controls to this bucket.
            predefinedAcl?: string,
            // Apply a predefined set of default object access controls to this bucket.
            predefinedDefaultObjectAcl?: string,
            // Set of properties to return. Defaults to full.
            projection?: string,
        }) : gapi.client.Request<Bucket>;        
        
        // Updates a bucket.
        update (request: {        
            // Name of a bucket.
            bucket: string,
            // Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
            ifMetagenerationMatch?: string,
            // Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
            ifMetagenerationNotMatch?: string,
            // Apply a predefined set of access controls to this bucket.
            predefinedAcl?: string,
            // Apply a predefined set of default object access controls to this bucket.
            predefinedDefaultObjectAcl?: string,
            // Set of properties to return. Defaults to full.
            projection?: string,
        }) : gapi.client.Request<Bucket>;        
        
    }
    
    
    interface ChannelsResource {
        // Stop watching resources through this channel
        stop (request: {        
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface DefaultObjectAccessControlsResource {
        // Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
        delete (request: {        
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
        }) : gapi.client.Request<void>;        
        
        // Returns the default object ACL entry for the specified entity on the specified bucket.
        get (request: {        
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
        }) : gapi.client.Request<ObjectAccessControl>;        
        
        // Creates a new default object ACL entry on the specified bucket.
        insert (request: {        
            // Name of a bucket.
            bucket: string,
        }) : gapi.client.Request<ObjectAccessControl>;        
        
        // Retrieves default object ACL entries on the specified bucket.
        list (request: {        
            // Name of a bucket.
            bucket: string,
            // If present, only return default ACL listing if the bucket's current metageneration matches this value.
            ifMetagenerationMatch?: string,
            // If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
            ifMetagenerationNotMatch?: string,
        }) : gapi.client.Request<ObjectAccessControls>;        
        
        // Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
        patch (request: {        
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
        }) : gapi.client.Request<ObjectAccessControl>;        
        
        // Updates a default object ACL entry on the specified bucket.
        update (request: {        
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
        }) : gapi.client.Request<ObjectAccessControl>;        
        
    }
    
    
    interface ObjectAccessControlsResource {
        // Permanently deletes the ACL entry for the specified entity on the specified object.
        delete (request: {        
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
            // If present, selects a specific revision of this object (as opposed to the latest version, the default).
            generation?: string,
            // Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            object: string,
        }) : gapi.client.Request<void>;        
        
        // Returns the ACL entry for the specified entity on the specified object.
        get (request: {        
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
            // If present, selects a specific revision of this object (as opposed to the latest version, the default).
            generation?: string,
            // Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            object: string,
        }) : gapi.client.Request<ObjectAccessControl>;        
        
        // Creates a new ACL entry on the specified object.
        insert (request: {        
            // Name of a bucket.
            bucket: string,
            // If present, selects a specific revision of this object (as opposed to the latest version, the default).
            generation?: string,
            // Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            object: string,
        }) : gapi.client.Request<ObjectAccessControl>;        
        
        // Retrieves ACL entries on the specified object.
        list (request: {        
            // Name of a bucket.
            bucket: string,
            // If present, selects a specific revision of this object (as opposed to the latest version, the default).
            generation?: string,
            // Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            object: string,
        }) : gapi.client.Request<ObjectAccessControls>;        
        
        // Updates an ACL entry on the specified object. This method supports patch semantics.
        patch (request: {        
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
            // If present, selects a specific revision of this object (as opposed to the latest version, the default).
            generation?: string,
            // Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            object: string,
        }) : gapi.client.Request<ObjectAccessControl>;        
        
        // Updates an ACL entry on the specified object.
        update (request: {        
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
            // If present, selects a specific revision of this object (as opposed to the latest version, the default).
            generation?: string,
            // Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            object: string,
        }) : gapi.client.Request<ObjectAccessControl>;        
        
    }
    
    
    interface ObjectsResource {
        // Concatenates a list of existing objects into a new object in the same bucket.
        compose (request: {        
            // Name of the bucket in which to store the new object.
            destinationBucket: string,
            // Name of the new object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            destinationObject: string,
            // Apply a predefined set of access controls to the destination object.
            destinationPredefinedAcl?: string,
            // Makes the operation conditional on whether the object's current generation matches the given value.
            ifGenerationMatch?: string,
            // Makes the operation conditional on whether the object's current metageneration matches the given value.
            ifMetagenerationMatch?: string,
        }) : gapi.client.Request<Object>;        
        
        // Copies a source object to a destination object. Optionally overrides metadata.
        copy (request: {        
            // Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            destinationBucket: string,
            // Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
            destinationObject: string,
            // Apply a predefined set of access controls to the destination object.
            destinationPredefinedAcl?: string,
            // Makes the operation conditional on whether the destination object's current generation matches the given value.
            ifGenerationMatch?: string,
            // Makes the operation conditional on whether the destination object's current generation does not match the given value.
            ifGenerationNotMatch?: string,
            // Makes the operation conditional on whether the destination object's current metageneration matches the given value.
            ifMetagenerationMatch?: string,
            // Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
            ifMetagenerationNotMatch?: string,
            // Makes the operation conditional on whether the source object's generation matches the given value.
            ifSourceGenerationMatch?: string,
            // Makes the operation conditional on whether the source object's generation does not match the given value.
            ifSourceGenerationNotMatch?: string,
            // Makes the operation conditional on whether the source object's current metageneration matches the given value.
            ifSourceMetagenerationMatch?: string,
            // Makes the operation conditional on whether the source object's current metageneration does not match the given value.
            ifSourceMetagenerationNotMatch?: string,
            // Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
            projection?: string,
            // Name of the bucket in which to find the source object.
            sourceBucket: string,
            // If present, selects a specific revision of the source object (as opposed to the latest version, the default).
            sourceGeneration?: string,
            // Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            sourceObject: string,
        }) : gapi.client.Request<Object>;        
        
        // Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
        delete (request: {        
            // Name of the bucket in which the object resides.
            bucket: string,
            // If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
            generation?: string,
            // Makes the operation conditional on whether the object's current generation matches the given value.
            ifGenerationMatch?: string,
            // Makes the operation conditional on whether the object's current generation does not match the given value.
            ifGenerationNotMatch?: string,
            // Makes the operation conditional on whether the object's current metageneration matches the given value.
            ifMetagenerationMatch?: string,
            // Makes the operation conditional on whether the object's current metageneration does not match the given value.
            ifMetagenerationNotMatch?: string,
            // Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            object: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves an object or its metadata.
        get (request: {        
            // Name of the bucket in which the object resides.
            bucket: string,
            // If present, selects a specific revision of this object (as opposed to the latest version, the default).
            generation?: string,
            // Makes the operation conditional on whether the object's generation matches the given value.
            ifGenerationMatch?: string,
            // Makes the operation conditional on whether the object's generation does not match the given value.
            ifGenerationNotMatch?: string,
            // Makes the operation conditional on whether the object's current metageneration matches the given value.
            ifMetagenerationMatch?: string,
            // Makes the operation conditional on whether the object's current metageneration does not match the given value.
            ifMetagenerationNotMatch?: string,
            // Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            object: string,
            // Set of properties to return. Defaults to noAcl.
            projection?: string,
        }) : gapi.client.Request<Object>;        
        
        // Stores a new object and metadata.
        insert (request: {        
            // Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
            bucket: string,
            // If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded.
            contentEncoding?: string,
            // Makes the operation conditional on whether the object's current generation matches the given value.
            ifGenerationMatch?: string,
            // Makes the operation conditional on whether the object's current generation does not match the given value.
            ifGenerationNotMatch?: string,
            // Makes the operation conditional on whether the object's current metageneration matches the given value.
            ifMetagenerationMatch?: string,
            // Makes the operation conditional on whether the object's current metageneration does not match the given value.
            ifMetagenerationNotMatch?: string,
            // Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            name?: string,
            // Apply a predefined set of access controls to this object.
            predefinedAcl?: string,
            // Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
            projection?: string,
        }) : gapi.client.Request<Object>;        
        
        // Retrieves a list of objects matching the criteria.
        list (request: {        
            // Name of the bucket in which to look for objects.
            bucket: string,
            // Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
            delimiter?: string,
            // Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested. The default value of this parameter is 1,000 items.
            maxResults?: number,
            // A previously-returned page token representing part of the larger set of results to view.
            pageToken?: string,
            // Filter results to objects whose names begin with this prefix.
            prefix?: string,
            // Set of properties to return. Defaults to noAcl.
            projection?: string,
            // If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
            versions?: boolean,
        }) : gapi.client.Request<Objects>;        
        
        // Updates an object's metadata. This method supports patch semantics.
        patch (request: {        
            // Name of the bucket in which the object resides.
            bucket: string,
            // If present, selects a specific revision of this object (as opposed to the latest version, the default).
            generation?: string,
            // Makes the operation conditional on whether the object's current generation matches the given value.
            ifGenerationMatch?: string,
            // Makes the operation conditional on whether the object's current generation does not match the given value.
            ifGenerationNotMatch?: string,
            // Makes the operation conditional on whether the object's current metageneration matches the given value.
            ifMetagenerationMatch?: string,
            // Makes the operation conditional on whether the object's current metageneration does not match the given value.
            ifMetagenerationNotMatch?: string,
            // Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            object: string,
            // Apply a predefined set of access controls to this object.
            predefinedAcl?: string,
            // Set of properties to return. Defaults to full.
            projection?: string,
        }) : gapi.client.Request<Object>;        
        
        // Rewrites a source object to a destination object. Optionally overrides metadata.
        rewrite (request: {        
            // Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
            destinationBucket: string,
            // Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            destinationObject: string,
            // Apply a predefined set of access controls to the destination object.
            destinationPredefinedAcl?: string,
            // Makes the operation conditional on whether the destination object's current generation matches the given value.
            ifGenerationMatch?: string,
            // Makes the operation conditional on whether the destination object's current generation does not match the given value.
            ifGenerationNotMatch?: string,
            // Makes the operation conditional on whether the destination object's current metageneration matches the given value.
            ifMetagenerationMatch?: string,
            // Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
            ifMetagenerationNotMatch?: string,
            // Makes the operation conditional on whether the source object's generation matches the given value.
            ifSourceGenerationMatch?: string,
            // Makes the operation conditional on whether the source object's generation does not match the given value.
            ifSourceGenerationNotMatch?: string,
            // Makes the operation conditional on whether the source object's current metageneration matches the given value.
            ifSourceMetagenerationMatch?: string,
            // Makes the operation conditional on whether the source object's current metageneration does not match the given value.
            ifSourceMetagenerationNotMatch?: string,
            // The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.
            maxBytesRewrittenPerCall?: string,
            // Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
            projection?: string,
            // Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.
            rewriteToken?: string,
            // Name of the bucket in which to find the source object.
            sourceBucket: string,
            // If present, selects a specific revision of the source object (as opposed to the latest version, the default).
            sourceGeneration?: string,
            // Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            sourceObject: string,
        }) : gapi.client.Request<RewriteResponse>;        
        
        // Updates an object's metadata.
        update (request: {        
            // Name of the bucket in which the object resides.
            bucket: string,
            // If present, selects a specific revision of this object (as opposed to the latest version, the default).
            generation?: string,
            // Makes the operation conditional on whether the object's current generation matches the given value.
            ifGenerationMatch?: string,
            // Makes the operation conditional on whether the object's current generation does not match the given value.
            ifGenerationNotMatch?: string,
            // Makes the operation conditional on whether the object's current metageneration matches the given value.
            ifMetagenerationMatch?: string,
            // Makes the operation conditional on whether the object's current metageneration does not match the given value.
            ifMetagenerationNotMatch?: string,
            // Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
            object: string,
            // Apply a predefined set of access controls to this object.
            predefinedAcl?: string,
            // Set of properties to return. Defaults to full.
            projection?: string,
        }) : gapi.client.Request<Object>;        
        
        // Watch for changes on all objects in a bucket.
        watchAll (request: {        
            // Name of the bucket in which to look for objects.
            bucket: string,
            // Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
            delimiter?: string,
            // Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested. The default value of this parameter is 1,000 items.
            maxResults?: number,
            // A previously-returned page token representing part of the larger set of results to view.
            pageToken?: string,
            // Filter results to objects whose names begin with this prefix.
            prefix?: string,
            // Set of properties to return. Defaults to noAcl.
            projection?: string,
            // If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
            versions?: boolean,
        }) : gapi.client.Request<Channel>;        
        
    }
    
}

declare module gapi.client.storage {
    var bucketAccessControls: gapi.client.storage.BucketAccessControlsResource; 
    
    var buckets: gapi.client.storage.BucketsResource; 
    
    var channels: gapi.client.storage.ChannelsResource; 
    
    var defaultObjectAccessControls: gapi.client.storage.DefaultObjectAccessControlsResource; 
    
    var objectAccessControls: gapi.client.storage.ObjectAccessControlsResource; 
    
    var objects: gapi.client.storage.ObjectsResource; 
    
}
