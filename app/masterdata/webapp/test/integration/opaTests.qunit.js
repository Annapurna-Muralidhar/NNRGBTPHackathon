sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'masterdata/test/integration/FirstJourney',
		'masterdata/test/integration/pages/Business_PartnerList',
		'masterdata/test/integration/pages/Business_PartnerObjectPage'
    ],
    function(JourneyRunner, opaJourney, Business_PartnerList, Business_PartnerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('masterdata') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBusiness_PartnerList: Business_PartnerList,
					onTheBusiness_PartnerObjectPage: Business_PartnerObjectPage
                }
            },
            opaJourney.run
        );
    }
);