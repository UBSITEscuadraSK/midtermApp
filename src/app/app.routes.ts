import { Routes } from '@angular/router';
import { Interpolation } from './databinding/interpolation/interpolation';
import { Property } from './databinding/property/property';
import { Attribute } from './databinding/attribute/attribute';
import { Class } from './databinding/class/class';
import { Style } from './databinding/style/style';
import { Home } from './Component/home/home';
import { EventBinding } from './databinding/event-binding/event-binding';
import { TwoWay } from './databinding/two-way/two-way';

export const routes: Routes = [
    {path: 'home', component: Home },
    {path: 'interpolation', component: Interpolation},
    {path: 'property-binding', component: Property},
    {path: 'event-binding', component: EventBinding},
    {path: 'two-way', component: TwoWay},
    {path: 'attribute', component: Attribute},
    {path: 'class', component: Class},
    {path: 'style', component: Style},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];