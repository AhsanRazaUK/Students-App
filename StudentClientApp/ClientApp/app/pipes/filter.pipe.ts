import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../shared/student.model';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(items: Student[], searchText: string): Student[] {
        if (!items) return [];
        if (!searchText) return items;

        searchText = searchText.toLowerCase();
        return items.filter(item => item.surname.toLowerCase().includes(searchText) || item.firstName.toLowerCase().includes(searchText));
    }

}
