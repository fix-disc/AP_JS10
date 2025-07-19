/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    var permissions = cordova.plugins.permissions;

    permissions.checkPermission(permissions.READ_PHONE_STATE, function(status) {
    if (!status.hasPermission) {
        permissions.requestPermission(permissions.READ_PHONE_STATE, success, error);
    } else {
        // Permission already granted, proceed to read phone information
        // Example: Get phone number using cordova-plugin-device
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.device.getLine1Number) {
        window.cordova.plugins.device.getLine1Number(function(result) {
            console.log("Phone number: " + result);
        }, function(error) {
            console.log("Error getting phone number: " + error);
        });
        }
    }
    }, error);



    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    //window.plugins.phonenumber.get(success, failed);
    //console.log("My number is " + phonenumber);
    //window.plugins.sim.requestReadPermission(successCallback, errorCallback);
    //window.plugins.sim.getSimInfo(get_info, error_info);

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.device) {
        var device = window.cordova.plugins.device;
        console.log("Device UUID: " + device.uuid);
        alert("Device UUID: " + device.uuid);
        console.log("Device Model: " + device.model);
        console.log("Device Platform: " + device.platform);

        // Get phone number (Android only, and may be unavailable)
        if (device.getLine1Number) {
        device.getLine1Number(function(result) {
            console.log("Phone number: " + result);
        }, function(error) {
            console.log("Error getting phone number: " + error);
        });
        }
    }



}

    function successCallback(result) {
        alert(result);
    }

    function errorCallback(error) {
        alert(error);
    }


    function get_info(result) {
        alert(result);
    }

    function error_info(error) {
        alert(error);
    }

    function success() {
        console.log("Permission granted");
        // Proceed to read phone information
    }

    function error(error) {
        console.log("Error requesting permission: " + error);
    }

document.addEventListener('DOMContentLoaded', function() {
    var logo = document.getElementById('main-logo');
    var logoContainer = document.getElementById('logo-container');
    var welcomeModal = document.getElementById('welcome-modal');
    var loginBtn = document.getElementById('login-btn');
    var registerBtn = document.getElementById('register-btn');
    var closeBtn = document.getElementById('close-welcome');
    var clickHint = document.getElementById('click-hint');

    if (logo) {
        logo.addEventListener('click', function() {
            logoContainer.classList.add('moved');
            if (clickHint) clickHint.style.display = 'none';
            setTimeout(function() {
                welcomeModal.classList.remove('hidden');
                setTimeout(function() {
                    welcomeModal.classList.add('show');
                }, 10);
            }, 600);
        });
    }
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            window.location.href = 'register.html';
        });
    }

    function resetToInitialState() {
        logoContainer.classList.remove('moved');
        welcomeModal.classList.remove('show');
        setTimeout(function() {
            welcomeModal.classList.add('hidden');
            if (clickHint) clickHint.style.display = '';
        }, 500);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', resetToInitialState);
    }

    // Cerrar modal al hacer click fuera del div de bienvenida
    if (welcomeModal) {
        welcomeModal.addEventListener('click', function(e) {
            if (e.target === welcomeModal) {
                resetToInitialState();
            }
        });
    }
});



