// Type definitions for Google Cloud SQL Administration API v1beta4
// Project: https://cloud.google.com/sql/docs/reference/latest
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.sqladmin.v1beta4 {
    
    interface AclEntry {
        // The time when this access control entry expires in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        expirationTime?: string,
        // This is always sql#aclEntry.
        kind?: string,
        // An optional label to identify this entry.
        name?: string,
        // The whitelisted value for the access control list.
        value?: string,
    }
    
    interface BackupConfiguration {
        // Whether binary log is enabled. If backup configuration is disabled, binary log must be disabled as well.
        binaryLogEnabled?: boolean,
        // Whether this configuration is enabled.
        enabled?: boolean,
        // This is always sql#backupConfiguration.
        kind?: string,
        // Start time for the daily backup configuration in UTC timezone in the 24 hour format - HH:MM.
        startTime?: string,
    }
    
    interface BackupRun {
        // The time the backup operation completed in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        endTime?: string,
        // The time the run was enqueued in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        enqueuedTime?: string,
        // Information about why the backup operation failed. This is only present if the run has the FAILED status.
        error?: OperationError,
        // A unique identifier for this backup run. Note that this is unique only within the scope of a particular Cloud SQL instance.
        id?: string,
        // Name of the database instance.
        instance?: string,
        // This is always sql#backupRun.
        kind?: string,
        // The URI of this resource.
        selfLink?: string,
        // The time the backup operation actually started in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        startTime?: string,
        // The status of this run.
        status?: string,
        // The start time of the backup window during which this the backup was attempted in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        windowStartTime?: string,
    }
    
    interface BackupRunsListResponse {
        // A list of backup runs in reverse chronological order of the enqueued time.
        items?: BackupRun[],        
        // This is always sql#backupRunsList.
        kind?: string,
        // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
    }
    
    interface BinLogCoordinates {
        // Name of the binary log file for a Cloud SQL instance.
        binLogFileName?: string,
        // Position (offset) within the binary log file.
        binLogPosition?: string,
        // This is always sql#binLogCoordinates.
        kind?: string,
    }
    
    interface CloneContext {
        // Binary log coordinates, if specified, indentify the the position up to which the source instance should be cloned. If not specified, the source instance is cloned up to the most recent binary log coordintes.
        binLogCoordinates?: BinLogCoordinates,
        // Name of the Cloud SQL instance to be created as a clone.
        destinationInstanceName?: string,
        // This is always sql#cloneContext.
        kind?: string,
    }
    
    interface Database {
        // The MySQL charset value.
        charset?: string,
        // The MySQL collation value.
        collation?: string,
        // HTTP 1.1 Entity tag for the resource.
        etag?: string,
        // The name of the Cloud SQL instance. This does not include the project ID.
        instance?: string,
        // This is always sql#database.
        kind?: string,
        // The name of the database in the Cloud SQL instance. This does not include the project ID or instance name.
        name?: string,
        // The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable.
        project?: string,
        // The URI of this resource.
        selfLink?: string,
    }
    
    interface DatabaseFlags {
        // The name of the flag. These flags are passed at instance startup, so include both MySQL server options and MySQL system variables. Flags should be specified with underscores, not hyphens. For more information, see Configuring MySQL Flags in the Google Cloud SQL documentation, as well as the official MySQL documentation for server options and system variables.
        name?: string,
        // The value of the flag. Booleans should be set to on for true and off for false. This field must be omitted if the flag doesn't take a value.
        value?: string,
    }
    
    interface DatabaseInstance {
        // FIRST_GEN: Basic Cloud SQL instance that runs in a Google-managed container.
        // SECOND_GEN: A newer Cloud SQL backend that runs in a Compute Engine VM.
        // EXTERNAL: A MySQL server that is not managed by Google.
        backendType?: string,
        // The current disk usage of the instance in bytes. This property has been deprecated. Users should use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ for details.
        currentDiskSize?: string,
        // The database engine type and version. Can be MYSQL_5_5 or MYSQL_5_6. Defaults to MYSQL_5_6. The databaseVersion can not be changed after instance creation.
        databaseVersion?: string,
        // HTTP 1.1 Entity tag for the resource.
        etag?: string,
        // The name and status of the failover replica. This property is applicable only to Second Generation instances.
        failoverReplica?: {        
            // The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The master can only failover to the falover replica when the status is true.
            available?: boolean,
            // The name of the failover replica.
            name?: string,
        },        
        // The instance type. This can be one of the following.
        // CLOUD_SQL_INSTANCE: A Cloud SQL instance that is not replicating from a master.
        // ON_PREMISES_INSTANCE: An instance running on the customer's premises.
        // READ_REPLICA_INSTANCE: A Cloud SQL instance configured as a read-replica.
        instanceType?: string,
        // The assigned IP addresses for the instance.
        ipAddresses?: IpMapping[],        
        // The IPv6 address assigned to the instance. This property is applicable only to First Generation instances.
        ipv6Address?: string,
        // This is always sql#instance.
        kind?: string,
        // The name of the instance which will act as master in the replication setup.
        masterInstanceName?: string,
        // The maximum disk size of the instance in bytes.
        maxDiskSize?: string,
        // Name of the Cloud SQL instance. This does not include the project ID.
        name?: string,
        // Configuration specific to on-premises instances.
        onPremisesConfiguration?: OnPremisesConfiguration,
        // The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.
        project?: string,
        // The geographical region. Can be us-central (FIRST_GEN instances only), us-central1 (SECOND_GEN instances only), asia-east1 or europe-west1. Defaults to us-central or us-central1 depending on the instance type (First Generation or Second Generation). The region can not be changed after instance creation.
        region?: string,
        // Configuration specific to read-replicas replicating from on-premises masters.
        replicaConfiguration?: ReplicaConfiguration,
        // The replicas of the instance.
        replicaNames?: string[],        
        // The URI of this resource.
        selfLink?: string,
        // SSL configuration.
        serverCaCert?: SslCert,
        // The service account email address assigned to the instance. This property is applicable only to Second Generation instances.
        serviceAccountEmailAddress?: string,
        // The user settings.
        settings?: Settings,
        // The current serving state of the Cloud SQL instance. This can be one of the following.
        // RUNNABLE: The instance is running, or is ready to run when accessed.
        // SUSPENDED: The instance is not available, for example due to problems with billing.
        // PENDING_CREATE: The instance is being created.
        // MAINTENANCE: The instance is down for maintenance.
        // FAILED: The instance creation failed.
        // UNKNOWN_STATE: The state of the instance is unknown.
        state?: string,
        // If the instance state is SUSPENDED, the reason for the suspension.
        suspensionReason?: string[],        
    }
    
    interface DatabasesListResponse {
        // List of database resources in the instance.
        items?: Database[],        
        // This is always sql#databasesList.
        kind?: string,
    }
    
    interface ExportContext {
        // Options for exporting data as CSV.
        csvExportOptions?: {        
            // The select query used to extract the data.
            selectQuery?: string,
        },        
        // Databases (for example, guestbook) from which the export is made. If fileType is SQL and no database is specified, all databases are exported. If fileType is CSV, you can optionally specify at most one database to export. If csvExportOptions.selectQuery also specifies the database, this field will be ignored.
        databases?: string[],        
        // The file type for the specified uri.
        // SQL: The file contains SQL statements.
        // CSV: The file contains CSV data.
        fileType?: string,
        // This is always sql#exportContext.
        kind?: string,
        // Options for exporting data as SQL statements.
        sqlExportOptions?: {        
            // Export only schemas.
            schemaOnly?: boolean,
            // Tables to export, or that were exported, from the specified database. If you specify tables, specify one and only one database.
            tables?: string[],            
        },        
        // The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the operation fails. If fileType is SQL and the filename ends with .gz, the contents are compressed.
        uri?: string,
    }
    
    interface FailoverContext {
        // This is always sql#failoverContext.
        kind?: string,
        // The current settings version of this instance. Request will be rejected if this version doesn't match the current settings version.
        settingsVersion?: string,
    }
    
    interface Flag {
        // For STRING flags, a list of strings that the value can be set to.
        allowedStringValues?: string[],        
        // The database version this flag applies to. Can be MYSQL_5_5, MYSQL_5_6, or both.
        appliesTo?: string[],        
        // This is always sql#flag.
        kind?: string,
        // For INTEGER flags, the maximum allowed value.
        maxValue?: string,
        // For INTEGER flags, the minimum allowed value.
        minValue?: string,
        // This is the name of the flag. Flag names always use underscores, not hyphens, e.g. max_allowed_packet
        name?: string,
        // Indicates whether changing this flag will trigger a database restart. Only applicable to Second Generation instances.
        requiresRestart?: boolean,
        // The type of the flag. Flags are typed to being BOOLEAN, STRING, INTEGER or NONE. NONE is used for flags which do not take a value, such as skip_grant_tables.
        type?: string,
    }
    
    interface FlagsListResponse {
        // List of flags.
        items?: Flag[],        
        // This is always sql#flagsList.
        kind?: string,
    }
    
    interface ImportContext {
        // Options for importing data as CSV.
        csvImportOptions?: {        
            // The columns to which CSV data is imported. If not specified, all columns of the database table are loaded with CSV data.
            columns?: string[],            
            // The table to which CSV data is imported.
            table?: string,
        },        
        // The database (for example, guestbook) to which the import is made. If fileType is SQL and no database is specified, it is assumed that the database is specified in the file to be imported. If fileType is CSV, it must be specified.
        database?: string,
        // The file type for the specified uri.
        // SQL: The file contains SQL statements.
        // CSV: The file contains CSV data.
        fileType?: string,
        // This is always sql#importContext.
        kind?: string,
        // A path to the file in Google Cloud Storage from which the import is made. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are supported when fileType is SQL.
        uri?: string,
    }
    
    interface InstancesCloneRequest {
        // Contains details about the clone operation.
        cloneContext?: CloneContext,
    }
    
    interface InstancesExportRequest {
        // Contains details about the export operation.
        exportContext?: ExportContext,
    }
    
    interface InstancesFailoverRequest {
        // Failover Context.
        failoverContext?: FailoverContext,
    }
    
    interface InstancesImportRequest {
        // Contains details about the import operation.
        importContext?: ImportContext,
    }
    
    interface InstancesListResponse {
        // List of database instance resources.
        items?: DatabaseInstance[],        
        // This is always sql#instancesList.
        kind?: string,
        // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
    }
    
    interface InstancesRestoreBackupRequest {
        // Parameters required to perform the restore backup operation.
        restoreBackupContext?: RestoreBackupContext,
    }
    
    interface IpConfiguration {
        // The list of external networks that are allowed to connect to the instance using the IP. In CIDR notation, also known as 'slash' notation (e.g. 192.168.100.0/24).
        authorizedNetworks?: AclEntry[],        
        // Whether the instance should be assigned an IP address or not.
        ipv4Enabled?: boolean,
        // Whether the mysqld should default to 'REQUIRE X509' for users connecting over IP.
        requireSsl?: boolean,
    }
    
    interface IpMapping {
        // The IP address assigned.
        ipAddress?: string,
        // The due time for this IP to be retired in RFC 3339 format, for example 2012-11-15T16:19:00.094Z. This field is only available when the IP is scheduled to be retired.
        timeToRetire?: string,
    }
    
    interface LocationPreference {
        // The AppEngine application to follow, it must be in the same region as the Cloud SQL instance.
        followGaeApplication?: string,
        // This is always sql#locationPreference.
        kind?: string,
        // The preferred Compute Engine zone (e.g. us-centra1-a, us-central1-b, etc.).
        zone?: string,
    }
    
    interface MaintenanceWindow {
        // day of week (1-7), starting on Monday.
        day?: number,
        // hour of day - 0 to 23.
        hour?: number,
        // This is always sql#maintenanceWindow.
        kind?: string,
        // 
        updateTrack?: string,
    }
    
    interface MySqlReplicaConfiguration {
        // PEM representation of the trusted CA's x509 certificate.
        caCertificate?: string,
        // PEM representation of the slave's x509 certificate.
        clientCertificate?: string,
        // PEM representation of the slave's private key. The corresponsing public key is encoded in the client's certificate.
        clientKey?: string,
        // Seconds to wait between connect retries. MySQL's default is 60 seconds.
        connectRetryInterval?: number,
        // Path to a SQL dump file in Google Cloud Storage from which the slave instance is to be created. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported. Dumps should have the binlog co-ordinates from which replication should begin. This can be accomplished by setting --master-data to 1 when using mysqldump.
        dumpFilePath?: string,
        // This is always sql#mysqlReplicaConfiguration.
        kind?: string,
        // Interval in milliseconds between replication heartbeats.
        masterHeartbeatPeriod?: string,
        // The password for the replication connection.
        password?: string,
        // A list of permissible ciphers to use for SSL encryption.
        sslCipher?: string,
        // The username for the replication connection.
        username?: string,
        // Whether or not to check the master's Common Name value in the certificate that it sends during the SSL handshake.
        verifyServerCertificate?: boolean,
    }
    
    interface OnPremisesConfiguration {
        // The host and port of the on-premises instance in host:port format
        hostPort?: string,
        // This is always sql#onPremisesConfiguration.
        kind?: string,
    }
    
    interface Operation {
        // The time this operation finished in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        endTime?: string,
        // If errors occurred during processing of this operation, this field will be populated.
        error?: OperationErrors,
        // The context for export operation, if applicable.
        exportContext?: ExportContext,
        // The context for import operation, if applicable.
        importContext?: ImportContext,
        // The time this operation was enqueued in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        insertTime?: string,
        // This is always sql#operation.
        kind?: string,
        // An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
        name?: string,
        // The type of the operation. Valid values are CREATE, DELETE, UPDATE, RESTART, IMPORT, EXPORT, BACKUP_VOLUME, RESTORE_VOLUME, CREATE_USER, DELETE_USER, CREATE_DATABASE, DELETE_DATABASE .
        operationType?: string,
        // The URI of this resource.
        selfLink?: string,
        // The time this operation actually started in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        startTime?: string,
        // The status of an operation. Valid values are PENDING, RUNNING, DONE, UNKNOWN.
        status?: string,
        // Name of the database instance related to this operation.
        targetId?: string,
        // The URI of the instance related to the operation.
        targetLink?: string,
        // The project ID of the target instance related to this operation.
        targetProject?: string,
        // The email address of the user who initiated this operation.
        user?: string,
    }
    
    interface OperationError {
        // Identifies the specific error that occurred.
        code?: string,
        // This is always sql#operationError.
        kind?: string,
        // Additional information about the error encountered.
        message?: string,
    }
    
    interface OperationErrors {
        // The list of errors encountered while processing this operation.
        errors?: OperationError[],        
        // This is always sql#operationErrors.
        kind?: string,
    }
    
    interface OperationsListResponse {
        // List of operation resources.
        items?: Operation[],        
        // This is always sql#operationsList.
        kind?: string,
        // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
    }
    
    interface ReplicaConfiguration {
        // Specifies if the replica is the failover target. If the field is set to true the replica will be designated as a failover replica. In case the master instance fails, the replica instance will be promoted as the new master instance.
        // Only one replica can be specified as failover target, and the replica has to be in different zone with the master instance.
        failoverTarget?: boolean,
        // This is always sql#replicaConfiguration.
        kind?: string,
        // MySQL specific configuration when replicating from a MySQL on-premises master. Replication configuration information such as the username, password, certificates, and keys are not stored in the instance metadata. The configuration information is used only to set up the replication connection and is stored by MySQL in a file named master.info in the data directory.
        mysqlReplicaConfiguration?: MySqlReplicaConfiguration,
    }
    
    interface RestoreBackupContext {
        // The ID of the backup run to restore from.
        backupRunId?: string,
        // The ID of the instance that the backup was taken from.
        instanceId?: string,
        // This is always sql#restoreBackupContext.
        kind?: string,
    }
    
    interface Settings {
        // The activation policy for this instance. This specifies when the instance should be activated and is applicable only when the instance state is RUNNABLE. This can be one of the following.
        // ALWAYS: The instance should always be active.
        // NEVER: The instance should never be activated.
        // ON_DEMAND: The instance is activated upon receiving requests; only applicable to First Generation instances.
        activationPolicy?: string,
        // The App Engine app IDs that can access this instance. This property is only applicable to First Generation instances.
        authorizedGaeApplications?: string[],        
        // The daily backup configuration for the instance.
        backupConfiguration?: BackupConfiguration,
        // Configuration specific to read replica instances. Indicates whether database flags for crash-safe replication are enabled. This property is only applicable to First Generation instances.
        crashSafeReplicationEnabled?: boolean,
        // The size of data disk, in GB. The data disk size minimum is 10GB. This property is only applicable to Second Generation instances.
        dataDiskSizeGb?: string,
        // The type of data disk. Only supported for Second Generation instances. The default type is PD_SSD. This property is only applicable to Second Generation instances.
        dataDiskType?: string,
        // The database flags passed to the instance at startup.
        databaseFlags?: DatabaseFlags[],        
        // Configuration specific to read replica instances. Indicates whether replication is enabled or not.
        databaseReplicationEnabled?: boolean,
        // The settings for IP Management. This allows to enable or disable the instance IP and manage which external networks can connect to the instance. The IPv4 address cannot be disabled for Second Generation instances.
        ipConfiguration?: IpConfiguration,
        // This is always sql#settings.
        kind?: string,
        // The location preference settings. This allows the instance to be located as near as possible to either an App Engine app or GCE zone for better performance. App Engine co-location is only applicable to First Generation instances.
        locationPreference?: LocationPreference,
        // The maintenance window for this instance. This specifies when the instance may be restarted for maintenance purposes. This property is only applicable to Second Generation instances.
        maintenanceWindow?: MaintenanceWindow,
        // The pricing plan for this instance. This can be either PER_USE or PACKAGE. Only PER_USE is supported for Second Generation instances.
        pricingPlan?: string,
        // The type of replication this instance uses. This can be either ASYNCHRONOUS or SYNCHRONOUS. This property is only applicable to First Generation instances.
        replicationType?: string,
        // The version of instance settings. This is a required field for update method to make sure concurrent updates are handled properly. During update, use the most recent settingsVersion value for this instance and do not try to update this value.
        settingsVersion?: string,
        // The tier of service for this instance, for example D1, D2. For more information, see pricing.
        tier?: string,
    }
    
    interface SslCert {
        // PEM representation.
        cert?: string,
        // Serial number, as extracted from the certificate.
        certSerialNumber?: string,
        // User supplied name. Constrained to [a-zA-Z.-_ ]+.
        commonName?: string,
        // The time when the certificate was created in RFC 3339 format, for example 2012-11-15T16:19:00.094Z
        createTime?: string,
        // The time when the certificate expires in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        expirationTime?: string,
        // Name of the database instance.
        instance?: string,
        // This is always sql#sslCert.
        kind?: string,
        // The URI of this resource.
        selfLink?: string,
        // Sha1 Fingerprint.
        sha1Fingerprint?: string,
    }
    
    interface SslCertDetail {
        // The public information about the cert.
        certInfo?: SslCert,
        // The private key for the client cert, in pem format. Keep private in order to protect your security.
        certPrivateKey?: string,
    }
    
    interface SslCertsCreateEphemeralRequest {
        // PEM encoded public key to include in the signed certificate.
        public_key?: string,
    }
    
    interface SslCertsInsertRequest {
        // User supplied name. Must be a distinct name from the other certificates for this instance. New certificates will not be usable until the instance is restarted.
        commonName?: string,
    }
    
    interface SslCertsInsertResponse {
        // The new client certificate and private key. The new certificate will not work until the instance is restarted.
        clientCert?: SslCertDetail,
        // This is always sql#sslCertsInsert.
        kind?: string,
        // The server Certificate Authority's certificate. If this is missing you can force a new one to be generated by calling resetSslConfig method on instances resource.
        serverCaCert?: SslCert,
    }
    
    interface SslCertsListResponse {
        // List of client certificates for the instance.
        items?: SslCert[],        
        // This is always sql#sslCertsList.
        kind?: string,
    }
    
    interface Tier {
        // The maximum disk size of this tier in bytes.
        DiskQuota?: string,
        // The maximum RAM usage of this tier in bytes.
        RAM?: string,
        // This is always sql#tier.
        kind?: string,
        // The applicable regions for this tier. Can be us-east1, europe-west1 or asia-east1.
        region?: string[],        
        // An identifier for the service tier, for example D1, D2 etc. For related information, see Pricing.
        tier?: string,
    }
    
    interface TiersListResponse {
        // List of tiers.
        items?: Tier[],        
        // This is always sql#tiersList.
        kind?: string,
    }
    
    interface User {
        // HTTP 1.1 Entity tag for the resource.
        etag?: string,
        // The host name from which the user can connect. For insert operations, host defaults to an empty string. For update operations, host is specified as part of the request URL. The host name cannot be updated after insertion.
        host?: string,
        // The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for update since it is already specified on the URL.
        instance?: string,
        // This is always sql#user.
        kind?: string,
        // The name of the user in the Cloud SQL instance. Can be omitted for update since it is already specified on the URL.
        name?: string,
        // The password for the user.
        password?: string,
        // The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for update since it is already specified on the URL.
        project?: string,
    }
    
    interface UsersListResponse {
        // List of user resources in the instance.
        items?: User[],        
        // This is always sql#usersList.
        kind?: string,
        // An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
        nextPageToken?: string,
    }
    
    interface BackupRunsResource {
        // Deletes the backup taken by a backup run.
        delete (request: {        
            // The ID of the Backup Run to delete. To find a Backup Run ID, use the list method.
            id: string,
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a resource containing information about a backup run.
        get (request: {        
            // The ID of this Backup Run.
            id: string,
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<BackupRun>;        
        
        // Lists all backup runs associated with a given instance and configuration in the reverse chronological order of the enqueued time.
        list (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Maximum number of backup runs per response.
            maxResults?: number,
            // A previously-returned page token representing part of the larger set of results to view.
            pageToken?: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<BackupRunsListResponse>;        
        
    }
    
    
    interface DatabasesResource {
        // Deletes a database from a Cloud SQL instance.
        delete (request: {        
            // Name of the database to be deleted in the instance.
            database: string,
            // Database instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a resource containing information about a database inside a Cloud SQL instance.
        get (request: {        
            // Name of the database in the instance.
            database: string,
            // Database instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<Database>;        
        
        // Inserts a resource containing information about a database inside a Cloud SQL instance.
        insert (request: {        
            // Database instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists databases in the specified Cloud SQL instance.
        list (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project for which to list Cloud SQL instances.
            project: string,
        }) : gapi.client.Request<DatabasesListResponse>;        
        
        // Updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
        patch (request: {        
            // Name of the database to be updated in the instance.
            database: string,
            // Database instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates a resource containing information about a database inside a Cloud SQL instance.
        update (request: {        
            // Name of the database to be updated in the instance.
            database: string,
            // Database instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface FlagsResource {
        // List all available database flags for Google Cloud SQL instances.
        list (request: {        
        }) : gapi.client.Request<FlagsListResponse>;        
        
    }
    
    
    interface InstancesResource {
        // Creates a Cloud SQL instance as a clone of the source instance. The API is not ready for Second Generation instances yet.
        clone (request: {        
            // The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID.
            instance: string,
            // Project ID of the source as well as the clone Cloud SQL instance.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes a Cloud SQL instance.
        delete (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance to be deleted.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Exports data from a Cloud SQL instance to a Google Cloud Storage bucket as a MySQL dump file.
        export (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance to be exported.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Failover the instance to its failover replica instance.
        failover (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // ID of the project that contains the read replica.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a resource containing information about a Cloud SQL instance.
        get (request: {        
            // Database instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<DatabaseInstance>;        
        
        // Imports data into a Cloud SQL instance from a MySQL dump file in Google Cloud Storage.
        import (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Creates a new Cloud SQL instance.
        insert (request: {        
            // Project ID of the project to which the newly created Cloud SQL instances should belong.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists instances under a given project in the alphabetical order of the instance name.
        list (request: {        
            // The maximum number of results to return per response.
            maxResults?: number,
            // A previously-returned page token representing part of the larger set of results to view.
            pageToken?: string,
            // Project ID of the project for which to list Cloud SQL instances.
            project: string,
        }) : gapi.client.Request<InstancesListResponse>;        
        
        // Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.. This method supports patch semantics.
        patch (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Promotes the read replica instance to be a stand-alone Cloud SQL instance.
        promoteReplica (request: {        
            // Cloud SQL read replica instance name.
            instance: string,
            // ID of the project that contains the read replica.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes all client certificates and generates a new server SSL certificate for the instance. The changes will not take effect until the instance is restarted. Existing instances without a server certificate will need to call this once to set a server certificate.
        resetSslConfig (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Restarts a Cloud SQL instance.
        restart (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance to be restarted.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Restores a backup of a Cloud SQL instance.
        restoreBackup (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Starts the replication in the read replica instance.
        startReplica (request: {        
            // Cloud SQL read replica instance name.
            instance: string,
            // ID of the project that contains the read replica.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Stops the replication in the read replica instance.
        stopReplica (request: {        
            // Cloud SQL read replica instance name.
            instance: string,
            // ID of the project that contains the read replica.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.
        update (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface OperationsResource {
        // Retrieves an instance operation that has been performed on an instance.
        get (request: {        
            // Instance operation ID.
            operation: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.
        list (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Maximum number of operations per response.
            maxResults?: number,
            // A previously-returned page token representing part of the larger set of results to view.
            pageToken?: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<OperationsListResponse>;        
        
    }
    
    
    interface SslCertsResource {
        // Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
        createEphemeral (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the Cloud SQL project.
            project: string,
        }) : gapi.client.Request<SslCert>;        
        
        // Deletes the SSL certificate. The change will not take effect until the instance is restarted.
        delete (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance to be deleted.
            project: string,
            // Sha1 FingerPrint.
            sha1Fingerprint: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
        get (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
            // Sha1 FingerPrint.
            sha1Fingerprint: string,
        }) : gapi.client.Request<SslCert>;        
        
        // Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
        insert (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project to which the newly created Cloud SQL instances should belong.
            project: string,
        }) : gapi.client.Request<SslCertsInsertResponse>;        
        
        // Lists all of the current SSL certificates for the instance.
        list (request: {        
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project for which to list Cloud SQL instances.
            project: string,
        }) : gapi.client.Request<SslCertsListResponse>;        
        
    }
    
    
    interface TiersResource {
        // Lists all available service tiers for Google Cloud SQL, for example D1, D2. For related information, see Pricing.
        list (request: {        
            // Project ID of the project for which to list tiers.
            project: string,
        }) : gapi.client.Request<TiersListResponse>;        
        
    }
    
    
    interface UsersResource {
        // Deletes a user from a Cloud SQL instance.
        delete (request: {        
            // Host of the user in the instance.
            host: string,
            // Database instance ID. This does not include the project ID.
            instance: string,
            // Name of the user in the instance.
            name: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Creates a new user in a Cloud SQL instance.
        insert (request: {        
            // Database instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists users in the specified Cloud SQL instance.
        list (request: {        
            // Database instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<UsersListResponse>;        
        
        // Updates an existing user in a Cloud SQL instance.
        update (request: {        
            // Host of the user in the instance.
            host: string,
            // Database instance ID. This does not include the project ID.
            instance: string,
            // Name of the user in the instance.
            name: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
}

declare module gapi.client.sqladmin {
    var backupRuns: gapi.client.sqladmin.v1beta4.BackupRunsResource; 
    
    var databases: gapi.client.sqladmin.v1beta4.DatabasesResource; 
    
    var flags: gapi.client.sqladmin.v1beta4.FlagsResource; 
    
    var instances: gapi.client.sqladmin.v1beta4.InstancesResource; 
    
    var operations: gapi.client.sqladmin.v1beta4.OperationsResource; 
    
    var sslCerts: gapi.client.sqladmin.v1beta4.SslCertsResource; 
    
    var tiers: gapi.client.sqladmin.v1beta4.TiersResource; 
    
    var users: gapi.client.sqladmin.v1beta4.UsersResource; 
    
}