class SlideBanner extends React.Component {

  _renderBanner(banner, index) {
    const className = index === 0 ? "item active" : "item"

    return (
      <div key={index} className={className}>
        <img src={banner.image.url} className='full-width banner-image'/>
      </div>
    );
  }

  render() {
    const bannersView = this.props.banners.map((banner, index)=> {
      return this._renderBanner(banner, index)
    })

    return (
      <div id="myCarousel" className="carousel slide"
           data-ride="carousel" data-interval={8000} data-pause={false}>
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active" />
          <li data-target="#myCarousel" data-slide-to="1" />
          <li data-target="#myCarousel" data-slide-to="2" />
          <li data-target="#myCarousel" data-slide-to="3" />
        </ol>
        <div className="carousel-inner">
          {bannersView}
        </div>
      </div>
    );
  }
}
