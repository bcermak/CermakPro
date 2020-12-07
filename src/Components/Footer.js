import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              <a ref='https://www.github.com/bcermak' target="_blank" className="fa fa-github" style={{marginRight: 10}}></a>
              <a href='https://www.linkedin.com/in/brandon-cermak-ab4219121/' target="_blank" className="fa fa-linkedin" style={{marginRight: 10}}></a>
              <a href='https://drive.google.com/file/d/1UXcb3RkGwaURCepCkIGigpU1LpcrtxOR/view?usp=sharing' target="_blank" className="fab fa-google-drive"></a>
           </ul>

           <ul className="copyright">
              <li>&copy; CermakPro</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
