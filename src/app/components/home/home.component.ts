import {
  AfterViewInit,
  Component,
  OnInit,
  ElementRef,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
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
    this.inputAnimationElements();
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

  inputAnimationElements(): void {
    const el = document.querySelectorAll("[item-animation]");
    const animation = "animate";

    const windowTop = window.scrollY + (window.innerHeight * 3) / 3;
  }
}
