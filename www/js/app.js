


Ext.define('App.view.MainPage' ,{
    extend: 'Ext.Container',
    alias : 'widget.mainPage',
    id:'MainPage',

    config: {
        items:[
            {
                xtype:'toolbar',
//                style:'background:#30b457',
                title:'Settings',
                items:[{
                    xtype:'button',
                    text:'Back',
                    ui:'back',
                    listeners: {
                        tap: function() {
                            App.app.dispatch({
                                controller:'PageController',
                                action:'goPage',
                                args:[{nextPage:1, direction:'right'}]
                            });
                        }
                    }
                }]
            },{
                html: '<div class="page"><br><br>Page content</div>'
            }
        ]
    }

});


var appInit = function() {
    if (initflag==true) return;

    Ext.application({
        name: 'App',

        launch: function() {

            Ext.create('Ext.Panel', {
                id:'panelHolder',
                fullscreen: true,
                layout: 'card',
                activeItem: 0,
                items: [ {
                    xtype:'mainPage'
                } ]
            });

        }
    });
};

var initflag = false;
var onDeviceReady = function() {
    appInit();
    initflag = true;
    window.onload = function(){};
};

document.addEventListener('deviceready', onDeviceReady, false);
window.onload=function(){
    setTimeout( onDeviceReady, 1000 );
};