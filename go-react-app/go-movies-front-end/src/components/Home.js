import Ticket from './../images/ticket.png';

const Home = () => {
    return (
        <>
            <div className="text-center">
                <h2>Find a movie to watch</h2>
                <hr></hr>
                <img src={Ticket} alt='movie ticket' width={350}></img>
            </div>
        </>
    )
};

export default Home;
