class SlideBanner extends React.Component {

  _renderBanner(banner, index) {
    const className = index === 0 ? "item active" : "item"

    return (
      <div key={index} className={className}>
        <img src={banner.image.url} className='full-width banner-image'/>
      </div>
    );
  }

  _renderCarouselIndicators(banners) {
    var indicators = banners.map((banner, index) => {
      return <li data-target="#myCarousel" data-slide-to={index}/>
    })
    indicators[0] = <li data-target="#myCarousel" data-slide-to="0" className="active"/>

    return (
      <ol className="carousel-indicators">
        {indicators}
      </ol>
    )
  }

  render() {
    const { banners } = this.props;

    const bannersView = banners.map((banner, index)=> {
      return this._renderBanner(banner, index)
    })

    return (
      <div id="myCarousel" className="carousel slide"
           data-ride="carousel" data-interval={8000} data-pause={false}>
        {this._renderCarouselIndicators(banners)}
        <div className="carousel-inner">
          {bannersView}
        </div>
      </div>
    );
  }
}
