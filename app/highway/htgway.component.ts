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
    highway = []
    myItems = []
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
        }
    }
    eiei (index) {
        console.log(index)
    }
}
