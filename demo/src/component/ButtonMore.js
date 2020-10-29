import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PublicIcon from '@material-ui/icons/Public';

const ButtonMore = (props) => {
    const options = [" Sửa ", "Xóa"];

    const ITEM_HEIGHT = 48;

    // button More
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {/* Check and Render */}
            {
                (() => {
                    switch (props.numberCheck) {
                        case "1":
                            return (
                                <>
                                    <IconButton
                                        aria-label="more"
                                        aria-controls="long-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreHorizIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: "10ch"
                                            }
                                        }}
                                    >
                                        {options.map((option) => (
                                            <MenuItem
                                                key={option}
                                                selected={option === "Pyxis"}
                                                onClick={handleClose}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </>
                            );
                        case "2":
                            return (
                                <>
                                    <IconButton
                                        aria-label="more"
                                        aria-haspopup="true"
                                    >
                                        <PublicIcon />
                                    </IconButton>
                                    <IconButton
                                        aria-label="more"
                                        aria-controls="long-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreHorizIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: "10ch"
                                            }
                                        }}
                                    >
                                        {options.map((option) => (
                                            <MenuItem
                                                key={option}
                                                selected={option === "Pyxis"}
                                                onClick={handleClose}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </>
                            );
                        default:
                            return (
                                alert('Button More : Not numberCheck')
                            );
                    }
                })()
            }
        </>
    )
}

export default ButtonMore;
