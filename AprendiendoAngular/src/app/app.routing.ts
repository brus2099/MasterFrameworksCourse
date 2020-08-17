// Importar los modulos del router de angular

import { ModuleWithProviders } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

// Importar componentes con los cuales hare una pagina exclusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MusicaComponent } from './components/musica/musica.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';

// Array de rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/articulo/:id', component: ArticleComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'musica', component: MusicaComponent},
    {path: 'pruebas-pagina', component: PaginaComponent},
    {path: 'pruebas-pagina/:nombre/:apellidos', component: PaginaComponent},
    {path: '**', component: ErrorComponent}
];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);