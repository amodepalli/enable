import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeasurementsComponent } from './measurements.component';
import { OutputComponent } from './output.component';
import { WelcomeComponent } from './welcome.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'measurements', component: MeasurementsComponent },
  { path: 'output', component: OutputComponent }
	// { path: '**', component: PageNotFoundComponent }
];
export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);