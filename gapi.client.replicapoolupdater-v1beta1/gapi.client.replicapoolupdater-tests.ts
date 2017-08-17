/* This is stub file for gapi.client.replicapoolupdater definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('replicapoolupdater', 'v1beta1', () => {
        // now we can use gapi.client.replicapoolupdater
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // View and manage your data across Google Cloud Platform services
                'https://www.googleapis.com/auth/cloud-platform',
            
                // View your data across Google Cloud Platform services
                'https://www.googleapis.com/auth/cloud-platform.read-only',
            
                // View and manage replica pools
                'https://www.googleapis.com/auth/replicapool',
            
                // View replica pools
                'https://www.googleapis.com/auth/replicapool.readonly',
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
        Cancels an update. The update must be PAUSED before it can be cancelled. This has no effect if the update is already CANCELLED.  
        */
        await gapi.client.rollingUpdates.cancel({ project: "project", rollingUpdate: "rollingUpdate", zone: "zone",  }); 
    
        /* 
        Returns information about an update.  
        */
        await gapi.client.rollingUpdates.get({ project: "project", rollingUpdate: "rollingUpdate", zone: "zone",  }); 
    
        /* 
        Inserts and starts a new update.  
        */
        await gapi.client.rollingUpdates.insert({ project: "project", zone: "zone",  }); 
    
        /* 
        Lists recent updates for a given managed instance group, in reverse chronological order and paginated format.  
        */
        await gapi.client.rollingUpdates.list({ project: "project", zone: "zone",  }); 
    
        /* 
        Lists the current status for each instance within a given update.  
        */
        await gapi.client.rollingUpdates.listInstanceUpdates({ project: "project", rollingUpdate: "rollingUpdate", zone: "zone",  }); 
    
        /* 
        Pauses the update in state from ROLLING_FORWARD or ROLLING_BACK. Has no effect if invoked when the state of the update is PAUSED.  
        */
        await gapi.client.rollingUpdates.pause({ project: "project", rollingUpdate: "rollingUpdate", zone: "zone",  }); 
    
        /* 
        Continues an update in PAUSED state. Has no effect if invoked when the state of the update is ROLLED_OUT.  
        */
        await gapi.client.rollingUpdates.resume({ project: "project", rollingUpdate: "rollingUpdate", zone: "zone",  }); 
    
        /* 
        Rolls back the update in state from ROLLING_FORWARD or PAUSED. Has no effect if invoked when the state of the update is ROLLED_BACK.  
        */
        await gapi.client.rollingUpdates.rollback({ project: "project", rollingUpdate: "rollingUpdate", zone: "zone",  }); 
    
        /* 
        Retrieves the specified zone-specific operation resource.  
        */
        await gapi.client.zoneOperations.get({ operation: "operation", project: "project", zone: "zone",  }); 
    
        /* 
        Retrieves the list of Operation resources contained within the specified zone.  
        */
        await gapi.client.zoneOperations.list({ project: "project", zone: "zone",  });
    }
});
