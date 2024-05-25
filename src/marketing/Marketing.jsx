import * as React from "react";
import { Card, CardContent, Typography, Grid, Box, Chip } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { DataGrid } from "@mui/x-data-grid";
import { Breadcrumbs, Link } from "@mui/material";
import { orange } from "@mui/material/colors";

const socialMediaStats = [
  {
    platform: "Instagram",
    followers: "25K",
    cost: "$1,200",
    engagement: "3.5%",
    posts: "350",
    icon: <InstagramIcon fontSize="large" style={{ color: "#E4405F" }} />,
  },
  {
    platform: "Twitter",
    followers: "15K",
    cost: "$900",
    engagement: "2.5%",
    posts: "420",
    icon: <TwitterIcon fontSize="large" style={{ color: "#1DA1F2" }} />,
  },
  {
    platform: "Facebook",
    followers: "30K",
    cost: "$1,500",
    engagement: "4.0%",
    posts: "280",
    icon: <FacebookIcon fontSize="large" style={{ color: "#3b5998" }} />,
  },
  {
    platform: "YouTube",
    followers: "10K",
    cost: "$700",
    engagement: "5.0%",
    posts: "150",
    icon: <YouTubeIcon fontSize="large" style={{ color: "#FF0000" }} />,
  },
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "platform", headerName: "Platform", width: 150 },
  { field: "newComments", headerName: "New Comments", width: 150 },
  {
    field: "positiveReactions",
    headerName: "Positive Reactions",
    width: 150,
    renderCell: (params) => (
      <Chip
        label={params.value}
        style={{ backgroundColor: "#0288d1", color: "#fff" }}
      />
    ),
  },
  {
    field: "negativeReactions",
    headerName: "Negative Reactions",
    width: 150,
    renderCell: (params) => (
      <Chip
        label={params.value}
        style={{ backgroundColor: "#ed6c02", color: "#fff" }}
      />
    ),
  },
  { field: "subscriptions", headerName: "Subscriptions", width: 150 },
];

const rows = [
  {
    id: 1,
    platform: "Instagram",
    newComments: 50,
    positiveReactions: "80%",
    negativeReactions: "20%",
    subscriptions: "5K",
  },
  {
    id: 2,
    platform: "Twitter",
    newComments: 30,
    positiveReactions: "70%",
    negativeReactions: "30%",
    subscriptions: "3K",
  },
  {
    id: 3,
    platform: "Facebook",
    newComments: 70,
    positiveReactions: "85%",
    negativeReactions: "15%",
    subscriptions: "7K",
  },
  {
    id: 4,
    platform: "YouTube",
    newComments: 40,
    positiveReactions: "90%",
    negativeReactions: "10%",
    subscriptions: "4K",
  },
];

export const Marketing = () => {
  return (
    <Box>
      <Breadcrumbs sx={{ marginLeft: 5, marginBottom: 2 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="textPrimary">Marketing</Typography>
      </Breadcrumbs>
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {socialMediaStats.map((stat, index) => (
          <Grid item xs={2} key={index}>
            <Card sx={{ height: 150 }}>
              <CardContent>
                <Grid container alignItems="center" spacing={5}>
                  <Grid item>{stat.icon}</Grid>
                  <Grid item>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: "18px", fontWeight: 600 }}
                    >
                      {stat.platform}
                    </Typography>
                    <Typography variant="body2">
                      Followers: {stat.followers}
                    </Typography>
                    <Typography variant="body2">Cost: {stat.cost}</Typography>
                    <Typography variant="body2">
                      Engagement: {stat.engagement}
                    </Typography>
                    <Typography variant="body2">Posts: {stat.posts}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ height: 400 }}>
        <DataGrid
          sx={{
            maxWidth: "90%",
            marginLeft: "50px",
            marginTop: "50px",
            padding: 2,
            color: "#5A6A85",
            height: 403,
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 4,
              },
            },
          }}
          pageSizeOptions={[1]}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};
