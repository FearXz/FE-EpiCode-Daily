class Article {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  // metodo statico agganciato alla classe principale (non si propaga direttamente ai figli)
  // per trovare isSameAuthorStatic devo cercarlo all'interno della classe principale! NON nelle istanze
  static isSameAuthorStatic(articleA, articleB) {
    return articleA.author === articleB.author
      ? "l'autore è lo stesso"
      : "l'autore di " + articleA.title + " non è l'autore anche di " + articleB.title;
  }

  // metodo non statico agganciato all'istanza della classe
  isSameAuthor(articleToCompare) {
    return articleToCompare.author === this.author
      ? this.author + " è anche l'autore di " + articleToCompare.title
      : "l'autore è diverso";
  }
}

const myArticle = new Article("JS basics", "Antonio Frascati");
const myArticle2 = new Article("HTML Fundamentals", "Antonio Frascati");
const myArticle3 = new Article("React Router", "Giuseppe Rossi");

console.log(myArticle);
console.log(myArticle.isSameAuthor(myArticle2));
console.log(myArticle3.isSameAuthor(myArticle));

console.log(Article.isSameAuthorStatic(myArticle, myArticle2));
console.log(Article.isSameAuthorStatic(myArticle, myArticle3));
