package com.example.testapp.Entities;

import java.util.ArrayList;
import java.util.List;

public class BPLTeam implements Comparable<BPLTeam> {

    private String name;
    private int points;
    private int diff;
    private int gamesPlayed;

    public BPLTeam(String name) {
        this.name = name;
    }

    public BPLTeam(String name, int points, int diff, int gamesPlayed) {
        this.name = name;
        this.points = points;
        this.diff = diff;
        this.gamesPlayed = gamesPlayed;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public int getDiff() {
        return diff;
    }

    public void setDiff(int diff) {
        this.diff = diff;
    }

    public int getGamesPlayed() {
        return gamesPlayed;
    }

    public void setGamesPlayed(int gamesPlayed) {
        this.gamesPlayed = gamesPlayed;
    }

    public static ArrayList<BPLTeam> getSampleList() {
        ArrayList<BPLTeam> bplTeams = new ArrayList<>();
        bplTeams.add(new BPLTeam("Stephan und Niklas", 5, -1, 7));
        bplTeams.add(new BPLTeam("Max und Noah", 7, 5, 7));
        bplTeams.add(new BPLTeam("Pralle und Daniel", 4, -4, 7));
        bplTeams.add(new BPLTeam("Fynn und Kenji", 4, -2, 7));
        bplTeams.add(new BPLTeam("Snens und Huhn", 3, -3, 7));
        bplTeams.add(new BPLTeam("Hans und Peter", 3, -3, 6));
        bplTeams.add(new BPLTeam("Tom und Morris", 6, 6, 7));
        return bplTeams;
    }

    @Override
    public int compareTo(BPLTeam o) {
        int comp = this.points - o.points;
        if (comp == 0)
            comp = this.diff - o.diff;
        if (comp == 0)
            comp = o.gamesPlayed - this.gamesPlayed;
        return comp;
    }
}
