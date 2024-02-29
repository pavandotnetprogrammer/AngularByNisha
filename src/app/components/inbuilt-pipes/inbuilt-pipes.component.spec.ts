import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltPipesComponent } from './inbuilt-pipes.component';

describe('InbuiltPipesComponent', () => {
  let component: InbuiltPipesComponent;
  let fixture: ComponentFixture<InbuiltPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InbuiltPipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InbuiltPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
