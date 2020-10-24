import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FileRestrictions } from '@progress/kendo-angular-upload';

@Component({
    selector: 'account-details',
    template: `
        <ng-container [formGroup]="accountDetails">
            <kendo-formfield>
                <kendo-label [for]="username" text="Username"></kendo-label>
                <input [formControlName]="'userName'" kendoTextBox #username />
                <kendo-formerror>Username is required</kendo-formerror>
            </kendo-formfield>

            <kendo-formfield>
                <kendo-label [for]="email" text="Email"></kendo-label>
                <input [formControlName]="'email'" kendoTextBox #email/>
                <kendo-formerror *ngIf="accountDetails.controls.email.errors?.required">Email is required</kendo-formerror>
                <kendo-formerror *ngIf="accountDetails.controls.email.errors?.email">Not a valid email format</kendo-formerror>
            </kendo-formfield>

            <kendo-formfield>
                <kendo-label [for]="password" text="Password">
                </kendo-label>
                <input type="password" [formControlName]="'password'" kendoTextBox #password />
                <kendo-formerror>Password is required</kendo-formerror>
            </kendo-formfield>

            <kendo-formfield>
                <kendo-label [for]="avatar" [optional]="true" [text]="'Avatar'"></kendo-label>
                <kendo-upload
                    #avatar
                    [formControlName]="'avatar'"
                    [saveUrl]="uploadSaveUrl"
                    [removeUrl]="uploadRemoveUrl"
                    [restrictions]="restrictions">
                </kendo-upload>

                <kendo-formhint>Allowed extensions are jpg, jpeg or png</kendo-formhint>
            </kendo-formfield>
      </ng-container>
    `
})
export class AccountDetailsComponent {
    public uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
    public uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

    public restrictions: FileRestrictions = {
        allowedExtensions: ['jpg', 'jpeg', 'png']
    };

    @Input() public accountDetails: FormGroup;
}
