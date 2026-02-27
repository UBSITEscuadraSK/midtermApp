import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-interpolation',
  imports: [JsonPipe, FormsModule],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  title: string = 'angular data binding demo';
  studentName: string = 'Escuadra, Kirby';
  courseCode: string = 'APPDEV1';
  currentYear: number = new Date().getFullYear();
  roles = ['Admin', 'Editor', 'Viewer'];
  text: string = "{{expression}}";
  curly: string = "{{ }}";
  common: string = "{{ userName }}";
  methods: string = "{{ getStatus() }}";
  dotnot: string = "{{ user.name }}";
  dotnot2: string = "{{ user?.profile?.email }}";
  jpipe: string = "{{user | json}}";
  isActive: boolean = false;
  //obj type
  
  user: User = {
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'IT',
    details: {role: 'Admin'}
  };

  
}
  