#!/bin/bash

# Enable error reporting and command display
set -e
set -x

# Print the current working directory and its contents
pwd
ls -la

# Install Flutter
FLUTTER_VERSION="3.10.5"
wget https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_${FLUTTER_VERSION}-stable.tar.xz
tar xf flutter_linux_${FLUTTER_VERSION}-stable.tar.xz
export PATH="$PATH:`pwd`/flutter/bin"

# Verify Flutter installation
flutter doctor

# Ensure Dart SDK is the correct version
DART_VERSION="3.3.2"
wget https://storage.googleapis.com/dart-archive/channels/stable/release/${DART_VERSION}/sdk/dartsdk-linux-x64-release.zip
unzip dartsdk-linux-x64-release.zip -d dart-sdk
export PATH="$PATH:`pwd`/dart-sdk/dart-sdk/bin"

# Verify Dart installation
dart --version

# Enable web support
flutter config --enable-web

# Build Web
flutter pub get
flutter build web --release --no-tree-shake-icons
