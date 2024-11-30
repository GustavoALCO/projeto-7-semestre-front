import { Component, input, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card-image',
  standalone: true,
  imports: [],
  templateUrl: './card-image.component.html',
  styleUrl: './card-image.component.scss'
})
export class CardImageComponent {
  @Input() Image!: string;

  @Output() nome = new EventEmitter<any>()

  isDarkened: boolean = false

  activateDarkened() {
    this.isDarkened = !this.isDarkened;
    //verefica se foi slecionado
    const nome = this.extrairNome(this.Image)
    //converte a url da imagem para obter o nome
    
    const buttonImagem = {
      nome: nome,
      valid: this.isDarkened
    }
    this.nome.emit([buttonImagem])
    
  }

  extrairNome(url: string): string | null{
    try {
      const partes = url.split('/');

      const arquivo = partes.pop();
      
      if (!arquivo) {
        throw new Error("URL não contém um arquivo válido.");
      }

      const marca = arquivo.replace('.webp', '');
      
      if (marca === arquivo) {
        throw new Error("A URL não contém uma extensão '.webp'.");
      }

      return marca;
    } catch (error) {
      console.error("Erro ao extrair nome da URL:");
      return null;
    }
  }
}