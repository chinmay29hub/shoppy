import React, ***REMOVED*** Fragment ***REMOVED***from 'react';
import ***REMOVED*** Link, withRouter, forceUpdate ***REMOVED***from 'react-router-dom';
import ***REMOVED*** signout, isAuthenticated ***REMOVED***from '../auth';
import ***REMOVED*** itemTotal ***REMOVED***from './cartHelpers';
import ***REMOVED*** createMuiTheme ***REMOVED***from '@material-ui/core/styles';
import ***REMOVED*** fade, makeStyles, ThemeProvider ***REMOVED***from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StoreIcon from '@material-ui/icons/Store';

const isActive = (history, path) => ***REMOVED***
  if (history.location.pathname === path) ***REMOVED***
    return ***REMOVED*** color: '#ff9900', textDecoration: 'none' };
  ***REMOVED***else ***REMOVED***
    return ***REMOVED*** color: '#ffffff', textDecoration: 'none' };
  }
};

const useStyles = makeStyles((theme) => (***REMOVED***
  grow: ***REMOVED***
    flexGrow: 1,
  },
  menuButton: ***REMOVED***
    marginRight: theme.spacing(2),
  },
  title: ***REMOVED***
    [theme.breakpoints.up('sm')]: ***REMOVED***
      display: 'block',
    },
  },
  search: ***REMOVED***
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': ***REMOVED***
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: ***REMOVED***
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: ***REMOVED***
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: ***REMOVED***
    color: 'inherit',
  },
  inputInput: ***REMOVED***
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + $***REMOVED***theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: ***REMOVED***
      width: '20ch',
    },
  },
  sectionDesktop: ***REMOVED***
    display: 'none',
    [theme.breakpoints.up('md')]: ***REMOVED***
      display: 'flex',
    },
  },
  sectionMobile: ***REMOVED***
    display: 'flex',
    color: "white",
    [theme.breakpoints.up('md')]: ***REMOVED***
      display: 'none',
    },
  },
}));

