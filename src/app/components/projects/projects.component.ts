import { AfterViewInit, Component, OnInit } from "@angular/core";
import { GithubService } from "src/app/github.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  myData = []; // Array com todos os repositórios
  myDataProjects = []; // Array somente com os repositórios com URL para visualizar o projeto
  linkGmail = "mailto:jackcielfelix.dev@gmail.com?";
  deleteProjects = [
    "game-snake-desktop",
    "game-snake-mobile",
    "portfolio",
    "projects-web"
  ];

  nickname = "jakkifx";
  currentPage = 1;

  constructor(private gitHubService: GithubService) {}

  ngOnInit(): void {
    this.gitHubService
      .getRepos(this.nickname, this.currentPage)
      .subscribe((item) => {
        this.myData = item;

        this.filterProjects();
      });
  }

  // Executado quando a página é carregada
  ngAfterViewInit(): any {
    this.inputAnimationElements();
  }

  inputAnimationElements(): void {
    const element = document.querySelectorAll("[item-animation]");
    const animation = "animate";

    const windowTop = window.scrollY + (window.innerHeight * 3) / 3;

    element.forEach((el) => {
      const e = el as HTMLElement;
      if (windowTop > e.offsetTop) {
        e.classList.add(animation);
      } else {
        e.classList.remove(animation);
      }
    });
  }

  // Percorre o array com todos os repositórios e pega somente aqueles que contém URL para visualização do projeto
  filterProjects(): void {
    for (const data of this.myData) {
      if (data.homepage) {
        // Verificar se o valor de 'data.name' do objeto está na lista de elementos
        if (!this.deleteProjects.includes(data.name)) {
          this.myDataProjects.push(data);
        }
      }
    }
  }
}
