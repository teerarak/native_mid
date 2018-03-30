import { Injectable } from "@angular/core";
import { getString, setString, getBoolean, setBoolean } from "application-settings";


export class BackendService {
    static set setTrafficData(traffic: string){
        setString("traffic",traffic);
    }
    
    static get getTrafficData(): string {
        return getString("traffic");
    }

    static set setProvince(Province: string){
        setString("Province",Province);
    }
    
    static get getProvince(): string {
        return getString("Province");
    }
}