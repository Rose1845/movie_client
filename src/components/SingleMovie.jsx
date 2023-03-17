const SingleMovie = ({ movie }) => {
    const { title, poster_path, overview, release_date } = movie;
    return (
        <div className="single-movie">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
        <div className="single-movie-info">
            <h2>{title}</h2>
            <p>{overview}</p>
            <p>{release_date}</p>
        </div>
        </div>
    );
    }