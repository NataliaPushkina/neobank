import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceAdding',
  standalone: true
})
export class SpaceAddingPipe implements PipeTransform {
  transform(value: number): string {
    const splitIndex = ((String(value).length + 2) % 3) + 1;
    return (
      String(value).substr(0, splitIndex) +
      String(value)
        .substr(splitIndex)
        .replace(/\d\d\d/g, ' $&')
    );
  }
}
