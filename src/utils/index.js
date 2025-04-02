import {
  Checkroom,
  DeveloperMode,
  FaceRetouchingNatural,
  FitnessCenter,
  GraphicEq,
  Home,
  LiveTv,
  MusicNote,
  OndemandVideo,
  School,
  SportsEsports,
  TheaterComedy,
} from "@mui/icons-material";
import React from "react";

export const category = [
  { name: "New", icon: React.createElement(Home) },
  { name: "Movie", icon: React.createElement(OndemandVideo) },
  { name: "Live", icon: React.createElement(LiveTv) },
  { name: "Gaming", icon: React.createElement(SportsEsports) },
  { name: "Education", icon: React.createElement(School) },
  { name: "Comedy", icon: React.createElement(TheaterComedy) },
  { name: "Podcast", icon: React.createElement(GraphicEq) },
  { name: "Fashion", icon: React.createElement(Checkroom) },
  { name: "Crypto", icon: React.createElement(DeveloperMode) },
  { name: "Gym", icon: React.createElement(FitnessCenter) },
  { name: "Beauty", icon: React.createElement(FaceRetouchingNatural) },
  { name: "Music", icon: React.createElement(MusicNote) },
];
