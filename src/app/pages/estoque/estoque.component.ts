import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FiltroComponent } from './filtro/filtro.component';
import { CardComponent } from "../../components/card/card.component";
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { Moto } from '../../models/Motos';
import { MotosService } from '../../Services/motos.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BehaviorSubject, catchError, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    FiltroComponent,
    CardComponent,
    RouterLink
  ],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.scss'
})
export class EstoqueComponent {
  isActive: boolean = false;
  mobile: boolean = false;
  private pageSubject = new BehaviorSubject<number>(1); // Inicializa com a página 1
  page$ = this.pageSubject.asObservable(); // Observável para a página atual
  model: string = ''; // Para buscas pelo modelo
  currentFilter: any = null; // Para armazenar o estado atual dos filtros
  Motos: Moto[] = []; // Lista de motos
  errorCode!:number | undefined
  private route = inject(ActivatedRoute);
  breakpointObserver = inject(BreakpointObserver);
  dialog = inject(MatDialog);

  constructor(private MotosService: MotosService) {
    // Configuração para detectar mobile
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((result: BreakpointState) => {
      this.mobile = result.matches;
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const model = params['model'];
      this.model = model;
      console.log(this.errorCode)
      this.page$
        .pipe(
          switchMap(page => {
             return this.MotosService.GetMotosModel(model, page); 
          })
        )
        .subscribe(
          motos => {
            this.Motos = motos;
          },
          error => {
            console.error(`Erro ao buscar modelo:`, error);
            this.MotosService.GetMotosModel('', 1).subscribe(motos => {
              this.Motos = motos;
            });
          }
        );
    });
  }

  activateLoading() {
    this.isActive = true;

    const currentPage = this.pageSubject.value;
    const newPage = currentPage + 1;

    // Atualiza o BehaviorSubject
    this.pageSubject.next(newPage);
    
    if (this.currentFilter) {
      // Se houver filtros ativos, chama o método com filtros
      this.buscarComFiltro(this.currentFilter, newPage);
    } else {
      // Se não houver filtros, chama o método sem filtros
      this.buscarSemFiltro(newPage);
    }

    setTimeout(() => {
      this.isActive = false;
    }, 2000);
  }

  onParametersReceived(filterData: any) {
    this.currentFilter = filterData; // Atualiza o estado atual do filtro
    this.pageSubject.next(1); // Reseta para a página 1 ao aplicar novos filtros
    this.buscarComFiltro(filterData, 1); // Chama a API com os parâmetros
  }

  buscarComFiltro(filtros: any, page: number): void {
    this.MotosService.GetMotosFilter(
      filtros.Brands || '',
      filtros.Model ||'',
      filtros.Color || '',
      filtros.Year || '',
      filtros.Km || '',
      filtros.Price || '',
      page
    )
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao buscar motos:', error);
        this.errorCode = error.status
        return of([]); 
      })
    )
    .subscribe(motos => {
      if (page === 1) {
        this.Motos = motos; // Substitui a lista ao buscar nova página
        this.errorCode = undefined
      } else {
        this.Motos = [...this.Motos, ...motos]; // Adiciona os novos itens à lista existente
      }
      console.log('Motos atualizadas:', this.Motos);
    });
  }

  buscarSemFiltro(page: number): void {
    this.MotosService.GetMotosModel('', page)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erro ao obter motos:', error);
          this.errorCode = error.status
          return of([]);
        })
      )
      .subscribe(motos => {
        if (page === 1) {
          this.Motos = motos; // Substitui a lista ao buscar nova página
        } else {
          this.Motos = [...this.Motos, ...motos]; // Adiciona os novos itens à lista existente
        }
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FiltroComponent, {
      width: '150px',
      height: '700px'
    });
  }
}
