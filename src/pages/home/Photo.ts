

export class Photo{
    farm_id : string;
    id:string;
    secret : string;
    point:number;
    server : string;
    link : string;
    choosed:boolean = false;

    // https://farm{farm_id}.staticflickr.com/{server}/{id}_{secret}.jpg

    constructor(item){
        this.farm_id = item.farm;
        this.id = item.id;
        this.secret = item.secret;
        this.point = item.point;
        this.server = item.server;
    }

    getLink(){
        this.link = "https://farm"+this.farm_id+".staticflickr.com/"+this.server+
        "/"+this.id+"_"+ this.secret+".jpg";
        this.choosed = true;
        return this.link;
    }

    isChosen(){
        return this.choosed;
    }


}