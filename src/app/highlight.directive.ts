// highlight.directive.ts
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() isActive: boolean = false;

  @HostBinding('class.active')
  get active() { return this.isActive; }

  @HostBinding('class.hovered')
  isHovered: boolean = false;

  @HostBinding('style.box-shadow')
  get shadow(): string {
    return this.isHovered ? '0 2px 8px rgba(0,0,0,0.2)' : 'none';
  }

  @HostListener('mouseenter')
  onEnter() { this.isHovered = true; }

  @HostListener('mouseleave')
  onLeave() { this.isHovered = false; }
}
