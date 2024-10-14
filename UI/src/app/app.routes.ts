import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { title } from 'process';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:'/app',
        pathMatch:'full'
    },
];
