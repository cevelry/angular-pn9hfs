import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { countries } from './countries';

@Component({
    selector: 'personal-details',
    template: `
        <ng-container [formGroup]="personalDetails">
            <kendo-formfield>
                <kendo-label [for]="fullName" text="Full Name"></kendo-label>
                <input kendoTextBox #fullName [formControlName]="'fullName'" />
                <kendo-formerror>Full Name is required</kendo-formerror>
            </kendo-formfield>

            <kendo-formfield [showHints]="'initial'" [showErrors]="'initial'">
                <kendo-label [for]="country" text="Country"></kendo-label>
                <kendo-autocomplete
                    #country
                    [data]="countries"
                    [formControlName]="'country'"
                >
                </kendo-autocomplete>

                <kendo-formhint>Only Eroupean countries</kendo-formhint>
                <kendo-formerror *ngIf="!(personalDetails.controls.country.required)">Country is required</kendo-formerror>
            </kendo-formfield>

            <kendo-formfield [orientation]="'horizontal'" [showHints]="'initial'">
                 <label class="k-label">Gender</label>

                <ul class="k-radio-list k-list-horizontal">
                    <li class="k-radio-item">
                        <input type="radio" #male value="male" kendoRadioButton [formControlName]="'gender'" />
                        <kendo-label class="k-radio-label" [for]="male" text="Male"></kendo-label>
                    </li>

                    <li class="k-radio-item">
                        <input type="radio" #female value="female" kendoRadioButton [formControlName]="'gender'" />
                        <kendo-label class="k-radio-label" [for]="female" text="Female"></kendo-label>
                    </li>

                    <li class="k-radio-item">
                        <input type="radio" #other value="other" kendoRadioButton [formControlName]="'gender'" />
                        <kendo-label class="k-radio-label" [for]="other" text="Other"></kendo-label>
                    </li>
                </ul>

                  <kendo-formerror>This field is required</kendo-formerror>
              </kendo-formfield>

            <kendo-formfield>
                <kendo-label [for]="about" text="About" [optional]="true"></kendo-label>
                <textarea kendoTextArea #about [formControlName]="'about'" placeholder="Who you are..."></textarea>
            </kendo-formfield>
        </ng-container>
    `,
    encapsulation: ViewEncapsulation.None,
    styles: [`
        .k-list-horizontal .k-radio-item,
        .k-radio-list .k-radio-item:first-child {
            margin: 0 12px 0 0;
        }

        .k-radio+.k-radio-label, .k-radio-label+.k-radio {
            margin-left: 6px;
        }
    `]
})
export class PersonalDetailsComponent {
    public countries: Array<string> = countries;

    @Input() public personalDetails: FormGroup;
}
