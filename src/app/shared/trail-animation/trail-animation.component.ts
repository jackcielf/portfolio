import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-trail-animation",
  templateUrl: "./trail-animation.component.html",
  styleUrls: ["./trail-animation.component.scss"],
})
export class TrailAnimationComponent implements OnInit {
  @ViewChild("canvas", { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  mouseMoved = false;
  pointer = {
    x: 0.5 * window.innerWidth,
    y: 0.5 * window.innerHeight,
  };
  params = {
    pointsNumber: 40,
    widthFactor: 0.3,
    mouseThreshold: 0.6,
    spring: 0.4,
    friction: 0.5,
  };
  trail = new Array(this.params.pointsNumber);

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext("2d");

    for (let i = 0; i < this.params.pointsNumber; i++) {
      this.trail[i] = {
        x: this.pointer.x,
        y: this.pointer.y,
        dx: 0,
        dy: 0,
      };
    }

    window.addEventListener("click", (e) => {
      this.updateMousePosition(e.pageX, e.pageY);
    });
    window.addEventListener("mousemove", (e) => {
      this.mouseMoved = true;
      this.updateMousePosition(e.pageX, e.pageY);
    });
    window.addEventListener("touchmove", (e) => {
      this.mouseMoved = true;
      this.updateMousePosition(
        e.targetTouches[0].pageX,
        e.targetTouches[0].pageY
      );
    });

    this.setupCanvas();
    this.ngZone.runOutsideAngular(() => this.update(0));
    window.addEventListener("resize", () => this.setupCanvas());
  }

  updateMousePosition(eX: number, eY: number) {
    this.pointer.x = eX;
    this.pointer.y = eY;
  }

  setupCanvas() {
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
  }

  update(t: number) {
    if (!this.mouseMoved) {
      this.pointer.x =
        (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) *
        window.innerWidth;
      this.pointer.y =
        (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) *
        window.innerHeight;
    }

    this.ctx.clearRect(
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );
    this.trail.forEach((p, pIdx) => {
      const prev = pIdx === 0 ? this.pointer : this.trail[pIdx - 1];
      const spring = pIdx === 0 ? 0.4 * this.params.spring : this.params.spring;
      p.dx += (prev.x - p.x) * spring;
      p.dy += (prev.y - p.y) * spring;
      p.dx *= this.params.friction;
      p.dy *= this.params.friction;
      p.x += p.dx;
      p.y += p.dy;
    });

    this.ctx.beginPath();
    this.ctx.moveTo(this.trail[0].x, this.trail[0].y);

    for (let i = 1; i < this.trail.length - 1; i++) {
      const xc = 0.5 * (this.trail[i].x + this.trail[i + 1].x);
      const yc = 0.5 * (this.trail[i].y + this.trail[i + 1].y);
      this.ctx.quadraticCurveTo(this.trail[i].x, this.trail[i].y, xc, yc);
      this.ctx.lineWidth =
        this.params.widthFactor * (this.params.pointsNumber - i);
      this.ctx.stroke();
    }
    this.ctx.lineTo(
      this.trail[this.trail.length - 1].x,
      this.trail[this.trail.length - 1].y
    );
    this.ctx.strokeStyle = "#cbf281";
    window.requestAnimationFrame((newT) => this.update(newT));
  }
}
