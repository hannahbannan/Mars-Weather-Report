{open ?  
    <> 
      <Exit handleClick={handleClick}/>
      <Link to='/report'>
        <h4>WEATHER REPORT</h4>
      </Link>
      <Link to='/season'>
        <h4>MARS SEASONS</h4>
      </Link>
      <Link to='/about'>
        <h4>ABOUT</h4>
      </Link> 
   </> 
   :
     <Hamburger className="hamburger" handleClick={handleClick} /> 
  }