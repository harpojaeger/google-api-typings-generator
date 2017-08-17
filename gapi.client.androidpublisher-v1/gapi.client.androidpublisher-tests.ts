/* This is stub file for gapi.client.androidpublisher definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('androidpublisher', 'v1', () => {
        // now we can use gapi.client.androidpublisher
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // View and manage your Google Play Developer account
                'https://www.googleapis.com/auth/androidpublisher',
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
        Cancels a user's subscription purchase. The subscription remains valid until its expiration time.  
        */
        await gapi.client.purchases.cancel({ packageName: "packageName", subscriptionId: "subscriptionId", token: "token",  }); 
    
        /* 
        Checks whether a user's subscription purchase is valid and returns its expiry time.  
        */
        await gapi.client.purchases.get({ packageName: "packageName", subscriptionId: "subscriptionId", token: "token",  });
    }
});
