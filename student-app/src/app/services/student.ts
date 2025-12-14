import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  private api = 'https://localhost:7102/api';

  constructor(private http: HttpClient) {}

  // AUTH

  register(email: string, password: string) {
    return this.http.post(`${this.api}/auth/register`, { email, password });
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.api}/auth/login`, { email, password });
  }

  // Attach JWT
  private authHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  }

  // STUDENTS CRUD

  getStudents() {
    return this.http.get<any[]>(`${this.api}/students`, this.authHeaders());
  }

  addStudent(s: any) {
    return this.http.post(`${this.api}/students`, s, this.authHeaders());
  }

  updateStudent(s: any) {
    return this.http.put(`${this.api}/students/${s.id}`, s, this.authHeaders());
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.api}/students/${id}`, this.authHeaders());
  }
}
