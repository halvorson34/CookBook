import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  // allows user to open/close a dropdown menu by clicking
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  // allows user to open dropdown menu on mouse hover
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.isOpen = !this.isOpen;
  }

  // allows user to close dropdown menu on mouse leaving menu
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
