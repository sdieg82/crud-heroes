import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPageHeroesComponent } from './layout-page-heroes.component';

describe('LayoutPageHeroesComponent', () => {
  let component: LayoutPageHeroesComponent;
  let fixture: ComponentFixture<LayoutPageHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutPageHeroesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutPageHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
