#!/bin/bash

#!/bin/bash

# Install Flutter
wget https://storage.googleapis.com/flutter_infra/releases/stable/linux/flutter_linux_2.10.4-stable.tar.xz
tar xf flutter_linux_2.10.4-stable.tar.xz
export PATH="$PATH:`pwd`/flutter/bin"

# Check Flutter version
flutter --version

# Enable web support
flutter config --enable-web

# Build Web
flutter doctor
flutter pub get
flutter build web --release --no-tree-shake-icons