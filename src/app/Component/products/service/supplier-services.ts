import { Injectable } from '@angular/core';
import { Suppliers } from '../../../models/supplier.interface';


@Injectable({
  providedIn: 'root',
})
export class SupplierServices {

  private supplier: Suppliers [] = [
    { id: 1, SupplierName: 'Alpha Goods Co.', contactPerson: 'Alice Reyes', email: 'alice@alphagoods.com', phone: '09171234567', Location: 'Makati, Metro Manila', ProductsSupplied:  'Furniture'},
    { id: 2, SupplierName: 'Beta Tech Supplies', contactPerson: 'Bob Santos', email: 'bob@betatech.com', phone: '09181234567', Location: 'Quezon City, Metro Manila', ProductsSupplied:  'Peripherals'},
    { id: 3, SupplierName: 'Gamma Fresh Farms', contactPerson: 'Cara Cruz', email: 'cara@gammafarms.com', phone: '09191234567', Location: 'Benguet, Cordillera', ProductsSupplied:  'Fruits'},
    { id: 4, SupplierName: 'Delta Packaging Inc.', contactPerson: 'Dan Lim', email: 'dan@deltapkg.com', phone: '09201234567', Location: 'Pasig, Metro Manila', ProductsSupplied:  'Plastic Wrap'},
    { id: 5, SupplierName: 'Epsilon Tools Ltd.', contactPerson: 'Eva Garcia', email: 'eva@epsilontools.com', phone: '09211234567', Location: 'Cebu City, Cebu', ProductsSupplied:  'Power Tools'},
    { id: 6, SupplierName: 'Zeta Cleaning Corp.', contactPerson: 'Zack Torres', email: 'zack@zetaclean.com', phone: '09221234567', Location: 'Davao City, Davao', ProductsSupplied:  'Disinfectants'},
    { id: 7, SupplierName: 'Eta Electronics PH', contactPerson: 'Hana Flores', email: 'hana@etaelectronics.com', phone: '09231234567', Location: 'Mandaluyong, Metro Manila', ProductsSupplied:  'Cables'},
    { id: 8, SupplierName: 'Theta Print House', contactPerson: 'Theo Mendoza', email: 'theo@thetaprint.com', phone: '09241234567', Location: 'Caloocan, Metro Manila', ProductsSupplied: 'Brochures'},
    { id: 9, SupplierName: 'Iota Safety Gear', contactPerson: 'Iris Villanueva', email: 'iris@iotasafety.com', phone: '09251234567', Location: 'Laguna, Calabarzon', ProductsSupplied:  'Vests'},
    { id: 10, SupplierName: 'Kappa Food Distributors', contactPerson: 'Kyle Aquino', email: 'kyle@kappafood.com', phone: '09261234567', Location: 'Iloilo City, Western Visayas', ProductsSupplied:  'Beverages'},
  ];
  getSuppliers(): Suppliers[]{
    return this.supplier;
  }

  getSupplierById(id: number): Suppliers | undefined{ 
    return this.supplier.find(w => w.id === id);   
  }

  updateSupplier(updated: Suppliers): void {
    const idx = this.supplier.findIndex(w => w.id === updated.id);
    if (idx !== -1) this.supplier[idx] = { ...updated};
  }

}
