import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSongPopupComponent } from './add-edit-song.popup.component';

describe('AddEditSongPopupComponent', () => {
  let component: AddEditSongPopupComponent;
  let fixture: ComponentFixture<AddEditSongPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSongPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSongPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
