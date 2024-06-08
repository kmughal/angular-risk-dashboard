import { Feature } from './../types';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ListFeaturesComponent } from './list.features.component';

describe('ListFeaturesComponent', () => {
  let component: ListFeaturesComponent;
  let fixture: ComponentFixture<ListFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListFeaturesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListFeaturesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display features', () => {
    component.features = [
      { name: 'Feature 1', description: 'Description 1', id: 1 },
      { name: 'Feature 2', description: 'Description 2', id: 2 },
    ];
    fixture.detectChanges();

    const featureElements = fixture.debugElement.queryAll(By.css('.card'));
    expect(featureElements.length).toBe(2);

    expect(
      featureElements[0].query(By.css('.card-divider h2')).nativeElement
        .textContent
    ).toBe('Feature 1');
    expect(
      featureElements[0].query(By.css('.card-section p')).nativeElement
        .textContent
    ).toBe('Description 1');

    expect(
      featureElements[1].query(By.css('.card-divider h2')).nativeElement
        .textContent
    ).toBe('Feature 2');
    expect(
      featureElements[1].query(By.css('.card-section p')).nativeElement
        .textContent
    ).toBe('Description 2');
  });

  it('should display "No features found" when no features', () => {
    component.features = [];
    fixture.detectChanges();

    const featureElements = fixture.debugElement.queryAll(By.css('.card'));
    expect(featureElements.length).toBe(0);

    const noFeaturesElement = fixture.debugElement.query(By.css('p'));
    expect(noFeaturesElement.nativeElement.textContent).toBe(
      'No features found'
    );
  });
});
