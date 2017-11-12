export const chartSetting = {
	width: 740,
    height: 800,
    total: 'Total',
    grandTotal: 'Grand Total',
    apiUrl: '/static/sydney-trains-offences.json',
    buttons: ['Number of PNs', 'Face Values'],
    useCurrencySign: ['Face Values'],
    currencySign: '$',
    axisCurrencySign: '$ (AUD)',
	c3Setting: {
		type: 'bar'
    },
    c3Size: {
        width: 740, 
        height:480
    },
    c3Title: {
        text: 'Sydney Trains service and property offences'
    },
	c3SetAxis:  {
        x : {
            type: 'category',
            categories:  []
        },
        y : {
            tick: {},
            label: {
                text: ''
            }
        }
    }
}