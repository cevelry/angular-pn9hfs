import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'payment-details',
    template: `
          <ng-container [formGroup]="paymentDetails">
            <kendo-formfield [orientation]="'horizontal'" class="payment-type">
                <label class="k-label">Payment Type</label>

                <ul class="k-radio-list k-list-horizontal">
                    <li class="k-radio-item">
                        <input type="radio" #visa value="visa" kendoRadioButton [formControlName]="'paymentType'" />
                        <label [for]="visa" class="card visa"></label>
                    </li>

                    <li class="k-radio-item">
                        <input type="radio" #masterCard value="masterCard" kendoRadioButton [formControlName]="'paymentType'" />
                        <label [for]="masterCard" class="card mastercard"></label>
                    </li>

                    <li class="k-radio-item">
                        <input type="radio" #paypal value="paypal" kendoRadioButton [formControlName]="'paymentType'" />
                        <label [for]="paypal" class="card paypal"></label>
                    </li>
                </ul>
            </kendo-formfield>

             <div class="wrap">
                <kendo-formfield class="card-number">
                    <kendo-label [for]="cardNumber" text="Card Number"></kendo-label>
                    <kendo-maskedtextbox
                        #cardNumber
                        [formControlName]="'cardNumber'"
                        [mask]="mask">
                    </kendo-maskedtextbox>
                    <kendo-formerror>Card Number is required format</kendo-formerror>
                </kendo-formfield>

                <kendo-formfield>
                    <kendo-label [for]="cvc" text="CVC Number"></kendo-label>
                    <kendo-maskedtextbox
                        #cvc
                        [formControlName]="'cvc'"
                        [mask]="cvcMask">
                    </kendo-maskedtextbox>

                    <kendo-formhint>The last 3 digids on the back</kendo-formhint>
                    <kendo-formerror>Card CVC Number is required</kendo-formerror>
                </kendo-formfield>
              </div>

            <kendo-formfield>
                <kendo-label [for]="expiration" text="Expiration Date"></kendo-label>
                <kendo-dateinput #expiration [formControlName]="'expirationDate'"></kendo-dateinput>

                <kendo-formerror>Expiration Date is required</kendo-formerror>
            </kendo-formfield>

            <kendo-formfield>
                <kendo-label [for]="cardHolder" text="Card Holder Name"></kendo-label>
                <input [formControlName]="'cardHolder'" kendoTextBox #cardHolder />

                <kendo-formerror>Card Holder Name is required</kendo-formerror>
            </kendo-formfield>
          </ng-container>
    `,
    encapsulation: ViewEncapsulation.None,
    styles: [`
        .wrap {
            display: flex;
            justify-content: space-between;
        }
        .payment-type input {
            visibility: hidden;
            position: absolute;
        }

        .visa { background-image: url(https://image.flaticon.com/icons/svg/196/196578.svg);}
        .mastercard { background-image: url(https://image.flaticon.com/icons/svg/196/196561.svg);}
        .paypal { background-image: url(https://image.flaticon.com/icons/svg/196/196565.svg);}

        .payment-type input:active +.card { opacity: .9; }
        .payment-type input:checked +.card {
            filter: none;
        }
        .card {
            cursor: pointer;
            background-size: auto;
            background-repeat: no-repeat;
            background-position: center;
            display: inline-block;
            width: 138px;
            height: 70px;
            border: 1px solid;
            filter: brightness(1.8) grayscale(1) opacity(.7);
        }
        .card:hover {
            filter: brightness(1.2) grayscale(.5) opacity(.9);
        }
        .card-number {
            width: 75%;
            margin-right: 25px;
        }
    `]
})
export class PaymentDetailsComponent {
    public mask: string = "0000-0000-0000-0000";
    public cvcMask: string = "000";

    @Input() public paymentDetails: FormGroup;
}
