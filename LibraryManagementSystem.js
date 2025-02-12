class Book {
    constructor(title,author,genre) {
        this.title=title;
        this.author=author;
        this.genre=genre;

    }
    getDetails(){
        return `${this.title} written by ${this.author} Genre as ${this.genre}`;
    }
}
class NewYearBook extends Book{
    constructor(title,author,genre,year){
        super(title,author,genre);
        this.year=year;
    }
    getYear(){
        return `${super.getDetails()} publied is ${this.year}`
    }

}

class Library{
    constructor(){
        this.books=[];
    }
    addBook(book){
        this.books.push(book);
        console.log(`Added ${book.title}`);
    }
    removeBook(title){
        this.books=this.books.filter(book=>book.title!=title);
        console.log(`${title}`)
    }
    searchBook(title){
    return this.books=this.books.filter(books=>books.title.toLowercase()===title.toLowercase())
    }
    displayBooks(){
        if(this.books.length===0){
            console.log("there is no books");
        }else{
            this.books.forEach(book=>console.log(book.getDetails()));
        }
    }
}

const  book1=new Book("Wonder Of Science","Sabuj Sarker","Science Fiction");
const  book2=new Book("Wonder Of Science","Ador Vai","Science Fiction");
const  book3=new Book("Wonder Of Science","Wasi Vai","Science Fiction");
const book4= new NewYearBook("New year Book","alam Saha","Historical",2025);
const myLibrary=new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
console.log(book4.getYear());



