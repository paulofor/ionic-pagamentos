import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteAcessoPage } from './teste-acesso.page';

describe('TesteAcessoPage', () => {
  let component: TesteAcessoPage;
  let fixture: ComponentFixture<TesteAcessoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteAcessoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteAcessoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
