export default class SideCategoriesMenu {

    item(text){
        return $(`//a[@class='list-group-item' and contains(text(),"${text}")]`);
    };
}