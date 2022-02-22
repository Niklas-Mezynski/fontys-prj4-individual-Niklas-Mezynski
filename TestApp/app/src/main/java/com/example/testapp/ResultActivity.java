package com.example.testapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.MenuItem;

import com.google.android.material.navigation.NavigationBarView;

public class ResultActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_result);

        NavigationBarView bottomNav = findViewById(R.id.bottomNavigationView);
//        bottomNav.setOnItemSelectedListener(this::handleMenuSelection);
    }

//    private boolean handleMenuSelection(MenuItem item) {
//        if (item.getItemId() == R.id.menu_stats) {
//            //Open stats section
////            setContentView(R.layout.activity_main);
//            return true;
//        } else if (item.getItemId() == R.id.menu_results) {
//            //Open result section
////            startActivity(new Intent(this, ResultActivity.class));
//            return true;
//        } else {
//            //Open table
//            finish();
//            return true;
//        }
//    }
}