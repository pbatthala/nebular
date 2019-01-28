/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbBaseTableModule } from '../cdk/table';
import { NbTreeGridComponent } from './tree-grid.component';
import { NbSortDirective, NbSortHeaderComponent } from './tree-grid-sort';
import { NbTreeGridDataSourceBuilder } from './data-source/tree-grid-data-source';
import { NbTreeGridSortService } from './data-source/tree-grid-sort.service';
import { NbTreeGridFilterService } from './data-source/tree-grid-filter.service';
import { NbTreeGridService } from './data-source/tree-grid.service';
import { NbTreeGridDataService } from './data-source/tree-grid-data.service';
import { NbFilterDirective, NbFilterInputDirective } from './tree-grid-filter';

const COMPONENTS = [
  // Tree Grid
  NbTreeGridComponent,

  // Sort directives
  NbSortDirective,
  NbSortHeaderComponent,

  // Filter directives
  NbFilterDirective,
  NbFilterInputDirective,
];

@NgModule({
  imports: [ CommonModule, NbBaseTableModule ],
  declarations: [ ...COMPONENTS ],
  exports: [ NbBaseTableModule, ...COMPONENTS ],
  providers: [
    NbTreeGridSortService,
    NbTreeGridFilterService,
    NbTreeGridService,
    NbTreeGridDataService,
    NbTreeGridDataSourceBuilder,
  ],
})
export class NbTreeGridModule {}
