/* This is stub file for gapi.client.admin definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('admin', 'datatransfer_v1', () => {
        // now we can use gapi.client.admin
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // View and manage data transfers between users in your organization
                'https://www.googleapis.com/auth/admin.datatransfer',
            
                // View data transfers between users in your organization
                'https://www.googleapis.com/auth/admin.datatransfer.readonly',
            ];
        const immediate = true;

        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /* handle succesfull authorization */
                run();
            } else {
                /* handle authorization error */
            }
        }); 
    });

    async function run() {  
    
        /* 
        Retrieves information about an application for the given application ID.  
        */
        await gapi.client.applications.get({ applicationId: "applicationId",  }); 
    
        /* 
        Lists the applications available for data transfer for a customer.  
        */
        await gapi.client.applications.list({  }); 
    
        /* 
        Retrieves a data transfer request by its resource ID.  
        */
        await gapi.client.transfers.get({ dataTransferId: "dataTransferId",  }); 
    
        /* 
        Inserts a data transfer request.  
        */
        await gapi.client.transfers.insert({  }); 
    
        /* 
        Lists the transfers for a customer by source user, destination user, or status.  
        */
        await gapi.client.transfers.list({  });
    }
});
