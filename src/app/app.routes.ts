import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { DocsComponent } from './docs/docs.component';

export const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'evidence', component: EvidenceComponent},
  {path: 'checklist', component: ChecklistComponent},
  {path: 'docs', component: DocsComponent},

];
