import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { TabRegisterPage } from './tab-register.page';

describe('TabRegisterPage', () => {
  let component: TabRegisterPage;
  let fixture: ComponentFixture<TabRegisterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabRegisterPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
