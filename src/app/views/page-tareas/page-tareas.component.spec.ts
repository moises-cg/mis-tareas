import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTareasComponent } from './page-tareas.component';

describe('PageTareasComponent', () => {
  let component: PageTareasComponent;
  let fixture: ComponentFixture<PageTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
