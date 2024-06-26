import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryboardComponent } from './storyboard.component';

describe('StoryboardComponent', () => {
  let component: StoryboardComponent;
  let fixture: ComponentFixture<StoryboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
