import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent {
  text = ""
  @Output() onSearch = new EventEmitter<string>();

  doSearch(){
    // TODO implementar debounce
    this.onSearch.emit(this.text);
  }
}

