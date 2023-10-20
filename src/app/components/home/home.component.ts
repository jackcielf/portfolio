import {
  AfterViewInit,
  Component,
  OnInit,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { fadeAnimation } from "../../shared/animations/animationInput";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [fadeAnimation],
})
export class HomeComponent implements OnInit, AfterViewInit {
  // Animação de letras aparecendo
  @ViewChild("containerName", { static: true }) el: ElementRef;
  text = "Jackciel Felix";
  interval = 200;

  constructor() {}

  ngOnInit(): void {}

  // Executado quando a página é carregada
  ngAfterViewInit(): any {
    this.showText(this.el.nativeElement, this.text, this.interval);
  }

  showText(el: any, text: string, interval: number): any {
    const char = text.split("").reverse();
    const typer = setInterval(() => {
      if (!char.length) {
        return clearInterval(typer);
      }

      const next = char.pop();

      el.innerHTML += next;
    }, interval);
  }
}
