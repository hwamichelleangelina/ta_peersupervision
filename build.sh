#!/bin/bash

# Enable error reporting and command display
set -e
set -x

# Print the current working directory and its contents
pwd
ls -la

# Install Flutter
FLUTTER_VERSION="3.19.6"
wget https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_${FLUTTER_VERSION}-stable.tar.xz
tar xf flutter_linux_${FLUTTER_VERSION}-stable.tar.xz
export PATH="$PATH:`pwd`/flutter/bin"

# Ensure Dart SDK is the correct version
DART_VERSION="3.0.5"
wget https://storage.googleapis.com/dart-archive/channels/stable/release/${DART_VERSION}/sdk/dartsdk-linux-x64-release.zip
unzip dartsdk-linux-x64-release.zip -d dart-sdk
export PATH="$PATH:`pwd`/dart-sdk/dart-sdk/bin"

# Verify Dart installation
dart --version

# Verify Flutter installation
flutter doctor

# Enable web support
flutter config --enable-web

# Get Flutter packages
flutter pub get

# Build Web
flutter build web --release --no-tree-shake-icons
