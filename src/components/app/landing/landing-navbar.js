"use strict";

import { Component, WebComponent } from '#WebComponent';

import { TrBtn, BgBtn, LgBtn, MainTitle } from '#common';

export default Component(
{
    tagName: 'landing-navbar',
},

class LandingNavBar extends WebComponent {
    render() {
        const style = this.getAttribute('style') || '';

        return `
        <nav class="row d-flex flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row align-items-center" style="${style}">
            
            <div class="col-12 col-lg-5 p-0 mb-lg-0 mb-5">
                <main-title> Transcendence </main-title>
            </div>
            <div class="col-12 col-lg-7 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-sm-0 gap-4">
                <tr-btn>Play a game</tr-btn>
                <tr-btn>Tourneys</tr-btn>
                <bg-btn style="height:50px;width:150px;">Log in</bg-btn>
            </div>
            <!--<div class="col-12 d-flex justify-content-end mt-5">
                <lg-btn>English</lg-btn>
            </div>-->
        </nav>
        `;
    }
});