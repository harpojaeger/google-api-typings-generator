# Typescript typings for Google Sheets API
Reads and writes Google Sheets.
For detailed description please check [documentation](https://developers.google.com/sheets/).

## Installing

Install typings for Google Sheets API:
```
npm install @types/gapi.client.sheets-v4 --save-dev
```

## Usage

You need to initialize Google API client in your code:
```typescript
gapi.load("client", () => { 
    // now we can use gapi.client
    // ... 
});
```

Then load api client wrapper:
```typescript
gapi.client.load('sheets', 'v4', () => {
    // now we can use gapi.client.sheets
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage Google Drive files and folders that you have opened or created with this app
        'https://www.googleapis.com/auth/drive.file',
    
        // View your Google Spreadsheets
        'https://www.googleapis.com/auth/spreadsheets.readonly',
    
        // View the files in your Google Drive
        'https://www.googleapis.com/auth/drive.readonly',
    
        // View and manage the files in your Google Drive
        'https://www.googleapis.com/auth/drive',
    
        // View and manage your spreadsheets in Google Drive
        'https://www.googleapis.com/auth/spreadsheets',
    ],
    immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        /* handle succesfull authorization */
    } else {
        /* handle authorization error */
    }
});            
```

After that you can use Google Sheets API resources:

```typescript 
    
/* 
Applies one or more updates to the spreadsheet.

Each request is validated before
being applied. If any request is not valid then the entire request will
fail and nothing will be applied.

Some requests have replies to
give you some information about how
they are applied. The replies will mirror the requests.  For example,
if you applied 4 updates and the 3rd one had a reply, then the
response will have 2 empty replies, the actual reply, and another empty
reply, in that order.

Due to the collaborative nature of spreadsheets, it is not guaranteed that
the spreadsheet will reflect exactly your changes after this completes,
however it is guaranteed that the updates in the request will be
applied together atomically. Your changes may be altered with respect to
collaborator changes. If there are no collaborators, the spreadsheet
should reflect your changes.  
*/
await gapi.client.spreadsheets.batchUpdate({ spreadsheetId: "spreadsheetId",  }); 
    
/* 
Creates a spreadsheet, returning the newly created spreadsheet.  
*/
await gapi.client.spreadsheets.create({  }); 
    
/* 
Returns the spreadsheet at the given ID.
The caller must specify the spreadsheet ID.

By default, data within grids will not be returned.
You can include grid data one of two ways:

* Specify a field mask listing your desired fields using the `fields` URL
parameter in HTTP

* Set the includeGridData
URL parameter to true.  If a field mask is set, the `includeGridData`
parameter is ignored

For large spreadsheets, it is recommended to retrieve only the specific
fields of the spreadsheet that you want.

To retrieve only subsets of the spreadsheet, use the
ranges URL parameter.
Multiple ranges can be specified.  Limiting the range will
return only the portions of the spreadsheet that intersect the requested
ranges. Ranges are specified using A1 notation.  
*/
await gapi.client.spreadsheets.get({ spreadsheetId: "spreadsheetId",  });
```