define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'ivr',
                component: 'Burst_Ivr/js/view/payment/method-renderer/ivr'
            }
        );
        return Component.extend({});
    }
);