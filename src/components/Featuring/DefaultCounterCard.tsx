import PropTypes from "prop-types";

// react-countup component
import CountUp from "react-countup";
import { Box, Typography } from "@mui/material";

function DefaultCounterCard({ color, count, title, description, ...rest }: any) {
    return (
        <Box p={2} textAlign="center" lineHeight={1}>
            <Typography variant="h3" color={color}>
                <CountUp end={count} duration={1} {...rest} />
            </Typography>
            {title && (
                <Typography variant="h5" mt={2} mb={1}>
                    {title}
                </Typography>
            )}
            {description && (
                <Typography variant="body2" color="text">
                    {description}
                </Typography>
            )}
        </Box>
    );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
    color: "info",
    description: "",
    title: "",
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
    ]),
    count: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default DefaultCounterCard;