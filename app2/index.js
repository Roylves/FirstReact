import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene, ActionConst } from 'react-native-router-flux';

import Welcome from './welcome';
import Newuser from './newuser/index';
import Newname from './newuser/name';
import Newage from './newuser/age';
import Newemail from './newuser/email';
import Newcareer from './newuser/career';
import Login from './login/index';
import LostPassword from './login/LostPassword';
import LostPasswordSuccess from './login/LostPasswordSuccess';
import Content from './content/index';

import ScarletScreen from './test/ScarletScreen';
import GrayScreen from './test/GrayScreen';
import BlueScreen from './test/BlueScreen';
import MaizeScreen from './test/MaizeScreen';
import GoldScreen from './test/GoldScreen';
import BlackScreen from './test/BlackScreen';
import ModalScreen from './test/ModalScreen';

// For Tab
// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const App = () => {
  return (
    <Router>
      <Scene key="root">

        {/* pages not with tab */}
        {/* Scenes can only change with same level */}
        {/* Level 1 */}

        {/* main */}
        <Scene
          key="welcome"
          component={Welcome}
          hideNavBar
          initial={true}
        />

        {/* Pages route property should be declare here other than push & pop */}
        {/* see type={ActionConst.RESET} */}
        <Scene
          key="newuser"
          component={Newuser}
          hideNavBar
          type={ActionConst.RESET}
        />
        <Scene
          key="newname"
          component={Newname}
          hideNavBar
          type={ActionConst.RESET}
        />
        <Scene
          key="newage"
          component={Newage}
          hideNavBar
          type={ActionConst.RESET}
        />
        <Scene
          key="newemail"
          component={Newemail}
          hideNavBar
          type={ActionConst.RESET}
        />
        <Scene
          key="newcareer"
          component={Newcareer}
          hideNavBar
          type={ActionConst.RESET}
        />

      {/* Login */}
        <Scene
          key="login"
          component={Login}
          hideNavBar
          type={ActionConst.RESET}
        />
        <Scene
          key="lostpassword"
          component={LostPassword}
          title="Reset Password"
          hideNavBar={false}
        />
        <Scene
          key="lostpasswordsuccess"
          component={LostPasswordSuccess}
          hideNavBar
          type={ActionConst.RESET}
        />

        {/* Tab Container */}
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          {/* Level 2 */}
          {/* Tab and it's scenes */}
          {/* Basically, first scene will be default */}
          {/* To set other scene as starter screen/default, add -> initial={true} */}

          {/* Content */}
          <Scene key="content" title="Content" icon={TabIcon}>
          <Scene
            key="content1"
            component={Content}
            title="Content"
          />
          </Scene>

          <Scene key="osu" title="OSU" icon={TabIcon}>
            <Scene
              key="scarlet"
              component={ScarletScreen}
              title="Scarlet"
            />
            <Scene
              key="gray"
              component={GrayScreen}
              title="Gray"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="um" title="UM" icon={TabIcon}>
            <Scene
              key="blue"
              component={BlueScreen}
              title="Blue"
            />
            <Scene
              key="maize"
              component={MaizeScreen}
              title="Maize"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="vu" title="VU" icon={TabIcon}>
            <Scene
              key="gold"
              component={GoldScreen}
              title="Gold"
            />
            <Scene
              key="black"
              component={BlackScreen}
              title="Black"
            />
          </Scene>
        </Scene>
      {/* Level 2 End */}

        <Scene
          key="modal"
          direction="vertical"
          component={ModalScreen}
          title="Modal"
          hideNavBar
        />
        {/* Level 1 End */}

      </Scene>
    </Router>
  );
}

export default App;
