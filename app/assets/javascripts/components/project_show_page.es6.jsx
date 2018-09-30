class ProjectShowPage extends BasePage {

  _renderImages() {
    const { project } = this.props;

    return (
      <div className="images-container flex-v flex-vc">
        <img className="top-image" src={project.image1.url}/>
        <div className="flex-h">
          <div className="image-v flex-v">
            <img className="image-left" src={project.image2.url}/>
            <img className="image-left" src={project.image3.url}/>
          </div>
          <div className="image-v flex-v">
            <img className="image-right" src={project.image4.url}/>
            <img className="image-right" src={project.image5.url}/>
          </div>
        </div>
      </div>
    )
  }

  _render() {
    const { name, description, category } = this.props.project;

    return (
      <div className="project-show flex-v">
        <div className="header flex-h">
          <div className="header-left flex-v">
            <p className="project-name">{name}</p>
            <p className="project-type">{`设计类别-${category}`}</p>
          </div>
          <p className="header-right">
            {description}
          </p>
        </div>
        {this._renderImages()}
      </div>
    )
  }
}
