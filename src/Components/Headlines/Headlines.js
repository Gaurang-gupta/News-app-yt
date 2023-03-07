import { MdAccessTimeFilled } from "react-icons/md"
import "./Headlines.css"
function Headlines({ data }) {
    const edited = data.articles.slice(0, 6);
    const dateConversion = (date_json) => {
        var dates = date_json.split("T");
        return dates[0]
    }
    return (
        <section className="headlines">
            <h1 className="headlines__heading">Today's Headlines</h1>
            <div className="headlines__grid">
                {edited?.map((article, index) => (
                    <div className="headlines__gridElement" key={index}>
                        <div className="headlines__gridImageContainer">
                            {article.urlToImage && <img className="headlines__gridImage" src={article.urlToImage} alt="articleImage" />}
                        </div>
                        <div className="headlines__content">
                            <h2 className='headline'>{article.title.substring(0, Math.min(article?.title?.length, 37))}...</h2>
                            <div className='headline__footer'>
                                <h3 className='headline__source'>{article?.source?.name}</h3>
                                <div className='headline_dateContainer'>
                                    <MdAccessTimeFilled />
                                    <h3 className='headline__date'>{dateConversion(article?.publishedAt)}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Headlines