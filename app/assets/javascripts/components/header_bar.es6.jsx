class HeaderBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModel: false
    }

    this.menus = [{
      path: '/project',
      name: '工作/work'
    }, {
      path: '/about_us',
      name: '我们/about'
    }, {
      path: '/contact_us',
      name: '联系/contact'
    }]
  }

  _renderModal() {
    const { showModel } = this.state;
    const { path } = this.props;
    if (!showModel) return null;

    var itemsView = [{path: '/', name: "首页"}].concat(this.menus).map((menu, index)=> {
      var color = path.indexOf(menu.path) < 0 ? "#000000" : "#a80309"
      if (index === 0) {
        color = path.length < 2 ? "#a80309" : "#000000"
      }
      return (
        <a key={menu.path} style={{color}} className="menu-item" href={menu.path}>
          <p className="title">{menu.name}</p>
          <div className="line"/>
        </a>
      )
    })

    return (
      <div className="header-modal"  onClick={()=> this.setState({showModel: false})}>
        <div className="content flex-v">
          {itemsView}
        </div>
      </div>
    );
  }

  render () {
    const { showModel } = this.state;
    const { path } = this.props
    const menusView = this.menus.map((menu, index)=> {
      const color = path.indexOf(menu.path) < 0 ? "#000000" : "#a80309"
      return (
        <a key={menu.path} style={{color}} className='menu-item' href={menu.path}>
          {menu.name}
        </a>
      )
    })

    var menuIcon = showModel ? (
      <span className="icon fa fa-close"></span>
    ) : (
      <span className="icon fa fa-bars"></span>
    )
    return (
      <div>
      <div className='top-bar flex-h'>
        <div className='forground'/>
        <div className='menu-content'>
          <a className='nav-logo' href='/' target="_self">
            <img className='nav-logo' src={`/assets/images/logo.png`}/>
          </a>
          <div className='menu-bar'>
            {menusView}
          </div>
          <div className='menu-icon' onClick={()=> this.setState({showModel: !showModel})}>
            {menuIcon}
          </div>
        </div>
      </div>
      {this._renderModal()}
      </div>
    )
  }
}
