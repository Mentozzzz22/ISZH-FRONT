import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDirectoryFormComponent } from './create-directory-form.component';

describe('CreateDirectoryFormComponent', () => {
  let component: CreateDirectoryFormComponent;
  let fixture: ComponentFixture<CreateDirectoryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDirectoryFormComponent]
    });
    fixture = TestBed.createComponent(CreateDirectoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
