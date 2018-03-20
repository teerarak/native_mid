import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: "highway",
    templateUrl: "show.component.html",
    moduleId: module.id
})
export class ShowComponent implements OnInit {
    data: any
    sum = 0
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }
    ngOnInit(): void {
        this.data = JSON.parse(this.route.snapshot.params["data"]);
        this.sum = this.data.VEH1_T + this.data.VEH2_T + this.data.VEH3_T + this.data.VEH4_T + this.data.VEH5_T + this.data.VEH6_T + this.data.VEH7_T + this.data.VEH8_T + this.data.VEH9_T + this.data.VEH10_T + this.data.VEH11_T + this.data.VEH12_T + this.data.VEH13_T +this.data.VEH_T 
    }
}
