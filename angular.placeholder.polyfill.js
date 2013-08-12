(function () {
    'use strict';

    angular.module('app')
        .directive('placeholder', ['$timeout', function ($timeout) {
            return function(scope, el, attrs){
                var settings = {
                        cssClass : 'placeholder',
                        excludedAttrs : ['placeholder', 'name', 'id', 'ng-model', 'type']
                    },
                    placeholderText = attrs.placeholder,
                    isPassword = attrs.type === 'password',
                    hasNativeSupport = 'placeholder' in document.createElement('input') && 'placeholder' in document.createElement('textarea'),
                    setPlaceholder, removePlaceholder, copyAttrs, fakePassword;

                if(hasNativeSupport) return;

                copyAttrs = function() {
                    var a = {};
                    var exclude = settings.excludedAttrs;
                    $.each(attrs.$attr, function (i, attrName) {
                        if (!~$.inArray(attrName, exclude)) {
                            a[attrName] = attrs[attrName];
                        }
                    });
                    return a;
                };

                var createFakePassword = function(){
                    return $('<input>', $.extend(copyAttrs(), {
                        'type': 'text',
                        'value': placeholderText
                    }))
                        .addClass(settings.cssClass)
                        .bind('focus', function () {
                            removePlaceholder();
                        })
                        .insertBefore(el);
                };

                if (isPassword) {
                    fakePassword = createFakePassword();
                    setPlaceholder = function(){
                        if(!el.val()){
                            fakePassword.show();
                            el.hide();
                        }
                    };
                    removePlaceholder = function(){
                        if(fakePassword.is(':visible')) {
                            fakePassword.hide();
                            el.show().focus();
                        }
                    }; 
                } else {
                    setPlaceholder = function(){
                        if(!el.val()){
                            el.val(placeholderText);
                            el.addClass(settings.cssClass);
                        }
                    };

                    removePlaceholder = function(){
                        if (el.hasClass(settings.cssClass)) {
                            el.val('');
                            el.removeClass(settings.cssClass);
                        }
                    };
                }

                el.on('focus', removePlaceholder).on('blur', setPlaceholder);
                $timeout(function(){
                    el.trigger('blur');
                }, 0);
                
                
                scope.$watch(attrs.ngModel, function(value) {
                    if(value == ''){
                        if(!el.is(':focus')) el.trigger('blur')
                    } else {
                        if(el.hasClass(settings.cssClass)) el.removeClass(settings.cssClass)
                    }
                });

            }
        }]);
}());