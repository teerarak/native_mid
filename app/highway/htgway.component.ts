import { Component, OnInit } from "@angular/core";
import { HigwayService } from "./highway.service";
import { SearchBar } from "ui/search-bar";
import { Router, ActivatedRoute } from "@angular/router";
import { LoadingIndicator } from 'nativescript-loading-indicator';
import { BackendService } from "../backend.service";

@Component({
    selector: "highway",
    templateUrl: "highway.component.html",
    moduleId: module.id
})
export class HighwayComponent implements OnInit {
    highway: any = []
    myItems: any = []
    loader = new LoadingIndicator();
    options = {
        message: 'Loading...',
        progress: 0.65,
        android: {
            indeterminate: true,
            cancelable: false,
            cancelListener: function(dialog) { console.log("Loading cancelled") },
            max: 100,
            progressNumberFormat: "%1d/%2d",
            progressPercentFormat: 0.53,
            progressStyle: 1,
            secondaryProgress: 1
        },
        ios: {
            details: "Additional detail note!",
            margin: 10,
            dimBackground: true,
            backgroundColor: "yellow",
            hideBezel: true
        }
    };
    constructor (
        private activatedRoute: ActivatedRoute,
        private  HigwayService: HigwayService,
        private router: Router
    ) {

    }
    ngOnInit(): void {
        if(this.activatedRoute.snapshot.params["change"]) {
            this.myItems = JSON.parse(this.activatedRoute.snapshot.params["change"]);
            console.log(JSON.stringify(this.myItems))
            console.log("2")
        }
        else { 
            this.loader.show(this.options);
            this.getData();
            console.log("1")
        }

            
    }
    getData() {
        this.HigwayService.getData()
        .subscribe(
            (Response) => {
                // console.log(JSON.stringify(Response));
                this.highway = Response
                this.myItems = this.highway
                BackendService.setTrafficData = JSON.stringify(this.myItems);
                this.loader.hide();
            },
            (error) => {
                // error
                alert("getData Error");
            }
            
        );
    }
    filter (){
        this.router.navigate(['/filter']);
    }
    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        let searchValue = searchBar.text.toLowerCase();

        this.myItems = []
        if (searchValue !== "") {
            for (let i = 0; i < this.highway.length; i++) {
                if (this.highway[i].ENG_DIST.toLowerCase().indexOf(searchValue) !== -1 || this.highway[i].ENG_CHANG.toLowerCase().indexOf(searchValue) !== -1 || this.highway[i].DISTRICT.toLowerCase().indexOf(searchValue) !== -1 || this.highway[i].CHANGWAT.toLowerCase().indexOf(searchValue) !== -1) {
                    this.myItems.push(this.highway[i]);
                }
            }
        } else {
            this.myItems = this.highway
        }
    }
    eiei (index) {
        console.log(index)
    }
    total(data){
        return this.getFormat(data.VEH1_T + data.VEH2_T + data.VEH3_T + data.VEH4_T + data.VEH5_T + data.VEH6_T + data.VEH7_T + data.VEH8_T + data.VEH9_T + data.VEH10_T + data.VEH11_T + data.VEH12_T + data.VEH13_T)
    }
    getFormat (data) {
        var parts=data.toString().split(".");
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : ".00");
    }
    onTapListView(args){
        this.router.navigate(['/Show', JSON.stringify(this.myItems[args.index])]);
    }
}
