class WorkPage extends BasePage {

  constructor(props) {
    super(props)

    this.state = {
      filterType: this.props.cate || 1,
      projects: null
    }
  }

  _path() {
    return "/project"
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
    const items = creative_categories.map(category=> {
      return this._renderMenuItem({key: category.position, name: category.name})
    })
    return (
      <div className="project-menu flex-h flex-hc flex-vc">
        {items}
      </div>
    )
  }

  _renderlist() {
    const { projects, creative_categories } = this.props;
    const { filterType } = this.state;
    if (!projects) return null;

    const projectsView = projects.filter(project=> {
      return (filterType === 1) ? true :
        project.creative_category_id == creative_categories[filterType-1].id
    }).map((project, index)=> {
      return (
        <a href={`/project/${project.id}`} key={index}>
          <div id="project-item"
            className="flex-v flex-vc flex-hc"
            key={project.id}>
            <img src={project.logo.url} />
            <p>{project.name}</p>
          </div>
        </a>
      )
    })

    var count = projectsView.length > 6 ? (3 - projectsView.length%3)%3 : 9 - projectsView.length
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

  _renderBanner() {
    const { filterType } = this.state;
    const { creative_categories } = this.props

    var tag = creative_categories[filterType-1].name
    var src = creative_categories[filterType-1].badge.url
    return (
      <ImageBanner tag={tag} src={src} />
    )
  }

  _render() {
    return (
      <div className="project flex-v">
        {this._renderBanner()}
        {this._renderMenu()}
        {this._renderlist()}
      </div>
    )
  }
}
