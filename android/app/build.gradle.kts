plugins {
  id("com.android.application")
  id("com.facebook.react")
}

android {
  namespace = "com.signumfieldai.app"
  compileSdk = 35

  defaultConfig {
    applicationId = "com.signumfieldai.app"
    minSdk = 24
    targetSdk = 35
    versionCode = 1
    versionName = "1.0.0"
  }
}

react {
  autolinkLibrariesWithApp()
}

repositories { google(); mavenCentral() }

