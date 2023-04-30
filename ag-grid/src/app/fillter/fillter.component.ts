import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GridApi, ColDef, IDateFilterParams, ITextFilterParams, ISetFilterParams, IMultiFilterParams, ISetFilter, GridReadyEvent, IProvidedFilterParams } from 'ag-grid-community';

@Component({
  selector: 'app-fillter',
  templateUrl: './fillter.component.html',
  styleUrls: ['./fillter.component.css']
})
export class FillterComponent {
   gridApi!: GridApi<any>;
 defaultFilterParams: IProvidedFilterParams = { readOnly: true };


   columnDefs: ColDef[] = [
    {
      field: 'athlete',
      filter: 'agTextColumnFilter',
      filterParams: this.defaultFilterParams,
    },
    {
      field: 'age',
      filter: 'agNumberColumnFilter',
      filterParams: this.defaultFilterParams,
    },
    {
      field: 'country',
      filter: 'agSetColumnFilter',
      filterParams: this.defaultFilterParams,
    },
    {
      field: 'year',
      maxWidth: 120,
      filter: 'agNumberColumnFilter',
      filterParams: this.defaultFilterParams,
    },
    {
      field: 'date',
      minWidth: 215,
      filter: 'agDateColumnFilter',
      filterParams: {
        readOnly: true,
      } as IDateFilterParams,
      suppressMenu: true,
    },
    {
      field: 'sport',
      suppressMenu: true,
      filter: 'agMultiColumnFilter',
      filterParams: {
        filters: [
          {
            filter: 'agTextColumnFilter',
            filterParams: { readOnly: true } as ITextFilterParams,
          },
          {
            filter: 'agSetColumnFilter',
            filterParams: { readOnly: true } as ISetFilterParams,
          },
        ],
        readOnly: true,
      } as IMultiFilterParams,
    },
    { field: 'gold', filterParams: this.defaultFilterParams },
    { field: 'silver', filterParams: this.defaultFilterParams },
    { field: 'bronze', filterParams: this.defaultFilterParams },
    { field: 'total', filter: false },
  ];
   defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
    sortable: true,
    floatingFilter: true,
  };
   rowData!: any[];

  constructor(private http: HttpClient) {}

  irelandAndUk() {

    var countryFilterComponent = this.gridApi.getFilterInstance('country')!;
    countryFilterComponent.setModel({ values: ['Ireland'] });
    this.gridApi.onFilterChanged();
  }

  clearCountryFilter() {
    var countryFilterComponent = this.gridApi.getFilterInstance('country')!;
    countryFilterComponent.setModel(null);
    this.gridApi.onFilterChanged();
  }

  destroyCountryFilter() {
    this.gridApi.destroyFilter('country');
  }

  endingStan() {
    var countryFilterComponent = this.gridApi.getFilterInstance<ISetFilter>(
      'country'
    )!;
    var countriesEndingWithStan = countryFilterComponent
      .getFilterKeys()
      .filter(function (value: any) {
        return value.indexOf('stan') === value.length - 4;
      });
    countryFilterComponent.setModel({ values: countriesEndingWithStan });
    this.gridApi.onFilterChanged();
  }

  printCountryModel() {
    var countryFilterComponent = this.gridApi.getFilterInstance('country')!;
    var model = countryFilterComponent.getModel();
    if (model) {
      console.log('Country model is: ' + JSON.stringify(model));
    } else {
      console.log('Country model filter is not active');
    }
  }

  sportStartsWithS() {
    var sportsFilterComponent = this.gridApi.getFilterInstance('sport')!;
    sportsFilterComponent.setModel({
      filterModels: [
        {
          type: 'startsWith',
          filter: 's',
        },
      ],
    });
    this.gridApi.onFilterChanged();
  }

  sportEndsWithG() {
    var sportsFilterComponent = this.gridApi.getFilterInstance('sport')!;
    sportsFilterComponent.setModel({
      filterModels: [
        {
          type: 'endsWith',
          filter: 'g',
        },
      ],
    });
    this.gridApi.onFilterChanged();
  }

  sportsCombined() {
    var sportsFilterComponent = this.gridApi.getFilterInstance('sport')!;
    sportsFilterComponent.setModel({
      filterModels: [
        {
          conditions: [
            {
              type: 'endsWith',
              filter: 'g',
            },
            {
              type: 'startsWith',
              filter: 's',
            },
          ],
          operator: 'AND',
        },
      ],
    });
    this.gridApi.onFilterChanged();
  }

  ageBelow25() {
    var ageFilterComponent = this.gridApi.getFilterInstance('age')!;
    ageFilterComponent.setModel({
      type: 'lessThan',
      filter: 25,
      filterTo: null,
    });
    this.gridApi.onFilterChanged();
  }

  ageAbove30() {
    var ageFilterComponent = this.gridApi.getFilterInstance('age')!;
    ageFilterComponent.setModel({
      type: 'greaterThan',
      filter: 30,
      filterTo: null,
    });
    this.gridApi.onFilterChanged();
  }

  ageBelow25OrAbove30() {
    var ageFilterComponent = this.gridApi.getFilterInstance('age')!;
    ageFilterComponent.setModel({
      conditions: [
        {
          type: 'greaterThan',
          filter: 30,
          filterTo: null,
        },
        {
          type: 'lessThan',
          filter: 25,
          filterTo: null,
        },
      ],
      operator: 'OR',
    });
    this.gridApi.onFilterChanged();
  }

  ageBetween25And30() {
    var ageFilterComponent = this.gridApi.getFilterInstance('age')!;
    ageFilterComponent.setModel({
      type: 'inRange',
      filter: 25,
      filterTo: 30,
    });
    this.gridApi.onFilterChanged();
  }

  clearAgeFilter() {
    var ageFilterComponent = this.gridApi.getFilterInstance('age')!;
    ageFilterComponent.setModel(null);
    this.gridApi.onFilterChanged();
  }

  after2010() {
    var dateFilterComponent = this.gridApi.getFilterInstance('date')!;
    dateFilterComponent.setModel({
      type: 'greaterThan',
      dateFrom: '2010-01-01',
      dateTo: null,
    });
    this.gridApi.onFilterChanged();
  }

  before2012() {
    var dateFilterComponent = this.gridApi.getFilterInstance('date')!;
    dateFilterComponent.setModel({
      type: 'lessThan',
      dateFrom: '2012-01-01',
      dateTo: null,
    });
    this.gridApi.onFilterChanged();
  }

  dateCombined() {
    var dateFilterComponent = this.gridApi.getFilterInstance('date')!;
    dateFilterComponent.setModel({
      conditions: [
        {
          type: 'lessThan',
          dateFrom: '2012-01-01',
          dateTo: null,
        },
        {
          type: 'greaterThan',
          dateFrom: '2010-01-01',
          dateTo: null,
        },
      ],
      operator: 'OR',
    });
    this.gridApi.onFilterChanged();
  }

  clearDateFilter() {
    var dateFilterComponent = this.gridApi.getFilterInstance('date')!;
    dateFilterComponent.setModel(null);
    this.gridApi.onFilterChanged();
  }

  clearSportFilter() {
    var dateFilterComponent = this.gridApi.getFilterInstance('sport')!;
    dateFilterComponent.setModel(null);
    this.gridApi.onFilterChanged();
  }

  onGridReady(params: GridReadyEvent<any>) {
    this.gridApi = params.api;

    this.http
      .get<any[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => (this.rowData = data));
  }
}


