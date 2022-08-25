import { Avatar, Card, CardContent, CardHeader, Checkbox, IconButton, Tooltip, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import UserContext from "./UserContext";
import { useContext } from "react";
import UserModal from "./UserModal";
import Favorite from "@mui/icons-material/Favorite"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import ThumbDownIcon from "@mui/icons-material/ThumbDown"
import ThumbDownOutLinedIcon from "@mui/icons-material/ThumbDownOutlined"
const UserCard = ({ customer }) => {

    const { deleteCustomer } = useContext(UserContext)

    const stringAvatar = (name) => {
        return {
            children: `${name.split(' ')[0][0]}`,
        }
    }
    return (
        <Card key={customer.id}>
            <Avatar {...stringAvatar(customer.name)} sx={{ bgcolor: "green" }} style={{ marginTop: "20px", marginLeft: "15px" }} />
            <CardHeader
                title={customer.name}
                action={
                    <Tooltip title="Delete User" placement="top">
                        <IconButton onClick={() => deleteCustomer(customer.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                }
            />

            <CardContent>
                <Typography paragraph align="justify">
                    {customer.details}
                </Typography>
                <UserModal customer={customer} />
                <Checkbox
                    icon={<FavoriteBorder/>}
                    checkedIcon={<Favorite sx={{color: "red"}}/>}

                />
                <Checkbox
                    icon={<ThumbDownOutLinedIcon/>}
                    checkedIcon={<ThumbDownIcon sx={{color: "blue"}}/>}
                />
            </CardContent>
        </Card>
    );
}

export default UserCard;