import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular';
import { SortComponent } from './sort/sort.component';

@Component({
	moduleId: module.id,
	selector: 'filter',
	templateUrl: './filter.component.html'
})

export class FilterComponent implements OnInit {
	province: string = "Name Province";
	private sortBy = ["maximum Traffic", "minimum Traffic", "Name Province"];
    private sortName: string = "sortName";
	private sortID: number = -1;
	traffic: any = []
    private options: ModalDialogOptions = {
        viewContainerRef: this.viewContainerRef,
        fullscreen: false,
    };
	constructor(
		private modalService: ModalDialogService,
        private route: ActivatedRoute,
		private router: Router,
		private viewContainerRef: ViewContainerRef
	) { }

	ngOnInit() {
		// BackendService.setProvince = ""
		if(BackendService.getProvince != '') {
			this.province = BackendService.getProvince
			this.province = this.province.toUpperCase();
			console.log(this.province+"55")
		}
		this.traffic = JSON.parse(BackendService.getTrafficData);
		// console.log(JSON.stringify(this.traffic))

	}
	selectProvince(){
		this.router.navigate(['/province']);
	}
    sort(){
        this.modalService.showModal(SortComponent, this.options)
        .then((Response) => {
            if (Response != undefined) {
                this.sortID = Number(Response);
                this.sortName = this.sortBy[Response];
            }
        });   
	}
	submit(){
		if (BackendService.getProvince != '') {
			console.log("eeii")
			this.traffic = this.traffic.filter(element => {
				return element.ENG_CHANG == this.province;
			})
		}

		
		BackendService.setTrafficData = JSON.stringify(this.traffic)
		this.router.navigate(['/highway', JSON.stringify(this.traffic)]);
    }
}