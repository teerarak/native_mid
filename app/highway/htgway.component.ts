import { Component, OnInit } from "@angular/core";
import { HigwayService } from "./highway.service";
import { SearchBar } from "ui/search-bar";
import { Router } from "@angular/router";
@Component({
    selector: "highway",
    templateUrl: "highway.component.html",
    moduleId: module.id
})
export class HighwayComponent implements OnInit {
    highway: any = []
    myItems: any = []
    constructor (
        private  HigwayService: HigwayService,
        private router: Router
    ) {

    }
    ngOnInit(): void {
        this.HigwayService.getData()
        .subscribe(
            (Response) => {
                // console.log(JSON.stringify(Response));
                this.highway = Response
                this.myItems = this.highway
            },
            (error) => {
                // error
                alert("getData Error");
            }
            
        );
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
        return this.getFormat(data.HVTOT + data.VEH_T + data.VEH1_T + data.VEH2_T + data.VEH3_T + data.VEH4_T + data.VEH5_T + data.VEH6_T + data.VEH7_T + data.VEH8_T + data.VEH9_T + data.VEH10_T + data.VEH11_T + data.VEH12_T + data.VEH13_T)
    }
    getFormat (data) {
        var parts=data.toString().split(".");
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1]);
    }
}
