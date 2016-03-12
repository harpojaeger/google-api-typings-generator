// Type definitions for Google Google Cloud Pub/Sub API v1beta1a
// Project: https://cloud.google.com/pubsub/docs
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.pubsub {
    
    interface Topic {
        // Name of the topic.
        name?: string,
    }
    
    interface PublishRequest {
        // The message in the request will be published on this topic.
        topic?: string,
        // The message to publish.
        message?: PubsubMessage,
    }
    
    interface PubsubMessage {
        // The message payload.
        data?: string,
        // Optional list of labels for this message. Keys in this collection must be unique.
        label?: Label[],        
        // ID of this message assigned by the server at publication time. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a PubsubMessage via a Pull call or a push delivery. It must not be populated by a publisher in a Publish call.
        messageId?: string,
        // The time at which the message was published. The time is milliseconds since the UNIX epoch.
        publishTime?: string,
    }
    
    interface Label {
        // The key of a label is a syntactically valid URL (as per RFC 1738) with the "scheme" and initial slashes omitted and with the additional restrictions noted below. Each key should be globally unique. The "host" portion is called the "namespace" and is not necessarily resolvable to a network endpoint. Instead, the namespace indicates what system or entity defines the semantics of the label. Namespaces do not restrict the set of objects to which a label may be associated. Keys are defined by the following grammar: key = hostname "/" kpath kpath = ksegment *[ "/" ksegment ] ksegment = alphadigit | *[ alphadigit | "-" | "_" | "." ] where "hostname" and "alphadigit" are defined as in RFC 1738. Example key: spanner.google.com/universe
        key?: string,
        // A string value.
        strValue?: string,
        // An integer value.
        numValue?: string,
    }
    
    interface Empty {
    }
    
    interface PublishBatchRequest {
        // The messages in the request will be published on this topic.
        topic?: string,
        // The messages to publish.
        messages?: PubsubMessage[],        
    }
    
    interface PublishBatchResponse {
        // The server-assigned ID of each published message, in the same order as the messages in the request. IDs are guaranteed to be unique within the topic.
        messageIds?: string[],        
    }
    
    interface ListTopicsResponse {
        // The resulting topics.
        topic?: Topic[],        
        // If not empty, indicates that there are more topics that match the request, and this value should be passed to the next ListTopicsRequest to continue.
        nextPageToken?: string,
    }
    
    interface Subscription {
        // Name of the subscription.
        name?: string,
        // The name of the topic from which this subscription is receiving messages.
        topic?: string,
        // If push delivery is used with this subscription, this field is used to configure it.
        pushConfig?: PushConfig,
        // For either push or pull delivery, the value is the maximum time after a subscriber receives a message before the subscriber should acknowledge or Nack the message. If the Ack deadline for a message passes without an Ack or a Nack, the Pub/Sub system will eventually redeliver the message. If a subscriber acknowledges after the deadline, the Pub/Sub system may accept the Ack, but it is possible that the message has been already delivered again. Multiple Acks to the message are allowed and will succeed. For push delivery, this value is used to set the request timeout for the call to the push endpoint. For pull delivery, this value is used as the initial value for the Ack deadline. It may be overridden for each message using its corresponding ack_id with ModifyAckDeadline. While a message is outstanding (i.e. it has been delivered to a pull subscriber and the subscriber has not yet Acked or Nacked), the Pub/Sub system will not deliver that message to another pull subscriber (on a best-effort basis).
        ackDeadlineSeconds?: number,
    }
    
    interface PushConfig {
        // A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push".
        pushEndpoint?: string,
    }
    
    interface ListSubscriptionsResponse {
        // The subscriptions that match the request.
        subscription?: Subscription[],        
        // If not empty, indicates that there are more subscriptions that match the request and this value should be passed to the next ListSubscriptionsRequest to continue.
        nextPageToken?: string,
    }
    
    interface ModifyPushConfigRequest {
        // The name of the subscription.
        subscription?: string,
        // An empty push_config indicates that the Pub/Sub system should pause pushing messages from the given subscription.
        pushConfig?: PushConfig,
    }
    
    interface PullRequest {
        // The subscription from which a message should be pulled.
        subscription?: string,
        // If this is specified as true the system will respond immediately even if it is not able to return a message in the Pull response. Otherwise the system is allowed to wait until at least one message is available rather than returning FAILED_PRECONDITION. The client may cancel the request if it does not wish to wait any longer for the response.
        returnImmediately?: boolean,
    }
    
    interface PullResponse {
        // This ID must be used to acknowledge the received event or message.
        ackId?: string,
        // A pubsub message or truncation event.
        pubsubEvent?: PubsubEvent,
    }
    
    interface PubsubEvent {
        // The subscription that received the event.
        subscription?: string,
        // A received message.
        message?: PubsubMessage,
        // Indicates that this subscription has been truncated.
        truncated?: boolean,
        // Indicates that this subscription has been deleted. (Note that pull subscribers will always receive NOT_FOUND in response in their pull request on the subscription, rather than seeing this boolean.)
        deleted?: boolean,
    }
    
    interface PullBatchRequest {
        // The subscription from which messages should be pulled.
        subscription?: string,
        // If this is specified as true the system will respond immediately even if it is not able to return a message in the Pull response. Otherwise the system is allowed to wait until at least one message is available rather than returning no messages. The client may cancel the request if it does not wish to wait any longer for the response.
        returnImmediately?: boolean,
        // The maximum number of PubsubEvents returned for this request. The Pub/Sub system may return fewer than the number of events specified.
        maxEvents?: number,
    }
    
    interface PullBatchResponse {
        // Received Pub/Sub messages or status events. The Pub/Sub system will return zero messages if there are no more messages available in the backlog. The Pub/Sub system may return fewer than the max_events requested even if there are more messages available in the backlog.
        pullResponses?: PullResponse[],        
    }
    
    interface ModifyAckDeadlineRequest {
        // Next Index: 5 The name of the subscription from which messages are being pulled.
        subscription?: string,
        // The acknowledgment ID. Either this or ack_ids must be populated, not both.
        ackId?: string,
        // List of acknowledgment IDs. Either this field or ack_id should be populated, not both.
        ackIds?: string[],        
        // The new ack deadline with respect to the time this request was sent to the Pub/Sub system. Must be >= 0. For example, if the value is 10, the new ack deadline will expire 10 seconds after the ModifyAckDeadline call was made. Specifying zero may immediately make the message available for another pull request.
        ackDeadlineSeconds?: number,
    }
    
    interface AcknowledgeRequest {
        // The subscription whose message is being acknowledged.
        subscription?: string,
        // The acknowledgment ID for the message being acknowledged. This was returned by the Pub/Sub system in the Pull response.
        ackId?: string[],        
    }
    
    interface TopicsResource {
        // Creates the given topic with the given name.
        create (request: {        
        }) : gapi.client.Request<Topic>;        
        
        // Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.
        publish (request: {        
        }) : gapi.client.Request<Empty>;        
        
        // Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.
        publishBatch (request: {        
        }) : gapi.client.Request<PublishBatchResponse>;        
        
        // Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.
        get (request: {        
            // The name of the topic to get.
            topic: string,
        }) : gapi.client.Request<Topic>;        
        
        // Lists matching topics.
        list (request: {        
            // A valid label query expression.
            query?: string,
            // Maximum number of topics to return.
            maxResults?: number,
            // The value obtained in the last ListTopicsResponse for continuation.
            pageToken?: string,
        }) : gapi.client.Request<ListTopicsResponse>;        
        
        // Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.
        delete (request: {        
            // Name of the topic to delete.
            topic: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface SubscriptionsResource {
        // Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.
        create (request: {        
        }) : gapi.client.Request<Subscription>;        
        
        // Gets the configuration details of a subscription.
        get (request: {        
            // The name of the subscription to get.
            subscription: string,
        }) : gapi.client.Request<Subscription>;        
        
        // Lists matching subscriptions.
        list (request: {        
            // A valid label query expression.
            query?: string,
            // Maximum number of subscriptions to return.
            maxResults?: number,
            // The value obtained in the last ListSubscriptionsResponse for continuation.
            pageToken?: string,
        }) : gapi.client.Request<ListSubscriptionsResponse>;        
        
        // Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.
        delete (request: {        
            // The subscription to delete.
            subscription: string,
        }) : gapi.client.Request<Empty>;        
        
        // Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.
        modifyPushConfig (request: {        
        }) : gapi.client.Request<Empty>;        
        
        // Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).
        pull (request: {        
        }) : gapi.client.Request<PullResponse>;        
        
        // Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.
        pullBatch (request: {        
        }) : gapi.client.Request<PullBatchResponse>;        
        
        // Modifies the Ack deadline for a message received from a pull request.
        modifyAckDeadline (request: {        
        }) : gapi.client.Request<Empty>;        
        
        // Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.
        acknowledge (request: {        
        }) : gapi.client.Request<Empty>;        
        
    }
    
}

declare module gapi.client.pubsub {
    var topics: gapi.client.pubsub.TopicsResource; 
    
    var subscriptions: gapi.client.pubsub.SubscriptionsResource; 
    
}
