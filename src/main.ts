import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './home.component.html',
})
export class App {
  alunos = [
    {
      nome: 'Aluno 1',
      imagem: 'https://via.placeholder.com/80', // Imagem de placeholder
      ausencias: { material: 1, tarefa: 1, atraso: 1 },
      sala: {
        comportamento: 'Bom',
        participacao: 'Alta',
        aprendizagem: 'Média',
      },
    },
    {
      nome: 'Aluno 2',
      imagem: 'https://via.placeholder.com/80',
      ausencias: { material: 2, tarefa: 0, atraso: 1 },
      sala: {
        comportamento: 'Médio',
        participacao: 'Baixa',
        aprendizagem: 'Alta',
      },
    },
    {
      nome: 'Aluno 1',
      imagem: 'https://via.placeholder.com/80', // Imagem de placeholder
      ausencias: { material: 1, tarefa: 1, atraso: 1 },
      sala: {
        comportamento: 'Bom',
        participacao: 'Alta',
        aprendizagem: 'Média',
      },
    },
    {
      nome: 'Aluno 2',
      imagem: 'https://via.placeholder.com/80',
      ausencias: { material: 2, tarefa: 0, atraso: 1 },
      sala: {
        comportamento: 'Médio',
        participacao: 'Baixa',
        aprendizagem: 'Alta',
      },
    },
    {
      nome: 'Aluno 1',
      imagem: 'https://via.placeholder.com/80', // Imagem de placeholder
      ausencias: { material: 1, tarefa: 1, atraso: 1 },
      sala: {
        comportamento: 'Bom',
        participacao: 'Alta',
        aprendizagem: 'Média',
      },
    },
    {
      nome: 'Aluno 2',
      imagem: 'https://via.placeholder.com/80',
      ausencias: { material: 2, tarefa: 0, atraso: 1 },
      sala: {
        comportamento: 'Médio',
        participacao: 'Baixa',
        aprendizagem: 'Alta',
      },
    },
    {
      nome: 'Aluno 1',
      imagem: 'https://via.placeholder.com/80', // Imagem de placeholder
      ausencias: { material: 1, tarefa: 1, atraso: 1 },
      sala: {
        comportamento: 'Bom',
        participacao: 'Alta',
        aprendizagem: 'Média',
      },
    },
    {
      nome: 'Aluno 2',
      imagem: 'https://via.placeholder.com/80',
      ausencias: { material: 2, tarefa: 0, atraso: 1 },
      sala: {
        comportamento: 'Médio',
        participacao: 'Baixa',
        aprendizagem: 'Alta',
      },
    },
  ];

public currentSlide = 0;

moveSlide(direction:any) {
  const carousel:any = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalSlides = items.length;
  const slideWidth = items[0].clientWidth;

  // Atualiza o slide atual
  this.currentSlide += direction;

  // Se for o último slide, volta para o início
  if (this.currentSlide >= totalSlides - 3) {
    this.currentSlide = 0;
  }

  // Se for o primeiro slide, vai para o final
  if (this.currentSlide < 0) {
    this.currentSlide = totalSlides - 3;
  }

  // Move o carrossel
  carousel.style.transform = `translateX(${-slideWidth * this.currentSlide}px)`;
}


  name = 'Angular';
}

bootstrapApplication(App);
