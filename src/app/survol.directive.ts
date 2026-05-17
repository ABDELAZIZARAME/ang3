// survol.directive.ts
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSurvol]',
  standalone: true
})
export class SurvolDirective {
  @Input() appSurvol: string = '#FFFDE7'; // Jaune pâle par défaut

  private couleurOriginale: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.couleurOriginale = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor = this.appSurvol;
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = this.couleurOriginale;
  }
}
