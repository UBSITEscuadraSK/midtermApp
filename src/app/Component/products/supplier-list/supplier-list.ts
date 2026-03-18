import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Suppliers } from '../../../models/supplier.interface';
import { SupplierServices } from '../service/supplier-services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-supplier-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supplier-list.html',
  styleUrl: './supplier-list.css',
})
export class SupplierList implements OnInit {
  supplier: Suppliers[] = [];

  constructor(
    private supplierService: SupplierServices, private router: Router) {}

    ngOnInit(): void {
      this.supplier = this.supplierService.getSuppliers();
    }

    viewSupplierDetails(id: number): void {
      this.router.navigate(['suppliers', id]);
    }
}
