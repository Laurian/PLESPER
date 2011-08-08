package com.plesper;

import java.util.HashMap;

public class Space {

    private Root root;
    private String name;
    private HashMap<String, Object> data;

    public Space() {
        data = new HashMap<String, Object>();
    }

    public Space(String name, Root root) {
        this();
        this.name = name;
        this.root = root;
    }

    public Root getRoot() {
        return root;
    }

    public HashMap<String, Object> getData() {
        return data;
    }

    public void setData(HashMap<String, Object> data) {
        this.data = data;
    }

    public void setRoot(Root root) {
        this.root = root;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}