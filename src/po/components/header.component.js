export default class HeaderComponent {

    get header () {
        return $('#navbarExample');
    }

    item(text){
        return this.header.$(`//a[@class='nav-link' and contains(text(),"${text}")]`);
    };
}