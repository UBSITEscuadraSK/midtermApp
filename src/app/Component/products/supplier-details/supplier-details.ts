import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Suppliers } from '../../../models/supplier.interface';
import { SupplierServices } from '../service/supplier-services';

@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-details.html',
  styleUrl: './supplier-details.css',
})
export class SupplierDetails implements OnInit {
  supplier: Suppliers | undefined;
  supplierId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierServices
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.supplierId = Number(params['id']);
      this.supplier = this.supplierService.getSupplierById(this.supplierId);
    });
  }

  saveChanges(); void {
    if (this.suppliers) {
      this.supplierService.updateSupplier(this.suppliers);
      alert('Supplier updated Successfully!');
    }
  }

 goBack(): void {
  this.router.navigate(['/supplier']);
 }
}