const MaterialAppBar = (***REMOVED*** history }) => ***REMOVED***
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => ***REMOVED***
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => ***REMOVED***
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => ***REMOVED***
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => ***REMOVED***
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl=***REMOVED***anchorEl}
      anchorOrigin=***REMOVED******REMOVED*** vertical: 'top', horizontal: 'right' }}
      id=***REMOVED***menuId}
      keepMounted
      transformOrigin=***REMOVED******REMOVED*** vertical: 'top', horizontal: 'right' }}
      open=***REMOVED***isMenuOpen}
      onClose=***REMOVED***handleMenuClose}
    >
      <MenuItem onClick=***REMOVED***handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick=***REMOVED***handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl=***REMOVED***mobileMoreAnchorEl}
      anchorOrigin=***REMOVED******REMOVED*** vertical: 'top', horizontal: 'right' }}
      id=***REMOVED***mobileMenuId}
      keepMounted
      transformOrigin=***REMOVED******REMOVED*** vertical: 'top', horizontal: 'right' }}
      open=***REMOVED***isMobileMenuOpen}
      onClose=***REMOVED***handleMobileMenuClose}
    >
      <div style=***REMOVED******REMOVED*** backgroundColor: '#404040' }}>
        <MenuItem>
          <Link style=***REMOVED***isActive(history, '/')***REMOVED***to='/'>
            <IconButton aria-label='Home' color='inherit'>
              <HomeIcon />
            </IconButton>
            Home
          </Link>
        </MenuItem>

        <MenuItem>
          <Link style=***REMOVED***isActive(history, '/shop')***REMOVED***to='/shop'>
            <IconButton aria-label='Shop' color='inherit'>
              <StorefrontIcon />
            </IconButton>
            Shop
          </Link>
        </MenuItem>

        <MenuItem>
          <Link style=***REMOVED***isActive(history, '/cart')***REMOVED***to='/cart'>
            <IconButton aria-label='Cart' color='inherit'>
              <Badge badgeContent=***REMOVED***itemTotal()***REMOVED***color='secondary'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            Cart
          </Link>
        </MenuItem>

        ***REMOVED***isAuthenticated() && isAuthenticated().user.role === 0 && (
          <MenuItem>
            <Link
              style=***REMOVED***isActive(history, '/user/dashboard')}
              to='/user/dashboard'
            >
              <IconButton aria-label='Dashboard' color='inherit'>
                <DashboardIcon />
              </IconButton>
              Dashboard
            </Link>
          </MenuItem>
        )}

        ***REMOVED***isAuthenticated() && isAuthenticated().user.role === 1 && (
          <MenuItem>
            <Link
              style=***REMOVED***isActive(history, '/admin/dashboard')}
              to='/admin/dashboard'
            >
              <IconButton aria-label='Dashboard' color='inherit'>
                <DashboardIcon />
              </IconButton>
              Dashboard
            </Link>
          </MenuItem>
        )}

        ***REMOVED***!isAuthenticated() && (
          <Fragment>
            <MenuItem>
              <Link style=***REMOVED***isActive(history, '/signin')***REMOVED***to='/signin'>
                <IconButton aria-label='Signin' color='inherit'>
                  <AccountCircleIcon />
                </IconButton>
                Signin
              </Link>
            </MenuItem>

            <MenuItem>
              <Link style=***REMOVED***isActive(history, '/signup')***REMOVED***to='/signup'>
                <IconButton aria-label='Signup' color='inherit'>
                  <PersonAddIcon />
                </IconButton>
                Signup
              </Link>
            </MenuItem>
          </Fragment>
        )}

        ***REMOVED***isAuthenticated() && (
          <MenuItem>
            <span
              style=***REMOVED******REMOVED*** cursor: 'pointer', color: '#ffffff' }}
              onClick=***REMOVED***() =>
                signout(() => ***REMOVED***
                  history.push('/');
                })
              }
            >
              <IconButton aria-label='Signout' color='inherit'>
                <ExitToAppIcon />
              </IconButton>
              Signout
            </span>
          </MenuItem>
        )}
      </div>
    </Menu>
  );

  return (
    <div className=***REMOVED***classes.grow}>
      <div position='fixed' style=***REMOVED******REMOVED***
        backgroundColor: "#153462",
        margin: "1.2rem 1.2rem",
        borderRadius: "1rem"
      }}>
        <Toolbar>
          <a href='/' style=***REMOVED******REMOVED*** color: '#ffffff' }}>
            <IconButton
              edge='start'
              className=***REMOVED***classes.menuButton}
              color='inherit'
              aria-label='brand'>
              <StoreIcon />
            </IconButton>
          </a>
          <a href='/' style=***REMOVED******REMOVED***
            color: '#ffffff',
            textDecoration: 'none'
          }}>
            <Typography className=***REMOVED***classes.title***REMOVED***variant='h6' noWrap>
              Shoppy
            </Typography>
          </a>

          <div className=***REMOVED***classes.grow***REMOVED***/>
          <div className=***REMOVED***classes.sectionDesktop}>
            <Link style=***REMOVED***isActive(history, '/')***REMOVED***to='/'>
              <IconButton aria-label='Home' color='inherit'>
                <HomeIcon />
                <Typography noWrap>Home</Typography>
              </IconButton>
            </Link>

            <Link style=***REMOVED***isActive(history, '/shop')***REMOVED***to='/shop'>
              <IconButton aria-label='Shop' color='inherit'>
                <StorefrontIcon />
                <Typography noWrap>Shop</Typography>
              </IconButton>
            </Link>

            <Link style=***REMOVED***isActive(history, '/cart')***REMOVED***to='/cart'>
              <IconButton aria-label='Cart' color='inherit'>
                <Badge badgeContent=***REMOVED***itemTotal()***REMOVED***color='secondary'>
                  <ShoppingCartIcon />
                </Badge>
                <Typography noWrap>Cart</Typography>
              </IconButton>
            </Link>

            ***REMOVED***isAuthenticated() && isAuthenticated().user.role === 0 && (
              <Link
                style=***REMOVED***isActive(history, '/user/dashboard')}
                to='/user/dashboard'
              >
                <IconButton aria-label='Dashboard' color='inherit'>
                  <DashboardIcon />
                  <Typography noWrap>Dashboard</Typography>
                </IconButton>
              </Link>
            )}

            ***REMOVED***isAuthenticated() && isAuthenticated().user.role === 1 && (
              <Link
                style=***REMOVED***isActive(history, '/admin/dashboard')}
                to='/admin/dashboard'
              >
                <IconButton aria-label='Dashboard' color='inherit'>
                  <DashboardIcon />
                  <Typography noWrap>Dashboard</Typography>
                </IconButton>
              </Link>
            )}

            ***REMOVED***!isAuthenticated() && (
              <Fragment>
                <Link style=***REMOVED***isActive(history, '/signin')***REMOVED***to='/signin'>
                  <IconButton aria-label='Signin' color='inherit'>
                    <AccountCircleIcon />
                    <Typography noWrap>Signin</Typography>
                  </IconButton>
                </Link>

                <Link style=***REMOVED***isActive(history, '/signup')***REMOVED***to='/signup'>
                  <IconButton aria-label='Signup' color='inherit'>
                    <PersonAddIcon />
                    <Typography noWrap>Signup</Typography>
                  </IconButton>
                </Link>
              </Fragment>
            )}

            ***REMOVED***isAuthenticated() && (
              <span
                style=***REMOVED******REMOVED*** cursor: 'pointer', color: '#ffffff' }}
                onClick=***REMOVED***() =>
                  signout(() => ***REMOVED***
                    history.push('/');
                  })
                }
              >
                <IconButton aria-label='Signout' color='inherit'>
                  <ExitToAppIcon />
                  <Typography noWrap>Signout</Typography>
                </IconButton>
              </span>
            )}
          </div>
          <div className=***REMOVED***classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls=***REMOVED***mobileMenuId}
              aria-haspopup='true'
              onClick=***REMOVED***handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </div>
      ***REMOVED***renderMobileMenu}
      ***REMOVED***renderMenu}
    </div>
  );
};

export default withRouter(MaterialAppBar);
