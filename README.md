# Capacitor.js Android & iOS Setup Guide

This guide walks you through setting up and running a Capacitor.js application on Android and iOS platforms.

## Overview

[Capacitor](https://capacitorjs.com/) is a cross-platform native runtime that makes it easy to build web apps that run natively on iOS, Android, and the web. This README provides step-by-step instructions to get your Capacitor app running on mobile devices.

## Prerequisites

- Node.js (12.x+) and npm (6.x+)
- For iOS development:
  - macOS
  - Xcode (latest stable version)
  - CocoaPods (`sudo gem install cocoapods`)
- For Android development:
  - [Android Studio](https://developer.android.com/studio)
  - Java JDK 11+
  - Gradle

## Installation

### 1. Create or use an existing web application

```bash
# If starting a new project
npm init @capacitor/app

# Or use an existing project
cd your-existing-project
```

### 2. Add Capacitor to your project

```bash
# Install Capacitor core and CLI
npm install @capacitor/core @capacitor/cli

# Initialize Capacitor with your app information
npx cap init [appName] [appId]
# Example: npx cap init "My App" com.example.myapp
```

### 3. Install platform-specific packages

```bash
# Add Android and iOS platforms
npm install @capacitor/android
npm install @capacitor/ios
```

### 4. Add native platforms to your project

```bash
# Add Android
npx cap add android

# Add iOS
npx cap add ios
```

## Configuration

### Configure Android

1. Open `android/app/src/main/AndroidManifest.xml` to customize app permissions
2. Modify `android/app/build.gradle` for dependencies and settings
3. Edit `capacitor.config.json` to configure app settings

### Configure iOS

1. Open `ios/App/App/Info.plist` for app permissions and settings
2. Adjust `capacitor.config.json` for iOS-specific configurations

## Building Your App

Ensure your web assets are built and ready:

```bash
# Build your web app (example - adjust according to your framework)
npm run build
```

Then copy the web assets to the native projects:

```bash
npx cap copy
```

## Running Your App

### Android

```bash
# Open Android Studio with the project
npx cap open android

# Or sync and run directly
npx cap sync android
npx cap run android
```

### iOS

```bash
# Open Xcode with the project
npx cap open ios

# Or sync and run directly
npx cap sync ios
npx cap run ios
```

## Live Reload During Development

Enable live reload for faster development:

```bash
npx cap run android -l --external
# or
npx cap run ios -l --external
```

## Common Issues & Troubleshooting

- **Plugin Not Found**: Make sure to run `npx cap sync` after installing new plugins
- **Build Errors**: Check for compatibility between Capacitor version and plugins
- **iOS Build Fails**: Run `pod install` in the `ios/App` directory
- **Android Gradle Issues**: Update Gradle version in `android/gradle/wrapper/gradle-wrapper.properties`

## Updating Capacitor

```bash
npm install @capacitor/core@latest @capacitor/cli@latest
npm install @capacitor/android@latest @capacitor/ios@latest
npx cap sync
```

## Useful Commands

```bash
# List available devices
npx cap run android --list
npx cap run ios --list

# Target a specific device
npx cap run android --target=Pixel_4_API_30
npx cap run ios --target="iPhone 12"
```

## Resources

- [Official Capacitor Documentation](https://capacitorjs.com/docs)
- [Capacitor GitHub Repository](https://github.com/ionic-team/capacitor)
- [Capacitor Community Plugins](https://github.com/capacitor-community)

## License

This project is licensed under the MIT License - see your project's LICENSE file for details.
