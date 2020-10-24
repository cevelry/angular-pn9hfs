import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LayoutModule } from '@progress/kendo-angular-layout';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { UploadsModule } from '@progress/kendo-angular-upload';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { UploadInterceptor } from './upload-interceptor';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './account-details.component';
import { PersonalDetailsComponent } from './personal-details.component';
import { PaymentDetailsComponent } from './payment-details.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
        InputsModule,
        LabelModule,
        UploadsModule,
        DropDownsModule,
        DateInputsModule
    ],
    declarations: [ AppComponent, AccountDetailsComponent, PersonalDetailsComponent, PaymentDetailsComponent ],
    bootstrap:    [ AppComponent ],
     providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UploadInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
