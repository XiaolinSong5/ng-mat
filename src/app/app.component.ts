import {Component, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ProgressSpinnerComponent} from './progress-spinner/progress-spinner.component';
import {ButtonComponent} from './button/button.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule} from '@angular/forms';
import {TabComponent} from './tab/tab.component';
import {MatTabsModule} from '@angular/material/tabs';
import {ClipBoardComponent} from './clip-board/clip-board.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {HttpClientModule} from '@angular/common/http';
import {TableService} from './table.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {UserData} from '../user-data';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatButtonModule,
    ProgressBarComponent,
    MatProgressSpinnerModule,
    ProgressSpinnerComponent,
    ButtonComponent,
    MatButtonToggleModule,
    FormsModule,
    TabComponent,
    MatTabsModule,
    ClipboardModule,
    ClipBoardComponent,
  HttpClientModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-mat';
  titleData = "data-table";
  displayedColumn: string [] = ['id', 'userId', 'title', 'body' ];
  dataSource= new MatTableDataSource<UserData>();
  constructor(private service: TableService) {
    this.service.getData()
      .subscribe(data => {
        console.log("data from service:" , data);
        this.dataSource.data = data;
      });

  }
}
