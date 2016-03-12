// Type definitions for Google Prediction API v1.6
// Project: https://developers.google.com/prediction/docs/developer-guide
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.prediction {
    
    interface Analyze {
        // Description of the data the model was trained on.
        dataDescription?: {        
            // Description of the input features in the data set.
            features?: {            
                // Description of the categorical values of this feature.
                categorical?: {                
                    // Number of categorical values for this feature in the data.
                    count?: string,
                    // List of all the categories for this feature in the data set.
                    values?: {                    
                        // Number of times this feature had this value.
                        count?: string,
                        // The category name.
                        value?: string,
                    }[],                    
                },                
                // The feature index.
                index?: string,
                // Description of the numeric values of this feature.
                numeric?: {                
                    // Number of numeric values for this feature in the data set.
                    count?: string,
                    // Mean of the numeric values of this feature in the data set.
                    mean?: string,
                    // Variance of the numeric values of this feature in the data set.
                    variance?: string,
                },                
                // Description of multiple-word text values of this feature.
                text?: {                
                    // Number of multiple-word text values for this feature.
                    count?: string,
                },                
            }[],            
            // Description of the output value or label.
            outputFeature?: {            
                // Description of the output values in the data set.
                numeric?: {                
                    // Number of numeric output values in the data set.
                    count?: string,
                    // Mean of the output values in the data set.
                    mean?: string,
                    // Variance of the output values in the data set.
                    variance?: string,
                },                
                // Description of the output labels in the data set.
                text?: {                
                    // Number of times the output label occurred in the data set.
                    count?: string,
                    // The output label.
                    value?: string,
                }[],                
            },            
        },        
        // List of errors with the data.
        errors?: any[],        
        // The unique name for the predictive model.
        id?: string,
        // What kind of resource this is.
        kind?: string,
        // Description of the model.
        modelDescription?: {        
            // An output confusion matrix. This shows an estimate for how this model will do in predictions. This is first indexed by the true class label. For each true class label, this provides a pair {predicted_label, count}, where count is the estimated number of times the model will predict the predicted label given the true label. Will not output if more then 100 classes (Categorical models only).
            confusionMatrix?: any,
            // A list of the confusion matrix row totals.
            confusionMatrixRowTotals?: any,
            // Basic information about the model.
            modelinfo?: Insert2,
        },        
        // A URL to re-request this resource.
        selfLink?: string,
    }
    
    interface Input {
        // Input to the model for a prediction.
        input?: {        
            // A list of input features, these can be strings or doubles.
            csvInstance?: any[],            
        },        
    }
    
    interface Insert {
        // The unique name for the predictive model.
        id?: string,
        // Type of predictive model (classification or regression).
        modelType?: string,
        // The Id of the model to be copied over.
        sourceModel?: string,
        // Google storage location of the training data file.
        storageDataLocation?: string,
        // Google storage location of the preprocessing pmml file.
        storagePMMLLocation?: string,
        // Google storage location of the pmml model file.
        storagePMMLModelLocation?: string,
        // Instances to train model on.
        trainingInstances?: {        
            // The input features for this instance.
            csvInstance?: any[],            
            // The generic output value - could be regression or class label.
            output?: string,
        }[],        
        // A class weighting function, which allows the importance weights for class labels to be specified (Categorical models only).
        utility?: any[],        
    }
    
    interface Insert2 {
        // Insert time of the model (as a RFC 3339 timestamp).
        created?: string,
        // The unique name for the predictive model.
        id?: string,
        // What kind of resource this is.
        kind?: string,
        // Model metadata.
        modelInfo?: {        
            // Estimated accuracy of model taking utility weights into account (Categorical models only).
            classWeightedAccuracy?: string,
            // A number between 0.0 and 1.0, where 1.0 is 100% accurate. This is an estimate, based on the amount and quality of the training data, of the estimated prediction accuracy. You can use this is a guide to decide whether the results are accurate enough for your needs. This estimate will be more reliable if your real input data is similar to your training data (Categorical models only).
            classificationAccuracy?: string,
            // An estimated mean squared error. The can be used to measure the quality of the predicted model (Regression models only).
            meanSquaredError?: string,
            // Type of predictive model (CLASSIFICATION or REGRESSION).
            modelType?: string,
            // Number of valid data instances used in the trained model.
            numberInstances?: string,
            // Number of class labels in the trained model (Categorical models only).
            numberLabels?: string,
        },        
        // Type of predictive model (CLASSIFICATION or REGRESSION).
        modelType?: string,
        // A URL to re-request this resource.
        selfLink?: string,
        // Google storage location of the training data file.
        storageDataLocation?: string,
        // Google storage location of the preprocessing pmml file.
        storagePMMLLocation?: string,
        // Google storage location of the pmml model file.
        storagePMMLModelLocation?: string,
        // Training completion time (as a RFC 3339 timestamp).
        trainingComplete?: string,
        // The current status of the training job. This can be one of following: RUNNING; DONE; ERROR; ERROR: TRAINING JOB NOT FOUND
        trainingStatus?: string,
    }
    
    interface List {
        // List of models.
        items?: Insert2[],        
        // What kind of resource this is.
        kind?: string,
        // Pagination token to fetch the next page, if one exists.
        nextPageToken?: string,
        // A URL to re-request this resource.
        selfLink?: string,
    }
    
    interface Output {
        // The unique name for the predictive model.
        id?: string,
        // What kind of resource this is.
        kind?: string,
        // The most likely class label (Categorical models only).
        outputLabel?: string,
        // A list of class labels with their estimated probabilities (Categorical models only).
        outputMulti?: {        
            // The class label.
            label?: string,
            // The probability of the class label.
            score?: string,
        }[],        
        // The estimated regression value (Regression models only).
        outputValue?: string,
        // A URL to re-request this resource.
        selfLink?: string,
    }
    
    interface Update {
        // The input features for this instance.
        csvInstance?: any[],        
        // The generic output value - could be regression or class label.
        output?: string,
    }
    
    interface HostedmodelsResource {
        // Submit input and request an output against a hosted model.
        predict (request: {        
            // The name of a hosted model.
            hostedModelName: string,
            // The project associated with the model.
            project: string,
        }) : gapi.client.Request<Output>;        
        
    }
    
    
    interface TrainedmodelsResource {
        // Get analysis of the model and the data the model was trained on.
        analyze (request: {        
            // The unique name for the predictive model.
            id: string,
            // The project associated with the model.
            project: string,
        }) : gapi.client.Request<Analyze>;        
        
        // Delete a trained model.
        delete (request: {        
            // The unique name for the predictive model.
            id: string,
            // The project associated with the model.
            project: string,
        }) : gapi.client.Request<void>;        
        
        // Check training status of your model.
        get (request: {        
            // The unique name for the predictive model.
            id: string,
            // The project associated with the model.
            project: string,
        }) : gapi.client.Request<Insert2>;        
        
        // Train a Prediction API model.
        insert (request: {        
            // The project associated with the model.
            project: string,
        }) : gapi.client.Request<Insert2>;        
        
        // List available models.
        list (request: {        
            // Maximum number of results to return.
            maxResults?: number,
            // Pagination token.
            pageToken?: string,
            // The project associated with the model.
            project: string,
        }) : gapi.client.Request<List>;        
        
        // Submit model id and request a prediction.
        predict (request: {        
            // The unique name for the predictive model.
            id: string,
            // The project associated with the model.
            project: string,
        }) : gapi.client.Request<Output>;        
        
        // Add new data to a trained model.
        update (request: {        
            // The unique name for the predictive model.
            id: string,
            // The project associated with the model.
            project: string,
        }) : gapi.client.Request<Insert2>;        
        
    }
    
}

declare module gapi.client.prediction {
    var hostedmodels: gapi.client.prediction.HostedmodelsResource; 
    
    var trainedmodels: gapi.client.prediction.TrainedmodelsResource; 
    
}
