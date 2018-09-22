class HomePage extends BasePage {

  _renderList() {
    const { product_shows } = this.props;

    const lisView = product_shows.map((show, index) => {
      return (
        <div className="show-item flex-v">
          <a href={'/project?cate=' + (index+1)} target="_self">
            <p key={index}>{show.name}</p>
          </a>
         {this._renderImages(show, index)}
        </div>
      )
    })

    return (
      <div className="product-shows flex-v">
        {lisView}
      </div>
    );
  }

  _renderImages(show, index) {
    if (index == 0) {
      return this._renderImagesStyle1(show)
    } else if (index == 1) {
      return this._renderImagesStyle2(show)
    } else if (index == 2) {
      return this._renderImagesStyle3(show)
    } else {
      return this._renderImagesStyle4(show)
    }
  }

  _renderImagesStyle1(show) {
    return (
      <div className="flex-h">
        <div className="flex-v" style={{marginRight: 10}}>
          <a href={'/project/1'} target="_self">
            <img src={show.image1.url} style={{marginBottom: 10}}/>
          </a>
          <a href={'/project/2'} target="_self">
            <img src={show.image2.url}/>
          </a>
        </div>
        <a href={'/project/3'} target="_self">
          <img src={show.image3.url} style={{marginRight: 10}}/>
        </a>
        <div className="flex-v" style={{marginRight: 10}}>
          <a href={'/project/4'} target="_self">
            <img src={show.image4.url} style={{marginBottom: 10}}/>
          </a>
          <a href={'/project/5'} target="_self">
            <img src={show.image5.url}/>
          </a>
        </div>
        <a href={'/project/6'} target="_self">
          <img src={show.image6.url}/>
        </a>
      </div>
    )
  }

  _renderImagesStyle2(show) {

    return (
      <div className="flex-h">
        <img src={show.image1.url} style={{marginRight: 10}}/>
        <div className="flex-v" style={{marginRight: 10}}>
          <img src={show.image2.url} style={{marginBottom: 10}}/>
          <img src={show.image4.url}/>
        </div>
        <div className="flex-v">
          <img src={show.image3.url} style={{marginBottom: 10}}/>
          <img src={show.image5.url}/>
        </div>
      </div>
    )
  }

  _renderImagesStyle3(show) {
    return (
      <div className="flex-h">
        <div className="flex-v" style={{marginRight: 10}}>
          <img src={show.image1.url} style={{marginBottom: 10}}/>
          <img src={show.image3.url}/>
        </div>
        <div className="flex-v" style={{marginRight: 10}}>
          <img src={show.image2.url} style={{marginBottom: 10}}/>
          <img src={show.image4.url}/>
        </div>
        <img src={show.image5.url}/>
      </div>
    )
  }

  _renderImagesStyle4(show) {
    return (
      <div className="images-style1 flex-v">
        <div className="flex-h" style={{marginBottom: 10}}>
          <img src={show.image1.url} style={{marginRight: 10}}/>
          <img src={show.image2.url} style={{marginRight: 10}}/>
          <img src={show.image3.url}/>
        </div>
        <div className="flex-h">
          <img src={show.image4.url} style={{marginRight: 10}}/>
          <img src={show.image5.url} style={{marginRight: 10}}/>
          <img src={show.image6.url} style={{marginRight: 10}}/>
          <img src={show.image7.url}/>
        </div>
      </div>
    )
  }

  _render() {
    return (
      <div className="flex-v flex-vc" style={{paddingTop: 60}}>
        <SlideBanner banners={this.props.banners}/>
        {this._renderList()}
      </div>
    )
  }
}
