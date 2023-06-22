import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        to="https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.instagram.com/soupoesiaworld/&ved=2ahUKEwjs4ruGrsP_AhUdqpUCHe2QAEoQFnoECA4QAQ&usg=AOvVaw2AgWKuzy_XYfMyu_x2pY1g"
      >
        ArtisticSight
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
    
  );
}

export default Copyright;
