import React from 'react'
import BasePage from './base_page'
import ImageBanner from './image_banner'

export default class WorkPage extends BasePage {

  constructor(props) {
    super(props)

    var allCategory = this.props.creative_categories.filter(cate => "全部" === cate.name).pop()
    var id = allCategory === undefined ? allCategory.id : 5

    this.state = {
      filterType: this.props.cate || id,
      projects: null,
      allId: id
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
      return this._renderMenuItem({key: category.id, name: category.name})
    })
    return (
      <div className="project-menu flex-h flex-hc flex-vc">
        {items}
      </div>
    )
  }

  _renderlist() {
    const { projects, creative_categories } = this.props;
    const { filterType, allId } = this.state;
    if (!projects) return null;

    const projectsView = projects.filter(project=> {
      return (filterType == allId) ? true :
        project.creative_category_id == filterType
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

    var category = creative_categories.filter(cate => filterType == cate.id).pop()

    var tag = category === undefined ? "" : category.name
    var src = category === undefined ? "" : category.badge.url
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
