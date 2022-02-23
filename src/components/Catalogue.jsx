import { useState, useEffect } from 'react'
import bookImage from './book.jpg'
import '../index.css'

const Catalogue = () => {

    const [book, setBook] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await fetch('https://mern-books-server.herokuapp.com/')
            const books = await data.json()
            setBook(books)
            getData()
            // console.log(book)
        }
    })

    return (
        <div className="firstDiv">
            <div class="card" style={{ width: "18rem" }} >
                <img src={bookImage} style={{ width: "10rem" }} className="card-img-top" alt="Book" />
                <div className="card-body">
                    <h5 className="card-title">Any Book</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p>pages:100</p>
                    <a href="#" className="btn btn-primary">Show More</a>
                </div>
            </div>
            <div class="card" style={{ width: "18rem" }} >
                <img src={bookImage} style={{ width: "10rem" }} className="card-img-top" alt="Book" />
                <div className="card-body">
                    <h5 className="card-title">Any Book</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p>pages:100</p>
                    <a href="#" className="btn btn-primary">Show More</a>
                </div>
            </div>
            <div class="card" style={{ width: "18rem" }} >
                <img src={bookImage} style={{ width: "10rem" }} className="card-img-top" alt="Book" />
                <div className="card-body">
                    <h5 className="card-title">Any Book</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p>pages:100</p>
                    <a href="#" className="btn btn-primary">Show More</a>
                </div>
            </div>
            <div class="card" style={{ width: "18rem" }} >
                <img src={bookImage} style={{ width: "10rem" }} className="card-img-top" alt="Book" />
                <div className="card-body">
                    <h5 className="card-title">Any Book</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p>pages:100</p>
                    <a href="#" className="btn btn-primary">Show More</a>
                </div>
            </div>
        </div>
    );


}

export default Catalogue