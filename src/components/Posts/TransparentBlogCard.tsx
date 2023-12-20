import { Link, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MuiLink from "@mui/material/Link";
import { Box, Typography } from "@mui/material";

function TransparentBlogCard({ image, title, description, action }:any) {
  console.log(action)
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

  const imageTemplate = (
    <Box position="relative" borderRadius="lg">
      <Box
        component="img"
        src={image}
        alt={title}
        borderRadius="lg"
        // shadow="md"
        width="100%"
        position="relative"
        zIndex={1}
      />
      <Box
        borderRadius="lg"
        // shadow="md"
        width="100%"
        height="100%"
        position="absolute"
        left={0}
        top={0}
        sx={{
          backgroundImage: `url(${image})`,
          transform: "scale(0.94)",
          filter: "blur(12px)",
          backgroundSize: "cover",
        }}
      />
    </Box>
  );

  return (
    <Card
      sx={{
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      {action.type === "internal" ? (
        <Link to={action.route}>{imageTemplate}</Link>
      ) : (
        <MuiLink href={action.route} target="_blank" rel="noreferrer">
          {imageTemplate}
        </MuiLink>
      )}
      <Box pt={2} pb={3}>
        {action.type === "internal" ? (
          // <Link to={action.route} sx={cardActionStyles}>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
          // </Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer" sx={cardActionStyles}>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
          </MuiLink>
        )}
        <Typography variant="body2" component="p" color="text" mb={3}>
          {description}
        </Typography>
        {action.type === "internal" ? (
          <Typography
            component={NavLink}
            to={action.route}
            variant="body2"
            fontWeight="regular"
            color={action.color}
            textTransform="capitalize"
            sx={cardActionStyles}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </Typography>
        ) : (
          <Typography
            component={NavLink}
            to={action.route}
            rel="noreferrer"
            variant="body2"
            fontWeight="regular"
            color={action.color}
            textTransform="capitalize"
            sx={cardActionStyles}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </Typography>
        )}
      </Box>
    </Card>
  );
}

// Typechecking props for the TransparentBlogCard
TransparentBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "inherit",
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "text",
    ]).isRequired,
  }).isRequired,
};

export default TransparentBlogCard;