#!/bin/bash

# Enable error reporting and command display
set -e
set -x

# Print the current working directory and its contents
pwd
ls -la

# Install Flutter
FLUTTER_VERSION="3.7.0"
wget https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_${FLUTTER_VERSION}-stable.tar.xz
tar xf flutter_linux_${FLUTTER_VERSION}-stable.tar.xz
export PATH="$PATH:`pwd`/flutter/bin"

# Check Flutter version
flutter --version

# Enable web support
flutter config --enable-web

# Build Web
flutter doctor
flutter pub get
flutter build web --release --no-tree-shake-icons