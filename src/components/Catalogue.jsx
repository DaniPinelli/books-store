const Catalogue = () => {

    /* const getBooks = async () => {
         const data = await fetch('https://mern-books-server.herokuapp.com/')
         const books = await data.json()
         console.log(books)
     }*/



    return (
        <div>
            <div class="card" style={{ width: "18rem" }} >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Any Book</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Show More</a>
                </div>
            </div>
        </div>
    );
}

export default Catalogue;