class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className="bottom_info">
          <p className="copyright">{`版权声明  Copyright@ 田子创意${new Date().getFullYear()} 沪ICP备18028749号-1`}</p>
          <div className="gab flex-h flex-hc">
            <a className="gab_link" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202008161">
              <img className="gab_icon" src="/assets/images/ghs.png"/>
              <p className="gab_title">沪公网安备 31011202008161号</p>
            </a >
          </div>
        </div>
      </div>
    )
  }
}
