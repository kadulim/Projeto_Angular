import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  protected readonly title = signal('Projeto_Angular');

  protected readonly readingProgress = signal(40);

  protected readonly sections = [
    { id: 'objetivo', label: '#objetivo', name: 'Objetivo' },
    { id: 'funcionalidades', label: '#funcionalidades', name: 'Funcionalidades' },
    { id: 'arquitetura', label: '#arquitetura', name: 'Arquitetura / Fluxo' },
    { id: 'recursos', label: '#recursos', name: 'Recursos utilizados' },
  ];

  protected readonly featureCards = [
    {
      icon: 'widgets',
      title: 'Componentes',
      text: 'Permitem dividir a interface da aplicação em partes independentes e reutilizáveis. Cada componente possui sua própria estrutura, comportamento e estilos.',
    },
    {
      icon: 'hub',
      title: 'Serviços',
      text: 'Services permitem centralizar regras de negócio, operações compartilhadas e comunicação com outros recursos da aplicação.',
    },
    {
      icon: 'sync_alt',
      title: 'Comunicação com APIs',
      text: 'O Angular possui recursos para realizar requisições HTTP e consumir APIs externas, permitindo buscar, enviar, atualizar e remover informações.',
    },
    {
      icon: 'assignment',
      title: 'Formulários',
      text: 'Os recursos de formulários permitem criar interfaces para entrada, validação e manipulação de dados.',
    },
    {
      icon: 'bolt',
      title: 'Reatividade',
      text: 'O Angular possui mecanismos para atualizar a interface de acordo com alterações nos dados da aplicação.',
    },
    {
      icon: 'code',
      title: 'Diretivas e Templates',
      text: 'Os templates Angular permitem associar dados e comportamentos à interface, utilizando recursos como condicionais, repetição de elementos e bindings.',
    },
  ];

  protected readonly resources = [
    {
      title: 'TypeScript',
      text: 'Linguagem utilizada no desenvolvimento Angular, adicionando tipagem e recursos que auxiliam na organização do código.',
    },
    {
      title: 'Components',
      text: 'Base da construção da interface Angular.',
    },
    {
      title: 'Angular Router',
      text: 'Responsável pelo gerenciamento da navegação entre páginas.',
    },
    {
      title: 'Services',
      text: 'Utilizados para compartilhar lógica e realizar operações como comunicação com APIs.',
    },
    {
      title: 'HttpClient',
      text: 'Utilizado para realizar requisições HTTP e trabalhar com APIs.',
    },
    {
      title: 'Templates',
      text: 'Responsáveis pela representação visual e interação da aplicação.',
    },
    {
      title: 'Signals / Recursos de reatividade',
      text: 'Utilizados para representar e acompanhar alterações nos dados da aplicação.',
    },
    {
      title: 'Data Binding',
      text: 'Permite conectar os dados e eventos do componente com os elementos da interface.',
    },
  ];

  protected readonly flowSteps = [
    'Usuário',
    'Clique em um botão',
    'Componente Angular',
    'Service',
    'API',
    'Dados retornados',
    'Componente',
    'Interface atualizada',
  ];
}