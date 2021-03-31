import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTableComponent } from './contact-table.component';

describe('ScrollListComponent', () => {
  let component: ContactTableComponent;
  let fixture: ComponentFixture<ContactTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
