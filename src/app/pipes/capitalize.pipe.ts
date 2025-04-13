import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {
    transform(text: string, index?: number) {
        index = index || 0;
        return text.slice(0, index) + text.charAt(index).toUpperCase() + text.slice(index + 1);
    }
}