import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RouterExtensions, ModalDialogParams } from "nativescript-angular";
import { ListPicker } from "ui/list-picker";

@Component({
    moduleId: module.id,
    selector: 'sort',
    templateUrl: 'sort.component.html'
})

export class SortComponent implements OnInit {
    
    private sortBy = ["maximum Traffic", "minimum Traffic", "Name Province"];
    constructor(
        private activatedRoute: ActivatedRoute,
        private params: ModalDialogParams,
        private router: Router,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit() {}
    selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        console.log("picker selection: " + picker.selectedIndex);
    }
    sortByfunc(args){
        this.params.closeCallback(args.index);
    }
}