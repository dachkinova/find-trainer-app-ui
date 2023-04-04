import {Component, OnInit} from '@angular/core';
import {TrainerService} from "../../../../service/trainer.service";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
    selector: 'app-candidate-details-page',
    templateUrl: './candidate-details-page.component.html',
    styleUrls: ['./candidate-details-page.component.scss']
})
export class CandidateDetailsPageComponent implements OnInit {

    currentTrainer: any;

    constructor(public trainerService: TrainerService) {
    }

    ngOnInit(): void {
        this.currentTrainer = this.trainerService.currentTrainerInfo;
    }

    testimonialsSlides: OwlOptions = {
        items: 1,
        nav: false,
        margin: 25,
        loop: true,
        dots: true,
        autoplay: false,
        autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-s-line'></i>",
            "<i class='ri-arrow-right-s-line'></i>",
        ]
    }
}
