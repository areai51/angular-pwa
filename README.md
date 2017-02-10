# Angular Pwa

A reference app example for building  Progressive Web Apps using Angular.

## Setup

The application is built using Angular-CLI.

` $git clone https://github.com/areai51/angular-pwa.git`

`npm i`

`ng serve `

Navigate to `http://localhost:4200/`

## Features implemented
* App Shell model for root component
* Service worker Offline support using sw-toolbox
* Add to home screen and full screen mode using manifest.json

## To Do
* Push Notifications.
* Dynamically generate service worker file to include hashed js vendor and main bundles during webpack build process.
* oAuth using Firebase.