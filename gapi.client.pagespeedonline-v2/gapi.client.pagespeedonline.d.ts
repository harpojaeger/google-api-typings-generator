// Type definitions for Google PageSpeed Insights API v2
// Project: https://developers.google.com/speed/docs/insights/v2/getting-started
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.pagespeedonline {
    
    interface PagespeedApiFormatStringV2 {
        // List of arguments for the format string.
        args?: {        
            // The placeholder key for this arg, as a string.
            key?: string,
            // The screen rectangles being referred to, with dimensions measured in CSS pixels. This is only ever used for SNAPSHOT_RECT arguments. If this is absent for a SNAPSHOT_RECT argument, it means that that argument refers to the entire snapshot.
            rects?: {            
                // The height of the rect.
                height?: number,
                // The left coordinate of the rect, in page coordinates.
                left?: number,
                // The top coordinate of the rect, in page coordinates.
                top?: number,
                // The width of the rect.
                width?: number,
            }[],            
            // Secondary screen rectangles being referred to, with dimensions measured in CSS pixels. This is only ever used for SNAPSHOT_RECT arguments.
            secondary_rects?: {            
                // The height of the rect.
                height?: number,
                // The left coordinate of the rect, in page coordinates.
                left?: number,
                // The top coordinate of the rect, in page coordinates.
                top?: number,
                // The width of the rect.
                width?: number,
            }[],            
            // Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, DURATION, VERBATIM_STRING, PERCENTAGE, HYPERLINK, or SNAPSHOT_RECT.
            type?: string,
            // Argument value, as a localized string.
            value?: string,
        }[],        
        // A localized format string with {{FOO}} placeholders, where 'FOO' is the key of the argument whose value should be substituted. For HYPERLINK arguments, the format string will instead contain {{BEGIN_FOO}} and {{END_FOO}} for the argument with key 'FOO'.
        format?: string,
    }
    
    interface PagespeedApiImageV2 {
        // Image data base64 encoded.
        data?: string,
        // Height of screenshot in pixels.
        height?: number,
        // Unique string key, if any, identifying this image.
        key?: string,
        // Mime type of image data (e.g. "image/jpeg").
        mime_type?: string,
        // The region of the page that is captured by this image, with dimensions measured in CSS pixels.
        page_rect?: {        
            // The height of the rect.
            height?: number,
            // The left coordinate of the rect, in page coordinates.
            left?: number,
            // The top coordinate of the rect, in page coordinates.
            top?: number,
            // The width of the rect.
            width?: number,
        },        
        // Width of screenshot in pixels.
        width?: number,
    }
    
    interface Result {
        // Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
        formattedResults?: {        
            // The locale of the formattedResults, e.g. "en_US".
            locale?: string,
            // Dictionary of formatted rule results, with one entry for each PageSpeed rule instantiated and run by the server.
            ruleResults?: any,
        },        
        // Canonicalized and final URL for the document, after following page redirects (if any).
        id?: string,
        // List of rules that were specified in the request, but which the server did not know how to instantiate.
        invalidRules?: string[],        
        // Kind of result.
        kind?: string,
        // Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
        pageStats?: {        
            // Number of uncompressed response bytes for CSS resources on the page.
            cssResponseBytes?: string,
            // Number of response bytes for flash resources on the page.
            flashResponseBytes?: string,
            // Number of uncompressed response bytes for the main HTML document and all iframes on the page.
            htmlResponseBytes?: string,
            // Number of response bytes for image resources on the page.
            imageResponseBytes?: string,
            // Number of uncompressed response bytes for JS resources on the page.
            javascriptResponseBytes?: string,
            // Number of CSS resources referenced by the page.
            numberCssResources?: number,
            // Number of unique hosts referenced by the page.
            numberHosts?: number,
            // Number of JavaScript resources referenced by the page.
            numberJsResources?: number,
            // Number of HTTP resources loaded by the page.
            numberResources?: number,
            // Number of static (i.e. cacheable) resources on the page.
            numberStaticResources?: number,
            // Number of response bytes for other resources on the page.
            otherResponseBytes?: string,
            // Number of uncompressed response bytes for text resources not covered by other statistics (i.e non-HTML, non-script, non-CSS resources) on the page.
            textResponseBytes?: string,
            // Total size of all request bytes sent by the page.
            totalRequestBytes?: string,
        },        
        // Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error.
        responseCode?: number,
        // A map with one entry for each rule group in these results.
        ruleGroups?: any,
        // Base64-encoded screenshot of the page that was analyzed.
        screenshot?: PagespeedApiImageV2,
        // Title of the page, as displayed in the browser's title bar.
        title?: string,
        // The version of PageSpeed used to generate these results.
        version?: {        
            // The major version number of PageSpeed used to generate these results.
            major?: number,
            // The minor version number of PageSpeed used to generate these results.
            minor?: number,
        },        
    }
    
    interface PagespeedapiResource {
        // Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.
        runpagespeed (request: {        
            // Indicates if third party resources should be filtered out before PageSpeed analysis.
            filter_third_party_resources?: boolean,
            // The locale used to localize formatted results
            locale?: string,
            // A PageSpeed rule to run; if none are given, all rules are run
            rule?: string,
            // Indicates if binary data containing a screenshot should be included
            screenshot?: boolean,
            // The analysis strategy to use
            strategy?: string,
            // The URL to fetch and analyze
            url: string,
        }) : gapi.client.Request<Result>;        
        
    }
    
}

declare module gapi.client.pagespeedonline {
    var pagespeedapi: gapi.client.pagespeedonline.PagespeedapiResource; 
    
}
