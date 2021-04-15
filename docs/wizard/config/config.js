export default {
    clientID: 'd7501314-e8af-40f5-ab32-228bc6259736',

    // 'wizardUriBase': 'http://localhost:8080/wizard/',
    wizardUriBase: 'https://nebojsaradovanovic.github.io/docs/wizard/',

    // The actual URL of the landing page of your web app.
    // 'premiumAppURL': 'http://localhost:8080/premium-app-sample/index.html',
    //premiumAppURL: 'https://nebojsaradovanovic.github.io/docs/premium-app-sample/index.html',
    premiumAppURL: 'https://www.startelecom.ca/genesys-cloud-contact-centre/',

    // Genesys Cloud assigned name for the premium app
    // This should match the integration type name of the Premium App
    // NOTE: During initial development please use ‘premium-app-example’.
    //            Once your premium app is approved an integration type will be created
    //            by the Genesys Cloud product team and you can update the name at that time.
    appName: 'premium-app-example',

    // Default Values for fail-safe/testing. Shouldn't have to be changed since the app
    // must be able to determine the environment from the query parameter 
    // of the integration's URL
    defaultPcEnvironment: 'mypurecloud.com',
    defaultLanguage: 'en-us',

    // The names of the query parameters to check in 
    // determining language and environment
    // Ex: www.electric-sheep-app.com?language=en-us&environment=mypurecloud.com
    languageQueryParam: 'language',
    genesysCloudEnvironmentQueryParam: 'environment',

    // Permissions required for running the Wizard App
    setupPermissionsRequired: ['admin'],

    // Enable Custome Setup Page
    enableCustomSetup: false,

    // To be added to names of Genesys Cloud objects created by the wizard
    prefix: 'StarTelecom_',

    // These are the Genesys Cloud items that will be added and provisioned by the wizard
    provisioningInfo: {
        'role': [
            {
                'name': 'Role',
                'description': 'Generated role for access to the app.',
                'permissionPolicies': [
                    {
                        'domain': 'integration',
                        'entityName': 'examplePremiumApp',
                        'actionSet': ['*'],
                        'allowConditions': false
                    }
                ]
            }
        ]
    }
};
