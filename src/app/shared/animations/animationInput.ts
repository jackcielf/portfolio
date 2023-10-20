import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from "@angular/animations";

export const fadeAnimation = trigger("fadeAnimation", [
  transition("* => *", [
    query(".item-anime", [
      style({ opacity: 0, transform: "translateX(-50px)" }),
      stagger(200, [
        animate("0.3s", style({ opacity: 1, transform: "translateX(0)" })),
      ]),
    ]),
  ]),
]);
