import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  myData = []; // Array com todos os repositórios
  myDataProjects = []; // Array somente com os repositórios com URL para visualizar o projeto
  linkGmail = 'mailto:jackcielfelix.dev@gmail.com?';

  nickname = 'jakkifx';
  currentPage = 1;

  constructor(private gitHubService: GithubService) {}

  ngOnInit(): void {
    this.gitHubService.getRepos(this.nickname, this.currentPage).subscribe((item) => {
      this.myData = item;

      this.filterProjects();
      // this.addImage();
    });
  }

  // Executado quando a página é carregada
  ngAfterViewInit(): any {
    // this.inputAnimationElements();
  }

  // inputAnimationElements(): void {
  //   const el = document.querySelectorAll('[item-animation]');
  //   const animation = 'animate';

  //   const windowTop = window.scrollY + (window.innerHeight * 3) / 3;

  //   //   el.forEach((e) => {
  //   //     if (windowTop > e.offsetTop) {
  //   //       e.classList.add(animation);
  //   //     } else {
  //   //       e.classList.remove(animation);
  //   //     }
  //   //   });
  // }

  // Percorre o array com todos os repositórios e pega somente aqueles que contém URL para visualização do projeto
  filterProjects(): void {
    for (let i = 0; i < this.myData.length; i++) {
      if (this.myData[i].homepage) {
        this.myDataProjects.push(this.myData[i]);
      }
    }
  }

  // addImage(): void {
  //   this.myDataProjects.forEach((obj, index) => {
  //   const newParam = this.imgProjects[index];
  //   for (const key in newParam) {
  //     if (newParam.hasOwnProperty(key)) {
  //       obj[key] = newParam[key];
  //     }
  //   }
  // });

  // console.log(this.myDataProjects);
  // }
}
