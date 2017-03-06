import React from 'react'
import {
  BrowserRouter,
  Link
} from 'react-router-dom'
import RootRoutes from '../routes/index'


class HomeLayout extends React.Component {
	
	render() {
		return (
		  <div className='home'>
			  <div>
			    <div className='navbar'>
				   <div className='navbar-inner'>
				   	  <div className='container'>
					   	  <div className='col-md-3' style={{height: '60px', background: '#444'}}>
					   	  	<a className='brand' href='#'>
					   	  	  <img src='//o4j806krb.qnssl.com/public/images/cnodejs_light.svg' style={{width:120, height: 70}}/>
					   	  	</a>
					   	  </div>
					   	  <BrowserRouter>
					   	  	<div>
								<ul className='col-md-9' style={{height: '60px', lineHeight: '60px', background: '#444'}}>
						   	  	   <li style={{float: 'right', paddingLeft: '15px', listStyle: 'none'}}><Link to='/'>首页</Link></li>
						   	  	   <li style={{float: 'right', paddingLeft: '15px', listStyle: 'none'}}><Link to='/topics'>app</Link></li>
						   	  	   <li style={{float: 'right', paddingLeft: '15px', listStyle: 'none'}}><a>登录</a></li>
						   	  	</ul>
					   	  		<div className='container'>
	                    			<RootRoutes className='col-md-12'/>
						   		</div>
					   		</div>
						  </BrowserRouter>
				   	  </div>
			 		</div>
				</div>
			  </div>
         </div>
		)
	}
}


export default HomeLayout
