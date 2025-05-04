export default function SearchFilters({formData, updateForm}) {
    return (
        <form className="search-form">
          <div className="browse">
            <p>Browse</p>

            <div className="filter-toggle">
              <label className={formData.filter_toggle === 'all' ? 'selected' : ''} htmlFor="browse-all">
                All
                <input type="radio" name="filter_toggle" value='all' checked={formData.filter_toggle === 'all'}  id="browse-all" onChange={updateForm} />
              </label>

              <label className={formData.filter_toggle === 'search' ? 'selected' : ''} htmlFor="browse-by-title">
                Search
                <input type="radio" name="filter_toggle" value='search' checked={formData.filter_toggle === 'search'} id="browse-by-title" onChange={updateForm} />
              </label>
            </div>
          </div>

          {formData.filter_toggle === 'search' && (
            <div className="search-field">
            <label htmlFor="movieTitle">
              <input type="text" name="movie_title_query" id="movieTitle" placeholder="Search movie title... " onChange={updateForm} />
            </label>
          </div>
          )} 
          
        </form>
    )
}