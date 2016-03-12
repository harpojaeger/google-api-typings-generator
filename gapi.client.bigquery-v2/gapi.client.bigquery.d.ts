// Type definitions for Google BigQuery API v2
// Project: https://cloud.google.com/bigquery/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.bigquery.v2 {
    
    interface BigtableColumn {
        // [Optional] The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. 'encoding' can also be set at the column family level. However, the setting at this level takes precedence if 'encoding' is set at both levels.
        encoding?: string,
        // [Optional] If the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as the column field name and is used as field name in queries.
        fieldName?: string,
        // [Optional] If this is set, only the latest version of value in this column are exposed. 'onlyReadLatest' can also be set at the column family level. However, the setting at this level takes precedence if 'onlyReadLatest' is set at both levels.
        onlyReadLatest?: boolean,
        // [Required] Qualifier of the column. Columns in the parent column family that has this exact qualifier are exposed as . field. If the qualifier is valid UTF-8 string, it can be specified in the qualifier_string field. Otherwise, a base-64 encoded value must be set to qualifier_encoded. The column field name is the same as the column qualifier. However, if the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as field_name.
        qualifierEncoded?: string,
        // 
        qualifierString?: string,
        // [Optional] The type to convert the value in cells of this column. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive) - BYTES STRING INTEGER FLOAT BOOLEAN Defaut type is BYTES. 'type' can also be set at the column family level. However, the setting at this level takes precedence if 'type' is set at both levels.
        type?: string,
    }
    
    interface BigtableColumnFamily {
        // [Optional] Lists of columns that should be exposed as individual fields as opposed to a list of (column name, value) pairs. All columns whose qualifier matches a qualifier in this list can be accessed as .. Other columns can be accessed as a list through .Column field.
        columns?: BigtableColumn[],        
        // [Optional] The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. This can be overridden for a specific column by listing that column in 'columns' and specifying an encoding for it.
        encoding?: string,
        // Identifier of the column family.
        familyId?: string,
        // [Optional] If this is set only the latest version of value are exposed for all columns in this column family. This can be overridden for a specific column by listing that column in 'columns' and specifying a different setting for that column.
        onlyReadLatest?: boolean,
        // [Optional] The type to convert the value in cells of this column family. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive) - BYTES STRING INTEGER FLOAT BOOLEAN Defaut type is BYTES. This can be overridden for a specific column by listing that column in 'columns' and specifying a type for it.
        type?: string,
    }
    
    interface BigtableOptions {
        // [Optional] List of column families to expose in the table schema along with their types. This list restricts the column families that can be referenced in queries and specifies their value types. You can use this list to do type conversions - see the 'type' field for more details. If you leave this list empty, all column families are present in the table schema and their values are read as BYTES. During a query only the column families referenced in that query are read from Bigtable.
        columnFamilies?: BigtableColumnFamily[],        
        // [Optional] If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema. Otherwise, they are read with BYTES type values. The default value is false.
        ignoreUnspecifiedColumnFamilies?: boolean,
    }
    
    interface CsvOptions {
        // [Optional] Indicates if BigQuery should accept rows that are missing trailing optional columns. If true, BigQuery treats missing trailing columns as null values. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.
        allowJaggedRows?: boolean,
        // [Optional] Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
        allowQuotedNewlines?: boolean,
        // [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties.
        encoding?: string,
        // [Optional] The separator for fields in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator. The default value is a comma (',').
        fieldDelimiter?: string,
        // [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
        quote?: string,
        // [Optional] The number of rows at the top of a CSV file that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped.
        skipLeadingRows?: number,
    }
    
    interface Dataset {
        // [Optional] An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER;
        access?: {        
            // [Pick one] A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. Example: "example.com".
            domain?: string,
            // [Pick one] An email address of a Google Group to grant access to.
            groupByEmail?: string,
            // [Required] Describes the rights granted to the user specified by the other member of the access object. The following string values are supported: READER, WRITER, OWNER.
            role?: string,
            // [Pick one] A special group to grant access to. Possible values include: projectOwners: Owners of the enclosing project. projectReaders: Readers of the enclosing project. projectWriters: Writers of the enclosing project. allAuthenticatedUsers: All authenticated BigQuery users.
            specialGroup?: string,
            // [Pick one] An email address of a user to grant access to. For example: fred@example.com.
            userByEmail?: string,
            // [Pick one] A view from a different dataset to grant access to. Queries executed against that view will have read access to tables in this dataset. The role field is not required when this field is set. If that view is updated by any user, access to the view needs to be granted again via an update operation.
            view?: TableReference,
        }[],        
        // [Output-only] The time when this dataset was created, in milliseconds since the epoch.
        creationTime?: string,
        // [Required] A reference that identifies the dataset.
        datasetReference?: DatasetReference,
        // [Experimental] The default lifetime of all tables in the dataset, in milliseconds. The minimum value is 3600000 milliseconds (one hour). Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property.
        defaultTableExpirationMs?: string,
        // [Optional] A user-friendly description of the dataset.
        description?: string,
        // [Output-only] A hash of the resource.
        etag?: string,
        // [Optional] A descriptive name for the dataset.
        friendlyName?: string,
        // [Output-only] The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead specify the datasetId field.
        id?: string,
        // [Output-only] The resource type.
        kind?: string,
        // [Output-only] The date when this dataset or any of its tables was last modified, in milliseconds since the epoch.
        lastModifiedTime?: string,
        // [Experimental] The geographic location where the dataset should reside. Possible values include EU and US. The default value is US.
        location?: string,
        // [Output-only] A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource.
        selfLink?: string,
    }
    
    interface DatasetList {
        // An array of the dataset resources in the project. Each resource contains basic information. For full information about a particular dataset resource, use the Datasets: get method. This property is omitted when there are no datasets in the project.
        datasets?: {        
            // The dataset reference. Use this property to access specific parts of the dataset's ID, such as project ID or dataset ID.
            datasetReference?: DatasetReference,
            // A descriptive name for the dataset, if one exists.
            friendlyName?: string,
            // The fully-qualified, unique, opaque ID of the dataset.
            id?: string,
            // The resource type. This property always returns the value "bigquery#dataset".
            kind?: string,
        }[],        
        // A hash value of the results page. You can use this property to determine if the page has changed since the last request.
        etag?: string,
        // The list type. This property always returns the value "bigquery#datasetList".
        kind?: string,
        // A token that can be used to request the next results page. This property is omitted on the final results page.
        nextPageToken?: string,
    }
    
    interface DatasetReference {
        // [Required] A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
        datasetId?: string,
        // [Optional] The ID of the project containing this dataset.
        projectId?: string,
    }
    
    interface ErrorProto {
        // Debugging information. This property is internal to Google and should not be used.
        debugInfo?: string,
        // Specifies where the error occurred, if present.
        location?: string,
        // A human-readable description of the error.
        message?: string,
        // A short error code that summarizes the error.
        reason?: string,
    }
    
    interface ExplainQueryStage {
        // Relative amount of time the average shard spent on CPU-bound tasks.
        computeRatioAvg?: number,
        // Relative amount of time the slowest shard spent on CPU-bound tasks.
        computeRatioMax?: number,
        // Unique ID for stage within plan.
        id?: string,
        // Human-readable name for stage.
        name?: string,
        // Relative amount of time the average shard spent reading input.
        readRatioAvg?: number,
        // Relative amount of time the slowest shard spent reading input.
        readRatioMax?: number,
        // Number of records read into the stage.
        recordsRead?: string,
        // Number of records written by the stage.
        recordsWritten?: string,
        // List of operations within the stage in dependency order (approximately chronological).
        steps?: ExplainQueryStep[],        
        // Relative amount of time the average shard spent waiting to be scheduled.
        waitRatioAvg?: number,
        // Relative amount of time the slowest shard spent waiting to be scheduled.
        waitRatioMax?: number,
        // Relative amount of time the average shard spent on writing output.
        writeRatioAvg?: number,
        // Relative amount of time the slowest shard spent on writing output.
        writeRatioMax?: number,
    }
    
    interface ExplainQueryStep {
        // Machine-readable operation type.
        kind?: string,
        // Human-readable stage descriptions.
        substeps?: string[],        
    }
    
    interface ExternalDataConfiguration {
        // [Experimental] Try to detect schema and format options automatically. Any option specified explicitly will be honored.
        autodetect?: boolean,
        // [Optional] Additional options if sourceFormat is set to BIGTABLE.
        bigtableOptions?: BigtableOptions,
        // [Optional] The compression type of the data source. Possible values include GZIP and NONE. The default value is NONE. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups and Avro formats.
        compression?: string,
        // Additional properties to set if sourceFormat is set to CSV.
        csvOptions?: CsvOptions,
        // [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names Google Cloud Bigtable: This setting is ignored. Google Cloud Datastore backups: This setting is ignored. Avro: This setting is ignored.
        ignoreUnknownValues?: boolean,
        // [Optional] The maximum number of bad records that BigQuery can ignore when reading data. If the number of bad records exceeds this value, an invalid error is returned in the job result. The default value is 0, which requires that all records are valid. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups and Avro formats.
        maxBadRecords?: number,
        // [Optional] The schema for the data. Schema is required for CSV and JSON formats. Schema is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats.
        schema?: TableSchema,
        // [Required] The data format. For CSV files, specify "CSV". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro files, specify "AVRO". For Google Cloud Datastore backups, specify "DATASTORE_BACKUP". [Experimental] For Google Cloud Bigtable, specify "BIGTABLE". Please note that reading from Google Cloud Bigtable is experimental and has to be enabled for your project. Please contact Google Cloud Support to enable this for your project.
        sourceFormat?: string,
        // [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources, plus an additional limit of 10 GB maximum size across all URIs. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups, exactly one URI can be specified, and it must end with '.backup_info'. Also, the '*' wildcard character is not allowed.
        sourceUris?: string[],        
    }
    
    interface GetQueryResultsResponse {
        // Whether the query result was fetched from the query cache.
        cacheHit?: boolean,
        // [Output-only] All errors and warnings encountered during the running of the job. Errors here do not necessarily mean that the job has completed or was unsuccessful.
        errors?: ErrorProto[],        
        // A hash of this response.
        etag?: string,
        // Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.
        jobComplete?: boolean,
        // Reference to the BigQuery Job that was created to run the query. This field will be present even if the original request timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults).
        jobReference?: JobReference,
        // The resource type of the response.
        kind?: string,
        // A token used for paging results.
        pageToken?: string,
        // An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above. Present only when the query completes successfully.
        rows?: TableRow[],        
        // The schema of the results. Present only when the query completes successfully.
        schema?: TableSchema,
        // The total number of bytes processed for this query.
        totalBytesProcessed?: string,
        // The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. Present only when the query completes successfully.
        totalRows?: string,
    }
    
    interface Job {
        // [Required] Describes the job configuration.
        configuration?: JobConfiguration,
        // [Output-only] A hash of this resource.
        etag?: string,
        // [Output-only] Opaque ID field of the job
        id?: string,
        // [Optional] Reference describing the unique-per-user name of the job.
        jobReference?: JobReference,
        // [Output-only] The type of the resource.
        kind?: string,
        // [Output-only] A URL that can be used to access this resource again.
        selfLink?: string,
        // [Output-only] Information about the job, including starting time and ending time of the job.
        statistics?: JobStatistics,
        // [Output-only] The status of this job. Examine this value when polling an asynchronous job to see if the job is complete.
        status?: JobStatus,
        // [Output-only] Email address of the user who ran the job.
        user_email?: string,
    }
    
    interface JobCancelResponse {
        // The final state of the job.
        job?: Job,
        // The resource type of the response.
        kind?: string,
    }
    
    interface JobConfiguration {
        // [Pick one] Copies a table.
        copy?: JobConfigurationTableCopy,
        // [Optional] If set, don't actually run this job. A valid query will return a mostly empty response with some processing statistics, while an invalid query will return the same error it would if it wasn't a dry run. Behavior of non-query jobs is undefined.
        dryRun?: boolean,
        // [Pick one] Configures an extract job.
        extract?: JobConfigurationExtract,
        // [Pick one] Configures a load job.
        load?: JobConfigurationLoad,
        // [Pick one] Configures a query job.
        query?: JobConfigurationQuery,
    }
    
    interface JobConfigurationExtract {
        // [Optional] The compression type to use for exported files. Possible values include GZIP and NONE. The default value is NONE.
        compression?: string,
        // [Optional] The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO. The default value is CSV. Tables with nested or repeated fields cannot be exported as CSV.
        destinationFormat?: string,
        // [Pick one] DEPRECATED: Use destinationUris instead, passing only one URI as necessary. The fully-qualified Google Cloud Storage URI where the extracted table should be written.
        destinationUri?: string,
        // [Pick one] A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.
        destinationUris?: string[],        
        // [Optional] Delimiter to use between fields in the exported data. Default is ','
        fieldDelimiter?: string,
        // [Optional] Whether to print out a header row in the results. Default is true.
        printHeader?: boolean,
        // [Required] A reference to the table being exported.
        sourceTable?: TableReference,
    }
    
    interface JobConfigurationLoad {
        // [Optional] Accept rows that are missing trailing optional columns. The missing values are treated as nulls. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.
        allowJaggedRows?: boolean,
        // Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
        allowQuotedNewlines?: boolean,
        // [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
        createDisposition?: string,
        // [Required] The destination table to load the data into.
        destinationTable?: TableReference,
        // [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties.
        encoding?: string,
        // [Optional] The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character. To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator. The default value is a comma (',').
        fieldDelimiter?: string,
        // [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names
        ignoreUnknownValues?: boolean,
        // [Optional] The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value, an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.
        maxBadRecords?: number,
        // [Experimental] If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties. If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.
        projectionFields?: string[],        
        // [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
        quote?: string,
        // [Optional] The schema for the destination table. The schema can be omitted if the destination table already exists, or if you're loading data from Google Cloud Datastore.
        schema?: TableSchema,
        // [Deprecated] The inline schema. For CSV schemas, specify as "Field1:Type1[,Field2:Type2]*". For example, "foo:STRING, bar:INTEGER, baz:FLOAT".
        schemaInline?: string,
        // [Deprecated] The format of the schemaInline property.
        schemaInlineFormat?: string,
        // [Optional] The number of rows at the top of a CSV file that BigQuery will skip when loading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped.
        skipLeadingRows?: number,
        // [Optional] The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". The default value is CSV.
        sourceFormat?: string,
        // [Required] The fully-qualified URIs that point to your data in Google Cloud Storage. Each URI can contain one '*' wildcard character and it must come after the 'bucket' name.
        sourceUris?: string[],        
        // [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_APPEND. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
        writeDisposition?: string,
    }
    
    interface JobConfigurationQuery {
        // If true, allows the query to produce arbitrarily large result tables at a slight cost in performance. Requires destinationTable to be set.
        allowLargeResults?: boolean,
        // [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
        createDisposition?: string,
        // [Optional] Specifies the default dataset to use for unqualified table names in the query.
        defaultDataset?: DatasetReference,
        // [Optional] Describes the table where the query results should be stored. If not present, a new table will be created to store the results.
        destinationTable?: TableReference,
        // [Optional] Flattens all nested and repeated fields in the query results. The default value is true. allowLargeResults must be true if this is set to false.
        flattenResults?: boolean,
        // [Optional] Limits the billing tier for this job. Queries that have resource usage beyond this tier will fail (without incurring a charge). If unspecified, this will be set to your project default.
        maximumBillingTier?: number,
        // [Deprecated] This property is deprecated.
        preserveNulls?: boolean,
        // [Optional] Specifies a priority for the query. Possible values include INTERACTIVE and BATCH. The default value is INTERACTIVE.
        priority?: string,
        // [Required] BigQuery SQL query to execute.
        query?: string,
        // [Optional] If querying an external data source outside of BigQuery, describes the data format, location and other properties of the data source. By defining these properties, the data source can then be queried as if it were a standard BigQuery table.
        tableDefinitions?: any,
        // [Experimental] Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery's updated SQL dialect with improved standards compliance. When using BigQuery's updated SQL, the values of allowLargeResults and flattenResults are ignored. Queries with useLegacySql set to false will be run as if allowLargeResults is true and flattenResults is false.
        useLegacySql?: boolean,
        // [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified. The default value is true.
        useQueryCache?: boolean,
        // [Experimental] Describes user-defined function resources used in the query.
        userDefinedFunctionResources?: UserDefinedFunctionResource[],        
        // [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
        writeDisposition?: string,
    }
    
    interface JobConfigurationTableCopy {
        // [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
        createDisposition?: string,
        // [Required] The destination table
        destinationTable?: TableReference,
        // [Pick one] Source table to copy.
        sourceTable?: TableReference,
        // [Pick one] Source tables to copy.
        sourceTables?: TableReference[],        
        // [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
        writeDisposition?: string,
    }
    
    interface JobList {
        // A hash of this page of results.
        etag?: string,
        // List of jobs that were requested.
        jobs?: {        
            // [Full-projection-only] Specifies the job configuration.
            configuration?: JobConfiguration,
            // A result object that will be present only if the job has failed.
            errorResult?: ErrorProto,
            // Unique opaque ID of the job.
            id?: string,
            // Job reference uniquely identifying the job.
            jobReference?: JobReference,
            // The resource type.
            kind?: string,
            // Running state of the job. When the state is DONE, errorResult can be checked to determine whether the job succeeded or failed.
            state?: string,
            // [Output-only] Information about the job, including starting time and ending time of the job.
            statistics?: JobStatistics,
            // [Full-projection-only] Describes the state of the job.
            status?: JobStatus,
            // [Full-projection-only] Email address of the user who ran the job.
            user_email?: string,
        }[],        
        // The resource type of the response.
        kind?: string,
        // A token to request the next page of results.
        nextPageToken?: string,
    }
    
    interface JobReference {
        // [Required] The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.
        jobId?: string,
        // [Required] The ID of the project containing this job.
        projectId?: string,
    }
    
    interface JobStatistics {
        // [Output-only] Creation time of this job, in milliseconds since the epoch. This field will be present on all jobs.
        creationTime?: string,
        // [Output-only] End time of this job, in milliseconds since the epoch. This field will be present whenever a job is in the DONE state.
        endTime?: string,
        // [Output-only] Statistics for an extract job.
        extract?: JobStatistics4,
        // [Output-only] Statistics for a load job.
        load?: JobStatistics3,
        // [Output-only] Statistics for a query job.
        query?: JobStatistics2,
        // [Output-only] Start time of this job, in milliseconds since the epoch. This field will be present when the job transitions from the PENDING state to either RUNNING or DONE.
        startTime?: string,
        // [Output-only] [Deprecated] Use the bytes processed in the query statistics instead.
        totalBytesProcessed?: string,
    }
    
    interface JobStatistics2 {
        // [Output-only] Billing tier for the job.
        billingTier?: number,
        // [Output-only] Whether the query result was fetched from the query cache.
        cacheHit?: boolean,
        // [Output-only, Experimental] Describes execution plan for the query as a list of stages.
        queryPlan?: ExplainQueryStage[],        
        // [Output-only, Experimental] Referenced tables for the job. Queries that reference more than 50 tables will not have a complete list.
        referencedTables?: TableReference[],        
        // [Output-only] Total bytes billed for the job.
        totalBytesBilled?: string,
        // [Output-only] Total bytes processed for the job.
        totalBytesProcessed?: string,
    }
    
    interface JobStatistics3 {
        // [Output-only] Number of bytes of source data in a load job.
        inputFileBytes?: string,
        // [Output-only] Number of source files in a load job.
        inputFiles?: string,
        // [Output-only] Size of the loaded data in bytes. Note that while a load job is in the running state, this value may change.
        outputBytes?: string,
        // [Output-only] Number of rows imported in a load job. Note that while an import job is in the running state, this value may change.
        outputRows?: string,
    }
    
    interface JobStatistics4 {
        // [Output-only] Number of files per destination URI or URI pattern specified in the extract configuration. These values will be in the same order as the URIs specified in the 'destinationUris' field.
        destinationUriFileCounts?: string[],        
    }
    
    interface JobStatus {
        // [Output-only] Final error result of the job. If present, indicates that the job has completed and was unsuccessful.
        errorResult?: ErrorProto,
        // [Output-only] All errors encountered during the running of the job. Errors here do not necessarily mean that the job has completed or was unsuccessful.
        errors?: ErrorProto[],        
        // [Output-only] Running state of the job.
        state?: string,
    }
    
    interface JsonObject {
    }
    
    interface JsonValue {
    }
    
    interface ProjectList {
        // A hash of the page of results
        etag?: string,
        // The type of list.
        kind?: string,
        // A token to request the next page of results.
        nextPageToken?: string,
        // Projects to which you have at least READ access.
        projects?: {        
            // A descriptive name for this project.
            friendlyName?: string,
            // An opaque ID of this project.
            id?: string,
            // The resource type.
            kind?: string,
            // The numeric ID of this project.
            numericId?: string,
            // A unique reference to this project.
            projectReference?: ProjectReference,
        }[],        
        // The total number of projects in the list.
        totalItems?: number,
    }
    
    interface ProjectReference {
        // [Required] ID of the project. Can be either the numeric ID or the assigned ID of the project.
        projectId?: string,
    }
    
    interface QueryRequest {
        // [Optional] Specifies the default datasetId and projectId to assume for any unqualified table names in the query. If not set, all table names in the query string must be qualified in the format 'datasetId.tableId'.
        defaultDataset?: DatasetReference,
        // [Optional] If set to true, BigQuery doesn't run the job. Instead, if the query is valid, BigQuery returns statistics about the job such as how many bytes would be processed. If the query is invalid, an error returns. The default value is false.
        dryRun?: boolean,
        // The resource type of the request.
        kind?: string,
        // [Optional] The maximum number of rows of data to return per page of results. Setting this flag to a small value such as 1000 and then paging through results might improve reliability when the query result set is large. In addition to this limit, responses are also limited to 10 MB. By default, there is no maximum row count, and only the byte limit applies.
        maxResults?: number,
        // [Deprecated] This property is deprecated.
        preserveNulls?: boolean,
        // [Required] A query string, following the BigQuery query syntax, of the query to execute. Example: "SELECT count(f1) FROM [myProjectId:myDatasetId.myTableId]".
        query?: string,
        // [Optional] How long to wait for the query to complete, in milliseconds, before the request times out and returns. Note that this is only a timeout for the request, not the query. If the query takes longer to run than the timeout value, the call returns without any results and with the 'jobComplete' flag set to false. You can call GetQueryResults() to wait for the query to complete and read the results. The default value is 10000 milliseconds (10 seconds).
        timeoutMs?: number,
        // [Experimental] Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery's updated SQL dialect with improved standards compliance. When using BigQuery's updated SQL, the values of allowLargeResults and flattenResults are ignored. Queries with useLegacySql set to false will be run as if allowLargeResults is true and flattenResults is false.
        useLegacySql?: boolean,
        // [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. The default value is true.
        useQueryCache?: boolean,
    }
    
    interface QueryResponse {
        // Whether the query result was fetched from the query cache.
        cacheHit?: boolean,
        // [Output-only] All errors and warnings encountered during the running of the job. Errors here do not necessarily mean that the job has completed or was unsuccessful.
        errors?: ErrorProto[],        
        // Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.
        jobComplete?: boolean,
        // Reference to the Job that was created to run the query. This field will be present even if the original request timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults).
        jobReference?: JobReference,
        // The resource type.
        kind?: string,
        // A token used for paging results.
        pageToken?: string,
        // An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above.
        rows?: TableRow[],        
        // The schema of the results. Present only when the query completes successfully.
        schema?: TableSchema,
        // The total number of bytes processed for this query. If this query was a dry run, this is the number of bytes that would be processed if the query were run.
        totalBytesProcessed?: string,
        // The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results.
        totalRows?: string,
    }
    
    interface Streamingbuffer {
        // [Output-only] A lower-bound estimate of the number of bytes currently in the streaming buffer.
        estimatedBytes?: string,
        // [Output-only] A lower-bound estimate of the number of rows currently in the streaming buffer.
        estimatedRows?: string,
        // [Output-only] Contains the timestamp of the oldest entry in the streaming buffer, in milliseconds since the epoch, if the streaming buffer is available.
        oldestEntryTime?: string,
    }
    
    interface Table {
        // [Output-only] The time when this table was created, in milliseconds since the epoch.
        creationTime?: string,
        // [Optional] A user-friendly description of this table.
        description?: string,
        // [Output-only] A hash of this resource.
        etag?: string,
        // [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.
        expirationTime?: string,
        // [Optional] Describes the data format, location, and other properties of a table stored outside of BigQuery. By defining these properties, the data source can then be queried as if it were a standard BigQuery table.
        externalDataConfiguration?: ExternalDataConfiguration,
        // [Optional] A descriptive name for this table.
        friendlyName?: string,
        // [Output-only] An opaque ID uniquely identifying the table.
        id?: string,
        // [Output-only] The type of the resource.
        kind?: string,
        // [Output-only] The time when this table was last modified, in milliseconds since the epoch.
        lastModifiedTime?: string,
        // [Output-only] The geographic location where the table resides. This value is inherited from the dataset.
        location?: string,
        // [Output-only] The size of this table in bytes, excluding any data in the streaming buffer.
        numBytes?: string,
        // [Output-only] The number of rows of data in this table, excluding any data in the streaming buffer.
        numRows?: string,
        // [Optional] Describes the schema of this table.
        schema?: TableSchema,
        // [Output-only] A URL that can be used to access this resource again.
        selfLink?: string,
        // [Output-only] Contains information regarding this table's streaming buffer, if one is present. This field will be absent if the table is not being streamed to or if there is no data in the streaming buffer.
        streamingBuffer?: Streamingbuffer,
        // [Required] Reference describing the ID of this table.
        tableReference?: TableReference,
        // [Output-only] Describes the table type. The following values are supported: TABLE: A normal BigQuery table. VIEW: A virtual table defined by a SQL query. EXTERNAL: A table that references data stored in an external storage system, such as Google Cloud Storage. The default value is TABLE.
        type?: string,
        // [Optional] The view definition.
        view?: ViewDefinition,
    }
    
    interface TableCell {
        // 
        v?: any,
    }
    
    interface TableDataInsertAllRequest {
        // [Optional] Accept rows that contain values that do not match the schema. The unknown values are ignored. Default is false, which treats unknown values as errors.
        ignoreUnknownValues?: boolean,
        // The resource type of the response.
        kind?: string,
        // The rows to insert.
        rows?: {        
            // [Optional] A unique ID for each row. BigQuery uses this property to detect duplicate insertion requests on a best-effort basis.
            insertId?: string,
            // [Required] A JSON object that contains a row of data. The object's properties and values must match the destination table's schema.
            json?: JsonObject,
        }[],        
        // [Optional] Insert all valid rows of a request, even if invalid rows exist. The default value is false, which causes the entire request to fail if any invalid rows exist.
        skipInvalidRows?: boolean,
        // [Experimental] If specified, treats the destination table as a base template, and inserts the rows into an instance table named "{destination}{templateSuffix}". BigQuery will manage creation of the instance table, using the schema of the base template table. See https://cloud.google.com/bigquery/streaming-data-into-bigquery#template-tables for considerations when working with templates tables.
        templateSuffix?: string,
    }
    
    interface TableDataInsertAllResponse {
        // An array of errors for rows that were not inserted.
        insertErrors?: {        
            // Error information for the row indicated by the index property.
            errors?: ErrorProto[],            
            // The index of the row that error applies to.
            index?: number,
        }[],        
        // The resource type of the response.
        kind?: string,
    }
    
    interface TableDataList {
        // A hash of this page of results.
        etag?: string,
        // The resource type of the response.
        kind?: string,
        // A token used for paging results. Providing this token instead of the startIndex parameter can help you retrieve stable results when an underlying table is changing.
        pageToken?: string,
        // Rows of results.
        rows?: TableRow[],        
        // The total number of rows in the complete table.
        totalRows?: string,
    }
    
    interface TableFieldSchema {
        // [Optional] The field description. The maximum length is 16K characters.
        description?: string,
        // [Optional] Describes the nested schema fields if the type property is set to RECORD.
        fields?: TableFieldSchema[],        
        // [Optional] The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE.
        mode?: string,
        // [Required] The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 128 characters.
        name?: string,
        // [Required] The field data type. Possible values include STRING, INTEGER, FLOAT, BOOLEAN, TIMESTAMP or RECORD (where RECORD indicates that the field contains a nested schema).
        type?: string,
    }
    
    interface TableList {
        // A hash of this page of results.
        etag?: string,
        // The type of list.
        kind?: string,
        // A token to request the next page of results.
        nextPageToken?: string,
        // Tables in the requested dataset.
        tables?: {        
            // The user-friendly name for this table.
            friendlyName?: string,
            // An opaque ID of the table
            id?: string,
            // The resource type.
            kind?: string,
            // A reference uniquely identifying the table.
            tableReference?: TableReference,
            // The type of table. Possible values are: TABLE, VIEW.
            type?: string,
        }[],        
        // The total number of tables in the dataset.
        totalItems?: number,
    }
    
    interface TableReference {
        // [Required] The ID of the dataset containing this table.
        datasetId?: string,
        // [Required] The ID of the project containing this table.
        projectId?: string,
        // [Required] The ID of the table. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
        tableId?: string,
    }
    
    interface TableRow {
        // Represents a single row in the result set, consisting of one or more fields.
        f?: TableCell[],        
    }
    
    interface TableSchema {
        // Describes the fields in a table.
        fields?: TableFieldSchema[],        
    }
    
    interface UserDefinedFunctionResource {
        // [Pick one] An inline resource that contains code for a user-defined function (UDF). Providing a inline code resource is equivalent to providing a URI for a file containing the same code.
        inlineCode?: string,
        // [Pick one] A code resource to load from a Google Cloud Storage URI (gs://bucket/path).
        resourceUri?: string,
    }
    
    interface ViewDefinition {
        // [Required] A query that BigQuery executes when the view is referenced.
        query?: string,
        // [Experimental] Describes user-defined function resources used in the query.
        userDefinedFunctionResources?: UserDefinedFunctionResource[],        
    }
    
    interface DatasetsResource {
        // Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
        delete (request: {        
            // Dataset ID of dataset being deleted
            datasetId: string,
            // If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
            deleteContents?: boolean,
            // Project ID of the dataset being deleted
            projectId: string,
        }) : gapi.client.Request<void>;        
        
        // Returns the dataset specified by datasetID.
        get (request: {        
            // Dataset ID of the requested dataset
            datasetId: string,
            // Project ID of the requested dataset
            projectId: string,
        }) : gapi.client.Request<Dataset>;        
        
        // Creates a new empty dataset.
        insert (request: {        
            // Project ID of the new dataset
            projectId: string,
        }) : gapi.client.Request<Dataset>;        
        
        // Lists all datasets in the specified project to which you have been granted the READER dataset role.
        list (request: {        
            // Whether to list all datasets, including hidden ones
            all?: boolean,
            // The maximum number of results to return
            maxResults?: number,
            // Page token, returned by a previous call, to request the next page of results
            pageToken?: string,
            // Project ID of the datasets to be listed
            projectId: string,
        }) : gapi.client.Request<DatasetList>;        
        
        // Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
        patch (request: {        
            // Dataset ID of the dataset being updated
            datasetId: string,
            // Project ID of the dataset being updated
            projectId: string,
        }) : gapi.client.Request<Dataset>;        
        
        // Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.
        update (request: {        
            // Dataset ID of the dataset being updated
            datasetId: string,
            // Project ID of the dataset being updated
            projectId: string,
        }) : gapi.client.Request<Dataset>;        
        
    }
    
    
    interface JobsResource {
        // Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
        cancel (request: {        
            // [Required] Job ID of the job to cancel
            jobId: string,
            // [Required] Project ID of the job to cancel
            projectId: string,
        }) : gapi.client.Request<JobCancelResponse>;        
        
        // Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
        get (request: {        
            // [Required] Job ID of the requested job
            jobId: string,
            // [Required] Project ID of the requested job
            projectId: string,
        }) : gapi.client.Request<Job>;        
        
        // Retrieves the results of a query job.
        getQueryResults (request: {        
            // [Required] Job ID of the query job
            jobId: string,
            // Maximum number of results to read
            maxResults?: number,
            // Page token, returned by a previous call, to request the next page of results
            pageToken?: string,
            // [Required] Project ID of the query job
            projectId: string,
            // Zero-based index of the starting row
            startIndex?: string,
            // How long to wait for the query to complete, in milliseconds, before returning. Default is 10 seconds. If the timeout passes before the job completes, the 'jobComplete' field in the response will be false
            timeoutMs?: number,
        }) : gapi.client.Request<GetQueryResultsResponse>;        
        
        // Starts a new asynchronous job. Requires the Can View project role.
        insert (request: {        
            // Project ID of the project that will be billed for the job
            projectId: string,
        }) : gapi.client.Request<Job>;        
        
        // Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
        list (request: {        
            // Whether to display jobs owned by all users in the project. Default false
            allUsers?: boolean,
            // Maximum number of results to return
            maxResults?: number,
            // Page token, returned by a previous call, to request the next page of results
            pageToken?: string,
            // Project ID of the jobs to list
            projectId: string,
            // Restrict information returned to a set of selected fields
            projection?: string,
            // Filter for job state
            stateFilter?: string,
        }) : gapi.client.Request<JobList>;        
        
        // Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
        query (request: {        
            // Project ID of the project billed for the query
            projectId: string,
        }) : gapi.client.Request<QueryResponse>;        
        
    }
    
    
    interface ProjectsResource {
        // Lists all projects to which you have been granted any project role.
        list (request: {        
            // Maximum number of results to return
            maxResults?: number,
            // Page token, returned by a previous call, to request the next page of results
            pageToken?: string,
        }) : gapi.client.Request<ProjectList>;        
        
    }
    
    
    interface TabledataResource {
        // Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
        insertAll (request: {        
            // Dataset ID of the destination table.
            datasetId: string,
            // Project ID of the destination table.
            projectId: string,
            // Table ID of the destination table.
            tableId: string,
        }) : gapi.client.Request<TableDataInsertAllResponse>;        
        
        // Retrieves table data from a specified set of rows. Requires the READER dataset role.
        list (request: {        
            // Dataset ID of the table to read
            datasetId: string,
            // Maximum number of results to return
            maxResults?: number,
            // Page token, returned by a previous call, identifying the result set
            pageToken?: string,
            // Project ID of the table to read
            projectId: string,
            // Zero-based index of the starting row to read
            startIndex?: string,
            // Table ID of the table to read
            tableId: string,
        }) : gapi.client.Request<TableDataList>;        
        
    }
    
    
    interface TablesResource {
        // Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
        delete (request: {        
            // Dataset ID of the table to delete
            datasetId: string,
            // Project ID of the table to delete
            projectId: string,
            // Table ID of the table to delete
            tableId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
        get (request: {        
            // Dataset ID of the requested table
            datasetId: string,
            // Project ID of the requested table
            projectId: string,
            // Table ID of the requested table
            tableId: string,
        }) : gapi.client.Request<Table>;        
        
        // Creates a new, empty table in the dataset.
        insert (request: {        
            // Dataset ID of the new table
            datasetId: string,
            // Project ID of the new table
            projectId: string,
        }) : gapi.client.Request<Table>;        
        
        // Lists all tables in the specified dataset. Requires the READER dataset role.
        list (request: {        
            // Dataset ID of the tables to list
            datasetId: string,
            // Maximum number of results to return
            maxResults?: number,
            // Page token, returned by a previous call, to request the next page of results
            pageToken?: string,
            // Project ID of the tables to list
            projectId: string,
        }) : gapi.client.Request<TableList>;        
        
        // Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
        patch (request: {        
            // Dataset ID of the table to update
            datasetId: string,
            // Project ID of the table to update
            projectId: string,
            // Table ID of the table to update
            tableId: string,
        }) : gapi.client.Request<Table>;        
        
        // Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.
        update (request: {        
            // Dataset ID of the table to update
            datasetId: string,
            // Project ID of the table to update
            projectId: string,
            // Table ID of the table to update
            tableId: string,
        }) : gapi.client.Request<Table>;        
        
    }
    
}

declare module gapi.client.bigquery {
    var datasets: gapi.client.bigquery.v2.DatasetsResource; 
    
    var jobs: gapi.client.bigquery.v2.JobsResource; 
    
    var projects: gapi.client.bigquery.v2.ProjectsResource; 
    
    var tabledata: gapi.client.bigquery.v2.TabledataResource; 
    
    var tables: gapi.client.bigquery.v2.TablesResource; 
    
}