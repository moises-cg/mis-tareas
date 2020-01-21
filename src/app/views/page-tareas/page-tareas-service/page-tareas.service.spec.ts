import { TestBed } from '@angular/core/testing';

import { PageTareasService } from './page-tareas.service';

describe('PageTareasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageTareasService = TestBed.get(PageTareasService);
    expect(service).toBeTruthy();
  });
});
