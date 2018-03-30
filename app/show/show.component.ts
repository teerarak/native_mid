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

    goBack() {
        this.router.navigate(['/']);
    }
    total(data){
        return this.getFormat(data.VEH1_T + data.VEH2_T + data.VEH3_T + data.VEH4_T + data.VEH5_T + data.VEH6_T + data.VEH7_T + data.VEH8_T + data.VEH9_T + data.VEH10_T + data.VEH11_T + data.VEH12_T + data.VEH13_T)
    }
    getFormat (data) {
        var parts=data.toString().split(".");
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : ".00");
    }
}
