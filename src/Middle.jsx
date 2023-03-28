import news1 from '../public/assets/news1.jpg'
import news2 from '../public/assets/news2.jpg'
import news3 from '../public/assets/news3.jpg'
import news4 from '../public/assets/news4.jpg'



export function Middle() {
    return( 
        
        <div className="news-container" id="1">
            <div className="border-card">
                <img src={news1} alt="img1" />
                <h5>Lastest News</h5>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <button>Read More...</button>
            </div>
            <div className="border-card">
                <img src={news2} alt="img2" />
                <h5>Last Month</h5>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <button>Read More...</button>
            </div>
            <div className="border-card">
                <img src={news3} alt="img3" />
                <h5>Last Week</h5>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <button>Read More...</button>
            </div>
            <div className="border-card">
                <img src={news4} alt="img4" />
                <h5>Last Day</h5>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <button>Read More...</button>
            </div>
        </div>
    );
}