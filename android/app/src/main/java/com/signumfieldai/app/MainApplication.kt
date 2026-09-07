package com.signumfieldai.app

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader

class MainApplication : Application(), ReactApplication {
  override val reactNativeHost: ReactNativeHost = object : DefaultReactNativeHost(this) {
    override fun getUseDeveloperSupport() = BuildConfig.DEBUG
    override fun getPackages(): List<ReactPackage> = PackageList(this).packages
    override fun getJSMainModuleName() = "index"
    override val isNewArchEnabled = true
    override val isHermesEnabled = true
  }

  override fun onCreate() {
    super.onCreate()
    SoLoader.init(this, false)
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) load()
  }
}
