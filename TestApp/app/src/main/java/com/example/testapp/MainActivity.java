package com.example.testapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.os.Bundle;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private TableLayout table;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        table = findViewById(R.id.tableLayout);

        for (int i = 1; i <= 25; i++) {
            TableRow tableRow = new TableRow(this);
            for (int j = 1; j <= 8; j++) {
                TextView textView = new TextView(this);
                textView.setText(String.format("Row: %s | Column: %s", i, j));
                textView.setPaddingRelative(15, 15, 15, 15);
                tableRow.addView(textView);
            }
            if (i % 2 == 0) {
                tableRow.setBackgroundColor(getResources().getColor(R.color.light_grey_2));
            }
            table.addView(tableRow);
        }
        table.setStretchAllColumns(true);
    }
}