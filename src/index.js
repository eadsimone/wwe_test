/**
 * Created by edesimone on 12/12/17.
 */
import _ from 'lodash';
import './scss/main.scss';
import imgLogo from './images/wwen_logo.png';
import imgSummerSlam from './images/summer_slam.png';

function component() {
    var element = document.createElement('div');
    var imageLogo = document.getElementById("wwen_logo");
    var imageSummerSlam = document.getElementById("wwen_summer_slam");
    imageLogo.src = imgLogo;
    imageSummerSlam.src = imgSummerSlam;
}
component();