import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register'; // 1. Match the actual class name
import { StudentService } from '../../services/student'; // 2. Ensure path to service is correct
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Standalone components go in 'imports'
      imports: [RegisterComponent],
      providers: [
        StudentService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});