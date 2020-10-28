import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Link } from 'react-router-dom';
// import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import Search from './Search';
import { useStateValue } from './StateProvider';






function Searchpage(props) {
  
  const [{ term }, dispath] = useStateValue();
  // const { data } = useGoogleSearch(term);
  
  const data = Response;

  console.log(data)

  return (
    <div className="searchPage">
      
      <div className="searchPage__header">
        
        {/* <h1>{term}</h1> */}

        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="" />
        </Link>

        <div className="searchPage__headerBody">
          
          <Search hideButtons />
          
          <div className="searchPage__options">
            
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/all">shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/all">maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/all">more</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/all">Setting</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/all">Tools</Link>
              </div>
            </div>
          </div>
          

        </div>

      </div>

      <div className="searchPage__results">
        
      </div>
      
    </div>
  )
}

export default Searchpage