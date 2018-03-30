import { Component, OnInit } from "@angular/core";
import { SearchBar } from "ui/search-bar";
import {isAndroid} from "platform";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { BackendService } from "../../backend.service";

@Component({
    selector: 'province',
    templateUrl: 'province.component.html',
    moduleId: module.id
})

export class ProvinceComponent implements OnInit {
    provinces = [
        {
            "pid": "10",
            "name": "Bangkok"
          },
          {
            "pid": "11",
            "name": "Samut Prakarn"
          },
          {
            "pid": "12",
            "name": "Nonthaburi"
          },
          {
            "pid": "13",
            "name": "Pathum Thani"
          },
          {
            "pid": "14",
            "name": "Phra Nakhon Si Ayutthaya"
          },
          {
            "pid": "15",
            "name": "Ang Thong"
          },
          {
            "pid": "16",
            "name": "Lop Buri"
          },
          {
            "pid": "17",
            "name": "Sing Buri"
          },
          {
            "pid": "18",
            "name": "Chai Nat"
          },
          {
            "pid": "19",
            "name": "Saraburi"
          },
          {
            "pid": "20",
            "name": "Chon Buri"
          },
          {
            "pid": "21",
            "name": "Rayong"
          },
          {
            "pid": "22",
            "name": "Chanthaburi"
          },
          {
            "pid": "23",
            "name": "Trat"
          },
          {
            "pid": "24",
            "name": "Chachoengsao"
          },
          {
            "pid": "25",
            "name": "Prachin Buri"
          },
          {
            "pid": "26",
            "name": "Nakhon Nayok"
          },
          {
            "pid": "27",
            "name": "Sa kaeo"
          },
          {
            "pid": "30",
            "name": "Nakhon Ratchasima"
          },
          {
            "pid": "31",
            "name": "Buri Ram"
          },
          {
            "pid": "32",
            "name": "Surin"
          },
          {
            "pid": "33",
            "name": "Si Sa Ket"
          },
          {
            "pid": "34",
            "name": "Ubon Ratchathani"
          },
          {
            "pid": "35",
            "name": "Yasothon"
          },
          {
            "pid": "36",
            "name": "Chaiyaphum"
          },
          {
            "pid": "37",
            "name": "Amnat Charoen"
          },
          {
            "pid": "38",
            "name": "Bueng Kan"
          },
          {
            "pid": "39",
            "name": "Nong Bua Lam Phu"
          },
          {
            "pid": "40",
            "name": "Khon Kaen"
          },
          {
            "pid": "41",
            "name": "Udon Thani"
          },
          {
            "pid": "42",
            "name": "Loei"
          },
          {
            "pid": "43",
            "name": "Nong Khai"
          },
          {
            "pid": "44",
            "name": "Maha Sarakham"
          },
          {
            "pid": "45",
            "name": "Roi Et"
          },
          {
            "pid": "46",
            "name": "Kalasin"
          },
          {
            "pid": "47",
            "name": "Sakon Nakhon"
          },
          {
            "pid": "48",
            "name": "Nakhon Phanom"
          },
          {
            "pid": "49",
            "name": "Mukdahan"
          },
          {
            "pid": "50",
            "name": "Chiang Mai"
          },
          {
            "pid": "51",
            "name": "Lamphun"
          },
          {
            "pid": "52",
            "name": "Lampang"
          },
          {
            "pid": "53",
            "name": "Uttaradit"
          },
          {
            "pid": "54",
            "name": "Phrae"
          },
          {
            "pid": "55",
            "name": "Nan"
          },
          {
            "pid": "56",
            "name": "Phayao"
          },
          {
            "pid": "57",
            "name": "Chiang Rai"
          },
          {
            "pid": "58",
            "name": "Mae Hong Son"
          },
          {
            "pid": "60",
            "name": "Nakhon Sawan"
          },
          {
            "pid": "61",
            "name": "Uthai Thani"
          },
          {
            "pid": "62",
            "name": "Kamphaeng Phet"
          },
          {
            "pid": "63",
            "name": "Tak"
          },
          {
            "pid": "64",
            "name": "Sukhothai"
          },
          {
            "pid": "65",
            "name": "Phitsanulok"
          },
          {
            "pid": "66",
            "name": "Phichit"
          },
          {
            "pid": "67",
            "name": "Phetchabun"
          },
          {
            "pid": "70",
            "name": "Ratchaburi"
          },
          {
            "pid": "71",
            "name": "Kanchanaburi"
          },
          {
            "pid": "72",
            "name": "Suphan Buri"
          },
          {
            "pid": "73",
            "name": "Nakhon Pathom"
          },
          {
            "pid": "74",
            "name": "Samut Sakhon"
          },
          {
            "pid": "75",
            "name": "Samut Songkhram"
          },
          {
            "pid": "76",
            "name": "Phetchaburi"
          },
          {
            "pid": "77",
            "name": "Prachuap Khiri Khan"
          },
          {
            "pid": "80",
            "name": "Nakhon Si Thammarat"
          },
          {
            "pid": "81",
            "name": "Krabi"
          },
          {
            "pid": "82",
            "name": "Phang-nga"
          },
          {
            "pid": "83",
            "name": "Phuket"
          },
          {
            "pid": "84",
            "name": "Surat Thani"
          },
          {
            "pid": "85",
            "name": "Ranong"
          },
          {
            "pid": "86",
            "name": "Chumphon"
          },
          {
            "pid": "90",
            "name": "Songkhla"
          },
          {
            "pid": "91",
            "name": "Satun"
          },
          {
            "pid": "92",
            "name": "Trang"
          },
          {
            "pid": "93",
            "name": "Phatthalung"
          },
          {
            "pid": "94",
            "name": "Pattani"
          },
          {
            "pid": "95",
            "name": "Yala"
          },
          {
            "pid": "96",
            "name": "Narathiwat"
          }    
    ];
    myProvinces = []
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit() {
        this.myProvinces = this.provinces
    }

    selectProvince(args) {
        BackendService.setProvince = this.myProvinces[args.index].name
        console.log(BackendService.getProvince)
        this.router.navigate(['/filter']);
    }
    goBack() {
      BackendService.setProvince = ''
      this.routerExtensions.back();
    }
    onTextChange(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
        let searchValue = searchBar.text.toLowerCase();

        if (searchValue !== "") {
            this.myProvinces=[];
            for (let i = 0; i < this.provinces.length; i++) {
                if (this.provinces[i].name.toLowerCase().indexOf(searchValue) !== -1) {
                    this.myProvinces.push(this.provinces[i]);
                }
            }
        } else {
            this.myProvinces = this.provinces;  
        }
    }
    sBLoaded(args){
        var searchbar:SearchBar = <SearchBar>args.object;
        if(isAndroid){
            searchbar.android.clearFocus();
        }
    }
}