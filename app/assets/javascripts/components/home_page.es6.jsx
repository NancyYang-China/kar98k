class HomePage extends BasePage {

  _renderList() {
    const { product_shows } = this.props;

    const lisView = product_shows.map((show, index) => {
      return (
        <div className="show-item flex-v">
          <a href={'/project?cate=' + show.creative_category_id} target="_self">
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

  _pathById(id, index) {
    if (id === undefined) {
      return '/project?cate=' + (index === null ? 1 : index)
    } else {
      return `/project/${id}`
    }
  }

  _renderSingleShow(show, index, image, style) {
    return (
      <a href={this._pathById(show.ids[index-1], show.creative_category_id)} target="_self">
        <img src={image.url} style={style}/>
      </a>
    )
  }

  _renderImagesStyle1(show) {

    return (
      <div className="flex-h">
        <div className="flex-v" style={{marginRight: 10}}>
          {this._renderSingleShow(show, 1, show.image1, {marginBottom: 10})}
          {this._renderSingleShow(show, 2, show.image2)}
        </div>
        {this._renderSingleShow(show, 3, show.image3, {marginRight: 10})}
        <div className="flex-v" style={{marginRight: 10}}>
          {this._renderSingleShow(show, 4, show.image4, {marginBottom: 10})}
          {this._renderSingleShow(show, 5, show.image5)}
        </div>
        {this._renderSingleShow(show, 6, show.image6)}
      </div>
    )
  }

  _renderImagesStyle2(show) {

    return (
      <div className="flex-h">
        {this._renderSingleShow(show, 1, show.image1, {marginRight: 10})}
        <div className="flex-v" style={{marginRight: 10}}>
          {this._renderSingleShow(show, 2, show.image2, {marginBottom: 10})}
          {this._renderSingleShow(show, 3, show.image4)}
        </div>
        <div className="flex-v">
          {this._renderSingleShow(show, 4, show.image3, {marginBottom: 10})}
          {this._renderSingleShow(show, 5, show.image5)}
        </div>
      </div>
    )
  }

  _renderImagesStyle3(show) {
    return (
      <div className="flex-h">
        <div className="flex-v" style={{marginRight: 10}}>
          {this._renderSingleShow(show, 1, show.image1, {marginBottom: 10})}
          {this._renderSingleShow(show, 2, show.image3)}
        </div>
        <div className="flex-v" style={{marginRight: 10}}>
          {this._renderSingleShow(show, 3, show.image2, {marginBottom: 10})}
          {this._renderSingleShow(show, 4, show.image4)}
        </div>
        {this._renderSingleShow(show, 5, show.image5)}
      </div>
    )
  }

  _renderImagesStyle4(show) {
    return (
      <div className="images-style1 flex-v">
        <div className="flex-h" style={{marginBottom: 10}}>
          {this._renderSingleShow(show, 1, show.image1, {marginRight: 10})}
          {this._renderSingleShow(show, 2, show.image2, {marginRight: 10})}
          {this._renderSingleShow(show, 3, show.image3)}
        </div>
        <div className="flex-h">
          {this._renderSingleShow(show, 4, show.image4, {marginRight: 10})}
          {this._renderSingleShow(show, 5, show.image5, {marginRight: 10})}
          {this._renderSingleShow(show, 6, show.image6, {marginRight: 10})}
          {this._renderSingleShow(show, 7, show.image7)}
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
