(function (window, k) {
    if (!window.AppstleIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
            script.defer = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
            document.getElementsByTagName("body")[0].appendChild(script)
      };


      appstleLoadScript("https://cdn.shopify.com/s/files/1/0016/5914/2189/t/58/assets/appstle-subscription.js?v=1692038564");


      window.RS = Window.RS || {};
      RS.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "#view_address",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "AFTER",
            "cartRowSelector": "",
            "cartLineItemSelector": "",
            "cartLineItemPerQuantityPriceSelector": "",
            "cartLineItemTotalPriceSelector": "",
            "cartLineItemSellingPlanNameSelector": "",
            "cartSubTotalSelector" : "",
            "cartLineItemPriceSelector": "",
        },
        "enableCartWidgetFeature": "false",
        "useUrlWithCustomerId": "false",
        "atcButtonSelector": "",
        "moneyFormat": "{% raw %}<span class=money>${{amount}}<\/span>{% endraw %}",
        "oneTimePurchaseText": "One Time Purchase",
        "shop": "freetheroots.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "Purchase Options",
        "manageSubscriptionButtonText": "Manage Subscription",
        "subscriptionOptionText": "Subscribe and save",
        "sellingPlanSelectTitle": "DELIVERY FREQUENCY",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Subscription detail ",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>\u00A0Have complete control of your subscriptions<\/strong><br\/><p>Skip, reschedule, edit, cancel deliveries anytime matching your needs.<\/p>",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{totalPrice}} ( Price for every delivery: {{pricePerDelivery}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Subscription",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your subscriptions. Please use the same email address that you used to buy the subscription.",
        "orderStatusManageSubscriptionButtonText": "Manage your subscription",
        "subscriptionOptionSelectedByDefault" : false,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}\/delivery",
        "memberOnlySellingPlansJson": {},
        "nonMemberOnlySellingPlansJson": {},
        "sellingPlansJson": [{"frequencyCount":1,"frequencyInterval":"MONTH","billingFrequencyCount":1,"billingFrequencyInterval":"MONTH","frequencyName":"Monthly","discountOffer":12.0,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/423428157","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"minCycles":1,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/423428157","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"formFieldJson":"null","frequencySequence":0,"groupName":"Basic","appstleCycles":[]},{"frequencyCount":2,"frequencyInterval":"WEEK","billingFrequencyCount":2,"billingFrequencyInterval":"WEEK","frequencyName":"Every 2 Weeks","discountOffer":16.0,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/423526461","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"minCycles":1,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/423526461","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"formFieldJson":"null","frequencySequence":1,"groupName":"Basic","appstleCycles":[]},{"frequencyCount":1,"frequencyInterval":"WEEK","billingFrequencyCount":1,"billingFrequencyInterval":"WEEK","frequencyName":"Weekly","discountOffer":18.0,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/423559229","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"minCycles":1,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/423559229","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"formFieldJson":"null","frequencySequence":2,"groupName":"Basic","appstleCycles":[]},{"frequencyCount":2,"frequencyInterval":"MONTH","billingFrequencyCount":2,"billingFrequencyInterval":"MONTH","frequencyName":"Every 2 Months","discountOffer":10.0,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/444923965","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/444923965","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"formFieldJson":"null","frequencySequence":3,"groupName":"Basic","appstleCycles":[]},{"frequencyCount":2,"frequencyInterval":"WEEK","billingFrequencyCount":2,"billingFrequencyInterval":"WEEK","frequencyName":"Bi-Weekly","discountOffer":20.0,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/705855549","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/705855549","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"formFieldJson":"null","frequencySequence":0,"groupName":"ACCR","appstleCycles":[]},{"frequencyCount":1,"frequencyInterval":"MONTH","billingFrequencyCount":1,"billingFrequencyInterval":"MONTH","frequencyName":"Monthly","discountOffer":18.0,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/705888317","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/705888317","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"formFieldJson":"null","frequencySequence":1,"groupName":"ACCR","appstleCycles":[]},{"frequencyCount":2,"frequencyInterval":"MONTH","billingFrequencyCount":2,"billingFrequencyInterval":"MONTH","frequencyName":"Every 2 Months","discountOffer":15.0,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/705921085","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/705921085","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"formFieldJson":"null","frequencySequence":2,"groupName":"ACCR","appstleCycles":[]}],
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": false,
        "sellingPlanTitleText" : "{{sellingPlanName}} ({{sellingPlanPrice}}\/delivery)",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : "{{pricePerDelivery}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/subscriptions' class='appstle_manageSubBtn' ><button class='btn' style='padding: 9px 21px; margin-top: 20px; display: flex; flex-direction: column;'>Manage Subscription<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/subscriptions",
        "appstlePlanId": 149,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": true,
        "widgetEnabledOnSoldVariant": "false",
        "switchRadioButtonWidget": true,
        "appstlePlanName": "ENTERPRISE",
        "appstlePlanFeatures": {"accessSplitContract":true,"enableExternalApi":true,"enableQuickActions":true,"enableDunningManagement":true,"enableAutoSync":true,"accessSubscriptionActivityLogs":true,"webhookAccess":false,"accessBundling":true,"analytics":true,"enableCustomEmailHtml":true,"accessAppstleMenu":false,"enableShippingProfiles":true,"accessKlaviyoContactSync":true,"accessCustomWidgetLocations":true,"accessAdvanceSubscriptionPlanOptions":true,"enableSmsAlert":true,"accessOneTimeProductUpsells":true,"accessQuickCheckout":true,"enableCustomEmailDomain":true,"enableSummaryReports":true,"accessManualSubscriptionCreation":true,"subscriptionOrderAmount":100000,"enableSubscriptionManagement":true,"enableAutomation":true,"enableBundling":true,"accessResendEmail":true,"enableCartWidget":true,"accessDiscountOnCancellationAttempt":true,"accessWidgetDesignOptions":true,"enableCancellationManagement":true,"accessSubscriberLoyaltyFeatures":true,"enableWidgetPlacement":true,"enableIntegrations":true,"enableCustomerPortalSettings":true,"enableProductSwapAutomation":true,"enableAdvancedSellingPlans":true,"accessBuildABox":true},
        "formMappingAttributeName": "",
        "formMappingAttributeSelector": "",
        "quickViewModalPollingSelector": "",
        "scriptLoadDelay": "0",
        "formatMoneyOverride": "false",
        "appstle_app_proxy_path_prefix": "apps\/subscriptions",
        "updatePriceOnQuantityChange": "",
        "widgetParentSelector": "",
        "quantitySelector": "",
        "enableAddJSInterceptor": "false",
        "reBuyEnabled": "false",
        "loyaltyDetailsLabelText": "",
        "loyaltyPerkDescriptionText": "",
        "widgetType": "WIDGET_TYPE_1",
        "widgetTemplateHtml": `{% raw %}{% endraw %}`,
        "bundle": {},
        "labels": "{\"appstle.subscription.wg.yearsFrequencyTextV2\":\"Years\",\"appstle.subscription.wg.weekFrequencyTextV2\":\"Week\",\"appstle.subscription.wg.noSubscriptionLabelTextV2\":\"No Subscription\",\"appstle.subscription.wg.cancelAnytimeLabelTextV2\":\"Cancel Anytime\",\"appstle.subscription.wg.oneTimePurchaseTextV2\":\"One Time Purchase\",\"appstle.subscription.wg.loyaltyPerkDescriptionTextV2\":\"{{#isDiscountTypeFreeProduct}}<div style='display: flex;'><div style='height: 60px; width: 60px; flex-shrink: 0; margin-right: 10px;'><img style='width: 100%' src={{{featured_image}}}><\/img><\/div><div>After {{{billingCycleBlock}}} orders,<span style='color: #ffc000;font-weight: 700;';> get a FREE {{freeProductName}} <\/span><\/div><div>{{\/isDiscountTypeFreeProduct}}{{#isDiscountTypePercentage}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{discount}}}% OFF your entire order<\/span><\/span>.{{\/isDiscountTypePercentage}}{{#isDiscountTypeShipping}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>shipping at {{{formatDiscountedPrice}}}<\/span><\/span>.{{\/isDiscountTypeShipping}}{{#isDiscountTypeFixed}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{formatDiscountedPrice}}} OFF your entire order<\/span><\/span>.{{\/isDiscountTypeFixed}}\",\"appstle.subscription.wg.unsubscribeFrequencyTextV2\":\"unsubscribe\",\"appstle.subscription.wg.weeksFrequencyTextV2\":\"Weeks\",\"appstle.subscription.wg.weeklyLabelTextV2\":\"Weekly\",\"appstle.subscription.wg.oneTimeFrequencyTextV2\":\"One Time\",\"appstle.subscription.wg.dayFrequencyTextV2\":\"day\",\"appstle.subscription.wg.allowFulfilmentCountViaPropertiesV2\":\"true\",\"appstle.subscription.wg.monthsFrequencyTextV2\":\"Months\",\"appstle.subscription.wg.subscribeAndSaveInitalV2\":\"Subscribe & save\",\"appstle.subscription.wg.deliveryEveryFrequencyTextV2\":\"Delivery Every\",\"appstle.subscription.wg.offFrequencyTextV2\":\"Off\",\"appstle.subscription.wg.daysFrequencyTextV2\":\"Days\",\"appstle.subscription.wg.yearFrequencyTextV2\":\"Year\",\"appstle.subscription.wg.monthlyLabelTextV2\":\"Monthly\",\"appstle.subscription.wg.prepayLabelTextV2\":\"Prepay\",\"appstle.subscription.wg.subscribeAndSaveSuccessV2\":\"Subscribe success\",\"appstle.subscription.wg.monthFrequencyTextV2\":\"Month\",\"appstle.subscription.wg.selectDeliverOptionV2\":\"select deliver option\",\"appstle.subscription.wg.yearlyLabelTextV2\":\"Yearly\"}",
        "css": {
            "appstle_subscription_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_subscription_wrapper": {
                "border-width": "",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "solid",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_subscription_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "#appstle_subscription_widget0 .appstle_subscription_wrapper .appstle_select {\nappearance: auto;\n}\n\n#appstle_subscription_widget0 .appstle_subscription_wrapper .appstle_select {\ncolor: inherit;\n}\n\n.product__price-and-badge {\ndisplay: inline-block!important;\n}",
            "elementCSS": "[]",
            "customerPortalCss": "",
            "priceSelector": "div.product__price-and-badge, #price > span.current-price.theme-money, span > button > span:nth-child(3)",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE"
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);

