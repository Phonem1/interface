import { Component, OnInit } from '@angular/core';
import { GlobalGeneralService } from '../utilities/globalgeneral.service';


@Component({
    selector: 'app-surfacephoto',
    templateUrl: './surfacephoto.component.html',
    styleUrls: ['./surfacephoto.component.css']
})
export class SurfacePhotoComponent implements OnInit {
    private enabled: boolean = true;
    private seconds: number = 3;
    private intervalId: number;
    private mycdtext: string = "Count Down";

    private showPicture = false;
    public webcam;
    public base64;

    private options: any = {
        audio: false,
        video: false,
        width: 480,
        height: 480,
        fallbackMode: 'callback',
        fallbackSrc: 'jscam_canvas_only.swf',
        fallbackQuality: 80,
        cameraType: 'front' || 'back'
    };

    constructor(private ggs: GlobalGeneralService) { }

    ngOnInit() {
        this.ggs.notifyNavBar('2');
    }


    private CountDown(): void {
        if (this.enabled) {
            this.enabled = false;
            this.showPicture = false;            
            this.intervalId = window.setInterval(() => this.tick(), 1000);
        }
    }   

    genBase64() {
        this.webcam.getBase64()
            .then(base => this.base64 = base)
            .catch(e => console.error(e))        
    }

    onCamSuccess(){}
    onCamError(err){}

    private tick(): void {
        if (--this.seconds < 1) {
            window.clearInterval(this.intervalId);
            this.enabled = true;
                        
            this.seconds = 3;
            this.mycdtext = "Retake";

            this.genBase64();

            this.showPicture = true;
        } else {
            this.mycdtext = this.seconds.toString();
        }
    }




}
