import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import { Box, CardMedia, Typography } from "@mui/material";

function BackgroundBlogCard({ image, title, description, action }: any) {
    const cardActionStyles = {
        display: "flex",
        alignItems: "center",
        width: "max-content",

        "& .material-icons, .material-icons-round,": {
            transform: `translateX(2px)`,
            transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
        },

        "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
        {
            transform: `translateX(6px)`,
        },
    };

    return (
        <Card
            sx={{
                backgroundSize: "cover",
            }}
            
        >
            <CardMedia image={image}>
            <Box p={3} >
                <Box minHeight="20.625rem" my="auto" py={3}>
                    <Typography
                        variant="h4"
                        color="white"
                        mb={1}
                    >
                        {title}
                    </Typography>
                    <Typography variant="body2" color="white" my={3}>
                        {description}
                    </Typography>
                    {action.type === "internal" ? (
                        <Typography
                            component={Link}
                            to={action.route}
                            variant="body2"
                            fontWeight="regular"
                            color="white"
                            textTransform="capitalize"
                            sx={cardActionStyles}
                        >
                            {action.label}
                            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                        </Typography>
                    ) : (
                        <Typography
                            component={MuiLink}
                            href={action.route}
                            target="_blank"
                            rel="noreferrer"
                            variant="body2"
                            fontWeight="regular"
                            color="white"
                            textTransform="capitalize"
                            sx={cardActionStyles}
                        >
                            {action.label}
                            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                        </Typography>
                    )}
                </Box>
            </Box>
            </CardMedia>
        </Card>
    );
}

// Typechecking props for the BackgroundBlogCard
BackgroundBlogCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    action: PropTypes.shape({
        type: PropTypes.oneOf(["external", "internal"]).isRequired,
        route: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }).isRequired,
};

export default BackgroundBlogCard;