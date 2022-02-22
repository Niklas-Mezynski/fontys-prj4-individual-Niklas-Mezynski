package com.example.testapp;

import android.content.Intent;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.NavigationUI;

import com.example.testapp.Entities.BPLTeam;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.android.material.navigation.NavigationBarView;

import java.util.Comparator;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private TableLayout table;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        this.table = findViewById(R.id.tableLayout);
        NavigationBarView bottomNav = findViewById(R.id.bottomNavigationView);
        NavController navController = Navigation.findNavController(this, R.id.fragmentContainerView);
        NavigationUI.setupWithNavController(bottomNav, navController);
//        bottomNav.setOnItemSelectedListener(this::handleMenuSelection);

        fillTable();
    }

    private void fillTable() {
        TableRow tableRow = new TableRow(this);

        TextView textView = new TextView(this);
        textView.setText(R.string.teamName);
        textView.setPaddingRelative(15, 15, 15, 15);
        tableRow.addView(textView);

        textView = new TextView(this);
        textView.setText(R.string.points);
        textView.setPaddingRelative(15, 15, 15, 15);
        tableRow.addView(textView);

        textView = new TextView(this);
        textView.setText(R.string.diff);
        textView.setPaddingRelative(15, 15, 15, 15);
        tableRow.addView(textView);

        textView = new TextView(this);
        textView.setText(R.string.gamesPlayed);
        textView.setPaddingRelative(15, 15, 15, 15);
        tableRow.addView(textView);

        table.addView(tableRow);

        List<BPLTeam> bplTeamList = BPLTeam.getSampleList();
        bplTeamList.sort(Comparator.reverseOrder());
        for (int i = 0; i < bplTeamList.size(); i++) {
            View horizontalLine = new View(this);
            horizontalLine.setBackgroundColor(getResources().getColor(R.color.light_grey_2));
            horizontalLine.setMinimumHeight(8);
            table.addView(horizontalLine);

            tableRow = new TableRow(this);
            BPLTeam bplTeam = bplTeamList.get(i);

            textView = new TextView(this);
            textView.setText(bplTeam.getName());
            textView.setPaddingRelative(15, 15, 15, 15);
            textView.setBackgroundColor(getResources().getColor(R.color.col_1));
            tableRow.addView(textView);

            textView = new TextView(this);
            textView.setText(String.valueOf(bplTeam.getPoints()));
            textView.setPaddingRelative(15, 15, 15, 15);
            textView.setBackgroundColor(getResources().getColor(R.color.col_2));
            tableRow.addView(textView);

            textView = new TextView(this);
            textView.setText(String.valueOf(bplTeam.getDiff()));
            textView.setPaddingRelative(15, 15, 15, 15);
            textView.setBackgroundColor(getResources().getColor(R.color.col_1));
            tableRow.addView(textView);

            textView = new TextView(this);
            textView.setText(String.valueOf(bplTeam.getGamesPlayed()));
            textView.setPaddingRelative(15, 15, 15, 15);
            textView.setBackgroundColor(getResources().getColor(R.color.col_2));
            tableRow.addView(textView);

            table.addView(tableRow);
        }
        table.setStretchAllColumns(true);
    }

//    private boolean handleMenuSelection(MenuItem item) {
//        if (item.getItemId() == R.id.menu_stats) {
//            //Open stats section
////            setContentView(R.layout.activity_main);
//            return true;
//        } else if (item.getItemId() == R.id.resultActivity) {
//            //Open result section
//            startActivity(new Intent(this, ResultActivity.class));
//            item.setEnabled(true);
//            return true;
//        } else {
//            //Open table
//            return true;
//        }
//    }
}