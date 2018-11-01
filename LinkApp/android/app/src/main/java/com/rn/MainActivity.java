package com.rn;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen; // 启动页设置添加代码
import android.content.pm.PackageManager;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.widget.Toast;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "RN";
    }

    /**
      * 设置启动页ActivityCompat.requestPermissions(this, new String[]{android.Manifest.permission.WRITE_EXTERNAL_STORAGE}, 1);
    */
      @Override
       protected void onCreate(Bundle savedInstanceState) {
            SplashScreen.show(this, R.style.SplashScreenTheme);  // 展示启动页设置代码
            super.onCreate(savedInstanceState);
        }
}
