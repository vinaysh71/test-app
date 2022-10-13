import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeTestService } from './services/fake.test.service';
import { LoggerService } from './services/logger.service';
import { TestService } from './services/test.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './shared/services/http.interceptor';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CreateComponent } from './components/create/create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { TestParentComponent } from './components/test-parent/test-parent.component';



const config = {
  APP_ID: 1,
  IS_PROD: true
};
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    TestParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    { provide: LoggerService, useClass: LoggerService },
    { provide: 'APP_CONFIG', useValue: config },
    {
      provide: TestService, useFactory: (config: any) =>
        config.IS_PROD ? new FakeTestService() : new TestService(),
      deps: ['APP_CONFIG']
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
