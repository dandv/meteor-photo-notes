# meteor-photo-notes

Sample Meteor app showing cross-platform photo taking. Instagram in 30 lines of JavaScript.

Uses the [mdg:camera](https://github.com/meteor/mobile-packages/tree/master/packages/mdg:camera) package.


## Demo

http://tidepool.meteor.com

## Features

* Take pictures from Chrome (works on desktop and Android, and may work on iOS with some caveats)

* Upload photo to cloud (visit the http://tidepool.meteor.com instance)

* Reverse chronological photo sorting

* The photostream is automatically synchronized across all connected clients - open http://tidepool.meteor.com in two browser tabs and take a new photo - it will instantly appear in both tabs. The sort order will also be kept.

* Responsive (photos automatically fit the browser viewport)

* If you run the app locally (`meteor run`) and change any of the source files, the change will automatically be reflected in all connected clients ("hot code push"). Try adding a CSS file to change the background.


## Hybrid mobile app

From this codebase, we can generate hybrid Android/iOS apps. First, [install Meteor](http://meteor.com/install).

To run this app in the iOS simulator on a Mac:

        meteor install-sdk ios
        meteor add-platform ios
        meteor run ios

To run it on an iOS device (requires Apple developer account): `meteor run ios-device`

It also works as a hybrid app on Android. To run it in the Android emulator:

        meteor install-sdk android
        meteor add-platform android
        meteor run android

To run the app on Android devices (make sure USB debugging is enabled and quit the Android emulator): `meteor run android-device`


## Meteor

To install Meteor: https://www.meteor.com/install

Tutorial for building a collaborative TODO list app in one hour with Meteor: https://www.meteor.com/try

Why choose Meteor in the first place: [Why Meteor?](http://wiki.dandascalescu.com/essays/why_meteor)


## Conclusion

Not bad for ~30 lines of JavaScript and ~15 lines of HTML.
