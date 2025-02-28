export class Book {
    code! : string;
    bookName! : string;
    price! : number;
    category! : string;
    bookImage! :string | null;
    fav : boolean = false;

    constructor(
        code: string,
        bookName: string,
        price: number,
        category: string,
        bookImage: string
    ) {
        this.code = code;
        this.bookName = bookName;
        this.price = price;
        this.category = category;
        this.bookImage = bookImage;
    }   
    

}