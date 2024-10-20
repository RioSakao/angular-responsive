import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannerStandaloneComponent } from './top-banner-standalone.component';

describe('TopBannerStandaloneComponent', () => {
  let component: TopBannerStandaloneComponent;
  let fixture: ComponentFixture<TopBannerStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBannerStandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBannerStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
