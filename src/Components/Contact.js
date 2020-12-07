import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;

    }

    return (
      <section id="contact">


         <div className="row">
            
               <div className="widget widget_contact" style={{textAlign:'center'}}>
					   <p className="address">
						   {name}<br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span><br />
                    <a href="mailto:cermakprofessional@gmail.com"><span>{email}</span></a> 
					   </p>
				   </div>

      </div>
   </section>
    );
  }
}

export default Contact;
