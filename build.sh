#!/bin/bash

# Install Flutter
git clone https://github.com/flutter/flutter.git -b stable --depth 1
export PATH="$PATH:`pwd`/flutter/bin"

# Check Flutter version
flutter --version

# Enable web support
flutter config --enable-web

# Get dependencies
flutter pub get

# Build the project
flutter build web --no-tree-shake-icons