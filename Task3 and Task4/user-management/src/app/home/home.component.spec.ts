import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have the heading h1 with text Users Management",()=>{
    const element=fixture.debugElement.nativeElement.querySelector('h1');
    expect(element.textContent).toEqual("Users Management");
  });

  it("should have the paragraph tag with text",()=>{
    const element=fixture.debugElement.nativeElement.querySelector('p');
    expect(element.textContent).toEqual("Welcome to Users Management System");
  });

});
