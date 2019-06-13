import * as React from "react";
import {compose} from "redux";
import {fade, makeStyles} from "@material-ui/core/styles";
import {AppBar, Button, InputBase, Menu, Toolbar, Typography} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

function GoogleMatNavBar(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className='clearfix'></div>
            <div className="row" style={{marginTop: 10}}>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <AppBar position={"static"}>
                        <Toolbar>
                            <Typography className={classes.title} variant={"h6"} noWrap={true} style={{color: 'white'}}>
                                Dibrugarh University
                            </Typography>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                <InputBase
                                    placeholder={'Search'}
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput
                                    }}
                                    inputProps={{"aria-label": 'Search'}}
                                />
                                <div className={classes.grow}/>
                            </div>
                            <div className={classes.sectionDesktop}>
                                <Button color={"inherit"}>Home</Button>
                                <Button color={"inherit"}>About Us</Button>
                                <Button color={"inherit"}>Administration</Button>
                                <Button color={"inherit"}>School of studies</Button>
                                <Button color={"inherit"}>Academics</Button>
                                <Button color={"inherit"}>Amenities & Infrastructure</Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        </React.Fragment>
    )
}

export default compose<any>()(GoogleMatNavBar)
