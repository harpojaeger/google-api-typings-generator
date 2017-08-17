/* This is stub file for gapi.client.civicinfo definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('civicinfo', 'v2', () => {
        // now we can use gapi.client.civicinfo
  
        run();

    });

    async function run() {  
    
        /* 
        Searches for political divisions by their natural name or OCD ID.  
        */
        await gapi.client.divisions.search({  }); 
    
        /* 
        List of available elections to query.  
        */
        await gapi.client.elections.electionQuery({  }); 
    
        /* 
        Looks up information relevant to a voter based on the voter's registered address.  
        */
        await gapi.client.elections.voterInfoQuery({ address: "address",  }); 
    
        /* 
        Looks up political geography and representative information for a single address.  
        */
        await gapi.client.representatives.representativeInfoByAddress({  }); 
    
        /* 
        Looks up representative information for a single geographic division.  
        */
        await gapi.client.representatives.representativeInfoByDivision({ ocdId: "ocdId",  });
    }
});
