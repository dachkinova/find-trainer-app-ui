import {Component, OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {FormBuilder, FormControl} from "@angular/forms";
import {TrainerService} from "../../../../service/trainer.service";
import {empty} from "rxjs";
import {StorageService} from "../../../../service/storage.service";

@Component({
    selector: 'app-write-a-review',
    templateUrl: './write-a-review.component.html',
    styleUrls: ['./write-a-review.component.scss']
})
export class WriteAReviewComponent implements OnInit {

    formData: any;
    stars: number = 5;
    review: any;


    constructor(private formBuilder: FormBuilder, private trainerService: TrainerService, private storageService: StorageService) {
    }

    getReview(e: any) {
        this.review = e.target.value
    }

    ngOnInit(): void {
        this.formData = this.formBuilder.group({
            review: new FormControl('')
        });
    }
    sendReview() {
        let userId = this.storageService.getUser().id;
        console.log(this.formData);
        this.trainerService.sendReview(this.review, this.stars, userId).subscribe({
                next: data => {
                    console.log(data)
                },
                error: err => {
                    return empty();
                }
            }
        )
    }
}