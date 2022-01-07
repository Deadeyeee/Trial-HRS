import React from 'react';
import { Logo, Container, MenuItems, Menu, Link } from './styles';
import logo from '../../images/logo.png';
import { Button } from '../button/styles';


export const Nav = (props) => {
  const variants = {
    visible: { y: 0, opacity:1 },
    hidden: { y: -150, opacity: 0 },
  }
  const isHome = props.isHome;
  const isBook = props.isBook;
  const isFacilities = props.isFacilities;
  const isRooms = props.isRooms;
  const isContact = props.isContact;
  const isAbout = props.isAbout;

  if(isHome){
    return (
      <Container
       initial="hidden"
       animate="visible"
       variants={variants}
       transition={{  duration: .8, type: "tween"  }}
      >
           <Menu>
           <Logo src={logo}/>
           <MenuItems><Link active href="/">Home</Link></MenuItems>
           <MenuItems><Link href="/booking">Booking</Link></MenuItems>
           <MenuItems><Link href="/facilitiesAmenities">Facilities & Amenities</Link></MenuItems>
           <MenuItems><Link href="/roomRate">Rooms & Rates</Link></MenuItems>
           <MenuItems><Link href="/contactUs">Contact</Link></MenuItems>
           <MenuItems><Link href="/aboutUs">About Us</Link></MenuItems>
           <Button href="/login"
           w='90px' 
           h='30px'
           style={{ scale: .9}}
           whileHover={{ scale: 1, backgroundColor: "#8F805F",
           border: "1px solid white", rotate: [0, 10, -10, 0, ], }}
           whileTap={{ scale: .7}}
           transition={{ duration: .4 }}
           >Log in</Button>
       </Menu>
       <image src="logo.png"></image>
      </Container>
    )
  }
  else if(isBook){
    return (
      <Container
       initial="hidden"
       animate="visible"
       variants={variants}
       transition={{  duration: .8, type: "tween"  }}
      >
           <Menu>
           <Logo src={logo}/>
           <MenuItems><Link href="/">Home</Link></MenuItems>
           <MenuItems><Link active href="/booking">Booking</Link></MenuItems>
           <MenuItems><Link href="/facilitiesAmenities">Facilities & Amenities</Link></MenuItems>
           <MenuItems><Link href="/roomRate">Rooms & Rates</Link></MenuItems>
           <MenuItems><Link href="/contactUs">Contact</Link></MenuItems>
           <MenuItems><Link href="/aboutUs">About Us</Link></MenuItems>
           <Button href="/login"
           w='90px' 
           h='30px'
           style={{ scale: .9}}
           whileHover={{ scale: 1, backgroundColor: "#8F805F",
           border: "1px solid white", rotate: [0, 10, -10, 0, ], }}
           whileTap={{ scale: .7}}
           transition={{ duration: .4 }}
           >Log in</Button>
       </Menu>
       <image src="logo.png"></image>
      </Container>
    )
  }
  else if(isFacilities){
    return (
      <Container
       initial="hidden"
       animate="visible"
       variants={variants}
       transition={{  duration: .8, type: "tween"  }}
      >
           <Menu>
           <Logo src={logo}/>
           <MenuItems><Link href="/">Home</Link></MenuItems>
           <MenuItems><Link href="/booking">Booking</Link></MenuItems>
           <MenuItems><Link active href="/facilitiesAmenities">Facilities & Amenities</Link></MenuItems>
           <MenuItems><Link href="/roomRate">Rooms & Rates</Link></MenuItems>
           <MenuItems><Link href="/contactUs">Contact</Link></MenuItems>
           <MenuItems><Link href="/aboutUs">About Us</Link></MenuItems>
           <Button href="/login"
           w='90px' 
           h='30px'
           style={{ scale: .9}}
           whileHover={{ scale: 1, backgroundColor: "#8F805F",
           border: "1px solid white", rotate: [0, 10, -10, 0, ], }}
           whileTap={{ scale: .7}}
           transition={{ duration: .4 }}
           >Log in</Button>
       </Menu>
       <image src="logo.png"></image>
      </Container>
    )
  }
  else if (isRooms){
    return (
      <Container
       initial="hidden"
       animate="visible"
       variants={variants}
       transition={{  duration: .8, type: "tween"  }}
      >
           <Menu>
           <Logo src={logo}/>
           <MenuItems><Link href="/">Home</Link></MenuItems>
           <MenuItems><Link href="/booking">Booking</Link></MenuItems>
           <MenuItems><Link href="/facilitiesAmenities">Facilities & Amenities</Link></MenuItems>
           <MenuItems><Link active href="/roomRate">Rooms & Rates</Link></MenuItems>
           <MenuItems><Link href="/contactUs">Contact</Link></MenuItems>
           <MenuItems><Link href="/aboutUs">About Us</Link></MenuItems>
           <Button href="/login"
           w='90px' 
           h='30px'
           style={{ scale: .9}}
           whileHover={{ scale: 1, backgroundColor: "#8F805F",
           border: "1px solid white", rotate: [0, 10, -10, 0, ], }}
           whileTap={{ scale: .7}}
           transition={{ duration: .4 }}
           >Log in</Button>
       </Menu>
       <image src="logo.png"></image>
      </Container>
    )
  }
  else if (isContact){
    return (
      <Container
       initial="hidden"
       animate="visible"
       variants={variants}
       transition={{  duration: .8, type: "tween"  }}
      >
           <Menu>
           <Logo src={logo}/>
           <MenuItems><Link href="/">Home</Link></MenuItems>
           <MenuItems><Link  href="/booking">Booking</Link></MenuItems>
           <MenuItems><Link href="/facilitiesAmenities">Facilities & Amenities</Link></MenuItems>
           <MenuItems><Link href="/roomRate">Rooms & Rates</Link></MenuItems>
           <MenuItems><Link active href="/contactUs">Contact</Link></MenuItems>
           <MenuItems><Link href="/aboutUs">About Us</Link></MenuItems>
           <Button href="/login"
           w='90px' 
           h='30px'
           style={{ scale: .9}}
           whileHover={{ scale: 1, backgroundColor: "#8F805F",
           border: "1px solid white", rotate: [0, 10, -10, 0, ], }}
           whileTap={{ scale: .7}}
           transition={{ duration: .4 }}
           >Log in</Button>
       </Menu>
       <image src="logo.png"></image>
      </Container>
    )
  }
  else if (isAbout){
    return (
      <Container
       initial="hidden"
       animate="visible"
       variants={variants}
       transition={{  duration: .8, type: "tween"  }}
      >
           <Menu>
           <Logo src={logo}/>
           <MenuItems><Link href="/">Home</Link></MenuItems>
           <MenuItems><Link href="/booking">Booking</Link></MenuItems>
           <MenuItems><Link href="/facilitiesAmenities">Facilities & Amenities</Link></MenuItems>
           <MenuItems><Link href="/roomRate">Rooms & Rates</Link></MenuItems>
           <MenuItems><Link href="/contactUs">Contact</Link></MenuItems>
           <MenuItems><Link active href="/aboutUs">About Us</Link></MenuItems>
           <Button href="/login"
           w='90px' 
           h='30px'
           style={{ scale: .9}}
           whileHover={{ scale: 1, backgroundColor: "#8F805F",
           border: "1px solid white", rotate: [0, 10, -10, 0, ], }}
           whileTap={{ scale: .7}}
           transition={{ duration: .4 }}
           >Log in</Button>
       </Menu>
       <image src="logo.png"></image>
      </Container>
    )
  }
  else{
    return (
      <Container
       initial="hidden"
       animate="visible"
       variants={variants}
       transition={{  duration: .8, type: "tween"  }}
      >
           <Menu>
           <Logo src={logo}/>
           <MenuItems><Link href="/">Home</Link></MenuItems>
           <MenuItems><Link href="/booking">Booking</Link></MenuItems>
           <MenuItems><Link href="/facilitiesAmenities">Facilities & Amenities</Link></MenuItems>
           <MenuItems><Link href="/roomRate">Rooms & Rates</Link></MenuItems>
           <MenuItems><Link href="/contactUs">Contact</Link></MenuItems>
           <MenuItems><Link href="/aboutUs">About Us</Link></MenuItems>
           <Button href="/login"
           w='90px' 
           h='30px'
           style={{ scale: .9}}
           whileHover={{ scale: 1, backgroundColor: "#8F805F",
           border: "1px solid white", rotate: [0, 10, -10, 0, ], }}
           whileTap={{ scale: .7}}
           transition={{ duration: .4 }}
           >Log in</Button>
       </Menu>
       <image src="logo.png"></image>
      </Container>
    )
  }
    
}

export default Nav