import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";

// icons
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import ModeNightIcon from "@mui/icons-material/ModeNight";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

export const Menu = ({ setDarkMode, darkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Logo>
            <Image src={logo} />
            SanTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon /> Home
        </Item>
        <Item>
          <ExploreIcon /> Explore
        </Item>
        <Item>
          <SubscriptionsIcon /> Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryIcon /> Library
        </Item>
        <Item>
          <HistoryIcon /> History
        </Item>
        <Hr />
        {/* login part */}
        <Login>
          Sign in to like videos, comment and subscribe.
          <Button>
            {" "}
            <AccountCircleIcon /> SIGN IN
          </Button>
        </Login>
        <Hr />
        <Title>BEST OF SANTUBE</Title>
        <Item>
          <LibraryMusicIcon /> Music
        </Item>
        <Item>
          <SportsCricketIcon /> Sports
        </Item>
        <Item>
          <SportsEsportsIcon /> Gaming
        </Item>
        <Item>
          <HighQualityIcon /> Movies
        </Item>
        <Item>
          <NewspaperIcon /> News
        </Item>
        <Item>
          <LiveTvIcon /> Live
        </Item>
        <Hr />
        <Item>
          <SettingsIcon /> Setting
        </Item>
        <Item>
          <FlagIcon /> Report
        </Item>
        <Item>
          <HelpIcon /> Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <ModeNightIcon /> {darkMode ? "Light Mode" : "Dark Mode"}
        </Item>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Image = styled.img`
  height: 35px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
