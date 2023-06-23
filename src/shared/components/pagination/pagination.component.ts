import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() length: number;
  @Input() pageSize: number;
  @Input() pageIndex: number;
  @Input() pageSizeOptions: number[] = [];
  @Input() showFirstLastButtons: boolean = true;
  @Output() PageEvent = new EventEmitter<PageEvent>();
  constructor() {

  }

  handlePageEvent(e: PageEvent) {
    this.PageEvent.emit(e);
  }
}
