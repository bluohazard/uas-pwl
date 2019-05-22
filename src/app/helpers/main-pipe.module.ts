import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPipeForUserSearch } from './searching.pipe'; // <---

@NgModule({
    declarations: [FilterPipeForUserSearch], // <---
    imports: [CommonModule],
    exports: [FilterPipeForUserSearch] // <---
})

export class MainPipe { }
