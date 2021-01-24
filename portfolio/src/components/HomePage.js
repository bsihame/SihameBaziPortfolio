import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import "./HomePage.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function HomePage () {
  const classes = useStyles();

    return (
			<>
				<header id="main-header">
					<div class="row no-gutters">
						<div class="col-lg-4 col-md-5">
							<img alt="Sihame Bazi Profile" src="images/SihameBazi.jpg " />
						</div>
						<div class="col-lg-8 col-md-7">
							<div class="d-flex flex-column">
								<div class="p-5 bg-dark text-white">
									<div class="d-flex flex-row justify-content-between align-items-center">
										<h1 className="display-4">Sihame Bazi</h1>
										<div class="d-none d-md-block">
											<a href="https://github.com/bsihame" class="text-white">
												<i class="fab fa-github"></i>
											</a>
										</div>
										<nav class="ui-nav">
											<div class="ui-left">Sihame Bazi</div>
											<div class="ui-right">Contact Me</div>
										</nav>

										<div>
											<a href="http://sihamebazi.com" class="text-white">
												<i src="images/domain.png"></i>
											</a>
										</div>
									</div>
								</div>
								<div class="d-none d-md-block">
								</div>
								<div>
									<a href="http://sihamebazi.com" class="text-white">
										<i src="images/domain.png" className="logo contactMe"></i>
									</a>
								</div>
						
							</div>
						</div>
					</div>
					<nav class="ui-nav">
						<div class="ui-left">Sihame Bazi</div>
						<div class="ui-center">
							<div class="ui-item">Bio</div>
							<div class="ui-item">Projects</div>
						</div>
						<div class="ui-right">Contact Me</div>
					</nav>

					<div class="app">
						<header class="ui-header">
							<div class="ui-layer l-4"></div>
							<div class="ui-layer l-3"></div>
							<div class="ui-layer l-2"></div>
							<div class="ui-layer l-1"></div>
						</header>

						<main class="ui-content">
							<h1 class="ui-heading">Our Story</h1>

							<div class="ui-figure">
								<div class="ui-photo">
								</div>
							</div>
							<div class="ui-description">
								<p class="ui-paragraph" data-scroll>
									This is start my paragraph
								</p>
								<button class="ui-button" data-scroll>
									Learn More
								</button>
							</div>
						</main>
					</div>
				</header>
			</>
		);
 
}
