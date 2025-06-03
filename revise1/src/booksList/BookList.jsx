
import Books from "./Books"
import { bookArray } from "./bookObject"


const BookList = () => {

    const bookListEle = bookArray.map(function(item){
        return (
            <>
                <Books 
                    title = {item.title}
                    author = {item.author} 
                />
            </>
        )
    })
  return (
    <div>
        List of books
        {bookListEle}
    </div>
  )
}

export default BookList