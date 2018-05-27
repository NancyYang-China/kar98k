class WorkPage extends BasePage {

  constructor(props) {
    super(props)

    this.state = {
      filterType: this.props.cate || -1,
      projects: null
    }
  }

  _path() {
    return "/works"
  }

  _renderMenuItem(item) {
    const color = item.key == this.state.filterType ? "#a80309" : "#000000"

    return (
      <a className="menu-item" key={item.key} style={{color}}
        onClick={()=> {
          this.setState({filterType: item.key})
        }}>
        {item.name}
      </a>
    );
  }

  _renderMenu() {
    const { creative_categories } = this.props
    const items = [{id: -1, name: "全部"}].concat(creative_categories).map(category=> {
      return this._renderMenuItem({key: category.id, name: category.name})
    })
    // items.splice(0, 0, this._renderMenuItem({key: -1, name: "全部"}))
    return (
      <div className="project-menu flex-h flex-hc flex-vc">
        {items}
      </div>
    )
  }

  _renderlist() {
    const { projects } = this.props;
    const { filterType } = this.state;
    if (!projects) return null;

    const projectsView = projects.filter(project=> {
      return (filterType === -1) ? true :
        project.creative_category_id == filterType
    }).map(project=> {
      return (
        <div id="project-item" className="flex-h flex-vc flex-hc" key={project.id} onClick={()=> this.setState({project})}>
          <img src={project.logo.url} />
          <p>{project.description}</p>
        </div>
      )
    })

    var count = projectsView.length > 8 ? (4 - projectsView.length%4)%4 : 12 - projectsView.length
    for(var i = 0; i < count; i++){
      projectsView.push(
        <div key={`others-${i}`} className="empty-item" />
      )
    }

    return (
      <div className="list flex-h flex-vw flex-hc">
        {projectsView}
      </div>
    )
  }

  _renderModal() {
    const { project } = this.state;
    if (!project) return null;
    return (
      <div id="projectModal" className="modal" style={{display: project ? "block" : "none"}}
           onClick={()=> this.setState({project: null})}>
        <div className="modal-content">
          <span className="close">&times;</span>
          <div className="project-view flex-v flex-vc">
            <a className="flex-h flex-hc flex-vc" href={project.description} target="_blank">
              <img src={project.logo.url}/>
            </a>
            <div className="title-bar flex-h">
              <p className="title">{project.name}</p>
              <div className="horizontal-divider-in" />
              <div className="web-bar flex-h flex-vc">
                <p className="pre-web">点击了解更多详情</p>
                <a href={project.description} target="_blank" className="website">{project.description}</a>
              </div>
            </div>
            <div className="horizontal-divider" />
            <p className="content">{project.description}</p>
          </div>
        </div>
      </div>
    );
  }

  _render() {
    return (
      <div className="project flex-v">
        <ImageBanner tag="ALL PROJECTS" src="assets/images/project_badge.jpeg" />
        {this._renderMenu()}
        {this._renderlist()}
        {this._renderModal()}
      </div>
    )
  }
}
